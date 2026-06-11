import { getSectionContent } from "@/lib/cms-actions";
import ContentForm from "./ContentForm";

export default async function ContentAdminPage() {
  const heroContentStr = await getSectionContent("homepage-hero", JSON.stringify({
    title: "Building Futures.<br />Inspiring Excellence.",
    subtitle: "Empowering students with knowledge, character, creativity, and confidence."
  }));
  
  let heroContent = { title: "", subtitle: "" };
  try {
    heroContent = JSON.parse(heroContentStr);
  } catch (e) {
    // fallback
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[500px]">
      <h1 className="text-3xl font-bold text-[#0F2747] mb-2">Content Management</h1>
      <p className="text-gray-600 mb-8">Edit the text content of your website sections here. Changes will instantly reflect on the live website.</p>
      
      <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
        <h2 className="text-xl font-bold text-[#0F2747] mb-6 border-b border-gray-200 pb-4">Homepage Hero Section</h2>
        <ContentForm initialTitle={heroContent.title} initialSubtitle={heroContent.subtitle} />
      </div>
    </div>
  );
}
