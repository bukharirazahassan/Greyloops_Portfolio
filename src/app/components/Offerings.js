"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

const tabs = [
  { key: "services", label: "Our Services", basePath: "/services", columns: servicesColumns },
  { key: "solutions", label: "Our Solutions", basePath: "/solutions", columns: solutionsColumns },
];

export default function Offerings() {
  const [activeTab, setActiveTab] = useState("services");
  const currentTab = tabs.find((t) => t.key === activeTab);

  const [activeSlug, setActiveSlug] = useState(currentTab.columns[0].slug);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    const nextTab = tabs.find((t) => t.key === tabKey);
    setActiveSlug(nextTab.columns[0].slug);
  };

  const activeColumn =
    currentTab.columns.find((c) => c.slug === activeSlug) || currentTab.columns[0];
  const ActiveIcon = activeColumn.icon;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
      {/* Dot-grid texture matching Tech Stack & Portfolio Showcase */}
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

      {/* Colorful background ambient orbs */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/40 via-indigo-200/30 to-purple-200/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200/50 to-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            What We Offer
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Our <span className="text-blue-600">Offerings</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            From the initial stages of development to QA processes to robust
            IT operations to AI solutions, we offer a broad range of tech
            services and solutions customized to your requirements.
          </p>
        </div>

        {/* Sliding pill tab switcher */}
        <div className="mb-14 flex justify-center">
          <div className="relative inline-flex rounded-full bg-white p-1.5 shadow-lg shadow-blue-900/5 ring-1 ring-zinc-200/80 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative z-10 rounded-full px-7 py-3 text-base font-bold transition-colors duration-300 ${
                  activeTab === tab.key ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
            {/* Animated background pill */}
            <motion.span
              className="absolute inset-y-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 shadow-md shadow-blue-500/30"
              initial={false}
              animate={{
                left: activeTab === "services" ? "6px" : "50%",
                width: "calc(50% - 6px)",
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          </div>
        </div>

        {/* Category cards (left) + Detail grid (right) */}
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          
          {/* Left: Category tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none lg:flex-col lg:overflow-visible lg:pb-0">
            {currentTab.columns.map((col) => {
              const Icon = col.icon;
              const isActive = col.slug === activeSlug;
              return (
                <button
                  key={col.slug}
                  onClick={() => setActiveSlug(col.slug)}
                  className={`group relative flex shrink-0 items-center gap-3.5 rounded-2xl p-4 text-left transition-all duration-300 lg:w-full lg:shrink ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-xl shadow-blue-600/25 ring-2 ring-blue-500/30"
                      : "border border-zinc-200/80 bg-white/90 text-zinc-800 hover:border-blue-200 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive
                        ? "bg-white/20 text-white backdrop-blur-md"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`whitespace-nowrap text-base font-bold lg:whitespace-normal ${
                        isActive ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {col.title}
                    </p>
                    <p
                      className={`hidden text-sm lg:block ${
                        isActive ? "text-blue-100" : "text-zinc-500"
                      }`}
                    >
                      {col.links.length} services
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed cards container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeColumn.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/30 p-7 shadow-xl shadow-blue-900/5 backdrop-blur-md sm:p-10"
            >
              {/* Vibrant Inner Glow Badge */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="mb-8 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                  <ActiveIcon className="h-7 w-7" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
                    {activeColumn.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-500">
                    {activeColumn.links.length} specialized services
                  </p>
                </div>
              </div>

              {/* Grid of service cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {activeColumn.links.map((link) => (
                  <Link
                    key={link.slug}
                    href={`${currentTab.basePath}/${link.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    {/* Color accent line on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-blue-600">
                        {link.name}
                      </h4>
                      <svg
                        className="h-4 w-4 shrink-0 -translate-x-1 text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {link.description || "Details coming soon."}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Bottom CTA Link */}
              <Link
                href={currentTab.basePath}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
              >
                View all {currentTab.label.toLowerCase()}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}