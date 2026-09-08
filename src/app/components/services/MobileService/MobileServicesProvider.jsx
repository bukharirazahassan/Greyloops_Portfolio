"use client";

import React, { useRef, useMemo } from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { mobileServicesData } from "@/app/lib/mobileServicesData";

// Each card pins a little lower than the one before it, so as you scroll,
// earlier cards stay fixed in place and peek out above the current one —
// the stack physically builds up rather than fading away.
const STACK_OFFSET = 28; // px added per card index

function StackedCard({ service, index, total, isLast, cardRef, containerRef }) {
  // Progress across THIS card's own pinned lifetime, measured against the
  // shared scroll container so every card's timing lines up consistently.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.5,
    restDelta: 0.001,
  });

  // Only the non-last cards shrink slightly as the next one arrives —
  // just enough to sell depth without the "receding into fog" look.
  const scale = useTransform(smoothProgress, [0, 1], [1, isLast ? 1 : 0.96]);
  const topInset = index * STACK_OFFSET;

  return (
    <div ref={cardRef} className="relative" style={{ zIndex: index + 1 }}>
      <motion.section
        style={{ scale, top: topInset }}
        className="sticky flex min-h-screen w-full flex-col overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-50 text-slate-900 py-16 shadow-[0_-8px_40px_-12px_rgba(15,23,42,0.15)] origin-top will-change-transform"
      >
        {/* Blue Ambient Glow Circles */}
        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

        {/* Ambient Light Dot Matrix Background Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        {/* Card Index */}
        <div className="pointer-events-none absolute right-6 top-8 z-20 hidden select-none items-baseline gap-1 sm:right-10 sm:flex md:top-10">
          <span className="text-3xl font-extrabold tracking-tight text-slate-900/10 sm:text-4xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-slate-900/10">
            / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Main Grid Content Stage */}
        <div className="relative z-10 grid w-full flex-grow items-start lg:grid-cols-12">
          {/* Left Side Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col justify-center px-6 py-4 sm:px-12 md:px-16 lg:col-span-5 lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12"
          >
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>{service.badge}</span>
            </div>

            {/* Standard 2-Line High-Impact Heading */}
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">{service.titleLine1}</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                {service.titleLine2}
              </span>
            </h2>

            {/* Modern Tick Mark List */}
            <ul className="flex flex-col gap-3.5 pt-2">
              {service.highlights.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 border border-blue-500/20 shadow-sm backdrop-blur-sm">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative flex flex-col gap-8 px-6 py-4 sm:px-12 md:px-16 lg:col-span-7 lg:pl-8 lg:pr-16 xl:pr-24"
          >
            {/* Description */}
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              {service.description}
            </p>

            {/* Image Matched to Full Width of Description */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-blue-500/5">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  priority={service.priorityImage || false}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default function MobileServicesProvider() {
  const total = mobileServicesData.length;
  const containerRef = useRef(null);

  // Created once, outside of render's own commit cycle, so we never mutate
  // a ref's `.current` while React is actively rendering this list.
  const cardRefs = useMemo(
    () => mobileServicesData.map(() => React.createRef()),
    []
  );

  return (
    <div ref={containerRef} className="relative w-full bg-slate-50 font-sans text-slate-900">
      {mobileServicesData.map((service, index) => (
        <StackedCard
          key={service.id}
          service={service}
          index={index}
          total={total}
          isLast={index === total - 1}
          cardRef={cardRefs[index]}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}