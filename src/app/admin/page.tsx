import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { FileText, Users, Activity, Eye } from "lucide-react";

export default async function AdminDashboard() {
  const session = await auth();
  
  if (!session) {
    return null; // Middleware will catch this anyway, but type safety
  }

  const useDatabase = process.env.USE_DATABASE === "true";

  let usersCount = 1;
  let logs: any[] = [];

  if (useDatabase) {
    try {
      usersCount = await prisma.adminUser.count();
      logs = await prisma.auditLog.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { admin: true }
      });
    } catch (e) {
      console.error("Dashboard database fetch failed:", e);
    }
  } else {
    // Mock Data for Dashboard
    usersCount = 42;
    logs = [
      { id: "1", action: "UPDATE_SECTION", details: "Updated content for section: Homepage Hero (homepage-hero)", createdAt: new Date().toISOString(), user: { name: "System Admin" } },
      { id: "2", action: "PUBLISHED_NOTICES", details: "Published 3 new notices", createdAt: new Date(Date.now() - 3600000).toISOString(), user: { name: "Content Manager" } },
      { id: "3", action: "LOGIN", details: "Successful login from new IP", createdAt: new Date(Date.now() - 7200000).toISOString(), user: { name: "System Admin" } },
    ];
  }

  const stats = [
    { title: "Total Users", value: usersCount, icon: Users, color: "bg-blue-500" },
    { title: "Editable Sections", value: 12, icon: FileText, color: "bg-[#E85D22]" }, 
    { title: "Recent Edits", value: logs.length, icon: Activity, color: "bg-green-500" },
    { title: "Public Views", value: "1.2k", icon: Eye, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0F2747]">Welcome back, {session.user?.name || "Admin"}</h1>
        <p className="text-gray-500 mt-2">Here is what's happening with your school website today.</p>
        {!useDatabase && (
          <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-lg font-medium border border-yellow-200">
            ⚠️ Running in Mock Database Mode. Changes will not be permanently saved.
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`${stat.color} p-4 rounded-xl text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-[#0F2747]">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#0F2747]">Recent Audit Logs</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {logs.length > 0 ? logs.map((log) => (
            <div key={log.id} className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {log.admin?.username?.charAt(0) || "A"}
              </div>
              <div>
                <p className="text-sm text-gray-900 font-medium">
                  <span className="font-bold">{log.admin?.username || log.admin?.email || "System"}</span> {log.action}
                </p>
                {log.details && <p className="text-xs text-gray-500 mt-0.5">{log.details}</p>}
                <p className="text-xs text-gray-400 mt-1">{new Date(log.createdAt).toLocaleString()}</p>
              </div>
            </div>
          )) : (
            <div className="p-6 text-center text-gray-500">No recent activity.</div>
          )}
        </div>
      </div>
    </div>
  );
}
