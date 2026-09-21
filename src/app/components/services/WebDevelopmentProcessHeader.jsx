"use client";

import { Sparkles } from "lucide-react";

export default function WebDevelopmentProcessHeader() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50 pt-8 pb-2 text-slate-900 lg:pt-12 lg:pb-3">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[300px] w-[300px] rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[350px] w-[350px] rounded-full bg-sky-400/15 blur-[140px]" />

      {/* Dot Matrix Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Full Width Container */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-12 w-full">
          {/* Left Side: Heading */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              From Concept to Launch
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-[1.12] sm:text-4xl lg:text-5xl xl:text-5xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Our Agile Web Application
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <p className="w-full text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
              We follow an iterative development process that keeps business goals, technical decisions, user requirements, and product feedback aligned throughout the project. Each stage builds on the previous one, allowing teams to validate ideas, develop in manageable increments, and refine the application as requirements evolve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}