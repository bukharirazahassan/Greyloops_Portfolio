"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

// One frame per category — every service for that category renders together,
// so "Development & QA" (or any 5+ service category) shows as a SINGLE
// heading with all of its services in one grid, never split into "Part 1/2".
const allFrames = [
  ...servicesColumns.map((col) => ({ ...col, categoryType: "Services", basePath: "/services" })),
  ...solutionsColumns.map((col) => ({ ...col, categoryType: "Solutions", basePath: "/solutions" })),
];

export default function Offerings() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(allFrames.length - 1, Math.floor(latest * allFrames.length));
    setActiveIndex(idx);
  });

  // Clicking a tab moves page scroll to the START of that category's pinned
  // segment (not the middle), so the pinned scroll-jack section resumes
  // cleanly from the top of that category rather than partway through it.
  const goToFrame = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const segment = container.offsetHeight / allFrames.length;
    const target = container.offsetTop + segment * index + 2;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const activeFrame = allFrames[activeIndex];
  const ActiveIcon = activeFrame.icon;

  return (
    <section
      ref={containerRef}
      className="offerings-font relative w-full"
      style={{ height: `${allFrames.length * 100}vh` }}
    >
      {/* Shared display font, same pairing as the rest of the site */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .offerings-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .offerings-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
        @keyframes sunSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes sunSpinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .sun-rays {
          animation: sunSpin 40s linear infinite;
        }
        .sun-rays-reverse {
          animation: sunSpinReverse 55s linear infinite;
        }
        .offerings-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .offerings-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Sticky Screen Viewport Frame — full width */}
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          }}
        />

        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/40 via-indigo-200/30 to-purple-200/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200/50 to-blue-200/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm ring-1 ring-blue-100 backdrop-blur-md">
              What We Offer
            </span>
            <h2 className="offerings-display mb-2 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-700 bg-clip-text text-transparent">
                Our{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Offerings
              </span>
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
              From development and QA to IT operations and AI solutions, pick
              a track on the left to explore what we offer.
            </p>
          </div>

          {/* Main layout: persistent tabs | detail content | sun-frame image */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            {/* ============ PERSISTENT LEFT TAB BAR — always visible ============ */}
            <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:gap-1.5">
              {allFrames.map((frame, index) => {
                const TabIcon = frame.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={frame.slug}
                    onClick={() => goToFrame(index)}
                    className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-200"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="offeringsActiveTab"
                        className="absolute inset-0 rounded-xl bg-white shadow-md shadow-blue-900/5 ring-1 ring-blue-100"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-500 group-hover:bg-blue-100"
                      }`}
                    >
                      <TabIcon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span
                      className={`relative z-10 offerings-display text-sm font-bold tracking-tight transition-colors ${
                        isActive ? "text-blue-700" : "text-slate-500 group-hover:text-slate-700"
                      }`}
                    >
                      {frame.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile/tablet fallback: horizontal scroll tab strip */}
            <div className="offerings-no-scrollbar flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {allFrames.map((frame, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={frame.slug}
                    onClick={() => goToFrame(index)}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                        : "bg-white text-slate-500 ring-1 ring-slate-200"
                    }`}
                  >
                    {frame.title}
                  </button>
                );
              })}
            </div>

            {/* ============ DETAIL CONTENT (animates on category change) ============ */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFrame.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm lg:hidden">
                      <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <span className="mb-1 inline-block rounded-full bg-white px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100">
                        {activeFrame.categoryType}
                      </span>
                      <h3 className="offerings-display text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                        {activeFrame.title}
                      </h3>
                    </div>
                  </div>

                  {/* All services for this category — one grid, no splitting */}
                  <div className="offerings-no-scrollbar grid max-h-[46vh] grid-cols-1 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
                    {activeFrame.links.map((link) => (
                      <Link
                        key={link.slug}
                        href={`${activeFrame.basePath}/${link.slug}`}
                        className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                            {link.name}
                          </h4>
                          <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                        </div>
                        <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-slate-500">
                          {link.description || "Details coming soon."}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={activeFrame.basePath}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/35 sm:text-sm"
                    >
                      View all {activeFrame.title.toLowerCase()}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ============ RIGHT: modern portrait image frame ============ */}
            <div className="hidden lg:col-span-4 lg:flex lg:items-center lg:justify-center">
              <div className="relative mx-auto w-full max-w-[340px]">
                {/* Soft ambient glow behind the frame */}
                <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-400/25 via-indigo-300/15 to-transparent blur-2xl" />

                {/* Slowly drifting light orbs — gentle, not gimmicky */}
                <motion.div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-300/40 blur-2xl"
                  animate={{ x: [0, 12, 0], y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-indigo-300/35 blur-2xl"
                  animate={{ x: [0, -10, 0], y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl shadow-blue-900/20">
                  {/* Subtle animated border glow sweeping around the frame */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(96,165,250,0.5) 8%, transparent 16%)",
                      animation: "sunSpin 6s linear infinite",
                    }}
                  />

                  <div className="absolute inset-[3px] overflow-hidden rounded-[calc(2rem-3px)] bg-slate-900">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={activeFrame.slug}
                        initial={{ opacity: 0, y: "6%", scale: 0.97 }}
                        animate={{ opacity: 1, y: "0%", scale: 1 }}
                        exit={{ opacity: 0, y: "-6%", scale: 0.97 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={`/${activeFrame.slug}.jpg`}
                          alt={activeFrame.title}
                          fill
                          priority
                          sizes="340px"
                          className="object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />

                        {/* Dark vignette at the TOP only — image stays clear
                            through the middle and bottom */}
                        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-slate-950/70 to-transparent" />

                        {/* Heading in its own frosted glass label, always legible */}
                        <div className="absolute inset-x-4 bottom-4 z-10">
                          <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                              {activeFrame.categoryType}
                            </span>
                            <p className="offerings-display mt-1 text-xl font-bold leading-tight tracking-tight text-slate-800">
                              {activeFrame.title}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}