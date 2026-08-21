"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: "software-engineering",
    title: ["SOFTWARE", "ENGINEERING"],
    description:
      "From cloud computing and embedded systems to legacy modernization and enterprise platforms, we deliver scalable industry-specific solutions that meet the highest quality standards.",
    image: "/images/services/UIDevelopment.png",
    tab: "SOFTWARE ENGINEERING",
  },
  {
    id: "product-design",
    title: ["PRODUCT", "DESIGN"],
    description:
      "Our design team combines research, business analysis, testing, and creativity to craft user-centered products that drive engagement, streamline workflows, and stand out in the market.",
    image: "/images/services/WireframingDesign.png",
    tab: "PRODUCT DESIGN",
  },
  {
    id: "data-science-ai",
    title: ["DATA SCIENCE", "& AI"],
    description:
      "Leverage predictive models, generative AI, and intelligent automation to gain more valuable insights, facilitate your decisions, and boost your business value.",
    image: "/images/services/PipelineSetup.png",
    tab: "DATA SCIENCE & AI",
  },
  {
    id: "consulting",
    title: ["CONSULTING"],
    description:
      "We help you define product strategy, validate ideas, and select the right architecture and tools, ensuring your investments are aligned with long-term growth.",
    image: "/images/services/WireframingDesign.png",
    tab: "CONSULTING",
  },
];

const AUTOPLAY_MS = 10000;

export default function ServicesHeroSlider() {
  const [current, setCurrent] = useState(0);
  const autoplayTimeoutRef = useRef(null);

  /*
   * ============================================================
   * GO TO
   * ============================================================
   */
  const goTo = useCallback((index) => {
    const normalized = ((index % slides.length) + slides.length) % slides.length;
    setCurrent(normalized);
  }, []);

  const nextSlide = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const previousSlide = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  const selectSlide = useCallback(
    (index) => {
      goTo(index);
    },
    [goTo]
  );

  /*
   * ============================================================
   * KEYBOARD NAVIGATION
   * ============================================================
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }
      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide]);

  /*
   * ============================================================
   * CONTINUOUS AUTOPLAY
   * ============================================================
   */
  useEffect(() => {
    autoplayTimeoutRef.current = setTimeout(() => {
      goTo(current + 1);
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [current, goTo]);

  return (
    <section className="blog-font relative w-full overflow-hidden">
      {/* Exact Google Fonts import & CSS classes from BlogSection */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .blog-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .blog-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
        @keyframes serviceHeroProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Main Slider Container */}
      <div
        className="relative h-[85vh] min-h-[550px] max-h-[850px] lg:h-[90vh] w-full overflow-hidden bg-slate-950"
        aria-label="Our services"
      >
        {/* =========================================================
            BACKGROUND STACK
            ========================================================= */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => {
            const active = index === current;

            return (
              <div
                key={slide.id}
                aria-hidden={!active}
                className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.tab}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                    active ? "scale-100" : "scale-110"
                  }`}
                />
              </div>
            );
          })}

          {/* Overlays */}
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/30" />
        </div>

        {/* =========================================================
            PREV / NEXT NAVIGATION
            ========================================================= */}
        <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3 sm:right-8 lg:right-10">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous service"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-600 sm:h-12 sm:w-12"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-600 sm:h-12 sm:w-12"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* =========================================================
            CONTENT STACK
            ========================================================= */}
        <div className="relative z-20 flex h-full w-full items-end px-5 pb-20 pt-12 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28 lg:pr-28">
          <div className="relative w-full max-w-3xl min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]">
            {slides.map((slide, index) => {
              const active = index === current;

              return (
                <div
                  key={slide.id}
                  aria-hidden={!active}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active
                      ? "relative translate-y-0 opacity-100"
                      : "pointer-events-none absolute inset-0 translate-y-4 opacity-0"
                  }`}
                >
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 sm:mb-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5" />
                    {slide.tab}
                  </span>

                  {/* Heading styled identically to BlogSection heading */}
                  <h1 className="blog-display mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {slide.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>

                  <p className="max-w-[560px] text-xs leading-5 text-slate-200 sm:text-base sm:leading-7 lg:text-[16px]">
                    {slide.description}
                  </p>

                  <a
                    href="#services"
                    className="mt-5 inline-flex min-w-[150px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/40 sm:mt-6 sm:min-w-[170px] sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    Learn More
                  </a>

                  <div className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-3.5 text-xs font-semibold text-slate-300 sm:mt-7 sm:flex sm:pt-4">
                    <span className="text-white">AWS Partner</span>
                    <span>Clutch ★★★★★</span>
                    <span>ISO 9001:2015</span>
                    <span>ISO 27001:2013</span>
                    <span className="hidden lg:inline">Forbes Technology Council</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SEGMENTED PROGRESS BAR NAV
            ========================================================= */}
        <div className="absolute inset-x-0 bottom-0 z-30 px-5 pb-4 sm:px-10 sm:pb-5 lg:px-16 lg:pb-6">
          <div className="flex w-full gap-2 sm:gap-3">
            {slides.map((slide, index) => {
              const active = index === current;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => selectSlide(index)}
                  aria-current={active ? "true" : undefined}
                  aria-label={`Open ${slide.tab}`}
                  className="group flex flex-1 flex-col items-start gap-1.5 text-left"
                >
                  <span className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/20">
                    <span
                      className={`absolute inset-y-0 left-0 block h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300 transition-[width] duration-300 ${
                        active ? "" : "w-0 group-hover:w-full group-hover:bg-white/40"
                      }`}
                      style={{
                        width: active ? "100%" : undefined,
                        animationName: active ? "serviceHeroProgress" : "none",
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationTimingFunction: "linear",
                        animationPlayState: "running",
                      }}
                    />
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 sm:text-xs ${
                      active ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    <span className="hidden sm:inline">{slide.tab}</span>
                    <span className="sm:hidden">0{index + 1}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}