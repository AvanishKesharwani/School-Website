"use client";

import { motion } from "framer-motion";
import { Users, MonitorPlay, Trophy, Bus, ShieldCheck, Beaker, ArrowRight } from "lucide-react";

const features = [
  { id: 1, title: "Experienced Faculty", icon: Users, desc: "Highly qualified and dedicated teachers committed to student success and holistic development." },
  { id: 2, title: "Smart Classrooms", icon: MonitorPlay, desc: "Interactive digital boards and modern learning tools in every class for immersive learning." },
  { id: 3, title: "Sports Excellence", icon: Trophy, desc: "World-class facilities and professional coaching to nurture physical endurance and teamwork." },
  { id: 4, title: "Transport Facility", icon: Bus, desc: "Safe, secure, and extensive fleet of yellow school buses covering all major routes." },
  { id: 5, title: "Safety & Security", icon: ShieldCheck, desc: "24/7 CCTV surveillance and strict security protocols to ensure a safe environment." },
  { id: 6, title: "Modern Labs", icon: Beaker, desc: "Well-equipped science and computer labs for hands-on, practical learning experiences." },
];

import EditableText from "./cms/EditableText";

export default function WhyChooseUs({ content }: { content?: any }) {
  const c = content || {
    title: "Next Generation",
    description: "We provide an environment where every child is valued, encouraged to discover their true potential, and prepared for the challenges of tomorrow. Our holistic approach ensures excellence beyond academics."
  };

  return (
    <section className="py-24 bg-white text-[#0F2747] relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5FAFF] rounded-l-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#E85D22]" />
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-[#E85D22] uppercase mb-4">
                Why Choose Us
              </h2>
            </div>
          
            <EditableText
              as="p"
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              sectionSlug="why-choose-us-section"
              field="description"
              initialValue={c.description}
              multiline={true}
            />
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Icon Container with Hover Animation */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F6AE2D] to-[#E85D22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-8 h-8 text-[#0F2747] relative z-10 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <EditableText
                  as="h4"
                  className="text-2xl font-bold mb-3 text-[#0F2747] group-hover:text-[#007BFF] transition-colors duration-300"
                  sectionSlug="why-choose-us-section"
                  field={`feature_${index}_title`}
                  initialValue={c[`feature_${index}_title`] || feature.title}
                />
                <EditableText
                  as="p"
                  className="text-gray-600 leading-relaxed mb-6"
                  sectionSlug="why-choose-us-section"
                  field={`feature_${index}_desc`}
                  initialValue={c[`feature_${index}_desc`] || feature.desc}
                  multiline={true}
                />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
