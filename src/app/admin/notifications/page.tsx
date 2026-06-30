"use client";

import { useState, useEffect } from "react";
import { getAllAdminNotices, createNotification, deleteNotification, publishNotification, NoticeData } from "@/app/actions/notifications";
import { Bell, Trash2, Calendar, Megaphone, Loader2, Send } from "lucide-react";

export default function NotificationsAdminPage() {
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form fields
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchNotices = async () => {
    setIsLoading(true);
    try {
      const data = await getAllAdminNotices();
      setNotices(data);
    } catch (err) {
      console.error("Error loading notices:", err);
      setError("Failed to load notifications.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and Content are required.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("content", content.trim());
      formData.append("isDraft", isDraft ? "true" : "false");

      const result = await createNotification(null, formData);
      if (result.success) {
        setSuccess(`Notification successfully ${isDraft ? "saved as draft" : "published"}!`);
        setTitle("");
        setContent("");
        setIsDraft(false);
        await fetchNotices();
      } else {
        setError(result.error || "Failed to create notification.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this notification?")) return;

    setError(null);
    setSuccess(null);

    try {
      const result = await deleteNotification(id);
      if (result.success) {
        setSuccess("Notification deleted successfully.");
        await fetchNotices();
      } else {
        setError(result.error || "Failed to delete notification.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setError("An unexpected error occurred.");
    }
  };

  const handlePublish = async (id: string) => {
    setError(null);
    setSuccess(null);

    try {
      const result = await publishNotification(id);
      if (result.success) {
        setSuccess("Notification published successfully.");
        await fetchNotices();
      } else {
        setError(result.error || "Failed to publish notification.");
      }
    } catch (err) {
      console.error("Publish error:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 min-h-[600px] border border-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F2747] flex items-center gap-3">
            <Bell className="w-8 h-8 text-[#E85D22]" />
            Notifications & Announcements
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Create, publish, and manage notifications that appear in the website navigation bar.
          </p>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-150">
          ❌ {error}
        </div>
      )}
      {success && (
        <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-xl border border-emerald-150">
          ✅ {success}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Create Notification Form */}
        <div className="lg:col-span-5 bg-gray-50/60 border border-gray-150 p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-[#0F2747] mb-6 flex items-center gap-2 pb-3 border-b border-gray-200">
            <Megaphone className="w-5 h-5 text-[#E85D22]" />
            Create Notification
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-1.5">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. PTM for Grades 6-12"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E85D22]/20 focus:border-[#E85D22] text-sm text-[#0f2747] placeholder-gray-400 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-bold text-gray-700 mb-1.5">
                Message Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write the detailed message announcement here..."
                rows={5}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E85D22]/20 focus:border-[#E85D22] text-sm text-[#0f2747] placeholder-gray-400 outline-none transition-all resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Publishing Status
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 flex-1">
                  <input
                    type="radio"
                    checked={!isDraft}
                    onChange={() => setIsDraft(false)}
                    className="text-[#E85D22] focus:ring-[#E85D22]"
                  />
                  <span className="text-sm font-medium text-gray-700">Publish Now</span>
                </label>
                <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white cursor-pointer hover:bg-gray-50 flex-1">
                  <input
                    type="radio"
                    checked={isDraft}
                    onChange={() => setIsDraft(true)}
                    className="text-[#E85D22] focus:ring-[#E85D22]"
                  />
                  <span className="text-sm font-medium text-gray-700">Save as Draft</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#E85D22] text-white hover:bg-[#d04c13] font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Notice...
                </>
              ) : (
                isDraft ? "Save Notification Draft" : "Publish Notification"
              )}
            </button>
          </form>
        </div>

        {/* Right: Notices List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-250 pb-3">
            <h2 className="text-lg font-bold text-[#0F2747]">
              Current Notifications ({notices.length})
            </h2>
            <button 
              onClick={fetchNotices}
              className="text-xs font-semibold text-[#E85D22] hover:text-[#d04c13]"
            >
              Refresh List
            </button>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Loader2 className="w-10 h-10 animate-spin text-[#E85D22] mb-3" />
              <p className="text-sm">Loading notices...</p>
            </div>
          ) : notices.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400">
              <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium text-gray-500">No Notifications Found</p>
              <p className="text-xs mt-1 text-gray-400">Create your first announcement using the form on the left.</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[550px] overflow-y-auto pr-1">
              {notices.map((notice) => (
                <div 
                  key={notice.id} 
                  className={`p-5 rounded-2xl border transition-all duration-200 relative group flex justify-between gap-4 items-start ${
                    notice.isDraft 
                      ? "bg-gray-50 border-gray-200" 
                      : "bg-white border-[#F0F5FA] shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        notice.isDraft 
                          ? "bg-gray-200 text-gray-600" 
                          : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {notice.isDraft ? "Draft" : "Published"}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(notice.date).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F2747]">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {notice.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {notice.isDraft && (
                      <button
                        onClick={() => handlePublish(notice.id)}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1 hover:scale-105 active:scale-95 cursor-pointer"
                        title="Publish Announcement"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Publish
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(notice.id)}
                      className="p-2 text-gray-400 hover:text-red-650 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Notice"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
