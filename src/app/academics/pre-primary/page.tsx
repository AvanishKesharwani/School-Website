import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Gamepad2, Palette, Trophy, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Pre-Primary Wing (Nursery, LKG, UKG) | Manka Public School",
  description: "Explore the Pre-Primary Wing of Manka Public School. Joyful exploration, foundational learning, and creative play for Nursery, LKG, and UKG.",
};

export default function PrePrimaryPage() {
  const accentColor = "#F6AE2D"; // Preschool Gold

  return (
    <div className="flex flex-col min-h-screen bg-brand-white text-brand-navy">
      <Navbar />

      {/* Header Banner */}
      <section className="relative bg-[#0F2747] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-brand-yellow mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Academics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Pre-Primary Wing
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Nurturing our youngest learners through play, curiosity, and joyful discovery.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#F6AE2D]/20 text-[#F6AE2D] font-bold text-xs sm:text-sm">
            Classes: Nursery, LKG & UKG
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Welcome Section */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F6AE2D] px-3 py-1 rounded-md bg-[#F6AE2D]/10">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] leading-tight">
                Welcome to the Pre-Primary Wing of Manka Public School
              </h2>
              <div className="w-20 h-1.5 bg-[#F6AE2D] rounded-full" />
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                At Manka Public School, we believe that the first steps in education should be filled with wonder, laughter, and discovery. Our Pre-Primary wing (Nursery, LKG, and UKG) acts as a warm, secure, and vibrant second home for our youngest learners. Here, we blend foundational academics with joyful exploration, ensuring that every child develops a lifelong love for learning right from their very first day of school.
              </p>
            </div>
            
            {/* Visual Frame */}
            <div className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FFFDF5] to-[#F5FAFF] border-2 border-[#F6AE2D]/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[#F6AE2D]/5 pattern-grid" />
              <div className="text-center relative z-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#F6AE2D]/15 flex items-center justify-center mx-auto shadow-inner">
                  <Sparkles className="w-10 h-10 text-[#F6AE2D]" />
                </div>
                <h4 className="font-extrabold text-xl text-[#0F2747]">MPS Early Years Program</h4>
                <p className="text-brand-gray text-sm max-w-sm mx-auto">
                  A foundational curriculum built on safety, laughter, care, and child-centered development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Approach */}
        <section className="bg-gradient-to-b from-[#FFFDF5] to-white py-16 md:py-24 border-y border-[#F6AE2D]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F6AE2D] px-3 py-1 rounded-md bg-[#F6AE2D]/10">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] mt-4 mb-4">
                Learning Through Play and Exploration
              </h2>
              <div className="w-16 h-1 bg-[#F6AE2D] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6AE2D]/10 flex items-center justify-center shrink-0">
                  <Gamepad2 className="w-6 h-6 text-[#F6AE2D]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Experiential Curriculum</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    We move beyond traditional rote learning. Through thoughtfully structured sensory activities, our tiny tots build essential cognitive, emotional, and fine motor skills.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6AE2D]/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#F6AE2D]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Meaningful Knowledge</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Whether it is discovering mathematical concepts through colorful matching blocks or improving language abilities through storytelling, our classrooms transform curiosity into learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Co-Curricular & Celebrations Grid */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Card 1: Co-Curricular */}
            <div className="bg-[#FFFDF5] p-8 md:p-12 rounded-3xl border border-[#F6AE2D]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6AE2D]/10 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-[#F6AE2D]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Nurturing Young Minds Through Creative Expression
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  Creativity takes center stage in our early childhood program. From crafting delicate paper boats during the monsoon to exploring shape-making and paper-folding, our students regularly engage in hands-on art and craft projects. These activities do not just spark imagination—they encourage focus, patience, and problem-solving. At MPS, we celebrate the unique creative spark inside every single child.
                </p>
              </div>
            </div>

            {/* Card 2: Festivals */}
            <div className="bg-[#FFFDF5] p-8 md:p-12 rounded-3xl border border-[#F6AE2D]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6AE2D]/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#F6AE2D]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  A Vibrant Fabric of Culture and Joy
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  Life at our Pre-Primary wing is a continuous celebration of culture, community, and togetherness. Our young learners actively participate in festive events, from vibrant Christmas celebrations to meaningful cultural assemblies. By dressing up, performing, and celebrating together, our children build immense stage confidence, social empathy, and a deep respect for traditions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Closing Invitation */}
        <section className="container mx-auto px-6 md:px-12 max-w-4xl pb-16">
          <div className="bg-[#0F2747] text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden text-center">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <HeartHandshake className="w-7 h-7 text-[#F6AE2D]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">The Foundation for a Bright Future</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Every milestone achieved in our Pre-Primary classes lays the structural groundwork for future academic and personal success. Supported by a team of deeply caring, patient, and trained educators, we ensure your child receives the personalized attention they need to blossom. We invite you to explore our vibrant early years program and watch your child grow into a confident, joyful learner.
              </p>
              <div className="pt-4">
                <a 
                  href="/admissions" 
                  className="inline-block bg-[#F6AE2D] hover:bg-[#e09d22] text-[#0F2747] font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
