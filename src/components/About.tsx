"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import EditableText from "./cms/EditableText";

const Counter = ({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About({ content }: { content?: any }) {
  const defaultContent = {
    title: "Nurturing Leaders of Tomorrow",
    description: "Manka Public School is a premier educational institution committed to providing holistic education. We believe in creating an environment where curiosity is encouraged, creativity is nurtured, and character is built.",
    vision: "To be a center of excellence in education that empowers students to reach their full potential and contribute positively to society.",
    mission: "To provide a dynamic and inclusive learning environment that fosters intellectual, social, and emotional growth through innovative teaching methodologies."
  };
  const c = content || defaultContent;

  const stats = [
    { label: "Students", value: 1400, suffix: "+" },
    { label: "Teachers", value: 100, suffix: "+" },
    { label: "Years of Excellence", value: 19, suffix: "" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-brand-white text-brand-navy">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image/Logo Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[200px] sm:h-[320px] md:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-[#F5FAFF] border border-gray-100 flex items-center justify-center p-6 sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-yellow/10 via-transparent to-transparent opacity-50" />
            <img 
              src="/about-logo.png" 
              alt="Manka Public School Logo" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-2 sm:mb-4">About Us</h2>
              <EditableText
                as="h3"
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
                sectionSlug="about-section"
                field="title"
                initialValue={c.title}
              />
              <EditableText
                as="p"
                className="text-brand-gray text-base sm:text-lg leading-relaxed"
                sectionSlug="about-section"
                field="description"
                initialValue={c.description}
                multiline={true}
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="p-5 sm:p-6 bg-brand-blue/30 rounded-2xl border border-brand-blue/50">
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Our Vision</h4>
                <EditableText
                  as="p"
                  className="text-brand-gray text-sm sm:text-base"
                  sectionSlug="about-section"
                  field="vision"
                  initialValue={c.vision}
                  multiline={true}
                />
              </div>
              <div className="p-5 sm:p-6 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/30">
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Our Mission</h4>
                <EditableText
                  as="p"
                  className="text-brand-gray text-sm sm:text-base"
                  sectionSlug="about-section"
                  field="mission"
                  initialValue={c.mission}
                  multiline={true}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 sm:pt-8 border-t border-brand-gray/20 text-center sm:text-left">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col sm:block">
                  <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-0.5 sm:mb-1">
                    <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-brand-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
