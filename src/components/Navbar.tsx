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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navStyleActive = isScrolled || !isHome;

  const [isAdminShortcutActive, setIsAdminShortcutActive] = useState(false);
  const { isAdmin } = useEditMode();

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
    { name: "Academics", href: "/#academics" },
    { name: "Campus", href: "/#campus" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact Us", href: "/#contact" },
  ];

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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-brand-yellow ${
                navStyleActive ? "text-brand-gray" : "text-brand-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
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
            
            {/* Tooltip */}
            <div className="absolute top-full right-0 mt-2 whitespace-nowrap bg-gray-900 text-white text-xs py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg hidden md:block">
              Hold Alt (Windows/Linux) or Option (Mac) for Admin Login
            </div>
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-brand-navy font-medium py-2 border-b border-brand-gray/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
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
