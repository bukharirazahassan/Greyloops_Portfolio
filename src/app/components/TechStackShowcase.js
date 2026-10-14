// src/app/components/TechStackShowcase.jsx
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
  SiGraphql,
  SiGrafana,
  SiVuedotjs,
  SiNestjs,
} from "react-icons/si";

const stack = [
  { id: "U1", name: "React", role: "UI Library", Icon: SiReact, color: "#0088CC" },
  { id: "U2", name: "Next.js", role: "Web Framework", Icon: SiNextdotjs, color: "#0F172A" },
  { id: "U3", name: "Node.js", role: "Runtime", Icon: SiNodedotjs, color: "#16A34A" },
  { id: "U4", name: "Python", role: "Language", Icon: SiPython, color: "#2563EB" },
  { id: "U5", name: "Angular", role: "SPA Framework", Icon: SiAngular, color: "#DC2626" },
  { id: "U6", name: "Vue.js", role: "Frontend Framework", Icon: SiVuedotjs, color: "#41B883" },
  { id: "U7", name: "NestJS", role: "Backend Framework", Icon: SiNestjs, color: "#E0234E" },
  { id: "U8", name: "GraphQL", role: "API Query Language", Icon: SiGraphql, color: "#E535AB" },
  { id: "D1", name: "MongoDB", role: "NoSQL Database", Icon: SiMongodb, color: "#059669" },
  { id: "D2", name: "MySQL", role: "SQL Database", Icon: SiMysql, color: "#0284C7" },
  { id: "U9", name: ".NET Core", role: "Framework", Icon: SiDotnet, color: "#7C3AED" },
  { id: "M1", name: "Android Studio", role: "Native IDE", Icon: SiAndroidstudio, color: "#16A34A" },
  { id: "M2", name: "React Native", role: "Mobile Framework", Icon: SiReact, color: "#0088CC" },
  { id: "O1", name: "Grafana", role: "Monitoring & Observability", Icon: SiGrafana, color: "#F46800" },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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
      className="group relative flex flex-col justify-between overflow-hidden bg-white/70 px-5 py-6 backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-xl sm:px-6 sm:py-7"
    >
      {/* Top light edge highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100" />

      {/* Ambient dot matrix inside card */}
      <span
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.18]"
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
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100/80 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md"
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
    <section className="relative w-full overflow-hidden bg-slate-50 py-6 lg:pb-16 lg:pt-4">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        
        {/* Header aligned to the left with compact top spacing */}
        <div className="flex flex-col items-start px-2 text-left sm:px-4">
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
            className="mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="text-slate-900">Modern Technologies.</span>{" "}
            <span className="text-blue-600">Smarter Solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
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
            className="mt-3 font-mono text-xs font-semibold tracking-widest text-slate-500"
          >
            350+ SPECIALISTS&nbsp;&nbsp;·&nbsp;&nbsp;14 CORE TECHNOLOGIES&nbsp;&nbsp;·&nbsp;&nbsp;24/7 SUPPORT
          </motion.p>
        </div>

        {/* Full-width responsive Grid container */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 mx-auto mt-8 grid w-full grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] border border-blue-100 bg-blue-100/60 p-px shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {stack.map((item) => (
            <ComponentCell key={item.id} {...item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}