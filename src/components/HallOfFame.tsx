"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const class10Toppers = [
  { name: "Ayush Jaiswal", percentage: "95.2%", photo: "/hall-of-fame/PHOTO-2026-06-09-16-42-46.jpg" },
  { name: "Gagan Soni", percentage: "95%", photo: "/hall-of-fame/PHOTO-2026-06-09-16-46-36.jpg" },
  { name: "Pragya Sahu", percentage: "94.6%", photo: "/hall-of-fame/PHOTO-2026-06-09-16-45-13.jpg" },
  { name: "Samriddhi Diwakar", percentage: "93.4%", photo: "/hall-of-fame/PHOTO-2026-06-09-16-49-36.jpg" },
  { name: "Ankit Banjare", percentage: "91.8%", photo: "/hall-of-fame/PHOTO-2026-06-09-16-46-27.jpg" },
  { name: "Samiksha Rathore", percentage: "91.8%", photo: "/hall-of-fame/2.jpeg" },
  { name: "Sanvi Kesharwani", percentage: "91.2%", photo: "/hall-of-fame/3.jpeg" },
  { name: "Deepanshu Patel", percentage: "90%", photo: "/hall-of-fame/4.jpeg" },
  { name: "Chinmey Dewangan", percentage: "89.8%", photo: "/hall-of-fame/5.jpeg" },
  { name: "Muskan Begum", percentage: "89.8%", photo: "/hall-of-fame/6.jpeg" },
  { name: "Yogita Kanwar", percentage: "89.6%", photo: "/hall-of-fame/7.jpeg" },
  { name: "Aditya Pandey", percentage: "88.2%", photo: "/hall-of-fame/8.jpeg" },
  { name: "Gaurav Kanwar", percentage: "88%", photo: "/hall-of-fame/9.jpeg" },
  { name: "Shreya Chhatri", percentage: "87.8%", photo: "/hall-of-fame/10.jpeg" },
  { name: "Smritikana Chakraborty", percentage: "87.6%", photo: "/hall-of-fame/d.jpeg" },
  { name: "Prerna Dewangan", percentage: "87.2%", photo: "/hall-of-fame/c.jpeg" },
  { name: "Anushka Soni", percentage: "87.2%", photo: "/hall-of-fame/e.jpeg" },
  { name: "Rashi Rathore", percentage: "86.4%", photo: "/hall-of-fame/b.jpeg" },
  { name: "Monalisha Panigrahi", percentage: "86.4%", photo: "/hall-of-fame/f.jpeg" },
  { name: "Anurag Badhai", percentage: "86.2%", photo: "/hall-of-fame/g.jpeg" },
  { name: "Mayuri Dewangan", percentage: "86.2%", photo: "/hall-of-fame/h.jpeg" },
  { name: "Arya Ishita Singh Chandel", percentage: "85.4%", photo: "/hall-of-fame/i.jpeg" },
  { name: "Avani Karsh", percentage: "85.4%", photo: "/hall-of-fame/a.jpeg" },
];

const class12Toppers = [
  { name: "Deepanshu Pandey", percentage: "92.4%", stream: "Class 12th", photo: "/hall-of-fame/deepanshu_pandey.jpg" },
  { name: "Purvansha Rathore", percentage: "88.6%", stream: "Class 12th", photo: "/hall-of-fame/purvansha_rathore.jpg" },
  { name: "Moksh Tiwari", percentage: "86.6%", stream: "Class 12th", photo: "/hall-of-fame/moksh_tiwari.jpg" },
  { name: "Mayank Bareth", percentage: "86.2%", stream: "Class 12th", photo: "/hall-of-fame/mayank_bareth.jpg" },
  { name: "Shivesh Singh Rajput", percentage: "85.2%", stream: "Class 12th", photo: "/hall-of-fame/shivesh_singh.jpg" },
  { name: "Anant Sahu", percentage: "84.4%", stream: "Class 12th", photo: "/hall-of-fame/anant.jpeg" },
  { name: "Ragini Dewangan", percentage: "84%", stream: "Class 12th", photo: "/hall-of-fame/ragini.jpeg" },
  { name: "Vandana Sahu", percentage: "82.8%", stream: "Class 12th", photo: "/hall-of-fame/vandana sahu.jpeg" },
  { name: "Vandana Sahu", percentage: "81%", stream: "Class 12th", photo: "/hall-of-fame/vandana.jpeg" },
  { name: "Aryan Kumar Mahar", percentage: "80.6%", stream: "Class 12th", photo: "/hall-of-fame/aryan hasmukh.jpeg" },
];
import EditableText from "./cms/EditableText";

export default function HallOfFame({ content }: { content?: any }) {
  const defaultContent = {
    title: "Hall of Fame",
    description: "Celebrating the exceptional academic achievements of our brilliant students who have set new benchmarks of excellence."
  };
  const c = content || defaultContent;

  const [duration10, setDuration10] = useState(65);
  const [duration12, setDuration12] = useState(55);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration10(90); // Slower on mobile
        setDuration12(80); // Slower on mobile
      } else {
        setDuration10(65); // Slower on desktop
        setDuration12(55); // Slower on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-[#E85D22] uppercase mb-4">
          Our Pride
        </h2>
        <EditableText
          as="h3"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0F2747]"
          sectionSlug="hall-of-fame-section"
          field="title"
          initialValue={c.title}
        />
        <EditableText
          as="p"
          className="mt-4 text-brand-gray max-w-2xl mx-auto text-lg"
          sectionSlug="hall-of-fame-section"
          field="description"
          initialValue={c.description}
          multiline={true}
        />
      </div>

      <div className="space-y-16">
        {/* Class 10th Section */}
        <div>
          <div className="container mx-auto px-6 md:px-12 mb-6">
            <h4 className="text-2xl font-bold text-[#0F2747] border-l-4 border-[#E85D22] pl-4">Class 10th Toppers</h4>
          </div>
          
          <div className="relative w-full overflow-hidden flex py-4 group">
            <motion.div
              className="flex gap-4 md:gap-8 px-4 w-max"
              animate={{ x: ["-32.6%", "-82.6%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: duration10 }}
            >
              {[...class10Toppers, ...class10Toppers].map((topper, index) => {
                const originalIndex = index % class10Toppers.length;
                const isRank1 = originalIndex === 0;
                const isRank2 = originalIndex === 1;
                const isRank3 = originalIndex === 2;

                return (
                  <div 
                    key={index} 
                    className={`w-44 md:w-64 flex-shrink-0 bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative ${
                      isRank1 ? "border-[3.5px] border-[#F2C230] shadow-[#F2C230]/10" :
                      isRank2 ? "border-[3.5px] border-slate-300 shadow-slate-300/10" :
                      isRank3 ? "border-[3.5px] border-[#CD7F32] shadow-[#CD7F32]/10" :
                      "border border-gray-100"
                    }`}
                  >
                    {isRank1 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-[#F2C230] to-[#E5A91A] text-[#0F2747] font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1 animate-pulse">
                        <span>1st Rank</span>
                        <span>👑</span>
                      </div>
                    )}
                    {isRank2 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-slate-200 to-slate-400 text-[#0F2747] font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1">
                        <span>2nd Rank</span>
                        <span>🥈</span>
                      </div>
                    )}
                    {isRank3 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-[#D27D2D] to-[#B5651D] text-white font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1">
                        <span>3rd Rank</span>
                        <span>🥉</span>
                      </div>
                    )}

                    <div className={`w-20 h-24 md:w-28 md:h-32 rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-md overflow-hidden flex items-center justify-center bg-white flex-shrink-0 border-2 md:border-[3px] ${
                      isRank1 ? "border-[#F2C230]" :
                      isRank2 ? "border-slate-300" :
                      isRank3 ? "border-[#CD7F32]" :
                      "border-[#0F2747]"
                    }`}>
                      <img 
                        src={topper.photo} 
                        alt={topper.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm md:text-lg font-bold text-[#0F2747] text-center h-10 md:h-14 flex items-center justify-center leading-tight w-full px-1">{topper.name}</h5>
                    <p className="text-[#E85D22] font-extrabold text-2xl md:text-3xl mt-1 md:mt-2 drop-shadow-sm">{topper.percentage}</p>
                    <p className="text-[10px] md:text-sm font-semibold text-gray-500 mt-0.5 md:mt-1 uppercase tracking-wider">Class 10th</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Class 12th Section */}
        <div>
          <div className="container mx-auto px-6 md:px-12 mb-6 text-right">
            <h4 className="text-2xl font-bold text-[#0F2747] border-r-4 border-[#E85D22] pr-4 inline-block">Class 12th Toppers</h4>
          </div>
          
          <div className="relative w-full overflow-hidden flex py-4 group">
            <motion.div
              className="flex gap-4 md:gap-8 px-4 w-max"
              animate={{ x: ["-30%", "20%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: duration12 }}
            >
              {[...class12Toppers, ...class12Toppers].map((topper, index) => {
                const originalIndex = index % class12Toppers.length;
                const isRank1 = originalIndex === 0;
                const isRank2 = originalIndex === 1;
                const isRank3 = originalIndex === 2;

                return (
                  <div 
                    key={index} 
                    className={`w-44 md:w-64 flex-shrink-0 bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative ${
                      isRank1 ? "border-[3.5px] border-[#F2C230] shadow-[#F2C230]/10" :
                      isRank2 ? "border-[3.5px] border-slate-300 shadow-slate-300/10" :
                      isRank3 ? "border-[3.5px] border-[#CD7F32] shadow-[#CD7F32]/10" :
                      "border border-gray-100"
                    }`}
                  >
                    {isRank1 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-[#F2C230] to-[#E5A91A] text-[#0F2747] font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1 animate-pulse">
                        <span>1st Rank</span>
                        <span>👑</span>
                      </div>
                    )}
                    {isRank2 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-slate-200 to-slate-400 text-[#0F2747] font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1">
                        <span>2nd Rank</span>
                        <span>🥈</span>
                      </div>
                    )}
                    {isRank3 && (
                      <div className="absolute -top-3 -right-2 bg-gradient-to-r from-[#D27D2D] to-[#B5651D] text-white font-black text-[9px] md:text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase border border-white/20 z-10 flex items-center gap-1">
                        <span>3rd Rank</span>
                        <span>🥉</span>
                      </div>
                    )}

                    <div className={`w-20 h-24 md:w-28 md:h-32 rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-md overflow-hidden flex items-center justify-center bg-white flex-shrink-0 border-2 md:border-[3px] ${
                      isRank1 ? "border-[#F2C230]" :
                      isRank2 ? "border-slate-300" :
                      isRank3 ? "border-[#CD7F32]" :
                      "border-[#0F2747]"
                    }`}>
                      <img src={topper.photo} alt={topper.name} className="w-full h-full object-cover" />
                    </div>
                    <h5 className="text-sm md:text-lg font-bold text-[#0F2747] text-center h-10 md:h-14 flex items-center justify-center leading-tight w-full px-1">{topper.name}</h5>
                    <p className="text-[#E85D22] font-extrabold text-2xl md:text-3xl mt-1 md:mt-2 drop-shadow-sm">{topper.percentage}</p>
                    <p className="text-[10px] md:text-sm font-semibold text-gray-500 mt-0.5 md:mt-1 uppercase tracking-wider">{topper.stream}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
