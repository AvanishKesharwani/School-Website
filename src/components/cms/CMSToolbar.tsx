"use client";

import { useEditMode } from "./EditModeProvider";
import { publishAllDrafts } from "@/lib/visual-cms-actions";
import { useState } from "react";
import { PenTool, Eye, UploadCloud, Loader2, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CMSToolbar() {
  const { isEditMode, toggleEditMode, unpublishedChangesCount, clearUnpublishedChanges } = useEditMode();
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();

  const handlePublish = async () => {
    if (unpublishedChangesCount === 0) return;
    
    setIsPublishing(true);
    const res = await publishAllDrafts();
    setIsPublishing(false);
    
    if (res.success) {
      clearUnpublishedChanges();
      router.refresh();
      alert("Changes published successfully!");
    } else {
      alert(res.error || "Failed to publish changes");
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-[#0F2747] text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-3 pr-4 border-r border-white/20">
        <div className="w-8 h-8 bg-[#E85D22] rounded-full flex items-center justify-center">
          <PenTool className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/70">Visual CMS</p>
          <p className="text-sm font-medium">Admin Mode</p>
        </div>
      </div>

      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
          isEditMode ? "bg-white text-[#0F2747]" : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        {isEditMode ? <Eye className="w-4 h-4" /> : <PenTool className="w-4 h-4" />}
        {isEditMode ? "View Mode" : "Edit Mode"}
      </button>

      {isEditMode && (
        <button
          onClick={handlePublish}
          disabled={isPublishing || unpublishedChangesCount === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
            unpublishedChangesCount > 0 
              ? "bg-[#E85D22] hover:bg-[#D94F16] text-white shadow-lg shadow-[#E85D22]/20" 
              : "bg-white/5 text-white/30 cursor-not-allowed"
          }`}
        >
          {isPublishing ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
          {isPublishing ? "Publishing..." : `Publish ${unpublishedChangesCount > 0 ? `(${unpublishedChangesCount})` : ''}`}
        </button>
      )}

      {unpublishedChangesCount > 0 && !isPublishing && (
        <button 
          onClick={() => router.refresh()}
          className="p-2 text-white/50 hover:text-white transition-colors"
          title="Refresh preview"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
