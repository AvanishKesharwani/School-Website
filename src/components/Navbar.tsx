"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEditMode } from "@/components/cms/EditModeProvider";
import { getNotifications, NoticeData } from "@/app/actions/notifications";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
  const [isMobileSchoolOpen, setIsMobileSchoolOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navStyleActive = isScrolled || !isHome;

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAdminShortcutActive, setIsAdminShortcutActive] = useState(false);
  const { isAdmin } = useEditMode();

  const [notifications, setNotifications] = useState<NoticeData[]>([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [readNoticeIds, setReadNoticeIds] = useState<string[]>([]);

  const desktopBellRef = useRef<HTMLDivElement>(null);
  const mobileBellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load read notifications from localStorage
    const savedReadIds = localStorage.getItem("mps_read_notices");
    if (savedReadIds) {
      try {
        setReadNoticeIds(JSON.parse(savedReadIds));
      } catch (e) {
        console.error("Error parsing read notices:", e);
      }
    }

    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch (e) {
        console.error("Error fetching notifications:", e);
      }
    };
    fetchNotifications();
  }, []);

  const unreadNotifications = notifications.filter(
    (n) => !readNoticeIds.includes(n.id)
  );
  const hasUnread = unreadNotifications.length > 0;

  const markAllAsRead = () => {
    const allIds = notifications.map((n) => n.id);
    setReadNoticeIds(allIds);
    localStorage.setItem("mps_read_notices", JSON.stringify(allIds));
  };

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

    const handleDocumentClick = (e: MouseEvent) => {
      // Close nav menu dropdowns
      setOpenDropdown(null);

      // Only close notification dropdown if click was outside the bell containers
      const target = e.target as Node;
      const clickedInsideDesktop = desktopBellRef.current?.contains(target);
      const clickedInsideMobile = mobileBellRef.current?.contains(target);

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setIsNotificationsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { 
      name: "School", 
      href: "/#school",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission and Vision", href: "/vision-mission" },
        { name: "Message", href: "/message" },
        { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        { name: "Parents Corner", href: "/parents-corner" },
        { name: "Careers", href: "/careers" }
      ]
    },
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
        { name: "Book List", href: "/book-list" },
        { name: "Transfer Certificate", href: "/transfer-certificate" }
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
            className={`font-bold text-xl md:text-2xl tracking-tight transition-colors whitespace-nowrap ${
              navStyleActive ? "text-brand-navy" : "text-brand-white"
            }`}
          >
            Manka Public School
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }}
                    className={`text-sm font-bold transition-colors hover:text-brand-yellow flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      navStyleActive ? "text-brand-gray" : "text-brand-white/90"
                    }`}
                  >
                    {link.name}
                    <svg className="w-4 h-4 transition-transform duration-250 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 transition-all duration-300 ease-out z-50 ${
                    openDropdown === link.name
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                  } ${
                    link.name === "More" ? "w-[28rem]" : "w-56"
                  }`}>
                    <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2.5 gap-1 text-left ${
                      link.name === "More" ? "grid grid-cols-2 p-3.5" : "flex flex-col"
                    }`}>
                      {link.dropdown.map((subLink) => {
                        const isExternal = subLink.href.startsWith("http");
                        return (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F2747] hover:bg-[#F5FAFF] hover:text-[#E85D22] transition-all duration-200"
                          >
                            {subLink.name}
                          </Link>
                        );
                      })}
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
                className={`text-sm font-bold transition-colors hover:text-brand-yellow whitespace-nowrap py-2 ${
                  navStyleActive ? "text-brand-gray" : "text-brand-white/90"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Desktop Notification Bell */}
          <div ref={desktopBellRef} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsNotificationsOpen(!isNotificationsOpen);
                setOpenDropdown(null);
              }}
              className={`p-2 rounded-full transition-all cursor-pointer relative hover:scale-105 active:scale-95 flex items-center justify-center ${
                navStyleActive
                  ? "text-brand-navy hover:bg-brand-blue/10"
                  : "text-brand-white hover:bg-white/10"
              }`}
              aria-label="Notifications"
            >
              <Bell className="w-5.5 h-5.5" />
              {hasUnread && (
                <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-80 sm:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-4 z-50 text-[#0F2747]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                    <h3 className="font-bold text-base flex items-center gap-2">
                      <Bell className="w-4.5 h-4.5 text-[#E85D22]" />
                      Announcements
                    </h3>
                    {hasUnread && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs font-semibold text-[#E85D22] hover:text-[#d04c13] transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
                    {notifications.length === 0 ? (
                      <div className="text-center py-8 text-gray-400">
                        <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">No notifications yet</p>
                      </div>
                    ) : (
                      notifications.map((notice) => {
                        const isUnread = !readNoticeIds.includes(notice.id);
                        return (
                          <div
                            key={notice.id}
                            className={`p-3.5 rounded-xl border text-left transition-colors ${
                              isUnread
                                ? "bg-[#F5FAFF] border-brand-blue/30"
                                : "bg-white border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-start gap-2 mb-1.5">
                              <h4 className="font-bold text-sm leading-snug">
                                {notice.title}
                              </h4>
                              {isUnread && (
                                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D22] shrink-0 mt-1" />
                              )}
                            </div>
                            <p className="text-xs text-brand-gray leading-relaxed mb-2 whitespace-pre-wrap">
                              {notice.content}
                            </p>
                            <span className="text-[10px] text-gray-400 font-semibold block">
                              {new Date(notice.date).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative group">
            {isAdminShortcutActive ? (
              <a
                href="/admin/signin"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/admin/signin';
                }}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 ${
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
                className={`px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 inline-block ${
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
                className={`px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 inline-block ${
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

        {/* Mobile Actions */}
        <div className="xl:hidden flex items-center gap-2">
          {/* Mobile Notification Bell */}
          <div ref={mobileBellRef} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsNotificationsOpen(!isNotificationsOpen);
              }}
              className={`p-2 rounded-full transition-all cursor-pointer relative hover:scale-105 active:scale-95 flex items-center justify-center ${
                navStyleActive ? "text-brand-navy" : "text-brand-white"
              }`}
              aria-label="Notifications"
            >
              <Bell className="w-5.5 h-5.5" />
              {hasUnread && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-[85vw] max-w-sm bg-white rounded-2xl shadow-xl border border-gray-150 p-4 z-50 text-[#0F2747]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                    <h3 className="font-bold text-sm flex items-center gap-2">
                      <Bell className="w-4 h-4 text-[#E85D22]" />
                      Announcements
                    </h3>
                    {hasUnread && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs font-semibold text-[#E85D22] hover:text-[#d04c13] transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                    {notifications.length === 0 ? (
                      <div className="text-center py-6 text-gray-400">
                        <Bell className="w-7 h-7 mx-auto mb-2 opacity-30" />
                        <p className="text-xs">No notifications yet</p>
                      </div>
                    ) : (
                      notifications.map((notice) => {
                        const isUnread = !readNoticeIds.includes(notice.id);
                        return (
                          <div
                            key={notice.id}
                            className={`p-3 rounded-xl border text-left transition-colors ${
                              isUnread
                                ? "bg-[#F5FAFF] border-brand-blue/30"
                                : "bg-white border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-start gap-2 mb-1">
                              <h4 className="font-bold text-xs leading-snug">
                                {notice.title}
                              </h4>
                              {isUnread && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D22] shrink-0 mt-1" />
                              )}
                            </div>
                            <p className="text-xs text-brand-gray leading-relaxed mb-2 whitespace-pre-wrap">
                              {notice.content}
                            </p>
                            <span className="text-[9px] text-gray-400 font-semibold block">
                              {new Date(notice.date).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={navStyleActive ? "text-brand-navy" : "text-brand-white"} />
            ) : (
              <Menu className={navStyleActive ? "text-brand-navy" : "text-brand-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-brand-white border-t border-brand-gray/10 max-h-[calc(100vh-80px)] overflow-y-auto"
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
                            {link.dropdown.map((subLink) => {
                              const isExternal = subLink.href.startsWith("http");
                              return (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  target={isExternal ? "_blank" : undefined}
                                  rel={isExternal ? "noopener noreferrer" : undefined}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm font-semibold text-brand-gray py-2 hover:text-[#E85D22] transition-colors"
                                >
                                  {subLink.name}
                                </Link>
                              );
                            })}
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
