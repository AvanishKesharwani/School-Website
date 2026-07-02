"use client";

import { useState, useEffect } from "react";
import { getMessages, deleteMessage, ContactMessageData } from "@/app/actions/messages";
import { Trash2, Loader2, Mail, Calendar, MessageSquare } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (err) {
      console.error("Error loading messages:", err);
      setError("Failed to load messages.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    // Optimistic Update: instantly filter the message out of the UI
    const previousMessages = [...messages];
    setMessages((prev) => prev.filter((m) => m.id !== id));

    try {
      const result = await deleteMessage(id);
      if (!result.success) {
        // Rollback on error
        setMessages(previousMessages);
        alert(result.error || "Failed to delete message. Please try again.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setMessages(previousMessages);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-150 pb-4">
        <h1 className="text-3xl font-bold text-[#0F2747]">Contact Messages & Inquiries</h1>
        <button
          onClick={fetchMessages}
          className="text-sm font-semibold text-[#E85D22] hover:text-[#d04c13] transition-colors cursor-pointer"
        >
          Refresh List
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin text-[#E85D22] mb-3" />
            <p className="text-sm font-medium">Loading messages...</p>
          </div>
        ) : error ? (
          <div className="p-16 text-center text-red-650 font-medium">
            {error}
          </div>
        ) : messages.length === 0 ? (
          <div className="p-16 text-center text-gray-500 font-medium flex flex-col items-center justify-center gap-3">
            <MessageSquare className="w-12 h-12 text-gray-300" />
            <p className="text-base">No messages found yet.</p>
            <p className="text-xs text-gray-400">When users submit the contact form, they will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs border-b border-gray-100 uppercase tracking-wider">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Contact Info</th>
                  <th className="p-4 font-semibold">Subject</th>
                  <th className="p-4 font-semibold">Message</th>
                  <th className="p-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors align-top">
                    <td className="p-4 text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {new Date(msg.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="p-4 font-bold text-brand-navy whitespace-nowrap">
                      {msg.firstName} {msg.lastName}
                    </td>
                    <td className="p-4 text-gray-600">
                      <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-blue-500" />
                        {msg.email}
                      </a>
                    </td>
                    <td className="p-4 text-gray-900 font-bold whitespace-nowrap">
                      <span className="bg-brand-yellow/20 text-brand-navy px-3 py-1 rounded-full text-xs font-bold">
                        {msg.subject}
                      </span>
                    </td>
                    <td className="p-4 text-gray-700 min-w-[300px] max-w-xl">
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="bg-red-500 hover:bg-red-650 text-white font-bold px-3 py-2 rounded-xl transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-1 cursor-pointer text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
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
