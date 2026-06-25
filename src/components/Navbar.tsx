"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEditMode } from "@/components/cms/EditModeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
  const [isMobileSchoolOpen, setIsMobileSchoolOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navStyleActive = isScrolled || !isHome;

  const [isAdminShortcutActive, setIsAdminShortcutActive] = useState(false);
  const { isAdmin } = useEditMode();

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileAcademicsOpen(false);
      setIsMobileSchoolOpen(false);
      setIsMobileMoreOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) setIsAdminShortcutActive(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.altKey) setIsAdminShortcutActive(false);
    };
    const handleBlur = () => setIsAdminShortcutActive(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { 
      name: "Academics", 
      href: "/#academics",
      dropdown: [
        { name: "Pre Primary", href: "/academics/pre-primary" },
        { name: "Primary", href: "/academics/primary" },
        { name: "Middle School", href: "/academics/middle-school" },
        { name: "Secondary", href: "/academics/secondary" },
        { name: "Senior Secondary", href: "/academics/senior-secondary" }
      ]
    },
    { 
      name: "School", 
      href: "/#school",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission and Vision", href: "/vision-mission" },
        { name: "Message", href: "/message" },
        { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        { name: "Parents Corner", href: "/parents-corner" }
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact Us", href: "/#contact" },
    {
      name: "More",
      dropdown: [
        { name: "Teachers", href: "/teachers" },
        { name: "Library", href: "/library" },
        { name: "Science Lab", href: "/science-lab" },
        { name: "Transport", href: "/transport" },
        { name: "Sports", href: "/sports" },
        { name: "Medical Facility", href: "/medical-facility" },
        { name: "School Rules", href: "/school-rules" },
        { name: "Beyond Academics", href: "/beyond-academics" },
        { name: "Book List", href: "/book-list" }
      ]
    }
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navStyleActive
          ? "bg-brand-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
           <img src="/logo.png" alt="Manka Public School Logo" className="h-12 w-auto" />
          <span
            className={`font-bold text-xl md:text-2xl tracking-tight transition-colors ${
              navStyleActive ? "text-brand-navy" : "text-brand-white"
            }`}
          >
            Manka Public School
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group py-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={`font-medium transition-colors hover:text-brand-yellow flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      navStyleActive ? "text-brand-gray" : "text-brand-white/90"
                    }`}
                  >
                    {link.name}
                    <svg className="w-4 h-4 transition-transform duration-250 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 ${
                    link.name === "More" ? "w-[28rem]" : "w-56"
                  }`}>
                    <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2.5 gap-1 text-left ${
                      link.name === "More" ? "grid grid-cols-2 p-3.5" : "flex flex-col"
                    }`}>
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F2747] hover:bg-[#F5FAFF] hover:text-[#E85D22] transition-all duration-200"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`font-medium transition-colors hover:text-brand-yellow whitespace-nowrap py-2 ${
                  navStyleActive ? "text-brand-gray" : "text-brand-white/90"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="relative group">
            {isAdminShortcutActive ? (
              <a
                href="/admin/signin"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/admin/signin';
                }}
                className={`px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 ${
                  navStyleActive
                    ? "bg-[#E85D22] text-[#0F2747] shadow-lg shadow-[#E85D22]/20"
                    : "bg-[#E85D22] text-[#0F2747] shadow-lg shadow-[#E85D22]/20"
                }`}
              >
                <span>Admin Login</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F2747] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F2747]"></span>
                </span>
              </a>
            ) : isAdmin ? (
              <a
                href="/admin"
                className={`px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 inline-block ${
                  navStyleActive
                    ? "bg-[#E85D22] text-[#0F2747]"
                    : "bg-[#E85D22] text-[#0F2747] shadow-lg"
                }`}
              >
                Admin Portal
              </a>
            ) : (
              <a
                href="https://manka.nexterp.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 inline-block ${
                  navStyleActive
                    ? "bg-brand-navy text-brand-white"
                    : "bg-brand-white/20 text-brand-white backdrop-blur-sm border border-brand-white/30"
                }`}
              >
                Login
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={navStyleActive ? "text-brand-navy" : "text-brand-white"} />
          ) : (
            <Menu className={navStyleActive ? "text-brand-navy" : "text-brand-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-white border-t border-brand-gray/10"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isDropdownOpen = 
                    link.name === "Academics" ? isMobileAcademicsOpen :
                    link.name === "School" ? isMobileSchoolOpen :
                    isMobileMoreOpen;
                  const toggleDropdown = () => {
                    if (link.name === "Academics") {
                      setIsMobileAcademicsOpen(!isMobileAcademicsOpen);
                    } else if (link.name === "School") {
                      setIsMobileSchoolOpen(!isMobileSchoolOpen);
                    } else {
                      setIsMobileMoreOpen(!isMobileMoreOpen);
                    }
                  };
                  return (
                    <div key={link.name} className="border-b border-brand-gray/10 py-1">
                      <button
                        onClick={toggleDropdown}
                        className="w-full text-left text-brand-navy font-medium py-2 flex justify-between items-center cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <svg className={`w-4 h-4 transition-transform duration-250 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-2 pb-3 pt-1"
                          >
                            {link.dropdown.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-semibold text-brand-gray py-2 hover:text-[#E85D22] transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-brand-navy font-medium py-2 border-b border-brand-gray/10"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleAnchorClick(e, link.href);
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {isAdminShortcutActive ? (
                <a 
                  href="/admin/signin" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/admin/signin';
                  }}
                  className="bg-brand-yellow text-brand-navy font-semibold px-6 py-3 rounded-lg mt-2 text-center flex items-center justify-center gap-2"
                >
                  <span>Admin Login</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-navy opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-navy"></span>
                  </span>
                </a>
              ) : isAdmin ? (
                <a href="/admin" className="bg-[#E85D22] text-[#0F2747] font-semibold px-6 py-3 rounded-lg mt-2 text-center">
                  Admin Portal
                </a>
              ) : (
                <a href="https://manka.nexterp.in/" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-brand-white font-semibold px-6 py-3 rounded-lg mt-2 text-center">
                  Login
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
