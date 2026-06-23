"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Shield, 
  Award, 
  BookOpen, 
  Users, 
  Building2, 
  Video, 
  Info,
  Calendar,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight
} from "lucide-react";

type TabId = "general" | "documents" | "academics" | "staff" | "infrastructure";

export default function MandatoryDisclosureClient() {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  const tabs = [
    { id: "general" as TabId, label: "General Info", icon: Info },
    { id: "documents" as TabId, label: "Documents & Certificates", icon: Shield },
    { id: "academics" as TabId, label: "Results & Academics", icon: Award },
    { id: "staff" as TabId, label: "Staff & Faculty", icon: Users },
    { id: "infrastructure" as TabId, label: "Infrastructure", icon: Building2 },
  ];

  const generalInfo = [
    { label: "NAME OF THE SCHOOL", value: "Manka Public School" },
    { label: "AFFILIATION NO", value: "3330393", highlight: true },
    { label: "SCHOOL CODE", value: "15943", highlight: true },
    { label: "COMPLETE ADDRESS WITH PIN CODE", value: "Tahsil Road, Aadarsh nagar Champa, Dist. - Janjgir-Champa (C.G.), PIN 495671" },
    { label: "PRINCIPAL NAME & QUALIFICATION", value: "AVINASH KESHARWANI, M.Sc. (Physics), B.Ed." },
    { label: "SCHOOL EMAIL ID", value: "mankaschool2008@gmail.com" },
    { label: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "+91 99816 72985" },
  ];

  const documents = [
    {
      id: 1,
      title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION",
      links: [
        { label: "Affiliation Letter", url: "https://mankapublicschool.com/PDF/CBSE%20AFFILIATION.pdf" }
      ]
    },
    {
      id: 2,
      title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE",
      links: [
        { label: "Society Registration", url: "https://mankapublicschool.com/PDF/2copies%20of%20society.jpeg" }
      ]
    },
    {
      id: 3,
      title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED BY THE STATE GOVT./UT",
      links: [
        { label: "NOC Certificate", url: "https://mankapublicschool.com/PDF/3%20copies%20of%20noc.pdf" }
      ]
    },
    {
      id: 4,
      title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL",
      links: [
        { label: "RTE Recognition", url: "https://mankapublicschool.com/Doc/CORCURA.pdf" }
      ]
    },
    {
      id: 5,
      title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
      links: [
        { label: "Building Safety", url: "https://mankapublicschool.com/Doc/building%20safety.pdf" }
      ]
    },
    {
      id: 6,
      title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
      links: [
        { label: "Fire NOC Certificate", url: "https://mankapublicschool.com/Doc/FIRE%20NOC.pdf" },
        { label: "Fire Executive Certificate", url: "https://mankapublicschool.com/Doc/fire%20exe.%20certificate%20with%20sign.pdf" }
      ]
    },
    {
      id: 7,
      title: "COPY OF THE DEO CERTIFICATE FOR AFFILIATION/UPGRADATION/EXTENSION OR SELF CERTIFICATION",
      links: [
        { label: "DEO Certificate", url: "https://mankapublicschool.com/PDF/7%20copy%20of%20deo%20certi..pdf" }
      ]
    },
    {
      id: 8,
      title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      links: [
        { label: "Water & Sanitation Report", url: "https://mankapublicschool.com/Doc/WATER%20HEALTH%20SANITATION%20REPORT.pdf" }
      ]
    }
  ];

  const academics = [
    {
      id: 1,
      title: "FEE STRUCTURE OF THE SCHOOL",
      links: [{ label: "Fee Structure", url: "https://mankapublicschool.com/Doc/Fees%20Strcuture%20of%20The%20School.pdf" }]
    },
    {
      id: 2,
      title: "ANNUAL ACADEMIC CALENDAR",
      links: [
        { label: "Academic Calendar (AAC)", url: "https://mankapublicschool.com/Doc/AAC.pdf" },
        { label: "Annual Calendar", url: "https://mankapublicschool.com/Doc/annual%20calander.pdf" }
      ]
    },
    {
      id: 3,
      title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      links: [
        { label: "SMC List (LOSMC)", url: "https://mankapublicschool.com/Doc/LOSMC.pdf" },
        { label: "SMC Details", url: "https://mankapublicschool.com/Doc/SMC.pdf" }
      ]
    },
    {
      id: 4,
      title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      links: [{ label: "PTA Members List", url: "https://mankapublicschool.com/Doc/PTA2023.pdf" }]
    },
    {
      id: 5,
      title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
      links: [
        { label: "3-Year Results Details", url: "https://mankapublicschool.com/Doc/LTYROTBE.pdf" },
        { label: "Summary", url: "https://mankapublicschool.com/Doc/three%20year%20result.pdf" }
      ]
    }
  ];

  const classXResults = [
    { year: "2022-23", registered: 72, passed: 71, percentage: "98.61%", remarks: "Excellent performance" },
    { year: "2023-24", registered: 71, passed: 70, percentage: "98.59%", remarks: "Consistent results" },
    { year: "2024-25", registered: 77, passed: 77, percentage: "100%", remarks: "100% pass rate achieved" },
  ];

  const classXIILesults = [
    { year: "2022-23", registered: 47, passed: 36, percentage: "76.59%", remarks: "Satisfactory details" },
    { year: "2023-24", registered: 47, passed: 42, percentage: "91.49%", remarks: "Significant improvement" },
    { year: "2024-25", registered: 52, passed: 45, percentage: "86.54%", remarks: "Great achievements" },
  ];

  const staffDetails = {
    summary: [
      { label: "PRINCIPAL", value: "01" },
      { label: "VICE PRINCIPAL", value: "01" },
      { label: "HEADMISTRESS/HEADMASTER", value: "01" },
      { label: "TOTAL NO. OF TEACHERS", value: "72" },
      { label: "TEACHERS SECTION RATIO", value: "1 : 1.5" },
      { label: "DETAILS OF SPECIAL EDUCATOR", value: "GEETU KESHARWANI (BA, B.Ed. in Special Education)" },
      { label: "DETAILS OF COUNSELLOR & WELLNESS TEACHER", value: "SHIVANI PANDA (M.A. Psychology)" },
    ],
    breakdown: [
      { role: "PGT (Post Graduate Teachers)", count: 11, link: "https://mankapublicschool.com/Doc/MPD%20PGT%202026-27.pdf" },
      { role: "TGT (Trained Graduate Teachers)", count: 24, link: "https://mankapublicschool.com/Doc/MPD%20TGT%202026-27.pdf" },
      { role: "PRT (Primary Teachers)", count: 24, link: "https://mankapublicschool.com/Doc/MPD%20PRT%202026-27.pdf" },
      { role: "PET (Physical Education Teachers)", count: 3, link: "https://mankapublicschool.com/Doc/MPD%20PET%202026-27.pdf" },
    ]
  };

  const infrastructure = [
    { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", value: "8384 Sq. mtr" },
    { label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", value: "46 Rooms, 46.5 Sq. mtr each" },
    { label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)", value: "55.75 Sq. mtr each" },
    { label: "NO. AND SIZE OF LIBRARY (IN SQ MTR)", value: "01 Library, 111.48 Sq. mtr" },
    { label: "INTERNET FACILITY (Y/N)", value: "Yes" },
    { label: "NO. OF GIRLS TOILETS", value: "20" },
    { label: "NO. OF BOYS TOILETS", value: "20" },
    { label: "NO. OF CWSN TOILETS (SPECIAL TOILETS)", value: "01 for Girls, 01 for Boys" },
    { 
      label: "YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL INFRASTRUCTURE", 
      value: "Watch Video Tour", 
      videoUrl: "https://www.youtube.com/watch?v=MY-pnvbka28" 
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="disclosure-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#disclosure-grid)" />
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
              CBSE Compliance Information
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Mandatory Public Disclosure
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Official records, registration documents, academic statistics, and infrastructure details for Manka Public School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Affiliation & Code Quick Display Cards */}
      <section className="relative z-20 -mt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 flex items-center gap-5"
            >
              <div className="p-4 rounded-xl bg-brand-blue/20 text-brand-navy">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs text-brand-gray uppercase tracking-wider block font-semibold">CBSE Affiliation Number</span>
                <span className="text-2xl font-bold text-brand-navy">3330393</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 flex items-center gap-5"
            >
              <div className="p-4 rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs text-brand-gray uppercase tracking-wider block font-semibold">School Code</span>
                <span className="text-2xl font-bold text-brand-navy">15943</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#E85D22] p-6 rounded-2xl shadow-[0_8px_30px_rgb(232,93,34,0.15)] flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-white/20">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-white/95 uppercase tracking-wider block font-bold">SARAS Report</span>
                  <span className="text-sm font-semibold">CBSE Disclosure PDF</span>
                </div>
              </div>
              <a 
                href="https://mankapublicschool.com/mandatory-public-disclousre.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white text-[#E85D22] rounded-xl hover:scale-105 transition-transform duration-200 shadow-md flex items-center justify-center cursor-pointer"
              >
                <Download className="w-5 h-5" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Tab Controls */}
            <div className="w-full lg:w-1/4 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 bg-white/50 p-2.5 rounded-2xl border border-gray-100 backdrop-blur-sm scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/15 scale-[1.02]" 
                        : "text-brand-gray hover:bg-brand-navy/5 hover:text-brand-navy"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5 shrink-0" />
                    <span>{tab.label}</span>
                    <ChevronRight className={`ml-auto w-4 h-4 hidden lg:block transition-transform ${isActive ? "translate-x-1 opacity-100" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Tab Contents with Framer Motion transitions */}
            <div className="w-full lg:w-3/4 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 md:p-10 relative min-h-[450px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* General Info Tab */}
                  {activeTab === "general" && (
                    <div>
                      <div className="border-b border-gray-100 pb-6 mb-8 flex justify-between items-center flex-wrap gap-4">
                        <div>
                          <h2 className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
                            <Info className="w-6 h-6 text-brand-yellow" />
                            General Information
                          </h2>
                          <p className="text-sm text-brand-gray mt-1">Section A: Primary affiliation and identity details.</p>
                        </div>
                      </div>
                      
                      <div className="overflow-hidden border border-gray-100 rounded-2xl bg-brand-white/20">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {generalInfo.map((info, idx) => (
                              <tr 
                                key={info.label}
                                className={`border-b border-gray-100/80 transition-colors hover:bg-brand-navy/5 ${
                                  idx % 2 === 0 ? "bg-white" : "bg-brand-white/10"
                                }`}
                              >
                                <td className="py-4.5 px-6 text-xs md:text-sm font-bold text-brand-navy w-1/3 border-r border-gray-100/50">
                                  {info.label}
                                </td>
                                <td className="py-4.5 px-6 text-sm text-brand-gray font-medium">
                                  {info.highlight ? (
                                    <span className="inline-block px-3 py-1 bg-brand-yellow/15 text-brand-navy font-bold rounded-lg border border-brand-yellow/20">
                                      {info.value}
                                    </span>
                                  ) : (
                                    info.value
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Documents & Certificates Tab */}
                  {activeTab === "documents" && (
                    <div>
                      <div className="border-b border-gray-100 pb-6 mb-8">
                        <h2 className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
                          <Shield className="w-6 h-6 text-brand-yellow" />
                          Documents & Information
                        </h2>
                        <p className="text-sm text-brand-gray mt-1">Section B: Certified legal, structural, and safety reports.</p>
                      </div>

                      <div className="space-y-4">
                        {documents.map((doc, idx) => (
                          <div 
                            key={doc.id}
                            className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                          >
                            <div className="flex gap-4">
                              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue/30 text-brand-navy font-bold text-sm shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <h3 className="text-sm md:text-base font-bold text-brand-navy leading-snug">
                                  {doc.title}
                                </h3>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 shrink-0 self-end md:self-auto">
                              {doc.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-white rounded-xl text-xs font-semibold hover:bg-brand-yellow hover:text-brand-navy transition-all shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>{link.label}</span>
                                  <ExternalLink className="w-3 h-3 opacity-60" />
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-5 bg-[#F5FAFF] border border-blue-100 rounded-2xl flex gap-3">
                        <Info className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                        <p className="text-xs text-brand-navy/80 leading-relaxed">
                          <strong>Note:</strong> Manka Public School uploads copies of these regulatory documents verified by the Chairman, Manager, Secretary, and Principal in compliance with CBSE rules.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Results & Academics Tab */}
                  {activeTab === "academics" && (
                    <div>
                      <div className="border-b border-gray-100 pb-6 mb-8">
                        <h2 className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
                          <Award className="w-6 h-6 text-brand-yellow" />
                          Results & Academics
                        </h2>
                        <p className="text-sm text-brand-gray mt-1">Section C: Fees, Academic calendars, and official Board results.</p>
                      </div>

                      {/* Documents Section */}
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-brand-yellow rounded-full"></span>
                        Academic Materials
                      </h3>
                      <div className="space-y-4 mb-10">
                        {academics.map((item, idx) => (
                          <div 
                            key={item.id}
                            className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                          >
                            <div className="flex gap-4">
                              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow font-bold text-sm shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <h4 className="text-sm md:text-base font-bold text-brand-navy leading-snug">
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 shrink-0 self-end md:self-auto">
                              {item.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5FAFF] border border-blue-100 text-brand-navy rounded-xl text-xs font-semibold hover:bg-brand-navy hover:text-white transition-all cursor-pointer whitespace-nowrap"
                                >
                                  <FileText className="w-3.5 h-3.5 text-brand-yellow" />
                                  <span>{link.label}</span>
                                  <ExternalLink className="w-3 h-3 opacity-60" />
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Class X Table */}
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-[#E85D22] rounded-full"></span>
                        Board Examination Results: Class X
                      </h3>
                      <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-brand-white/10 mb-10">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
                              <th className="py-4 px-6">S.No.</th>
                              <th className="py-4 px-6">Year</th>
                              <th className="py-4 px-6">Registered Students</th>
                              <th className="py-4 px-6">Passed Students</th>
                              <th className="py-4 px-6">Pass Percentage</th>
                              <th className="py-4 px-6">Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm font-medium text-brand-gray">
                            {classXResults.map((res, idx) => (
                              <tr key={res.year} className="border-b border-gray-100 bg-white hover:bg-brand-navy/5 transition-colors">
                                <td className="py-4 px-6 text-brand-navy font-bold">{idx + 1}</td>
                                <td className="py-4 px-6">{res.year}</td>
                                <td className="py-4 px-6">{res.registered}</td>
                                <td className="py-4 px-6">{res.passed}</td>
                                <td className="py-4 px-6">
                                  <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 font-bold rounded-lg border border-green-150">
                                    {res.percentage}
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-xs">{res.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Class XII Table */}
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-[#E85D22] rounded-full"></span>
                        Board Examination Results: Class XII
                      </h3>
                      <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-brand-white/10">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
                              <th className="py-4 px-6">S.No.</th>
                              <th className="py-4 px-6">Year</th>
                              <th className="py-4 px-6">Registered Students</th>
                              <th className="py-4 px-6">Passed Students</th>
                              <th className="py-4 px-6">Pass Percentage</th>
                              <th className="py-4 px-6">Remarks</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm font-medium text-brand-gray">
                            {classXIILesults.map((res, idx) => (
                              <tr key={res.year} className="border-b border-gray-100 bg-white hover:bg-brand-navy/5 transition-colors">
                                <td className="py-4 px-6 text-brand-navy font-bold">{idx + 1}</td>
                                <td className="py-4 px-6">{res.year}</td>
                                <td className="py-4 px-6">{res.registered}</td>
                                <td className="py-4 px-6">{res.passed}</td>
                                <td className="py-4 px-6">
                                  <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 font-bold rounded-lg border border-green-150">
                                    {res.percentage}
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-xs">{res.remarks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  )}

                  {/* Staff & Faculty Tab */}
                  {activeTab === "staff" && (
                    <div>
                      <div className="border-b border-gray-100 pb-6 mb-8">
                        <h2 className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
                          <Users className="w-6 h-6 text-brand-yellow" />
                          Teaching Staff Details
                        </h2>
                        <p className="text-sm text-brand-gray mt-1">Section D: Principal qualifications, teacher counts, and counselor details.</p>
                      </div>

                      {/* General Staff info table */}
                      <div className="overflow-hidden border border-gray-100 rounded-2xl bg-brand-white/20 mb-8">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {staffDetails.summary.map((info, idx) => (
                              <tr 
                                key={info.label}
                                className={`border-b border-gray-100/80 transition-colors hover:bg-brand-navy/5 ${
                                  idx % 2 === 0 ? "bg-white" : "bg-brand-white/10"
                                }`}
                              >
                                <td className="py-4.5 px-6 text-xs md:text-sm font-bold text-brand-navy w-1/3 border-r border-gray-100/50">
                                  {info.label}
                                </td>
                                <td className="py-4.5 px-6 text-sm text-brand-gray font-medium">
                                  {info.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Teacher Breakdown Details */}
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-brand-yellow rounded-full"></span>
                        Faculty Lists & Certifications
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {staffDetails.breakdown.map((item) => (
                          <div 
                            key={item.role} 
                            className="p-5 border border-gray-100 rounded-2xl shadow-sm bg-white flex items-center justify-between gap-4"
                          >
                            <div>
                              <h4 className="text-sm font-bold text-brand-navy">{item.role}</h4>
                              <p className="text-xs text-brand-gray mt-1">Strength: <strong className="text-brand-navy">{item.count}</strong></p>
                            </div>
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 bg-brand-navy hover:bg-brand-yellow hover:text-brand-navy text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>View List</span>
                            </a>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  {/* Infrastructure Tab */}
                  {activeTab === "infrastructure" && (
                    <div>
                      <div className="border-b border-gray-100 pb-6 mb-8">
                        <h2 className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
                          <Building2 className="w-6 h-6 text-brand-yellow" />
                          School Infrastructure
                        </h2>
                        <p className="text-sm text-brand-gray mt-1">Section E: Classrooms, laboratories, safety systems, and virtual inspection tour.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {infrastructure.map((item) => {
                          if (item.videoUrl) {
                            return (
                              <div 
                                key={item.label}
                                className="p-6 border border-brand-yellow/30 bg-brand-yellow/5 rounded-2xl shadow-sm md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-4"
                              >
                                <div className="flex gap-4">
                                  <div className="p-3.5 rounded-xl bg-brand-yellow/10 text-brand-yellow shrink-0">
                                    <Video className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider block mb-1">
                                      {item.label}
                                    </h4>
                                    <p className="text-xs text-brand-gray leading-snug">
                                      Watch the inspection video covering all school labs, library, classrooms, and grounds.
                                    </p>
                                  </div>
                                </div>
                                <a 
                                  href={item.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#E85D22] text-white rounded-2xl text-sm font-bold hover:scale-[1.03] transition-transform shadow-md cursor-pointer self-start md:self-auto shrink-0"
                                >
                                  <Video className="w-4.5 h-4.5" />
                                  <span>Watch YouTube Tour</span>
                                  <ExternalLink className="w-3.5 h-3.5 opacity-85" />
                                </a>
                              </div>
                            );
                          }

                          return (
                            <div 
                              key={item.label}
                              className="p-5 border border-gray-150/50 bg-white rounded-2xl shadow-sm"
                            >
                              <span className="text-[10px] text-brand-gray uppercase tracking-wider block font-bold mb-1.5 leading-snug">
                                {item.label}
                              </span>
                              <span className="text-base font-bold text-brand-navy block">
                                {item.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
