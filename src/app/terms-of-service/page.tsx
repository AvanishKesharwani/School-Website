import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, FileText, Globe, ShieldAlert, ExternalLink, HelpCircle, Mail, Phone, MapPin, CheckCircle, Info } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Manka Public School",
  description: "Terms of Service for Manka Public School. Read the terms and conditions governing the use of our official website.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "June 13, 2026";

  return (
    <div className="flex flex-col min-h-screen bg-brand-white text-brand-navy">
      <Navbar />

      {/* Header Banner */}
      <section className="relative bg-[#0F2747] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-brand-yellow mb-4">
            <Scale className="w-3.5 h-3.5" /> Legal Terms
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Please read these terms carefully. By accessing or using our website, you agree to comply with and be bound by them.
          </p>
          <div className="mt-6 text-sm text-[#F1B221] font-medium">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar TOC - Visible on Desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray border-b border-gray-100 pb-3 mb-4">
                  Terms Sections
                </h3>
                <nav className="space-y-1">
                  <a href="#acceptance" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>1. Acceptance of Terms</span>
                  </a>
                  <a href="#services" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <Globe className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>2. Website Services</span>
                  </a>
                  <a href="#intellectual-property" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <FileText className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>3. Intellectual Property</span>
                  </a>
                  <a href="#user-conduct" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <ShieldAlert className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>4. User Conduct</span>
                  </a>
                  <a href="#third-party" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <ExternalLink className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>5. Third-Party Portals</span>
                  </a>
                  <a href="#accuracy" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <Info className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>6. Information Accuracy</span>
                  </a>
                  <a href="#liability" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <HelpCircle className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>7. Liability Disclaimer</span>
                  </a>
                  <a href="#governing-law" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <Scale className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>8. Governing Law</span>
                  </a>
                  <a href="#contact" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>9. Contact Details</span>
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Policy Content */}
            <div className="lg:col-span-3 space-y-12">
              
              {/* Introduction & Acceptance of Terms */}
              <div id="acceptance" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">1.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  Welcome to the official website of Manka Public School located at{" "}
                  <a href="https://www.mankapublicschool.com" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] hover:underline font-semibold">
                    www.mankapublicschool.com
                  </a>{" "}
                  (hosted at{" "}
                  <a href="https://mankapublicschool.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] hover:underline">
                    mankapublicschool.vercel.app
                  </a>
                  ). By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree to these terms, please do not use this website.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Manka Public School. These Terms govern your access to and use of our website, including any content, functionality, admission forms, and services offered on or through the site.
                </p>
              </div>

              {/* Description of Website Services */}
              <div id="services" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">2.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Description of Website Services
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  Our website provides users with information regarding Manka Public School&apos;s curriculum, campus infrastructure, academic achievements, student life, and gallery. It also provides facilities for prospective parents and students to apply for admissions online and provides redirect links to our external school management portal (NextERP at{" "}
                  <a href="https://manka.nexterp.in" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] hover:underline font-semibold">
                    manka.nexterp.in
                  </a>
                  ).
                </p>
              </div>

              {/* Intellectual Property Rights */}
              <div id="intellectual-property" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">3.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Intellectual Property Rights
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  All content displayed on this website—including but not limited to text, graphics, logos, school emblems, photographs of students and campus events, academic records (&quot;Our Pride&quot;), and software code—is the property of Manka Public School or its content suppliers and is protected by Indian and international copyright, trademark, and intellectual property laws.
                </p>
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-sm text-brand-gray leading-relaxed">
                    <strong className="text-brand-navy">Permitted Use:</strong> You may view, download, and print pages from the website for your personal, non-commercial use (such as downloading admission information and forms).
                  </p>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    <strong className="text-brand-navy">Restrictions:</strong> You must not republish, sell, rent, reproduce, duplicate, or copy material from this website for commercial purposes without explicit written consent from the school administration.
                  </p>
                </div>
              </div>

              {/* User Conduct & Acceptable Use */}
              <div id="user-conduct" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">4.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    User Conduct & Acceptable Use
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  You agree to use our website only for lawful purposes. You are strictly prohibited from:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-brand-gray text-base">
                  <li>Using the website in any way that causes, or may cause, damage to the website or impairment of its availability, accessibility, or integrity.</li>
                  <li>Using the &quot;Get in Touch&quot; or &quot;Apply for Admission&quot; forms to distribute spam, upload malicious scripts, or submit fraudulent inquiries.</li>
                  <li>Attempting to bypass security measures, gain unauthorized access to the administration dashboard, reverse engineer the site structure, or scrape data from the website.</li>
                </ul>
              </div>

              {/* Third-Party Links and Portals (ERP System) */}
              <div id="third-party" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">5.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Third-Party Links and Portals (ERP System)
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  Our website contains links to external third-party websites, most notably our school enterprise resource planning (ERP) login portal hosted at{" "}
                  <a href="https://manka.nexterp.in" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] hover:underline font-semibold">
                    manka.nexterp.in
                  </a>
                  .
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  Manka Public School is not responsible for the technical availability, privacy practices, or content of external third-party portals. Any interactions, data entry, or financial transactions (such as online fee payments) conducted on the NextERP portal are governed by that specific portal&apos;s terms and privacy policies.
                </p>
              </div>

              {/* Accuracy of Information */}
              <div id="accuracy" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">6.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Accuracy of Information
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  While we strive to keep all information regarding fees, curriculum, events, and admissions up to date, Manka Public School does not guarantee that all descriptions, schedules, or tables on this website are entirely accurate, complete, or error-free. The school reserves the right to modify admission criteria, fee structures, and calendar events at any time without prior notice.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">7.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed text-slate-700 italic bg-slate-50 p-5 rounded-xl border border-slate-100">
                  &quot;Manka Public School, its management, teachers, and website developers will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website or the information contained within it.&quot;
                </p>
              </div>

              {/* Governing Law and Jurisdiction */}
              <div id="governing-law" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">8.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Governing Law and Jurisdiction
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts located in Janjgir-Champa or Bilaspur, Chhattisgarh, India.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  Manka Public School reserves the right to revise these Terms of Service at any time. By continuing to use the website after changes are posted, you accept the modified terms.
                </p>
              </div>

              {/* Contact Information */}
              <div id="contact" className="scroll-mt-28 space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">9.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Contact Information
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  If you have any questions or concerns regarding these Terms of Service, please contact the school administration directly:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-150 flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider block mb-1">School Address</span>
                      <p className="text-sm text-brand-navy font-semibold">
                        Manka Public School<br />
                        Near Station Road, Champa,<br />
                        Chhattisgarh - 495671, India
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-150 flex flex-col justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider block mb-1">Email Address</span>
                        <a href="mailto:mpscph2008@gmail.com" className="text-sm text-[#007BFF] hover:underline font-semibold">
                          mpscph2008@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider block mb-1">Phone Number</span>
                        <a href="tel:+917489039731" className="text-sm text-brand-navy font-semibold hover:text-[#007BFF] transition-colors">
                          +91 74890 39731
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
