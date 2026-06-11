"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface EditModeContextType {
  isEditMode: boolean;
  isAdmin: boolean;
  setIsEditMode: (value: boolean) => void;
  toggleEditMode: () => void;
  unpublishedChangesCount: number;
  incrementUnpublishedChanges: () => void;
  clearUnpublishedChanges: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children, initialIsAdmin }: { children: ReactNode, initialIsAdmin: boolean }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [unpublishedChangesCount, setUnpublishedChangesCount] = useState(0);

  // Auto-enable edit mode if there are unpublished changes, or leave it off by default
  useEffect(() => {
    // You could load state from localStorage here to persist edit mode preference
    const saved = localStorage.getItem("mps_edit_mode");
    const params = new URLSearchParams(window.location.search);
    if ((saved === "true" || params.get("edit") === "true") && initialIsAdmin) {
      setIsEditMode(true);
      if (params.get("edit") === "true") {
        localStorage.setItem("mps_edit_mode", "true");
      }
    }
  }, [initialIsAdmin]);

  const toggleEditMode = () => {
    setIsEditMode(prev => {
      const next = !prev;
      localStorage.setItem("mps_edit_mode", next.toString());
      return next;
    });
  };

  const incrementUnpublishedChanges = () => setUnpublishedChangesCount(prev => prev + 1);
  const clearUnpublishedChanges = () => setUnpublishedChangesCount(0);

  // If not an admin, never allow edit mode
  if (!initialIsAdmin) {
    return <>{children}</>;
  }

  return (
    <EditModeContext.Provider 
      value={{ 
        isEditMode, 
        isAdmin: initialIsAdmin,
        setIsEditMode, 
        toggleEditMode, 
        unpublishedChangesCount, 
        incrementUnpublishedChanges,
        clearUnpublishedChanges
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    // Return a dummy context for non-admins to avoid checking everywhere
    return { 
      isEditMode: false, 
      isAdmin: false,
      setIsEditMode: () => {}, 
      toggleEditMode: () => {},
      unpublishedChangesCount: 0,
      incrementUnpublishedChanges: () => {},
      clearUnpublishedChanges: () => {}
    };
  }
  return context;
}
