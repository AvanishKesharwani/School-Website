"use client";

import { useState, useRef, useEffect } from "react";
import { useEditMode } from "./EditModeProvider";
import { saveTextDraft } from "@/lib/visual-cms-actions";
import { Edit2, Check, X, Loader2 } from "lucide-react";

interface EditableTextProps {
  sectionSlug: string;
  field: string;
  initialValue: string;
  as?: any;
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
}

export default function EditableText({ 
  sectionSlug, 
  field, 
  initialValue, 
  as: Component = "span", 
  className = "",
  style = {},
  multiline = false
}: EditableTextProps) {
  const { isEditMode, incrementUnpublishedChanges } = useEditMode();
  
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue || "");
  const [isSaving, setIsSaving] = useState(false);
  
  // Keep local state in sync if initialValue changes (e.g. after publish)
  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  if (!isEditMode) {
    if (Component === "span" || Component === "div" || Component === "p" || Component === "h1" || Component === "h2" || Component === "h3") {
        const SafeComponent = Component === "p" ? "div" : Component;
        return <SafeComponent className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />;
    }
    return <Component className={className} style={style}>{value}</Component>;
  }

  const handleSave = async () => {
    if (value === initialValue) {
      setIsEditing(false);
      return;
    }
    
    setIsSaving(true);
    const res = await saveTextDraft(sectionSlug, field, value);
    setIsSaving(false);
    
    if (res.success) {
      setIsEditing(false);
      incrementUnpublishedChanges();
    } else {
      alert("Failed to save draft");
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`relative inline-block w-full z-50 bg-white/10 backdrop-blur-md p-4 rounded-xl border-2 border-[#E85D22] shadow-2xl ${className}`}>
        <div className="absolute -top-10 right-0 flex gap-2">
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md shadow-lg transition-colors flex items-center justify-center disabled:opacity-50"
            title="Save changes"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          </button>
          <button 
            onClick={handleCancel} 
            disabled={isSaving}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md shadow-lg transition-colors flex items-center justify-center disabled:opacity-50"
            title="Cancel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {multiline ? (
          <textarea
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none text-inherit min-h-[100px] resize-y"
          />
        ) : (
          <input
            autoFocus
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none text-inherit"
          />
        )}
      </div>
    );
  }

  const SafeComponent = Component === "p" ? "div" : Component;
  
  return (
    <div style={style} className="relative group/edit inline-block w-full outline outline-2 outline-transparent hover:outline-[#E85D22]/50 hover:bg-[#E85D22]/5 rounded-lg transition-all cursor-pointer" onClick={() => setIsEditing(true)}>
      <div className="absolute -top-3 -right-3 opacity-0 group-hover/edit:opacity-100 transition-opacity z-40 bg-[#0F2747] text-white p-1.5 rounded-full shadow-lg">
        <Edit2 className="w-3 h-3" />
      </div>
      <SafeComponent className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
