"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function MobileTech() {
  const techGroups = [
    {
      title: "iOS Development",
      topClass: "top-24 sm:top-28",
      zIndex: "z-10",
      items: [
        {
          name: "Swift",
          description: "High-performance native iOS language",
          icon: "/images/services/tech_icons/swift.svg",
        },
      ],
    },
    {
      title: "Android Ecosystem",
      topClass: "top-32 sm:top-36",
      zIndex: "z-20",
      items: [
        {
          name: "Kotlin",
          description: "Modern preferred language for Android",
          icon: "/images/services/tech_icons/Kotlin_Icon-480x480.webp",
        },
        {
          name: "Java",
          description: "Robust enterprise Android foundation",
          icon: "/images/services/tech_icons/java_mobile.webp",
        },
      ],
    },
    {
      title: "Cross-Platform",
      topClass: "top-40 sm:top-44",
      zIndex: "z-30",
      items: [
        {
          name: "React Native",
          description: "Cross-platform native mobile applications",
          icon: "/images/services/tech_icons/react-native_thumb-300x300.png",
        },
        {
          name: "Flutter",
          description: "Google's UI toolkit for multiplatform apps",
          icon: "/images/services/tech_icons/flutter-480x480.png",
        },
      ],
    },
    {
      title: "Backend & Cloud",
      topClass: "top-48 sm:top-52",
      zIndex: "z-40",
      items: [
        {
          name: "AWS",
          description: "Scalable cloud infrastructure & services",
          icon: "/images/services/tech_icons/Amazon_Web_Services_Logo.svg-480x287.webp",
        },
        {
          name: "Node.js",
          description: "Scalable backend JavaScript runtime",
          icon: "/images/services/tech_icons/Node.js_logo.svg-480x294.webp",
        },
      ],
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20 text-slate-100 sm:py-24 lg:py-28">
      {/* Background Glows & Pattern */}
      <div className="pointer-events-none absolute left-0 top-1/4 z-0 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 z-0 h-[400px] w-[400px] rounded-full bg-sky-500/15 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
          backgroundSize: `28px 28px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        {/* Header split layout: Heading on left, Description on right */}
        <div className="mb-16 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span>Modern Tech Stack</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.12]">
              <span className="block text-white">Technologies</span>
              <span className="block bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Powering
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 lg:pt-2 flex flex-col gap-4">
            <p className="text-sm font-normal leading-relaxed text-slate-400 antialiased sm:text-base lg:text-lg">
              We combine modern frameworks, programming languages, cloud platforms, and proven tools to build high-performance mobile applications. Our technology choices are tailored to each product’s business goals, technical requirements, and scalability needs.
            </p>
            <p className="text-sm font-normal leading-relaxed text-slate-400 antialiased sm:text-base lg:text-lg">
              We use modern Android technologies to deliver responsive and reliable experiences across devices. Our solutions integrate seamlessly with APIs, databases, cloud platforms, and enterprise systems. Security is considered throughout development, from authentication and data protection to deployment.
            </p>
            <p className="text-sm font-normal leading-relaxed text-slate-400 antialiased sm:text-base lg:text-lg">
              Scalable architectures make applications easier to maintain, enhance, and expand over time. We also leverage AI, analytics, and cloud capabilities to create future-ready mobile solutions.
            </p>
          </div>
        </div>

        <div className="mb-12 h-px w-full bg-slate-800/80" />

        {/* Tech Groups - Compact Stacking Stair Step Layout with fixed heights */}
        <div className="relative flex w-full flex-col gap-6 pb-24">
          {techGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className={`sticky ${group.topClass} ${group.zIndex} box-border flex flex-col w-full rounded-3xl border border-slate-800 bg-slate-900/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40`}
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 sm:text-base">
                  {group.title}
                </h3>
                <span className="rounded-full border border-slate-800 bg-slate-950 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                  {group.items.length} {group.items.length === 1 ? "Tech" : "Techs"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group/card relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-950 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100" />

                    {/* Left Side: Icon */}
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-slate-900/90 p-3 border border-slate-800 transition-all duration-300 group-hover/card:scale-105 group-hover/card:border-blue-500/40 group-hover/card:bg-slate-800/90 shadow-md">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain filter drop-shadow-md"
                        loading="lazy"
                      />
                    </div>

                    {/* Right Side: Name & Description */}
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className="text-base font-bold text-slate-100 transition-colors duration-300 group-hover/card:text-blue-400 mb-0.5 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-normal leading-relaxed text-slate-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}