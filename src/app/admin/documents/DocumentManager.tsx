"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { logStorageAction } from "@/app/actions/storage-actions";
import { 
  FolderOpen, 
  UploadCloud, 
  FileText, 
  Copy, 
  Trash2, 
  Search, 
  Loader2, 
  Check, 
  ExternalLink, 
  File, 
  Download,
  AlertTriangle,
  RefreshCw
} from "lucide-react";

interface StorageFile {
  name: string;
  id: string;
  created_at: string;
  metadata: {
    size: number;
    mimetype: string;
  };
}

export default function DocumentManager() {
  const [files, setFiles] = useState<StorageFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [bucketWarning, setBucketWarning] = useState(false);

  const bucketName = "documents";

  const fetchFiles = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: listError } = await supabase.storage
        .from(bucketName)
        .list("", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (listError) {
        throw listError;
      }

      // Filter out folder placeholders if any (usually named '.keep' or similar)
      const filteredFiles = (data || []).filter(f => f.name !== ".emptyFolderPlaceholder") as any[];
      setFiles(filteredFiles);
      setBucketWarning(false);
    } catch (err: any) {
      console.error("Error listing files:", err);
      // Check if it's a bucket missing issue
      if (err.message?.toLowerCase().includes("not found") || err.error === "Bucket not found" || err.message?.toLowerCase().includes("does not exist")) {
        setBucketWarning(true);
      } else {
        setError(`Failed to retrieve files: ${err.message || "Unknown error"}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    const file = fileList[0];

    setIsUploading(true);
    setError(null);
    setSuccess(null);
    setUploadProgress("Uploading file to Supabase Storage...");

    try {
      const fileExt = file.name.split(".").pop();
      const originalName = file.name.substring(0, file.name.lastIndexOf("."));
      // Clean name for URL safety
      const cleanName = originalName.replace(/[^a-zA-Z0-9-_]/g, "_");
      const fileName = `${cleanName}_${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      // Log the upload action
      await logStorageAction(
        "UPLOAD_DOCUMENT",
        `Uploaded document: "${file.name}" as "${fileName}"`
      );

      setSuccess(`File "${file.name}" uploaded successfully!`);
      fetchFiles();
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(`Failed to upload file: ${err.message || "Unknown error"}. Make sure the bucket "${bucketName}" exists and is public.`);
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
      // Reset input
      e.target.value = "";
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${fileName}"?`)) return;

    setError(null);
    setSuccess(null);

    try {
      const { error: deleteError } = await supabase.storage
        .from(bucketName)
        .remove([fileName]);

      if (deleteError) {
        throw deleteError;
      }

      // Log the deletion action
      await logStorageAction(
        "DELETE_DOCUMENT",
        `Deleted document: "${fileName}"`
      );

      setSuccess(`File "${fileName}" deleted successfully.`);
      fetchFiles();
    } catch (err: any) {
      console.error("Delete error:", err);
      setError(`Failed to delete file: ${err.message || "Unknown error"}`);
    }
  };

  const copyToClipboard = (fileName: string) => {
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    navigator.clipboard.writeText(publicUrl);
    setCopiedId(fileName);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPublicFileUrl = (fileName: string) => {
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);
    return publicUrl;
  };

  const formatBytes = (bytes?: number, decimals = 2) => {
    if (!bytes) return "Unknown size";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (ext === "pdf") return <FileText className="w-8 h-8 text-red-500 shrink-0" />;
    if (["png", "jpg", "jpeg", "gif", "svg", "webp"].includes(ext || "")) {
      return <FileText className="w-8 h-8 text-blue-500 shrink-0" />;
    }
    if (["doc", "docx", "txt", "rtf", "odt"].includes(ext || "")) {
      return <FileText className="w-8 h-8 text-indigo-500 shrink-0" />;
    }
    if (["xls", "xlsx", "csv"].includes(ext || "")) {
      return <FileText className="w-8 h-8 text-emerald-500 shrink-0" />;
    }
    return <File className="w-8 h-8 text-gray-500 shrink-0" />;
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Bucket Warning Alert */}
      {bucketWarning && (
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3 text-amber-850">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-900">Supabase Storage Bucket Missing</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              We couldn't connect to a storage bucket named <strong>"{bucketName}"</strong>. Please follow these steps in your Supabase Dashboard:
            </p>
            <ol className="list-decimal pl-5 text-sm space-y-1 mt-2 text-amber-800 font-medium">
              <li>Log in to your <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-950">Supabase Console</a>.</li>
              <li>Go to <strong>Storage</strong> in the left sidebar.</li>
              <li>Click <strong>New Bucket</strong> and name it exactly <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono font-bold text-xs">{bucketName}</code>.</li>
              <li>Make sure to toggle the <strong>Public bucket</strong> setting to <strong>Enabled</strong>.</li>
              <li>Click <strong>Save</strong>.</li>
            </ol>
            <button 
              onClick={fetchFiles}
              className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retry Connection
            </button>
          </div>
        </div>
      )}

      {/* Messages */}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-150 flex items-center gap-2">
          <span>❌</span>
          <span className="flex-grow">{error}</span>
        </div>
      )}
      {success && (
        <div className="p-4 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-xl border border-emerald-150 flex items-center gap-2">
          <span>✅</span>
          <span className="flex-grow">{success}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Panel: Upload Zone */}
        <div className="lg:col-span-4 bg-gray-50 border border-gray-150 p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-[#0F2747] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
            <UploadCloud className="w-5 h-5 text-[#E85D22]" />
            Upload Document
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              Upload official PDFs, forms, newsletters, templates, or files. You can copy the public link once uploaded.
            </p>
            
            <label className={`border-2 border-dashed border-gray-300 hover:border-[#E85D22] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:bg-gray-50/50 group relative min-h-[180px] ${isUploading ? 'pointer-events-none opacity-60' : ''}`}>
              <input
                type="file"
                className="hidden"
                onChange={handleUpload}
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="space-y-3">
                  <Loader2 className="w-10 h-10 animate-spin text-[#E85D22] mx-auto" />
                  <p className="text-sm font-bold text-gray-600">{uploadProgress}</p>
                </div>
              ) : (
                <div className="space-y-3 group-hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 bg-[#E85D22]/10 rounded-full flex items-center justify-center text-[#E85D22] mx-auto">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F2747]">Select or drag a file</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, Word, Excel, Images up to 50MB</p>
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Right Panel: Uploaded Files List */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <h2 className="text-lg font-bold text-[#0F2747] flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-gray-500" />
              Document Library ({files.length})
            </h2>
            
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-xs bg-white rounded-xl border border-gray-300">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search files..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85D22]/20 focus:border-[#E85D22] text-sm"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-white border border-gray-150 rounded-2xl">
              <Loader2 className="w-8 h-8 animate-spin text-[#E85D22] mb-3" />
              <p className="text-sm">Retrieving library files...</p>
            </div>
          ) : filteredFiles.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 bg-white">
              <File className="w-12 h-12 mx-auto mb-3 opacity-25" />
              <p className="font-bold text-gray-500">No Documents Found</p>
              <p className="text-xs mt-1 text-gray-400">
                {searchQuery ? "No files match your search filter." : "Your document library is empty. Upload your first file."}
              </p>
            </div>
          ) : (
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <div className="divide-y divide-gray-100 max-h-[550px] overflow-y-auto pr-1">
                {filteredFiles.map((file) => (
                  <div 
                    key={file.name} 
                    className="p-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    {/* File Icon & Info */}
                    <div className="flex items-center gap-4 min-w-0">
                      {getFileIcon(file.name)}
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#0F2747] truncate max-w-md sm:max-w-xs md:max-w-md" title={file.name}>
                          {file.name}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                          <span>{formatBytes(file.metadata?.size)}</span>
                          <span>•</span>
                          <span>
                            {new Date(file.created_at).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      {/* Copy Link Button */}
                      <button
                        onClick={() => copyToClipboard(file.name)}
                        className={`px-3 py-2 text-xs font-bold rounded-xl transition-all border inline-flex items-center gap-1.5 cursor-pointer ${
                          copiedId === file.name
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                        }`}
                        title="Copy Public Download URL"
                      >
                        {copiedId === file.name ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedId === file.name ? "Copied" : "Copy Link"}
                      </button>

                      {/* Download Link */}
                      <a
                        href={getPublicFileUrl(file.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-200 text-gray-500 hover:text-brand-navy hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                        title="View / Open File"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(file.name)}
                        className="p-2 border border-red-100 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                        title="Delete Document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
