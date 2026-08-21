"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";

export default function FrontendDevelopmentExpert() {
  return (
    <section className="relative w-full min-h-[415px] overflow-hidden bg-white py-12 sm:py-16">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .frontend-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .frontend-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Full Background Image Layer - 100% Full Visibility (No Gradients or Masks) */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/services/frontendDevelopmentExpert.png"
          alt="Schedule a frontend development consultation with Greyloops"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Background Dot-Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Soft Ambient Background Glows */}
      <div className="pointer-events-none absolute -right-24 -top-20 z-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 z-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span className="uppercase tracking-wider">
                  Expert SaaS Consultation
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="frontend-display mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Ready to scope your{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                frontend development project?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-base leading-relaxed text-zinc-600 sm:text-lg"
            >
              Share the details — what you&rsquo;re building, what you&rsquo;re
              replacing, or where the current system is failing — and a{" "}
              <strong className="font-semibold text-slate-900">
                Greyloops
              </strong>{" "}
              engineer will respond within 24 hours.
            </motion.p>

            {/* Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 rounded-[2rem] border border-slate-100 bg-white/85 p-5 shadow-sm backdrop-blur-md sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="frontend-display text-base font-bold text-slate-900">
                    What happens during scoping?
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    Get an assessment of fit, a realistic timeline, and key
                    architecture solutions resolved before formal scoping
                    begins.
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-2 text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      24-hour turnaround
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      Senior engineering review
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Static CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}