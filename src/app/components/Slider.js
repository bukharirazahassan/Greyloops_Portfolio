"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    image: "/home_banner_1.webp",
    heading: [
      { text: "FROM IDEA", accent: false },
      { text: "TO PRODUCT", accent: true },
    ],
    subtext:
      "We turn ideas into scalable digital products through strategy, modern engineering, intuitive design, and quality-driven development—from concept to launch and continuous improvement.",
    caption:
      "From product strategy through engineering, design, and QA — we deliver complete software lifecycles built for long-term reliability.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
    tab: "01 — Full Cycle Software Development",
  },
  {
    image: "/home_banner_2.webp",
    heading: [
      { text: "END-TO-END", accent: false },
      { text: "DEVELOPMENT", accent: true },
    ],
    subtext:
      "We design and build high-performing web, mobile, and enterprise solutions that combine intuitive experiences, modern architecture, seamless integrations, and long-term scalability.",
    caption:
      "High-performing web, mobile, and enterprise solutions built to scale.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
    tab: "02 — We Create Leading Digital Products",
  },
  {
    image: "/home_banner_1.webp",
    heading: [
      { text: "SOFTWARE", accent: false },
      { text: "IT OUTSOURCING", accent: true },
    ],
    subtext:
      "We provide reliable software development teams and flexible delivery models that extend your capabilities, accelerate product delivery, and maintain high standards of quality, security, and performance.",
    caption:
      "Reliable outsourced teams delivering quality, security, and performance.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
    tab: "03 — Only High-Quality Services",
  },
];

const AUTOPLAY_MS = 6000;

// Height of the fixed/static site header in px. Adjust this to match your
// actual nav bar height — everything below relies on it to make the hero +
// bottom bar fit exactly within the first screen on desktop, so the next
// section never peeks into view on load.
const HEADER_HEIGHT_PX = 80;

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  return (
    <div
      className="relative flex w-full flex-col bg-white lg:overflow-hidden"
      style={{
        // On large screens, pin the total height (hero + bottom bar) to
        // exactly fill the viewport below the header. Below lg, let it flow
        // naturally so mobile/tablet content never feels cramped.
      }}
    >
      <div
        className="relative flex w-full flex-col lg:min-h-[560px]"
        style={{ ["--header-h"]: `${HEADER_HEIGHT_PX}px` }}
      >
        <style jsx global>{`
          @keyframes heroProgress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          @keyframes heroCaption {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (min-width: 1024px) {
            .hero-fit-wrap {
              height: calc(100vh - var(--header-h));
            }
          }
        `}</style>

        <div className="hero-fit-wrap flex w-full flex-col">
          {/* 1. Hero Slider Section — fixed vh sizing on mobile/tablet so it
              never feels cramped; on lg it becomes a flex child that grows
              to fill whatever space is left after the bottom bar, so hero +
              bar always sum to exactly one screen. */}
          <section className="relative mx-auto h-[68vh] min-h-[420px] max-h-[620px] w-full max-w-[1920px] overflow-hidden bg-white sm:h-[70vh] sm:max-h-[640px] lg:h-auto lg:min-h-0 lg:max-h-none lg:flex-1">
            {/* Slide Layers */}
            {slides.map((slide, index) => (
              <div
                key={slide.image + index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === current ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={index !== current}
              >
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Soft white readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/65 to-transparent" />

                {/* Mobile bottom readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent sm:hidden" />
              </div>
            ))}

            {/* Text Content Overlay */}
            <div className="relative z-20 flex h-full items-center pl-6 pr-6 pb-10 sm:pl-10 sm:pb-14 md:pl-16 lg:pl-24">
              <div className="max-w-xl">
                {/* Eyebrow Badge */}
                <span
                  key={`badge-${current}`}
                  className="relative mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-sm ring-1 ring-blue-100 sm:mb-5 sm:text-sm"
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />

                  <span className="relative z-10">{slides[current].tab}</span>

                  <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
                </span>

                {/* Main Heading */}
                <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl">
                  {slides[current].heading.map((part, i) => (
                    <span
                      key={i}
                      className={`block ${
                        part.accent
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                          : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                      }`}
                    >
                      {part.text}
                    </span>
                  ))}
                </h1>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-zinc-600 sm:mb-8 sm:text-base lg:text-lg">
                  {slides[current].subtext}
                </p>

                {/* CTA */}
                <div>
                  <Link
                    href={slides[current].ctaHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35 sm:px-6 sm:py-3.5"
                  >
                    <span>{slides[current].ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Bottom Progress / Caption Bar — stays a fixed, compact size
              (lg:shrink-0) so the hero section above absorbs whatever space
              is left, keeping the pair locked to exactly one screen. */}
          <section className="relative z-40 w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-blue-50/30 to-white lg:shrink-0">
            {/* Background Dot Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage:
                  "radial-gradient(ellipse 70% 100% at 50% 50%, black 30%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 100% at 50% 50%, black 30%, transparent 100%)",
              }}
            />

            <div className="relative mx-auto flex w-full max-w-[1920px] items-center px-6 py-4 sm:px-10 sm:py-5 md:px-16 lg:px-24 lg:py-4">
              {/* Progress / Caption Card — constrained width, centered */}
              <div
                key={`caption-${current}`}
                className="mx-auto w-full max-w-3xl animate-[heroCaption_400ms_ease-out_forwards] lg:max-w-4xl xl:max-w-5xl"
              >
                <div className="relative flex h-[76px] w-full items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm backdrop-blur-sm transition-all duration-500 sm:h-[84px]">
                  {/* Animated Progress Fill */}
                  <span
                    key={`progress-fill-${current}`}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 z-0 bg-gradient-to-r from-blue-50 via-blue-100/80 to-blue-200/60"
                    style={{
                      animation: `heroProgress ${AUTOPLAY_MS}ms linear forwards`,
                    }}
                  />

                  <div className="relative z-10 flex w-full items-center gap-3 px-4 py-2.5 sm:gap-3.5 sm:px-5">
                    {/* Index */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white shadow-sm shadow-blue-600/20 sm:h-10 sm:w-10 sm:text-sm">
                      {String(current + 1).padStart(2, "0")}
                    </div>

                    {/* Caption Content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                          {slides[current].tab}
                        </span>
                      </div>

                      <p className="truncate text-xs font-medium leading-6 text-slate-700 sm:text-sm">
                        {slides[current].caption}
                      </p>
                    </div>

                    {/* Active Status */}
                    <div className="hidden shrink-0 items-center gap-2 sm:flex">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                      </span>

                      <span className="text-xs font-semibold text-slate-500">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}