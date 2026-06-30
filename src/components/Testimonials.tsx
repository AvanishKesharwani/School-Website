"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Parent",
    text: "The dedication of the teachers at Manka Public School is truly commendable. My daughter has grown not just academically but also in confidence and character.",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Alumni (Batch of 2018)",
    text: "The foundation I received here played a crucial role in my admission to a top university. The school's focus on holistic development is what sets it apart.",
  },
  {
    id: 3,
    name: "Aarav Sharma",
    role: "Student (Grade 10)",
    text: "I love the smart classrooms and the sports facilities. The teachers make learning fun and always encourage us to ask questions and explore.",
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Parent",
    text: "Manka Public School provides a safe, nurturing environment. The balance between academics and co-curricular activities is exactly what we were looking for.",
  },
];

import EditableText from "./cms/EditableText";

export default function Testimonials({ content }: { content?: any }) {
  const c = content || {
    title: "Voices of Our Community"
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: "spring" as const, stiffness: 100, damping: 20 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction < 0 ? 10 : -10,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-brand-navy text-brand-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-brand-yellow/5">
        <Quote className="w-40 h-40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          >
            <EditableText
              as="span"
              className=""
              sectionSlug="testimonials-section"
              field="title"
              initialValue={c.title}
            />
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative h-[420px] sm:h-[350px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center text-center justify-center"
              style={{ perspective: 1000 }}
            >
              <div className="bg-brand-white/5 backdrop-blur-sm border border-brand-white/10 p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl relative w-full pointer-events-auto">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow mb-4 md:mb-6 mx-auto opacity-50" />
                <EditableText
                  as="p"
                  className="text-base sm:text-xl md:text-2xl text-brand-white/90 leading-relaxed mb-6 md:mb-8 font-medium"
                  sectionSlug="testimonials-section"
                  field={`testimonial_${currentIndex}_text`}
                  initialValue={c[`testimonial_${currentIndex}_text`] || testimonials[currentIndex].text}
                  multiline={true}
                />
                <div>
                  <EditableText
                    as="h4"
                    className="text-xl font-bold text-brand-white"
                    sectionSlug="testimonials-section"
                    field={`testimonial_${currentIndex}_name`}
                    initialValue={c[`testimonial_${currentIndex}_name`] || testimonials[currentIndex].name}
                  />
                  <EditableText
                    as="p"
                    className="text-brand-yellow text-sm font-semibold tracking-wider uppercase mt-1"
                    sectionSlug="testimonials-section"
                    field={`testimonial_${currentIndex}_role`}
                    initialValue={c[`testimonial_${currentIndex}_role`] || testimonials[currentIndex].role}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-white/10 text-brand-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all z-20 backdrop-blur-md border border-brand-white/20 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-white/10 text-brand-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all z-20 backdrop-blur-md border border-brand-white/20 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-brand-yellow" : "w-2 bg-brand-white/20 hover:bg-brand-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
