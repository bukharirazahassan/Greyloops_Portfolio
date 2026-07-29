"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Users, UsersRound, Rocket, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const models = [
  {
    title: "IT Staff Augmentation",
    subtitle: "Scale Teams On-Demand",
    description:
      "Fill critical skills gaps rapidly by embedding vetted tech professionals seamlessly into your existing workflows and tools.",
    image: "/IT_Staff_Augmentation.jpg",
    icon: Users,
  },
  {
    title: "Dedicated Teams",
    subtitle: "End-to-End Commitment",
    description:
      "Deploy fully autonomous, cross-functional development teams aligned directly with your company culture, KPIs, and long-term goals.",
    image: "/Dedicated_Teams.jpg",
    icon: UsersRound,
  },
  {
    title: "Software Development Outsourcing",
    subtitle: "Turnkey Product Delivery",
    description:
      "Entrust full product lifecycle development to us—from strategy and design to deployment—so you can focus on core business growth.",
    image: "/Software_Development_Outsourcing.jpg",
    icon: Rocket,
  },
];

const AUTOPLAY_MS = 5000;

export default function EngagementModels() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActive((index + models.length) % models.length);
  }, []);

  const handleNext = () => goTo(active + 1);
  const handlePrev = () => goTo(active - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, goTo]);

  const current = models[active];
  const ActiveIcon = current.icon;

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Signature Dot-Grid Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative Ambient Orbs */}
      <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Engagement Models
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Flexible Ways We <span className="text-blue-600">Work Together</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            Tailored cooperation structures designed to fit your operational timeline, team structure, and strategic growth goals.
          </p>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Interactive Visual Frame (7 cols) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/80 bg-slate-900 shadow-2xl shadow-blue-900/15 lg:col-span-7">
            
            {/* Slide Images Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority={active === 0}
                />
                
                {/* Gradient vignette for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Floating Glass Icon Badge */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-blue-600 shadow-lg backdrop-blur-md ring-1 ring-white/50">
                <ActiveIcon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                Model 0{active + 1} / 0{models.length}
              </div>
            </div>

            {/* Interactive Image Nav Controls */}
            <div className="absolute right-6 top-6 z-10 flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Model"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md transition-all hover:bg-white hover:text-zinc-900 hover:shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Model"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md transition-all hover:bg-white hover:text-zinc-900 hover:shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    {current.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {current.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Tab Selector & Details (5 cols) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            
            {/* Dynamic Description Box */}
            <div className="relative min-h-[120px] rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-base font-medium leading-relaxed text-zinc-700 sm:text-lg">
                    &ldquo;{current.description}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modern Tab Selector Cards */}
            <div className="space-y-3.5">
              {models.map((model, index) => {
                const isActive = index === active;
                const Icon = model.icon;

                return (
                  <button
                    key={model.title}
                    onClick={() => goTo(index)}
                    className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/25 ring-2 ring-blue-500/30"
                        : "border border-zinc-200/80 bg-white/90 text-zinc-800 hover:border-blue-200 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <div className="z-10 flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          isActive
                            ? "bg-white/20 text-white backdrop-blur-md"
                            : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <h4 className={`text-base font-bold leading-tight ${isActive ? "text-white" : "text-zinc-900"}`}>
                          {model.title}
                        </h4>
                        <span className={`text-xs ${isActive ? "text-blue-100" : "text-zinc-500"}`}>
                          {model.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Chevron indicator */}
                    <div className="z-10 pr-1">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-zinc-400 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                        }`}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Progress bar animation for autoplay active item */}
                    {isActive && !paused && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-white/40"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}