"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  useEffect(() => {
    if (isAdminRoute) return;
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isAdminRoute]);

  useEffect(() => {
    if (!isAdminRoute) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        let attempts = 0;
        
        const interval = setInterval(() => {
          const currentHash = window.location.hash;
          const targetId = currentHash ? currentHash.replace("#", "") : id;
          const isPreloaderActive = document.body.style.overflow === "hidden";
          const el = document.getElementById(targetId);
          
          if (!isPreloaderActive && el) {
            el.scrollIntoView({ behavior: "smooth" });
            clearInterval(interval);
          } else if (attempts > 30) {
            clearInterval(interval);
          }
          attempts++;
        }, 200);

        return () => clearInterval(interval);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, isAdminRoute]);

  return <>{children}</>;
}
