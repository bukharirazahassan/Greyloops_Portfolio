"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiAndroidstudio,
  SiPython,
} from "react-icons/si";

const stack = [
  { id: "U1", name: "React", role: "UI Library", Icon: SiReact, color: "#0088CC" },
  { id: "U2", name: "Next.js", role: "Web Framework", Icon: SiNextdotjs, color: "#0F172A" },
  { id: "U3", name: "Node.js", role: "Runtime", Icon: SiNodedotjs, color: "#16A34A" },
  { id: "U4", name: "Python", role: "Language", Icon: SiPython, color: "#2563EB" },
  { id: "U5", name: "Angular", role: "SPA Framework", Icon: SiAngular, color: "#DC2626" },
  { id: "D1", name: "MongoDB", role: "NoSQL Database", Icon: SiMongodb, color: "#059669" },
  { id: "D2", name: "MySQL", role: "SQL Database", Icon: SiMysql, color: "#0284C7" },
  { id: "U6", name: ".NET Core", role: "Framework", Icon: SiDotnet, color: "#7C3AED" },
  { id: "M1", name: "Android Studio", role: "Native IDE", Icon: SiAndroidstudio, color: "#16A34A" },
  { id: "M2", name: "React Native", role: "Mobile Framework", Icon: SiReact, color: "#0088CC" },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function ComponentCell({ id, name, role, Icon, color }) {
  return (
    <motion.div
      variants={cellVariants}
      className="group relative flex flex-col justify-between overflow-hidden bg-white/80 px-5 py-6 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl sm:px-6 sm:py-7"
    >
      {/* Top light edge highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100" />

      {/* Ambient dot matrix inside card */}
      <span
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.10] transition-opacity duration-300 group-hover:opacity-[0.22]"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* PCB designator ID */}
      <span className="relative z-10 font-mono text-[11px] font-bold tracking-wider text-blue-500/70 transition-colors duration-300 group-hover:text-blue-600">
        {id}
      </span>

      {/* Subtle brand color glow on hover */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(150px circle at 50% 35%, ${color}15, transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 py-4">
        {/* Card Icon Container */}
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md"
          style={{
            boxShadow: `0 8px 24px -8px ${color}25`,
          }}
        >
          <Icon className="h-8 w-8 transition-transform duration-300" style={{ color }} />
        </div>

        <div className="text-center">
          <p className="text-sm font-bold text-slate-900 sm:text-[15px]">{name}</p>
          <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">
            {role}
          </p>
        </div>
      </div>

      {/* Bottom accent indicator */}
      <div className="relative z-10">
        <span className="block h-[2px] w-6 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-10" />
        <span
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-10"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStackShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-slate-50 py-20 sm:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-100/50 blur-[160px]" />
      <div className="pointer-events-none absolute right-[8%] top-0 z-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-sky-100/50 blur-[120px]" />

      {/* Background dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.20]"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white px-4 py-1.5 font-mono text-xs font-semibold tracking-wide text-blue-700 shadow-xs"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          stack.config
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Technologies We{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Use
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Hire from our pool of specialized experts in web, mobile, and
          software engineering — fluent in the frameworks and languages
          that ship production systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-14 font-mono text-xs font-semibold tracking-widest text-slate-500"
        >
          350+ SPECIALISTS&nbsp;&nbsp;·&nbsp;&nbsp;10 CORE TECHNOLOGIES&nbsp;&nbsp;·&nbsp;&nbsp;24/7 SUPPORT
        </motion.p>
      </div>

      {/* Grid container with clean white border divider instead of slate-200 */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-blue-100 bg-blue-100/60 p-px shadow-xl sm:grid-cols-3 lg:grid-cols-5"
      >
        {stack.map((item) => (
          <ComponentCell key={item.id} {...item} />
        ))}
      </motion.div>
    </section>
  );
}