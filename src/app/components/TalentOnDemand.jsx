"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
    ctaText: "Start building today!",
    href: "/contact",
    icon: GlobeHeartIcon,
    featured: false,
  },
  {
    title: "Staff Augmentation",
    description:
      "Access top-tier talent at competitive rates to scale your velocity while reducing overhead costs.",
    ctaText: "Hire Now!",
    href: "/contact",
    icon: TeamRefreshIcon,
    featured: true, // Signature dark background card with full animations
  },
  {
    title: "Fixed Price Project",
    description:
      "Defined scope and budget tailored for guaranteed success, high quality, and set delivery timelines.",
    ctaText: "Get a Quote",
    href: "/contact",
    icon: ShieldTagIcon,
    featured: false,
  },
];

export default function TalentOnDemand() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative Blur Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 ring-1 ring-blue-100 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            How We Engage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Access World Class <span className="text-blue-600">Talent On-Demand</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Whether you need a dedicated team, staff augmentation, or a fixed-price project, we’ve got the right model for your growth.
          </motion.p>
        </div>

        {/* Circular Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex justify-center"
              >
                <div
                  className={`group relative flex aspect-square w-full max-w-[360px] flex-col items-center justify-between overflow-hidden rounded-full p-8 text-center transition-all duration-500 hover:-translate-y-2 ${
                    model.featured
                      ? "border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl shadow-blue-900/40"
                      : "border border-slate-200/80 bg-white/90 text-slate-900 shadow-xl shadow-blue-900/5 backdrop-blur-md hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10"
                  }`}
                >
                  {/* Signature Dark Card Animations */}
                  {model.featured ? (
                    <>
                      {/* Ambient Glowing Orbs */}
                      <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-600/40 blur-3xl"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl"
                      />

                      {/* Continuous Shimmer Light Beam */}
                      <motion.div
                        initial={{ x: "-100%", y: "-100%" }}
                        animate={{ x: "200%", y: "200%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                      />

                      {/* Rotating Orbit Rings */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full border border-white/5"
                      />

                      {/* Dot Texture Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                    </>
                  ) : (
                    /* Subtle Hover Shimmer for Light Cards */
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/40 to-transparent"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    />
                  )}

                  {/* Top: Icon */}
                  <div className="relative z-10 mt-2">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                        model.featured
                          ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30 backdrop-blur-sm"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <IconComponent className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="relative z-10 flex flex-col items-center justify-center px-2">
                    <h3
                      className={`text-xl font-extrabold tracking-tight ${
                        model.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {model.title}
                    </h3>
                    <p
                      className={`mt-2 text-xs leading-relaxed line-clamp-3 sm:text-sm ${
                        model.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {model.description}
                    </p>
                  </div>

                  {/* Bottom: Pill Action Button */}
                  <div className="relative z-10 mb-2">
                    <Link
                      href={model.href}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                        model.featured
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:shadow-blue-500/40"
                          : "border border-blue-200 bg-blue-50/70 text-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      <span>{model.ctaText}</span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${
                          model.featured
                            ? "bg-white/20 text-white"
                            : "bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600"
                        }`}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}