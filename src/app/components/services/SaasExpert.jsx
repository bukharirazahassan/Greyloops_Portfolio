"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Zap } from "lucide-react";

export default function SaasExpert() {
  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24 font-sans">
      {/* Full-width Background Image Container with Left-to-Right Fade */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/services/Consultation.webp"
          alt="Schedule a SaaS development consultation with Greyloops"
          width={1568}
          height={417}
          priority
          className="h-full w-full object-cover object-center"
        />
        {/* Soft white gradient overlay: fully opaque on the left to highlight text, fading gently towards the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent sm:hidden" />
      </div>

      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[12] opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Blur Glows */}
      <div className="pointer-events-none absolute left-6 top-16 z-[15] h-72 w-72 animate-float rounded-full bg-blue-300/20 blur-3xl" />
      <div
        className="pointer-events-none absolute bottom-24 left-36 z-[15] h-56 w-56 animate-float rounded-full bg-orange-200/25 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Full-Width Content Container shifted to far-left */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-wider">
                Expert SaaS Consultation
              </span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Ready to scope your{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              SaaS development project?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-lg"
          >
            Share the details — what you&rsquo;re building, what you&rsquo;re
            replacing, or where the current system is failing — and a{" "}
            <strong className="font-semibold text-slate-800">Greyloops</strong>{" "}
            engineer will respond within 24 hours.
          </motion.p>

          {/* Key Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex items-start gap-3 rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur-md"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Zap className="h-4 w-4" />
            </span>
            <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm lg:text-base">
              Get an assessment of fit, a realistic timeline, and key
              architecture solutions resolved before formal scoping begins.
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
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg sm:text-sm"
            >
              Request a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}