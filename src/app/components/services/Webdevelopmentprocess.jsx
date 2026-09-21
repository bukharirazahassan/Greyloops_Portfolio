"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import WebDevelopmentProcessHeader from "@/app/components/services/WebDevelopmentProcessHeader";
import { steps, VH_PER_STEP } from "@/app/lib/Webdevelopmentprocess";

/**
 * Sora, self-hosted via next/font/google — resolved and downloaded at
 * build time, bundled with the app, and served from your own domain.
 * No runtime request to fonts.googleapis.com, no @import, no layout
 * shift. Used for headings only (see `sora.className` below); body
 * text stays on Tailwind's default system sans stack.
 */
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentProcess() {
  const scrollAreaRef = useRef(null);
  const cardRefs = useRef([]);
  const rafRef = useRef(null);
  const [isDesktopHeight, setIsDesktopHeight] = useState(false);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    function syncDesktopFlag() {
      setIsDesktopHeight(mq.matches);
    }

    function applyFrame() {
      const el = scrollAreaRef.current;
      if (!el || !mq.matches) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const segments = steps.length - 1;
      const segmentSize = total / segments;

      for (let i = 1; i < steps.length; i += 1) {
        const card = cardRefs.current[i];
        if (!card) continue;

        const segStart = (i - 1) * segmentSize;
        const raw = (scrolled - segStart) / segmentSize;
        const progress = Math.min(Math.max(raw, 0), 1);

        const translateY = (1 - progress) * 100;
        const scale = 0.94 + 0.06 * progress;
        card.style.transform = `translateY(${translateY}%) scale(${scale})`;
      }
    }

    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        applyFrame();
      });
    }

    syncDesktopFlag();
    applyFrame();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      syncDesktopFlag();
      applyFrame();
    });
    mq.addEventListener("change", syncDesktopFlag);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyFrame);
      mq.removeEventListener("change", syncDesktopFlag);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full bg-slate-50 text-slate-900">
      <WebDevelopmentProcessHeader />
      <section className="relative w-full bg-slate-50 pb-16 pt-1 px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24 text-slate-900">
        {/* Ambient background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute right-0 top-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-100/50 blur-[160px]" />
          <div className="absolute right-[8%] top-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-sky-100/50 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
              maskImage:
                "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            }}
          />
        </div>

        {/* Changed from max-w-[1700px] mx-auto to w-full so alignment mirrors the header above */}
        <div className="relative z-10 w-full">
          {/* Tall scroll area (desktop only) that drives the sticky pin + scrub */}
          <div
            ref={scrollAreaRef}
            style={
              isDesktopHeight
                ? { minHeight: `${steps.length * VH_PER_STEP}vh` }
                : undefined
            }
          >
            <div className="lg:sticky lg:top-20 lg:flex lg:h-[calc(100vh-5rem)] lg:items-center lg:justify-center">
              {/* Desktop: large stacked cards, continuously scrubbed */}
              <div className="relative hidden w-full overflow-hidden rounded-[2.25rem] p-4 lg:block lg:h-[80vh]">
                {steps.map((step, index) => {
                  return (
                    <div
                      key={step.title}
                      ref={(el) => setCardRef(el, index)}
                      style={{
                        zIndex: index + 1,
                        transform:
                          index === 0
                            ? "translateY(0%) scale(1)"
                            : "translateY(100%) scale(0.94)",
                        willChange: "transform",
                      }}
                      className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.25rem] bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 sm:flex-row"
                    >
                      {/* text side */}
                      <div className="flex flex-1 flex-col justify-center p-12 lg:p-20">
                        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/80 bg-white px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wide text-blue-700 shadow-xs">
                          Step {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`${sora.className} mb-5 text-2xl font-extrabold tracking-tight leading-snug text-slate-900 lg:text-3xl xl:text-4xl`}
                        >
                          {step.title}
                        </h3>
                        <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>

                      {/* image side */}
                      <div className="relative h-56 w-full shrink-0 bg-slate-100 sm:h-auto sm:w-[46%]">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 46vw, 100vw"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile / tablet: plain stacked list */}
              <div className="flex w-full flex-col gap-4 lg:hidden">
                {steps.map((step, index) => {
                  return (
                    <div
                      key={step.title}
                      className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
                    >
                      <div className="relative h-48 w-full bg-slate-100">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                      <div className="p-7">
                        <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/80 bg-white px-3 py-1 font-mono text-xs font-semibold tracking-wide text-blue-700 shadow-xs">
                          Step {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`${sora.className} mb-2 text-lg font-extrabold tracking-tight leading-snug text-slate-900`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}