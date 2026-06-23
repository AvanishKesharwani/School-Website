"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, BookOpenCheck, ShieldAlert, Award, FileText, CheckCircle2 } from "lucide-react";

export default function LibraryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="library-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#library-grid)" />
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
              Resources & Knowledge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              School Library
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Fostering reading habits and supporting research with a rich collection of books and digital media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Library details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Fostering a Culture of Reading</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  A school library is a structure within the school that houses a collection of books, audio-visual material and other content that serves common use to meet the educational, informative and recreational needs of the users. The chief objective of our library is to meet the academic needs of the school which it serves.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Besides serving students in their studies and teachers in their research, our school library aims at creating interest in reading amongst the students who get the best of resources and environment here.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  We believe school plays a vital role in students' lives. Therefore, we focus heavily on school library management. The MPS School Library provides different kinds of books to learn and gain knowledge throughout the academic year.
                </p>
              </div>

              {/* Unique Features */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
                <h3 className="text-2xl font-bold text-brand-navy">Library Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Wide Variety of Genres</h4>
                      <p className="text-sm text-brand-gray">Fiction, non-fiction, scientific journals, biographies, and encyclopedias.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Quiet Reading Zone</h4>
                      <p className="text-sm text-brand-gray">Spacious reading tables designed to support focused study and learning.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Reference Section</h4>
                      <p className="text-sm text-brand-gray">Equipped with specialized dictionaries, atlases, and boarding school resources.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-navy">Digital Cataloging</h4>
                      <p className="text-sm text-brand-gray">Streamlined book issue and return tracking for student efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details Card */}
            <div className="space-y-6">
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <BookOpen className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-2xl font-bold mb-3">Library Stats</h3>
                
                <div className="space-y-4 my-6 border-t border-b border-white/10 py-6">
                  <div className="flex justify-between">
                    <span className="text-white/75 text-sm">Total Area</span>
                    <span className="font-bold text-brand-yellow">111.48 Sq. mtr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75 text-sm">Seating Capacity</span>
                    <span className="font-bold">60+ Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75 text-sm">Book Categories</span>
                    <span className="font-bold">25+ Genres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75 text-sm">Daily Newspapers</span>
                    <span className="font-bold">5+ Languages</span>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-white/90 leading-relaxed italic">
                    "A room without books is like a body without a soul." – Cicero
                  </p>
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
