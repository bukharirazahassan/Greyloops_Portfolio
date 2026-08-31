"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Building2,
  Cpu,
  Cloud,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const capabilitiesMap = {
  web: { id: "web", title: "Web Development", icon: Code },
  mobile: { id: "mobile", title: "Mobile App Development", icon: Smartphone },
  enterprise: { id: "enterprise", title: "Enterprise Software", icon: Building2 },
  custom: { id: "custom", title: "Custom Solutions", icon: Cpu },
  cloud: { id: "cloud", title: "Cloud Technologies", icon: Cloud },
  ai: { id: "ai", title: "AI-Powered Solutions", icon: Bot },
};

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
    tab: "TECH SOLUTIONS",
    caption:
      "Scalable websites, web applications, and mobile apps built to deliver seamless digital experiences.",
    activeCapabilities: ["web", "mobile"],
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
    tab: "INTELLIGENT SOFTWARE",
    caption:
      "Tailored software solutions designed to streamline operations and solve complex business challenges.",
    activeCapabilities: ["enterprise", "custom"],
  },
  {
    image: "/home_banner_1.webp",
    heading: [
      { text: "Architecting ", accent: false },
      { text: "Cloud Infrastructure", accent: true },
      { text: " for High-Scale ", accent: false },
      { text: "Performance", accent: true },
    ],
    subtext:
      "Design and deploy resilient, high-availability cloud environments optimized for modern web performance, automated pipelines, and continuous reliability.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
    tab: "CLOUD TECHNOLOGIES",
    caption:
      "Secure, scalable cloud solutions that improve flexibility, performance, and business continuity.",
    activeCapabilities: ["cloud"],
  },
  {
    image: "/home_banner_2.webp",
    heading: [
      { text: "Deploying ", accent: false },
      { text: "AI-Powered Solutions", accent: true },
      { text: " for Next-Gen ", accent: false },
      { text: "Automation", accent: true },
    ],
    subtext:
      "Integrate intelligent machine learning models, natural language processing, and automated decision frameworks directly into your digital platforms.",
    ctaText: "Start a Project",
    ctaHref: "/contact",
    tab: "AI-POWERED SOLUTIONS",
    caption:
      "Intelligent AI-powered solutions that automate processes, enhance decisions, and unlock new business opportunities.",
    activeCapabilities: ["ai"],
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
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const activeIconObjs = (slides[current].activeCapabilities || [])
    .map((id) => capabilitiesMap[id])
    .filter(Boolean);

  return (
    <div className="relative w-full bg-white">
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

        @keyframes iconFade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* 1. Hero Slider Section - Fixed 1920x700 size */}
      <section className="relative mx-auto h-[700px] w-full max-w-[1920px] overflow-hidden bg-white">
        {/* Slide layers */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent sm:hidden" />
          </div>
        ))}

        {/* Text Content Overlay */}
        <div className="relative z-20 flex h-full items-center pl-6 sm:pl-10 md:pl-16 lg:pl-24 pr-6 pb-16">
          <div className="max-w-xl">
            {/* Eyebrow Badge Standardized */}
            <span
              key={`badge-${current}`}
              className="relative mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span className="relative z-10">{slides[current].tab}</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
            </span>

            {/* Main Heading Standardized */}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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

            {/* Subtext Paragraph Standardized */}
            <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {slides[current].subtext}
            </p>

            <div>
              <Link
                href={slides[current].ctaHref}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
              >
                <span>{slides[current].ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bottom Information Section - Modern Equal Height Frames */}
      <section className="relative z-40 w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-blue-50/30 to-white">
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

        <div className="relative mx-auto w-full max-w-[1920px] px-6 py-4 sm:px-10 sm:py-5 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-3.5">
            
            {/* Outside Modern Capability Badges (Left Side) */}
            <div
              key={`outside-icons-${current}`}
              className="flex shrink-0 items-center gap-2.5 animate-[iconFade_400ms_ease-out_forwards]"
            >
              {activeIconObjs.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative flex h-[82px] items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 px-4 shadow-sm shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10"
                  >
                    {/* Modern Gradient Icon Tile */}
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col">
                      {/* Sub-label Standardized */}
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                        Capability
                      </span>
                      <span className="text-xs font-bold text-slate-800 sm:text-sm whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Card (Right Side) */}
            <div
              key={`caption-${current}`}
              className="flex-1 min-w-0 animate-[heroCaption_400ms_ease-out_forwards]"
            >
              <div className="relative flex h-[82px] w-full items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm backdrop-blur-sm transition-all duration-500">
                {/* Reduced Width Animated Progress Fill */}
                <span
                  key={`progress-fill-${current}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-0 bg-gradient-to-r from-blue-50 via-blue-100/80 to-blue-200/60"
                  style={{
                    animation: `heroProgress ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />

                <div className="relative z-10 flex w-full items-center gap-3.5 px-5 py-3 sm:px-6">
                  {/* Index Counter Standardized */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/20">
                    {String(current + 1).padStart(2, "0")}
                  </div>

                  {/* Single-Line Content Container */}
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      {/* Tag Standardized */}
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs shrink-0">
                        {slides[current].tab}
                      </span>
                      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block shrink-0" />
                      {/* Eyebrow Sub-Label Standardized */}
                      <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:block shrink-0">
                        Core Expertise
                      </span>
                    </div>

                    {/* Caption Line Standardized */}
                    <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base truncate">
                      {slides[current].caption}
                    </p>
                  </div>

                  {/* Status Indicator Standardized */}
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
        </div>
      </section>
    </div>
  );
}