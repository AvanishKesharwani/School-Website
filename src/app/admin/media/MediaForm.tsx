"use client";

import { useState } from "react";
import { addGalleryImage, deleteGalleryImage } from "@/lib/media-actions";
import { Plus, Trash2, Loader2, Image as ImageIcon } from "lucide-react";

export default function MediaForm({ images }: { images: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAdding(true);
    const formData = new FormData(e.currentTarget);
    const src = formData.get("src") as string;
    const category = formData.get("category") as string;
    const aspect = formData.get("aspect") as string || "aspect-square";
    
    const result = await addGalleryImage({ src, category, aspect });
    if (!result.success) {
      alert(result.error);
    } else {
      (e.target as HTMLFormElement).reset();
    }
    setIsAdding(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    setIsDeleting(id);
    const result = await deleteGalleryImage(id);
    if (!result.success) {
      alert(result.error);
    }
    setIsDeleting(null);
  };

  return (
    <div className="space-y-12">
      {/* Add New Image Form */}
      <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-[#0F2747] mb-6 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[#E85D22]" /> Add New Image
        </h2>
        <form onSubmit={handleAdd} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-semibold text-[#0F2747] mb-1">Image URL (e.g., Unsplash, Cloudinary)</label>
            <input 
              name="src" 
              type="url" 
              required 
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E85D22] focus:border-transparent transition-all"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#0F2747] mb-1">Category</label>
              <select 
                name="category" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E85D22] focus:border-transparent transition-all"
              >
                <option value="Campus">Campus</option>
                <option value="Events">Events</option>
                <option value="Sports">Sports</option>
                <option value="Academics">Academics</option>
                <option value="Celebrations">Celebrations</option>
                <option value="News">News</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0F2747] mb-1">Aspect Ratio</label>
              <select 
                name="aspect" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E85D22] focus:border-transparent transition-all"
              >
                <option value="aspect-square">Square (1:1)</option>
                <option value="aspect-[4/3]">Landscape (4:3)</option>
                <option value="aspect-[16/9]">Widescreen (16:9)</option>
                <option value="aspect-[3/4]">Portrait (3:4)</option>
                <option value="aspect-[4/5]">Tall (4:5)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isAdding}
            className="mt-4 bg-[#E85D22] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#D94F16] transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
          >
            {isAdding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
            {isAdding ? "Uploading..." : "Add to Gallery"}
          </button>
        </form>
      </div>

      {/* Existing Images Grid */}
      <div>
        <h2 className="text-xl font-bold text-[#0F2747] mb-6">Current Gallery Images ({images.length})</h2>
        {images.length === 0 ? (
          <p className="text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map(img => (
              <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className={`w-full ${img.aspect} relative bg-gray-100`}>
                  <img src={img.src} alt={img.category} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {img.category}
                  </span>
                  <button 
                    onClick={() => handleDelete(img.id)}
                    disabled={isDeleting === img.id}
                    className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors shadow-lg disabled:opacity-50"
                  >
                    {isDeleting === img.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
