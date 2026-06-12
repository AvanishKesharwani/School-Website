"use client";

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
        {/* Class 12th Section */}
        <div>
          <div className="container mx-auto px-6 md:px-12 mb-6">
            <h4 className="text-2xl font-bold text-[#0F2747] border-l-4 border-[#E85D22] pl-4">Class 12th Toppers</h4>
          </div>
          
          <div className="relative w-full overflow-hidden flex py-4 group">
            <motion.div
              className="flex gap-8 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[...class12Toppers, ...class12Toppers].map((topper, index) => (
                <div key={index} className="w-64 flex-shrink-0 bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-28 h-32 rounded-2xl mb-4 shadow-md overflow-hidden flex items-center justify-center bg-white flex-shrink-0 border-[3px] border-[#0F2747]">
                    <img 
                      src={topper.photo} 
                      alt={topper.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-lg font-bold text-[#0F2747] text-center h-14 flex items-center justify-center leading-tight w-full px-2">{topper.name}</h5>
                  <p className="text-[#E85D22] font-extrabold text-3xl mt-2 drop-shadow-sm">{topper.percentage}</p>
                  <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">{topper.stream}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Class 10th Section */}
        <div>
          <div className="container mx-auto px-6 md:px-12 mb-6 text-right">
            <h4 className="text-2xl font-bold text-[#0F2747] border-r-4 border-[#E85D22] pr-4 inline-block">Class 10th Toppers</h4>
          </div>
          
          <div className="relative w-full overflow-hidden flex py-4 group">
            <motion.div
              className="flex gap-8 px-4 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            >
              {[...class10Toppers, ...class10Toppers].map((topper, index) => (
                <div key={index} className="w-64 flex-shrink-0 bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-28 h-32 rounded-2xl mb-4 shadow-md overflow-hidden flex items-center justify-center bg-white flex-shrink-0 border-[3px] border-[#0F2747]">
                    <img src={topper.photo} alt={topper.name} className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-lg font-bold text-[#0F2747] text-center h-14 flex items-center justify-center leading-tight w-full px-2">{topper.name}</h5>
                  <p className="text-[#E85D22] font-extrabold text-3xl mt-2 drop-shadow-sm">{topper.percentage}</p>
                  <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">Class 10th</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
