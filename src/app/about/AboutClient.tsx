"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown, Star, Award, Shield, Zap, Heart, Users, BookOpen, Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import EditableText from "@/components/cms/EditableText";

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "Upholding strong moral principles and honesty in all actions." },
  { icon: Star, title: "Excellence", desc: "Striving for the highest standards in academics and character." },
  { icon: Users, title: "Respect", desc: "Valuing diversity and treating everyone with dignity." },
  { icon: Zap, title: "Innovation", desc: "Embracing new ideas and creative problem-solving." },
  { icon: Heart, title: "Compassion", desc: "Fostering empathy and kindness towards others." },
  { icon: Award, title: "Leadership", desc: "Developing the courage to lead and inspire others." },
  { icon: CheckCircle2, title: "Discipline", desc: "Cultivating self-control, focus, and responsibility." },
  { icon: BookOpen, title: "Lifelong Learning", desc: "Instilling a continuous passion for knowledge." },
];

const whyChooseUs = [
  "Student-centric learning",
  "Experienced and caring educators",
  "Modern teaching methodologies",
  "Strong moral foundation",
  "Co-curricular development",
  "Safe and inclusive environment",
  "Focus on critical thinking and leadership",
  "Preparing students for a global future"
];

export default function AboutClient({ content }: { content?: any }) {
  const c = content || {};

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Students learning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/50 to-brand-navy/90" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <EditableText 
              as="h1" 
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
              sectionSlug="about-us-page"
              field="hero_title"
              initialValue={c.hero_title || "MANKA PUBLIC SCHOOL"}
            />
            <EditableText 
              as="h2" 
              className="text-xl md:text-3xl font-semibold mb-6 text-brand-yellow"
              sectionSlug="about-us-page"
              field="hero_subtitle"
              initialValue={c.hero_subtitle || "Managed by Maa Manka Shikshan Samiti"}
            />
            <EditableText 
              as="p" 
              className="text-lg md:text-xl max-w-3xl mx-auto font-light text-white/90 italic"
              sectionSlug="about-us-page"
              field="hero_tagline"
              initialValue={c.hero_tagline || "\"Nurturing Future Citizens with Values, Vision, and Excellence.\""}
              multiline={true}
            />
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <EditableText 
              as="p" 
              className="text-xl leading-relaxed text-brand-gray mb-8"
              sectionSlug="about-us-page"
              field="intro_p1"
              initialValue={c.intro_p1 || "At Manka Public School, we believe that preparing the next generation to thrive in a rapidly evolving world demands a flexible, real-world approach to education. Managed by the visionary <strong class='text-brand-navy'>Maa Manka Shikshan Samiti</strong>, our institutions have seamlessly integrated modern systems and cutting-edge teaching methodologies, transforming learning into a truly global experience."}
              multiline={true}
            />
            <EditableText 
              as="p" 
              className="text-xl leading-relaxed text-brand-gray mb-8"
              sectionSlug="about-us-page"
              field="intro_p2"
              initialValue={c.intro_p2 || "With a growing footprint across the state of Chhattisgarh, Manka Public School is a world-class educational group dedicated to nurturing future citizens for life. We stand at the forefront of global educational transformation. Our unique learning philosophy sparks a powerful metamorphosis—infusing deeply rooted traditional values into a progressive, forward-thinking curriculum."}
              multiline={true}
            />
            <EditableText 
              as="p" 
              className="text-xl leading-relaxed text-brand-gray"
              sectionSlug="about-us-page"
              field="intro_p3"
              initialValue={c.intro_p3 || "We don't just teach; we equip our students to become independent thinkers who keep their feet firmly on the ground while possessing the agility to adapt, lead, and excel in their chosen fields anywhere in the world."}
              multiline={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-[#F5FAFF]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-110" />
              <Globe className="w-12 h-12 text-brand-yellow mb-8 relative z-10" />
              <EditableText 
                as="h3" 
                className="text-3xl font-bold text-brand-navy mb-6 relative z-10"
                sectionSlug="about-us-page"
                field="vision_title"
                initialValue={c.vision_title || "Our Vision"}
              />
              <EditableText 
                as="p" 
                className="text-lg text-brand-gray leading-relaxed relative z-10"
                sectionSlug="about-us-page"
                field="vision_desc"
                initialValue={c.vision_desc || "To empower every learner with knowledge, character, creativity, and confidence so they become responsible global citizens and compassionate leaders of tomorrow."}
                multiline={true}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-110" />
              <Star className="w-12 h-12 text-brand-yellow mb-8 relative z-10" />
              <EditableText 
                as="h3" 
                className="text-3xl font-bold text-white mb-6 relative z-10"
                sectionSlug="about-us-page"
                field="mission_title"
                initialValue={c.mission_title || "Our Mission"}
              />
              <EditableText 
                as="p" 
                className="text-lg text-white/80 leading-relaxed relative z-10"
                sectionSlug="about-us-page"
                field="mission_desc"
                initialValue={c.mission_desc || "To provide holistic education by blending traditional values with innovative teaching practices, enabling students to adapt, excel, and contribute meaningfully to society."}
                multiline={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <EditableText 
              as="h2" 
              className="text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase mb-4"
              sectionSlug="about-us-page"
              field="values_subtitle"
              initialValue={c.values_subtitle || "Our Principles"}
            />
            <EditableText 
              as="h3" 
              className="text-5xl md:text-6xl font-extrabold text-brand-navy"
              sectionSlug="about-us-page"
              field="values_title"
              initialValue={c.values_title || "Core Values"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-[#F8F9FA] hover:bg-brand-navy group transition-colors duration-300"
                >
                  <Icon className="w-10 h-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <EditableText 
                    as="h4" 
                    className="text-xl font-bold text-brand-navy group-hover:text-white mb-3 transition-colors"
                    sectionSlug="about-us-page"
                    field={`value_${idx}_title`}
                    initialValue={c[`value_${idx}_title`] || value.title}
                  />
                  <EditableText 
                    as="p" 
                    className="text-brand-gray group-hover:text-white/80 transition-colors leading-relaxed"
                    sectionSlug="about-us-page"
                    field={`value_${idx}_desc`}
                    initialValue={c[`value_${idx}_desc`] || value.desc}
                    multiline={true}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524901548315-080093699c26?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-10 object-cover" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <EditableText 
              as="h2" 
              className="text-5xl font-extrabold text-brand-navy mb-6"
              sectionSlug="about-us-page"
              field="cta_title"
              initialValue={c.cta_title || "Join the Manka Family"}
            />
            <EditableText 
              as="p" 
              className="text-xl text-brand-navy/80 mb-10 leading-relaxed font-medium"
              sectionSlug="about-us-page"
              field="cta_desc"
              initialValue={c.cta_desc || "Discover an educational experience where values meet vision, and every child is empowered to realize their fullest potential."}
              multiline={true}
            />
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions">
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-gray-900 hover:scale-105 transition-all shadow-xl">
                  Apply for Admission
                </button>
              </Link>
              <Link href="/#contact">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-xl border border-transparent">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
