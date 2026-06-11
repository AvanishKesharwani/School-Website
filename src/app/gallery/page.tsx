import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { getGalleryImages } from "@/lib/media-actions";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 bg-brand-white">
        <Gallery initialImages={images} />
      </div>

      <Footer />
    </main>
  );
}
