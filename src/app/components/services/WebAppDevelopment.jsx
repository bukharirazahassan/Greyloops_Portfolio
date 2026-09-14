"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Smooth acceleration/deceleration curve so the reveal doesn't feel linear/mechanical.
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function WebAppDevelopment() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    let target = 0;

    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target =
        scrollable > 0
          ? Math.min(Math.max(-rect.top / scrollable, 0), 1)
          : 0;
    };

    const tick = () => {
      measure();
      // Lerp toward the real scroll position every frame -> buttery glide,
      // no snapping, no dependence on how often `scroll` events fire.
      current += (target - current) * 0.065;
      setProgress(current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const eased = easeInOutCubic(progress);
  const imageTranslateY = (1 - eased) * 100; // 100% (hidden below) -> 0% (fully covers)
  const scrimOpacity = eased; // fades in a soft scrim behind the heading as the image rises

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[260vh] bg-slate-950 border-t border-slate-800"
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col">
        {/* Dark-theme background: centered glow "spotlight" + centered dot grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-blue-600/25 blur-[160px]" />
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(#475569 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
            }}
          />
        </div>

        {/* Heading + short description — stacked, full width, pinned above
            the image, and completely static (no scroll-linked movement) so
            they always stay put in the same spot while scrolling. */}
        <div className="relative z-30 w-full px-6 sm:px-12 lg:px-20 xl:px-28 pt-8 sm:pt-10 lg:pt-12">
          <h1 className="animate-[fadeUp_0.9s_ease-out_0.1s_both] text-left text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Industry-Best{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Web App Development Services
            </span>
          </h1>

          <p className="animate-[fadeUp_0.9s_ease-out_0.3s_both] mt-4 w-full max-w-none text-left text-sm leading-relaxed text-slate-300 sm:text-base">
            As a trusted website app development company, we offer a comprehensive range of web development services. Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that not only meet but exceed your expectations. Our expert team is dedicated to transforming your vision into a dynamic web presence that drives success.
          </p>
        </div>

        {/* Darkening layers so the heading/description stay legible once the image rises beneath them */}
        <div
          className="pointer-events-none absolute inset-0 z-[15] bg-black"
          style={{ opacity: eased * 0.55 }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-96 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent"
          style={{ opacity: scrimOpacity }}
        />

        {/* Rising image — starts hidden below the fold, glides up to cover the section */}
        <div
          className="absolute inset-0 z-10 will-change-transform"
          style={{ transform: `translateY(${imageTranslateY}%)` }}
        >
          <Image
            src="/images/services/web_application_development.png"
            alt="Web Application Development"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}