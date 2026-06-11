"use client";

import { useState, useEffect } from "react";
import { useEditMode } from "./EditModeProvider";
import { saveTextDraft } from "@/lib/visual-cms-actions";
import { Image as ImageIcon, Check, X, Loader2 } from "lucide-react";

interface EditableImageProps {
  sectionSlug: string;
  field: string;
  initialSrc: string;
  src?: string;
  alt: string;
  className?: string;
}

import { createPortal } from "react-dom";

export default function EditableImage({ 
  sectionSlug, 
  field, 
  initialSrc, 
  alt,
  className = ""
}: EditableImageProps) {
  const { isEditMode, incrementUnpublishedChanges } = useEditMode();
  
  const [isEditing, setIsEditing] = useState(false);
  const [src, setSrc] = useState(initialSrc);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setSrc(initialSrc);
    setMounted(true);
  }, [initialSrc]);

  if (!isEditMode) {
    return <img src={src} alt={alt} className={className} />;
  }

  const handleSave = async () => {
    if (src === initialSrc) {
      setIsEditing(false);
      return;
    }
    
    setIsSaving(true);
    const res = await saveTextDraft(sectionSlug, field, src);
    setIsSaving(false);
    
    if (res.success) {
      setIsEditing(false);
      incrementUnpublishedChanges();
    } else {
      alert("Failed to save image draft");
    }
  };

  const handleCancel = () => {
    setSrc(initialSrc);
    setIsEditing(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    
    // Dynamically import to avoid client/server issues
    const { uploadImageToSupabase } = await import("@/lib/visual-cms-actions");
    const res = await uploadImageToSupabase(formData);
    
    setIsUploading(false);
    
    if (res.success && res.url) {
      setSrc(res.url);
    } else {
      alert("Upload failed: " + (res.error || "Unknown error"));
    }
  };

  const renderModal = () => {
    if (!isEditing || !mounted) return null;
    return createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleCancel}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative" onClick={e => e.stopPropagation()}>
          <h4 className="text-lg font-bold text-[#0F2747] mb-4">Replace Image</h4>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload from Computer</label>
            <div className="relative">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading || isSaving}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className={`w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-center transition-colors ${isUploading ? 'bg-gray-50' : 'hover:border-[#E85D22] hover:bg-orange-50'}`}>
                {isUploading ? <span className="text-gray-500 flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin"/> Uploading...</span> : <span className="text-gray-600 font-medium">Click to browse files</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">OR</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
          <input 
            type="url" 
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E85D22] mb-6"
            placeholder="https://..."
          />

          <div className="flex gap-3">
            <button 
              onClick={handleCancel}
              disabled={isSaving || isUploading}
              className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving || isUploading}
              className="flex-1 px-4 py-2 bg-[#E85D22] hover:bg-[#D94F16] text-white rounded-lg font-semibold transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
              Save
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className={`relative group/edit inline-block ${className}`}>
      <img src={src} alt={alt} className={`w-full h-full object-cover transition-all ${isEditing ? 'opacity-50 blur-sm' : ''}`} />
      
      {!isEditing && (
        <div 
          onClick={() => setIsEditing(true)}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover/edit:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm z-10"
        >
          <div className="bg-white text-[#0F2747] px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-2xl transform scale-90 group-hover/edit:scale-100 transition-transform">
            <ImageIcon className="w-5 h-5" /> Replace Image
          </div>
        </div>
      )}
      {renderModal()}
    </div>
  );
}
