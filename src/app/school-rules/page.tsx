"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  UserCheck, 
  Shirt, 
  CalendarDays, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";

type SectionId = "general" | "dresscode" | "leaves" | "campus";

export default function SchoolRulesPage() {
  const [activeSec, setActiveSec] = useState<SectionId>("general");

  const sections = [
    { id: "general" as SectionId, label: "General Duties", icon: UserCheck, desc: "Peace, order, and harmony" },
    { id: "dresscode" as SectionId, label: "Dress Code & Uniform", icon: Shirt, desc: "Appearance guidelines" },
    { id: "leaves" as SectionId, label: "Leave & Absence", icon: CalendarDays, desc: "Attendance and sick leaves" },
    { id: "campus" as SectionId, label: "Campus Entry & Exit", icon: Clock, desc: "Timing and pick-up rules" },
  ];

  const generalRules = [
    "To protect and promote the sanctity of the school by maintaining peace, order, and harmony in school.",
    "Maintain cleanliness in the campus and also help in making our school a green school.",
    "Safeguard and preserve school property.",
    "Respect elders, teachers, and friends.",
    "To speak softly and to speak only in English while in school campus.",
    "Follow the general instructions given in the school by teachers and leaders.",
    "Attend and maintain the dignity and sanctity of the school assembly.",
    "Regularity in attending academic and non-academic activities.",
    "Attend all activities organized by the school like literary fests, Independence Day celebration, sports days, etc."
  ];

  const dressRules = [
    "Students must be dressed in clean and well-ironed school uniforms whenever they are in the school premises, representing the school, or attending parent-teacher meetings.",
    "House T-shirts need to be worn on Saturdays.",
    "Shoes, socks, and ties have to be washed regularly. No student can wear the school uniform and visit public places like malls or cafes.",
    "Girls are allowed to wear only ankle socks which are above the ankles. Low-cut socks are strictly prohibited.",
    "Without prior permission, no student without uniform is allowed to enter the school campus (except on their birthdays)."
  ];

  const leaveRules = [
    "Students sick for more than 5 days must submit a medical certificate signed by a doctor upon joining.",
    "Students returning after contagious diseases must produce a doctor's fitness certificate. Isolation periods: Chickenpox (till scabs fall), Cholera (till well), Measles (1 week after rashes disappear), Mumps (till swelling subsides), Whooping Cough (6 weeks).",
    "It is compulsory for all students to maintain 80% attendance during the academic session. A relaxation of up to 10% may be granted on medical grounds.",
    "Leave without prior written application will be treated as an unauthorized absence.",
    "Attendance is compulsory on the last working day before and the first working day after vacations, as well as on National Festivals."
  ];

  const campusRules = [
    "Students must reach the school by 8:30 AM and remain in the school for the full school day.",
    "Parents must obtain prior appointments to visit the school other than planned parent-teacher meetings.",
    "Parents must report to the front office. No parent is allowed to go directly to classrooms or meet teachers without permission.",
    "Early checkout requires an authorization letter from the parent. Students must take an exit slip signed by the Academic Coordinator.",
    "When parents arrive to pick up a student early, they must sign out the student at the administration office."
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="rules-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#rules-grid)" />
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-brand-yellow/20 text-brand-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Code of Conduct
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Rules & Guidelines
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Fostering a safe, disciplined, and positive environment of mutual respect and active learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Rules Selector */}
            <div className="w-full lg:w-1/3 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 bg-white/50 p-2.5 rounded-2xl border border-gray-100 backdrop-blur-sm scrollbar-none">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSec === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSec(sec.id)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-semibold transition-all duration-200 text-left whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/15 scale-[1.02] w-full" 
                        : "text-brand-gray hover:bg-brand-navy/5 hover:text-brand-navy w-full"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? "bg-brand-yellow text-brand-navy" : "bg-brand-navy/5 text-brand-navy"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="hidden md:block overflow-hidden">
                      <span className="font-bold text-sm block leading-none mb-1">{sec.label}</span>
                      <span className={`text-[10px] block truncate font-medium ${isActive ? "text-white/80" : "text-brand-gray/80"}`}>{sec.desc}</span>
                    </div>
                    <span className="block md:hidden font-bold">{sec.label}</span>
                    <ChevronRight className={`ml-auto w-4 h-4 hidden lg:block transition-transform ${isActive ? "translate-x-1 opacity-100" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Rules Detail Card */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 md:p-10 min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSec}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* General Rules */}
                  {activeSec === "general" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <UserCheck className="w-8 h-8 text-brand-yellow" />
                        Responsibilities Towards School
                      </h2>
                      <p className="text-brand-gray text-base leading-relaxed mb-4">
                        Every student of Manka Public School is expected to uphold the pride and honour of the institution by maintaining the highest standards of behavior and community discipline:
                      </p>
                      
                      <div className="space-y-3.5">
                        {generalRules.map((rule, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-brand-navy/5 transition-colors border border-gray-50 bg-brand-white/10">
                            <span className="font-bold text-brand-navy text-sm bg-brand-yellow/30 px-2 py-0.5 rounded-lg h-fit shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-brand-gray font-semibold leading-relaxed">{rule}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dress Code Rules */}
                  {activeSec === "dresscode" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Shirt className="w-8 h-8 text-brand-yellow" />
                        Dress Code & Uniform Regulations
                      </h2>
                      <p className="text-brand-gray text-base leading-relaxed mb-4">
                        Uniformity in dress fosters unity and pride. Students must follow the specified guidelines regarding the school uniform:
                      </p>
                      
                      <div className="space-y-3.5">
                        {dressRules.map((rule, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-brand-navy/5 transition-colors border border-gray-50 bg-brand-white/10">
                            <span className="font-bold text-brand-navy text-sm bg-brand-yellow/30 px-2 py-0.5 rounded-lg h-fit shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-brand-gray font-semibold leading-relaxed">{rule}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Leave Rules */}
                  {activeSec === "leaves" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <CalendarDays className="w-8 h-8 text-brand-yellow" />
                        Leave & Absence Policies
                      </h2>
                      <p className="text-brand-gray text-base leading-relaxed mb-4">
                        Regularity is vital for academic progress. Leaves will only be granted for valid, documented reasons:
                      </p>
                      
                      <div className="space-y-3.5">
                        {leaveRules.map((rule, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-brand-navy/5 transition-colors border border-gray-50 bg-brand-white/10">
                            <span className="font-bold text-brand-navy text-sm bg-brand-yellow/30 px-2 py-0.5 rounded-lg h-fit shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-brand-gray font-semibold leading-relaxed">{rule}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-5 bg-[#FFF9E6] border border-amber-100 rounded-2xl flex gap-3 text-amber-900">
                        <ShieldAlert className="w-5 h-5 text-[#E85D22] shrink-0 mt-0.5" />
                        <div className="text-xs space-y-1">
                          <strong className="block text-brand-navy">Minimum Attendance Requirement:</strong>
                          <p className="leading-relaxed">
                            It is compulsory for all students to maintain at least <strong>80% attendance</strong> during the course of the academic session to enable them to appear for the final Examinations.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Campus Entry Exit Rules */}
                  {activeSec === "campus" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Clock className="w-8 h-8 text-brand-yellow" />
                        Campus Entry & Exit Rules
                      </h2>
                      <p className="text-brand-gray text-base leading-relaxed mb-4">
                        We prioritize student security. Campus entry, exit, and parent visits are governed by the following safety rules:
                      </p>
                      
                      <div className="space-y-3.5">
                        {campusRules.map((rule, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-brand-navy/5 transition-colors border border-gray-50 bg-brand-white/10">
                            <span className="font-bold text-brand-navy text-sm bg-brand-yellow/30 px-2 py-0.5 rounded-lg h-fit shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-brand-gray font-semibold leading-relaxed">{rule}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
