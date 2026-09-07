"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";

export default function MobileServicesProvider() {
  const highlights = [
    "Swift & SwiftUI Development",
    "iPhone & iPad Application Development",
    "iOS UI/UX & Design Implementation",
    "API & Third-Party Integration",
    "Testing, Optimization & App Store Deployment",
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col overflow-hidden bg-slate-50 text-slate-900 py-16">
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
        {/* Left Side Column */}
        <div className="relative flex flex-col justify-between px-6 py-4 sm:px-12 md:px-16 lg:col-span-5 lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12">
          <div className="flex flex-col items-start">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>iOS Engineering</span>
            </div>

            {/* Standard 2-Line High-Impact Heading */}
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">Native iOS App</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            {/* Modern Tick Mark List */}
            <ul className="flex flex-col gap-3.5 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 border border-blue-500/20 shadow-sm">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side Content Column (Description + Image) */}
        <div className="relative flex flex-col gap-8 px-6 py-4 sm:px-12 md:px-16 lg:col-span-7 lg:pl-8 lg:pr-16 xl:pr-24">
          {/* Description */}
          <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
            We develop high-quality native iOS applications across the complete product lifecycle—from product discovery and technical architecture to development, quality assurance, deployment, and App Store release. Our team builds reliable iPhone and iPad applications using modern Apple technologies, with a strong focus on performance, usability, security, scalability, and long-term maintainability. Whether you are launching a consumer application or an enterprise mobile solution, Greyloops delivers iOS experiences designed to perform reliably and grow with your business.
          </p>

          {/* Image Matched to Full Width of Description */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-blue-500/5">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/services/native_iOS_app.png"
                alt="Native iOS App Development"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}