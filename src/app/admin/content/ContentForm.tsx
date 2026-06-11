"use client";

import { useState } from "react";
import { updateSectionContent } from "@/lib/cms-actions";
import { Save, Loader2 } from "lucide-react";

export default function ContentForm({ 
  initialTitle, 
  initialSubtitle 
}: { 
  initialTitle: string, 
  initialSubtitle: string 
}) {
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSubtitle);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string, type: "success" | "error" } | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    const content = JSON.stringify({ title, subtitle });
    
    try {
      const result = await updateSectionContent("homepage-hero", "Homepage Hero", content);
      if (result.success) {
        setMessage({ text: "Homepage Hero content updated successfully!", type: "success" });
      } else {
        setMessage({ text: result.error || "Failed to update content.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "An unexpected error occurred.", type: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
      {message && (
        <div className={`p-4 rounded-xl border ${message.type === "success" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}`}>
          {message.text}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#0F2747]">Hero Title (HTML supported)</label>
        <textarea 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          rows={3}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E85D22] focus:border-transparent transition-all"
        />
        <p className="text-xs text-gray-500">Use &lt;br /&gt; for line breaks.</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#0F2747]">Hero Subtitle</label>
        <textarea 
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          rows={3}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E85D22] focus:border-transparent transition-all"
        />
      </div>

      <button 
        type="submit"
        disabled={isSaving}
        className="bg-[#E85D22] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#D94F16] transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSaving ? "Saving..." : "Save Changes"}
        {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
      </button>
    </form>
  );
}
