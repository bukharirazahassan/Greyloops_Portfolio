"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  ClipboardList,
  Layers,
  ShieldCheck,
  Route,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess the Existing Environment",
    description:
      "We begin by understanding your current IT environment, infrastructure components, workloads, applications, connectivity, operational requirements, and technical constraints. We identify existing dependencies, capacity considerations, performance requirements, availability needs, and areas that may limit scalability or reliability.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Define Infrastructure Requirements",
    description:
      "We translate business and technical requirements into clear infrastructure needs. This includes workload capacity, performance, security, connectivity, availability, access requirements, data considerations, recovery objectives, and expected future growth.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Design the Infrastructure Architecture",
    description:
      "We develop the target infrastructure architecture across the required layers, including cloud or hybrid environments, networking, compute, storage, identity, monitoring, and resilience. The architecture is structured around how your systems operate and how different infrastructure components need to work together.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Build Security & Resilience into the Design",
    description:
      "Security and operational resilience are considered as part of the architecture rather than added afterward. We incorporate controlled access, network segmentation, redundancy, availability considerations, monitoring, backup, disaster recovery, and other safeguards relevant to the environment.",
  },
  {
    number: "05",
    icon: Route,
    title: "Plan Implementation & Migration",
    description:
      "We turn the proposed architecture into a practical implementation plan. This includes infrastructure dependencies, deployment sequencing, migration considerations, configuration requirements, transition planning, and potential operational risks to help minimize disruption during implementation.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Validate & Optimize the Architecture",
    description:
      "Before implementation, we review the proposed design against performance, scalability, security, availability, operational, and cost requirements. We refine the architecture where necessary to ensure it provides a reliable foundation for current workloads while remaining adaptable as the environment evolves.",
  },
];

export default function InfrastructureApproach() {
  const stackRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0); // 0-100, continuous

  // Discrete active step, driven by which block crosses the viewport middle.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Continuous scroll progress through the whole step stack — drives the
  // progress ring and the traveling dot on the rail, so motion is fluid
  // rather than snapping between fixed positions.
  useEffect(() => {
    let target = 0;
    let current = 0;
    let raf = null;

    const update = () => {
      const el = stackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH * 0.5;
      const scrolled = viewportH * 0.5 - rect.top;
      target = Math.max(0, Math.min(1, total > 0 ? scrolled / total : 0));
    };

    const tick = () => {
      current += (target - current) * 0.12;
      setProgressPct(current * 100);
      raf = requestAnimationFrame(tick);
    };

    update();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToStep = (index) => {
    stepRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const RADIUS = 34;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const dashOffset = CIRCUMFERENCE * (1 - progressPct / 100);

  return (
    <section className="relative w-full overflow-clip bg-slate-50 py-24 sm:py-32 px-6 sm:px-12 lg:px-24 font-sans text-slate-950">
      {/* Ambient glows — cross-fade tint based on active step for a living background */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 z-0 h-[600px] w-[600px] rounded-full blur-[160px] transition-colors duration-700"
        style={{
          backgroundColor:
            activeIndex % 2 === 0
              ? "rgba(59,130,246,0.15)"
              : "rgba(99,102,241,0.15)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full blur-[180px] transition-colors duration-700"
        style={{
          backgroundColor:
            activeIndex % 2 === 0
              ? "rgba(56,189,248,0.15)"
              : "rgba(59,130,246,0.15)",
        }}
      />

      {/* Dot matrix overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-20 sm:mb-28">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Infrastructure Design{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
            We take a structured approach to infrastructure design, starting
            with your current environment and business requirements and
            progressing toward an architecture that is secure, scalable,
            resilient, and practical to operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16">
          {/* Left: sticky progress console */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-12">
              {/* Progress ring + crossfading big number */}
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 shrink-0">
                  <svg
                    viewBox="0 0 80 80"
                    className="h-24 w-24 -rotate-90"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r={RADIUS}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="4"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r={RADIUS}
                      fill="none"
                      stroke="url(#approachGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={dashOffset}
                      style={{ transition: "stroke-dashoffset 0.1s linear" }}
                    />
                    <defs>
                      <linearGradient
                        id="approachGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">
                    {Math.round(progressPct)}%
                  </span>
                </div>

                <div className="relative h-16 flex-1 overflow-hidden">
                  {steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="absolute inset-0 flex flex-col"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform:
                          activeIndex === index
                            ? "translateY(0px)"
                            : "translateY(10px)",
                        transition: "opacity 0.4s ease, transform 0.4s ease",
                      }}
                    >
                      <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-4xl font-extrabold leading-none tracking-tighter text-transparent">
                        {step.number}
                      </span>
                      <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                        of {steps.length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rail with a dot that glides continuously + step labels */}
              <div className="relative flex flex-col gap-1 pl-1">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
                <div
                  className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-blue-600 via-sky-500 to-indigo-500"
                  style={{ height: `calc(${progressPct}% - 4px)` }}
                />
                {/* Glowing traveling marker */}
                <div
                  className="absolute left-0 z-10 h-3.5 w-3.5 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.18),0_0_16px_rgba(37,99,235,0.6)]"
                  style={{
                    top: `calc(${progressPct}% + 8px)`,
                    transform: "translateY(-50%)",
                    transition: "top 0.1s linear",
                  }}
                />

                {steps.map((step, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={step.number}
                      onClick={() => scrollToStep(index)}
                      className="group relative flex items-center gap-4 py-3 pl-6 text-left"
                    >
                      <span
                        className={`text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "translate-x-1 text-slate-900"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: step panels */}
          <div ref={stackRef} className="lg:col-span-8 flex flex-col gap-8">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-index={index}
                  className="relative rounded-[2rem] border p-8 sm:p-10 backdrop-blur-xl transition-all duration-500"
                  style={{
                    borderColor: isActive
                      ? "rgba(37,99,235,0.35)"
                      : "rgba(226,232,240,0.8)",
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(255,255,255,0.55)",
                    boxShadow: isActive
                      ? "0 25px 60px rgba(37,99,235,0.14), inset 0 1px 0 0 rgba(255,255,255,0.9)"
                      : "0 8px 30px rgba(0,0,0,0.03), inset 0 1px 0 0 rgba(255,255,255,0.8)",
                    transform: isActive ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  {/* Mobile step label */}
                  <span className="mb-4 flex items-center gap-3 lg:hidden">
                    <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent">
                      {step.number}
                    </span>
                  </span>

                  <div className="flex items-start gap-6">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all duration-500"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, #2563eb, #4f46e5)"
                          : "rgba(37,99,235,0.08)",
                        color: isActive ? "#ffffff" : "#2563eb",
                        transform: isActive ? "rotate(0deg)" : "rotate(-6deg)",
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}