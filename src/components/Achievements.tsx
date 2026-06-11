"use client";

import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Medal, Trophy } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "100% Board Results",
    category: "Academic",
    icon: Star,
    desc: "Achieved a 100% pass rate in CBSE Class 10 and 12 board examinations with 45 students scoring above 95%.",
  },
  {
    year: "2023",
    title: "State Level Sports Champions",
    category: "Sports",
    icon: Trophy,
    desc: "Won the Under-19 State Basketball Championship and secured 5 gold medals in athletics.",
  },
  {
    year: "2022",
    title: "Best Eco-School Award",
    category: "Milestone",
    icon: Award,
    desc: "Recognized for outstanding initiatives in sustainability and environmental awareness by the State Education Board.",
  },
  {
    year: "2021",
    title: "National Science Exhibition Winners",
    category: "Academic",
    icon: TrendingUp,
    desc: "Our students' robotics project won first prize at the National CBSE Science Exhibition in New Delhi.",
  },
  {
    year: "2020",
    title: "Silver Jubilee Celebration",
    category: "Milestone",
    icon: Medal,
    desc: "Completed 25 years of excellence in education, expanding the campus with a new state-of-the-art auditorium.",
  },
];

import EditableText from "./cms/EditableText";

export default function Achievements({ content }: { content?: any }) {
  const c = content || {
    title: "A Legacy of Excellence",
    description: "A timeline of our remarkable journey, celebrating the hard work and success of our students and faculty."
  };

  return (
    <section className="py-24 bg-[#F5FAFF] text-[#0F2747]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-[#E85D22] uppercase mb-4"
          >
            Our Legacy
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#0F2747]"
          >
            <EditableText
              as="span"
              className=""
              sectionSlug="achievements-section"
              field="title"
              initialValue={c.title}
            />
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-500"
          >
            <EditableText
              as="p"
              className=""
              sectionSlug="achievements-section"
              field="description"
              initialValue={c.description}
              multiline={true}
            />
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#0F2747]/10 transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 rounded-full bg-[#E85D22] border-4 border-white flex items-center justify-center transform -translate-x-[14px] md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#0F2747]" />
                  </div>

                  {/* Content Box (Alternating Sides) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'}`}
                  >
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative group-hover:-translate-y-1">
                      
                      {/* Arrow pointer for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-gray-100 transform rotate-45 ${isEven ? '-left-2 border-l border-b' : '-right-2 border-r border-t'}`} />

                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className={`p-2 rounded-lg bg-[#0F2747]/5 text-[#0F2747] ${isEven ? 'md:order-last' : ''}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold tracking-wider text-[#E85D22] uppercase">
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#0F2747] mb-2 flex items-center gap-4 justify-start md:justify-[inherit] flex-wrap">
                        <EditableText
                          as="span"
                          className=""
                          sectionSlug="achievements-section"
                          field={`item_${index}_title`}
                          initialValue={c[`item_${index}_title`] || item.title}
                        />
                        <span className="text-gray-400 text-lg">
                          (<EditableText
                            as="span"
                            className="inline"
                            sectionSlug="achievements-section"
                            field={`item_${index}_year`}
                            initialValue={c[`item_${index}_year`] || item.year}
                          />)
                        </span>
                      </h3>
                      
                      <EditableText
                        as="p"
                        className="text-gray-600 leading-relaxed"
                        sectionSlug="achievements-section"
                        field={`item_${index}_desc`}
                        initialValue={c[`item_${index}_desc`] || item.desc}
                        multiline={true}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
