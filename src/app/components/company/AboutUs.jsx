//src/app/components/company/AboutUs.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Play } from "lucide-react";
import WhatWeDo from "../../components/WhatWeDo";
import LeadershipTeam from "../../components/LeadershipTeam";
import TalentOnDemand from "../../components/TalentOnDemand";

const featureCards = [
  {
    title: "Our Mission",
    image: "/Agencies.jpg",
    href: "#",
    stagger: false,
  },
  {
    title: "Our Vision",
    image: "/company-vision.jpg",
    href: "#",
    stagger: true,
  },
  {
    title: "Our Philosophy",
    image: "/company-philosophy.jpg",
    href: "#",
    stagger: false,
  },
  {
    title: "Our Strategy",
    image: "/company-strategy.jpg",
    href: "#",
    stagger: true,
  },
];

export default function AboutUs() {
  return (
    <div className="w-full">
      {/* ================= HERO HEADER SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        {/* Dot-grid texture (dark variant) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Orbit ring textures */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full border border-white/10" />

        {/* Static Background Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-12 h-64 w-64 rounded-full bg-indigo-600/20 blur-2xl" />

        {/* Hero Text Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Software Innovation Partner
            </span>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Passion & Precision
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
              As a premier Software Innovation Partner, Greyloops stands
              alongside world-leading businesses, ambitious tech pioneers, and
              high-growth SMEs to deliver cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-16 sm:py-28">
        {/* Dot-grid texture, consistent with the rest of the site */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          }}
        />

        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-6 lg:col-span-5">
              {/* Badge — matches the pill style used across every other section */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                What We Offer
              </span>

              {/* Main Headline */}
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Your Partner for{" "}
                <span className="text-blue-600">Software Innovation</span>
              </h2>

              {/* Paragraph 1 */}
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                Greyloops is the partner of choice for many of the world&rsquo;s
                leading enterprises, SMEs and technology challengers. We help
                businesses elevate their value through custom software
                development, product design, QA and consultancy services.
              </p>

              {/* Paragraph 2 - Highlight card, matches site's card language */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <p className="text-base font-semibold leading-relaxed text-zinc-900 sm:text-lg">
                  We help maintain and modernize your IT infrastructure and
                  solve various infrastructure-specific issues a business may
                  face.
                </p>
              </div>

              {/* Video Showcase */}
              <div className="pt-4">
                <div className="flex items-center gap-5">
                  <Link
                    href="https://www.youtube.com/watch?v=lfDZJqSrIuk"
                    target="_blank"
                    className="group relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white shadow-sm transition-all duration-300 hover:scale-105"
                  >
                    <span className="absolute inset-0 rounded-full border border-blue-400/30 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <span className="absolute -inset-2 rounded-full border border-blue-300/20 animate-[ping_3.5s_cubic-bezier(0,0,0.2,1)_infinite]" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-500/25 transition-colors group-hover:from-blue-700 group-hover:to-blue-600">
                      <Play
                        className="ml-0.5 h-5.5 w-5.5 fill-white text-white"
                        strokeWidth={0}
                      />
                    </div>
                  </Link>

                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900">
                      Video Showcase
                    </h4>
                    <p className="text-xs text-zinc-500">
                      See Greyloops in action
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT CONTENT (MODERN FRAMES) ================= */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`group relative block aspect-[4/3.8] overflow-hidden rounded-2xl bg-slate-900 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 ${
                      item.stagger ? "sm:translate-y-8" : ""
                    }`}
                  >
                    {/* Image: shown in full original color, no grayscale/dark filters */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient for text legibility only — kept minimal so the image stays bright */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent" />

                    {/* Soft pulsing glow border, matches BentoCard treatment */}
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] animate-glow-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icon badge, top-left — consistent with the rest of the site's card icon badges */}
                    <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-blue-600">
                      <Sparkles className="h-4 w-4" strokeWidth={2} />
                    </div>

                    {/* Centered Bold Title */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-bold tracking-wide text-white drop-shadow-md transition-transform duration-300 group-hover:scale-105">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE ACTUALLY DO SECTION ================= */}
      <WhatWeDo />
      {/* ================= LEADERSHIP TEAM SECTION ================= */}
      <LeadershipTeam />
      {/* Talent On-Demand Component */}
      <TalentOnDemand />
    </div>
  );
}