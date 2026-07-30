"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

// Process all categories and split large ones into sub-frames of max 4 items
const rawCategories = [
  ...servicesColumns.map((col) => ({ ...col, categoryType: "Services", basePath: "/services" })),
  ...solutionsColumns.map((col) => ({ ...col, categoryType: "Solutions", basePath: "/solutions" })),
];

const ITEMS_PER_FRAME = 4;

const allFrames = rawCategories.flatMap((col) => {
  const totalSubFrames = Math.ceil(col.links.length / ITEMS_PER_FRAME);

  if (totalSubFrames <= 1) {
    return [{ ...col, frameLinks: col.links, frameSubIndex: null, totalSubFrames: 1 }];
  }

  return Array.from({ length: totalSubFrames }, (_, i) => ({
    ...col,
    frameLinks: col.links.slice(i * ITEMS_PER_FRAME, (i + 1) * ITEMS_PER_FRAME),
    frameSubIndex: i + 1,
    totalSubFrames,
    uniqueKey: `${col.slug}-part-${i + 1}`,
  }));
});

export default function Offerings() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Drives the vertical progress-fill bar directly from scroll position —
  // 0% at the top of the section, 100% by the time you've scrolled through
  // every frame.
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(allFrames.length - 1, Math.floor(latest * allFrames.length));
    setActiveIndex(idx);
  });

  const activeFrame = allFrames[activeIndex];
  const ActiveIcon = activeFrame.icon;
  const formattedIndex = String(activeIndex + 1).padStart(2, "0");
  const totalCount = String(allFrames.length).padStart(2, "0");

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${allFrames.length * 100}vh` }}
    >
      {/* Sticky Screen Viewport Frame */}
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/40 via-indigo-200/30 to-purple-200/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200/50 to-blue-200/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          {/* Main Section Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              What We Offer
            </span>
            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Our <span className="text-blue-600">Offerings</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              From the initial stages of development to QA processes to robust
              IT operations to AI solutions, we offer a broad range of tech
              services and solutions customized to your requirements.
            </p>
          </div>

          {/* Fixed Grid Viewport */}
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* LEFT COLUMN: Fixed Location Text Content Container */}
            <div className="relative flex flex-col justify-center lg:col-span-7">
              {/* Scroll-progress rail — persists across frame changes,
                  fills from 0% to 100% as the user scrolls through the
                  whole section (not tied to the remounting content below) */}
              <div className="absolute bottom-0 left-0 top-0 w-[3px] overflow-visible rounded-full bg-blue-100/70">
                <motion.div
                  className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  style={{ height: barHeight }}
                />
                {/* Traveling glow dot at the current progress position */}
                <motion.div
                  className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_4px_rgba(59,130,246,0.5)]"
                  style={{ top: dotTop }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFrame.uniqueKey || activeFrame.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col pl-6 sm:pl-10"
                >
                  {/* Step counter */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-blue-600">
                      {formattedIndex}/{totalCount}
                    </span>
                    {activeFrame.totalSubFrames > 1 && (
                      <span className="text-xs font-semibold text-zinc-400">
                        Part {activeFrame.frameSubIndex} of {activeFrame.totalSubFrames}
                      </span>
                    )}
                  </div>

                  {/* Title & Icon Header */}
                  <div className="mb-3 flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
                      <ActiveIcon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                      {activeFrame.title}
                    </h3>
                  </div>

                  {/* Category Type Badge */}
                  <span className="mb-5 inline-block w-max rounded-full bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100">
                    {activeFrame.categoryType}
                  </span>

                  {/* Display Grid - Fixed 4 Items Max */}
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    {activeFrame.frameLinks.map((link) => (
                      <Link
                        key={link.slug}
                        href={`${activeFrame.basePath}/${link.slug}`}
                        className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10"
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="mb-1.5 flex items-center justify-between">
                          <h4 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-blue-600">
                            {link.name}
                          </h4>
                          <svg
                            className="h-4 w-4 shrink-0 -translate-x-1 text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm">
                          {link.description || "Details coming soon."}
                        </p>
                      </Link>
                    ))}
                  </div>

                  {/* Category CTA Link */}
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={activeFrame.basePath}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
                    >
                      View all {activeFrame.title.toLowerCase()}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>

                    <span className="text-xs font-semibold text-zinc-400">
                      Scroll for next view ↓
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: Modern compact image frame — matches the real
                3645×5472 (2:3 portrait) image ratio, no border, softer
                rounded corners, and a subtle ambient glow instead */}
            <div className="relative mx-auto w-full max-w-[320px] lg:col-span-5">
              <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-400/25 via-indigo-300/15 to-transparent blur-2xl" />

              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl shadow-blue-900/20">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeFrame.slug}
                    initial={{ opacity: 0, y: "6%", scale: 0.97 }}
                    animate={{ opacity: 1, y: "0%", scale: 1 }}
                    exit={{ opacity: 0, y: "-6%", scale: 0.97 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  >
                    <Image
                      src={`/${activeFrame.slug}.jpg`}
                      alt={activeFrame.title}
                      fill
                      priority
                      sizes="(max-width: 1200px) 60vw, 320px"
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                    <div className="relative z-10">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                        {activeFrame.categoryType}
                      </span>
                      <p className="mt-1 text-xl font-black leading-tight text-white sm:text-2xl">
                        {activeFrame.title}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}