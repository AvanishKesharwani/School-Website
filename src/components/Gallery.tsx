"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Plus, Trash2, Loader2 } from "lucide-react";
import { useEditMode } from "./cms/EditModeProvider";
import { addGalleryImage, deleteGalleryImage } from "@/lib/media-actions";
import { uploadImageToSupabase } from "@/lib/visual-cms-actions";

export default function Gallery({ initialImages }: { initialImages?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isEditMode } = useEditMode();
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fallback to empty array if no images provided
  const [images, setImages] = useState<any[]>(initialImages || []);
  
  // Extract unique categories dynamically based on the images, plus 'All'
  const dbCategories = Array.from(new Set(images.map((img: any) => img.category)));
  const categories = ["All", ...dbCategories];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter((img: any) => img.category === activeCategory);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Remove this image?")) return;
    setDeletingId(id);
    await deleteGalleryImage(id);
    setImages(images.filter(img => img.id !== id));
    setDeletingId(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    
    const res = await uploadImageToSupabase(formData);
    if (res.success && res.url) {
      const cat = activeCategory === "All" ? "Campus" : activeCategory;
      const addRes = await addGalleryImage({ src: res.url, category: cat, aspect: "aspect-[4/3]" });
      if (addRes.success && addRes.image) {
        setImages([...images, addRes.image]);
      }
    } else {
      alert("Failed to upload image: " + res.error);
    }
    setIsUploading(false);
  };

  return (
    <section className="py-24 bg-brand-white text-brand-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-gray"
          >
            Glimpses of life at Manka Public School.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-navy text-brand-white shadow-md scale-105"
                  : "bg-brand-gray/10 text-brand-gray hover:bg-brand-gray/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id || `fallback-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className={`w-full ${img.aspect} relative`}>
                  <img 
                    src={img.src} 
                    alt={img.category} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${deletingId === img.id ? 'opacity-50 blur-sm' : ''}`}
                    loading="lazy"
                  />
                  {!isEditMode ? (
                    <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-brand-white scale-50 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <button 
                        onClick={(e) => handleDelete(e, img.id)}
                        disabled={deletingId === img.id}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform shadow-lg"
                      >
                        {deletingId === img.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />} Remove
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {isEditMode && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group rounded-2xl cursor-pointer break-inside-avoid border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center aspect-[4/3] hover:border-[#E85D22] hover:bg-orange-50 transition-colors"
              >
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="text-center p-6">
                  {isUploading ? (
                    <>
                      <Loader2 className="w-8 h-8 animate-spin text-[#E85D22] mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-600">Uploading...</p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-3 text-[#E85D22]">
                        <Plus className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-gray-700">Add Image to <br/>{activeCategory === "All" ? "Gallery" : activeCategory}</p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-white/10 text-brand-white hover:bg-brand-yellow hover:text-brand-navy transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
