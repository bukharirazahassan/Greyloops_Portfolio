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
      "We help businesses turn technology into a strategic advantage through modern architecture, digital transformation, and scalable technology roadmaps. We evaluate existing systems, identify opportunities, and define practical strategies that improve agility, efficiency, and long-term growth.",
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
      "We design and engineer modern digital products that combine strong technology, intuitive user experiences, and scalable architecture. From web and mobile applications to enterprise platforms, we build reliable solutions that accelerate delivery, improve performance, and evolve with changing business needs.",
    Icon: Boxes,
    color: "#16A34A",
    offset: 120,
  },
  {
    slug: "ai-data-analytics",
    title: "AI, Data &\nAnalytics Solutions",
    ctaText: "View Artificial Intelligence Services",
    ctaLink: "/services/ai-data-analytics",
    description:
      "We turn data into actionable intelligence using AI, machine learning, advanced analytics, and modern data engineering. Our solutions automate processes, uncover valuable insights, improve forecasting, and enable faster, smarter decisions across the organization.",
    Icon: BrainCircuit,
    color: "#2563EB",
    offset: 240,
  },
  {
    slug: "cybersecurity",
    title: "Cloud Operations\n& Cybersecurity",
    ctaText: "View Cybersecurity Services",
    ctaLink: "/services/cybersecurity",
    description:
      "We build secure and resilient cloud environments that support high performance, continuous availability, and business growth. By combining cloud engineering, DevOps automation, monitoring, infrastructure optimization, and proactive security, we help organizations reduce risk and operate with confidence.",
    Icon: ShieldCheck,
    color: "#2563EB",
    offset: 360,
  },
];

function ServiceCard({ service, progress, index, total }) {
  const { title, description, Icon, color, offset, ctaText, ctaLink } = service;

  const y = useTransform(progress, [0, 0.9], [offset, 0]);

  return (
    <motion.div
      style={{ y }}
      className={`group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden border border-white/60 bg-white/40 p-6 backdrop-blur-2xl transition-colors duration-500 hover:bg-white/65 hover:border-white sm:min-h-[440px] sm:p-7 lg:min-h-[500px] lg:p-8 xl:min-h-[530px] ${
        index !== 0 ? "border-t" : ""
      } ${index % 2 === 1 ? "sm:border-l" : "sm:border-l-0"} ${
        index >= 2 ? "sm:border-t" : "sm:border-t-0"
      } lg:border-t-0 ${index !== 0 ? "lg:border-l" : "lg:border-l-0"}`}
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

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-xs backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3 group-hover:bg-white/90 sm:h-15 sm:w-15 lg:mb-6 lg:h-16 lg:w-16"
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

          <h3 className="section-display mb-3.5 whitespace-pre-line text-xl font-bold leading-tight text-slate-900 sm:text-2xl lg:text-[25px]">
            {title}
          </h3>

          <p className="text-sm leading-relaxed font-normal text-slate-700 antialiased sm:text-[15px] lg:text-[16px]">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-4 sm:mt-10">
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
      className="section-font relative w-full bg-white lg:h-[170vh]"
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

      {/* Sticky container offset cleanly under navbar (80px + extra top padding for lower heading) */}
      <div className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-slate-50 px-4 py-8 sm:px-6 lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] lg:px-8 lg:pt-10 lg:pb-8">
        <div className="pointer-events-none absolute right-0 top-0 z-0 h-[280px] w-[280px] -translate-y-1/3 rounded-full bg-blue-200/30 blur-[100px] sm:h-[450px] sm:w-[550px] sm:blur-[140px]" />
        <div className="pointer-events-none absolute right-[8%] top-0 z-0 h-[220px] w-[220px] -translate-y-1/4 rounded-full bg-sky-200/30 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />

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

        {/* Scaled & Lowered Heading */}
        <div className="relative z-10 px-2 text-center sm:px-4 lg:pt-2 lg:pb-4">
          <h2 className="section-display mx-auto max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-[3.15rem]">
            Beyond Development.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              We Deliver Transformation.
            </span>
          </h2>
        </div>

        {/* Taller Cards Container */}
        <div className="relative z-10 my-auto grid w-full grid-cols-1 items-stretch border-y border-white/70 shadow-xs sm:grid-cols-2 lg:grid-cols-4">
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