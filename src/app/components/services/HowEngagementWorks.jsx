"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    title: "Discovery and scoping (1-2 weeks)",
    description:
      "We review project goals, existing systems, integration requirements, user roles, and delivery constraints. The output is a technical proposal that includes the team composition, timeline, cost estimate, and architecture direction. Development does not begin until this is agreed upon.",
  },
  {
    title: "Architecture and system design",
    description:
      "Before the first sprint, we define the application’s module structure, data model, API contracts, authentication approach, and cloud architecture. These decisions are documented, not kept in someone’s head.",
  },
  {
    title: "Iterative development in 2-week sprints",
    description:
      "Development proceeds in short cycles with a working demo at the end of each sprint. The engineers building the product remain directly accessible with no account manager layer between the technical team and the client.",
  },
  {
    title: "Code review and testing",
    description:
      "Every code change goes through peer review. Automated tests run in the CI pipeline. Performance benchmarks and security checks are integrated into the same process rather than deferred to a pre-launch sprint.",
  },
  {
    title: "Staging environment and user acceptance testing",
    description:
      "A staging environment mirrors production before launch. Client teams run user acceptance testing against real data and use cases. Deployment proceeds only after sign-off.",
  },
  {
    title: "Launch, monitoring, and ongoing support",
    description:
      "CI/CD pipelines, logging, and alerting are configured before the production release. Post-launch support covers bug resolution, dependency updates, performance tuning, and continued feature development.",
  },
];

function MilestoneItem({ step, index, totalSteps }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    margin: "-30% 0px -30% 0px",
  });

  return (
    <div
      ref={itemRef}
      className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8 sm:pb-16"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Step Dot */}
        <motion.div
          animate={{
            scale: isInView ? 1.25 : 1,
            borderColor: isInView ? "#2563eb" : "#cbd5e1",
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-[0_0_15px_rgba(59,130,246,0.25)]"
        >
          <motion.div
            animate={{
              opacity: isInView ? 1 : 0.4,
              backgroundColor: isInView ? "#2563eb" : "#94a3b8",
            }}
            transition={{ duration: 0.3 }}
            className="h-2.5 w-2.5 rounded-full"
          />
        </motion.div>

        {/* Dynamic Vertical Line Fill */}
        {index < totalSteps - 1 && (
          <div className="relative mt-2 h-full w-[2px] grow bg-slate-200">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 w-full bg-gradient-to-b from-blue-600 via-sky-500 to-indigo-600"
            />
          </div>
        )}
      </div>

      <div className="pt-0.5">
        <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-blue-600">
          Phase 0{index + 1}
        </span>
        <h3 className="frontend-display mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
          {step.title}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function HowEngagementWorks() {
  return (
    <section className="frontend-font relative w-full bg-slate-50/70 py-16 font-sans text-slate-900 sm:py-24">
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

      {/* Background Ambient Lights & Dots (Handles overflow containment here) */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Light Header Section */}
        <div className="mb-14 flex flex-col items-center text-center sm:mb-16 lg:mb-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Execution Workflow
          </span>

          <h2 className="frontend-display mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Engagement Works
            </span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A transparent, milestone-driven framework engineered to deliver high-performing web software with zero friction.
          </p>
        </div>

        {/* Grid Layout - Sticky container needs height context from grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Image Column */}
          <div className="relative lg:col-span-5">
            <div className="sticky top-28 h-[450px] w-full overflow-hidden rounded-3xl border-2 border-white bg-white/80 p-2 shadow-[0_20px_50px_rgba(59,130,246,0.15)] backdrop-blur-md sm:h-[550px] lg:h-[calc(100vh-160px)]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/SaaSAnalytics.webp"
                  alt="SaaS Analytics Development Process"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Scrollable Timeline Column */}
          <div className="relative lg:col-span-7">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <MilestoneItem
                  key={index}
                  step={step}
                  index={index}
                  totalSteps={steps.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}