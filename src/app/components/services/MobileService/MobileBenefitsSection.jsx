"use client";

import React from "react";
import Image from "next/image";
import {
  Laptop,
  Wifi,
  Dices,
  Share2,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function MobileBenefitsSection() {
  const leftBenefits = [
    {
      icon: Laptop,
      title: "Software as a Service",
      description:
        "51% of smartphone users have discovered a new company or product.",
    },
    {
      icon: Wifi,
      title: "Internet of Things",
      description:
        "Move your SaaS products to mobile. Companies with a professional mobile app thrive.",
    },
    {
      icon: Dices,
      title: "Gambling & Betting",
      description:
        "Develop a custom mobile app to thrive in a mobile market worth over $100B.",
    },
  ];

  const rightBenefits = [
    {
      icon: Share2,
      title: "Social Media",
      description:
        "80% of time users spend in social media from their mobile devices.",
    },
    {
      icon: Briefcase,
      title: "Business Management",
      description:
        "65% of sales representatives have achieved their quotas by adopting mobile.",
    },
    {
      icon: TrendingUp,
      title: "Trading Systems",
      description:
        "We provide top-tier mobile app development services for brokers.",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24 font-sans text-slate-900 overflow-hidden">
      {/* Wave Dot Matrix Pattern Matching Reference Image */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 h-[600px] w-[600px] opacity-35"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1.5px, transparent 1.5px)`,
          backgroundSize: `20px 20px`,
          maskImage: `radial-gradient(ellipse at left, black 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse at left, black 40%, transparent 80%)`,
        }}
      />

      {/* Ambient Blue Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Business Benefits
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Mobile Apps{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
        </div>

        {/* 3-Column Layout without Heavy Cards */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Left Side Items */}
          <div className="flex flex-col gap-12 lg:col-span-4 lg:items-end lg:text-right">
            {leftBenefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-5 lg:flex-row-reverse lg:items-start"
                >
                  {/* Clean Icon Badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column - Watch Device Image */}
          <div className="flex justify-center lg:col-span-4">
            <div className="relative h-[460px] w-full max-w-[360px] sm:h-[540px]">
              <Image
                src="/images/services/watch.png"
                alt="Mobile App Preview Watch"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain object-center drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex flex-col gap-12 lg:col-span-4 lg:items-start lg:text-left">
            {rightBenefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-5 lg:flex-row lg:items-start"
                >
                  {/* Clean Icon Badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}