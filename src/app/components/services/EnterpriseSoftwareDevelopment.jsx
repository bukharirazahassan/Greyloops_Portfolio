// src/app/components/services/EnterpriseSoftwareDevelopment.jsx

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import CoreCapabilities from "../../components/services/EnterpriseServices/CoreCapabilities";
import CoreBusinessPlatforms from "../../components/services/EnterpriseServices/EnterpriseServices";
import EnterpriseDevelopmentServices from "../../components/services/EnterpriseServices/EnterpriseDevelopmentServices";
import IndustrySpecificEnterpriseSystems from "../../components/services/EnterpriseServices/IndustrySpecificEnterpriseSystems";

const slides = [
  {
    id: "erp",
    heading: [
      { text: "Streamline Operations with ", accent: false },
      { text: "Enterprise ERP Solutions", accent: true },
    ],
    description:
      "Bring finance, operations, supply chain, and inventory management into a single, unified ERP platform engineered for enterprise scale. We design workflows that eliminate manual handoffs, surface real-time operational visibility, and give leadership the data confidence needed to plan, forecast, and grow with precision.",
    image: "/images/services/erpHeader.jpg",
    tab: "ERP SOLUTIONS",
    caption:
      "Unify core business operations, automate workflows, and gain real-time visibility across your enterprise.",
  },
  {
    id: "crm",
    heading: [
      { text: "Build Stronger Relationships with ", accent: false },
      { text: "Enterprise CRM", accent: true },
    ],
    description:
      "Connect customer data, sales pipelines, marketing touchpoints, and service operations inside one centralized CRM built for how modern teams actually work. We help you capture every customer interaction, remove silos between departments, and turn scattered data into decisions your revenue teams can act on immediately.",
    image: "/images/services/CRMheader_v2.jpg",
    tab: "CRM SOLUTIONS",
    caption:
      "Connect customer, sales, marketing, and service data to create stronger and more consistent customer experiences.",
  },
  {
    id: "hr",
    heading: [
      { text: "Empower Your Workforce with ", accent: false },
      { text: "Modern HR Technology", accent: true },
    ],
    description:
      "Replace fragmented spreadsheets and manual processes with integrated HR technology built around your people. From employee records and attendance to performance reviews, leave management, and payroll workflows, we deliver a connected platform that gives HR teams clarity and employees a genuinely better experience.",
    image: "/images/services/HRHeader_v2.jpg",
    tab: "HR MANAGEMENT",
    caption:
      "Simplify workforce operations, improve employee visibility, and bring people processes into one connected platform.",
  },
  {
    id: "consulting",
    heading: [
      { text: "Transform Enterprise Technology with ", accent: false },
      { text: "Strategic Consulting", accent: true },
    ],
    description:
      "We assess your current technology landscape end to end, identify where operational friction and legacy debt are slowing you down, and translate those findings into a practical, sequenced roadmap for architecture, system integration, and modernization — built around outcomes your business can measure.",
    image: "/images/services/header_enterprise_technology_consulting.png",
    tab: "TECHNOLOGY CONSULTING",
    caption:
      "Turn complex technology challenges into a practical roadmap for modernization, integration, and long-term growth.",
  },
];

const AUTOPLAY_MS = 6000;

export default function ServicesHeroSlider() {
  const [current, setCurrent] = useState(0);
  const autoplayTimeoutRef = useRef(null);

  const goTo = useCallback((index) => {
    const normalized =
      ((index % slides.length) + slides.length) % slides.length;
    setCurrent(normalized);
  }, []);

  const nextSlide = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const previousSlide = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide]);

  useEffect(() => {
    autoplayTimeoutRef.current = setTimeout(() => {
      goTo(current + 1);
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayTimeoutRef.current) clearTimeout(autoplayTimeoutRef.current);
    };
  }, [current, goTo]);

  return (
    <div className="w-full bg-white">
      {/* HERO SLIDER */}
      <section className="relative mx-auto h-[700px] w-full max-w-[1920px] overflow-hidden bg-white">
        <style jsx global>{`
          @keyframes serviceHeroProgress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          @keyframes serviceHeroCaption {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* SLIDE BACKGROUND LAYERS */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <div
              className={`absolute inset-0 ${
                index === current ? "animate-kenburns" : ""
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.tab}
                width={1920}
                height={700}
                priority={index === 0}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent sm:via-white/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent sm:hidden" />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-0 z-[12] opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 85% 75% at 20% 40%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 20% 40%, black 25%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute left-10 top-16 z-[15] h-72 w-72 animate-float rounded-full bg-blue-300/35 blur-3xl" />
        <div
          className="pointer-events-none absolute bottom-24 left-52 z-[15] h-56 w-56 animate-float rounded-full bg-indigo-200/30 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        {/* CONTROLS */}
        <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3 sm:right-8 lg:right-10">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-md ring-1 ring-slate-200 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-md ring-1 ring-slate-200 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 flex h-full items-center px-6 pb-20 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <span
              key={`badge-${current}`}
              className="relative mb-5 inline-flex animate-fade-up items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span className="relative z-10">{slides[current].tab}</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
            </span>

            <h1
              key={`heading-${current}`}
              className="mb-6 animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {slides[current].heading.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.accent
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                  }
                >
                  {part.text}
                </span>
              ))}
            </h1>

            <p
              key={`sub-${current}`}
              className="mb-7 animate-fade-up text-base leading-relaxed text-zinc-600 [animation-delay:100ms] sm:text-lg"
            >
              {slides[current].description}
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM INFO BAR */}
      <section className="relative z-40 w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 70% 100% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 100% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1920px] px-6 py-5 sm:px-10 sm:py-6 md:px-16 lg:px-24">
          <div key={`caption-${current}`} className="animate-service-hero-caption">
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/90 shadow-sm backdrop-blur-sm transition-all duration-500">
              <span
                key={`progress-fill-${current}`}
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-0 bg-gradient-to-r from-blue-50 via-blue-100/80 to-blue-200/60"
                style={{
                  animation: `serviceHeroProgress ${AUTOPLAY_MS}ms linear forwards`,
                }}
              />

              <div className="relative z-10 flex w-full items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/20">
                  {String(current + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                      {slides[current].tab}
                    </span>
                    <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                    <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:block">
                      Enterprise Technology
                    </span>
                  </div>

                  <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                    {slides[current].caption}
                  </p>
                </div>

                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreCapabilities />
      <CoreBusinessPlatforms />
      <EnterpriseDevelopmentServices />
      <IndustrySpecificEnterpriseSystems />
    </div>
  );
}