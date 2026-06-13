import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Telescope, BookOpen, Compass, Award, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Senior Secondary Section (Classes XI & XII) | Manka Public School",
  description: "Explore the Senior Secondary Section at Manka Public School. Specialized streams in Science, Commerce, and Humanities. Deep conceptual rigor and competitive exam readiness.",
};

export default function SeniorSecondaryPage() {
  const accentColor = "#B10F8E"; // Senior Secondary Purple

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
            <Telescope className="w-3.5 h-3.5" /> Academics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Senior Secondary
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Transitioning between school and university with specialization, rigor, and purpose.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#B10F8E]/20 text-[#B10F8E] font-bold text-xs sm:text-sm">
            Classes: XI - XII
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Welcome Section */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B10F8E] px-3 py-1 rounded-md bg-[#B10F8E]/10">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] leading-tight">
                Welcome to the Senior Secondary Wing of Manka Public School
              </h2>
              <div className="w-20 h-1.5 bg-[#B10F8E] rounded-full" />
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                The Senior Secondary Section at Manka Public School serves as the definitive transition gateway between school life and higher university education for students in Classes XI and XII. Operating in a highly focused and academically charged atmosphere, this section provides specialized streams designed to nurture the next generation of engineers, scientists, doctors, entrepreneurs, and scholars. We offer an uncompromisingly rigorous, supportive ecosystem where students transform their long-term ambitions into concrete academic achievements.
              </p>
            </div>
            
            {/* Visual Frame */}
            <div className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FCF5FB] to-white border-2 border-[#B10F8E]/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[#B10F8E]/5 pattern-grid" />
              <div className="text-center relative z-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#B10F8E]/15 flex items-center justify-center mx-auto shadow-inner">
                  <Telescope className="w-10 h-10 text-[#B10F8E]" />
                </div>
                <h4 className="font-extrabold text-xl text-[#0F2747]">Strategic Specialization</h4>
                <p className="text-brand-gray text-sm max-w-sm mx-auto">
                  Rigorous scientific, commercial, and humanities studies aligned with national exams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Approach */}
        <section className="bg-gradient-to-b from-[#FCF5FB] to-white py-16 md:py-24 border-y border-[#B10F8E]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B10F8E] px-3 py-1 rounded-md bg-[#B10F8E]/10">Academic Mastery</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] mt-4 mb-4">
                Specialized Streams & Deep Conceptual Rigor
              </h2>
              <div className="w-16 h-1 bg-[#B10F8E] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#B10F8E]/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#B10F8E]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Advanced Analytical proofs</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Learning transitions from generalized subjects into Science, Commerce, and Humanities. Our curriculum focuses heavily on derivations, advanced mathematical proofs, complex chemical mechanisms, and logical problem-solving.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#B10F8E]/10 flex items-center justify-center shrink-0">
                  <Telescope className="w-6 h-6 text-[#B10F8E]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">State-of-the-Art Labs</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Supported by physics, chemistry, and computer laboratories, senior secondary students are trained to master abstract concepts with absolute clarity, precision, and application-based understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Entrance exams & Endurance Grid */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Card 1: Entrance Exams */}
            <div className="bg-[#FCF5FB] p-8 md:p-12 rounded-3xl border border-[#B10F8E]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#B10F8E]/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#B10F8E]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Launchpad for Competitive National Examinations
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  We understand that Senior Secondary education is intrinsically linked with future career milestones. Our academic delivery is strategically structured to complement the preparation required for competitive entrance exams, emphasizing problem-solving speed, data interpretation, and regular time-bound practice.
                </p>
              </div>
            </div>

            {/* Card 2: Mental Endurance */}
            <div className="bg-[#FCF5FB] p-8 md:p-12 rounded-3xl border border-[#B10F8E]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#B10F8E]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#B10F8E]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Discipline, Focus, and Mental Endurance
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  The final two years of schooling demand extraordinary personal discipline and time-management. Through regular personal mentorship, peer-group support, and guided goal-setting sessions, we help our young adults manage stress, build emotional resilience, and remain focused on their targets.
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
                <HeartHandshake className="w-7 h-7 text-[#B10F8E]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Graduating with Purpose, Vision, and Scientific Temperament</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                The Senior Secondary phase at MPS is the ultimate crucible where character, intellect, and ambition merge. Our expert faculty members act not just as teachers, but as intellectual mentors, guiding each student toward their true research or professional potential. When a student graduates from Class XII at Manka Public School, they step out into the world equipped with a sharp analytical mind, a strong ethical foundation, and the complete confidence required to excel in premier global and national universities.
              </p>
              <div className="pt-4">
                <a 
                  href="/admissions" 
                  className="inline-block bg-[#B10F8E] hover:bg-[#850b6a] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
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
