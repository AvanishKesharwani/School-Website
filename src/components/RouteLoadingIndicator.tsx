"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Reset loading state whenever the path changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  // Intercept click events on links to show loading state
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Ignore modifier clicks (cmd/ctrl/shift/alt)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore links with download attribute
      if (anchor.hasAttribute("download")) return;

      // Ignore links with target="_blank"
      if (anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore mailto, tel, javascript: etc.
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("sms:")
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.href);

        // Only handle internal links (same origin)
        if (targetUrl.origin !== currentUrl.origin) return;

        // Ignore hash changes on the same path
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          targetUrl.hash !== currentUrl.hash
        ) {
          return;
        }

        // Ignore if it's the exact same page, search, and hash
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          targetUrl.hash === currentUrl.hash
        ) {
          return;
        }

        // Show loading indicator
        setIsLoading(true);
      } catch (err) {
        // If URL parsing fails, ignore
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname]);

  // Automatically clear loading state after 8 seconds (safety timeout)
  useEffect(() => {
    if (!isLoading) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-[9999] pointer-events-none"
        >
          <div className="bg-[#0F2747]/95 backdrop-blur-md text-white px-5 py-3.5 rounded-full flex items-center gap-3 shadow-[0_12px_40px_rgba(15,39,71,0.4)] border border-[#E85D22]/40">
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#E85D22] opacity-75 animate-ping"></span>
              {/* Inner spinner */}
              <div className="w-4 h-4 rounded-full border-2 border-[#E85D22] border-t-transparent animate-spin relative z-10" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-white/95 whitespace-nowrap">
              Processing Command...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
