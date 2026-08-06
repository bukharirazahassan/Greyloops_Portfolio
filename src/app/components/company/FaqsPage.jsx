"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FAQSection from "../FAQSection";

const WORDS = ["Questions", "Answers", "Solutions", "Insights"];

export default function FaqsPage() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === WORDS[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % WORDS.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <main className="w-full selection:bg-blue-500 selection:text-white">
      {/* ================= HERO HEADER (DARK THEME) ================= */}
      <section className="relative w-full overflow-hidden bg-slate-950 px-4 py-20 text-slate-100 sm:py-28 lg:py-32">
        {/* Background Gradients & Ambient Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          <div className="absolute top-1/2 left-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px] animate-pulse" />
          <div className="absolute top-1/4 -left-32 h-[300px] w-[300px] rounded-full bg-indigo-600/15 blur-[130px]" />
          <div className="absolute bottom-1/4 -right-32 h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 shadow-md shadow-blue-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Help Center &amp; Support
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
          >
            <span className="shrink-0">Frequently Asked</span>
            <span className="inline-flex items-center bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent min-w-[170px] sm:min-w-[270px] lg:min-w-[340px] text-left">
              <span>{`${WORDS[index].substring(0, subIndex)}`}</span>
              <span className="ml-0.5 animate-pulse text-blue-400">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg"
          >
            Everything you need to know about Greyloops, our engineering methodology, security standards, AI implementation, and partnership models.
          </motion.p>
        </div>
      </section>

      {/* ================= FAQ COMPONENT ================= */}
      <FAQSection />
    </main>
  );
}