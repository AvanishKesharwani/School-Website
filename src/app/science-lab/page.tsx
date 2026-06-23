"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Atom, Dna, Calculator, Monitor, CheckCircle2, ChevronRight } from "lucide-react";

type LabId = "physics" | "chemistry" | "biology" | "mathematics" | "computer";

export default function ScienceLabPage() {
  const [activeLab, setActiveLab] = useState<LabId>("physics");

  const labs = [
    { id: "physics" as LabId, name: "Physics Lab", icon: Atom, tagline: "Observation & Deduction" },
    { id: "chemistry" as LabId, name: "Chemistry Lab", icon: FlaskConical, tagline: "Safety & Chemical Proof Standards" },
    { id: "biology" as LabId, name: "Biology Lab", icon: Dna, tagline: "Museum-cum-Demonstration" },
    { id: "mathematics" as LabId, name: "Mathematics Lab", icon: Calculator, tagline: "Mental Ability & Multi-media" },
    { id: "computer" as LabId, name: "Computer Lab", icon: Monitor, tagline: "21st Century Tech Integration" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="labs-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#labs-grid)" />
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
              Practical Learning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Science & Tech Labs
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Well-equipped state-of-the-art laboratories designed to foster innovation, curiosity, and scientific inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Lab Selector */}
            <div className="w-full lg:w-1/3 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 bg-white/50 p-2.5 rounded-2xl border border-gray-100 backdrop-blur-sm scrollbar-none">
              {labs.map((lab) => {
                const Icon = lab.icon;
                const isActive = activeLab === lab.id;
                return (
                  <button
                    key={lab.id}
                    onClick={() => setActiveLab(lab.id)}
                    className={`flex items-center gap-4 px-5 py-4.5 rounded-xl text-sm font-semibold transition-all duration-200 text-left whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/15 scale-[1.02] w-full" 
                        : "text-brand-gray hover:bg-brand-navy/5 hover:text-brand-navy w-full"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? "bg-brand-yellow text-brand-navy" : "bg-brand-navy/5 text-brand-navy"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="hidden md:block overflow-hidden">
                      <span className="font-bold text-sm block leading-none mb-1">{lab.name}</span>
                      <span className={`text-[10px] block truncate font-medium ${isActive ? "text-white/80" : "text-brand-gray/80"}`}>{lab.tagline}</span>
                    </div>
                    <span className="block md:hidden font-bold">{lab.name}</span>
                    <ChevronRight className={`ml-auto w-4 h-4 hidden lg:block transition-transform ${isActive ? "translate-x-1 opacity-100" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Lab Detail Card */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 md:p-10 min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeLab === "physics" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Atom className="w-8 h-8 text-brand-yellow" />
                        Physics Laboratory
                      </h2>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        Knowledge of Physics is gained by experimentation, observation and deduction. For any school, the Physics lab is always treated as the hub of scientific activities—a plan to inculcate scientific temper and to let the children innovate, relating the discipline of physics with nature and natural phenomena.
                      </p>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The Physics lab in our school provides all the desired support systems for formal as well as informal lab activities pertaining to the existing as well as competitive exams like JEE and AIEEE syllabus.
                      </p>
                      
                      <div className="mt-6 p-5 bg-[#F5FAFF] border border-blue-50 rounded-2xl">
                        <h4 className="font-bold text-brand-navy mb-2">Key Equipment & Standards</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Latest optical & electronic apparatus</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Safety-first design & electrical grids</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Support for JEE & Board curriculums</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Regularly updated measuring systems</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeLab === "chemistry" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <FlaskConical className="w-8 h-8 text-brand-yellow" />
                        Chemistry Laboratory
                      </h2>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The Chemistry Laboratory of the school is among our best. The laboratory is designed following all safety norms. The working table tops are made of chemical-proof, high-quality granite.
                      </p>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The laboratory is well-equipped with a synthetic resin-based water treatment plant, electronic balances, electric hot plates, fire extinguishers, emergency water supplies, and medical first-aid kits.
                      </p>

                      <div className="p-5 bg-amber-50/50 border border-amber-100 rounded-2xl flex gap-3 text-sm text-amber-800">
                        <span className="font-bold text-xs shrink-0 bg-brand-yellow text-brand-navy px-2 py-0.5 rounded-lg h-fit mt-0.5">Rules</span>
                        <p className="leading-relaxed">
                          Wearing lab coats is strictly compulsory for all students in the Chemistry Laboratory to ensure clothing and skin safety.
                        </p>
                      </div>

                      <div className="mt-6 p-5 bg-[#F5FAFF] border border-blue-50 rounded-2xl">
                        <h4 className="font-bold text-brand-navy mb-2">Key Equipment & Standards</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Chemical proof granite counter-tops</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Water treatment demineralization plant</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Borosilicate glassware & medical kits</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Extra pure grade chemicals</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeLab === "biology" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Dna className="w-8 h-8 text-brand-yellow" />
                        Biology Laboratory
                      </h2>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The Biology lab is a museum-cum-demonstration lab. It can accommodate 45 students comfortably and caters to Science and Biology practical classes for Grades IX, X, XI, and XII.
                      </p>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The syllabus of Biology covers the latest developments and is designed based on technological and ecological needs. The mission of our teachers is to train young minds and disseminate deep knowledge in the field of Life Sciences.
                      </p>
                      
                      <div className="mt-6 p-5 bg-[#F5FAFF] border border-blue-50 rounded-2xl">
                        <h4 className="font-bold text-brand-navy mb-2">Key Equipment & Standards</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Accommodates 45 students at once</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Rich botanical & zoological specimen museum</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> High-power compound & digital microscopes</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Dissection kits & physiological charts</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeLab === "mathematics" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Calculator className="w-8 h-8 text-brand-yellow" />
                        Mathematics Laboratory
                      </h2>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The school has established a well-equipped Mathematics laboratory. In the lab, the school has introduced and displayed various models as well as quiz boards with the specific purpose of enhancing students' mental abilities and broadening their horizon of knowledge in the field of Mathematics.
                      </p>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        The lab has also introduced highly sophisticated latest Multimedia techniques. The students conduct their practical work by viewing the LCD Projector and by performing various experiments using mathematical models and tools.
                      </p>
                      
                      <div className="mt-6 p-5 bg-[#F5FAFF] border border-blue-50 rounded-2xl">
                        <h4 className="font-bold text-brand-navy mb-2">Key Equipment & Standards</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> LCD Projection & Multimedia system</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Interactive mathematical model kits</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Dynamic quiz boards for arithmetic</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Practical geometry & spatial tools</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeLab === "computer" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-brand-navy flex items-center gap-3">
                        <Monitor className="w-8 h-8 text-brand-yellow" />
                        Computer Laboratory
                      </h2>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        Technology plays a major role in twenty-first-century education. Our model of integrating technology into the curriculum means that computers are on demand throughout the school day.
                      </p>
                      <p className="text-brand-gray text-lg leading-relaxed">
                        Whether using desktops or laptops, Macs or PCs, the computer lab remains the center for most computing activity in the school, supporting programming classes, CBSE IT curriculums, and digital research.
                      </p>
                      
                      <div className="mt-6 p-5 bg-[#F5FAFF] border border-blue-50 rounded-2xl">
                        <h4 className="font-bold text-brand-navy mb-2">Key Equipment & Standards</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-gray font-semibold">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> High-speed internet with firewall filters</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Modern desktop computers for all pupils</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> Full range of programming software</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-brand-yellow shrink-0" /> UPS backup grids for uninterrupted work</li>
                        </ul>
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
