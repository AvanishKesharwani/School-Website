"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, GraduationCap, HeartHandshake, Lightbulb, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import EditableText from "@/components/cms/EditableText";

const benefits = [
  {
    title: "A Culture of Innovation",
    desc: "Teach using modern, tech-driven systems and real-world methodologies that go far beyond standard rote learning.",
    icon: Lightbulb,
  },
  {
    title: "Holistic Environment",
    desc: "Work in a space that genuinely values character, morality, and spiritual well-being alongside academic excellence.",
    icon: HeartHandshake,
  },
  {
    title: "Professional Growth",
    desc: "Access continuous training programs, workshops, and career advancement opportunities within our expanding educational group.",
    icon: TrendingUp,
  },
  {
    title: "A Supportive Community",
    desc: "Collaborate with progressive educators who share a commitment to kindness, universal brotherhood, and teamwork.",
    icon: Users,
  }
];

const openings = [
  {
    category: "Academic Faculty",
    roles: [
      "PGTs / TGTs / PRTs across all core subjects",
      "Mathematics",
      "Sciences",
      "English",
      "Social Studies",
      "Computer Science",
      "Languages",
      "Pre-Primary Educators specializing in activity-based learning",
    ]
  },
  {
    category: "Co-Curricular & Specialist Staff",
    roles: [
      "Physical Education Instructors",
      "Sports Coaches",
      "Art Teachers",
      "Music Teachers",
      "Drama Teachers",
      "Librarians",
      "Lab Assistants",
      "School Counselors",
      "Moral Education Mentors",
    ]
  },
  {
    category: "Administrative & Support Roles",
    roles: [
      "Admissions Counselors",
      "Front Office Executives",
      "IT Support Staff",
      "Systems Administrators",
      "Human Resources Personnel",
      "Accounts Personnel",
    ]
  }
];

const candidateQualities = [
  { title: "Strong Subject Expertise", desc: "Relevant academic qualifications such as B.Ed., Post-Graduation, or specialized certifications as per applicable norms." },
  { title: "A Learner's Mindset", desc: "Openness to adapting to educational technologies and evolving global teaching practices." },
  { title: "Core Values", desc: "Empathy, integrity, strong moral character, and dedication to nurturing disciplined and compassionate students." },
  { title: "Communication Skills", desc: "The ability to connect effectively with students, parents, and colleagues through excellent interpersonal communication." }
];

export default function CareersClient({ content }: { content?: any }) {
  const c = content || {};

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
            alt="Teachers collaborating" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <EditableText 
                as="h1" 
                className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight block"
                sectionSlug="careers-page"
                field="hero_title"
                initialValue={c.hero_title || "Work With Us: <br/>Shape the Future at <span class=\"text-brand-yellow\">Manka Public School</span>"}
                multiline={true}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <EditableText 
                as="p" 
                className="text-xl text-white/90 mb-4 font-light italic block"
                sectionSlug="careers-page"
                field="hero_subtitle"
                initialValue={c.hero_subtitle || "At Manka Public School, exceptional education begins with exceptional educators."}
                multiline={true}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <EditableText 
                as="p" 
                className="text-lg text-white/80 mb-10 leading-relaxed block"
                sectionSlug="careers-page"
                field="hero_desc"
                initialValue={c.hero_desc || "Managed by the Maa Manka Shikshan Samiti, our institutions are centers of educational metamorphosis—where traditional values meet cutting-edge global teaching methodologies."}
                multiline={true}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#openings" className="px-8 py-4 bg-brand-yellow text-brand-navy font-bold rounded-full hover:bg-yellow-400 transition-colors text-center">
                View Open Positions
              </a>
              <a href="#apply" className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-colors text-center backdrop-blur-sm">
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Build Your Career With Us? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <EditableText 
              as="h2" 
              className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-4 block"
              sectionSlug="careers-page"
              field="benefits_title"
              initialValue={c.benefits_title || "🌟 Why Build Your Career With Us?"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-8 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <div>
                    <EditableText 
                      as="h3" 
                      className="text-2xl font-bold text-brand-navy mb-3 block"
                      sectionSlug="careers-page"
                      field={`benefit_${idx}_title`}
                      initialValue={c[`benefit_${idx}_title`] || benefit.title}
                    />
                    <EditableText 
                      as="p" 
                      className="text-brand-gray leading-relaxed block"
                      sectionSlug="careers-page"
                      field={`benefit_${idx}_desc`}
                      initialValue={c[`benefit_${idx}_desc`] || benefit.desc}
                      multiline={true}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Inspire Educate Transform" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <EditableText 
              as="h2" 
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 block"
              sectionSlug="careers-page"
              field="cta_title"
              initialValue={c.cta_title || "Inspire. Educate. Transform."}
            />
            <EditableText 
              as="p" 
              className="text-xl text-white/90 mb-10 leading-relaxed font-medium block"
              sectionSlug="careers-page"
              field="cta_desc"
              initialValue={c.cta_desc || "If you are passionate about shaping young minds, committed to lifelong learning, and eager to create a meaningful impact, we invite you to become a part of the Manka Public School family."}
              multiline={true}
            />
            <a href="#apply" className="inline-block px-10 py-5 bg-brand-yellow text-brand-navy font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl">
              Apply Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
