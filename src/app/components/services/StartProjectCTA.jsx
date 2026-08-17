"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Smartphone,
  Monitor,
  UserCheck,
  Layers,
  ArrowUpRight,
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

export default function StartProjectCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-24 sm:py-28">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 85% at 20% 50%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 85% at 20% 50%, black 25%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/35 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-8">
        {/* ============ LEFT: Copy ============ */}
        <div className="lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Let&rsquo;s Build Together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Start Your{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Interface Design Project
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-9 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Collaborate with specialists who master the art of building
            products users actually enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://designindc.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>

        {/* ============ RIGHT: Diagonal staircase image cascade ============ */}
        <div className="lg:col-span-7">
          {/* Desktop: true diagonal staircase */}
          <div className="relative mx-auto hidden h-[700px] w-full max-w-3xl lg:block">
            {uiUxServices.map((service, i) => {
              const Icon = service.icon;
              // Each step moves right and down from the previous one —
              // baseTop centers the whole cascade within its box instead
              // of hugging the top edge, so spacing feels even top/bottom.
              const step = 66; // px offset per step, horizontally
              const stepDown = 74; // px offset per step, vertically
              const baseTop = 26; // shifts every card down evenly
              const size = 400 - i * 6;

              return (
                <motion.div
                  key={service.phase}
                  className="group absolute"
                  style={{
                    left: i * step,
                    top: baseTop + i * stepDown,
                    width: size,
                    zIndex: uiUxServices.length - i,
                  }}
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl shadow-blue-900/15 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-blue-900/25"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="400px"
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                    {/* No dark wash at all now — image shown at full
                        clarity; labels live entirely on their own solid
                        chips instead of relying on any overlay. */}

                    <span className="absolute left-3 top-3 flex h-7 w-11 items-center justify-center rounded-md bg-white/95 text-xs font-black text-blue-600 shadow-sm">
                      {service.phase}
                    </span>

                    <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="truncate text-xs font-bold leading-tight text-slate-800">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile / tablet: same staircase idea, condensed to a horizontal scroll row */}
          <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">
            {uiUxServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg shadow-blue-900/10"
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="160px"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/90 text-blue-600">
                      <Icon className="h-3 w-3" />
                    </span>
                    <span className="truncate text-[10px] font-bold text-white">
                      {service.title}
                    </span>
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