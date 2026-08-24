"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const cardRef = useRef(null);
  const isLocked = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse-wheel over the card view switches categories internally.
  // The page's own scroll is only intercepted while there's still another
  // category to move to in that direction — once you're on the first/last
  // category, the wheel event passes straight through and the page scrolls
  // normally, up or down, exactly like anywhere else on the site.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const goingDown = e.deltaY > 0;
      const canGoDown = activeIndex < allFrames.length - 1;
      const canGoUp = activeIndex > 0;

      if ((goingDown && !canGoDown) || (!goingDown && !canGoUp)) {
        // At a boundary — let the page scroll normally.
        return;
      }

      e.preventDefault();
      if (isLocked.current) return;
      isLocked.current = true;

      setActiveIndex((prev) =>
        goingDown
          ? Math.min(allFrames.length - 1, prev + 1)
          : Math.max(0, prev - 1)
      );

      window.setTimeout(() => {
        isLocked.current = false;
      }, 500);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  const activeFrame = allFrames[activeIndex];
  const ActiveIcon = activeFrame.icon;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24">
      <style jsx global>{`
        @keyframes sunSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .offerings-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .offerings-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

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

      {/* Ambient background glows aligned with Slider theme */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Header - Aligned with Slider section theme and typography */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            What We Offer
          </span>
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Our{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Offerings
            </span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            Delivering technical ingenuity and rapid innovation across industries.
          </p>
        </div>

        {/* Card view — wheel events here switch categories; the page's own
            scroll only kicks in once you're at the first or last category */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 gap-6 rounded-[2.5rem] border border-slate-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm lg:grid-cols-12 lg:gap-8 lg:p-8"
        >
          {/* ============ PERSISTENT LEFT TAB BAR — always visible ============ */}
          <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:gap-1.5">
            {allFrames.map((frame, index) => {
              const TabIcon = frame.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={frame.slug}
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="offeringsActiveTab"
                      className="absolute inset-0 rounded-xl bg-white shadow-md shadow-blue-500/10 ring-1 ring-blue-100"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}
                  >
                    <TabIcon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span
                    className={`relative z-10 text-sm font-bold tracking-tight transition-colors ${
                      isActive ? "text-blue-600" : "text-zinc-600 group-hover:text-slate-900"
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
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                      : "bg-white text-zinc-600 ring-1 ring-slate-200"
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
                    <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent sm:text-3xl">
                      {activeFrame.title}
                    </h3>
                  </div>
                </div>

                {/* All services for this category — one grid, no splitting */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {activeFrame.links.map((link) => (
                    <Link
                      key={link.slug}
                      href={`${activeFrame.basePath}/${link.slug}`}
                      className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                          {link.name}
                        </h4>
                        <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-blue-600 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-zinc-600">
                        {link.description || "Details coming soon."}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={activeFrame.basePath}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/35"
                  >
                    <span className="relative z-10">View all {activeFrame.title.toLowerCase()}</span>
                    <ArrowUpRight className="relative z-10 h-4 w-4" />
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ============ RIGHT: modern portrait image frame ============ */}
          <div className="hidden lg:col-span-4 lg:flex lg:items-center lg:justify-center">
            <div className="relative mx-auto w-full max-w-[340px]">
              {/* Soft ambient glow behind the frame */}
              <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-400/20 via-blue-200/10 to-transparent blur-2xl" />

              {/* Slowly drifting light orbs */}
              <motion.div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-300/30 blur-2xl"
                animate={{ x: [0, 12, 0], y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-orange-200/25 blur-2xl"
                animate={{ x: [0, -10, 0], y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl shadow-blue-900/10">
                {/* Subtle animated border glow sweeping around the frame */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, rgba(37,99,235,0.5) 8%, transparent 16%)",
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
                        src={`/${activeFrame.slug}.png`}
                        alt={activeFrame.title}
                        fill
                        priority
                        sizes="340px"
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      {/* Heading in its own frosted glass label */}
                      <div className="absolute inset-x-4 bottom-4 z-10">
                        <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                            {activeFrame.categoryType}
                          </span>
                          <p className="mt-1 text-xl font-extrabold leading-tight tracking-tight text-slate-900">
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
    </section>
  );
}