import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Atom, TrendingUp, Terminal, Brain, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Middle School Wing (Classes VI to VIII) | Manka Public School",
  description: "Explore the Middle School Section at Manka Public School. Focus on academic independence, analytical inquiry, technology, and emotional resilience for Classes VI to VIII.",
};

export default function MiddleSchoolPage() {
  const accentColor = "#0CB04A"; // Middle School Green

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
            <Atom className="w-3.5 h-3.5" /> Academics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Middle School Wing
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Transitioning students from foundational learning to analytical thinking and self-discovery.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#0CB04A]/20 text-[#0CB04A] font-bold text-xs sm:text-sm">
            Classes: VI - VIII
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Welcome Section */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0CB04A] px-3 py-1 rounded-md bg-[#0CB04A]/10">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] leading-tight">
                Welcome to the Middle School Wing of Manka Public School
              </h2>
              <div className="w-20 h-1.5 bg-[#0CB04A] rounded-full" />
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                The Middle School Section at Manka Public School bridges the gap between childhood learning and advanced academic pursuits for students in Classes VI to VIII. This is a period of profound intellectual, emotional, and physical growth. Our middle school environment is consciously designed to support young adolescents as they discover their personal identities, develop independent thinking skills, and take ownership of their unique learning journeys.
              </p>
            </div>
            
            {/* Visual Frame */}
            <div className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#F5FEF8] to-[#F5FAFF] border-2 border-[#0CB04A]/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[#0CB04A]/5 pattern-grid" />
              <div className="text-center relative z-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#0CB04A]/15 flex items-center justify-center mx-auto shadow-inner">
                  <Atom className="w-10 h-10 text-[#0CB04A]" />
                </div>
                <h4 className="font-extrabold text-xl text-[#0F2747]">Analytical Growth</h4>
                <p className="text-brand-gray text-sm max-w-sm mx-auto">
                  Encouraging independent research, digital proficiency, and competitive logical thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Approach */}
        <section className="bg-gradient-to-b from-[#F5FEF8] to-white py-16 md:py-24 border-y border-[#0CB04A]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0CB04A] px-3 py-1 rounded-md bg-[#0CB04A]/10">Academic Rigor</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] mt-4 mb-4">
                From Memorization to Deep Analytical Inquiry
              </h2>
              <div className="w-16 h-1 bg-[#0CB04A] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#0CB04A]/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#0CB04A]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Specialized Disciplines</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    At this stage, the curriculum becomes more specialized. Students delve deeper into the complexities of the Sciences, Mathematics, Social Sciences, and advanced language studies.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#0CB04A]/10 flex items-center justify-center shrink-0">
                  <Atom className="w-6 h-6 text-[#0CB04A]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">How to Think</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    By introducing laboratory experiments, research-based projects, and logical problem-solving, we train middle schoolers to analyze facts critically and connect theory to real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Innovation & Talents Grid */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Card 1: Technology */}
            <div className="bg-[#F5FEF8] p-8 md:p-12 rounded-3xl border border-[#0CB04A]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0CB04A]/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-[#0CB04A]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Embracing Modern Innovation and Digital Literacy
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  To prepare our students for a rapidly evolving world, our middle school program strongly integrates technology and skill-based learning. Students are encouraged to look at modern challenges through the lens of innovation and systematic problem-solving. Whether exploring computer science concepts, participating in science exhibitions, or engaging in collaborative research, our students learn to use digital resources responsibly.
                </p>
              </div>
            </div>

            {/* Card 2: Personal Development */}
            <div className="bg-[#F5FEF8] p-8 md:p-12 rounded-3xl border border-[#0CB04A]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0CB04A]/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[#0CB04A]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Nurturing Talents and Building Emotional Resilience
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  Middle school can be a challenging time of transition for young minds, which is why we place immense value on holistic development and mental well-being. Through co-curricular options like competitive sports, debating, classical arts, and music, students find positive outlets. These platforms teach teamwork, self-confidence, and emotional resilience.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Closing Invitation */}
        <section className="container mx-auto px-6 md:px-12 max-w-4xl pb-16">
          <div className="bg-[#0F2747] text-white p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <HeartHandshake className="w-7 h-7 text-[#0CB04A]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Character, Ethics, and Future Readiness</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Academic growth at MPS goes hand-in-hand with moral grounding. We place heavy emphasis on peer respect, personal integrity, and community service. Middle schoolers are given greater responsibilities through student bodies and group leadership tasks, allowing them to practice empathy and accountability. This holistic foundation ensures that when our students graduate from Class VIII, they are completely ready to face the intense academic and personal challenges of Higher Secondary education.
              </p>
              <div className="pt-4">
                <a 
                  href="/admissions" 
                  className="inline-block bg-[#0CB04A] hover:bg-[#09913c] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
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
