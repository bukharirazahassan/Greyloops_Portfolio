"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const faqData = [
  {
    id: "timeline",
    title: "1. How long does a custom web application take to build?",
    description:
      "A focused MVP with a defined scope typically takes 2–4 months. A more complex platform with multiple integrations, user roles, compliance requirements, and advanced backend logic may require 6–12 months for the initial production release. The timeline depends on scope clarity, integration complexity, and the extent to which existing architecture can be reused. We provide a specific estimate after a scoping session, not a generic range from a brief.",
  },
  {
    id: "cost",
    title: "2. How do you estimate the cost of custom web development?",
    description:
      "Cost estimation follows requirements review, not the other way around. We assess user roles, feature scope, integration requirements, cloud infrastructure, QA needs, and post-launch support before producing a number. This avoids vague estimates that shift after the first sprint and gives your team a clear view of what to build now versus what can be phased to a later release.",
  },
  {
    id: "codebase",
    title: "3. Can you work with an existing codebase or only build from scratch?",
    description:
      "Both. We regularly assess and modernize existing web applications, resolve technical debt in production systems, and extend platforms built by other teams. A technical audit at the start of the engagement identifies which parts of the existing system are worth keeping and which carry more risk than they solve. We can recommend modernization, targeted improvements, or a new implementation based on the condition and requirements of the existing application.",
  },
  {
    id: "team",
    title: "4. What team do we need on our side during development?",
    description:
      "Typically, a product owner or technical lead is available to review the sprint output and confirm priorities. For projects replacing an existing system, a stakeholder familiar with the current workflows speeds up requirements gathering and reduces late-stage scope changes. Their involvement also helps the development team clarify business decisions and validate important functionality throughout the project.",
  },
  {
    id: "security",
    title: "5. How do you handle security and compliance requirements?",
    description:
      "Security considerations are incorporated into the application architecture from the beginning. Depending on the project requirements, this can include authentication, role-based access control, secure data handling, encryption, audit logging, input validation, and appropriate security practices across application components. For projects operating under specific regulatory or compliance requirements, we review those requirements during discovery and account for them throughout architecture, development, testing, and deployment.",
  },
  {
    id: "support",
    title: "6. Do you support the web application after launch?",
    description:
      "Post-launch support can include bug resolution, dependency updates, performance improvements, security-related maintenance, application monitoring, and continued feature development. We can remain involved after the initial release to address technical requirements and support the application's ongoing evolution rather than treating deployment as the end of the development lifecycle.",
  },
  {
    id: "integration",
    title: "7. Can you integrate the web application with our existing internal systems?",
    description:
      "Yes. Web applications often need to communicate with CRMs, ERPs, payment providers, identity systems, analytics platforms, communication services, or existing internal APIs. We design the integration layer during the architecture phase, define how information moves between systems, and implement authentication, data mapping, validation, error handling, and appropriate integration workflows. This helps maintain consistent communication between the application and the systems your business already uses.",
  },
  {
    id: "changes",
    title: "8. What if our requirements change during development?",
    description:
      "Scope changes are a normal part of product development. We handle them through structured change management by evaluating their impact on functionality, development effort, timeline, and cost before incorporating them into the delivery plan. Priorities can then be adjusted between development cycles while keeping stakeholders informed about the resulting changes. For projects where requirements are expected to evolve significantly, an iterative approach can provide greater flexibility than defining every requirement as fixed from the beginning.",
  },
];

function FAQTimelineItem({ item, index, isLast, progress, segment }) {
  const itemRef = useRef(null);

  const localFill = useTransform(progress, [segment.start, segment.end], [0, 1]);
  const lineHeight = useTransform(localFill, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);
  const dotScale = useTransform(localFill, [0, 0.15], [1, 1.15]);

  return (
    <div ref={itemRef} className="relative flex gap-5 pb-12 last:pb-0">
      {/* Dot + connecting line */}
      <div className="relative flex flex-col items-center">
        <motion.span
          style={{ scale: dotScale }}
          className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white shadow-sm shadow-blue-500/20"
        >
          <motion.span
            style={{ opacity: localFill }}
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
          />
        </motion.span>

        {!isLast && (
          <span
            aria-hidden="true"
            className="relative mt-1 w-[2px] flex-1 overflow-hidden rounded-full bg-slate-200"
          >
            <motion.span
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-blue-600 to-sky-400"
            />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="pb-1">
        <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          {item.title}
        </h3>
        <p className="whitespace-pre-line text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base sm:leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function FrequentlyAskedQuestions_Web() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const imageWrapRef = useRef(null);
  const [maxOffset, setMaxOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const total = faqData.length;
  const segments = faqData.map((_, i) => ({
    start: i / total,
    end: (i + 1) / total,
  }));

  const { scrollYProgress: rowProgress } = useScroll({
    target: rowRef,
    offset: ["start start", "end end"],
  });

  const smoothRowProgress = useSpring(rowProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const measure = useCallback(() => {
    if (rowRef.current && imageWrapRef.current) {
      const rowHeight = rowRef.current.offsetHeight;
      const imageHeight = imageWrapRef.current.offsetHeight;
      setMaxOffset(Math.max(rowHeight - imageHeight, 0));
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const t = setTimeout(measure, 300);

    let observer;
    if (typeof ResizeObserver !== "undefined" && rowRef.current) {
      observer = new ResizeObserver(measure);
      observer.observe(rowRef.current);
    }

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
      if (observer) observer.disconnect();
    };
  }, [measure]);

  const imageY = useTransform(smoothRowProgress, [0, 1], [0, maxOffset]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-24"
    >
      {/* Blue Ambient Glow Circles */}
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

      {/* Ambient Light Dot Matrix Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24">
        {/* Block Header Grid - Top Aligned for Both Columns */}
        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Side: Matching WebDevelopmentProcessHeader typography size */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-[1.12] sm:text-4xl lg:text-5xl xl:text-5xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                & Consulting
              </span>
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <p className="w-full text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
              Find clear answers to common questions about our custom web application development and consulting services. From timelines and cost estimation to codebase modernization, team collaboration, security, and ongoing support, our FAQs provide practical guidance to help you understand the right solutions for your business. If you need more specific advice, our consulting team can work with you to evaluate your requirements and recommend the best technology strategy.
            </p>
          </div>
        </div>

        <hr className="mb-12 border-t border-slate-200/80" />

        {/* Layout Grid - Left: Content with Connecting Line, Right: Sticky Image */}
        <div ref={rowRef} className="grid w-full gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Side: FAQ list with scrolling progress line */}
          <div className="lg:col-span-7 lg:pr-8">
            {faqData.map((item, index) => (
              <FAQTimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === faqData.length - 1}
                progress={smoothProgress}
                segment={segments[index]}
              />
            ))}
          </div>

          {/* Right Side: Sticky image tracking scroll */}
          <div className="relative lg:col-span-5">
            <motion.div
              ref={imageWrapRef}
              style={{ y: imageY }}
              className="lg:absolute lg:left-0 lg:top-0 lg:w-full will-change-transform"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-blue-500/5">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/services/frequently-asked-questions.png"
                    alt="Frequently Asked Questions & Consulting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                    onLoadingComplete={measure}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}