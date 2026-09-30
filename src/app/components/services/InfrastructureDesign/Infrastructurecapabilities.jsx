"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Network,
  Server,
  KeyRound,
  ShieldCheck,
  Activity,
  LifeBuoy,
  Workflow,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud & Hybrid Infrastructure",
    description:
      "Design cloud, on-premises, and hybrid environments around workload requirements, scalability, connectivity, security, and operational flexibility.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design structured network architectures for reliable connectivity, secure communication, segmentation, and controlled access across your environment.",
  },
  {
    icon: Server,
    title: "Compute & Storage",
    description:
      "Architect compute and storage resources based on performance, capacity, availability, workload demands, and future expansion.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    description:
      "Design identity and access structures that provide secure, controlled access to infrastructure, applications, and business resources.",
  },
  {
    icon: ShieldCheck,
    title: "High Availability & Resilience",
    description:
      "Build infrastructure architectures with redundancy, fault tolerance, and recovery capabilities to reduce disruption and support continuous operations.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Design centralized visibility across infrastructure through monitoring, logging, health tracking, and operational insights.",
  },
  {
    icon: LifeBuoy,
    title: "Disaster Recovery",
    description:
      "Architect recovery environments and continuity strategies to protect critical systems, workloads, and data during operational disruptions.",
  },
  {
    icon: Workflow,
    title: "Infrastructure Automation",
    description:
      "Design automated infrastructure workflows that improve consistency, reduce manual effort, and support repeatable deployments and ongoing operations.",
  },
];

function CapabilityRow({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex gap-6 sm:gap-10 py-10 sm:py-12 border-b border-slate-200/70 last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: visible ? `${(index % 4) * 90}ms` : "0ms",
      }}
    >
      {/* Icon marker sitting on the timeline */}
      <div className="relative shrink-0">
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-white text-blue-600 shadow-[0_8px_24px_rgb(59,130,246,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-500/40 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgb(37,99,235,0.28)]">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1 sm:pt-2">
        <div className="mb-2 flex items-baseline gap-3">
          <span className="text-xs font-bold tracking-widest text-blue-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 mb-2 transition-colors duration-300 group-hover:text-blue-600">
          {item.title}
        </h3>
        <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function InfrastructureCapabilities() {
  const listRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let raf = null;

    const update = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const total = rect.height + viewportH * 0.5;
      const scrolled = viewportH * 0.85 - rect.top;
      target = Math.max(0, Math.min(1, scrolled / total));
    };

    const tick = () => {
      current += (target - current) * 0.12;
      setLineProgress(current);
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

  return (
    <section className="relative w-full overflow-clip bg-slate-50 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 font-sans text-slate-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

      {/* Dot matrix overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Standard Light Theme Header */}
        <div className="mx-auto max-w-3xl text-center mb-6">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Core Capabilities
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What We Design Across{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Your IT Infrastructure
            </span>
          </h2>
        </div>

        <p className="mx-auto max-w-2xl text-center text-base sm:text-lg leading-relaxed text-slate-600 mb-16 sm:mb-20">
          We design infrastructure around your workloads, operational
          requirements, security needs, and growth plans. Each layer is
          structured to work together as a reliable foundation for your
          applications and business operations.
        </p>

        {/* Timeline list container expanded to full desktop layout */}
        <div ref={listRef} className="relative max-w-5xl mx-auto">
          {/* Track */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-slate-200 sm:left-8" />
          {/* Progress fill */}
          <div
            className="absolute left-7 top-2 w-px bg-gradient-to-b from-blue-600 via-sky-500 to-indigo-500 sm:left-8"
            style={{
              height: `calc(${lineProgress * 100}% - 4px)`,
              transition: "height 0.05s linear",
            }}
          />

          {capabilities.map((item, index) => (
            <CapabilityRow key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}