"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import MobileBenefitsSection from "../../../components/services/MobileService/MobileBenefitsSection";
import MobileServicesProvider from "../../../components/services/MobileService/MobileServicesProvider";

export default function MobileDevelopment() {
  return (
    <div className="w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center border-t border-slate-200/80 px-6 py-12 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">
        {/* Full-Screen Background Image with Clear Right Side */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/services/mobile_app_development.png"
            alt="Mobile App Development Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft Left-to-Right Fade for High Contrast Text & Full Image Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 via-45% to-transparent" />
        </div>

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

        <div className="relative z-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12 w-full max-w-7xl mx-auto my-auto">
          {/* Left Side Content Overlay */}
          <div className="lg:col-span-8 flex flex-col justify-center items-start text-left">
            {/* Tag Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Mobile Services</span>
            </div>

            {/* Single Line Heading */}
            <h1 className="text-left text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl whitespace-nowrap mb-4">
              <span className="text-slate-900">Mobile App </span>
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Development Services
              </span>
            </h1>

            {/* Underline under Heading */}
            <div className="mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />

            {/* Full Updated Description Displayed */}
            <p className="text-left text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg lg:text-xl lg:leading-relaxed max-w-2xl">
              Ensure the success of your mobile applications with Greyloops’ experienced software engineering team. We combine modern mobile technologies, thoughtful UX, scalable architecture, and proven development practices to build secure, high-performing applications that deliver exceptional user experiences and support long-term business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Imported Mobile Benefits Component Section */}
      <MobileBenefitsSection />

      {/* Imported Mobile Services Provider Component Section */}
      <MobileServicesProvider />
    </div>
  );
}