"use client";

import { Sparkles } from "lucide-react";

export default function StrategicTechnologyConsulting() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 px-4 text-slate-900 sm:px-8 md:px-12">
      {/* Light Theme Seamless Dot Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #64748b 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Light Theme Background Circle Shader Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[350px] w-[350px] rounded-full bg-blue-300/30 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-[110px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[350px] w-[350px] rounded-full bg-indigo-300/30 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />

      {/* Main Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>Strategic Technology Consulting</span>
        </div>

        {/* Welcome Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.15]">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Strategic Technology Consulting
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base md:text-lg lg:text-xl">
          Empowering your organization with tailored technology strategies, actionable insights, and scalable engineering solutions.
        </p>
      </div>
    </section>
  );
}