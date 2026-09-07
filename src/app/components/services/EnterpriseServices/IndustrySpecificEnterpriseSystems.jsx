// src/app/components/services/EnterpriseServices/IndustrySpecificEnterpriseSystems.jsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import * as healthcareData from "@/app/lib/HealthcareData";

const AUTO_ROTATE_TIME = 6000;

// Single Static Top Image Configuration
const TOP_IMAGE = {
  src: "/images/services/industry_healthcare_systems.webp",
  alt: "Healthcare & Enterprise Development Services",
  label: "Enterprise Healthcare Solutions",
};

/* ------------------------------------------------------------------ */
/* SERVICE DASHBOARD BLOCK — LEFT NAV CARD + RIGHT IMAGE/DETAIL CARDS */
/* ------------------------------------------------------------------ */
function ServiceDashboard({
  dataset,
  activeIndex,
  onSelect,
  onNext,
  onPrev,
  topImage,
}) {
  const activeService =
    dataset?.servicesData?.[activeIndex] || dataset?.servicesData?.[0] || {};

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4 w-full lg:h-[79vh] lg:max-h-[840px] min-h-0 items-stretch">
      {/* LEFT SIDE: SERVICES NAVIGATION CARD */}
      <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-4 sm:p-5 lg:col-span-4 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.18)] backdrop-blur-2xl ring-1 ring-white/60 min-h-0">
        <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-white via-white/70 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 -right-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* HEADER WITH DYNAMIC TITLE & DESCRIPTION */}
        <div className="relative z-10 flex flex-col border-b border-slate-200/70 pb-3.5 gap-2 shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <h3 className="ent-dev-display text-base sm:text-lg font-extrabold tracking-tight text-slate-900 truncate">
                {dataset?.sectionTitle || "Healthcare Systems"}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="rounded-full border border-blue-100 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-blue-600 shadow-sm">
                {activeService.id || "01"} /{" "}
                {String(dataset?.servicesData?.length || 0).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* DYNAMIC SECTION DESCRIPTION */}
          {dataset?.sectionDescription && (
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">
              {dataset.sectionDescription}
            </p>
          )}
        </div>

        {/* SERVICES LIST */}
        <div className="custom-services-scroll relative z-10 flex flex-1 flex-col justify-center space-y-2.5 py-3 pr-1 min-h-0 overflow-y-auto">
          {dataset?.servicesData?.map((service, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;

            return (
              <button
                key={service.id}
                onClick={() => onSelect(idx)}
                className={`group relative w-full overflow-hidden rounded-xl border text-left transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? "border-blue-200/70 shadow-[0_10px_24px_-12px_rgba(37,99,235,0.45)]"
                    : "border-transparent hover:border-slate-200/70 hover:bg-white/50"
                }`}
              >
                {isCompleted && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-blue-50 via-blue-100/70 to-blue-100/40"
                  />
                )}

                {isActive && (
                  <span
                    key={activeIndex}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 z-0 overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 via-blue-200/80 to-sky-200/70 animate-progress-active"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-sweep" />
                  </span>
                )}

                <div className="relative z-10 flex w-full items-center gap-3 px-4 py-4">
                  <span
                    className={`text-xs font-bold transition-colors ${
                      isActive
                        ? "text-blue-700"
                        : isCompleted
                          ? "text-blue-400"
                          : "text-slate-400"
                    }`}
                  >
                    [{service.id}]
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-bold transition-colors line-clamp-1 ${
                      isActive
                        ? "text-slate-900"
                        : isCompleted
                          ? "text-slate-600"
                          : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE: TOP SINGLE IMAGE CARD + BOTTOM TWO COMPACT CARDS */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-8 h-full min-h-0 justify-between">
        {/* TOP SINGLE IMAGE CONTAINER */}
        <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-0 lg:h-[430px] lg:flex-none w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <Image
            src={topImage.src}
            alt={topImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center"
          />

          {/* FLOATING BADGE */}
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-md">
              {topImage.label}
            </span>
          </div>
        </div>

        {/* BOTTOM TWO CARDS GRID */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:flex-1 min-h-0">
          {/* DIV 1: DARK THEME CARD */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5 text-white shadow-xl backdrop-blur-2xl ring-1 ring-white/10 min-h-0">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/15 blur-xl" />

            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #94a3b8 1.2px, transparent 1.2px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-950/60 text-blue-400 ring-1 ring-blue-800/50 shadow-inner">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    {activeService.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-medium line-clamp-4">
                  {activeService.blueCardText}
                </p>
              </div>

              <div className="relative z-10 mt-3 flex items-center gap-2">
                <button
                  onClick={onPrev}
                  aria-label="Previous service"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 transition-colors hover:border-blue-500/40 hover:bg-slate-800 hover:text-white active:scale-95"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={onNext}
                  aria-label="Next service"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 transition-colors hover:border-blue-500/40 hover:bg-slate-800 hover:text-white active:scale-95"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* DIV 2: LIGHT GLASSMORPHISM CARD */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-4 sm:p-5 text-slate-900 shadow-lg shadow-blue-500/5 backdrop-blur-2xl ring-1 ring-slate-900/5 min-h-0">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-28 w-28 rounded-full bg-sky-300/20 blur-2xl" />

            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #64748b 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10 flex flex-col justify-center h-full gap-3 overflow-y-auto">
              {activeService.points?.map((pt, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-sm shadow-blue-500/50 flex-shrink-0" />
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {pt.heading}
                    </h4>
                  </div>
                  <p className="pl-3.5 text-xs leading-relaxed text-slate-600 font-medium">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustrySpecificEnterpriseSystems() {
  const [currentDataset] = useState(healthcareData);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic hash listener supporting Healthcare routing
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;

      if (hash.includes("service=") || hash.includes("type=")) {
        const queryPart = hash.split("?")[1] || "";
        const queryParams = new URLSearchParams(queryPart);
        const serviceId =
          queryParams.get("service") || hash.split("service=")[1];

        const foundIndex = healthcareData.servicesData.findIndex(
          (item) => item.id === serviceId
        );
        setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
      } else {
        setActiveIndex(0);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  // Auto-rotation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentDataset?.servicesData?.length) {
        setActiveIndex(
          (prev) => (prev + 1) % currentDataset.servicesData.length
        );
      }
    }, AUTO_ROTATE_TIME);

    return () => clearTimeout(timer);
  }, [activeIndex, currentDataset]);

  const handleNext = () => {
    if (currentDataset?.servicesData?.length) {
      setActiveIndex((prev) => (prev + 1) % currentDataset.servicesData.length);
    }
  };

  const handlePrev = () => {
    if (currentDataset?.servicesData?.length) {
      setActiveIndex(
        (prev) =>
          (prev - 1 + currentDataset.servicesData.length) %
          currentDataset.servicesData.length
      );
    }
  };

  return (
    <section
      id="industry-systems"
      className="ent-dev-font relative w-full bg-slate-50 text-slate-900 overflow-hidden"
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .ent-dev-font {
          font-family:
            "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .ent-dev-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
        }

        .custom-services-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-services-scroll::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.5);
          border-radius: 4px;
        }
        .custom-services-scroll::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 4px;
        }

        @keyframes fillProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress-active {
          animation: fillProgress ${AUTO_ROTATE_TIME}ms linear forwards;
        }

        @keyframes shimmerSweep {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }
        .animate-shimmer-sweep {
          animation: shimmerSweep 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* AMBIENT LIGHT EFFECTS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="absolute -right-20 bottom-1/4 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      {/* HEADER SECTION — SPLIT GRID LAYOUT */}
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 items-center">
          {/* LEFT SIDE: BADGE & TITLE */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Industry Solutions</span>
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Industry-Specific
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Enterprise Systems
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE: DESCRIPTION */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left lg:pt-6">
            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-medium">
              Tailored digital platforms designed to handle complex workflows,
              operational compliance, and specialized infrastructure
              requirements across key vertical industries.
            </p>
          </div>
        </div>
      </div>

      {/* DASHBOARD FRAME */}
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 pb-16 sm:px-6 lg:px-8">
        <ServiceDashboard
          dataset={currentDataset}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          topImage={TOP_IMAGE}
        />
      </div>
    </section>
  );
}