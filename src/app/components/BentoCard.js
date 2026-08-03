"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BentoCard({ project, span, featured, index = 0 }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={span}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className={`group relative flex h-full min-h-[190px] flex-col justify-end overflow-hidden rounded-3xl transition-all duration-300 ${
          featured
            ? "border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl shadow-blue-900/30 lg:scale-100"
            : "border border-slate-200/80 bg-white/90 text-slate-900 shadow-xl shadow-blue-900/5 backdrop-blur-md hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10"
        }`}
      >
        {/* Animated Background Layers for Featured Card (Dark Signature Theme) */}
        {featured ? (
          <>
            {/* Ambient Background Glow Orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-60 w-60 rounded-full bg-blue-600/40 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-indigo-500/30 blur-3xl"
            />

            {/* Continuous Shimmer Light Beam Sweep */}
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

            {/* Animated Orbit Rings Texture */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full border border-white/5"
            />

            {/* Dot Grid Overlay inside Featured Dark Card */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </>
        ) : (
          /* Staggered CSS Shimmer Sweep for Standard Cards */
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"
            style={{ animationDelay: `${index * 0.45}s` }}
          />
        )}

        {/* Slowly Floating Watermark Icon (Retained on all cards) */}
        <Icon
          className={`pointer-events-none absolute -right-4 -top-4 h-28 w-28 animate-float ${
            featured ? "text-white/15" : "text-blue-50"
          }`}
          strokeWidth={1.5}
          style={{ animationDelay: `${index * 0.3}s` }}
        />

        {/* Soft Pulsing Inner Glow Border (Retained on all cards) */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] ${
            featured ? "animate-glow" : "animate-glow-blue"
          }`}
          style={{ animationDelay: `${index * 0.5}s` }}
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col gap-2 p-5 sm:p-6">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${
              featured
                ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30 backdrop-blur-sm"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <Icon className="h-4.5 w-4.5" strokeWidth={2} />
          </span>

          <h3
            className={`font-extrabold tracking-tight ${
              featured ? "text-2xl text-white sm:text-3xl" : "text-lg text-slate-900"
            }`}
          >
            {project.name}
          </h3>

          <p
            className={`${
              featured
                ? "text-sm text-slate-300 line-clamp-2 sm:text-base"
                : "text-xs text-slate-500 line-clamp-1"
            }`}
          >
            {project.tagline}
          </p>

          {featured && (
            <p className="mt-1 hidden max-w-md text-sm leading-relaxed text-slate-300/80 sm:block">
              {project.description}
            </p>
          )}

          <span
            className={`mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1 ${
              featured ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Discover More
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}