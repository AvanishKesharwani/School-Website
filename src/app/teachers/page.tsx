"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, FileText, Download, CheckCircle2, Award, GraduationCap } from "lucide-react";

export default function TeachersPage() {
  const staffCategories = [
    { name: "Post Graduate Teachers (PGT)", count: 11, desc: "Subject specialists for Senior Secondary classes (XI & XII)." },
    { name: "Trained Graduate Teachers (TGT)", count: 24, desc: "Educators specializing in Middle and Secondary level classes (VI to X)." },
    { name: "Primary Teachers (PRT)", count: 24, desc: "Nurturing foundations for Pre-Primary and Primary classes (I to V)." },
    { name: "Physical Education Teachers (PET)", count: 3, desc: "Dedicated physical instructors for sports and body fitness." },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="teachers-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#teachers-grid)" />
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
              Our Educators
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Meet Our Faculty
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              A team of dedicated, qualified, and compassionate teachers shaping the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Faculty Intro */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Teaching Philosophy</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  At Manka Public School, we believe that teaching is not just about lecturing, but about inspiring students to question, innovate, and develop strong character traits. Our teachers act as mentors who guide students on a path of self-discovery and lifelong learning.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  We maintain a balanced teacher-to-student section ratio to ensure individual attention for every child. Regular professional development workshops are conducted to keep our teachers updated with modern teaching methodologies and technology integration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Experienced Mentors</h4>
                      <p className="text-sm text-brand-gray">Subject matter specialists with rich teaching backgrounds.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Holistic Development</h4>
                      <p className="text-sm text-brand-gray">Focus on moral values, mental health, and physical skills.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Faculty Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {staffCategories.map((cat) => (
                  <div key={cat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-brand-navy text-lg mb-1">{cat.name}</h4>
                    <span className="inline-block px-2.5 py-0.5 bg-brand-blue/20 text-brand-navy font-bold rounded-lg text-xs mb-3">
                      Strength: {cat.count}
                    </span>
                    <p className="text-sm text-brand-gray leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Download Card */}
            <div className="space-y-6">
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <Users className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-2xl font-bold mb-3">Official Staff List</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Download the complete PDF containing the names, designations, and professional qualifications of Manka Public School's academic staff.
                </p>

                <a 
                  href="https://mankapublicschool.com/images/TeacherList202627.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-yellow hover:bg-white text-brand-navy font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Staff List</span>
                </a>
              </div>

              <div className="bg-[#F5FAFF] p-6 rounded-2xl border border-blue-50 space-y-4">
                <div className="flex gap-3 text-brand-navy">
                  <GraduationCap className="w-6 h-6 text-brand-navy shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Principal Details</h4>
                    <p className="text-xs text-brand-gray mt-0.5">Avinash Kesharwani (M.Sc. Physics, B.Ed.)</p>
                  </div>
                </div>
                <div className="flex gap-3 text-brand-navy">
                  <Award className="w-6 h-6 text-brand-navy shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Special Educator</h4>
                    <p className="text-xs text-brand-gray mt-0.5">Geetu Kesharwani (BA, B.Ed. Special Ed.)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
