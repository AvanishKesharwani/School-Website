"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, Clock } from "lucide-react";

export default function MessageClient() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="message-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#message-grid)" />
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
              Desk of Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              School Message
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Words of inspiration, guidance, and updates from the desk of Manka Public School's administration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section className="py-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-[#F5FAFF] rounded-2xl flex items-center justify-center text-[#E85D22] mb-6 shadow-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4">
              Details Coming Soon
            </h2>
            
            <p className="text-brand-gray text-base leading-relaxed mb-8 max-w-md">
              We are currently setting up the official address and messages from our Principal and leadership team. Please check back shortly for the full update.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-500">
              <Clock className="w-4 h-4 text-brand-yellow animate-pulse" />
              <span>Under Construction</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
