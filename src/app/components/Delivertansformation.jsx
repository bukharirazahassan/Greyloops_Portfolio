"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Boxes,
  BrainCircuit,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    slug: "consulting",
    title: "Strategic Technology\nConsulting",
    ctaText: "View Consulting Services",
    ctaLink: "/services/consulting",
    description:
      "We align technology with your business vision through strategic planning, modern architecture, and practical transformation roadmaps. Our experts assess your existing technology landscape, identify opportunities, and design scalable solutions built around your operational needs. From modernization and system integration to cloud, data, and emerging technologies, we help you make smarter technology decisions. With a clear path from strategy to execution, we create a strong technology foundation that supports agility, innovation, and sustainable growth.",
    Icon: Compass,
    color: "#2563EB",
    offset: 0,
  },
  {
    slug: "product-engineering",
    title: "Digital Product\nEngineering",
    ctaText: "View Product Engineering Services",
    ctaLink: "/services/product-engineering",
    description:
      "We transform ideas into scalable, high-performance digital products through modern architecture, intuitive experiences, and agile engineering. From web and mobile applications to enterprise platforms, we engineer solutions designed for reliability, flexibility, and long-term growth. Our approach covers product discovery, UX, development, integrations, cloud readiness, and quality engineering to accelerate delivery without compromising performance. We continuously evolve and optimize products so they remain secure, competitive, and ready to adapt as your business grows.",
    Icon: Boxes,
    color: "#16A34A",
    offset: 180,
  },
  {
    slug: "ai-data-analytics",
    title: "AI, Data &\nAnalytics Solutions",
    ctaText: "View Artificial Intelligence Services",
    ctaLink: "/services/ai-data-analytics",
    description:
      "We transform complex data into intelligent insights through AI, machine learning, advanced analytics, and modern data engineering. Our solutions help organizations automate processes, uncover patterns, predict outcomes, and make faster, data-driven decisions. From intelligent dashboards and predictive models to generative AI and enterprise data platforms, we build solutions around real business needs. We create scalable, secure, and continuously evolving intelligence systems that turn data into measurable business value and long-term competitive advantage.",
    Icon: BrainCircuit,
    color: "#2563EB",
    offset: 360,
  },
  {
    slug: "cybersecurity",
    title: "Cloud Operations\n& Cybersecurity",
    ctaText: "View Cybersecurity Services",
    ctaLink: "/services/cybersecurity",
    description:
      "We build secure, scalable cloud environments that keep applications, enterprise systems, and digital operations reliable, resilient, and ready to grow. Our approach combines cloud architecture, DevOps automation, continuous monitoring, and infrastructure optimization to improve performance and operational efficiency. We embed security across identities, applications, infrastructure, and data with proactive threat detection, access controls, and modern Zero Trust practices. From cloud modernization to ongoing security and operational support, we help organizations reduce risk, maintain continuity, and confidently scale their technology landscape.",
    Icon: ShieldCheck,
    color: "#2563EB",
    offset: 540,
  },
];

function ServiceCard({ service, progress, index, total }) {
  const { title, description, Icon, color, offset, ctaText, ctaLink } = service;

  const y = useTransform(progress, [0, 0.9], [offset, 0]);

  return (
    <motion.div
      style={{ y }}
      className={`group relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden border border-white/60 bg-white/40 p-6 backdrop-blur-2xl transition-colors duration-500 hover:bg-white/65 hover:border-white sm:min-h-[520px] sm:p-8 ${
        index !== 0 ? "border-t md:border-l md:border-t-0" : ""
      } ${index !== total - 1 ? "border-b md:border-b-0" : ""}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.20] transition-opacity duration-500 group-hover:opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#64748b 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-md backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/90"
            style={{
              boxShadow: `0 8px 24px -8px ${color}35`,
            }}
          >
            <Icon className="h-7 w-7" style={{ color }} strokeWidth={1.75} />
          </div>

          <h3 className="section-display mb-3 whitespace-pre-line text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
            {title}
          </h3>

          <p className="text-sm leading-relaxed font-normal text-slate-600 antialiased sm:text-base">
            {description}
          </p>
        </div>

        {/* Updated Theme-Matched Button Hover State */}
        <div className="mt-8 pt-4">
          <Link
            href={ctaLink}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-900 bg-transparent px-5 py-3 text-xs font-bold text-slate-900 shadow-xs transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-500/20 sm:text-sm"
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function DeliverTransformation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="section-font relative h-[160vh] w-full bg-white"
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");

        .section-font {
          font-family:
            "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .section-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.025em;
        }
      `}</style>

      <div className="sticky top-0 flex h-screen w-full flex-col justify-start gap-3 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-slate-50 px-4 pt-2 pb-4 sm:px-8 sm:pt-4 sm:pb-6">
        <div className="pointer-events-none absolute right-0 top-0 z-0 h-[500px] w-[650px] -translate-y-1/3 rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="pointer-events-none absolute right-[8%] top-0 z-0 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-sky-200/30 blur-[100px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          }}
        />

        {/* One-Line Header */}
        <div className="relative z-10 px-4 pt-1 text-center sm:pt-2">
          <h2 className="section-display mx-auto max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Beyond Development.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              We Deliver Transformation.
            </span>
          </h2>
        </div>
        {/* Cards Grid */}
        <div className="relative z-10 grid w-full flex-1 grid-cols-1 border-y border-white/70 shadow-xs md:grid-cols-4 items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              progress={scrollYProgress}
              index={index}
              total={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
