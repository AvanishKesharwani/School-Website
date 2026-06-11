"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Loader2 } from "lucide-react";
import { submitContactMessage } from "@/app/actions/contact";
import EditableText from "./cms/EditableText";

export default function Contact({ content }: { content?: any }) {
  const [state, formAction, isPending] = useActionState(submitContactMessage, null);
  
  const defaultContent = {
    title: "Let's Start a Conversation",
    description: "Whether you have questions about admissions, want to schedule a campus tour, or just want to say hello, our team is ready to help."
  };
  const c = content || defaultContent;

  return (
    <section id="contact" className="py-24 bg-[#F5FAFF] relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0F2747] transform skew-x-[-15deg] translate-x-16 pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#E85D22] uppercase mb-4">
              Get In Touch
            </h2>
            <EditableText
              as="h3"
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#0F2747]"
              sectionSlug="contact-header"
              field="title"
              initialValue={c.title}
            />
            <EditableText
              as="p"
              className="text-lg text-gray-600 leading-relaxed"
              sectionSlug="contact-header"
              field="description"
              initialValue={c.description}
              multiline={true}
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-6xl mx-auto">
          
          {/* Contact Information (Left) */}
          <div className="lg:w-2/5 bg-[#0F2747] text-white p-10 md:p-14 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Info</h3>
              
              <div className="space-y-8">
                <a href="https://maps.app.goo.gl/D8jQ8ebXdULu1UMZ6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E85D22] transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                    <p className="text-white/70 leading-relaxed text-sm">
                      Manka Public School,<br />
                      Near Station Road, Champa,<br />
                      Chhattisgarh - 495671
                    </p>
                  </div>
                </a>

                <a href="tel:+919981672985" className="flex items-start gap-5 group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E85D22] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <p className="text-white/70 text-sm mb-1">+91 99816 72985</p>
                  </div>
                </a>

                <a href="mailto:mpscph2008@gmail.com" className="flex items-start gap-5 group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E85D22] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <p className="text-white/70 text-sm mb-1">mpscph2008@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E85D22] transition-colors duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                    <p className="text-white/70 text-sm mb-1">Mon - Sat: 7:30 AM - 5:00 PM</p>
                    <p className="text-white/70 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5 p-10 md:p-14">
            <h3 className="text-2xl font-bold mb-8 text-[#0F2747]">Send us a Message</h3>
            
            <form className="space-y-6" action={formAction}>
              {state?.success && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
              {state?.error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
                  {state.error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0F2747]">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0F2747]">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F2747]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F2747]">Subject</label>
                <select name="subject" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Schedule a Campus Tour</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F2747]">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className="w-full bg-[#E85D22] text-white font-bold py-4 rounded-xl hover:bg-[#D94F16] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : "Send Message"}
                {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
