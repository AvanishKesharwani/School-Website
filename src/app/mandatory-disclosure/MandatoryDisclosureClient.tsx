"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Video,
  Edit2,
  Loader2,
  X,
  Upload,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { getSectionContent, updateSectionContent } from "@/lib/cms-actions";

export default function MandatoryDisclosureClient({ isAdmin = false }: { isAdmin?: boolean }) {
  const [sarasLink, setSarasLink] = useState("/mandatory-public-disclousre.pdf");
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION",
      links: [
        { label: "Affiliation Letter", url: "/PDF/CBSE AFFILIATION.pdf" }
      ]
    },
    {
      id: 2,
      title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE",
      links: [
        { label: "Society Registration", url: "/PDF/2copies of society.jpeg" }
      ]
    },
    {
      id: 3,
      title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED BY THE STATE GOVT./UT",
      links: [
        { label: "NOC Certificate", url: "/PDF/3 copies of noc.pdf" }
      ]
    },
    {
      id: 4,
      title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL",
      links: [
        { label: "RTE Recognition", url: "/Doc/CORCURA.pdf" }
      ]
    },
    {
      id: 5,
      title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
      links: [
        { label: "Building Safety", url: "/Doc/building safety.pdf" }
      ]
    },
    {
      id: 6,
      title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
      links: [
        { label: "Fire NOC Certificate", url: "/Doc/FIRE NOC.pdf" }
      ]
    },
    {
      id: 7,
      title: "COPY OF THE DEO CERTIFICATE FOR AFFILIATION/UPGRADATION/EXTENSION OR SELF CERTIFICATION",
      links: [
        { label: "DEO Certificate", url: "/PDF/7 copy of deo certi..pdf" }
      ]
    },
    {
      id: 8,
      title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      links: [
        { label: "Water & Sanitation Report", url: "/Doc/WATER HEALTH SANITATION REPORT.pdf" }
      ]
    }
  ]);

  const [academics, setAcademics] = useState([
    {
      id: 1,
      title: "FEE STRUCTURE OF THE SCHOOL",
      links: [{ label: "Fee Structure", url: "/Doc/Fees Strcuture of The School.pdf" }]
    },
    {
      id: 2,
      title: "ANNUAL ACADEMIC CALENDAR",
      links: [
        { label: "Academic Calendar (AAC)", url: "/Doc/AAC.pdf" }
      ]
    },
    {
      id: 3,
      title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      links: [
        { label: "SMC List (LOSMC)", url: "/Doc/LOSMC.pdf" }
      ]
    },
    {
      id: 4,
      title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      links: [{ label: "PTA Members List", url: "/Doc/PTA2023.pdf" }]
    },
    {
      id: 5,
      title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
      links: [
        { label: "3-Year Results Details", url: "/Doc/LTYROTBE.pdf" }
      ]
    }
  ]);

  const [staffBreakdown, setStaffBreakdown] = useState([
    { role: "PGT (Post Graduate Teachers)", count: 11, link: "/Doc/MPD PGT 2026-27.pdf" },
    { role: "TGT (Trained Graduate Teachers)", count: 24, link: "/Doc/MPD TGT 2026-27.pdf" },
    { role: "PRT (Primary Teachers)", count: 24, link: "/Doc/MPD PRT 2026-27.pdf" },
    { role: "PET (Physical Education Teachers)", count: 3, link: "/Doc/MPD PET 2026-27.pdf" },
  ]);

  // Modal Editing States
  const [editingTarget, setEditingTarget] = useState<{
    section: "saras" | "documents" | "academics" | "staff";
    id?: number;
    role?: string;
    linkIndex?: number;
    label: string;
    url: string;
  } | null>(null);

  const [inputUrl, setInputUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadCustomLinks = async () => {
      try {
        const contentStr = await getSectionContent("mandatory-disclosure-links", "");
        if (contentStr) {
          const parsed = JSON.parse(contentStr);
          if (parsed.sarasLink) setSarasLink(parsed.sarasLink);
          if (parsed.documents) setDocuments(parsed.documents);
          if (parsed.academics) setAcademics(parsed.academics);
          if (parsed.staffBreakdown) setStaffBreakdown(parsed.staffBreakdown);
        }
      } catch (e) {
        console.error("Failed to load custom disclosure links:", e);
      }
    };
    loadCustomLinks();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTarget) return;

    setIsSaving(true);
    const finalUrl = inputUrl;

    try {
      // Create new updated objects
      let updatedSarasLink = sarasLink;
      let updatedDocuments = [...documents];
      let updatedAcademics = [...academics];
      let updatedStaffBreakdown = [...staffBreakdown];

      if (editingTarget.section === "saras") {
        updatedSarasLink = finalUrl;
        setSarasLink(finalUrl);
      } else if (editingTarget.section === "documents") {
        updatedDocuments = documents.map((doc) => {
          if (doc.id === editingTarget.id) {
            const updatedLinks = doc.links.map((link, idx) => {
              if (idx === editingTarget.linkIndex) {
                return { ...link, url: finalUrl };
              }
              return link;
            });
            return { ...doc, links: updatedLinks };
          }
          return doc;
        });
        setDocuments(updatedDocuments);
      } else if (editingTarget.section === "academics") {
        updatedAcademics = academics.map((item) => {
          if (item.id === editingTarget.id) {
            const updatedLinks = item.links.map((link, idx) => {
              if (idx === editingTarget.linkIndex) {
                return { ...link, url: finalUrl };
              }
              return link;
            });
            return { ...item, links: updatedLinks };
          }
          return item;
        });
        setAcademics(updatedAcademics);
      } else if (editingTarget.section === "staff") {
        updatedStaffBreakdown = staffBreakdown.map((item) => {
          if (item.role === editingTarget.role) {
            return { ...item, link: finalUrl };
          }
          return item;
        });
        setStaffBreakdown(updatedStaffBreakdown);
      }

      // Save to database/CMS mock section
      const dataToSave = {
        sarasLink: updatedSarasLink,
        documents: updatedDocuments,
        academics: updatedAcademics,
        staffBreakdown: updatedStaffBreakdown,
      };

      await updateSectionContent(
        "mandatory-disclosure-links",
        "Mandatory Disclosure Links",
        JSON.stringify(dataToSave)
      );

      setEditingTarget(null);
      setSelectedFile(null);
    } catch (err) {
      console.error("Failed to save link:", err);
      alert("An unexpected error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleViewLink = (e: React.MouseEvent, url: string, label: string) => {
    if (url.startsWith("data:")) {
      e.preventDefault();
      try {
        const parts = url.split(";base64,");
        const contentType = parts[0].split(":")[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
        }
        const blob = new Blob([uInt8Array], { type: contentType });
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank");
      } catch (err) {
        console.error("Failed to open data URL in new tab:", err);
        // Fallback: trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = `${label.replace(/\s+/g, "_")}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const generalInfo = [
    { label: "NAME OF THE SCHOOL", value: "Manka Public School" },
    { label: "AFFILIATION NO", value: "3330393", highlight: true },
    { label: "SCHOOL CODE", value: "15943", highlight: true },
    { label: "COMPLETE ADDRESS WITH PIN CODE", value: "Tahsil Road, Aadarsh nagar Champa, Dist. - Janjgir-Champa (C.G.), PIN 495671" },
    { label: "PRINCIPAL NAME & QUALIFICATION", value: "AVINASH KESHARWANI, M.Sc. (Physics), B.Ed." },
    { label: "SCHOOL EMAIL ID", value: "mankaschool2008@gmail.com" },
    { label: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "+91 99816 72985" },
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
    ]
  };

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
            <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold mb-6 text-white/90">
              <Link href="/" className="text-brand-yellow hover:text-brand-yellow/80 transition-colors">Home</Link>
              <span className="text-white/60">»</span>
              <span className="text-white">Mandatory Public Disclosure</span>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Official records, registration documents, academic statistics, and infrastructure details for Manka Public School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top Center SARAS Link */}
      <section className="py-10 bg-white border-b border-gray-100 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 justify-center"
          >
            <a
              href={sarasLink}
              onClick={(e) => handleViewLink(e, sarasLink, "SARAS Mandatory Public Disclosure")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-extrabold text-blue-600 hover:text-blue-800 underline uppercase tracking-wide cursor-pointer"
            >
              SARAS Mandatory Public Disclosure PDF
            </a>
            {isAdmin && (
              <button
                onClick={() => {
                  setEditingTarget({
                    section: "saras",
                    label: "SARAS Disclosure PDF",
                    url: sarasLink
                  });
                  setInputUrl(sarasLink);
                }}
                className="p-1.5 bg-gray-100 hover:bg-gray-200 text-[#E85D22] transition-all rounded-lg cursor-pointer"
                title="Edit Document"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Appendix IX Header */}
      <div className="max-w-5xl mx-auto mt-16 mb-8 text-center px-4">
        <h2 className="text-3xl font-extrabold text-brand-navy">APPENDIX – IX</h2>
        <p className="text-[#E85D22] text-sm md:text-base font-bold uppercase tracking-wider mt-1.5">Mandatory Public Disclosure</p>
      </div>
      
      {/* Main Tables Container */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-12">
            
            {/* Section A: GENERAL INFORMATION */}
            <div className="bg-white border border-gray-300 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-yellow rounded-full inline-block"></span>
                A. GENERAL INFORMATION
              </h3>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-[12%] border border-gray-300 text-center">SL.NO.</th>
                      <th className="py-3 px-4 w-[38%] border border-gray-300">INFORMATION</th>
                      <th className="py-3 px-4 w-[50%] border border-gray-300">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    {generalInfo.map((info, idx) => (
                      <tr key={info.label} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">{idx + 1}</td>
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">{info.label}</td>
                        <td className="py-3 px-4 border border-gray-300 text-brand-gray">
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

            {/* Section B: DOCUMENTS AND INFORMATION */}
            <div className="bg-white border border-gray-300 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-yellow rounded-full inline-block"></span>
                B. DOCUMENTS AND INFORMATION
              </h3>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-[12%] border border-gray-300 text-center">SL.NO.</th>
                      <th className="py-3 px-4 w-[63%] border-r border-gray-300">DOCUMENTS/INFORMATION</th>
                      <th className="py-3 px-4 w-[25%] border border-gray-300">UPLOAD DOCUMENTS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    {documents.map((doc, idx) => (
                      <tr key={doc.id} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">{idx + 1}</td>
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">{doc.title}</td>
                        <td className="py-3 px-4 border border-gray-300">
                          <div className="flex flex-col gap-1.5">
                            {doc.links.map((link, lIdx) => (
                              <div key={link.label} className="flex items-center justify-between gap-4">
                                <a
                                  href={link.url}
                                  onClick={(e) => handleViewLink(e, link.url, link.label)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline text-sm font-semibold cursor-pointer"
                                >
                                  View {doc.links.length > 1 ? `(${link.label})` : ""}
                                </a>
                                {isAdmin && (
                                  <button
                                    onClick={() => {
                                      setEditingTarget({
                                        section: "documents",
                                        id: doc.id,
                                        linkIndex: lIdx,
                                        label: link.label,
                                        url: link.url
                                      });
                                      setInputUrl(link.url);
                                    }}
                                    className="p-1 bg-gray-100 hover:bg-gray-200 text-[#E85D22] transition-all rounded-md cursor-pointer"
                                    title="Edit Document"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section C: RESULT AND ACADEMICS */}
            <div className="bg-white border border-gray-300 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-yellow rounded-full inline-block"></span>
                C. RESULT AND ACADEMICS
              </h3>
              <div className="overflow-x-auto border border-gray-300 mb-8">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-[12%] border border-gray-300 text-center">SL.NO.</th>
                      <th className="py-3 px-4 w-[43%] border-r border-gray-300">DOCUMENTS/INFORMATION</th>
                      <th className="py-3 px-4 w-[45%] border border-gray-300">LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    {academics.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">{idx + 1}</td>
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">{item.title}</td>
                        <td className="py-3 px-4 border border-gray-300">
                          <div className="flex flex-col gap-1.5">
                            {item.links.map((link, lIdx) => (
                              <div key={link.label} className="flex items-center justify-between gap-4">
                                <a
                                  href={link.url}
                                  onClick={(e) => handleViewLink(e, link.url, link.label)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline text-sm font-semibold cursor-pointer"
                                >
                                  View {item.links.length > 1 ? `(${link.label})` : ""}
                                </a>
                                {isAdmin && (
                                  <button
                                    onClick={() => {
                                      setEditingTarget({
                                        section: "academics",
                                        id: item.id,
                                        linkIndex: lIdx,
                                        label: link.label,
                                        url: link.url
                                      });
                                      setInputUrl(link.url);
                                    }}
                                    className="p-1 bg-gray-100 hover:bg-gray-200 text-[#E85D22] transition-all rounded-md cursor-pointer"
                                    title="Edit Document"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Class X Results */}
              <h4 className="text-base font-bold text-brand-navy mb-4 mt-8 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#E85D22] rounded-full"></span>
                RESULT CLASS: X
              </h4>
              <div className="overflow-x-auto border border-gray-300 mb-8">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 border border-gray-300 text-center">S.NO.</th>
                      <th className="py-3 px-4 border border-gray-300">YEAR</th>
                      <th className="py-3 px-4 border border-gray-300">NO. OF REGISTERED STUDENTS</th>
                      <th className="py-3 px-4 border border-gray-300">NO. OF STUDENTS PASSED</th>
                      <th className="py-3 px-4 border border-gray-300">PASS PERCENTAGE</th>
                      <th className="py-3 px-4 border border-gray-300">REMARKS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    {classXResults.map((res, idx) => (
                      <tr key={res.year} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">{idx + 1}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.year}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.registered}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.passed}</td>
                        <td className="py-3 px-4 border border-gray-300">
                          <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 font-bold rounded-lg border border-green-100">
                            {res.percentage}
                          </span>
                        </td>
                        <td className="py-3 px-4 border border-gray-300 text-xs text-brand-gray">CBSE Board ({res.remarks})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Class XII Results */}
              <h4 className="text-base font-bold text-brand-navy mb-4 mt-8 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#E85D22] rounded-full"></span>
                RESULT CLASS: XII
              </h4>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 border border-gray-300 text-center">S.NO.</th>
                      <th className="py-3 px-4 border border-gray-300">YEAR</th>
                      <th className="py-3 px-4 border border-gray-300">NO. OF REGISTERED STUDENTS</th>
                      <th className="py-3 px-4 border border-gray-300">NO. OF STUDENTS PASSED</th>
                      <th className="py-3 px-4 border border-gray-300">PASS PERCENTAGE</th>
                      <th className="py-3 px-4 border border-gray-300">REMARKS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    {classXIILesults.map((res, idx) => (
                      <tr key={res.year} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">{idx + 1}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.year}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.registered}</td>
                        <td className="py-3 px-4 border border-gray-300">{res.passed}</td>
                        <td className="py-3 px-4 border border-gray-300">
                          <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 font-bold rounded-lg border border-green-100">
                            {res.percentage}
                          </span>
                        </td>
                        <td className="py-3 px-4 border border-gray-300 text-xs text-brand-gray">CBSE Board ({res.remarks})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section D: STAFF (TEACHING) */}
            <div className="bg-white border border-gray-300 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-yellow rounded-full inline-block"></span>
                D. STAFF (TEACHING)
              </h3>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-[12%] border border-gray-300 text-center">S.NO.</th>
                      <th className="py-3 px-4 w-[38%] border border-gray-300">INFORMATION</th>
                      <th className="py-3 px-4 w-[15%] border border-gray-300">DETAILS</th>
                      <th className="py-3 px-4 w-[35%] border border-gray-300">NAME AND QUALIFICATIONS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">1</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">PRINCIPAL</td>
                      <td className="py-3 px-4 border border-gray-300">01</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">AVINASH KESHARWANI (M.Sc., B.Ed.)</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">2</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">VICE PRINCIPAL</td>
                      <td className="py-3 px-4 border border-gray-300">01</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">L.N.DHIMAR (MA, B.Ed.)</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">3</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">HEADMISTRESS/HEADMASTER</td>
                      <td className="py-3 px-4 border border-gray-300">01</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">MONA KESHARWANI (M.Sc., B.Ed.)</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center" rowSpan={5}>4</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">TOTAL NO. OF TEACHERS</td>
                      <td className="py-3 px-4 border border-gray-300">72</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray"></td>
                    </tr>
                    {staffBreakdown.map((item) => (
                      <tr key={item.role} className="hover:bg-brand-navy/5 transition-colors">
                        <td className="py-2.5 px-4 border border-gray-300 text-brand-navy pl-8 font-medium">* {item.role.split(' ')[0]}</td>
                        <td className="py-2.5 px-4 border border-gray-300">{item.count < 10 ? `0${item.count}` : item.count}</td>
                        <td className="py-2.5 px-4 border border-gray-300">
                          <div className="flex items-center justify-between gap-4">
                            <a
                              href={item.link}
                              onClick={(e) => handleViewLink(e, item.link, item.role)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline text-sm font-semibold cursor-pointer"
                            >
                              Link
                            </a>
                            {isAdmin && (
                              <button
                                onClick={() => {
                                  setEditingTarget({
                                    section: "staff",
                                    role: item.role,
                                    label: item.role,
                                    url: item.link
                                  });
                                  setInputUrl(item.link);
                                }}
                                className="p-1 bg-gray-100 hover:bg-gray-200 text-[#E85D22] transition-all rounded-md cursor-pointer"
                                title="Edit Document"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">5</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">TEACHERS SECTION RATIO</td>
                      <td className="py-3 px-4 border border-gray-300">01:01:05</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">NA</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">6</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">DETAILS OF SPECIAL EDUCATOR</td>
                      <td className="py-3 px-4 border border-gray-300">01</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">GEETU KESHARWANI (BA, B.Ed. in Special Education)</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">7</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                      <td className="py-3 px-4 border border-gray-300">01</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">SHIVANI PANDA (M.A. Psychology)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section E: SCHOOL INFRASTRUCTURE */}
            <div className="bg-white border border-gray-300 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand-yellow rounded-full inline-block"></span>
                E. SCHOOL INFRASTRUCTURE
              </h3>
              <div className="overflow-x-auto border border-gray-300">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-[12%] border border-gray-300 text-center">S.NO.</th>
                      <th className="py-3 px-4 w-[53%] border-r border-gray-300">INFORMATION</th>
                      <th className="py-3 px-4 w-[35%] border-gray-300">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-brand-gray font-medium">
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">1</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">8384 Sq. mtr</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">2</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. AND SIZE OF THE CLASS ROOM (IN SQUARE MTR)</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">46 Rooms, 46.5 Sq. mtr each</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">3</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">55.75 Sq. mtr each</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">4</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. AND SIZE OF LIBRARY (IN SQR MTR)</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">01 (ONE) 111.48 Sq. mtr</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">5</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">INTERNET FACILITY (Y/N)</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">Yes</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">6</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. OF GIRLS TOILETS</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">20</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">7</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. OF BOYS TOILETS</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">20</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">8</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">NO. OF CWSN TOILETS</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-gray">(01) GIRLS ; (01) BOYS</td>
                    </tr>
                    <tr className="hover:bg-brand-navy/5 transition-colors">
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-bold text-center">9</td>
                      <td className="py-3 px-4 border border-gray-300 text-brand-navy font-semibold leading-relaxed">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                      <td className="py-3 px-4 border border-gray-300">
                        <a
                          href="https://www.youtube.com/watch?v=MY-pnvbka28"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm font-semibold cursor-pointer"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Edit Link Modal (Admin Only) */}
      <AnimatePresence>
        {editingTarget && (
          <div className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full border border-gray-200 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setEditingTarget(null);
                  setSelectedFile(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-brand-navy mb-1.5 flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-[#E85D22]" /> Edit Document Link
              </h3>
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold text-[10px]">
                Target: {editingTarget.label}
              </p>

              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Document / Image URL
                  </label>
                  <input
                    type="text"
                    value={inputUrl.startsWith("data:") ? "[Local File Selected]" : inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://... or /PDF/filename.pdf"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-250 rounded-xl focus:ring-2 focus:ring-[#E85D22]/20 focus:border-[#E85D22] text-sm text-[#0f2747] outline-none transition-all"
                  />
                  <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
                    Provide a link directly, or upload a new file below to embed the document/image.
                  </p>
                </div>

                <div className="border-t border-gray-150 pt-4">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Or Upload File (.pdf, .jpg, .png, .jpeg)
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#0F2747] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Upload className="w-4 h-4 text-gray-500" />
                      Select File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                          
                          // Convert to base64 immediately for DB storage
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            if (event.target?.result) {
                              setInputUrl(event.target.result as string);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                    {selectedFile && (
                      <span className="text-xs text-brand-navy font-bold flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-xl truncate max-w-[200px]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        {selectedFile.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 border-t border-gray-150 pt-4 mt-6">
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={() => {
                      setEditingTarget(null);
                      setSelectedFile(null);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-brand-gray text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-5 py-2.5 bg-[#E85D22] text-white hover:bg-[#d04c13] text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
