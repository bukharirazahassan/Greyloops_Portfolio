// src/app/components/SmoothScroll.jsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Smooth, inertial page scrolling (the "glide then slowly stop" feel).
 * Mount it ONCE – ideally in app/layout.js so it covers every page.
 *
 * lerp: how quickly the page catches up with the wheel.
 *   0.05 = very long, floaty glide   0.08 = smooth (default here)   0.12 = snappier
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Respect users who ask the OS for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}