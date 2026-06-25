"use client";

import { useState, useActionState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, UserPlus, ClipboardCheck, Loader2, Phone } from "lucide-react";
import { submitAdmissionInquiry } from "@/app/actions/contact";

const steps = [
  { id: 1, title: "Online Inquiry", icon: UserPlus, desc: "Fill out the online inquiry form to express interest." },
  { id: 2, title: "Campus Tour", icon: CheckCircle, desc: "Visit our campus to experience the infrastructure and environment." },
  { id: 3, title: "Document Submission", icon: FileText, desc: "Submit the required documents including past academic records." },
  { id: 4, title: "Interaction", icon: ClipboardCheck, desc: "A brief interaction session with the student and parents." },
];

export default function Admission() {
  const [activeStep, setActiveStep] = useState(1);
  const [state, formAction, isPending] = useActionState(submitAdmissionInquiry, null);

  return (
    <section id="admissions" className="py-24 bg-brand-white text-brand-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 bg-brand-navy text-white px-6 py-4.5 rounded-2xl shadow-lg border border-brand-navy/10 flex flex-col md:flex-row items-center justify-between gap-4 font-semibold text-sm md:text-base relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-brand-yellow animate-pulse shrink-0" />
              <span className="text-left leading-relaxed">
                For admission enquiry call us on{" "}
                <a href="tel:+918349239731" className="text-brand-yellow hover:underline">+91 8349239731</a>
                ,{" "}
                <a href="tel:+917489039731" className="text-brand-yellow hover:underline">+91 7489039731</a>
              </span>
            </div>
            <div className="text-xs bg-white/10 px-3.5 py-1.5 rounded-full text-white/95 border border-white/5 font-bold shrink-0 tracking-wide">
              CBSE Affiliation Number- 3330393
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Admissions Open
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-gray"
          >
            Join the Manka Public School family. Follow our simple, transparent admission process to secure your child's future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Process Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Admission Process</h3>
            <div className="relative border-l-2 border-brand-gray/20 ml-6 space-y-12 pb-8">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === activeStep;
                const isPassed = step.id < activeStep;

                return (
                  <div 
                    key={step.id} 
                    className="relative pl-10 cursor-pointer group"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Circle Indicator */}
                    <div className={`absolute -left-[21px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-brand-white transition-colors duration-300 ${
                      isActive ? "bg-brand-yellow text-brand-navy scale-110" : 
                      isPassed ? "bg-brand-navy text-brand-white" : "bg-brand-gray/20 text-brand-gray"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                      <h4 className={`text-xl font-bold mb-2 ${isActive ? "text-brand-navy" : "text-brand-gray"}`}>
                        Step {step.id}: {step.title}
                      </h4>
                      <p className="text-brand-gray leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-brand-navy/5 rounded-2xl border border-brand-navy/10">
              <h4 className="font-bold text-lg mb-4">Required Documents</h4>
              <ul className="space-y-3 text-brand-gray">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-yellow" /> Birth Certificate</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-yellow" /> Previous School Marksheet</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-yellow" /> Transfer Certificate (TC)</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-yellow" /> Passport Size Photographs</li>
              </ul>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-brand-navy text-brand-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl font-bold mb-2 relative z-10">Start Your Journey</h3>
            <p className="text-brand-white/80 mb-8 relative z-10">Fill out this form and our admission counselor will contact you shortly.</p>

            <form className="space-y-6 relative z-10" action={formAction}>
              {state?.success && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200">
                  Your inquiry has been submitted! Our counselor will contact you shortly.
                </div>
              )}
              {state?.error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
                  {state.error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-white/80 mb-2">Parent's Name</label>
                  <input type="text" name="parentName" required className="w-full bg-brand-white/10 border border-brand-white/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-white/80 mb-2">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full bg-brand-white/10 border border-brand-white/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-white/80 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full bg-brand-white/10 border border-brand-white/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="john@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-white/80 mb-2">Student's Name</label>
                  <input type="text" name="studentName" required className="w-full bg-brand-white/10 border border-brand-white/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Student Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-white/80 mb-2">Grade Applying For</label>
                  <select name="grade" required className="w-full bg-brand-white/10 border border-brand-white/20 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all appearance-none">
                    <option value="" className="text-brand-navy">Select Grade</option>
                    <option value="pre-primary" className="text-brand-navy">Pre Primary</option>
                    <option value="1" className="text-brand-navy">Grade 1-5</option>
                    <option value="6" className="text-brand-navy">Grade 6-8</option>
                    <option value="9" className="text-brand-navy">Grade 9-10</option>
                    <option value="11" className="text-brand-navy">Grade 11-12</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className="w-full bg-brand-yellow text-brand-navy font-bold text-lg py-4 rounded-xl hover:bg-brand-white transition-colors duration-300 mt-4 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? "Submitting..." : "Submit Inquiry"}
                {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
