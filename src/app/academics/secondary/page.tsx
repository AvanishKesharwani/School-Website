import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, BookOpen, BarChart3, Users, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Secondary Wing (Classes IX & X) | Manka Public School",
  description: "Explore the Secondary Section at Manka Public School. Deep conceptual mastery, board exam readiness, critical thinking, and leadership for Classes IX and X.",
};

export default function SecondaryPage() {
  const accentColor = "#007BFF"; // Secondary Blue

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
            <Compass className="w-3.5 h-3.5" /> Academics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Secondary Wing
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Fostering conceptual mastery, board exam readiness, and future career mapping.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#007BFF]/20 text-[#007BFF] font-bold text-xs sm:text-sm">
            Classes: IX - X
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Welcome Section */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] px-3 py-1 rounded-md bg-[#007BFF]/10">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] leading-tight">
                Welcome to the Secondary Wing of Manka Public School
              </h2>
              <div className="w-20 h-1.5 bg-[#007BFF] rounded-full" />
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                The Secondary Section at Manka Public School represents the definitive pinnacle of school-level education for students in Classes IX and X. As our students step into this highly critical academic phase, the environment transitions into one of focused diligence, high standards, and structured ambition. We provide a rigorous, highly supportive ecosystem designed to convert years of foundational knowledge into stellar academic performance, personal maturity, and readiness for future national-level challenges.
              </p>
            </div>
            
            {/* Visual Frame */}
            <div className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#F5FAFF] to-white border-2 border-[#007BFF]/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[#007BFF]/5 pattern-grid" />
              <div className="text-center relative z-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#007BFF]/15 flex items-center justify-center mx-auto shadow-inner">
                  <Compass className="w-10 h-10 text-[#007BFF]" />
                </div>
                <h4 className="font-extrabold text-xl text-[#0F2747]">Academic Rigor</h4>
                <p className="text-brand-gray text-sm max-w-sm mx-auto">
                  A high-standard curriculum emphasizing board preparation, precision, and career orientation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Approach */}
        <section className="bg-gradient-to-b from-[#F5FAFF] to-white py-16 md:py-24 border-y border-[#007BFF]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] px-3 py-1 rounded-md bg-[#007BFF]/10">Academic Excellence</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] mt-4 mb-4">
                Rigorous Preparation and Concept Clarity
              </h2>
              <div className="w-16 h-1 bg-[#007BFF] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#007BFF]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Core Mastery & National Standards</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    With the curriculum aligned strictly to meet competitive national standards, we emphasize deep conceptual mastery in Mathematics, Advanced Sciences, Social Sciences, and Languages.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-[#007BFF]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Board Exam Temperament</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Through regular assessments, intensive laboratory sessions, and structured test series, we build the time-management and problem-solving skills required to excel in Board Examinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Critical Thinking & Leadership Grid */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Card 1: Critical Thinking */}
            <div className="bg-[#F5FAFF] p-8 md:p-12 rounded-3xl border border-[#007BFF]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#007BFF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Analytical and Research-Driven Problem Solving
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  Education at MPS is designed to foster independent, analytical, and research-oriented thinking. Students are encouraged to look beyond textbooks to understand socio-economic, technological, and scientific shifts. By engaging in detailed case studies, scientific inquiries, and systematic data analysis, secondary students build structured, solution-oriented minds.
                </p>
              </div>
            </div>

            {/* Card 2: Leadership */}
            <div className="bg-[#F5FAFF] p-8 md:p-12 rounded-3xl border border-[#007BFF]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#007BFF]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Molding Responsible Leaders and Mindful Citizens
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  True education balances high academic performance with unyielding strength of character. Entrusted with responsibilities in the student council, sports houses, and school organizing committees, our secondary students learn firsthand the values of discipline, emotional resilience, peer mentorship, and ethical leadership.
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
                <HeartHandshake className="w-7 h-7 text-[#007BFF]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Laying the Secure Foundation for Career and Higher Education</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Class IX and X serve as the vital launchpad for a student&apos;s lifelong professional and academic trajectory. Our dedicated, expert faculty members offer precise academic guidance and regular personal mentoring to help students identify their core strengths and hidden talents. By fostering an atmosphere of healthy competition, deep focus, and relentless perseverance, Manka Public School ensures that every secondary graduate emerges completely equipped to conquer the challenges of Senior Secondary streams.
              </p>
              <div className="pt-4">
                <a 
                  href="/admissions" 
                  className="inline-block bg-[#007BFF] hover:bg-[#0052a3] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
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
