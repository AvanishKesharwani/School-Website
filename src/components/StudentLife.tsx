"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    title: "Vibrant Academics",
    desc: "Where curiosity meets innovation. We go beyond textbooks to foster a lifelong love for learning, encouraging students to ask bold questions and explore new horizons.",
    image: "/academics.jpg",
  },
  {
    title: "Sports & Athletics",
    desc: "Forging champions on and off the field. Our comprehensive athletic programs build resilience, leadership, and unwavering team spirit.",
    image: "/sports.jpg",
  },
  {
    title: "Cultural Arts",
    desc: "A canvas for imagination. We celebrate diverse voices through music, theatre, and visual arts, nurturing creativity that shapes tomorrow's cultural leaders.",
    image: "/cultural.jpg",
  },
  {
    title: "Student Communities",
    desc: "Find your tribe and fuel your passion. From robotics and coding to debate and eco-initiatives, our vibrant clubs offer endless avenues for discovery.",
    image: "/clubs.jpg",
  },
  {
    title: "Global Leadership",
    desc: "Empowering the voices of the future. Through immersive student councils and leadership summits, we prepare students to navigate and lead a complex world.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
];

import EditableText from "./cms/EditableText";
import EditableImage from "./cms/EditableImage";

export default function StudentLife({ content }: { content?: any }) {
  const defaultContent = {
    title: "Explore Our Programs",
    description: "A vibrant ecosystem where every day brings new opportunities to learn, create, and grow together."
  };
  const c = content || defaultContent;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const scrollWidth = scrollRef.current?.scrollWidth || 0;
        const windowWidth = window.innerWidth;
        
        gsap.to(scrollRef.current, {
          x: () => -(scrollWidth - windowWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-white text-brand-navy overflow-hidden">
      <div className="md:h-screen w-full flex flex-col justify-center pt-16 md:pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 mb-6 md:mb-8 shrink-0">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-px w-12 bg-[#E85D22] shrink-0" />
            <EditableText
              as="h2"
              className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-[#E85D22] uppercase"
              sectionSlug="student-life-section"
              field="title"
              initialValue={c.title}
            />
          </div>
          <EditableText
            as="p"
            className="text-base sm:text-lg text-brand-gray max-w-2xl"
            sectionSlug="student-life-section"
            field="description"
            initialValue={c.description}
            multiline={true}
          />
        </div>
        <div 
          className="relative w-full overflow-x-auto md:overflow-hidden flex-grow flex items-center snap-x snap-mandatory py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          <div 
            ref={scrollRef} 
            className="flex gap-6 md:gap-8 px-6 md:px-12 w-max items-center h-full"
          >
            {sections.map((section, index) => (
              <div 
                key={index}
                className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-[45vh] md:h-[60vh] shrink-0 relative rounded-3xl overflow-hidden group snap-center"
              >
                <EditableImage
                  src={c[`section_${index}_image`] || section.image}
                  initialSrc={c[`section_${index}_image`] || section.image}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  sectionSlug="student-life-section"
                  field={`section_${index}_image`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pointer-events-none">
                  <span className="text-brand-yellow font-bold tracking-wider text-xs sm:text-sm uppercase mb-2 sm:mb-3 block">
                    0{index + 1}
                  </span>
                  <div className="pointer-events-auto">
                    <EditableText
                      as="h3"
                      className="text-2xl md:text-4xl font-bold text-brand-white mb-2 sm:mb-4"
                      sectionSlug="student-life-section"
                      field={`section_${index}_title`}
                      initialValue={c[`section_${index}_title`] || section.title}
                    />
                    <EditableText
                      as="p"
                      className="text-brand-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
                      sectionSlug="student-life-section"
                      field={`section_${index}_desc`}
                      initialValue={c[`section_${index}_desc`] || section.desc}
                      multiline={true}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
