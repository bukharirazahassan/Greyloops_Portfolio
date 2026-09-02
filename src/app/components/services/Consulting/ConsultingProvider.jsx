"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ConsultingProvider() {
  return (
    <section className="relative flex min-h-[calc(100dvh-80px)] w-full flex-1 flex-col justify-start overflow-hidden bg-slate-950 text-slate-100">
      {/* Dark Theme Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Circle Radial Glow Shadows at Top and Bottom */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 flex h-full w-full flex-1 flex-col px-6 pt-8 pb-12 sm:px-10 md:px-16 lg:px-24">
        {/* Eyebrow Badge */}
        <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/30 bg-blue-950/50 px-3.5 py-1 text-xs font-semibold text-blue-400 shadow-lg shadow-blue-950/50 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          <span>Consulting Solutions</span>
        </div>

        {/* Top Two-Column Layout */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Left-Aligned Proportional Heading */}
          <div className="lg:col-span-7">
            <h2 className="text-left text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-[1.15]">
              We Provide Expert Consulting Across{" "}
              <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Technology & Software Solutions
              </span>
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="lg:col-span-5">
            <p className="text-left text-base font-normal leading-relaxed text-slate-300 antialiased sm:text-lg lg:text-xl lg:leading-relaxed">
              Our consulting expertise spans technology strategy, business solutions, software development, cloud, data, and digital platforms—helping organizations make informed technology decisions and build scalable solutions aligned with their business goals.
            </p>
          </div>
        </div>

        {/* Center Image Container */}
        <div className="relative mt-8 w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-blue-900/10 lg:mt-10">
          <Image
            src="/images/services/web-consulting-hero.jpg"
            alt="Web Consulting Hero"
            width={1920}
            height={640}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}