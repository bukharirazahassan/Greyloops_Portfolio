"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Cloud,
  Briefcase,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const baseIndustries = [
  {
    id: "finance",
    title: "Finance",
    subtitle: "Automated Compliance & Security",
    description:
      "Streamline approvals and reconciliations with controlled automations that log actions and keep humans in the loop.",
    image: "/Finance.jpg",
    icon: Landmark,
    tags: ["FinTech", "Compliance", "Security"],
  },
  {
    id: "saas",
    title: "SaaS",
    subtitle: "High-Growth Architecture",
    description:
      "Scale software operations with fault-tolerant cloud engines, real-time analytics, and seamless API integrations.",
    image: "/Saas.jpg",
    icon: Cloud,
    tags: ["Cloud Native", "APIs", "Scalability"],
  },
  {
    id: "agencies",
    title: "Agencies",
    subtitle: "Rapid Deliverables & Execution",
    description:
      "Supercharge custom client builds with modular digital infrastructure and automated production workflows.",
    image: "/Agencies.jpg",
    icon: Briefcase,
    tags: ["White Label", "Custom UI", "Speed"],
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    subtitle: "Conversion-Focused Platforms",
    description:
      "Deliver frictionless shopping experiences with high-speed checkout flows, inventory tracking, and hyper-personalization.",
    image: "/e-commerce.jpg",
    icon: ShoppingBag,
    tags: ["Headless", "Payments", "UX Growth"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "HIPAA-Compliant Solutions",
    description:
      "Protect sensitive data with patient-first portals, secure record synchronization, and compliant clinical software.",
    image: "/Healthcare.jpg",
    icon: HeartPulse,
    tags: ["HIPAA", "Telehealth", "Privacy"],
  },
];

// Duplicated array to achieve continuous infinite scrolling
const infiniteIndustries = [
  ...baseIndustries.map((item) => ({ ...item, uniqueKey: `set1-${item.id}` })),
  ...baseIndustries.map((item) => ({ ...item, uniqueKey: `set2-${item.id}` })),
  ...baseIndustries.map((item) => ({ ...item, uniqueKey: `set3-${item.id}` })),
];

export default function Industries() {
  const [hoveredKey, setHoveredKey] = useState("set1-finance");
  const scrollContainerRef = useRef(null);

  // Infinite Scroll Handler
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 20;
    const scrollAmount = cardWidth + gap;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        if (container.scrollLeft >= (container.scrollWidth * 2) / 3) {
          container.scrollTo({
            left: container.scrollLeft - container.scrollWidth / 3,
            behavior: "instant",
          });
        }
      }, 350);
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        if (container.scrollLeft <= container.scrollWidth / 6) {
          container.scrollTo({
            left: container.scrollLeft + container.scrollWidth / 3,
            behavior: "instant",
          });
        }
      }, 350);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* Global Style Setup */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto w-full max-w-[1650px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Industries We Empower
            </span>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Built For Your{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Industry Standards
              </span>
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              We tailor custom technology, infrastructure, and compliance to fit your sector&apos;s specific demands.
            </p>
          </div>

          {/* Header Info Badge */}
          <div className="flex max-w-md items-center gap-2 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            </span>
            <p className="text-xs font-semibold leading-snug text-zinc-600">
              We tailor every solution to your specific data requirements and compliance regulations.
            </p>
          </div>
        </div>

        {/* 5 Cards Fit in Desktop Section with Infinite Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex w-full items-stretch gap-5 overflow-x-auto scroll-smooth py-4"
        >
          {infiniteIndustries.map((item) => {
            const isHovered = hoveredKey === item.uniqueKey;
            const Icon = item.icon;

            return (
              <div
                key={item.uniqueKey}
                onMouseEnter={() => setHoveredKey(item.uniqueKey)}
                className={`group relative flex w-[280px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 sm:w-[320px] lg:w-[calc(20%-16px)] lg:shrink-0 ${
                  isHovered
                    ? "border-blue-400/80 shadow-2xl shadow-blue-900/20 lg:-translate-y-2"
                    : "border-slate-200/80 shadow-lg shadow-slate-200/50 hover:border-blue-200"
                }`}
                style={{ minHeight: "480px" }}
              >
                {/* Image Overlay Container */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 300px, 20vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isHovered ? "scale-110" : "scale-100 brightness-[0.65]"
                    }`}
                    priority
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isHovered
                        ? "bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40 opacity-95"
                        : "bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/30 opacity-80"
                    }`}
                  />
                </div>

                {/* Top Section */}
                <div className="relative z-10 flex items-start justify-between p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isHovered
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/40 ring-2 ring-white/50"
                        : "bg-white/20 text-white backdrop-blur-md ring-1 ring-white/30"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <span
                    className={`rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      isHovered
                        ? "border border-blue-400/30 bg-blue-500/20 text-blue-200 backdrop-blur-md"
                        : "border border-white/10 bg-slate-900/50 text-slate-300 backdrop-blur-md"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 p-6 pt-0">
                  <div className="mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Information Revealed on Hover */}
                  <motion.div
                    animate={{
                      height: isHovered ? "auto" : "0px",
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mb-4 text-xs font-medium leading-relaxed text-slate-200/90 sm:text-sm">
                      {item.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-200 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-3">
                    <span className="text-xs font-semibold text-white group-hover:text-blue-300">
                      Explore Sector
                    </span>
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                        isHovered
                          ? "translate-x-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons Row */}
        <div className="mt-6 flex items-center justify-end border-t border-slate-200/80 pt-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll Left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all duration-200 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll Right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all duration-200 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}