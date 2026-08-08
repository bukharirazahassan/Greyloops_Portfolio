"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

// Custom Illustrated Line Icons
function GlobeHeartIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="28" cy="28" r="18" />
      <path d="M10 28h36M28 10a24 24 0 0 1 0 36M28 10a24 24 0 0 0 0 36" />
      <circle cx="48" cy="18" r="6" className="fill-blue-50 stroke-blue-600" />
      <circle cx="48" cy="40" r="6" className="fill-blue-50 stroke-blue-600" />
      <circle cx="20" cy="50" r="6" className="fill-blue-50 stroke-blue-600" />
      <path
        d="M45.5 18a1.5 1.5 0 0 1 2.5-1 1.5 1.5 0 0 1 2.5 1c0 2-2.5 3.5-2.5 3.5s-2.5-1.5-2.5-3.5z"
        className="fill-blue-600 stroke-none"
      />
      <path
        d="M45.5 40a1.5 1.5 0 0 1 2.5-1 1.5 1.5 0 0 1 2.5 1c0 2-2.5 3.5-2.5 3.5s-2.5-1.5-2.5-3.5z"
        className="fill-blue-600 stroke-none"
      />
      <path
        d="M17.5 50a1.5 1.5 0 0 1 2.5-1 1.5 1.5 0 0 1 2.5 1c0 2-2.5 3.5-2.5 3.5s-2.5-1.5-2.5-3.5z"
        className="fill-blue-600 stroke-none"
      />
    </svg>
  );
}

function TeamRefreshIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 28a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM42 28a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
      <path d="M12 40c0-4 4-7 10-7s10 3 10 7M32 40c0-4 4-7 10-7s10 3 10 7" />
      <path d="M14 16A22 22 0 0 1 50 16" />
      <polyline points="52 10 50 18 42 16" />
      <path d="M50 48A22 22 0 0 1 14 48" />
      <polyline points="12 54 14 46 22 48" />
    </svg>
  );
}

function ShieldTagIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 12l20-4 12 12-20 32L12 24z" />
      <circle cx="26" cy="22" r="3" className="fill-blue-600" />
      <path
        d="M36 32v12c0 3 6 8 10 9 4-1 10-6 10-9V32l-10-4-10 4z"
        className="fill-blue-50/80"
      />
      <polyline points="42 38 45 41 51 35" />
    </svg>
  );
}

const engagementModels = [
  {
    title: "Dedicated Team",
    description:
      "Skilled developers working exclusively on your project for seamless collaboration and rapid delivery.",
    points: ["Full-time focus on your roadmap", "Direct communication, no middlemen"],
    ctaText: "Start Building",
    href: "/contact",
    icon: GlobeHeartIcon,
    featured: false,
  },
  {
    title: "Staff Augmentation",
    description:
      "Access top-tier talent at competitive rates to scale your velocity while reducing overhead costs.",
    points: ["Scale up or down in days", "Vetted senior engineers"],
    ctaText: "Hire Now",
    href: "/contact",
    icon: TeamRefreshIcon,
    featured: true,
  },
  {
    title: "Fixed Price Project",
    description:
      "Defined scope and budget tailored for guaranteed success, high quality, and set delivery timelines.",
    points: ["Clear scope, clear price", "Milestone-based delivery"],
    ctaText: "Get a Quote",
    href: "/contact",
    icon: ShieldTagIcon,
    featured: false,
  },
];

export default function TalentOnDemand() {
  return (
    <section className="talent-font relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-20 text-slate-900 sm:py-28">
      {/* Shared display font — same pairing used across the site */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .talent-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .talent-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Local shimmer keyframe — self-contained */}
      <style jsx>{`
        @keyframes talentShimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(220%);
          }
        }
        .talent-shimmer {
          animation: talentShimmer 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Dot Texture — matched to the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 25%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 25%, black 25%, transparent 100%)",
        }}
      />

      {/* Decorative Blur Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 ring-1 ring-blue-100 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            How We Engage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="talent-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-700 bg-clip-text text-transparent">
              Access World Class{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Talent On-Demand
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm font-medium leading-relaxed text-slate-500 sm:text-base sm:leading-8 lg:text-lg"
          >
            Whether you need a dedicated team, staff augmentation, or a
            fixed-price project, we&rsquo;ve got the right model for your
            growth.
          </motion.p>
        </div>

        {/* ================= ENGAGEMENT MODEL CARDS ================= */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {engagementModels.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  model.featured
                    ? "border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl shadow-blue-900/30"
                    : "border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm backdrop-blur-md hover:border-blue-200 hover:shadow-xl"
                }`}
              >
                {/* Featured badge */}
                {model.featured && (
                  <span className="absolute right-6 top-6 z-10 inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 ring-1 ring-blue-400/30">
                    Most Popular
                  </span>
                )}

                {/* Dark card ambient animation layer */}
                {model.featured ? (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-600/40 blur-3xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl"
                    />
                    <motion.div
                      initial={{ x: "-100%", y: "-100%" }}
                      animate={{ x: "200%", y: "200%" }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                  </>
                ) : (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="talent-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      model.featured
                        ? "bg-blue-500/20 text-blue-300 ring-1 ring-blue-500/30 backdrop-blur-sm"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                </div>

                {/* Title & description */}
                <div className="relative z-10 mt-6 flex-1">
                  <h3
                    className={`talent-display text-xl font-bold tracking-tight ${
                      model.featured ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {model.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      model.featured ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {model.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2.5 text-sm font-medium ${
                          model.featured ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                            model.featured
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-8">
                  <Link
                    href={model.href}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      model.featured
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:shadow-blue-500/40"
                        : "border border-blue-200 bg-blue-50/70 text-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}