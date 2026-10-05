// src/app/components/company/EngineeringBuiltScale.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Workflow,
  Zap,
  Wrench,
  Activity,
} from "lucide-react";

const NAV_HEIGHT = 80; // height of your fixed navbar (px)
const SPEED = 1.4; // 1 = normal scroll speed, higher = slower / more gradual

const engineeringSteps = [
  {
    title: "Architecture",
    description:
      "We design modular, scalable architectures that support growing users, workloads, integrations, and business requirements while providing a strong foundation for long-term system evolution.",
    icon: Layers,
  },
  {
    title: "Security",
    description:
      "Security is incorporated throughout the technology lifecycle, from application architecture and development to infrastructure, identity, deployment, and ongoing operations. We apply security-focused practices to reduce risk and strengthen system protection.",
    icon: ShieldCheck,
  },
  {
    title: "Integration",
    description:
      "We build reliable integration architectures and APIs that connect applications, enterprise platforms, databases, cloud services, and third-party systems, enabling consistent data exchange and connected business workflows.",
    icon: Workflow,
  },
  {
    title: "Performance",
    description:
      "We engineer for responsiveness, scalability, availability, and efficient resource utilization. Performance considerations are addressed across applications, APIs, databases, infrastructure, and cloud environments.",
    icon: Zap,
  },
  {
    title: "Maintainability",
    description:
      "We build technology that can evolve with the business. Clean architecture, structured engineering practices, modular components, documentation, testing, and automation help make systems easier to maintain, enhance, and operate over time.",
    icon: Wrench,
  },
  {
    title: "Observability & Monitoring",
    description:
      "We implement monitoring, centralized logging, and performance tracking to provide visibility into application behavior, infrastructure health, and system operations. These capabilities help teams identify issues, investigate failures, and maintain reliable technology environments as workloads grow.",
    icon: Activity,
  },
];

export default function EngineeringBuiltScale() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [contentH, setContentH] = useState(0);
  const [windowH, setWindowH] = useState(0);

  // Measure real content height + viewport height (re-measures on image load / resize)
  useEffect(() => {
    const measure = () => {
      setWindowH(window.innerHeight - NAV_HEIGHT);
      if (contentRef.current) setContentH(contentRef.current.offsetHeight);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const travel = Math.max(0, contentH - windowH);
  const sectionHeight = windowH + travel * SPEED;

  // Progress runs from "section pinned under navbar" -> "section bottom hits viewport bottom"
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${NAV_HEIGHT}px`, "end end"],
  });

  // Light spring: smooth but still responsive (no laggy "catch-up" feeling)
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const y = useTransform(progress, [0, 1], [0, -travel]);
  const barScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full"
      style={{ height: sectionHeight || "100vh" }}
    >
      {/* Pinned, exactly one screen tall (below the navbar) */}
      <div
        className="sticky z-10 w-full overflow-hidden"
        style={{
          top: NAV_HEIGHT,
          height: windowH || `calc(100vh - ${NAV_HEIGHT}px)`,
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)",
        }}
      >
        {/* Scroll progress bar */}
        <div className="absolute left-0 top-0 z-20 h-[3px] w-full bg-slate-200/60">
          <motion.div
            style={{ scaleX: barScale }}
            className="h-full origin-left bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[96rem] px-6">
          <motion.div
            ref={contentRef}
            style={{ y }}
            className="flex flex-col gap-12 py-12 will-change-transform sm:py-16"
          >
            {/* Header Content */}
            <div className="mx-auto max-w-6xl text-center">
              <div className="flex justify-center">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  Engineering Foundations
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Engineering Built for{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Scale
                </span>
              </h2>

              <p className="mx-auto max-w-4xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                Greyloops engineers digital and enterprise solutions with the technical foundation required to support evolving business demands. We focus on architecture, security, integration, performance, and maintainability from the beginning, ensuring systems are not only built for current requirements but prepared for future growth and change.
              </p>
            </div>

            {/* Image Showcase Frame */}
            <div className="mx-auto w-full max-w-6xl">
              <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl">
                <div className="relative flex h-auto w-full items-center justify-center">
                  <Image
                    src="/Engineering_Built_Scale.png"
                    alt="Engineering Built for Scale Showcase"
                    width={1920}
                    height={1080}
                    quality={100}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Numbered Cards */}
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 pb-8">
              {engineeringSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(30,64,175,0.15)] lg:flex-row"
                  >
                    {/* Number panel */}
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
                          {String(engineeringSteps.length).padStart(2, "0")}
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
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}