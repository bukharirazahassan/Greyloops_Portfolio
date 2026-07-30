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
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={span}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className={`group relative flex h-full min-h-[190px] flex-col justify-end overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-xl ${
          featured
            ? "shadow-blue-500/20 hover:shadow-blue-500/30"
            : "border border-zinc-100 bg-white hover:shadow-blue-900/10"
        }`}
      >
        {/* Featured tile — solid brand-blue gradient (auto-panning) */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 animate-gradient-pan" />
        )}

        {/* Auto shimmer sweep, staggered per card */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent to-transparent ${
            featured ? "via-white/25" : "via-blue-100/50"
          }`}
          style={{ animationDelay: `${index * 0.45}s` }}
        />

        {/* Slowly floating icon watermark */}
        <Icon
          className={`pointer-events-none absolute -right-4 -top-4 h-28 w-28 animate-float ${
            featured ? "text-white/15" : "text-blue-50"
          }`}
          strokeWidth={1.5}
          style={{ animationDelay: `${index * 0.3}s` }}
        />

        {/* Soft pulsing inner glow border, staggered per card */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] ${
            featured ? "animate-glow" : "animate-glow-blue"
          }`}
          style={{ animationDelay: `${index * 0.5}s` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2 p-5 sm:p-6">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${
              featured ? "bg-white/20 text-white backdrop-blur-sm" : "bg-blue-50 text-blue-600"
            }`}
          >
            <Icon className="h-4.5 w-4.5" strokeWidth={2} />
          </span>

          <h3
            className={`font-extrabold ${
              featured ? "text-2xl text-white sm:text-3xl" : "text-lg text-zinc-900"
            }`}
          >
            {project.name}
          </h3>

          <p
            className={`${
              featured
                ? "text-sm text-white/85 line-clamp-2 sm:text-base"
                : "text-xs text-zinc-500 line-clamp-1"
            }`}
          >
            {project.tagline}
          </p>

          {featured && (
            <p className="mt-1 hidden max-w-md text-sm leading-relaxed text-white/75 sm:block">
              {project.description}
            </p>
          )}

          <span
            className={`mt-2 inline-flex w-fit items-center gap-1 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1 ${
              featured ? "text-white" : "text-blue-600"
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