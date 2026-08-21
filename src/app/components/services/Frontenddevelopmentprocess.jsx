"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const processSteps = [
  {
    step: "STEP 01",
    title: "Wireframing & Design",
    description:
      "We begin by mapping out the user journey and architectural structure. Low-fidelity wireframes evolve into high-fidelity prototypes, ensuring perfect alignment with the Brand Anchors and UI intent before a single line of code is written.",
    image: "/images/services/WireframingDesign.png",
  },
  {
    step: "STEP 02",
    title: "CI/CD Pipeline Setup",
    description:
      "Establishing a robust Continuous Integration and Continuous Deployment (CI/CD) foundation is critical. We automate testing, linting, and deployment workflows to ensure code quality and rapid, reliable release cycles.",
    image: "/images/services/PipelineSetup.png",
  },
  {
    step: "STEP 03",
    title: "UI Development",
    description:
      "Translating design into responsive, component-driven code. We utilize Tailwind CSS and modern JavaScript frameworks to build the Semantic Shell and interactive elements, rigorously adhering to the defined Design System tokens.",
    image: "/images/services/UIDevelopment.png",
  },
  {
    step: "STEP 04",
    title: "Backend Integration",
    description:
      "Connecting the frontend architecture to backend APIs and DataStores. We ensure secure data fetching, efficient state management, and real-time updates, creating a seamless bridge between the user interface and core logic.",
    image: "/images/services/BackendIntegration.png",
  },
  {
    step: "STEP 05",
    title: "Performance Optimization",
    description:
      "Fine-tuning the application for peak performance. We analyze rendering times, optimize asset delivery (like lazy loading), and implement caching strategies to guarantee a fluid, instantaneous experience across all network conditions.",
    image: "/images/services/PerformanceOptimization.png",
  },
  {
    step: "STEP 06",
    title: "Cross-Browser & Cross-Device Testing",
    description:
      "Rigorous Quality Assurance execution. We validate the layout and functionality across a matrix of modern browsers, operating systems, and device form factors to ensure absolute consistency and flawless responsive behavior.",
    image: "/images/services/CrossDeviceTesting.png",
  },
  {
    step: "STEP 07",
    title: "Release & Deployment",
    description:
      "The final transition to production environments. Utilizing our established CI/CD pipeline, we execute a seamless, zero-downtime deployment, securely delivering the refined application to the end-user ecosystem.",
    image: "/images/services/ReleaseDeployment.png",
  },
  {
    step: "STEP 08",
    title: "Monitoring & Maintenance",
    description:
      "Post-launch, we maintain active surveillance on application health. We monitor error logs, analyze user interaction patterns, and provide continuous updates to ensure long-term stability and adaptation to new requirements.",
    image: "/images/services/MonitoringMaintenance.png",
  },
];

function Card({ item, index, totalSteps, progress }) {
  // Calculate specific scale dynamically per card rank so underlying cards scale down
  const targetScale = 1 - (totalSteps - index) * 0.03;
  
  // Calculate trigger range based on item index relative to full section progress
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;

  const cardScale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="sticky top-28 flex min-h-[420px] items-center justify-center pb-12 sm:top-32">
      <motion.div
        style={{
          scale: cardScale,
          top: `calc(10% + ${index * 20}px)`, // Slight staggered top offset for real stacked deck effect
        }}
        className="group relative flex w-full max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(59,130,246,0.12)] backdrop-blur-2xl transition-shadow duration-300 hover:border-blue-300 sm:p-10 md:flex-row"
      >
        {/* Glass Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-2xl" />

        {/* Card Image */}
        <div className="relative z-10 flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-white/90 p-2 shadow-lg backdrop-blur-md sm:h-48 sm:w-48">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex-1 text-left">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-600">
              {item.step}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {index + 1} / {totalSteps}
            </span>
          </div>

          <h3 className="frontend-display mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            {item.title}
          </h3>

          <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FrontendDevelopmentProcess() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="frontend-font relative w-full bg-slate-50/70 pt-12 pb-24 font-sans text-slate-900 sm:pt-16 sm:pb-32"
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .frontend-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .frontend-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Ambient Background Lights */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200/40 via-sky-200/30 to-indigo-200/40 blur-[130px]" />
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-sky-200/50 via-cyan-100/40 to-blue-200/30 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 lg:px-14">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Methodology
          </span>

          <h2 className="frontend-display mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Frontend Development{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A rigorous, step-by-step methodology designed for modern web applications. Scroll down to explore each phase of development.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative">
          {processSteps.map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              totalSteps={processSteps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}