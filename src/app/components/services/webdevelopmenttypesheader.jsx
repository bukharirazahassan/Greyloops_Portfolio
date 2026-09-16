"use client";

import { Sparkles } from "lucide-react";

export default function WebDevelopmentTypesHeader() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-14 text-white lg:py-20 border-t border-slate-800">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[500px] w-[500px] rounded-full bg-sky-500/15 blur-[160px]" />

      {/* Dot Matrix Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Full Width Container */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
        {/* Changed items-center to items-start so both columns align at the top */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 w-full">
          {/* Left Side: Heading (Increased width to col-span-7 so the main title "Types of Custom Web Applications" breaks naturally onto 2 lines instead of 3) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Types of Custom Web Applications
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-[1.15] sm:text-4xl lg:text-5xl">
              <span className="block">Types of Custom Web Applications</span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                We Develop
              </span>
            </h2>
          </div>

          {/* Right Side: Description (Reduced to col-span-5 and added pt-2 to align nicely with the top of the heading text) */}
          <div className="flex flex-col items-start text-left lg:col-span-5 pt-1">
            <p className="w-full text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              As a custom web application development company, we specialize in building diverse web applications tailored to the unique needs of businesses across industries. Our expertise covers different business models, workflows, and functional requirements, allowing us to create scalable digital solutions that improve operational efficiency, enhance user engagement, and support long-term business growth. From customer-facing platforms and e-commerce solutions to enterprise systems, SaaS products, portals, and data-driven applications, we develop web applications designed around specific business objectives and user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}