import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, FileText, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Terms of Use | Manka Public School",
  description: "Terms of Use and Privacy Policy for Manka Public School Champa. Learn about how we protect and handle your information.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" /> Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Please read these terms carefully. By using our website, you agree to comply with them.
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
                  Sections
                </h3>
                <nav className="space-y-1">
                  <a href="#introduction" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <FileText className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>1. Introduction</span>
                  </a>
                  <a href="#privacy-policy" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors">
                    <Lock className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>2. Privacy Policy</span>
                  </a>
                  <a href="#information-collected" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors pl-6 border-l border-gray-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gray/30 group-hover:bg-[#E85D22] transition-colors" />
                    <span>Information Collected</span>
                  </a>
                  <a href="#childrens-notice" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors pl-6 border-l border-gray-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gray/30 group-hover:bg-[#E85D22] transition-colors" />
                    <span>Children's Notice</span>
                  </a>
                  <a href="#third-parties" className="group flex items-center gap-2 py-2 text-sm font-semibold text-brand-gray hover:text-[#E85D22] transition-colors pl-6 border-l border-gray-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gray/30 group-hover:bg-[#E85D22] transition-colors" />
                    <span>Third Party Disclosure</span>
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Policy Content */}
            <div className="lg:col-span-3 space-y-12">
              
              {/* Introduction */}
              <div id="introduction" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">I.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Introduction
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  Welcome to the Manka Public School Website located at{" "}
                  <a href="https://www.mankapublicschool.com" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] hover:underline font-semibold">
                    www.mankapublicschool.com
                  </a>
                  . The School provides this Website to you subject to the following Terms of Use and Privacy Policy. When you use this Website, you agree to abide by these Terms. If you do not agree to abide by these Terms, you may not use this Website. Please read the Terms carefully.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  The School reserves the right to make changes to this Website and to modify the Terms at any time at its sole discretion. We encourage you to review these Terms frequently for any modifications. By using this Website, you agree to abide by any such modifications to the Terms, which are binding upon you.
                </p>
              </div>

              {/* Privacy Policy */}
              <div id="privacy-policy" className="scroll-mt-28 space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E85D22] font-extrabold text-lg">II.</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">
                    Privacy Policy
                  </h2>
                </div>
                <div className="w-16 h-1 bg-[#E85D22] rounded-full mb-6" />
                <p className="text-brand-gray text-base leading-relaxed">
                  This Privacy Policy describes the School’s agreement with you regarding how we handle certain information collected on the Website. This Privacy Policy does not address information obtained from other sources, such as submissions by mail, phone, other offline devices, or from personal contact. By accessing the Website and/or providing information to the School on the Website, you consent to the collection, use, and disclosure of certain information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Information Collected */}
              <div id="information-collected" className="scroll-mt-28 space-y-6 pt-4">
                <h3 className="text-xl font-bold text-[#0F2747] border-l-4 border-[#F2C230] pl-4">
                  Information Collected on Our Website
                </h3>
                <p className="text-brand-gray text-base leading-relaxed">
                  If you merely download material or browse through the Website, our servers may automatically collect certain information from you, which may include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-100 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider mb-2">Domain</span>
                    <p className="text-sm text-brand-navy font-semibold">The name of the domain and host from which you access the Internet.</p>
                  </div>
                  <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-100 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider mb-2">Browser</span>
                    <p className="text-sm text-brand-navy font-semibold">The browser software you use and your operating system.</p>
                  </div>
                  <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-100 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#E85D22] uppercase tracking-wider mb-2">Source URL</span>
                    <p className="text-sm text-brand-navy font-semibold">The Internet address of the website from which you linked to this Website.</p>
                  </div>
                </div>
                <p className="text-brand-gray text-base leading-relaxed">
                  The information we automatically collect may be used to improve the Website to make it as useful as possible for our visitors; however, such information will not be linked to the personal information you choose to provide to us.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  We collect and retain personally identifiable information when you choose to voluntarily submit such information. For example, if you choose to fill out a form on the Website, we retain the information submitted by you. You should not submit any information that you do not want to be retained. After we have taken the appropriate action in response to your submission, we retain the information you submitted for our records and to contact you from time to time. Please note that if we decide to change the manner in which we use or retain personal information, we may update this Privacy Policy at our sole discretion.
                </p>
              </div>

              {/* Children's Notice */}
              <div id="childrens-notice" className="scroll-mt-28 pt-4">
                <div className="bg-red-50/70 border-l-4 border-red-500 p-6 rounded-r-2xl space-y-4">
                  <div className="flex items-center gap-3 text-red-700">
                    <AlertTriangle className="w-6 h-6 shrink-0" />
                    <h4 className="font-extrabold text-sm uppercase tracking-wider">
                      Important Notice to Children Under the Age of 13 and Parents
                    </h4>
                  </div>
                  <p className="text-red-900/90 text-sm font-semibold leading-relaxed">
                    IF YOU ARE UNDER THE AGE OF 13 AND WOULD LIKE TO CONTACT US, PLEASE DO SO THROUGH YOUR PARENTS OR LEGAL GUARDIANS. THIS WEBSITE IS ONLY INTENDED FOR ADULTS.
                  </p>
                  <p className="text-red-950/80 text-sm leading-relaxed">
                    The School does not knowingly collect personally identifiable information ("Personal Information") from children under the age of 13. If you are under the age of 13, do not send us any Personal Information, including, without limitation, your email address, name, and/or contact information.
                  </p>
                </div>
              </div>

              {/* Third Parties */}
              <div id="third-parties" className="scroll-mt-28 space-y-4 pt-4">
                <h3 className="text-xl font-bold text-[#0F2747] border-l-4 border-[#F2C230] pl-4">
                  Disclosure of Personal Information to Third Parties
                </h3>
                <p className="text-brand-gray text-base leading-relaxed">
                  The School does not rent or sell personal information that you choose to provide to us. Nor does the School disclose credit card or other personal financial information to third parties, other than as necessary to complete a transaction or as required by law.
                </p>
                <p className="text-brand-gray text-base leading-relaxed">
                  The School engages certain third parties to perform functions and provide services, including, without limitation, hosting and maintenance, customer relationships, database storage and management, payment transactions, and direct marketing campaigns. We will share your personal information with these third parties, but only to the extent necessary to perform these functions and provide these services, and only pursuant to binding contractual obligations requiring such third parties to maintain the privacy and security of your data.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
