"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Users, Calendar, Clock, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export default function ParentsCornerClient() {
  const callingHours = [
    { dept: "Teachers & Academic Dept.", hours: "8:00 AM to 2:00 PM", status: "Active on working days" },
    { dept: "Accounts Department", hours: "8:00 AM to 2:00 PM", status: "Active on working days" },
    { dept: "Other Departments", hours: "8:00 AM to 2:00 PM", status: "Active on working days" },
    { dept: "Transport Department", hours: "6:00 AM to 7:00 PM", status: "Active on working days" },
    { dept: "Administrator", hours: "8:00 AM to 6:00 PM", status: "Available for queries" },
  ];

  const guidelines = [
    { text: "Parents may call at the given schedule only. No parent will be allowed to call before or after the scheduled timings.", highlight: false },
    { text: "Students' calls are totally prohibited; this rule should not be violated under any circumstances.", highlight: true },
    { text: "Parents must communicate politely and respectfully with all school staff members.", highlight: false },
    { text: "If parents face any issues while communicating with teachers/departments, or if they are dissatisfied with the conversation, they should bring this matter immediately to the Administrator.", highlight: false },
    { text: "Staff members are not permitted to pick up or answer calls outside the scheduled hours, and they are not responsible for returning missed calls during off-hours.", highlight: false },
    { text: "Parents are requested to keep conversations concise and utilize minimum time for telephone discussions.", highlight: false },
    { text: "For any urgent, serious matter that cannot be delayed, parents may call outside schedule hours, but only to the Administrator.", highlight: true },
    { text: "If any trouble is faced in getting a satisfactory response regarding non-academic matters, please contact the Administrator directly for clarification or further assistance.", highlight: false },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#F5FAFF]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="parents-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#parents-grid)" />
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-brand-yellow/20 text-brand-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Parent Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Parents' Corner
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Official calling schedules, guidelines, and communication protocols for parents and guardians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Calling Schedule */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-brand-navy">Calling Schedule</h2>
                    <p className="text-xs text-brand-gray font-semibold mt-0.5">Permitted hours on all working days</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {callingHours.map((item) => (
                    <div key={item.dept} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <span className="text-sm font-bold text-brand-navy">{item.dept}</span>
                        <span className="shrink-0 bg-brand-navy/5 text-brand-navy text-[11px] font-bold px-2 py-0.5 rounded-full border border-brand-navy/10 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#E85D22]" />
                          {item.hours}
                        </span>
                      </div>
                      <p className="text-xs text-brand-gray font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Info Box */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#0F2747] text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                  Communication Protocol
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium">
                  We value school-parent relationships and request all guardians to follow this calling matrix. This helps our teachers focus on instruction during school hours and ensures efficient handling of administrative requests.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Guidelines */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy rounded-2xl flex items-center justify-center shadow-sm">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-brand-navy font-sans">Guidelines for Parents</h2>
                    <p className="text-xs text-[#E85D22] font-bold uppercase tracking-wider mt-0.5">Telephone Call Guidelines</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {guidelines.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex gap-3.5 items-start p-3.5 rounded-2xl border transition-all ${
                        item.highlight 
                          ? "bg-red-50/50 border-red-100/70 shadow-sm" 
                          : "border-transparent hover:bg-gray-50"
                      }`}
                    >
                      <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        item.highlight 
                          ? "bg-red-100 text-red-600" 
                          : "bg-brand-navy/10 text-brand-navy"
                      }`}>
                        {item.highlight ? (
                          <AlertTriangle className="w-3.5 h-3.5" />
                        ) : (
                          <span className="text-[11px] font-extrabold">{idx + 1}</span>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <p className={`text-sm font-semibold leading-relaxed ${
                          item.highlight ? "text-red-950" : "text-brand-navy/95"
                        }`}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Helpful Note at the bottom */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3 items-start text-xs font-semibold text-brand-gray leading-relaxed bg-[#F5FAFF]/50 p-4 rounded-2xl border border-[#F5FAFF]">
                  <HelpCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <p>
                    Your cooperation helps us maintain discipline and focus. If you require in-person meetings with teachers or the principal, please seek prior appointment via the school desk.
                  </p>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
