// src/app/components/IndustryExpertise.jsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const PLACEHOLDER_IMAGE = "/HealthCare_Hero_v1.png";
const FINTECH_IMAGE = "/Fintech_Hero_v1.png";
const ECOMMERCE_IMAGE = "/eCommerce_Hero_v1.png";
const LOGISTICS_IMAGE = "/Logistics_Hero_v1.png";
const EDUCATION_IMAGE = "/Education_Hero_v1.png";
const MANUFACTURING_IMAGE = "/Manufacturing_Hero_v1.png";
const REALESTATE_IMAGE = "/RealEstate_Hero_v1.png";

const industries = [
  { title: "Healthcare", image: PLACEHOLDER_IMAGE },
  { title: "FinTech", image: FINTECH_IMAGE },
  { title: "eCommerce", image: ECOMMERCE_IMAGE },
  { title: "Logistics", image: LOGISTICS_IMAGE },
  { title: "Education", image: EDUCATION_IMAGE },
  { title: "Manufacturing", image: MANUFACTURING_IMAGE },
  { title: "Real Estate", image: REALESTATE_IMAGE },
];

const expertise = [
  "Consulting",
  "AI & ML",
  "Software development",
  "Web development",
  "Mobile app development",
  "DevOps & cloud infrastructure",
];

const GAP = 20;

// How many cards fit in the slider (the fraction leaves a peek of the next card)
function getVisibleCards(windowWidth) {
  if (windowWidth < 640) return 1.25;
  if (windowWidth < 1536) return 2.6;
  return 3.6;
}

export default function IndustryExpertise() {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef(null);
  const animRef = useRef(null);
  const wheelLock = useRef(false);
  const indexRef = useRef(0);

  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [dims, setDims] = useState({ card: 320, step: 340, max: 0, maxIndex: 0 });

  const targetFor = useCallback(
    (i, d = dims) => -Math.min(i * d.step, d.max),
    [dims]
  );

  const goTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(dims.maxIndex, next));
      indexRef.current = clamped;
      setIndex(clamped);

      const transition = reduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 220, damping: 30, mass: 0.9 };

      animRef.current?.stop();
      animRef.current = animate(x, targetFor(clamped), transition);
    },
    [dims, x, targetFor, reduceMotion]
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const vw = el.clientWidth;
      const n = getVisibleCards(window.innerWidth);
      const card = (vw - GAP * (Math.ceil(n) - 1)) / n;
      const step = card + GAP;
      const total = industries.length * card + (industries.length - 1) * GAP;
      const max = Math.max(0, total - vw);
      const maxIndex = max > 0 ? Math.ceil(max / step) : 0;
      const safeIndex = Math.min(indexRef.current, maxIndex);
      indexRef.current = safeIndex;
      setIndex(safeIndex);
      setDims({ card, step, max, maxIndex });
      animRef.current?.stop();
      x.set(-Math.min(safeIndex * step, max));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  const onDragEnd = (_, info) => {
    const projected = x.get() + info.velocity.x * 0.25;
    goTo(Math.round(-projected / dims.step));
  };

  const onWheel = (e) => {
    if (Math.abs(e.deltaX) < 30 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    if (wheelLock.current) return;
    wheelLock.current = true;
    goTo(indexRef.current + Math.sign(e.deltaX));
    setTimeout(() => {
      wheelLock.current = false;
    }, 500);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(indexRef.current + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(indexRef.current - 1);
    }
  };

  const progress = useTransform(x, (v) =>
    dims.max ? 0.14 + 0.86 * Math.min(1, Math.max(0, -v / dims.max)) : 1
  );

  const canPrev = index > 0;
  const canNext = index < dims.maxIndex;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-6 lg:pb-16 lg:pt-4">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        {/* Header row: text on the left, slider arrows on the top right */}
        <div className="flex flex-col gap-5 px-2 sm:px-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur-md sm:text-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              industry.expertise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              <span className="text-slate-900">Industry Expertise.</span>{" "}
              <span className="text-blue-600">Business Impact.</span>
            </motion.h2>
          </div>

          {/* Arrow buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={!canPrev}
              aria-label="Previous industries"
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md ring-1 ring-white/80 backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2.25} />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={!canNext}
              aria-label="Next industries"
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/30 transition-colors duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-white/80 disabled:text-slate-700 disabled:opacity-40 disabled:shadow-md disabled:shadow-slate-900/10"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
            </motion.button>
          </motion.div>
        </div>

        {/* Fixed first card + sliding industry cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-col gap-5 px-2 sm:px-4 lg:flex-row lg:items-stretch"
        >
          {/* Fixed card – light glass theme, stays in place while the slider moves */}
          <div className="relative flex w-full shrink-0 flex-col overflow-hidden rounded-[2rem] bg-white/60 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-xl sm:p-6 lg:mb-[30px] lg:mt-3 lg:w-[25%] 2xl:w-[20%]">
            {/* Glass sheen + soft blue glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-indigo-400/15 blur-3xl" />

            <h3 className="relative text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              What We <span className="text-blue-600">Deliver</span>
            </h3>
            <span className="relative mt-2.5 block h-1 w-9 rounded-full bg-blue-600" />

            <ul className="relative mt-5 flex flex-1 flex-col gap-2.5">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="group flex flex-1 items-center gap-3 rounded-2xl bg-white/80 px-3.5 py-2.5 shadow-xs transition-all duration-300 hover:translate-x-1 hover:bg-blue-50 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-bold leading-snug text-slate-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slider */}
          <div className="min-w-0 flex-1">
            <div
              ref={viewportRef}
              tabIndex={0}
              role="region"
              aria-label="Industries we serve"
              onKeyDown={onKeyDown}
              onWheel={onWheel}
              className="overflow-hidden pb-6 pt-3 focus:outline-none"
            >
              <motion.ul
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -dims.max, right: 0 }}
                dragElastic={0.12}
                dragMomentum={false}
                onDragStart={() => animRef.current?.stop()}
                onDragEnd={onDragEnd}
                className="flex w-max cursor-grab select-none active:cursor-grabbing"
              >
                {industries.map((industry, i) => (
                  <motion.li
                    key={industry.title}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: Math.min(i, 3) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      width: dims.card,
                      marginRight: i === industries.length - 1 ? 0 : GAP,
                    }}
                    className="shrink-0 list-none"
                  >
                    <article className="group relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(37,99,235,0.22)]">
                      <Image
                        src={industry.image}
                        alt={`${industry.title} industry`}
                        fill
                        draggable={false}
                        priority={i < 3}
                        sizes="(min-width: 1536px) 20vw, (min-width: 1024px) 28vw, (min-width: 640px) 38vw, 80vw"
                        className="pointer-events-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Soft bottom fade */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950/50 to-transparent" />

                      {/* Glass label */}
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/15 px-4 py-3 ring-1 ring-white/25 backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600/80">
                        <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                          {industry.title}
                        </h3>
                        <span className="text-xs font-semibold tabular-nums text-white/80">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Progress indicator */}
            <div className="h-1.5 w-full max-w-[14rem] overflow-hidden rounded-full bg-slate-200/80">
              <motion.div
                style={{ scaleX: progress }}
                className="h-full w-full origin-left rounded-full bg-blue-600"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}