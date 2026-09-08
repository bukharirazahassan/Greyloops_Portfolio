"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { mobileServicesData } from "@/app/lib/mobileServicesData";

function ServiceSection({ service, isLast }) {
  const sectionRef = useRef(null);

  // Track how far this section has travelled through the viewport.
  // 0  -> section's top edge is at the bottom of the viewport (just entering)
  // 1  -> section's bottom edge is at the top of the viewport (just leaving)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the raw scroll progress so motion feels fluid instead of
  // snapping to the scroll wheel/trackpad.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  // Left column: stays sticky, but drifts gently up/down within its pinned
  // window so it reads as "alive" rather than frozen in place while pinned.
  const leftY = useTransform(smoothProgress, [0, 0.5, 1], [48, 0, -48]);
  const leftOpacity = useTransform(
    smoothProgress,
    [0, 0.08, 0.92, 1],
    [0, 1, 1, 0]
  );

  // Right column (description + image): fades and gently rises in, holds,
  // then fades and gently sinks out as the section is scrolled past.
  const rightOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0]
  );
  const rightY = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [60, 0, 0, -60]
  );
  const rightScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [0.97, 1, 1, 0.97]
  );

  return (
    <section
      ref={sectionRef}
      className={`relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-50 text-slate-900 py-16 ${
        !isLast ? "border-b border-slate-200/80" : ""
      }`}
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

      {/* Main Grid Content Stage */}
      <div className="relative z-10 grid w-full flex-grow items-start lg:grid-cols-12">
        {/* Left Side Column - Sticky + scroll-linked drift */}
        <div className="lg:sticky lg:top-24 relative flex flex-col justify-between px-6 py-4 sm:px-12 md:px-16 lg:col-span-5 lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12">
          <motion.div
            style={{ y: leftY, opacity: leftOpacity }}
            className="flex flex-col items-start will-change-transform"
          >
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>{service.badge}</span>
            </div>

            {/* Standard 2-Line High-Impact Heading */}
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">
                {service.titleLine1}
              </span>
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
        </div>

        {/* Right Side Content Column - Scroll-linked fade/rise */}
        <div className="relative flex flex-col gap-8 px-6 py-4 sm:px-12 md:px-16 lg:col-span-7 lg:pl-8 lg:pr-16 xl:pr-24">
          {/* Description */}
          <motion.p
            style={{ opacity: rightOpacity, y: rightY }}
            className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed will-change-transform"
          >
            {service.description}
          </motion.p>

          {/* Image Matched to Full Width of Description */}
          <motion.div
            style={{ opacity: rightOpacity, y: rightY, scale: rightScale }}
            className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-blue-500/5 will-change-transform"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function MobileServicesProvider() {
  return (
    <div className="w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {mobileServicesData.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          isLast={index === mobileServicesData.length - 1}
        />
      ))}
    </div>
  );
}