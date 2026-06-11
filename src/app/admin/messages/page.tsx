import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Messages | Admin",
};

export default async function MessagesPage() {
  const session = await auth();
  if (!session) {
    redirect("/admin/signin");
  }

  async function deleteMessage(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    if (!id) return;
    try {
      await prisma.contactMessage.delete({ where: { id } });
      revalidatePath("/admin/messages");
    } catch (e) {
      console.error(e);
    }
  }

  let messages: any[] = [];
  try {
    messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    console.error("Failed to fetch messages", e);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#0F2747]">Contact Messages & Inquiries</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-8 text-center text-gray-500 font-medium text-lg">
            No messages found yet. When users submit the contact form, they will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100 uppercase tracking-wider">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Contact Info</th>
                  <th className="p-4 font-semibold">Subject</th>
                  <th className="p-4 font-semibold">Message</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors align-top">
                    <td className="p-4 text-gray-500 whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      {msg.firstName} {msg.lastName}
                    </td>
                    <td className="p-4 text-gray-600">
                      <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline font-medium">
                        {msg.email}
                      </a>
                    </td>
                    <td className="p-4 text-gray-900 font-bold whitespace-nowrap">
                      <span className="bg-brand-yellow/20 text-brand-navy px-3 py-1 rounded-full text-xs">
                        {msg.subject}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700 min-w-[300px] max-w-xl">
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                    </td>
                    <td className="p-4 text-right">
                      <form action={deleteMessage}>
                        <input type="hidden" name="id" value={msg.id} />
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm hover:shadow-md">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
