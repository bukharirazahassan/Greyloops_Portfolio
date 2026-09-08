"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import MobileBenefitsSection from "../../../components/services/MobileService/MobileBenefitsSection";
import MobileServicesProvider from "../../../components/services/MobileService/MobileServicesProvider";
import MobileDevelopmentCycle from "../../../components/services/MobileService/Mobiledevelopmentcycle";
import FrequentlyAskedQuestions_Mobile from "../../../components/services/MobileService/FrequentlyAskedQuestions_Mobile";
import CollaborateMobileDevelopment from "../../../components/services/MobileService/CollaborateMobileDevelopment";

export default function MobileDevelopment() {
  const heroServices = [
    "App Consulting & Technology Strategy",
    "Mobile App Integration",
    "Mobile UI/UX Design",
    "App Modernization & Revitalization",
    "Custom Mobile App Development",
    "Mobile App Maintenance & Support",
  ];

  return (
    <div className="relative w-full overflow-x-clip bg-slate-50 font-sans text-slate-900">
      <section className="relative flex w-full flex-col justify-start border-t border-slate-200/80 px-6 py-20 sm:px-12 sm:py-24 md:px-16 lg:py-28 lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12">
        {/* Full-Screen Background Image Container */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Image
            src="/images/services/mobile_app_development.png"
            alt="Mobile App Development Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-right-top"
          />
          {/* Constrained Left Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 via-40% to-transparent lg:w-[65%]" />
        </div>

        {/* Blue Ambient Glow Circles - Clipped inside section boundaries */}
        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] max-w-[100vw] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] max-w-[100vw] rounded-full bg-sky-400/15 blur-[160px]" />

        {/* Ambient Light Dot Matrix Background Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 flex w-full flex-col items-start text-left">
          {/* Left Side Content Overlay */}
          <div className="flex max-w-2xl flex-col items-start text-left xl:max-w-3xl">
            {/* Tag Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Mobile Services</span>
            </div>

            {/* Heading */}
            <h1 className="mb-4 text-left text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
              <span className="text-slate-900">Mobile App </span>
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Development Services
              </span>
            </h1>

            {/* Gradient Underline */}
            <div className="mb-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />

            {/* Description */}
            <p className="mb-8 max-w-2xl text-left text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg lg:text-xl lg:leading-relaxed">
              Ensure the success of your mobile applications with Greyloops’ experienced software engineering team. We combine modern mobile technologies, thoughtful UX, scalable architecture, and proven development practices to build secure, high-performing applications that deliver exceptional user experiences and support long-term business growth.
            </p>

            {/* Modern Tick Mark List */}
            <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {heroServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/10 text-blue-600 shadow-sm backdrop-blur-sm">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <MobileBenefitsSection />
      <MobileServicesProvider />
      <MobileDevelopmentCycle />
      <FrequentlyAskedQuestions_Mobile />
      <CollaborateMobileDevelopment />
    </div>
  );
}