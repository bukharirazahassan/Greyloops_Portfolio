"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import OfficeLocations from "../components/OfficeLocations";

const WORDS = ["Together", "Remarkable", "Unstoppable", "Real"];

const CONTACT_NODES = [
  { icon: Mail, label: "Email", angle: 0, color: "#38bdf8" },
  { icon: Phone, label: "Call", angle: 90, color: "#a78bfa" },
  { icon: MessageCircle, label: "Chat", angle: 180, color: "#fb923c" },
  { icon: MapPin, label: "Visit", angle: 270, color: "#34d399" },
];

const QUICK_LINKS = [
  { icon: Mail, label: "hello@greyloops.com", href: "mailto:hello@greyloops.com" },
  { icon: Phone, label: "+1 (555) 010-2030", href: "tel:+15550102030" },
];

export default function ContactUsPage() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter and re-writing effect logic
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
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />

      <main className="flex-1">
        {/* ================= CONTACT HERO HEADER (DARK THEME) ================= */}
        <section className="relative min-h-[52vh] w-full overflow-hidden bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white lg:min-h-[58vh]">
          {/* Local keyframes */}
          <style jsx global>{`
            @keyframes shimmerPass {
              0% {
                transform: translateX(-100%) skewX(-15deg);
              }
              100% {
                transform: translateX(200%) skewX(-15deg);
              }
            }
            .animate-shimmer-pass {
              animation: shimmerPass 3.5s infinite ease-in-out;
            }
            @keyframes orbitSpin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            @keyframes orbitSpinReverse {
              from {
                transform: rotate(360deg);
              }
              to {
                transform: rotate(0deg);
              }
            }
            .animate-orbit {
              animation: orbitSpin 22s linear infinite;
            }
            .animate-orbit-counter {
              animation: orbitSpinReverse 22s linear infinite;
            }
            @keyframes floatSlow {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-14px);
              }
            }
            .animate-float-slow {
              animation: floatSlow 6s ease-in-out infinite;
            }
            @keyframes driftGrid {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 60px 60px;
              }
            }
            .animate-drift-grid {
              animation: driftGrid 12s linear infinite;
            }
          `}</style>

          {/* Ambient Background Layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.07] mix-blend-screen">
              <Image
                src="/contactus.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 65% at 50% 45%, transparent 30%, #020617 100%)",
              }}
            />

            {/* Drifting dot grid */}
            <div
              className="animate-drift-grid absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
              }}
            />

            {/* Ambient glows */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-600/20 blur-[150px]" />
            <div className="absolute -left-32 top-1/3 h-[350px] w-[350px] rounded-full bg-indigo-600/15 blur-[130px]" />
            <div className="absolute -right-32 bottom-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[130px]" />

            {/* Diagonal light sweep across whole header */}
            <div className="absolute inset-0 overflow-hidden mix-blend-overlay">
              <div className="animate-shimmer-pass h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>

          {/* Main Hero Container */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-14 text-center sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 lg:text-left">
            {/* Copy */}
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-400 shadow-md shadow-blue-500/10 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  </span>
                  Contact Us &amp; Free Consultation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-x-2 text-2xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:justify-start lg:text-6xl"
              >
                <span className="shrink-0">Let&rsquo;s Build</span>

                <span className="inline-flex min-w-[140px] items-center bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-left text-transparent sm:min-w-[260px] lg:min-w-[320px]">
                  <span>{`${WORDS[index].substring(0, subIndex)}`}</span>
                  <span className="ml-0.5 animate-pulse text-blue-400">|</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-4 max-w-lg text-xs font-normal leading-relaxed tracking-wide text-slate-300 sm:text-sm lg:text-base"
              >
                Whether you&rsquo;re starting something new or need expert
                hands on an existing project, our team responds within one
                business day &mdash; no forms into the void.
              </motion.p>

              {/* Quick contact chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group/chip relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <Icon className="h-3.5 w-3.5 text-blue-400" />
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform duration-300 group-hover/chip:translate-x-0.5 group-hover/chip:-translate-y-0.5 group-hover/chip:text-blue-400" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Orbit animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
            >
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="animate-orbit absolute inset-6 rounded-full border border-dashed border-fuchsia-400/25" />
              <div className="animate-orbit-counter absolute inset-14 rounded-full border border-cyan-400/25" />

              <div className="animate-float-slow relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-orange-400 shadow-[0_0_60px_rgba(168,85,247,0.45)] backdrop-blur-md sm:h-24 sm:w-24">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/90 via-fuchsia-500/90 to-orange-400/90" />
                <MessageCircle className="relative h-9 w-9 text-white drop-shadow-md sm:h-10 sm:w-10" />
              </div>

              {CONTACT_NODES.map(({ icon: Icon, label, angle, color }, i) => (
                <motion.div
                  key={label}
                  className="absolute inset-0"
                  animate={{ rotate: [angle, angle + 360] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        rotate: [-angle, -angle - 360],
                      }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.4 + i * 0.1 },
                        rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md sm:h-11 sm:w-11"
                      style={{
                        borderColor: `${color}40`,
                        backgroundColor: "rgba(15,23,42,0.85)",
                        boxShadow: `0 0 20px ${color}55`,
                      }}
                      title={label}
                    >
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" style={{ color }} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CONTACT SECTION (MATCHED LIGHT THEME) ================= */}
        <section className="w-full bg-white text-slate-900 border-t border-slate-200/80">
          <ContactUs />
        </section>

        {/* ================= OFFICE LOCATIONS & MAPS ================= */}
        <OfficeLocations />      

      </main>

      <Footer />
    </div>
  );
}