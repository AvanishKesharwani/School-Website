import { getGalleryImages } from "@/lib/media-actions";
import MediaForm from "./MediaForm";

export default async function MediaAdminPage() {
  const images = await getGalleryImages();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[500px]">
      <h1 className="text-3xl font-bold text-[#0F2747] mb-2">Media Library</h1>
      <p className="text-gray-600 mb-8">Manage the photos displayed in the website gallery. You can add new photos and categorize them.</p>
      
      <MediaForm images={images} />
    </div>
  );
}
