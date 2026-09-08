"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import { mobileServicesData } from "@/app/lib/mobileServicesData";

const HEADER_HEIGHT = 80;

function ServiceSection({ service, index, isLast }) {
  const total = mobileServicesData.length;

  return (
    <section
      className={`sticky w-full bg-slate-50 text-slate-900 ${
        !isLast ? "border-b border-slate-200/80" : ""
      }`}
      style={{
        top: `${HEADER_HEIGHT}px`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        minHeight: "680px",
        zIndex: index + 10,
      }}
    >
      {/* Outer Card Container */}
      <div className="relative mx-auto flex h-full w-full max-w-[1720px] flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_40px_-15px_rgba(15,23,42,0.08)] backdrop-blur-md px-6 py-10 sm:px-10 md:px-14 lg:px-16 lg:py-14 xl:px-20">
        
        {/* Soft Blue Ambient Glow Spots */}
        <div className="pointer-events-none absolute -left-20 -top-20 z-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 z-0 h-[550px] w-[550px] rounded-full bg-sky-400/10 blur-[150px]" />

        {/* Ambient Dot Matrix Background Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        {/* Grid Content Wrapper - Changed items-center to items-start for Top Alignment */}
        <div className="relative z-10 grid w-full flex-grow grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="flex w-full flex-col items-start lg:col-span-5">
            {service.badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                <span>{service.badge}</span>
              </div>
            )}

            <h2 className="mb-8 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              <span className="block text-slate-900">
                {service.titleLine1}
              </span>
              <span className="mt-1 block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                {service.titleLine2}
              </span>
            </h2>

            {service.highlights?.length > 0 && (
              <ul className="flex flex-col gap-4">
                {service.highlights.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/10 text-blue-600 shadow-sm backdrop-blur-sm">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Step Counter */}
            <div className="mt-12 hidden items-baseline gap-2 lg:flex">
              <span className="text-5xl font-black tracking-tight text-slate-900/10 xl:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-bold tracking-wider text-slate-900/10">
                / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="flex w-full flex-col gap-6 lg:col-span-7">
            {/* Description - Set to w-full max-w-none so width matches the image */}
            <p className="w-full max-w-none text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg lg:text-lg lg:leading-relaxed">
              {service.description}
            </p>

            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-[20px] border border-slate-200/80 bg-slate-100 shadow-lg shadow-slate-900/5">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.imageSrc}
                  alt={
                    service.imageAlt ||
                    `${service.titleLine1} ${service.titleLine2}`
                  }
                  fill
                  priority={service.priorityImage || index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 58vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function MobileServicesProvider() {
  return (
    <div className="relative w-full bg-slate-50 font-sans text-slate-900">
      {mobileServicesData.map((service, index) => (
        <ServiceSection
          key={service.id || index}
          service={service}
          index={index}
          isLast={index === mobileServicesData.length - 1}
        />
      ))}
    </div>
  );
}