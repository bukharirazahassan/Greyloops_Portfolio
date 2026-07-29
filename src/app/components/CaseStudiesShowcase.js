"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { casestudiesProjects } from "../lib/casestudiesData";
import BentoCard from "./BentoCard";

// Bento layout spans — creates the asymmetric grid pattern.
// Index 0 is the large "featured" tile; others vary in size for visual rhythm.
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
      {/* Dot-grid texture, consistent with the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Sparkles className="h-3.5 w-3.5" />
            Our Work
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Products We&rsquo;ve{" "}
            <span className="text-blue-600">Brought to Life</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            A snapshot of platforms Greyloops has designed, built, and scaled —
            from early-stage MVPs to enterprise-grade systems used by teams
            around the world.
          </p>
        </div>

        {/* Bento grid */}
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
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
