"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, HeartPulse, Activity, Flame, ChevronDown, Quote } from "lucide-react";
import EditableText from "@/components/cms/EditableText";

const dimensions = [
  {
    title: "Intellectual Growth",
    desc: "Fostering critical thinking, curiosity, and academic excellence.",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Emotional Resilience",
    desc: "Building self-confidence, empathy, and emotional intelligence.",
    icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Physical Well-being",
    desc: "Encouraging health, fitness, teamwork, and sportsmanship.",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Spiritual Awakening",
    desc: "Cultivating a deep inner conscience, moral clarity, and faith.",
    icon: Flame,
    color: "text-amber-500",
    bg: "bg-amber-50"
  }
];

export default function VisionMissionClient({ content }: { content?: any }) {
  const c = content || {};

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
            alt="Vision and Mission background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 to-brand-navy" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <EditableText 
              as="h1" 
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
              sectionSlug="vision-mission-page"
              field="hero_title"
              initialValue={c.hero_title || "Our Mission & Vision"}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <EditableText 
              as="p" 
              className="text-xl text-brand-yellow max-w-2xl mx-auto font-medium"
              sectionSlug="vision-mission-page"
              field="hero_subtitle"
              initialValue={c.hero_subtitle || "Nurturing not only academic achievers but also emotionally resilient, morally grounded, and socially responsible human beings."}
              multiline={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Mission: Total Education */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-4 bg-brand-yellow/10 rounded-full mb-6"
            >
              <Activity className="w-8 h-8 text-brand-yellow" />
            </motion.div>
            <EditableText 
              as="h2" 
              className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-6 block"
              sectionSlug="vision-mission-page"
              field="mission_title"
              initialValue={c.mission_title || "Our Mission: Total Education"}
            />
            <EditableText 
              as="p" 
              className="text-lg md:text-xl text-brand-gray leading-relaxed mb-4 block"
              sectionSlug="vision-mission-page"
              field="mission_p1"
              initialValue={c.mission_p1 || "The foundational mission of Manka Public School, Champa, is the realization of <strong>\"Total Education.\"</strong> We believe that true learning cannot be confined to textbooks or academic scores alone. Our holistic approach is meticulously designed to address the Total Development of the individual."}
              multiline={true}
            />
            <EditableText 
              as="p" 
              className="text-lg md:text-xl text-brand-gray leading-relaxed block"
              sectionSlug="vision-mission-page"
              field="mission_p2"
              initialValue={c.mission_p2 || "We pledge to nurture every student across four vital dimensions:"}
              multiline={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${dim.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${dim.color}`} />
                  </div>
                  <EditableText 
                    as="h3" 
                    className="text-2xl font-bold text-brand-navy mb-4 block"
                    sectionSlug="vision-mission-page"
                    field={`dim_${idx}_title`}
                    initialValue={c[`dim_${idx}_title`] || dim.title}
                  />
                  <EditableText 
                    as="p" 
                    className="text-brand-gray text-lg block"
                    sectionSlug="vision-mission-page"
                    field={`dim_${idx}_desc`}
                    initialValue={c[`dim_${idx}_desc`] || dim.desc}
                    multiline={true}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision: Shaping Noble Souls */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" 
            alt="Vision background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <EditableText 
                as="h2" 
                className="text-5xl md:text-6xl font-extrabold mb-10 block"
                sectionSlug="vision-mission-page"
                field="vision_title"
                initialValue={c.vision_title || "Our Vision: Shaping Noble Souls for Society"}
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <EditableText 
                as="p" 
                className="text-xl text-white/90 leading-relaxed mb-8 font-light block"
                sectionSlug="vision-mission-page"
                field="vision_p1"
                initialValue={c.vision_p1 || "Our vision is to build an educational sanctuary where academic learning meets deep-rooted human values. We envision a generation of young leaders who are globally competent, yet firmly anchored in personal conviction and integrity."}
                multiline={true}
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <EditableText 
                as="p" 
                className="text-xl text-white/90 leading-relaxed mb-16 font-light block"
                sectionSlug="vision-mission-page"
                field="vision_p2"
                initialValue={c.vision_p2 || "We do not merely aim to make our students literate; we aim to make them truly educated. Our ultimate vision is to graduate mature, compassionate individuals who leave our campus ready to excel in their careers while remaining deeply committed to the divine spirit and the welfare of their fellow human beings."}
                multiline={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-yellow/30" />
              <EditableText 
                as="p" 
                className="text-2xl md:text-3xl font-semibold text-brand-yellow leading-tight relative z-10 italic block"
                sectionSlug="vision-mission-page"
                field="vision_quote"
                initialValue={c.vision_quote || "\"We do not merely create literate minds; we nurture educated hearts, noble souls, and responsible citizens.\""}
                multiline={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
