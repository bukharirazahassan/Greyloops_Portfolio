"use client";

import Image from "next/image";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Rocket,
  Maximize,
  DollarSign,
  Wrench,
  Globe,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import CoreSaasDevelopmentServices from "../../components/services/CoreSaasDevelopmentServices"
import SaasDevelopmentProcess from "../../components/services/SaasDevelopmentProcess"
import SaasFAQs from "../../components/services/SaasFAQs"
import SaasExpert from "../../components/services/SaasExpert"

export default function SaasDevelopmentPage() {
  const cardData = [
    {
      title: "Faster Launch",
      description: "Get your product to market quickly, without delays.",
      icon: Rocket,
      badge: "Speed & Agility",
    },
    {
      title: "Built to Scale",
      description: "Easily grow your platform as your users increase.",
      icon: Maximize,
      badge: "High Growth",
    },
    {
      title: "Lower Costs",
      description: "Avoid the overhead of building and running everything in-house.",
      icon: DollarSign,
      badge: "Cost Efficient",
    },
    {
      title: "Easy to Maintain",
      description: "Updates, fixes, and changes happen without effort.",
      icon: Wrench,
      badge: "Zero Friction",
    },
    {
      title: "Access Anywhere",
      description: "Offer your users secure access from anywhere, anytime.",
      icon: Globe,
      badge: "Cloud First",
    },
    {
      title: "Always Evolving",
      description: "Evolve your product over time with ease and flexibility.",
      icon: RefreshCw,
      badge: "Continuous Tech",
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================
          HERO SECTION (DARK THEME - UNCHANGED)
      ========================================================== */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Glow Overlay */}
        <div className="pointer-events-none absolute right-0 top-1/2 z-0 h-[600px] w-[750px] -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        {/* Dot Matrix Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        {/* Subtle Right-side Glow */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Main Content */}
        <div className="relative z-10 my-auto w-full px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-20">
          <div className="mx-auto grid w-full max-w-[1450px] items-center gap-0 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="relative z-20 flex flex-col justify-center lg:col-span-5 lg:pr-4 xl:pr-6">
              {/* Tag Badge */}
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md sm:text-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                SaaS Development Services
              </span>

              {/* Main Title */}
              <h1 className="mb-4 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-6xl">
                <span>Build Scalable </span>
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  SaaS Products
                </span>{" "}
                <span>That Grow</span>
              </h1>

              {/* Subtitle */}
              <p className="mb-5 max-w-[600px] text-sm leading-relaxed text-slate-300 sm:text-base lg:text-[17px]">
                We design and develop secure, scalable SaaS platforms — from
                MVPs to enterprise-grade solutions — so you can focus on
                delivering value to your customers.
              </p>

              {/* Key Development Focus */}
              <div className="mb-6">
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-blue-400 sm:text-sm">
                  Key Development Focus
                </span>

                <div className="space-y-2">
                  {[
                    "Multi-tenant Cloud Architecture",
                    "Secure Authentication & Subscription Billing",
                    "High-Performance API Integration",
                    "Automated CI/CD & Cloud Infrastructure",
                    "Scalable Microservices Architecture",
                    "Monitoring, Security & Performance Optimization",
                  ].map((detail) => (
                    <div key={detail} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span className="text-xs leading-relaxed text-slate-300 sm:text-sm lg:text-[15px]">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Footer */}
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-800 pt-4 text-sm text-slate-400 sm:gap-x-8 sm:pt-5">
                {/* Metric 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-950/60 text-blue-400 ring-1 ring-blue-800/50">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-slate-200">
                    99.9% Uptime
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-950/60 text-blue-400 ring-1 ring-blue-800/50">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-slate-200">
                    50+ Products Shipped
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative z-10 flex items-center justify-center lg:col-span-7">
              <div
                className="
                  relative
                  h-[300px]
                  w-full
                  max-w-[500px]
                  sm:h-[390px]
                  sm:max-w-[600px]
                  md:h-[450px]
                  md:max-w-[680px]
                  lg:h-[500px]
                  lg:max-w-[720px]
                  xl:h-[570px]
                  xl:max-w-[800px]
                  2xl:h-[620px]
                  2xl:max-w-[860px]
                "
              >
                <Image
                  src="/images/services/SaasHeader.png"
                  alt="SaaS Development Illustration"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE BENEFITS SECTION (EXACT CARDS & GREYLOOPS BRANDING)
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 lg:py-28">
        {/* Blue Ambient Background Glow Circles */}
        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

        {/* Matching Light Theme Dot Matrix Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            {/* Tag Badge */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              SaaS Advantage
            </span>

            {/* Title with Matching Gradient Accent */}
            <h2 className="mb-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              What Makes SaaS Right for Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[17px]">
              Markets move fast, and so do the challenges that come with them. As your business grows, so does the complexity of managing operations, teams, tools, and systems. Sometimes, building something in-house only makes things harder.
            </p>

            <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]">
              That’s where we come in. At Greyloops, we build SaaS products that are simple to manage, quick to launch, and far less demanding than assembling an in-house tech team.
            </p>
          </div>

          {/* Modern Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
                >
                  {/* Top Ambient Glow inside card */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:bg-blue-500/10 group-hover:scale-125" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Accent Line */}
                  <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CoreSaasDevelopmentServices />
      <SaasDevelopmentProcess />
      <SaasFAQs />
      <SaasExpert />      

    </div>
  );
}