// src/app/components/services/EnterpriseServices/CoreCapabilities.jsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Activity,
  Zap,
  TrendingUp,
  Database,
  Layers,
  BarChart3,
  Cpu,
  Maximize2,
  Users2,
  Sparkles,
} from "lucide-react";

const capabilities = [
  "Legacy Modernization",
  "Cloud-Native Platforms",
  "System Integration",
  "Enterprise Security",
  "AI-Powered Automation",
  "Full Lifecycle Support",
];

const stats = [
  {
    value: "99.9%",
    label: "Platform Uptime",
    detail: "SLA Guaranteed",
    icon: Activity,
    gradient: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    value: "10x",
    label: "Faster Deployment",
    detail: "Automated CI/CD",
    icon: Zap,
    gradient: "from-indigo-600 to-blue-600",
    badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
];

const advantages = [
  {
    title: "Centralized Data Management",
    desc: "ERP systems centralize data from all departments, ensuring timely, accurate access, reducing duplication, and enhancing integrity.",
    icon: Database,
  },
  {
    title: "Improved Efficiency and Productivity",
    desc: "Custom-made ERP software automates processes and workflows. As a result, employees can focus more on strategic tasks.",
    icon: Layers,
  },
  {
    title: "Enhanced Decision-Making",
    desc: "With ERP software companies have access to up-to-date data. Thus they make decisions based on detailed analysis and trends.",
    icon: BarChart3,
  },
  {
    title: "Optimized Resource Utilization",
    desc: "Companies can manage resources more efficiently with custom ERP. This optimization leads to waste reduction and cost savings.",
    icon: Cpu,
  },
  {
    title: "Scalability and Flexibility",
    desc: "An ERP system can scale and accommodate additional users and functionalities when a company scales and more data is to be handled.",
    icon: Maximize2,
  },
  {
    title: "Enhanced Collaboration",
    desc: "ERP offers a unified platform for sharing information and collaboration. As a result, you can observe improved interaction.",
    icon: Users2,
  },
];

export default function CoreCapabilities() {
  return (
    <div className="capabilities-font relative w-full bg-white pt-8 sm:pt-12">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .capabilities-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .capabilities-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* CENTERED CONTAINER WITH EXPANDED CARD WIDTH (max-w-[90rem]) */}
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 pb-24 sm:px-6 lg:px-8">
        
        {/* ============================================================
            CARD 1: OUR CORE CAPABILITIES
        ============================================================ */}
        <div
          className="sticky top-20 mb-20 flex min-h-[82vh] items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <div className="relative flex min-h-[82vh] w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 transition-colors duration-300 lg:flex-row">
            
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #64748b 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            {/* LEFT SIDE: FULL FILL IMAGE CONTAINER */}
            <div className="relative flex h-[400px] w-full shrink-0 flex-col justify-between overflow-hidden p-6 sm:p-8 lg:h-auto lg:min-h-full lg:w-[42%] lg:p-10">
              <Image
                src="/images/services/CoreCapabilities.png"
                alt="Our Core Capabilities"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
              />
              
              {/* Modern Glassmorphic Vignette Overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* FLOATING GLASS BADGE */}
              <div className="relative z-10 mt-auto inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/40 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md">
                  AI
                </div>
                <span className="text-xs font-medium text-white/95 sm:text-sm">
                  Architected for high-scale enterprise operations
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: EXPANDED TEXT AREA */}
            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-10 md:p-12 lg:w-[58%] lg:py-10">
              <div className="my-auto">
                <span className="relative mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  <span className="relative z-10">ENTERPRISE ENGINEERING</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
                </span>

                <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    OUR{" "}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    CORE CAPABILITIES
                  </span>
                </h2>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 sm:text-sm"
                    >
                      <Check
                        className="h-4 w-4 text-blue-600"
                        strokeWidth={3}
                      />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  We help organizations design, modernize, and scale enterprise
                  software that supports complex business operations — spanning
                  architecture, cloud platforms, integration, security, and
                  automation.
                </p>
              </div>

              {/* STATS FOOTER */}
              <div className="mt-8 border-t border-slate-200/80 pt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.1 * idx,
                          duration: 0.5,
                          type: "spring",
                        }}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                      >
                        <div
                          className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${stat.gradient} opacity-80`}
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                              <Icon className="h-5 w-5" />
                            </div>
                            <span
                              className={`capabilities-display text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent sm:text-3xl`}
                            >
                              {stat.value}
                            </span>
                          </div>

                          <div
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${stat.badgeColor}`}
                          >
                            <TrendingUp className="h-3 w-3" />
                            {stat.detail}
                          </div>
                        </div>

                        <p className="mt-2 text-xs font-bold text-slate-600">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            CARD 2: INCREDIBLE ADVANTAGES
        ============================================================ */}
        <div
          className="sticky top-20 mb-16 flex min-h-[82vh] items-center justify-center"
          style={{ zIndex: 20 }}
        >
          <div className="relative flex min-h-[82vh] w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 transition-colors duration-300 lg:flex-row">
            
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #64748b 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            {/* LEFT SIDE: FULL FILL IMAGE CONTAINER */}
            <div className="relative flex h-[400px] w-full shrink-0 flex-col justify-between overflow-hidden p-6 sm:p-8 lg:h-auto lg:min-h-full lg:w-[42%] lg:p-10">
              <Image
                src="/images/services/IncredibleAdvantages.png"
                alt="Incredible Advantages"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
              />
              
              {/* Modern Glassmorphic Vignette Overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* FLOATING GLASS BADGE */}
              <div className="relative z-10 mt-auto inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/40 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white shadow-md">
                  ERP
                </div>
                <span className="text-xs font-medium text-white/95 sm:text-sm">
                  Streamline operations and drive business growth
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: EXPANDED ADVANTAGES GRID */}
            <div className="relative z-10 flex w-full flex-col justify-center p-6 sm:p-10 md:p-12 lg:w-[58%] lg:py-10">
              <span className="relative mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100 w-fit">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span className="relative z-10">BUSINESS OPTIMIZATION</span>
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
              </span>

              <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  INCREDIBLE ADVANTAGES BY{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  IMPLEMENTING AN ERP SOLUTION
                </span>
              </h2>

              <div className="mt-2 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {advantages.map((adv) => {
                  const Icon = adv.icon;
                  return (
                    <motion.div
                      key={adv.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="capabilities-display text-xs font-bold text-slate-900 sm:text-sm">
                            {adv.title}
                          </h3>
                          <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600">
                            {adv.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}