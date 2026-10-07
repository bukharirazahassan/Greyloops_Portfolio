// src/app/components/company/DeliverTransformation.jsx
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
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    slug: "consulting",
    title: "Strategic Technology\nConsulting",
    ctaText: "View Consulting Services",
    ctaLink: "http://localhost:3000/services",
    description:
      "We help businesses turn technology into a strategic advantage through modern architecture, digital transformation, and scalable technology roadmaps. We evaluate existing systems, identify opportunities, and define practical strategies that improve agility, efficiency, and long-term growth.",
    capabilities: [
      "Technology Strategy",
      "Digital Transformation",
      "Enterprise Architecture",
    ],
    Icon: Compass,
    color: "#2563EB",
    offset: 0,
  },
  {
    slug: "product-engineering",
    title: "Digital Product\nEngineering",
    ctaText: "View Product Engineering Services",
    ctaLink: "http://localhost:3000/services",
    description:
      "We design and engineer modern digital products that combine strong technology, intuitive user experiences, and scalable architecture. From web and mobile applications to enterprise platforms, we build reliable solutions that accelerate delivery, improve performance, and evolve with changing business needs.",
    capabilities: [
      "Web & Mobile Applications",
      "Enterprise Platforms",
      "Scalable Software Engineering",
    ],
    Icon: Boxes,
    color: "#2563EB",
    offset: 180,
  },
  {
    slug: "ai-data-analytics",
    title: "AI, Data &\nAnalytics Solutions",
    ctaText: "View Artificial Intelligence Services",
    ctaLink: "http://localhost:3000/services",
    description:
      "We turn data into actionable intelligence using AI, machine learning, advanced analytics, and modern data engineering. Our solutions automate processes, uncover valuable insights, improve forecasting, and enable faster, smarter decisions across the organization.",
    capabilities: [
      "Artificial Intelligence & Machine Learning",
      "Data Engineering & Analytics",
      "Intelligent Automation & Insights",
    ],
    Icon: BrainCircuit,
    color: "#2563EB",
    offset: 360,
  },
  {
    slug: "cybersecurity",
    title: "Cloud Operations\n& Cybersecurity",
    ctaText: "View Cybersecurity Services",
    ctaLink: "http://localhost:3000/services",
    description:
      "We build secure and resilient cloud environments that support high performance, continuous availability, and business growth. By combining cloud engineering, DevOps automation, monitoring, infrastructure optimization, and proactive security, we help organizations reduce risk and operate with confidence.",
    capabilities: [
      "Cloud Engineering & Infrastructure",
      "DevOps & Automation",
      "Cybersecurity & Resilience",
    ],
    Icon: ShieldCheck,
    color: "#2563EB",
    offset: 540,
  },
];

function ServiceCard({ service, progress, index }) {
  const { title, description, capabilities, Icon, color, offset, ctaText, ctaLink } = service;

  const y = useTransform(progress, [0, 0.9], [offset, 0]);

  return (
    <motion.div
      style={{ y }}
      className={`group relative flex h-full min-h-[400px] flex-col justify-between overflow-hidden bg-white/60 p-6 backdrop-blur-2xl transition-colors duration-500 hover:bg-white/80 sm:min-h-[480px] sm:p-7 lg:min-h-[580px] lg:p-8 xl:min-h-[630px] ${
        index !== 0 ? "border-t border-slate-200/60 lg:border-t-0 lg:border-l" : ""
      } ${index % 2 === 1 ? "border-l border-slate-200/60 sm:border-l" : "sm:border-l-0"} ${
        index >= 2 ? "border-t border-slate-200/60 sm:border-t" : "sm:border-t-0"
      } lg:border-t-0`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] transition-opacity duration-500 group-hover:opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3 group-hover:bg-white sm:h-15 sm:w-15 lg:mb-6 lg:h-16 lg:w-16"
            style={{
              boxShadow: `0 8px 20px -8px ${color}35`,
            }}
          >
            <Icon
              className="h-7 w-7 lg:h-8 lg:w-8"
              style={{ color }}
              strokeWidth={1.75}
            />
          </div>

          <h3 className="mb-3 whitespace-pre-line text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-[24px]">
            {title}
          </h3>

          <p className="text-xs font-medium leading-relaxed text-slate-700 antialiased sm:text-sm lg:text-[15px]">
            {description}
          </p>

          {/* Capabilities List with Modern Large Checkmarks */}
          <ul className="mt-5 space-y-2.5 border-t border-slate-200/60 pt-4">
            {capabilities.map((capability, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 sm:text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-2">
          <Link
            href={ctaLink}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-900 bg-transparent px-5 py-3.5 text-xs font-bold text-slate-900 shadow-xs transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-500/20 sm:text-sm"
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
      className="relative w-full bg-slate-50 lg:h-[220vh]"
    >
      {/* Standard Light Theme: Background dots pattern matching the Hero section */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Standard Light Theme: Soft blue shaded glowing circles background accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      {/* Sticky container offset cleanly under navbar */}
      <div className="relative z-10 flex w-full flex-col px-4 py-6 sm:px-6 lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] lg:px-8 lg:pt-6 lg:pb-6">
        
        {/* Heading: Left-aligned single line header with eyebrow badge */}
        <div className="relative z-10 flex flex-col items-start px-2 text-left sm:px-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            What We Deliver
          </span>

          <h2 className="mx-0 mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            <span className="text-slate-900">Beyond Development.</span>{" "}
            <span className="text-blue-600">We Deliver Transformation.</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 mt-6 grid w-full grid-cols-1 items-stretch shadow-sm sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-slate-200/60 bg-white/40 backdrop-blur-2xl">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              progress={scrollYProgress}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}