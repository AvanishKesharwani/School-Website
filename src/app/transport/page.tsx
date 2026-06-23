"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Bus, ShieldCheck, Eye, Sparkles, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";

export default function TransportPage() {
  const safetyFeatures = [
    { 
      title: "Speed Governors", 
      desc: "Installed in all vehicles to restrict speeds and enforce safe, defensive driving protocols.",
      icon: ShieldCheck
    },
    { 
      title: "Surveillance Cameras", 
      desc: "Each bus features high-resolution interior cameras monitored continuously by our security surveillance team.",
      icon: Eye
    },
    { 
      title: "Experienced Drivers", 
      desc: "Drivers undergo strict qualification checks and regular physical/driving examinations before appointment.",
      icon: Sparkles
    },
    { 
      title: "Emergency Kits", 
      desc: "Equipped with fully stocked first-aid kits, fire extinguishers, and emergency exit exits as per safety norms.",
      icon: AlertCircle
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="transport-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#transport-grid)" />
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
              Safe Commutes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              School Transportation
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              A secure, reliable, and closely monitored bus network connecting our students across the city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Transportation details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">About Our Transport Service</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Our transport fleet consists of many well-maintained vehicles. They traverse the geography of the city and nearby regions to pick up and drop off our students safely and punctually.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Special care is taken while appointing the drivers to ensure that only experienced and qualified professionals are appointed. Each applicant undergoes a rigorous practical driving test and background checks before they join our transit team.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  We are deeply committed to reducing our carbon footprint and actively encourage our students to use the school bus service. Commuting together builds friendship and community among children.
                </p>
              </div>

              {/* Safety Features Cards Grid */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Transit Safety Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                      <div className="p-3 bg-brand-navy/5 text-brand-navy rounded-xl h-fit shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-base mb-1.5">{feature.title}</h4>
                        <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Transport Rules & Guidelines */}
            <div className="space-y-6">
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <Bus className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-2xl font-bold mb-3">Bus Rules</h3>
                
                <ul className="space-y-3.5 my-6 text-sm text-white/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Seats are subject to availability and fee payments.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Routes are fixed and cannot be changed for individual convenience.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Students must be at boarding points 5 minutes before scheduled times.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Strict discipline must be maintained during commutes.</span>
                  </li>
                </ul>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-white/80 leading-relaxed italic">
                    For route changes or seat cancellation requests, please contact our transport manager at the administration office.
                  </p>
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
