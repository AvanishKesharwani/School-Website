"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Heart, Calendar, HelpCircle, Truck, CheckCircle2 } from "lucide-react";

export default function MedicalFacilityPage() {
  const sections = [
    {
      title: "Annual Medical Camp",
      desc: "Conducted every year where students undergo a medical checkup by physicians and other specialists. Includes checking general physique, dental checkups, vision, and hearing tests.",
      icon: Calendar
    },
    {
      title: "First Aid & Clinic Time",
      desc: "First aid is given immediately for all minor injuries that happen within the school. A qualified medical attendant is available on campus throughout school hours.",
      icon: ShieldAlert
    },
    {
      title: "Hygienic Medical Room",
      desc: "A very hygienic, well-maintained room to accommodate students falling sick. Furnished with first-aid medicines and beds. Sterilized daily using antibacterial cleansers.",
      icon: Heart
    },
    {
      title: "Emergency Transport Service",
      desc: "The school keeps a dedicated emergency vehicle and an on-call driver on campus for rapid transportation of sick or injured pupils to nearby clinics/hospitals.",
      icon: Truck
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="medical-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#medical-grid)" />
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
              Student Wellbeing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Medical Facility
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Prioritizing the health, safety, and physical wellbeing of our students with active care systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column: Medical details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Health Standards</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  Manka Public School takes the issue of student wellbeing very seriously. The school has qualified medical support on campus to take care of our pupils whenever the need arises.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  We are also among the select boarding institutions to have tie-ups with top-tier hospitals in the vicinity to cater to any major medical emergencies. We understand the worries that parents face regarding their child's health when away from home. Manka Public School is as much concerned as the parents and guardians of each and every student studying in our institute.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed">
                  Parents can rest assured that in case of any medical issue, the student's wellbeing is our absolute first priority, and the parents as well as local guardians are immediately informed.
                </p>
              </div>

              {/* Service Cards */}
              <h3 className="text-2xl font-bold text-brand-navy pt-4">Healthcare Systems</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                      <div className="p-3 bg-brand-navy/5 text-brand-navy rounded-xl h-fit shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-base mb-1.5">{sec.title}</h4>
                        <p className="text-sm text-brand-gray leading-relaxed">{sec.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Emergency & Contact Card */}
            <div className="space-y-6">
              <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <Activity className="w-12 h-12 text-brand-yellow mb-6" />
                
                <h3 className="text-2xl font-bold mb-3">Quick Support</h3>
                
                <ul className="space-y-3.5 my-6 text-sm text-white/80">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Dedicated Medical Attendant during school hours.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Emergency transportation vehicle active 24/7.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Annual medical camps for hearing, vision & dental checks.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>Strict daily sterilization of clinical spaces and linens.</span>
                  </li>
                </ul>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-white/85 leading-relaxed italic text-center">
                    Parents must submit a health record certificate and mention any allergies at the time of admission.
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
