"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CollaborateMobileDevelopment() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-24">
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

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24">
        {/* Hero Card Container with Background Image Overlay */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-blue-500/10 lg:grid lg:grid-cols-12 lg:items-center">
          {/* Subtle Ambient Dot Matrix Inside Card */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: `16px 16px`,
            }}
          />

          {/* Left Column: Text Content & Action Button */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:col-span-7 lg:p-16 xl:p-20">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>START YOUR JOURNEY</span>
            </div>

            {/* High Impact Heading */}
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">Let’s Collaborate!</span>
            </h2>

            {/* Description */}
            <p className="mb-8 text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              Ready to turn your mobile app idea into a scalable digital product? Let’s discuss your goals, requirements, and the right technology approach for your business.
            </p>

            {/* Standard Blue Primary CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowRight className="h-5 w-5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image Context */}
          <div className="relative h-72 w-full lg:col-span-5 lg:h-full lg:min-h-[440px]">
            <Image
              src="/images/services/FAQs-mobile-development.png"
              alt="Let's Collaborate Mobile Development"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient Blend on Left Edge for Large Screens */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}