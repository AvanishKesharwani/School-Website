"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Trophy, Paintbrush, HeartHandshake, Compass as CompassIcon, Globe, Map } from "lucide-react";

export default function BeyondAcademicsPage() {
  const activities = [
    {
      title: "Sports & Athletics",
      desc: "We provide professional setups for Cricket, Football, Volleyball, Basketball, and indoor sports like Table Tennis, Chess, and Karate. Physical games build cardiovascular strength, motor skills, and healthy habits while teaching teamwork and discipline.",
      icon: Trophy
    },
    {
      title: "Cultural Activities",
      desc: "Identifies and nurtures creative skills in arts, music, dramatics, and presentation. Promotes organizational leadership and interpersonal communication. Students participate in dance, debates, painting, and public speaking contests.",
      icon: Paintbrush
    },
    {
      title: "Yoga, Meditation & Sanskar",
      desc: "Focuses on emotional and physical healing. Practices include Astanga Yoga meditation techniques to align body and mind. Cultivates self-awareness, peace, stress reduction, and moral values (Sanskar).",
      icon: HeartHandshake
    },
    {
      title: "Excursions & Field Trips",
      desc: "Our program features educational excursions to local sites (banks, factories, Vidhan Sabha, airports) and annual outbound trips. Travel helps kids experience the multicultural world, think out of the box, and learn from real-world contexts.",
      icon: Map
    },
    {
      title: "Club Activities",
      desc: "Social events and clubs (language, maths, science, art) let students practice skills outside formal classrooms, build lasting friendships, and interact informally with teachers.",
      icon: Globe
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="beyond-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#beyond-grid)" />
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
              Co-Curricular Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Beyond Academics
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Nurturing talents, building life skills, and broadening horizons through creative and cultural activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Holistic Development Beyond Textbooks</h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-6">
              At Manka Public School, we believe that education extends far beyond the boundaries of the classroom. True learning happens when children engage with the world, explore their creative interests, test their physical boundaries, and learn values like teamwork, empathy, and leadership.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              Our rich co-curricular program offers a wide range of athletic, artistic, scientific, and cultural avenues. We encourage every child to participate in clubs, camps, excursions, and activities that expand their horizons and make their school journey unforgettable.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-2">
            <Compass className="w-6 h-6 text-brand-yellow" />
            Our Co-Curricular Programs
          </h3>

          <div className="space-y-6">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="p-4 bg-brand-navy/5 text-brand-navy rounded-2xl shrink-0">
                    <Icon className="w-8 h-8 text-brand-navy" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-brand-navy">{act.title}</h4>
                    <p className="text-brand-gray text-sm md:text-base leading-relaxed font-medium">{act.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
