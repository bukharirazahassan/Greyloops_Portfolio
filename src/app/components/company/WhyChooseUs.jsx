// src/app/components/company/WhyChooseUsPage.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Layers,
  Code2,
  Building2,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import TechExpertiseAcrossEveryLayer from "./TechExpertiseAcrossEveryLayer";
import EngineeringBuiltScale from "./EngineeringBuiltScale";
import BusinessValue from "./BusinessValue";
import StrategyImprovement from "./StrategyImprovement"
import CollaborateMobileDevelopment from "@/app/components/services/MobileService/CollaborateMobileDevelopment";


const differentiators = [
  {
    number: "01",
    title: "Business-First Approach",
    tagline: "Technology aligned with business objectives.",
    description:
      "We start by understanding your business processes, challenges, users, and goals before defining the technology solution. Every engagement is structured around practical requirements, measurable outcomes, and long-term business value.",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "End-to-End Expertise",
    tagline: "One technology partner across the complete lifecycle.",
    description:
      "Our capabilities span strategy, UX, web and mobile development, enterprise applications, AI and data, cloud and infrastructure, cybersecurity, DevOps, and QA. This enables us to address connected technology requirements through a unified delivery approach.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Custom Engineering",
    tagline: "Solutions engineered around your requirements.",
    description:
      "We design and develop software around your specific workflows, integrations, users, and operational needs rather than relying on one-size-fits-all solutions. Our architectures are built to remain maintainable, adaptable, and scalable as requirements evolve.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Enterprise-Ready Solutions",
    tagline: "Built for scale, integration, security, and reliability.",
    description:
      "We engineer enterprise applications and digital platforms with scalability, performance, security, interoperability, and operational resilience in mind. From business applications to complex integrations and infrastructure, our solutions are designed for demanding technology environments.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Quality & Security",
    tagline: "Reliability and security built into the delivery process.",
    description:
      "Quality and security are considered throughout the software lifecycle, from architecture and development to testing and deployment. We combine QA practices, security validation, vulnerability assessment, access controls, and continuous verification to strengthen application reliability and protection.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Modern Technology",
    tagline: "Practical innovation for evolving business needs.",
    description:
      "We apply modern technologies such as AI, Machine Learning, cloud computing, automation, data analytics, IoT, and modern application architectures where they provide meaningful business value. Our focus is on practical adoption, integration, scalability, and sustainable technology foundations.",
    icon: Cpu,
  },
];

/* ---------- Single sticky card ---------- */
function StackCard({ item, index, total, progress }) {
  const Icon = item.icon;

  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky mb-10 sm:mb-14 last:mb-0"
      style={{ top: `calc(5.5rem + ${index * 18}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(30,64,175,0.25)] will-change-transform lg:grid-cols-[1.25fr_0.75fr]"
      >
        {/* Content */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
              {item.number} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {item.title}
          </h3>

          <p className="mt-3 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-base font-semibold text-transparent sm:text-lg">
            {item.tagline}
          </p>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 lg:text-lg">
            {item.description}
          </p>
        </div>

        {/* Visual panel */}
        <div className="relative order-first flex h-32 items-center justify-center overflow-hidden border-b border-slate-200/80 bg-slate-50 lg:order-last lg:h-auto lg:min-h-[340px] lg:border-b-0 lg:border-l">
          <div className="pointer-events-none absolute -left-16 -top-16 h-[240px] w-[240px] rounded-full bg-blue-400/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-[260px] w-[260px] rounded-full bg-sky-400/15 blur-[90px]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          <span className="relative select-none bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-5xl font-extrabold leading-none tracking-tighter text-transparent sm:text-6xl lg:text-8xl">
            {item.number}
          </span>

          <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-blue-600 shadow-sm backdrop-blur-md lg:bottom-6 lg:right-6 lg:h-14 lg:w-14">
            <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.8} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function WhyChooseUsPage() {
  const stackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.0005,
  });

  return (
    <div className="relative w-full bg-slate-50 text-slate-900">
      {/* ONE continuous shared background for the entire page */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-24 top-[4%] h-[450px] w-[450px] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="absolute -right-24 top-[22%] h-[500px] w-[500px] rounded-full bg-sky-400/15 blur-[150px]" />
        <div className="absolute -left-24 top-[50%] h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="absolute -right-24 top-[75%] h-[550px] w-[550px] rounded-full bg-sky-400/15 blur-[170px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* ================= WHY GREYLOOPS SECTION ================= */}
      <section className="relative z-10 w-full py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-4xl text-center mb-8 sm:mb-10"
          >
            <div className="flex justify-center">
              <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Why Greyloops?
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Greyloops?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src="/why_choose_us_hero_v1.png"
                alt="Why Greyloops Showcase"
                fill
                priority
                quality={100}
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-left"
          >
            <p className="text-base sm:text-lg font-normal leading-relaxed text-slate-600">
              Greyloops brings together expertise across custom software, web and mobile development, enterprise applications, AI and data, cloud and infrastructure, cybersecurity, DevOps, and quality engineering. We combine these capabilities to design, build, modernize, and secure scalable digital and enterprise solutions that align technology with business objectives and support long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT SETS GREYLOOPS APART SECTION ================= */}
      <section className="relative z-10 w-full py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              What Sets{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Greyloops Apart
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              We combine business understanding, engineering expertise, and
              modern technology capabilities to deliver solutions that are
              scalable, secure, and built for long-term growth.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                6 Core Differentiators
              </span>
            </div>
          </motion.div>

          <div ref={stackRef} className="mx-auto max-w-6xl pb-10">
            {differentiators.map((item, index) => (
              <StackCard
                key={item.number}
                item={item}
                index={index}
                total={differentiators.length}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH EXPERTISE ACROSS EVERY LAYER SECTION (MOVED TO BOTTOM) ================= */}
      <TechExpertiseAcrossEveryLayer />
      <EngineeringBuiltScale />
      <BusinessValue />
      <StrategyImprovement />
      <CollaborateMobileDevelopment />
    </div>
  );
}