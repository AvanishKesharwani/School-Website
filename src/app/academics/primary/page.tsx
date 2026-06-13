import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PencilRuler, BookOpen, Award, Users, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Primary Wing (Classes I to V) | Manka Public School",
  description: "Explore the Primary Section at Manka Public School. Cultivating critical thinking, foundational core skills, and character development for Classes I to V.",
};

export default function PrimaryPage() {
  const accentColor = "#F26419"; // Primary Orange

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
            <PencilRuler className="w-3.5 h-3.5" /> Academics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Primary Section
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Transitioning from play to structured, purposeful learning with confidence and curiosity.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full bg-[#F26419]/20 text-[#F26419] font-bold text-xs sm:text-sm">
            Classes: I - V
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Welcome Section */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F26419] px-3 py-1 rounded-md bg-[#F26419]/10">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] leading-tight">
                Welcome to the Primary Wing of Manka Public School
              </h2>
              <div className="w-20 h-1.5 bg-[#F26419] rounded-full" />
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                The Primary Section at Manka Public School marks an exciting transition where the playful wonder of early childhood evolves into structured, purposeful learning. Catering to students from Classes I to V, our primary program provides a nurturing yet stimulating environment. We focus on building strong foundational pillars in academics, critical thinking, and character, ensuring that every student steps into their formal education journey with confidence and enthusiasm.
              </p>
            </div>
            
            {/* Visual Frame */}
            <div className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FFF8F5] to-[#F5FAFF] border-2 border-[#F26419]/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[#F26419]/5 pattern-grid" />
              <div className="text-center relative z-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#F26419]/15 flex items-center justify-center mx-auto shadow-inner">
                  <PencilRuler className="w-10 h-10 text-[#F26419]" />
                </div>
                <h4 className="font-extrabold text-xl text-[#0F2747]">Structured Foundation</h4>
                <p className="text-brand-gray text-sm max-w-sm mx-auto">
                  A comprehensive layout targeting fundamental core skills, physical health, and ethics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy & Approach */}
        <section className="bg-gradient-to-b from-[#FFF8F5] to-white py-16 md:py-24 border-y border-[#F26419]/10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F26419] px-3 py-1 rounded-md bg-[#F26419]/10">Academic Growth</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2747] mt-4 mb-4">
                Cultivating Critical Thinking and Core Skills
              </h2>
              <div className="w-16 h-1 bg-[#F26419] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F26419]/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#F26419]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Deep Conceptual Clarity</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Our curriculum is designed to deepen conceptual understanding across core subjects like Mathematics, Science, Languages, and Social Studies. We encourage students to question, explore, and analyze.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F26419]/10 flex items-center justify-center shrink-0">
                  <PencilRuler className="w-6 h-6 text-[#F26419]" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0F2747]">Practical Learning Relevance</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    By integrating interactive visual aids, hands-on experiments, and foundational problem-solving tasks, we ensure that students grasp abstract concepts with absolute clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Co-Curricular & Character Grid */}
        <section className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Card 1: Co-Curricular */}
            <div className="bg-[#FFF8F5] p-8 md:p-12 rounded-3xl border border-[#F26419]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F26419]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#F26419]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Beyond Textbooks: Fostering Creativity & Well-being
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  Education at MPS extends far beyond the boundaries of traditional textbooks. Our primary students are actively encouraged to discover their unique talents through a rich spectrum of co-curricular activities, including public speaking, performing arts, creative writing, and structured sports. These activities are essential in building vital life skills such as teamwork, emotional resilience, and adaptability, helping shape well-rounded individuals.
                </p>
              </div>
            </div>

            {/* Card 2: Character and Values */}
            <div className="bg-[#FFF8F5] p-8 md:p-12 rounded-3xl border border-[#F26419]/20 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F26419]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#F26419]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F2747]">
                  Nurturing Character and Community Leadership
                </h3>
                <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
                  At Manka Public School, we believe that academic excellence is incomplete without strong moral values. Through daily assemblies, collaborative projects, and the celebration of national and cultural festivals, we instill deep values of empathy, discipline, and mutual respect in our young learners. Our primary section provides students with their first opportunities to take on small leadership roles, helping them understand responsibility.
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
                <HeartHandshake className="w-7 h-7 text-[#F26419]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Empowering Learners for Tomorrow&apos;s Challenges</h3>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                The primary years are the absolute bedrock of a student&apos;s academic life. Our dedicated faculty members employ patient, innovative, and student-centric teaching methodologies tailored to meet the learning pace of every child. By building a secure, high-standard academic environment, Manka Public School ensures that our primary students graduate to higher classes with a resilient mindset, sharp analytical skills, and an unstoppable desire to learn.
              </p>
              <div className="pt-4">
                <a 
                  href="/admissions" 
                  className="inline-block bg-[#F26419] hover:bg-[#d45312] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
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
