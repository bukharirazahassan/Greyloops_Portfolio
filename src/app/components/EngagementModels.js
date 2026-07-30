"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Users, UsersRound, Rocket, Sparkles } from "lucide-react";

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

export default function EngagementModels() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  // Tracks scroll progress across the entire tall wrapper (0 → 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Purely scroll-driven active state advancement
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(models.length - 1, Math.floor(latest * models.length));
    setActive(idx);
  });

  const current = models[active];
  const ActiveIcon = current.icon;

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${models.length * 100}vh` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Engagement Models
            </span>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Flexible Ways We <span className="text-blue-600">Work Together</span>
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              Scroll to explore — tailored cooperation structures designed to
              fit your operational timeline and strategic growth goals.
            </p>
          </div>

          {/* Scrollytelling Grid Container */}
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Syncing Image Card */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/80 bg-slate-900 shadow-2xl shadow-blue-900/15 lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Counter Badge */}
              <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-blue-600 shadow-lg backdrop-blur-md ring-1 ring-white/50">
                  <ActiveIcon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                  Model 0{active + 1} / 0{models.length}
                </div>
              </div>

              {/* Bottom Visual Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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

            {/* Right Column: Moving Modern Text Container */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-md"
                >
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-blue-600">
                    {current.subtitle}
                  </span>
                  <h4 className="mb-4 text-2xl font-extrabold text-zinc-900">
                    {current.title}
                  </h4>
                  <p className="text-base font-medium leading-relaxed text-zinc-700 sm:text-lg">
                    &ldquo;{current.description}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Scroll Track Connector Indicator */}
              <div className="relative flex flex-col space-y-3 pl-2">
                {models.map((model, index) => {
                  const isActive = index === active;
                  const Icon = model.icon;

                  return (
                    <div
                      key={model.title}
                      className="relative flex items-center gap-4 transition-all duration-300"
                    >
                      {/* Modern Vertical Line Progress Track */}
                      <div className="relative flex h-10 w-6 items-center justify-center">
                        {index !== models.length - 1 && (
                          <div className="absolute top-8 h-8 w-0.5 bg-zinc-200" />
                        )}
                        <div
                          className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-blue-600 ring-4 ring-blue-100 scale-125"
                              : "bg-zinc-300"
                          }`}
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-zinc-400"
                          }`}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span
                          className={`text-sm font-bold transition-colors duration-300 ${
                            isActive ? "text-zinc-900" : "text-zinc-400"
                          }`}
                        >
                          {model.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-xs font-medium text-zinc-400 lg:text-left">
                Keep scrolling to see all engagement models
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}