"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Global session tracking so it only triggers on full page reload
let isFirstMount = true;

export default function Preloader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Run progress counter on mount if it's the first mount and on the homepage
  useEffect(() => {
    if (pathname !== "/" || !isFirstMount) {
      setIsVisible(false);
      return;
    }

    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    // Increment progress counter
    const duration = 2200; // ~2.2 seconds total progress time
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(
        Math.floor((currentStep / steps) * 100),
        100
      );

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        // Show "WELCOME" and wait a bit before starting reveal transition
        setTimeout(() => {
          setShowWelcome(true);
          setTimeout(() => {
            setIsAnimatingOut(true);
            // Re-enable body scroll
            document.body.style.overflow = "";
            // Mark preloader as finished for client-side navigation
            isFirstMount = false;
            // Unmount preloader after exit animation finishes
            setTimeout(() => {
              setIsVisible(false);
            }, 1200); // matches transition duration
          }, 900); // Time to display "WELCOME"
        }, 100);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (pathname !== "/" || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isAnimatingOut && (
        <motion.div
          key="preloader-overlay"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.1 }}
          className="fixed inset-0 bg-[#0F2747] z-[99999] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Background Outlined Texts */}
          <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-20 select-none overflow-hidden py-10 z-0">
            <div
              className="whitespace-nowrap font-black tracking-[0.2em] text-[6vw] leading-none text-transparent uppercase select-none align-middle"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
              }}
            >
              MANKA PUBLIC SCHOOL
            </div>
            <div
              className="whitespace-nowrap font-black tracking-[0.25em] text-[6vw] leading-none text-transparent uppercase text-right select-none align-middle"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
              }}
            >
              INSPIRING EXCELLENCE
            </div>
            <div
              className="whitespace-nowrap font-black tracking-[0.2em] text-[6vw] leading-none text-transparent uppercase select-none align-middle"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
              }}
            >
              BUILDING FUTURES
            </div>
          </div>

          {/* Central Logo and Loading Pill Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-10 z-10"
          >
            {/* Logo Tile */}
            <div className="w-36 h-36 md:w-44 md:h-44 bg-white p-5 md:p-6 rounded-[2.5rem] shadow-2xl flex items-center justify-center border-2 border-white/20 relative group overflow-hidden">
              {/* Inner glowing hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/logo.png"
                alt="Manka Public School Logo"
                className="w-full h-full object-contain filter drop-shadow-md relative z-10"
              />
            </div>

            {/* Custom Loading Progress Pill */}
            <div className="relative">
              <div className="bg-[#06101E]/90 backdrop-blur-md px-10 py-3.5 rounded-full border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] min-w-[240px] md:min-w-[300px] flex items-center justify-center h-14 overflow-hidden relative">
                {/* Horizontal Progress Fill Line inside the pill */}
                <div
                  className="absolute left-0 bottom-0 top-0 bg-gradient-to-r from-[#E85D22]/20 to-[#F1B221]/20 transition-all duration-300 ease-out z-0"
                  style={{ width: `${progress}%` }}
                />

                {/* Animated Inner Shadow Glow */}
                <div className="absolute inset-0 rounded-full border border-[#E85D22]/10 pointer-events-none" />

                {/* Text Indicator */}
                <span className="text-white text-sm md:text-base font-bold tracking-[0.25em] md:tracking-[0.35em] uppercase relative z-10 flex items-center justify-center text-center">
                  {showWelcome ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-[#F1B221] drop-shadow-[0_0_8px_rgba(241,178,33,0.3)] pl-[0.25em] md:pl-[0.35em]"
                    >
                      WELCOME
                    </motion.span>
                  ) : (
                    <span>LOADING {progress}%</span>
                  )}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
