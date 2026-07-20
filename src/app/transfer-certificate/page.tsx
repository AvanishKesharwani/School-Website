"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, Download, Eye, X, Calendar, User, ClipboardList, Shield, Award } from "lucide-react";

interface TCRecord {
  recNo: string;
  admissionNo: string;
  dischargeNo: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  nationality: string;
  caste: string;
  dob: string;
  dobWords: string;
  admissionDate: string;
  classAdmitted: string;
  classLastStudied: string;
  examLastTaken: string;
  failed: string;
  promoted: string;
  ncc: string;
  games: string;
  conduct: string;
  applyDate: string;
  issueDate: string;
  reason: string;
}

const tcRecords: TCRecord[] = [
  {
    recNo: "1417",
    admissionNo: "PP/430",
    dischargeNo: "1286",
    studentName: "PULKIT SINGH",
    fatherName: "MR. DILESHWAR PRATAP SINGH",
    motherName: "MRS. SULOCHANA KANWAR",
    nationality: "INDIAN",
    caste: "ST (KANWAR)",
    dob: "28/03/2013",
    dobWords: "TWENTY EIGHT MARCH TWO THOUSAND THIRTEEN",
    admissionDate: "16/06/2016",
    classAdmitted: "NUR",
    classLastStudied: "1ST (FIRST)",
    examLastTaken: "KG-II",
    failed: "NO",
    promoted: "1ST RUNNING",
    ncc: "N.A.",
    games: "NIL",
    conduct: "GOOD",
    applyDate: "17/10/2019",
    issueDate: "18/10/2019",
    reason: "PARENT'S TRANSFER"
  },
  {
    recNo: "1416",
    admissionNo: "42",
    dischargeNo: "1285",
    studentName: "KARAN PATEL",
    fatherName: "MR. SURESH KUMAR PATEL",
    motherName: "MRS. RAJ KUMARI PATEL",
    nationality: "INDIAN",
    caste: "OBC (AGHARIYA)",
    dob: "12/09/2009",
    dobWords: "TWELVE SEPTEMBER TWO THOUSAND NINE",
    admissionDate: "03/07/2013",
    classAdmitted: "NUR",
    classLastStudied: "3RD (THIRD)",
    examLastTaken: "PASS",
    failed: "NO",
    promoted: "YES (4TH)",
    ncc: "N.A.",
    games: "NIL",
    conduct: "GOOD",
    applyDate: "05/09/2019",
    issueDate: "07/09/2019",
    reason: "PARENT'S REQUEST"
  },
  {
    recNo: "1415",
    admissionNo: "348",
    dischargeNo: "1284",
    studentName: "PUSHKAR SINGH RATHORE",
    fatherName: "MR. MAHENDRA RATHORE",
    motherName: "MRS. SANGEETA RATHORE",
    nationality: "INDIAN",
    caste: "OBC (TELI)",
    dob: "17/01/2009",
    dobWords: "SEVENTEEN JANUARY TWO THOUSAND NINE",
    admissionDate: "27/06/2015",
    classAdmitted: "1ST",
    classLastStudied: "4TH (FOURTH)",
    examLastTaken: "PASS",
    failed: "NO",
    promoted: "YES (5TH)",
    ncc: "N.A.",
    games: "NIL",
    conduct: "GOOD",
    applyDate: "05/09/2019",
    issueDate: "07/09/2019",
    reason: "PARENT'S REQUEST"
  },
  {
    recNo: "1414",
    admissionNo: "P/614",
    dischargeNo: "1283",
    studentName: "PRAYAG RAJ CHANDRA",
    fatherName: "MR. YUVRAJ CHANDRA",
    motherName: "MRS. ALKA CHANDRA",
    nationality: "INDIAN",
    caste: "OBC (CHANDRANAHU)",
    dob: "04/02/2010",
    dobWords: "FOUR FEBRUARY TWO THOUSAND TEN",
    admissionDate: "25/06/2019",
    classAdmitted: "4TH",
    classLastStudied: "4TH (FOURTH)",
    examLastTaken: "4TH RUNNING",
    failed: "NO",
    promoted: "RUNNING (4TH)",
    ncc: "N.A.",
    games: "NIL",
    conduct: "GOOD",
    applyDate: "05/09/2019",
    issueDate: "07/09/2019",
    reason: "PARENT'S TRANSFER"
  },
  {
    recNo: "1413",
    admissionNo: "M/279",
    dischargeNo: "1282",
    studentName: "PRAGATI CHANDRA",
    fatherName: "MR. YUVRAJ CHANDRA",
    motherName: "MRS. ALKA CHANDRA",
    nationality: "INDIAN",
    caste: "OBC (CHANDRANAHU)",
    dob: "09/07/2008",
    dobWords: "NINE JULY TWO THOUSAND EIGHT",
    admissionDate: "24/06/2019",
    classAdmitted: "6TH",
    classLastStudied: "6TH (SIXTH)",
    examLastTaken: "6TH RUNNING",
    failed: "NO",
    promoted: "RUNNING (6TH)",
    ncc: "N.A.",
    games: "NIL",
    conduct: "GOOD",
    applyDate: "05/09/2019",
    issueDate: "07/09/2019",
    reason: "PARENT'S TRANSFER"
  }
];

export default function TransferCertificatePage() {
  const [search, setSearch] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<TCRecord | null>(null);

  const filteredRecords = tcRecords.filter((rec) => {
    const s = search.toLowerCase();
    return (
      rec.studentName.toLowerCase().includes(s) ||
      rec.recNo.includes(s) ||
      rec.admissionNo.toLowerCase().includes(s) ||
      rec.dischargeNo.includes(s)
    );
  });

  return (
    <main className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative bg-brand-navy pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="tc-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#tc-grid)" />
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-brand-yellow/20 text-brand-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Verification & Records
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Transfer Certificates
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Official school registry and verification repository for issued student transfer certificates (TC).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          {/* Main Info */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-[0_8px_30px_rgb(0,0,0,0.01)] mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-2xl font-bold text-brand-navy">Registry & Verification</h2>
              <p className="text-brand-gray text-base leading-relaxed">
                As per regulatory compliance, the registry of transfer certificates issued by Manka Public School is maintained publicly for quick verification by higher institutions and parents. You can search the database by entering the Student's Name, Admission Number, or TC Receipt Number.
              </p>
            </div>
            <a 
              href="/Transfer Certificate/transfer-certificates.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#E85D22] text-white hover:bg-[#d04c13] font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2 shrink-0 cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              Download All TC PDF
            </a>
          </div>

          {/* Search bar & Filter */}
          <div className="mb-8">
            <div className="relative max-w-md bg-white rounded-2xl shadow-sm border border-gray-200">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Student Name, Admission No, TC Rec..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85D22] text-sm"
              />
            </div>
          </div>

          {/* Records Table */}
          <div className="bg-white rounded-3xl border border-gray-150 shadow-[0_8px_30px_rgb(0,0,0,0.01)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-brand-navy text-white text-sm font-semibold uppercase tracking-wider">
                    <th className="px-6 py-4">Rec No.</th>
                    <th className="px-6 py-4">Admission No.</th>
                    <th className="px-6 py-4">Student Name</th>
                    <th className="px-6 py-4">Class Last Studied</th>
                    <th className="px-6 py-4">Date of Issue</th>
                    <th className="px-6 py-4">Reason for Leaving</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-[#0F2747]">
                  {filteredRecords.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-400 font-medium">
                        No records match your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredRecords.map((rec) => (
                      <tr key={rec.recNo} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold">{rec.recNo}</td>
                        <td className="px-6 py-4 font-semibold text-brand-gray">{rec.admissionNo}</td>
                        <td className="px-6 py-4 font-bold text-brand-navy">{rec.studentName}</td>
                        <td className="px-6 py-4 font-semibold text-brand-gray">{rec.classLastStudied}</td>
                        <td className="px-6 py-4">{rec.issueDate}</td>
                        <td className="px-6 py-4 text-sm text-brand-gray">{rec.reason}</td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedRecord(rec)}
                            className="px-3.5 py-1.5 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-1 hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            View TC
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modal / Overlay for TC Certificate Display */}
      <AnimatePresence>
        {selectedRecord && (
          <div className="fixed inset-0 bg-[#0F2747]/65 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full border border-gray-200 overflow-hidden relative flex flex-col my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRecord(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#E85D22] rounded-full hover:bg-gray-100 transition-colors z-20 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate layout mockup container */}
              <div className="p-6 md:p-10 overflow-y-auto max-h-[80vh]">
                
                {/* School Header Mockup */}
                <div className="border-4 border-double border-brand-navy p-6 rounded-2xl relative text-center text-[#0F2747] space-y-4">
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-navy" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand-navy" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand-navy" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-navy" />
                  
                  {/* Logo overlay background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <img src="/logo.png" alt="MPS Watermark" className="w-80 h-80 object-contain" />
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="Manka Public School Logo" className="h-16 w-auto mb-2" />
                    <h3 className="text-3xl font-black tracking-wide text-brand-navy uppercase">Manka Public School</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">(English Medium)</p>
                    <p className="text-[11px] font-semibold text-brand-gray mt-1">Tahsil Road, Champa, Distt:- Janjgir-Champa (C.G.)</p>
                    <p className="text-[10px] text-gray-500 font-medium">Recognised By: C.G. B.S.E. Raipur (C.G.) | Semis Code-22060400254</p>
                  </div>

                  <div className="border-t border-b-2 border-double border-brand-navy py-2 my-4">
                    <h4 className="text-xl font-extrabold uppercase tracking-widest text-[#E85D22]">Transfer Certificate</h4>
                  </div>

                  {/* Top Stats Metadata */}
                  <div className="grid grid-cols-3 gap-2 text-xs font-bold text-left border-b border-gray-200 pb-3">
                    <div>Rec. No. - <span className="underline decoration-[#E85D22] decoration-2 underline-offset-4 text-brand-navy">{selectedRecord.recNo}</span></div>
                    <div className="text-center">Adm. No. - <span className="underline decoration-[#E85D22] decoration-2 underline-offset-4 text-brand-navy">{selectedRecord.admissionNo}</span></div>
                    <div className="text-right">Discharge No. - <span className="underline decoration-[#E85D22] decoration-2 underline-offset-4 text-brand-navy">{selectedRecord.dischargeNo}</span></div>
                  </div>

                  {/* Certificate Body Items */}
                  <div className="text-left text-xs space-y-3.5 pt-4 text-gray-800">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">1.</span>
                      <span className="font-semibold w-72 shrink-0">Name of Pupil:</span>
                      <span className="font-extrabold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase tracking-wide">{selectedRecord.studentName}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">2.</span>
                      <span className="font-semibold w-72 shrink-0">Father's Name/Guardian's Name:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.fatherName}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">3.</span>
                      <span className="font-semibold w-72 shrink-0">Mother's Name:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.motherName}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">4.</span>
                        <span className="font-semibold w-40 shrink-0">Nationality:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.nationality}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">5.</span>
                        <span className="font-semibold w-48 shrink-0">SC/ST/OBC/GEN Category:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.caste}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">6.</span>
                        <span className="font-semibold w-72 shrink-0">Date of Birth (according to Admission Register):</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5">{selectedRecord.dob}</span>
                      </div>
                      <div className="flex items-baseline gap-2 pl-8">
                        <span className="text-gray-500 text-[10px] uppercase font-bold w-24 shrink-0">(In Words):</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase text-[10px] leading-relaxed">{selectedRecord.dobWords}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">7.</span>
                        <span className="font-semibold w-52 shrink-0">Date of Admission & Admission Class:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5">{selectedRecord.admissionDate}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">8.</span>
                        <span className="font-semibold w-40 shrink-0">Admitted in Class:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.classAdmitted}</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">9.</span>
                      <span className="font-semibold w-72 shrink-0">Class in which pupil last studied:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.classLastStudied}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">10.</span>
                        <span className="font-semibold w-52 shrink-0">School/Board Exam last taken:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.examLastTaken}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">11.</span>
                        <span className="font-semibold w-40 shrink-0">Failed twice in same class:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.failed}</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">12.</span>
                      <span className="font-semibold w-72 shrink-0">Qualified for promotion to higher class:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.promoted}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">13.</span>
                        <span className="font-semibold w-52 shrink-0">Whether NCC Cadet/Boy Scout/Girls Guide:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.ncc}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">14.</span>
                        <span className="font-semibold w-40 shrink-0">Games/Extra Curricular activities:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.games}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">15.</span>
                        <span className="font-semibold w-52 shrink-0">General Conduct:</span>
                        <span className="font-bold text-[#E85D22] border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase">{selectedRecord.conduct}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-gray-500 w-6 shrink-0">16.</span>
                        <span className="font-semibold w-40 shrink-0">Date of TC Application:</span>
                        <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5">{selectedRecord.applyDate}</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">17.</span>
                      <span className="font-semibold w-72 shrink-0">Date of Issue of Certificate:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5">{selectedRecord.issueDate}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-gray-500 w-6 shrink-0">18.</span>
                      <span className="font-semibold w-72 shrink-0">Reasons for leaving the school:</span>
                      <span className="font-bold text-brand-navy border-b border-dashed border-gray-400 flex-grow pb-0.5 uppercase tracking-wide">{selectedRecord.reason}</span>
                    </div>
                  </div>

                  {/* Signatures Mockup footer */}
                  <div className="pt-10 flex justify-between items-end text-[10px] text-gray-500 font-bold border-t border-gray-150 mt-8">
                    <div className="text-left space-y-1">
                      <div>Date: <span className="underline text-brand-navy">{selectedRecord.issueDate}</span></div>
                    </div>
                    <div className="text-center space-y-1">
                      <div className="font-black text-brand-navy tracking-wider text-[11px] italic">We Wish Him / Her Best Wishes</div>
                      <div className="h-6" />
                      <div className="border-t border-gray-300 pt-1 px-4 uppercase">Head Clerk / Dist. Office Superintendent</div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="h-6" />
                      <div className="border-t border-gray-300 pt-1 px-4 uppercase">Head Master / Principal Signature (Seal)</div>
                    </div>
                  </div>

                </div>

                <div className="flex justify-end gap-4 mt-8">
                  <button
                    onClick={() => setSelectedRecord(null)}
                    className="px-6 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-brand-gray font-bold text-sm transition-all cursor-pointer"
                  >
                    Close Preview
                  </button>
                  <a
                    href="/Transfer Certificate/transfer-certificates.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-navy/90 font-bold rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Original PDF
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
