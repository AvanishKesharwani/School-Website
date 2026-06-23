"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, Gamepad2, Award, Zap, Heart } from "lucide-react";

export default function SportsPage() {
  const outdoorSports = [
    { name: "Football", desc: "Developing agility, teamwork, and tactical skills on our full-size turf field." },
    { name: "Cricket", desc: "A school favorite featuring net practices, professional coaching, and tournaments." },
    { name: "Basketball", desc: "A standard hard-court dedicated to enhancing reflexes and physical fitness." },
    { name: "Volleyball", desc: "Promotes quick coordinates and high-intensity physical jumps." },
  ];

  const indoorSports = [
    { name: "Table Tennis", desc: "Dedicated setups to improve reflexes, hand-eye coordination, and mental focus." },
    { name: "Karate", desc: "Taught by certified martial artists for self-defense, confidence, and discipline." },
    { name: "Chess & Caroms", desc: "Fosters strategic planning, focus, and quiet intellectual battles." },
    { name: "Indoor Badminton", desc: "Well-lit indoor courts protecting matches from weather interference." },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="sports-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#sports-grid)" />
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
              Athletics & Physical Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Sports & Games
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Nurturing competitive spirit, physical fitness, discipline, and team collaboration through athletics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Sports details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Sports as a Pillar of Character</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Sports and Games have been an integral part of school life as mind and body are inseparable. Sports and Games not only enliven and refresh the body, they also activate and boost the performance of the mind and at the same time play a great role in disciplining the whole person.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Added to outdoor activities, a covered play area with a wide range of play equipment gives an uninterrupted opportunity to play, especially during the monsoon season. Our professional physical instructors ensure children develop athletic skills in a safe environment.
                </p>
              </div>

              {/* Outdoor Sports Grid */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Outdoor Sports Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outdoorSports.map((sport) => (
                  <div key={sport.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-brand-navy text-lg mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-brand-yellow" />
                      {sport.name}
                    </h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{sport.desc}</p>
                  </div>
                ))}
              </div>

              {/* Indoor Sports Grid */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Indoor Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {indoorSports.map((sport) => (
                  <div key={sport.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-brand-navy text-lg mb-2 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-brand-yellow" />
                      {sport.name}
                    </h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{sport.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Sports Value / Highlights */}
            <div className="space-y-6">
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <Trophy className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-2xl font-bold mb-3">MPS Sports Values</h3>
                
                <ul className="space-y-4 my-6 text-sm text-white/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span><strong>Teamwork:</strong> Learning to coordinate and win together.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span><strong>Discipline:</strong> Respecting game rules and referees.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span><strong>Resilience:</strong> Handling defeats gracefully and bouncing back.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span><strong>Leadership:</strong> Taking responsibilities as team captains.</span>
                  </li>
                </ul>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-white/80 leading-relaxed italic text-center">
                    Annual Sports Meet is organized in the winter semester featuring inter-house tournaments.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5FAFF] p-6 rounded-2xl border border-blue-50 space-y-4">
                <div className="flex gap-3 text-brand-navy">
                  <Award className="w-6 h-6 text-brand-navy shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Physical Instructors</h4>
                    <p className="text-xs text-brand-gray mt-0.5">3 Full-time Physical Education Teachers (PET).</p>
                  </div>
                </div>
                <div className="flex gap-3 text-brand-navy">
                  <Heart className="w-6 h-6 text-brand-navy shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Monsoon Shelter</h4>
                    <p className="text-xs text-brand-gray mt-0.5">Fully covered play structures for uninterrupted sports.</p>
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
