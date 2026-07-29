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
        className="group relative flex h-full min-h-[190px] flex-col justify-end overflow-hidden rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
      >
        {/* Background tile — auto-panning gradient. Swap for a real
            screenshot later via project.image */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.from} ${project.to} animate-gradient-pan`}
        />

        {/* Auto shimmer sweep of light, staggered per card */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
          style={{ animationDelay: `${index * 0.45}s` }}
        />

        {/* Slowly floating icon watermark */}
        <Icon
          className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-white/15 animate-float"
          strokeWidth={1.5}
          style={{ animationDelay: `${index * 0.3}s` }}
        />

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Soft pulsing inner glow border, staggered per card */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] animate-glow"
          style={{ animationDelay: `${index * 0.5}s` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2 p-5 sm:p-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-4.5 w-4.5" strokeWidth={2} />
          </span>

          <h3
            className={`font-extrabold text-white ${
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {project.name}
          </h3>

          <p
            className={`text-white/85 ${
              featured ? "text-sm sm:text-base line-clamp-2" : "text-xs line-clamp-1"
            }`}
          >
            {project.tagline}
          </p>

          {featured && (
            <p className="mt-1 hidden max-w-md text-sm leading-relaxed text-white/75 sm:block">
              {project.description}
            </p>
          )}

          <span className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
            Discover More
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}