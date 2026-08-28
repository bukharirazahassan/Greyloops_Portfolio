// src/app/components/services/EnterpriseServices/CoreBusinessPlatforms.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

const capabilities = [
  { name: "ERP Software Development", href: "#enterprise-services?type=erp&service=01" },
  { name: "CRM Platforms Development", href: "#enterprise-services?type=crm&service=01" },
  { name: "HRM Software", href: "#enterprise-services?type=hrm&service=01" },
  { name: "Supply Chain Management Systems", href: "#enterprise-services?type=scm&service=01" },
  { name: "Education Management Systems", href: null },
  { name: "Point of Sale (POS) & Financial Integration", href: "#enterprise-services?type=pos&service=01" },
  { name: "Non Profit Organizations", href: null },
];

export default function CoreBusinessPlatforms() {
  // Custom controlled smooth scroll function
  const smoothScrollTo = (targetElement, duration = 1200) => {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Smooth cubic easing function for an elegant, gradual decelerating scroll
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (e, href) => {
    if (!href) return;
    e.preventDefault();

    const targetId = href.split("?")[0];
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Sync URL hash for Part 2 active tab updating
      window.history.pushState(null, "", href);
      window.dispatchEvent(new Event("hashchange"));

      // Trigger slow controlled scroll (1200ms duration)
      smoothScrollTo(targetElement, 1200);
    }
  };

  return (
    <section className="core-platforms-font relative w-full overflow-hidden bg-white pt-6 pb-4 sm:pt-8 sm:pb-6">
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

      {/* BACKGROUND IMAGE WITH TOP/BOTTOM SOFT GRADIENT BLEND */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/services/ERPCoreBusiness.png"
          alt="ERP Core Business Platforms Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* FEATHERING OVERLAYS TO ELIMINATE HARD EDGES */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
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
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/35 p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)] backdrop-blur-md ring-1 ring-white/40 sm:p-10 lg:w-[48%] lg:p-11">
            
            {/* INTENSIVE CRYSTAL REFLECTION HIGHLIGHTS */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-white/70 via-white/40 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl" />

            {/* PILL BADGE */}
            <span className="relative mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-blue-100/80 bg-white/90 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-md backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span className="relative z-10">CORE BUSINESS PLATFORMS</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
            </span>

            {/* TWO-TONE HEADING */}
            <h2 className="core-platforms-display relative z-10 mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Core Business{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                 Platforms
              </span>
            </h2>

            {/* REDUCED DESCRIPTION */}
            <p className="relative z-10 mb-7 text-base leading-relaxed text-zinc-600 sm:text-lg">
              We build systems to help enterprises manage operations, teams, and data in one connected environment.
            </p>

            {/* CAPABILITIES LIST */}
            <div className="relative z-10 flex flex-col gap-2.5">
              {capabilities.map((item) => {
                const isLink = Boolean(item.href);
                const Element = isLink ? Link : "div";
                const elementProps = isLink
                  ? {
                      href: item.href,
                      onClick: (e) => handleScroll(e, item.href),
                    }
                  : {};

                return (
                  <Element
                    key={item.name}
                    {...elementProps}
                    className={`group flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/45 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 ${
                      isLink
                        ? "hover:border-blue-300 hover:bg-white/70 hover:shadow-md cursor-pointer"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-bold text-slate-800 transition-colors ${
                        isLink ? "group-hover:text-blue-600" : ""
                      } sm:text-sm`}
                    >
                      {item.name}
                    </span>
                    {isLink && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50/90 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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