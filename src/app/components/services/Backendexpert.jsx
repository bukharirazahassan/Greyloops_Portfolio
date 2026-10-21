// src/app/components/services/Backendexpert.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Zap } from "lucide-react";

export default function Backendexpert() {
  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-200/60">
      {/* Background Image Container with Left-to-Right Fade */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/services/backendTeam.jpg"
          alt="Meet our expert backend development team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft white gradient overlay: opaque on the left to reveal text, fading out towards the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/85 sm:via-slate-50/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent sm:hidden" />
      </div>

      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[12] opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Blur Glows */}
      <div className="pointer-events-none absolute left-10 top-16 z-[15] h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-12 bottom-12 z-[15] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-[88rem] px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Meet Our Experts
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            We Fix, Transform, and{" "}
            <span className="text-blue-600">Skyrocket Your Software.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
          >
            Tell us where your system needs help — we&rsquo;ll show you how to
            move forward with clarity and speed. From architecture to
            launch — we&rsquo;re your engineering partner.
          </motion.p>

          {/* Key Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex items-start gap-3 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Zap className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              <strong className="font-bold text-slate-900">
                Book your free consultation.
              </strong>{" "}
              We&rsquo;ll help you move faster, scale smoothly, and make smarter technical decisions.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:text-sm"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}