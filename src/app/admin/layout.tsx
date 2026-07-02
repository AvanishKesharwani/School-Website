"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, LogOut, ArrowLeft, MessageSquare, Bell } from "lucide-react";
import { getMessageIds } from "@/app/actions/messages";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (pathname === "/admin/signin") return;

    const checkUnreadMessages = async () => {
      try {
        const ids = await getMessageIds();
        const savedReadIds = localStorage.getItem("mps_read_messages");
        let readIds: string[] = [];
        if (savedReadIds) {
          try {
            readIds = JSON.parse(savedReadIds);
          } catch (e) {
            console.error("Error parsing read messages:", e);
          }
        }

        if (pathname === "/admin/messages") {
          // Mark all current messages as read
          localStorage.setItem("mps_read_messages", JSON.stringify(ids));
          setUnreadCount(0);
        } else {
          const unread = ids.filter((id) => !readIds.includes(id));
          setUnreadCount(unread.length);
        }
      } catch (e) {
        console.error("Failed to check unread messages:", e);
      }
    };

    checkUnreadMessages();
  }, [pathname]);

  if (pathname === "/admin/signin") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Media", href: "/admin/media", icon: ImageIcon },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F2747] text-white flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold tracking-tight">Admin Portal</h2>
          <p className="text-white/60 text-sm mt-1">Manka Public School</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#E85D22] text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
                {item.name === "Messages" && unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-5 h-5 flex items-center justify-center shadow-sm">
                    {unreadCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/?edit=true"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Website</span>
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
