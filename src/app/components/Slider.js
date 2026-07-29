"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/home_banner_1.webp",
    heading: [
      { text: "We Create ", accent: false },
      { text: "Value", accent: true },
      { text: " Through Innovative and Reliable ", accent: false },
      { text: "Tech Solutions", accent: true },
    ],
    subtext:
      "We empower businesses with AI, custom software, cloud technologies, and digital transformation services that drive efficiency, accelerate growth, and deliver measurable results.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
  },
  {
    image: "/home_banner_2.webp",
    heading: [
      { text: "Building ", accent: false },
      { text: "Intelligent Software", accent: true },
      { text: " That Drives ", accent: false },
      { text: "Business Growth", accent: true },
    ],
    subtext:
      "We combine Artificial Intelligence, modern engineering, and cloud technologies to create secure, scalable solutions that help businesses innovate faster and stay ahead of the competition.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
  },
];

const AUTOPLAY_MS = 6000;

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  return (
    <section className="relative w-full overflow-hidden bg-white h-[calc(100dvh-4rem)] min-h-[480px]">
      {/* Slide layers — crossfade + slow Ken Burns zoom */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          <div
            className={`absolute inset-0 ${
              index === current ? "animate-kenburns" : ""
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Soft white gradient from the left so text stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 sm:via-white/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent sm:hidden" />
        </div>
      ))}

      {/* Soft floating decorative circles, consistent with the rest of the site */}
      <div className="pointer-events-none absolute left-10 top-16 z-[15] h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute left-52 bottom-24 z-[15] h-56 w-56 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Text content — anchored near the left edge instead of centered,
          so it doesn't leave a large empty gutter on wide screens */}
      <div className="relative z-20 flex h-full items-center pl-6 sm:pl-10 md:pl-16 lg:pl-24 pr-6">
        <div className="max-w-xl">
          {/* Trusted-partner badge with an animated shimmer sweep */}
          <span
            key={`badge-${current}`}
            className="relative mb-5 inline-flex animate-fade-up items-center overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <span className="relative z-10">Trusted Technology Partner</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent animate-shimmer" />
          </span>

          <h1
            key={current}
            className="mb-6 animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {slides[current].heading.map((part, i) => (
              <span
                key={i}
                className={
                  part.accent
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                }
              >
                {part.text}
              </span>
            ))}
          </h1>

          <p
            key={`sub-${current}`}
            className="mb-8 animate-fade-up text-base leading-relaxed text-zinc-600 [animation-delay:100ms] sm:text-lg"
          >
            {slides[current].subtext}
          </p>

          <div key={`cta-${current}`} className="animate-fade-up [animation-delay:200ms]">
            <Link
              href={slides[current].ctaHref}
              className="group relative inline-flex items-center overflow-hidden rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
            >
              <span className="relative z-10">{slides[current].ctaText}</span>
              {/* Continuous auto sheen sweep across the button */}
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination: pill (active) + dots, bottom-left */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 sm:bottom-8 sm:left-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-blue-600"
                : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}