"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const faqData = [
  {
    id: "timeline",
    title: "1. What is the typical mobile app development timeline?",
    description:
      "Every project follows a structured process including discovery and scoping, UX/UI design, development and integration, quality assurance, security testing, and app store submission. Simple applications may take a few weeks, while medium-complexity and enterprise applications can take several months or longer depending on features, integrations, compliance, and technical requirements. We provide a detailed timeline based on your project scope and keep you informed throughout development.",
  },
  {
    id: "cost",
    title: "2. How much does mobile app development cost?",
    description:
      "Mobile app development costs depend on the application's complexity, features, platforms, integrations, and technical requirements.\n\nSimple Applications — One platform, standard UI, basic functionality, and minimal integrations.\n\nMedium-Complexity Applications — iOS and Android support, custom backend, payment integration, third-party APIs, and administrative features.\n\nComplex & Enterprise Applications — Multiple user roles, real-time or offline functionality, advanced integrations, compliance requirements, and complex business workflows.\n\nKey factors include the number of user roles, real-time or offline requirements, compliance needs, custom design, integrations, and the choice between native and cross-platform development. We provide a tailored estimate after understanding your requirements.",
  },
  {
    id: "maintenance",
    title: "3. Can you help with mobile app maintenance and updates?",
    description:
      "Yes. We provide ongoing mobile application maintenance and support, including bug fixes, security updates, performance optimization, compatibility updates, feature enhancements, and technical improvements. We can also support App Store Optimization (ASO) to improve application visibility and downloads.",
  },
  {
    id: "native-vs-hybrid",
    title: "4. What is the difference between native and hybrid app development?",
    description:
      "Native applications are built specifically for iOS or Android using platform-specific technologies. They provide excellent performance, platform integration, security, and access to device capabilities.\n\nHybrid applications combine web technologies with a native wrapper, allowing applications to run across multiple platforms from a shared codebase. They can reduce development time and cost but may have limitations compared with fully native applications.",
  },
  {
    id: "security",
    title: "5. How do you ensure the security of my app and user data?",
    description:
      "Security is considered throughout the mobile application development lifecycle. We apply industry-standard practices to protect applications and sensitive user information, including:\n\n• Secure Coding Practices\n• Security Audits & Vulnerability Assessments\n• Data Encryption\n• Strong Authentication & Authorization\n• Secure API & Data Communication\n• Regular Security Updates & Patches",
  },
  {
    id: "aso",
    title: "6. Can you help with App Store Optimization (ASO)?",
    description:
      "Yes. We provide App Store Optimization services to improve application visibility and discoverability across app stores. This includes optimizing app titles, descriptions, keywords, visual assets, and other store elements to help attract relevant users and increase downloads.",
  },
  {
    id: "stages",
    title: "7. What are the main stages of mobile app development?",
    description:
      "Our mobile application development process typically includes:\n\n• Discovery & Requirements — Understand business objectives, users, features, and technical requirements.\n• UX/UI Design — Create intuitive user journeys, wireframes, prototypes, and visual designs.\n• Development & Integration — Build the application and integrate APIs, backend systems, and third-party services.\n• QA & Security Testing — Test functionality, performance, compatibility, usability, and security.\n• Deployment & App Store Submission — Prepare the application for release and publish it to the relevant app stores.\n• Maintenance & Support — Continuously improve, maintain, secure, and update the application.",
  },
  {
    id: "comparison",
    title: "8. Native vs. Hybrid vs. Cross-Platform vs. PWA — Which should I choose?",
    description:
      "The right approach depends on your business goals, budget, performance requirements, target platforms, and application features.\n\n• Native Development — Best for maximum performance, advanced device capabilities, and platform-specific experiences.\n• Hybrid Development — Suitable when faster development and broader platform coverage are priorities.\n• Cross-Platform Development — React Native and Flutter can provide a strong balance of development speed, cost, maintainability, and near-native experiences.\n• Progressive Web Apps (PWA) — Suitable for web-based tools, content platforms, e-commerce, and experiences that need broad accessibility without requiring a traditional app installation.\n\nWe evaluate your requirements and recommend the approach that provides the best balance of performance, cost, scalability, user experience, and long-term maintainability.",
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

export default function FrequentlyAskedQuestions_Mobile() {
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
        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Side: Exactly 2-Line High Impact Heading */}
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>GOT QUESTIONS?</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">Frequently Asked Questions</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                & Consulting
              </span>
            </h2>
          </div>

          {/* Right Side: Description aligned to the top line with fine-tuned pt spacing */}
          <div className="lg:col-span-7 lg:pl-8 lg:pt-1">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              Find clear answers to common questions about our mobile application development and consulting services. From technology selection and development approaches to architecture, security, integrations, modernization, and ongoing support, our FAQs provide practical guidance to help you understand the right solutions for your business. If you need more specific advice, our consulting team can work with you to evaluate your requirements and recommend the best technology strategy.
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