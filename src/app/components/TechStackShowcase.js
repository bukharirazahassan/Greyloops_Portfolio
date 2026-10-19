// src/app/components/TechStackShowcase.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  SiAndroidstudio,
  SiAngular,
  SiDotnet,
  SiGraphql,
  SiGrafana,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";

const CATEGORIES = ["All", "Frontend", "Backend", "Mobile", "Database", "Observability"];

const TECHS = [
  { name: "React", label: "UI Library", category: "Frontend", icon: SiReact, color: "#149ECA" },
  { name: "Next.js", label: "Web Framework", category: "Frontend", icon: SiNextdotjs, color: "#0F172A" },
  { name: "Angular", label: "SPA Framework", category: "Frontend", icon: SiAngular, color: "#DD0031" },
  { name: "Vue.js", label: "Frontend Framework", category: "Frontend", icon: SiVuedotjs, color: "#35A978" },
  { name: "Node.js", label: "Runtime", category: "Backend", icon: SiNodedotjs, color: "#539E43" },
  { name: "Python", label: "Language", category: "Backend", icon: SiPython, color: "#3776AB" },
  { name: "NestJS", label: "Backend Framework", category: "Backend", icon: SiNestjs, color: "#E0234E" },
  { name: ".NET Core", label: "Framework", category: "Backend", icon: SiDotnet, color: "#512BD4" },
  { name: "GraphQL", label: "API Query Language", category: "Backend", icon: SiGraphql, color: "#E10098" },
  { name: "Android Studio", label: "Native IDE", category: "Mobile", icon: SiAndroidstudio, color: "#2F9E5B" },
  { name: "React Native", label: "Mobile Framework", category: "Mobile", icon: SiReact, color: "#149ECA" },
  { name: "MongoDB", label: "NoSQL Database", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", label: "SQL Database", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "Grafana", label: "Monitoring & Observability", category: "Observability", icon: SiGrafana, color: "#F46800" },
];

const STATS = [
  { value: 350, suffix: "+", label: "Specialists" },
  { value: 14, suffix: "", label: "Core technologies" },
  { value: null, text: "24/7", label: "Support" },
];

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: reduceMotion ? 0 : 1.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, to, value, reduceMotion]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function TechStackShowcase() {
  const [active, setActive] = useState("All");
  const visible = TECHS.filter((t) => active === "All" || t.category === active);

  const countFor = (cat) =>
    cat === "All" ? TECHS.length : TECHS.filter((t) => t.category === cat).length;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-6 lg:pb-16 lg:pt-4">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 px-2 sm:px-4 lg:grid-cols-12 lg:gap-12">
          {/* ───────── Left: intro, stats, CTA ───────── */}
          <div className="flex flex-col items-start text-left lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur-md sm:text-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              stack.config
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              <span className="block text-slate-900">Modern Technologies.</span>
              <span className="block text-blue-600">Smarter Solutions.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
            >
              Hire from our pool of specialized experts in web, mobile, and software engineering — fluent in the frameworks and languages that ship production systems.
            </motion.p>

            {/* Added technology image right under description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-5 w-full max-w-xl overflow-hidden rounded-2xl bg-white/60 p-2 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-md"
            >
              <Image
                src="/technology_v1.png"
                alt="Technology Stack Overview"
                width={600}
                height={350}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </motion.div>

            {/* Stat tiles */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-7 grid w-full max-w-xl grid-cols-3 gap-3"
            >
              {STATS.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl bg-white/80 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] ring-1 ring-white/80 backdrop-blur-xl"
                >
                  <p className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    {stat.value !== null ? (
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.text
                    )}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-snug text-slate-500">
                    {stat.label}
                  </p>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-7"
            >
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-2.5 rounded-xl bg-blue-600 pl-5 pr-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Hire Our Experts
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ───────── Right: filter + tech grid ───────── */}
          <div className="lg:col-span-8">
            {/* Filter pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="group"
              aria-label="Filter technologies by category"
            >
              {CATEGORIES.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isActive
                        ? "text-white"
                        : "bg-white/80 text-slate-700 shadow-xs ring-1 ring-white/80 backdrop-blur-md hover:bg-white hover:text-blue-600"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-filter-pill"
                        className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-600/30"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {cat}
                      <span
                        className={`rounded-full px-1.5 text-[11px] font-bold tabular-nums ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {countFor(cat)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Tech cards */}
            <motion.ul
              layout
              className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {visible.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.li
                      key={tech.name}
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(i, 8) * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/80 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.06)] ring-1 ring-white/80 backdrop-blur-xl transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_50px_rgba(37,99,235,0.14)] sm:p-5"
                    >
                      {/* Brand-colour glow on hover */}
                      <div
                        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                        style={{ backgroundColor: tech.color }}
                      />

                      <div className="relative flex items-start justify-between">
                        <span
                          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: tech.color }}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-[11px] font-semibold tabular-nums text-slate-300">
                          {String(TECHS.indexOf(tech) + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="relative mt-4 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                        {tech.name}
                      </h3>
                      <p className="relative mt-0.5 text-xs font-medium leading-snug text-slate-500 sm:text-[13px]">
                        {tech.label}
                      </p>

                      {/* Accent line that grows on hover */}
                      <span
                        className="relative mt-4 block h-1 w-6 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{ backgroundColor: tech.color, opacity: 0.85 }}
                      />
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}