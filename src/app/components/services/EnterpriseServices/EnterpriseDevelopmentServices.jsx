// src/app/components/services/EnterpriseServices/EnterpriseDevelopmentServices.jsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import * as enterpriseData from "@/app/lib/EnterpriseData";
import * as erpData from "@/app/lib/ERPData";
import * as crmData from "@/app/lib/CRMData";
import * as hrmData from "@/app/lib/HRMData";
import * as scmData from "@/app/lib/SCMData";
import * as posData from "@/app/lib/POSData";

const AUTO_ROTATE_TIME = 6000;

// Modern Slider Image Dataset
const SLIDER_IMAGES = [
  {
    src: "/images/services/enterprise_dev_services.png",
    alt: "Enterprise Development Services",
    label: "Enterprise Solutions",
  },
  {
    src: "/images/services/supply_chain_management_systems.png",
    alt: "Supply Chain Management Systems",
    label: "Supply Chain & Logistics",
  },
  {
    src: "/images/services/sale_pos_system.png",
    alt: "Point of Sale (POS) & Financial Integration",
    label: "Point of Sale (POS) & Financial Integration",
  },
];

export default function EnterpriseDevelopmentServices() {
  const [currentDataset, setCurrentDataset] = useState(enterpriseData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if user is viewing specific nested datasets (ERP, CRM, HRM, SCM, or POS) instead of overall services
  const isCustomView = currentDataset !== enterpriseData;

  // Function to manually reset back to default overall Enterprise Services
  const handleResetToDefault = () => {
    setCurrentDataset(enterpriseData);
    setActiveIndex(0);
    window.history.pushState(null, "", "#enterprise-services");
  };

  // Dynamic hash listener supporting Enterprise, ERP, CRM, HRM, SCM, and POS navigation routing
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;

      if (hash.includes("service=") || hash.includes("type=")) {
        const queryPart = hash.split("?")[1] || "";
        const queryParams = new URLSearchParams(queryPart);
        const serviceId =
          queryParams.get("service") || hash.split("service=")[1];
        const typeParam = queryParams.get("type");

        const isCrmRequest =
          typeParam === "crm" || hash.toLowerCase().includes("crm");
        const isHrmRequest =
          typeParam === "hrm" || hash.toLowerCase().includes("hrm");
        const isScmRequest =
          typeParam === "scm" || hash.toLowerCase().includes("scm");
        const isPosRequest =
          typeParam === "pos" || hash.toLowerCase().includes("pos");

        if (isCrmRequest) {
          setCurrentDataset(crmData);
          const foundIndex = crmData.servicesData.findIndex(
            (item) => item.id === serviceId,
          );
          setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
        } else if (isHrmRequest) {
          setCurrentDataset(hrmData);
          const foundIndex = hrmData.servicesData.findIndex(
            (item) => item.id === serviceId,
          );
          setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
        } else if (isScmRequest) {
          setCurrentDataset(scmData);
          const foundIndex = scmData.servicesData.findIndex(
            (item) => item.id === serviceId,
          );
          setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
        } else if (isPosRequest) {
          setCurrentDataset(posData);
          const foundIndex = posData.servicesData.findIndex(
            (item) => item.id === serviceId,
          );
          setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
        } else {
          setCurrentDataset(erpData);
          const foundIndex = erpData.servicesData.findIndex(
            (item) => item.id === serviceId,
          );
          setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
        }
      } else {
        // Fallback to default overall Enterprise dataset
        setCurrentDataset(enterpriseData);
        setActiveIndex(0);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  // Auto-rotation timer reset on active item or dataset shift
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentDataset?.servicesData?.length) {
        setActiveIndex(
          (prev) => (prev + 1) % currentDataset.servicesData.length,
        );
      }
    }, AUTO_ROTATE_TIME);

    return () => clearTimeout(timer);
  }, [activeIndex, currentDataset]);

  // Image slider auto-rotation (rotates every 5 seconds independently)
  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);

    return () => clearInterval(sliderTimer);
  }, []);

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
          currentDataset.servicesData.length,
      );
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length,
    );
  };

  const goTo = (idx) => setActiveIndex(idx);

  const activeService =
    currentDataset?.servicesData?.[activeIndex] ||
    currentDataset?.servicesData?.[0] ||
    {};

  return (
    <section
      id="enterprise-services"
      className="ent-dev-font relative w-full overflow-hidden bg-slate-50 p-4 sm:p-6 lg:p-8 pt-12 sm:pt-16 lg:pt-20 lg:h-screen lg:min-h-[640px] lg:max-h-[920px] flex flex-col justify-between text-slate-900"
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
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[180px]" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full h-full flex-1 flex flex-col min-h-0">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4 flex-1 h-full min-h-0 items-stretch">
          {/* LEFT SIDE: SERVICES NAVIGATION CARD */}
          <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-white/85 via-white/65 to-white/45 p-4 sm:p-5 lg:col-span-4 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.18)] backdrop-blur-2xl ring-1 ring-white/60 min-h-0">
            <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-white via-white/70 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* HEADER WITH dynamic Reset / All Services button */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-200/70 pb-3 gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30">
                  <LayoutGrid className="h-4 w-4" />
                </div>
                <h3 className="ent-dev-display text-base sm:text-lg font-extrabold tracking-tight text-slate-900 truncate">
                  {currentDataset?.sectionTitle || "Services"}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {isCustomView && (
                  <button
                    onClick={handleResetToDefault}
                    title="Back to Overall Services"
                    className="flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>All Services</span>
                  </button>
                )}
                <span className="rounded-full border border-blue-100 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-blue-600 shadow-sm">
                  {activeService.id || "01"} /{" "}
                  {String(currentDataset?.servicesData?.length || 0).padStart(
                    2,
                    "0",
                  )}
                </span>
              </div>
            </div>

            {/* SERVICES LIST */}
            <div className="custom-services-scroll relative z-10 flex flex-1 flex-col space-y-1.5 py-3 pr-1 min-h-0 overflow-y-auto">
              {currentDataset?.servicesData?.map((service, idx) => {
                const isActive = idx === activeIndex;
                const isCompleted = idx < activeIndex;

                return (
                  <button
                    key={service.id}
                    onClick={() => goTo(idx)}
                    className={`group relative w-full overflow-hidden rounded-xl border text-left transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "border-blue-200/70 shadow-[0_10px_24px_-12px_rgba(37,99,235,0.45)]"
                        : isCompleted
                          ? "border-transparent hover:border-slate-200/70 hover:bg-white/50"
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

                    <div className="relative z-10 flex w-full items-center gap-3 px-3.5 py-3">
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

          {/* RIGHT SIDE: TOP IMAGE SLIDER CARD + BOTTOM TWO COMPACT CARDS */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-8 h-full min-h-0 justify-between">
            {/* TOP MODERN IMAGE SLIDER CONTAINER */}
            <div className="group relative min-h-[260px] sm:min-h-[320px] lg:min-h-[300px] lg:flex-[1.4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              {/* SLIDE IMAGES WITH SMOOTH FADE TRANSITION */}
              {SLIDER_IMAGES.map((img, idx) => {
                const isSelected = idx === currentImageIndex;
                return (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isSelected
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover object-center"
                    />
                  </div>
                );
              })}

              {/* SLIDE FLOATING BADGE */}
              <div className="absolute top-3 left-3 z-20">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-md">
                  {SLIDER_IMAGES[currentImageIndex]?.label}
                </span>
              </div>

              {/* NAVIGATION ARROWS (HIGH CONTRAST SOLID BUTTONS) */}
              <button
                onClick={handlePrevImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-lg backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-lg backdrop-blur-md opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* BOTTOM DOT INDICATORS */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full border border-slate-700/50 bg-slate-900/70 px-3 py-1.5 backdrop-blur-md shadow-lg">
                {SLIDER_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Go to image slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-blue-500"
                        : "w-1.5 bg-slate-400 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* BOTTOM TWO CARDS GRID */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:flex-[1.3] min-h-0">
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
                      onClick={handlePrev}
                      aria-label="Previous service"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 transition-colors hover:border-blue-500/40 hover:bg-slate-800 hover:text-white active:scale-95"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={handleNext}
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
      </div>
    </section>
  );
}
