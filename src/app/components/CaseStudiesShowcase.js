"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { casestudiesProjects } from "../lib/casestudiesData";
import BentoCard from "./BentoCard";

// Bento layout spans — creates the asymmetric grid pattern.
const spans = [
  "md:col-span-2 md:row-span-2", // 0 — featured, large square
  "md:col-span-1 md:row-span-1", // 1
  "md:col-span-1 md:row-span-1", // 2
  "md:col-span-1 md:row-span-2", // 3 — tall
  "md:col-span-1 md:row-span-1", // 4
  "md:col-span-2 md:row-span-1", // 5 — wide
  "md:col-span-1 md:row-span-1", // 6
];

const projects = casestudiesProjects.slice(0, 7);

export default function PortfolioShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture - Animated Opacity Pulse */}
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

      {/* Dynamic Animated Background Ambient Glow Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
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
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Products We&rsquo;ve{" "}
            <span className="text-blue-600">Brought to Life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 sm:text-lg"
          >
            A snapshot of platforms Greyloops has designed, built, and scaled —
            from early-stage MVPs to enterprise-grade systems used by teams
            around the world.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 gap-5 md:auto-rows-[190px] md:grid-cols-4"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, i) => (
            <BentoCard
              key={project.slug}
              project={project}
              span={spans[i]}
              featured={i === 0}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99]"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}