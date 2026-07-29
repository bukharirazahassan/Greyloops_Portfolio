"use client";

import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiAndroidstudio,
} from "react-icons/si";

const techs = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: ".NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "Android Studio", Icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
];

const techsRow2 = [...techs.slice(4), ...techs.slice(0, 4)];

// Large background icons for texture — decorative only, tinted with
// their real brand color at low opacity so they're recognizable
// without competing with the foreground content
const floatingIcons = [
  { Icon: SiReact, top: "8%", left: "6%", size: 100, rotate: -12, color: "#61DAFB" },
  { Icon: SiNodedotjs, top: "64%", left: "4%", size: 80, rotate: 10, color: "#339933" },
  { Icon: SiAngular, top: "10%", left: "88%", size: 90, rotate: 8, color: "#DD0031" },
  { Icon: SiMongodb, top: "66%", left: "90%", size: 110, rotate: -8, color: "#47A248" },
  { Icon: SiNextdotjs, top: "38%", left: "50%", size: 70, rotate: 6, color: "#000000" },
  { Icon: SiDotnet, top: "20%", left: "35%", size: 60, rotate: -6, color: "#512BD4" },
  { Icon: SiMysql, top: "78%", left: "60%", size: 65, rotate: 12, color: "#4479A1" },
];

function TechPill({ name, Icon, color }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-xl border border-zinc-200 bg-white/90 backdrop-blur-sm px-5 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
      <Icon className="h-5 w-5 shrink-0" style={{ color }} />
      <span className="whitespace-nowrap text-sm font-bold text-zinc-900">
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Large soft blurred circles, matching the rest of the site */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Floating tech-icon silhouettes — visible but soft, tinted with brand color */}
      {floatingIcons.map(({ Icon, top, left, size, rotate, color }, i) => (
        <Icon
          key={i}
          className="pointer-events-none absolute opacity-[0.16]"
          style={{
            top,
            left,
            width: size,
            height: size,
            color,
            transform: `rotate(${rotate}deg)`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
          Our Tech Stack
        </span>
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Technologies We <span className="text-blue-600">Use</span>
        </h2>
        <p className="mb-14 text-lg leading-relaxed text-zinc-600">
          Hire from our pool of 350+ specialized experts in web, mobile, and
          software engineering, specializing in the latest technologies and
          frameworks, ready to scale your development teams effortlessly.
        </p>
      </div>

      <div className="relative space-y-4">
        {/* Edge fade gradients — match the section's own bg, not plain white */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-blue-50/50 to-transparent sm:w-32" />

        <MarqueeRow items={techs} direction="left" speed={34} />
        <MarqueeRow items={techsRow2} direction="right" speed={38} />
      </div>
    </section>
  );
}