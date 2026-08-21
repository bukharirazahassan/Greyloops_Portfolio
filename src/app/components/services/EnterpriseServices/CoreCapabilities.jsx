"use client";

import Image from "next/image";
import { Check, Sparkles, Award } from "lucide-react";

const capabilities = [
  "Re-engineering outdated systems into modern, maintainable architecture",
  "Building cloud-native platforms that support large-scale enterprise operations",
  "Integrating ERP, CRM, and third-party systems into unified operational workflows",
  "Embedding multi-layered security frameworks and compliance controls from day one",
  "Delivering AI-powered automation and real-time data visibility across business functions",
  "Providing end-to-end lifecycle support from architecture planning through post-deployment optimization",
];

// Modern Tech Stack Rows with SVG Icons
const row1Tech = [
  {
    name: ".NET Core",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5c-2.5 0-4.5-1-4.5-2.5s2-2.5 4.5-2.5 4.5 1 4.5 2.5-2 2.5-4.5 2.5z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.5 17.5l-6.8-9.8v9.8H9V6.5h2.2l6.8 9.8V6.5h1.7v11h-2.2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C11.5 2 11 4 11 7c0 4.5-3 7-3 10 0 2.5 1.8 5 4 5s4-2.5 4-5c0-3-3-5.5-3-10 0-3-.5-5-1-5z" />
      </svg>
    ),
  },
  {
    name: "SQL Server",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c4.2 0 7 1.3 7 1.5S16.2 8 12 8s-7-1.3-7-1.5S7.8 5 12 5z" />
      </svg>
    ),
  },
];

const row2Tech = [
  {
    name: "MySQL",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.5 3 2 5.2 2 8v8c0 2.8 4.5 5 10 5s10-2.2 10-5V8c0-2.8-4.5-5-10-5z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5V7H5.2S2 6.8 2 12c0 5.2 2.8 5 2.8 5h1.7v-2.4s-.1-2.9 2.9-2.9h5s2.7 0 2.7-2.6V4.6S17.4 2 11.9 2z" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5 8v8l7 4 7-4V8l-7-3.7z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12h8v10l10-10h-8V2z" />
      </svg>
    ),
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/60 py-16 lg:py-20">
      {/* Custom Keyframe Animations for Smooth Infinite Scrolling */}
      <style jsx global>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 25s linear infinite;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 25s linear infinite;
        }
        .animate-marquee-ltr:hover,
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Light Theme Ambient Blue Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content Area */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200/60 backdrop-blur-sm">
              <Award className="h-4 w-4 text-blue-600" />
              <span>ISO-Certified & Deloitte-Recognized</span>
            </div>

            {/* Title / Heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Core Capabilities
              </span>
            </h2>

            {/* Overview text */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We are an ISO-certified, Deloitte-recognized enterprise software
              development company. We have delivered{" "}
              <strong className="font-semibold text-slate-900">
                3,000+ enterprise-grade projects
              </strong>{" "}
              across regulated industries and complex environments.
            </p>

            {/* Modern Feature List with Prominent Large Tick Marks */}
            <div className="mt-6 space-y-3">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md"
                >
                  {/* Large Modern Gradient Tick Icon */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </div>

                  <p className="pt-0.5 text-xs font-medium leading-relaxed text-slate-700 sm:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Dynamic Infinite Moving Tech Rows */}
            <div className="relative mt-8 space-y-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-md">
              {/* Left/Right Edge Gradient Fade Masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />

              {/* Row 1: Left to Right */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-ltr gap-3">
                  {[...row1Tech, ...row1Tech, ...row1Tech].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs ring-1 ring-slate-100 transition-colors hover:border-blue-400 hover:text-blue-600"
                    >
                      <span className="text-blue-600">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-rtl gap-3">
                  {[...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech].map(
                    (tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs ring-1 ring-slate-100 transition-colors hover:border-blue-400 hover:text-blue-600"
                      >
                        <span className="text-blue-600">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Area — Increased Size */}
          <div className="flex justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative w-full max-w-[520px] rounded-2xl border border-slate-200/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-sm lg:max-w-[560px]">
              {/* Outer Decorative Glow Container */}
              <div className="relative aspect-[896/1200] w-full overflow-hidden rounded-xl bg-gradient-to-b from-slate-100 to-slate-50">
                <Image
                  src="/images/services/CoreCapabilities.png"
                  alt="Our Core Capabilities"
                  width={896}
                  height={1200}
                  priority
                  className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Highlight Badge over Image */}
              <div className="absolute bottom-6 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg ring-1 ring-slate-200/80 backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    3,000+ Enterprise Projects
                  </p>
                  <p className="text-[10px] text-slate-500">Delivered Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}