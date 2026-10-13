// src/components/company/Technology_Insights.jsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, BookOpen } from "lucide-react";
import { trendingBlogs } from "@/app/lib/technologyInsightsData";

export default function Technology_Insights() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-20 sm:py-28">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
        }}
      />

      {/* Ambient blue circle glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-blue-300/35 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADER */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Innovation &amp; Perspectives
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Technology Insights{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              &amp; Perspectives
            </span>
          </motion.h1>
        </div>

        {/* ATTACHED SPLIT FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl ring-1 ring-slate-200/60 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-12">
            {/* Left compact card: Description */}
            <div className="flex flex-col justify-center border-b border-slate-200/80 bg-slate-50/90 p-8 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
              <span className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Engineering Playbook
              </span>
              <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                Explore expert insights, practical guides, and the latest technology trends to help your business make smarter decisions, build better digital solutions, and accelerate growth.
              </p>
            </div>

            {/* Right larger card: Image */}
            <div className="relative min-h-[300px] overflow-hidden bg-slate-100 sm:min-h-[400px] lg:col-span-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blogs/Technology_Insights_Perspectives.png"
                alt="Technology Insights and Perspectives"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* BLOGS GRID SECTION */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="mb-10 flex items-center justify-between border-b border-slate-200/80 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                <BookOpen className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Trending Articles &amp; Guides
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:text-sm">
              {trendingBlogs.length} Articles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trendingBlogs.map((blog, idx) => (
              <motion.a
                key={idx}
                href={blog.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg ring-1 ring-slate-200/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {blog.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {blog.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {blog.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <span>{blog.readTime || "5 min read"}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-blue-600 transition-transform duration-300 group-hover:translate-x-0.5">
                      Read Article
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}