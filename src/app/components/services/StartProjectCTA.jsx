// src/app/components/services/StartProjectCTA.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Smartphone,
  Monitor,
  UserCheck,
  Layers,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const uiUxServices = [
  {
    phase: "01",
    title: "Web Design & UX Audit",
    image: "/images/services/ux-audit.jpg",
    imageAlt: "UI/UX audit dashboard with heatmap and usability scores",
    icon: Search,
  },
  {
    phase: "02",
    title: "SaaS Interface Design",
    image: "/images/services/saas-design.jpg",
    imageAlt: "SaaS analytics dashboard interface with charts and tables",
    icon: Layout,
  },
  {
    phase: "03",
    title: "Custom Mobile App Design",
    image: "/images/services/mobile-design.jpg",
    imageAlt: "Mobile app screens showing tasks, stats and calendar UI",
    icon: Smartphone,
  },
  {
    phase: "04",
    title: "Web UI/UX Design",
    image: "/images/services/web-design.jpg",
    imageAlt: "Web portal dashboard layout with component blocks",
    icon: Monitor,
  },
  {
    phase: "05",
    title: "HCI Design",
    image: "/images/services/hci-design.jpg",
    imageAlt: "User personas, journey map and interview flow research board",
    icon: UserCheck,
  },
  {
    phase: "06",
    title: "Design Systems & Libraries",
    image: "/images/services/design-systems.jpg",
    imageAlt: "Design system layers with buttons, color tokens and typography",
    icon: Layers,
  },
];

const PERKS = ["Free consultation", "Response within 24 hours"];

// embedded = true  -> transparent, no own spacing/background (the parent page provides the shared background)
// embedded = false -> standalone section with its own light background
export default function StartProjectCTA({ embedded = false }) {
  return (
    <section
      className={`relative w-full ${
        embedded ? "" : "overflow-hidden bg-slate-50 py-16 lg:py-24"
      }`}
    >
      {!embedded && (
        <>
      {/* Standard light theme: dot grid */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

          {/* Standard light theme: glowing blue / indigo circles */}
          <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
          <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]" />
        </>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-[120rem] grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* ============ LEFT: Copy ============ */}
        <div className="px-2 sm:px-4 lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur-md sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Let&rsquo;s Build Together
          </motion.span>

          {/* Standard two-colour heading (no gradient) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-slate-900">Start Your </span>
            <span className="text-blue-600">Interface Design Project</span>
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 block h-1 w-14 origin-left rounded-full bg-blue-600"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl"
          >
            Collaborate with specialists who master the art of building
            products users actually enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-blue-600 pl-6 pr-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Book a Free Consultation
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>

            <ul className="flex flex-col gap-1.5">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ============ RIGHT: Diagonal staircase of service cards ============ */}
        <div className="lg:col-span-7">
          {/* Desktop: staircase – whole square image visible on every card */}
          <div className="relative mx-auto hidden h-[790px] w-full max-w-[58rem] lg:block">
            {uiUxServices.map((service, i) => {
              const Icon = service.icon;
              const stepX = 82; // each card moves right…
              const stepY = 74; // …and down
              const baseTop = 10;
              const size = 410 - i * 8;

              return (
                <motion.div
                  key={service.phase}
                  className="group absolute"
                  style={{
                    left: i * stepX,
                    top: baseTop + i * stepY,
                    width: size,
                    zIndex: uiUxServices.length - i,
                  }}
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.04, zIndex: 20 }}
                >
                  {/* Glass frame */}
                  <div className="rounded-[1.75rem] bg-white/75 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-1 ring-white/80 backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-[0_30px_70px_rgba(37,99,235,0.22)]">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-50 via-white to-slate-50">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="410px"
                        className="object-cover object-center"
                        onError={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      />

                      <span className="absolute left-3 top-3 flex h-7 min-w-[2.25rem] items-center justify-center rounded-full bg-white/90 px-2 font-mono text-xs font-bold text-blue-600 shadow-sm ring-1 ring-white/80 backdrop-blur-md">
                        {service.phase}
                      </span>

                      <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-xl bg-white/90 px-3 py-2 shadow-md shadow-slate-900/10 ring-1 ring-white/80 backdrop-blur-md">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className="truncate text-xs font-bold leading-tight text-slate-900 sm:text-[13px]">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile / tablet: swipeable row of the same cards */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden">
            {uiUxServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="w-64 shrink-0 snap-start rounded-[1.5rem] bg-white/75 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.1)] ring-1 ring-white/80 backdrop-blur-xl sm:w-72"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-blue-50 via-white to-slate-50">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="288px"
                      className="object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                    <div className="absolute inset-x-2.5 bottom-2.5 flex items-center gap-2 rounded-xl bg-white/90 px-2.5 py-1.5 shadow-md ring-1 ring-white/80 backdrop-blur-md">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span className="truncate text-xs font-bold text-slate-900">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}