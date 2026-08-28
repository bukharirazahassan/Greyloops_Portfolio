//src/app/components/company/CareersPage.jsx

"use client";

import Link from "next/link";
import { Briefcase, Sparkles, ArrowLeft, Mail } from "lucide-react";

export default function CareersPage({
  title = "Careers Page Under Development",
  description = "We are currently expanding our hiring portal to bring you new career opportunities. Check back soon or reach out directly to join our team!",
}) {
  return (
    <main className="relative flex-1 bg-slate-50 py-20 sm:py-28 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Status Badge */}
        <span className="mb-6 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          Careers &amp; Opportunities
        </span>

        {/* Icon Container */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/25 ring-8 ring-blue-50">
          <Briefcase className="h-9 w-9 animate-bounce" />
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-blue-600/25 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <a
            href="mailto:query@greyloops.com?subject=Career Inquiries"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:bg-slate-100 sm:w-auto"
          >
            <Mail className="h-4 w-4 text-blue-600" />
            Send Resume
          </a>
        </div>
      </div>
    </main>
  );
}