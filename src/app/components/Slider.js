// src/app/components/company/Hero.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Bot,
  Cpu,
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Workflow,
  Database,
} from "lucide-react";

/** Time each card + video stays on screen before the next one slides in (ms). */
const SLIDE_INTERVAL_MS = 10000;
/** Keep >= the slowest "out" animation (video, 1100ms) in the <style> block below. */
const COVER_OUT_CLEANUP_MS = 1200;

const slides = [
  {
    id: "digital-systems",
    video: "/Artificial_Intelligence_Video_v1.mp4",
    eyebrow: "AI & emerging technology partner",
    headingDark: "Engineering the Next Generation of",
    headingBlue: "Digital Systems",
    description:
      "Greyloops helps organizations adopt AI and emerging technologies to build intelligent, connected, and scalable digital systems. We combine AI, Machine Learning, data engineering, cloud computing, automation, modern software architecture, and enterprise engineering to transform complex business requirements into practical technology solutions that improve operations, accelerate innovation, and create lasting business value.",
    pills: [
      { label: "Agentic AI", icon: Bot },
      { label: "AI Integration & Automation", icon: Cpu },
      { label: "Web Applications", icon: Globe },
      { label: "Mobile Applications", icon: Smartphone },
    ],
  },
  {
    id: "enterprise",
    video: "/Artificial_Intelligence_Video.mp4",
    eyebrow: "Enterprise digital transformation",
    headingDark: "Empowering Enterprises With",
    headingBlue: "Modern Technology",
    description:
      "Greyloops helps enterprises unlock business potential through transformative digital solutions. We combine strategic thinking, engineering expertise, enterprise technology, AI, cloud, data, automation, cybersecurity, and system integration to modernize operations, connect digital ecosystems, enhance customer experiences, improve agility, and enable scalable growth with lasting business value.",
    pills: [
      { label: "Cloud", icon: Cloud },
      { label: "Data", icon: Database },
      { label: "Cybersecurity", icon: ShieldCheck },
      { label: "System Integration", icon: Workflow },
    ],
  },
];

/**
 * Slide indicator + timer.
 * The timer runs in JS (not on CSS animation events), so it can never
 * restart or loop by accident. It only re-renders this small component.
 */
function SlideProgress({ active, paused, onComplete, onSelect }) {
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  // keep the latest callback (refs are only written in effects, never during render)
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  // This component is re-mounted for every slide (see key= below), so state
  // and elapsed time always start from zero. The effect only handles the timer.
  useEffect(() => {
    if (paused) return;

    let raf;

    // reduced motion: no auto-advance, just show a full bar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(raf);
    }

    let last = performance.now();
    const tick = (now) => {
      // cap the step so a background tab can't skip ahead
      elapsedRef.current += Math.min(now - last, 100);
      last = now;
      const p = Math.min(elapsedRef.current / SLIDE_INTERVAL_MS, 1);
      setProgress(p);
      if (p >= 1) {
        onCompleteRef.current();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <div
      className="mt-5 flex items-center gap-2 pl-2 sm:pl-4 lg:pl-16"
      role="group"
      aria-label="Hero slides"
    >
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Show slide ${i + 1}: ${slide.headingDark} ${slide.headingBlue}`}
          aria-current={i === active}
          className="relative h-1.5 w-14 overflow-hidden rounded-full bg-slate-900/15 transition-colors hover:bg-slate-900/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span
            className="absolute inset-y-0 left-0 rounded-full bg-blue-600"
            style={{ width: i === active ? `${progress * 100}%` : "0%" }}
          />
        </button>
      ))}
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null); // slide currently being covered
  const [hasMoved, setHasMoved] = useState(false); // no entrance animation on first paint
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef([]);

  const goTo = (index) => {
    if (index === active) return;
    setPrev(active);
    setActive(index);
    setHasMoved(true);
  };
  const next = () => goTo((active + 1) % slides.length);

  // Once the new slide has covered the old one, hide the old one.
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), COVER_OUT_CLEANUP_MS);
    return () => clearTimeout(t);
  }, [prev, active]);

  // The active video restarts from the beginning and plays
  useEffect(() => {
    const v = videoRefs.current[active];
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, [active]);

  // Videos that are no longer visible are paused to save CPU/battery
  useEffect(() => {
    if (prev !== null) return;
    videoRefs.current.forEach((v, i) => {
      if (v && i !== active) v.pause();
    });
  }, [prev, active]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      <style jsx global>{`
        /* ───── Cards ───── */
        /* New card flies in from the left and settles */
        @keyframes hero-slide-in {
          from {
            opacity: 0;
            transform: translateX(-120%) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        /* Old card sinks back and fades while it is being covered */
        @keyframes hero-cover-out {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(3%) scale(0.93);
          }
        }

        /* "backwards" = the card is only held at the start pose during its delay;
           after the animation it returns to its normal style (always visible) */
        .hero-slide.is-in .hero-card {
          animation: hero-slide-in 900ms cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }
        /* stair cascade: the second step follows the first */
        .hero-slide.is-in .hero-card-2 {
          animation-delay: 150ms;
        }
        .hero-slide.is-out .hero-card {
          animation: hero-cover-out 800ms ease-in forwards;
        }

        /* ───── Videos ───── */
        /* New video is revealed from the left (wipe) while it zooms out to rest */
        @keyframes hero-video-in {
          from {
            clip-path: inset(0 100% 0 0);
            transform: scale(1.14);
          }
          to {
            clip-path: inset(0 0 0 0);
            transform: scale(1);
          }
        }
        /* Old video slowly pushes in and dims under the wipe */
        @keyframes hero-video-out {
          from {
            transform: scale(1);
            filter: brightness(1);
          }
          to {
            transform: scale(1.07);
            filter: brightness(0.6);
          }
        }
        /* Light edge that travels with the wipe */
        @keyframes hero-sheen {
          from {
            left: -8%;
            opacity: 1;
          }
          to {
            left: 100%;
            opacity: 0;
          }
        }

        .hero-vid.is-in {
          animation: hero-video-in 1100ms cubic-bezier(0.77, 0, 0.18, 1) backwards;
        }
        .hero-vid.is-out {
          animation: hero-video-out 1100ms cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        .hero-sheen {
          animation: hero-sheen 1100ms cubic-bezier(0.77, 0, 0.18, 1) forwards;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.45),
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-slide.is-in .hero-card,
          .hero-slide.is-out .hero-card,
          .hero-vid.is-in,
          .hero-vid.is-out {
            animation: none;
          }
          .hero-slide.is-out,
          .hero-vid.is-out {
            visibility: hidden;
          }
          .hero-sheen {
            display: none;
          }
        }
      `}</style>

      {/* Standard Light Theme: Background dots pattern matching DeliverTransformation */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Standard Light Theme: Soft blue shaded glowing circles background accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      {/* Section fills the desktop viewport below the 80px header */}
      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 py-6 sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-8">
        {/* ───── Video card: right side, full height. Each slide has its own video ───── */}
        <div className="relative z-0 h-72 w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:h-96 lg:absolute lg:inset-y-8 lg:right-8 lg:h-auto lg:w-[72%] lg:rounded-[2.5rem]">
          {slides.map((slide, i) => {
            const isActive = i === active;
            const isPrev = i === prev;

            // before the first slide change there is nothing to animate
            const state = isActive
              ? `z-20 ${hasMoved ? "is-in" : ""}`
              : isPrev
                ? "is-out z-10"
                : "invisible z-0";

            return (
              <video
                key={slide.id}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                autoPlay={i === 0}
                loop
                muted
                playsInline
                preload={i === 0 ? "auto" : "metadata"}
                aria-hidden={!isActive}
                className={`hero-vid absolute inset-0 h-full w-full object-cover object-center ${state}`}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            );
          })}

          {/* light edge that sweeps across with each video change */}
          {hasMoved && (
            <div
              key={active}
              aria-hidden="true"
              className="hero-sheen pointer-events-none absolute inset-y-0 z-30 w-24"
            />
          )}
        </div>

        {/* ───── Sliding glass stair cards (left) ───── */}
        <div
          className="relative z-20 -mt-12 flex w-full flex-col px-2 sm:px-6 lg:my-auto lg:mt-auto lg:w-[46%] lg:px-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* All slides share one grid cell, so the area never changes height */}
          <div className="grid">
            {slides.map((slide, i) => {
              const isActive = i === active;
              const isPrev = i === prev;
              const Heading = i === 0 ? "h1" : "h2";

              // before the first slide change there is nothing to animate
              const state = isActive
                ? `z-20 ${hasMoved ? "is-in" : ""}`
                : isPrev
                  ? "is-out z-10"
                  : "invisible z-0 pointer-events-none";

              return (
                <div
                  key={slide.id}
                  aria-hidden={!isActive}
                  className={`hero-slide col-start-1 row-start-1 flex flex-col ${state}`}
                >
                  {/* Step 1: main message (crystal glass, no border) */}
                  <div className="hero-card rounded-[1.75rem] bg-white/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150 sm:p-10 xl:p-12 lg:rounded-[2rem]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 sm:text-sm">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                      {slide.eyebrow}
                    </span>

                    {/* Heading: two solid colors only, no gradient */}
                    <Heading className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl xl:text-5xl">
                      {slide.headingDark}{" "}
                      <span className="text-blue-600">{slide.headingBlue}</span>
                    </Heading>

                    <p className="mt-5 text-sm font-medium leading-relaxed text-slate-800 sm:text-base xl:text-[1.05rem]">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href="/contact"
                        tabIndex={isActive ? 0 : -1}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Talk to an Expert
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href="/services"
                        tabIndex={isActive ? 0 : -1}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                      >
                        Explore Our Work
                        <Compass className="h-4 w-4 text-slate-600" />
                      </Link>
                    </div>
                  </div>

                  {/* Step 2: services (glass, no border), stepped in and down */}
                  <div className="hero-card hero-card-2 ml-6 mt-3 rounded-[1.5rem] bg-white/65 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-2xl backdrop-saturate-150 sm:ml-10 sm:p-5 lg:ml-16 lg:mt-4">
                    {/* One row of 4 equal tiles (same width and height) in both cards */}
                    <div className="grid auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-4">
                      {slide.pills.map(({ label, icon: Icon }) => (
                        <div
                          key={label}
                          className="flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/80 px-2 py-3 text-center text-xs font-medium leading-tight text-slate-900 shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-blue-700"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-blue-600" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <SlideProgress
            key={active}
            active={active}
            paused={paused}
            onComplete={next}
            onSelect={goTo}
          />
        </div>
      </div>
    </section>
  );
}