import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Admission from "@/components/Admission";

export default function AdmissionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 bg-brand-white">
        <Admission />
      </div>

      <Footer />
    </main>
  );
}
