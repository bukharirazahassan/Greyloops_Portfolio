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

import CoreSaasDevelopmentServices from "../../components/services/CoreSaasDevelopmentServices";
import SaasDevelopmentProcess from "../../components/services/SaasDevelopmentProcess";
import SaasFAQs from "../../components/services/SaasFAQs";
import CollaborateMobileDevelopment from "@/app/components/services/MobileService/CollaborateMobileDevelopment";

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
      description:
        "Avoid the overhead of building and running everything in-house.",
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
          HERO SECTION (STANDARDIZED LIGHT THEME)
      ========================================================== */}
      <section className="relative w-full bg-slate-50 pt-10 pb-6 lg:pt-16 lg:pb-8">
        {/* Ambient Light Theme Glows */}
        <div className="pointer-events-none absolute left-0 top-10 z-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 z-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

        {/* Dot Matrix Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

        {/* Hero Card Wrapper */}
        <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-white/80 backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
              {/* LEFT CONTENT */}
              <div className="flex flex-col items-start lg:col-span-5">
                {/* Tag Badge */}
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>SaaS Development Services</span>
                </span>

                {/* Main Two-Color Title */}
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                  <span className="block">Build Scalable SaaS Products</span>
                  <span className="mt-1 block text-blue-600">
                    That Grow With You.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                  We design and develop secure, scalable SaaS platforms — from
                  MVPs to enterprise-grade solutions — so you can focus on
                  delivering value to your customers.
                </p>

                {/* Key Development Focus */}
                <div className="mt-6 w-full">
                  <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                    Key Development Focus
                  </span>

                  <div className="space-y-2.5">
                    {[
                      "Multi-tenant Cloud Architecture",
                      "Secure Authentication & Subscription Billing",
                      "High-Performance API Integration",
                      "Automated CI/CD & Cloud Infrastructure",
                      "Scalable Microservices Architecture",
                      "Monitoring, Security & Performance Optimization",
                    ].map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="mt-8 flex w-full flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-100 pt-6 text-sm text-slate-600 sm:gap-x-8">
                  {/* Metric 1 */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-slate-900">
                      99.9% Uptime
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-slate-900">
                      50+ Products Shipped
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="-mx-6 -mb-6 flex h-full items-center justify-center lg:col-span-7 lg:-my-12 lg:-mr-12">
                <div className="relative flex h-full min-h-[320px] w-full items-center justify-center p-2 sm:min-h-[400px] lg:min-h-[480px]">
                  <Image
                    src="/images/services/SaasHeader.png"
                    alt="SaaS Development Illustration"
                    width={1376}
                    height={768}
                    priority
                    unoptimized
                    className="h-full w-full scale-105 object-contain object-right sm:scale-110 lg:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE BENEFITS SECTION (OPTIMIZED SPACING)
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 pt-6 pb-16 text-slate-900 lg:pt-8 lg:pb-24">
        {/* Background Glows & Pattern */}
        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

        <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Tag Badge + Side Heading */}
            <div className="flex flex-col items-start lg:col-span-6">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>SaaS Advantage</span>
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                <span>What Makes SaaS Right for Your </span>
                <span className="block text-blue-600">Business?</span>
              </h2>
            </div>

            {/* Right Column: Description Text */}
            <div className="flex flex-col justify-center space-y-4 lg:col-span-6 lg:pt-3">
              <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                Markets move fast, and so do the challenges that come with them.
                As your business grows, so does the complexity of managing
                operations, teams, tools, and systems. Sometimes, building
                something in-house only makes things harder.
              </p>

              <p className="text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
                That’s where we come in. At Greyloops, we build SaaS products
                that are simple to manage, quick to launch, and far less
                demanding than assembling an in-house tech team.
              </p>
            </div>
          </div>

          {/* Modern Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                >
                  {/* Top Ambient Glow inside card */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-500/10" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Accent Line */}
                  <div className="mt-6 h-1 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CoreSaasDevelopmentServices />
      <SaasDevelopmentProcess />
      <SaasFAQs />
      <CollaborateMobileDevelopment />
    </div>
  );
}
