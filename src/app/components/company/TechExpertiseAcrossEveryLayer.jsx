// src/app/components/company/TechExpertiseAcrossEveryLayer.jsx
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  MonitorSmartphone,
  Building2,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const layers = [
  {
    title: "Strategy",
    description:
      "We translate business objectives into practical technology strategies, architecture decisions, and roadmaps that establish a clear direction for digital and enterprise transformation.",
    icon: Compass,
  },
  {
    title: "Web & Mobile",
    description:
      "We design and develop scalable web and mobile applications that deliver reliable digital experiences, support complex business requirements, and integrate seamlessly with modern technology ecosystems.",
    icon: MonitorSmartphone,
  },
  {
    title: "Enterprise",
    description:
      "We engineer enterprise applications and platforms that streamline business processes, connect systems, automate workflows, and support complex organizational operations at scale.",
    icon: Building2,
  },
  {
    title: "AI & Data",
    description:
      "We apply AI, Machine Learning, data engineering, analytics, and intelligent automation to turn business data into actionable insights, smarter processes, and data-driven capabilities.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "We design, modernize, and optimize cloud and infrastructure environments for scalability, resilience, performance, and efficient application operations across evolving technology workloads.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description:
      "We integrate security across applications, infrastructure, cloud environments, identities, and development processes through security assessments, access controls, vulnerability management, monitoring, and continuous verification.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Engineering",
    description:
      "We embed quality throughout the software lifecycle through functional, performance, security, integration, regression, and automated testing where appropriate, helping deliver reliable and production-ready systems.",
    icon: BadgeCheck,
  },
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/* ---------- One card: slides in from the right, then recedes as others stack on top ---------- */
function LayerCard({ item, index, total, progress }) {
  const Icon = item.icon;

  // Scroll progress 0 -> 0.9 is split evenly between the (total - 1) card entrances.
  // The last 10% holds the final card on screen.
  const seg = 0.9 / (total - 1);
  const enterStart = (index - 1) * seg;
  const enterEnd = index * seg;

  // Right -> left slide-in with ease-out.
  const x = useTransform(progress, (v) => {
    if (index === 0) return "0%";
    const t = clamp((v - enterStart) / seg, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    return `${(1 - eased) * 105}%`;
  });

  // How many cards have already covered this one (continuous, 0 .. cards-after-this).
  const depth = useTransform(progress, (v) =>
    clamp((v - enterEnd) / seg, 0, total - 1 - index)
  );
  const scale = useTransform(depth, (d) => 1 - d * 0.03);
  const y = useTransform(depth, (d) => d * 8);

  return (
    <motion.div
      style={{ x, zIndex: index + 1 }}
      className="absolute inset-0 will-change-transform"
    >
      <motion.article
        style={{ scale, y, transformOrigin: "50% 100%" }}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25)] will-change-transform lg:flex-row"
      >
        {/* Number panel (light theme) */}
        <div className="relative flex h-20 shrink-0 items-center justify-center overflow-hidden border-b border-slate-200/80 bg-slate-50 lg:h-auto lg:w-[28%] lg:border-b-0 lg:border-r">
          <div className="pointer-events-none absolute -left-12 -top-12 h-[180px] w-[180px] rounded-full bg-blue-400/15 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-[200px] w-[200px] rounded-full bg-sky-400/15 blur-[80px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />
          <span className="relative select-none bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-5xl font-extrabold leading-none tracking-tighter text-transparent lg:text-7xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 lg:p-9">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]">
            {item.description}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function TechExpertiseAcrossEveryLayer() {
  const trackRef = useRef(null);

  // Progress through the pinned scroll track (starts when the stage pins under the navbar).
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 96px", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.0005,
  });

  return (
    // NOTE: no overflow-hidden on this section or any parent, it would break position: sticky.
    <section className="relative z-10 w-full py-16 sm:py-24">
      <div className="relative z-10 mx-auto max-w-[96rem] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="flex justify-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Technology Stack
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 whitespace-nowrap">
            Technology Expertise{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Across Every Layer
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-base sm:text-lg font-normal leading-relaxed text-slate-600 mb-10 sm:mb-12">
            Greyloops brings together specialized capabilities across software engineering, web and mobile development, enterprise applications, AI and data, cloud and infrastructure, cybersecurity, and quality engineering. By connecting these disciplines, we help organizations build, modernize, integrate, and continuously evolve technology across their entire digital environment.
          </p>
        </motion.div>

        {/* Scroll track: its height decides how long the image stays pinned */}
        <div
          ref={trackRef}
          className="relative mx-auto max-w-6xl"
          style={{ height: `${layers.length * 60 + 60}vh` }}
        >
          {/* Pinned stage: image + card stack (same width) */}
          <div className="sticky top-24 flex flex-col gap-6">
            {/* Image Showcase (stays pinned) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative aspect-[16/9] max-h-[42vh] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl lg:aspect-[21/9]">
                <Image
                  src="/Technology_Expertise_Across_Every_Layer.png"
                  alt="Technology Expertise Across Every Layer Showcase"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Horizontal sticky card stack, same width as the image */}
            <div className="relative mb-12 h-[340px] overflow-x-clip sm:h-[300px] lg:h-[250px]">
              {layers.map((item, index) => (
                <LayerCard
                  key={item.title}
                  item={item}
                  index={index}
                  total={layers.length}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}