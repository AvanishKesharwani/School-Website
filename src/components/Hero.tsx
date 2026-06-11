"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import EditableText from "./cms/EditableText";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-brand-navy overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        {/* Placeholder for the actual image. The user has provided photos of the white building with yellow school buses. */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
        />
      </motion.div>
      
      {/* Floating Particles Placeholder */}
      <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-white/10 via-transparent to-transparent" />

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 w-full max-w-6xl mx-auto"
        style={{ opacity: opacityText, y: yText }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <EditableText
            as="h1"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-[1.1]"
            sectionSlug="homepage-hero"
            field="title"
            initialValue={title || "Building Futures.<br />Inspiring Excellence."}
            multiline={true}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <EditableText
            as="p"
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-lg font-medium leading-relaxed"
            sectionSlug="homepage-hero"
            field="subtitle"
            initialValue={subtitle || "Empowering students with knowledge, character, creativity, and confidence."}
            multiline={true}
          />
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/admissions" className="px-8 py-4 bg-brand-yellow text-brand-navy rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl inline-block text-center">
            Apply for Admission
          </Link>
          <Link href="/#contact" className="px-8 py-4 bg-brand-white/10 text-brand-white border border-brand-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all hover:bg-brand-white/20 hover:scale-105 shadow-xl inline-block text-center">
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
