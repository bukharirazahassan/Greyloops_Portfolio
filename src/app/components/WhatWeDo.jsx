//src/app/components/WhatWeDo.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  TrendingDown,
  Zap,
  ShieldCheck,
  Headphones,
  Handshake,
  HeartHandshake,
  Users,
  Target,
  Award,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const productivityPoints = [
  {
    title: "Reduce Costs",
    description:
      "Optimize operational expenses with tailored IT implementation and resource allocation.",
    icon: TrendingDown,
  },
  {
    title: "Improve Efficiency",
    description:
      "Streamline workflows with integrated software and automation designed for productivity.",
    icon: Zap,
  },
  {
    title: "Increase Security",
    description:
      "Protect critical enterprise data and infrastructure with robust security solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Enhance Support",
    description:
      "Seamless, worry-free support acting as your dedicated remote IT department.",
    icon: Headphones,
  },
];

const coreValues = [
  {
    step: "01",
    badge: "Trust First",
    title: "Trust over process",
    description:
      "If a process increases trust, choose the process. Otherwise, choose trust.",
    icon: Handshake,
  },
  {
    step: "02",
    badge: "Impact Driven",
    title: "Value over profit",
    description:
      'Always ask yourself: "Is my work creating value for someone?" as opposed to "Have I completed what I was asked to do?"',
    icon: HeartHandshake,
  },
  {
    step: "03",
    badge: "One Team",
    title: "Collaboration over competition",
    description:
      "There is no individual glory (or failure). We succeed together as one unified team.",
    icon: Users,
  },
  {
    step: "04",
    badge: "Continuous Drive",
    title: "Effort over outcome",
    description:
      "We reward action. We take notice of inaction. Your best effort matters. Success and failure take a backseat!",
    icon: Target,
  },
  {
    step: "05",
    badge: "Mastery",
    title: "Excellence over success",
    description:
      "Pursuit of excellence is about pushing your boundaries everyday. Can you refine what you did yesterday by learning more?",
    icon: Award,
  },
];

export default function WhatWeDo() {
  const [openValue, setOpenValue] = useState(0);

  return (
    <div className="w-full text-slate-900">
      {/* ================= SECTION 1: WHAT WE ACTUALLY DO ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
        {/* Dot-grid texture, consistent with the rest of the site */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Experience • Execution • Excellence
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              What We <span className="text-blue-600">Actually Do</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl"
            >
              We do not just code.
            </motion.p>
          </div>

          {/* Main Bento Layout */}
          <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
            {/* Left Box: Featured narrative card — rebuilt to match the exact
                dark hero theme used at the top of this page (dot-grid,
                shimmer sweep, orbit rings, ambient glows) instead of a
                standalone blue gradient */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-blue-950/30 sm:p-10 lg:col-span-5"
            >
              {/* Dot-grid texture — dark variant, identical to the hero sections */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.3]"
                style={{
                  backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  maskImage:
                    "radial-gradient(ellipse 90% 80% at 30% 20%, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 80% at 30% 20%, black 40%, transparent 100%)",
                }}
              />

              {/* Shimmer sweep — same technique used in the hero */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* Orbit ring textures — same technique used in the hero */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full border border-white/10" />

              {/* Ambient glows — same colors used in the hero */}
              <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 -left-8 h-48 w-48 rounded-full bg-indigo-600/20 blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md">
                  <Sparkles className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                  Enterprise IT Solutions{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                    & Services
                  </span>
                </h3>

                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                  <strong className="font-semibold text-white">Greyloops</strong>{" "}
                  is a global provider of Information Technology services
                  designed for business productivity. We offer a comprehensive
                  suite of managed IT services, expert solutioning, outsourcing,
                  and implementation.
                </p>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 backdrop-blur-sm">
                  <p className="text-sm font-medium leading-relaxed text-zinc-200 sm:text-base">
                    Our proven portfolio features a{" "}
                    <span className="font-bold text-blue-300">
                      &ldquo;Remote IT department&rdquo;
                    </span>{" "}
                    service, giving you an efficient, seamless, and worry-free
                    IT experience.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-bold text-blue-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-200">
                <span>Explore Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>

            {/* Right Side: 4 Pillar Cards — consistent blue theme, ambient motion */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {productivityPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                  >
                    {/* Faint floating icon watermark, continuous */}
                    <Icon
                      className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 animate-float text-blue-50"
                      strokeWidth={1.5}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    />

                    <div className="relative z-10">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="h-6 w-6" strokeWidth={1.8} />
                        </div>
                        <span className="text-xs font-bold text-zinc-300">
                          0{index + 1}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    {/* Auto-filling progress line — animates once in view */}
                    <div className="relative z-10 mt-6 h-1 w-full overflow-hidden rounded-full bg-zinc-100">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VALUES THAT DRIVE US ================= */}
      <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5" />
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Values That <span className="text-blue-600">Drive Us</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              The foundational convictions guiding every solution we architect.
            </p>
          </div>

          {/* Interactive connected timeline / accordion */}
          <div className="relative">
            <div className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-blue-200 via-blue-200 to-transparent sm:left-7" />

            <div className="space-y-3">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                const isOpen = openValue === index;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative pl-16 sm:pl-20"
                  >
                    <span
                      className={`absolute left-3.5 top-5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-300 sm:left-4.5 ${
                        isOpen
                          ? "border-blue-600 bg-blue-600"
                          : "border-blue-200 bg-white"
                      }`}
                    >
                      {isOpen && (
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                      )}
                    </span>

                    <button
                      onClick={() => setOpenValue(isOpen ? -1 : index)}
                      className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                        isOpen
                          ? "border-blue-200 bg-blue-50/60 shadow-md shadow-blue-900/5"
                          : "border-zinc-100 bg-white hover:border-blue-200 hover:bg-blue-50/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isOpen
                              ? "bg-blue-600 text-white"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>

                        <div>
                          <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wider text-blue-500">
                            {value.step} — {value.badge}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            {value.title}
                          </h3>
                        </div>
                      </div>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-blue-600 text-white"
                            : "bg-zinc-100 text-zinc-500"
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 py-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {value.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}