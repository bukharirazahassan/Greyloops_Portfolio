"use client";

import { useState } from "react";
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

const techs = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: ".NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "Android Studio", Icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
];

const techsRow2 = [...techs.slice(5), ...techs.slice(0, 5)];

const stats = [
  { value: "350+", label: "Specialized Experts" },
  { value: "10+", label: "Core Technologies" },
  { value: "24/7", label: "Engineering Support" },
];

// Large background icons for texture — decorative only, each drifting
// slowly and pulsing in opacity so the background feels alive rather
// than a static image.
const floatingIcons = [
  { Icon: SiReact, top: "8%", left: "6%", size: 100, rotate: -12, color: "#61DAFB", duration: 9 },
  { Icon: SiNodedotjs, top: "64%", left: "4%", size: 80, rotate: 10, color: "#339933", duration: 11 },
  { Icon: SiAngular, top: "10%", left: "88%", size: 90, rotate: 8, color: "#DD0031", duration: 8 },
  { Icon: SiMongodb, top: "66%", left: "90%", size: 110, rotate: -8, color: "#47A248", duration: 12 },
  { Icon: SiNextdotjs, top: "38%", left: "50%", size: 70, rotate: 6, color: "#000000", duration: 10 },
  { Icon: SiDotnet, top: "20%", left: "35%", size: 60, rotate: -6, color: "#512BD4", duration: 9.5 },
  { Icon: SiMysql, top: "78%", left: "60%", size: 65, rotate: 12, color: "#4479A1", duration: 10.5 },
  { Icon: SiPython, top: "50%", left: "12%", size: 75, rotate: -10, color: "#3776AB", duration: 8.5 },
];

function TechPill({ name, Icon, color }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}14` }}
      >
        <Icon className="h-4.5 w-4.5" style={{ color }} />
      </span>
      <span className="whitespace-nowrap text-sm font-bold tracking-tight text-slate-900">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 32 }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Large soft blurred ambient circles, aligned with Slider theme */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Floating tech-icon silhouettes — slow drift + opacity pulse */}
      {floatingIcons.map(({ Icon, top, left, size, rotate, color, duration }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{ top, left }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <Icon
            style={{
              width: size,
              height: size,
              color,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
        >
          Our Tech Stack
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Technologies We{" "}
          </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Use
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-base leading-relaxed text-zinc-600 sm:text-lg"
        >
          Hire from our pool of 350+ specialized experts in web, mobile, and
          software engineering, specializing in the latest technologies and
          frameworks, ready to scale your development teams effortlessly.
        </motion.p>

        {/* Quick stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              {i > 0 && <span className="hidden h-8 w-px bg-slate-200 sm:block" />}
              <div className="text-left">
                <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative space-y-4 border-y border-slate-100 py-8">
        <MarqueeRow items={techs} direction="left" speed={34} />
        <MarqueeRow items={techsRow2} direction="right" speed={38} />
      </div>
    </section>
  );
}