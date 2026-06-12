"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PencilRuler, Atom, Compass, Telescope } from "lucide-react";

import EditableText from "./cms/EditableText";
import EditableImage from "./cms/EditableImage";

const defaultPrograms = [
  {
    id: "preschool",
    title: "PRE\nSCHOOL",
    color: "#F6AE2D",
    bgColor: "#FFFDF5",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop", // Student image
  },
  {
    id: "primary",
    title: "PRIMARY\nSCHOOL",
    color: "#F26419",
    bgColor: "#FFF8F5",
    icon: PencilRuler,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "middle",
    title: "MIDDLE\nSCHOOL",
    color: "#0CB04A",
    bgColor: "#F5FEF8",
    icon: Atom,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "secondary",
    title: "SECONDARY\nSCHOOL",
    color: "#007BFF",
    bgColor: "#F5FAFF",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "senior",
    title: "SENIOR\nSECONDARY",
    color: "#B10F8E",
    bgColor: "#FCF5FB",
    icon: Telescope,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function Academics({ content }: { content?: any }) {
  const c = content && Object.keys(content).length > 0 ? content : { title: "Our Curriculum", programs: defaultPrograms };
  const programs = c.programs && c.programs.length === 5 ? c.programs : defaultPrograms;

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-[#E85D22] uppercase mb-4">
            Our Curriculum
          </h2>
        </div>

        {/* 5 Column Grid */}
        <div 
          className="overflow-x-auto md:overflow-x-visible snap-x snap-mandatory flex flex-row w-full py-4 gap-4 px-6 md:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {programs.map((program: any, index: number) => {
            const Icon = program.icon;
            return (
              <div 
                key={program.id}
                className="w-[75vw] sm:w-[50vw] md:w-auto md:flex-1 flex flex-col group cursor-pointer snap-center shrink-0 rounded-2xl md:rounded-none overflow-hidden shadow-lg md:shadow-none"
              >
                {/* Top Half: Image on solid background */}
                <div 
                  className="w-full aspect-[16/9] md:aspect-[3/4] relative overflow-hidden"
                  style={{ backgroundColor: program.color }}
                >
                  <EditableImage
                    src={c[`program_${index}_image`] || program.image}
                    initialSrc={c[`program_${index}_image`] || program.image}
                    alt={program.title.replace('\\n', ' ')}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                    sectionSlug="academics-section"
                    field={`program_${index}_image`}
                  />
                </div>

                {/* Bottom Half: Content */}
                <div 
                  className="flex flex-col items-center justify-center p-6 md:p-10 h-[200px] md:h-[320px] transition-colors duration-300"
                  style={{ backgroundColor: program.bgColor }}
                >
                  <Icon 
                    className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-8 stroke-[1.5]"
                    style={{ color: program.color }}
                  />
                  
                  <EditableText
                    as="h3"
                    className="text-lg md:text-2xl font-extrabold text-center mb-2 md:mb-8 whitespace-pre-line leading-tight"
                    style={{ color: program.color }}
                    sectionSlug="academics-section"
                    field={`program_${index}_title`}
                    initialValue={c[`program_${index}_title`] || program.title}
                    multiline={true}
                  />

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
