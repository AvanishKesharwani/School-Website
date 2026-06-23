"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, FileText, Download, ClipboardCheck, Info, Sparkles, ExternalLink } from "lucide-react";

export default function BookListPage() {
  const assets = [
    {
      title: "Official Book List (2023-24)",
      desc: "Download the complete recommended book list, publishers, and textbook details for montessori, primary, secondary, and senior secondary classes.",
      url: "https://mankapublicschool.com/BookList/textbook/BOOK%20LIST%202023-24.pdf",
      size: "PDF Document"
    },
    {
      title: "School Enquiry Form",
      desc: "Download the official paper enquiry form to apply offline. Print, fill out, and submit it directly to the school administrative desk.",
      url: "https://mankapublicschool.com/images/enqury.pdf",
      size: "PDF Document"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="books-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#books-grid)" />
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
              Downloads & Forms
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Book List & Resources
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Access and download official textbooks guidelines, book lists, and inquiry application forms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Resource details */}
            <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-2xl font-bold text-brand-navy mb-4">Academic Resources</h2>
                <p className="text-brand-gray text-base leading-relaxed mb-6">
                  Manka Public School ensures that all curriculum resources, text guidelines, and syllabus reference lists align with the Central Board of Secondary Education (CBSE) syllabus.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  Parents and students are requested to download the respective class lists and verify textbook publishers before making purchases from any external retail source.
                </p>
              </div>

              {/* Downloads list */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Available Downloads</h3>
              <div className="space-y-4">
                {assets.map((item) => (
                  <div 
                    key={item.title}
                    className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="flex gap-4">
                      <div className="p-3.5 bg-brand-navy/5 text-brand-navy rounded-xl h-fit shrink-0">
                        <FileText className="w-7 h-7 text-brand-navy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-lg leading-snug mb-1">{item.title}</h4>
                        <span className="text-xs text-brand-gray font-bold block mb-2">{item.size}</span>
                        <p className="text-sm text-brand-gray leading-relaxed font-semibold">{item.desc}</p>
                      </div>
                    </div>
                    
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-[#E85D22] text-white rounded-xl text-sm font-bold hover:scale-[1.03] transition-transform shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Download className="w-4.5 h-4.5" />
                      <span>Download</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Advisory Notice Card */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
                <Info className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-xl font-bold text-brand-navy mb-3">Important Notice</h3>
                
                <p className="text-brand-gray text-xs leading-relaxed mb-4">
                  The textbook list is finalized by the Academic Council of Manka Public School in compliance with CBSE rules. 
                </p>
                <p className="text-brand-gray text-xs leading-relaxed mb-4">
                  The school does not authorize or mandate purchase of textbooks or stationery from any specific seller. Parents have absolute freedom to procure materials from any convenient source.
                </p>
                <p className="text-brand-gray text-xs leading-relaxed">
                  For details on pre-school Montessori materials or book sets, please visit the primary school counselor office during work hours (08:30 AM to 02:00 PM).
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
