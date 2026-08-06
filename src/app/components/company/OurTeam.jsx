"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeadershipTeam from "../../components/LeadershipTeam";
import FAQSection from "../../components/FAQSection";

// Defined outside the component to prevent re-render re-initialization
const WORDS = ["Engineers", "Architects", "Designers", "Innovators"];

export default function OurTeam() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter and re-writing effect logic
  useEffect(() => {
    // 1. Pause at the end of a word before erasing
    if (subIndex === WORDS[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    // 2. Pause after deleting word, then switch to next word
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % WORDS.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    // 3. Typing / Erasing step
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
      {/* ================= OUR TEAM HERO SECTION (DARK THEME) ================= */}
      <section className="relative min-h-screen sm:h-screen w-full overflow-hidden bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-4 lg:p-6">
        {/* Custom Keyframe CSS for Shimmer Effect */}
        <style jsx global>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%) skewX(-15deg);
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
            }
          }
          .animate-shimmer-pass {
            animation: shimmer 3.5s infinite ease-in-out;
          }
        `}</style>

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

          <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px] animate-pulse" />
          <div className="absolute top-1/3 -left-32 h-[350px] w-[350px] rounded-full bg-indigo-600/15 blur-[130px]" />
          <div className="absolute bottom-1/3 -right-32 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>

        {/* Main Hero Container */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between text-center">
          
          {/* Header */}
          <header className="flex flex-col items-center pt-2 sm:pt-3 shrink-0">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md shadow-md shadow-blue-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                Our Team &amp; Leadership
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 text-2xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight flex items-center justify-center gap-x-1.5 sm:gap-x-3"
            >
              <span className="shrink-0">Meet the</span>
              
              <span className="w-[130px] sm:w-[280px] lg:w-[350px] text-left inline-flex items-center bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                <span>{`${WORDS[index].substring(0, subIndex)}`}</span>
                <span className="animate-pulse text-blue-400 ml-0.5">|</span>
              </span>

              <span className="shrink-0">Behind Scale</span>
            </motion.h1>
          </header>

          {/* Dynamic Team Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full my-4 sm:my-2 sm:flex-1 flex items-center justify-center overflow-hidden"
          >
            <div className="relative h-[220px] sm:h-full w-full flex items-center justify-center">
              <Image
                src="/top-team.png"
                alt="Greyloops Engineering & Product Team"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain sm:object-cover object-center drop-shadow-[0_25px_60px_rgba(56,189,248,0.2)]"
              />

              <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay">
                <div className="animate-shimmer-pass h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Subtitle Paragraph */}
          <footer className="pb-3 sm:pb-3 shrink-0 max-w-3xl px-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300 font-normal tracking-wide"
            >
              We are a collective of problem solvers, software engineers, and digital designers united across global hubs to build high-performance platforms that scale.
            </motion.p>
          </footer>

        </div>
      </section>

      {/* ================= LEADERSHIP TEAM SECTION (LIGHT THEME MATCH) ================= */}
      <LeadershipTeam />
      {/* ================= FREQUENTLY ASKED QUESTIONS SECTION ================= */}
      <FAQSection />
    </main>
  );
}