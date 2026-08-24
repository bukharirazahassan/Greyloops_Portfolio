// src/app/components/services/EnterpriseServices/CoreBusinessPlatforms.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

const capabilities = [
  { name: "ERP Software Development", href: "#" },
  { name: "CRM Platforms Development", href: "#" },
  { name: "HRM Software", href: "#" },
  { name: "Supply Chain Management Systems", href: "#" },
  { name: "Enterprise Asset Management", href: null },
  { name: "Project Management Platforms", href: null },
];

export default function CoreBusinessPlatforms() {
  return (
    <section className="core-platforms-font relative w-full overflow-hidden bg-white py-16 sm:py-24">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .core-platforms-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .core-platforms-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* FULL UNTOUCHED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/services/ERPCoreBusiness.png"
          alt="ERP Core Business Platforms Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* AMBIENT BACKGROUND GLOWS & SPHERES */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />

        {/* RADIAL DOT BACKGROUND PATTERN */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 30% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 30% 50%, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* CONTENT CONTAINER - BALANCED CARD WIDTH */}
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col lg:flex-row lg:items-center">
          
          {/* COMPACT CRYSTAL GLASS CARD */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/65 p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)] backdrop-blur-2xl ring-2 ring-white/50 sm:p-10 lg:w-[48%] lg:p-11">
            
            {/* INTENSIVE CRYSTAL REFLECTION HIGHLIGHTS */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-white via-white/80 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

            {/* PILL BADGE */}
            <span className="relative mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-blue-100/80 bg-white/95 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-md backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span className="relative z-10">CORE BUSINESS PLATFORMS</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
            </span>

            {/* TWO-TONE HEADING */}
            <h2 className="core-platforms-display relative z-10 mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                ERP Software{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Development Services
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="relative z-10 mb-7 text-base leading-relaxed text-zinc-600 sm:text-lg">
              We build the systems that help enterprises manage daily operations,
              teams, assets, workflows, and business-critical information from
              one connected environment.
            </p>

            {/* CAPABILITIES LIST */}
            <div className="relative z-10 flex flex-col gap-2.5">
              {capabilities.map((item) => {
                const isLink = Boolean(item.href);
                const Element = isLink ? Link : "div";
                const elementProps = isLink ? { href: item.href } : {};

                return (
                  <Element
                    key={item.name}
                    {...elementProps}
                    className={`group flex w-full items-center justify-between rounded-2xl border border-white/90 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 ${
                      isLink ? "hover:border-blue-300 hover:bg-white hover:shadow-md" : ""
                    }`}
                  >
                    <span className={`text-xs font-bold text-slate-800 transition-colors ${isLink ? "group-hover:text-blue-600" : ""} sm:text-sm`}>
                      {item.name}
                    </span>
                    {isLink && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </Element>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE SPACER FOR UNTOUCHED BACKGROUND VISIBILITY */}
          <div className="hidden lg:block lg:w-[52%]" />

        </div>
      </div>
    </section>
  );
}