"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote, Sparkles, User, Award } from "lucide-react";

export default function MessageClient() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F5FAFF]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brand-navy pt-36 pb-24 overflow-hidden">
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
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

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
              Words of inspiration, guidance, and academic vision from the desk of Manka Public School's administration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="space-y-16">
            
            {/* President's Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0 w-full md:w-64">
                <div className="w-20 h-20 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy">Mr. S. Kesharwani</h3>
                <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs mt-1">President</p>
                <div className="mt-4 text-xs font-medium text-brand-navy/60 bg-brand-navy/5 px-3 py-1 rounded-full">
                  Maa Manka Shikshan Samiti
                </div>
              </div>

              <div className="flex-grow relative mt-4 md:mt-0">
                <div className="absolute -top-6 -left-4 text-brand-yellow/10 pointer-events-none select-none">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-yellow" />
                  President's Message
                </h4>
                <p className="text-brand-gray text-base leading-relaxed mb-6 font-medium text-justify">
                  Manka Public School (English Medium) is dedicated to an ambition of creating model students with a holistic approach for the all-round development of every child. We have a clear focus to impart quality education, which shall foster academic excellence, physical fitness, psychological and spiritual health, and social consciousness. 
                </p>
                <p className="text-brand-gray text-base leading-relaxed mb-6 font-medium text-justify">
                  Our aim is to develop a student-centered learning community of motivated students and staff engaged in realizing students' full human potential, gearing them to be a part of the future global community. Being a co-educational institute, equal emphasis is given to both boys and girls, but special and tender care is taken to educate the girl child to prepare her for the changing roles in her life. 
                </p>
                <p className="text-brand-gray text-base leading-relaxed font-medium text-justify">
                  We believe in making your child ready to be a global citizen with a deeply rooted foundation of Indian culture and heritage. Wishing you all the best and God's blessings.
                </p>
              </div>
            </motion.div>

            {/* Principal's Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0 w-full md:w-64">
                <div className="w-20 h-20 bg-brand-navy/10 text-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <User className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy">Principal</h3>
                <p className="text-[#E85D22] font-bold uppercase tracking-wider text-xs mt-1">Principal Office</p>
                <div className="mt-4 text-xs font-medium text-brand-navy/60 bg-brand-navy/5 px-3 py-1 rounded-full text-center">
                  Manka Public School, Janjgir-Champa
                </div>
              </div>

              <div className="flex-grow relative mt-4 md:mt-0">
                <div className="absolute -top-6 -left-4 text-brand-navy/5 pointer-events-none select-none">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E85D22]" />
                  Principal's Message
                </h4>
                <p className="text-brand-gray text-base leading-relaxed mb-6 font-medium text-justify">
                  Our children are the citizens of tomorrow; therefore, they must possess all the qualities to face the various problems in life and must be able to stand as equals with other advanced countries of the world. "Best and suitable education" is the only solution. The children have to be taught the various sources of intellectual development for a healthy mind and intellect. 
                </p>
                <p className="text-brand-gray text-base leading-relaxed mb-6 font-medium text-justify">
                  Rapid globalization, computerization, and technological developments have doubled our responsibilities of shaping our kids in accordance with the need of the hour. The fast-changing world requires each one of them to ensure a successful role for which a fearless heart and head are required. Time-to-time counseling is now an integral part of the curriculum to ensure that the students have the edge to excel and outperform others in this highly competitive age. 
                </p>
                <p className="text-brand-gray text-base leading-relaxed mb-6 font-medium text-justify">
                  Yet due care is taken that the students do not get carried away by the rampant materialism all around, for which long-cherished traditional values are ingrained into them. In this respect, the school lays a great emphasis on moral and ethical value-based quality education. We encourage students to be visionaries by helping them overcome their dormant nature to face the challenges of life and convert their dreams into reality. 
                </p>
                <p className="text-brand-gray text-base leading-relaxed font-medium text-justify">
                  We are committed to empowering them to tackle the obstacles and reach out to achieve higher goals in life. We have a genuine, deep-seated, intense passion to see the students develop into individuals with unique personalities, as centers of excellence, and always alive to the challenges that life constantly presents them with.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
