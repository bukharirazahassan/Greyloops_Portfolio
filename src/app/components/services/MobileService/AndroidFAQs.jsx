"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Plus } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FAQS = [
  {
    question: "How much does it cost to develop an Android app?",
    answer:
      "Android app development costs depend on the product scope, features, UI/UX complexity, integrations, security requirements, backend infrastructure, and technology stack. At Greyloops, we assess your business requirements and technical needs to define a tailored scope, development approach, and budget.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer:
      "Development timelines vary based on the application's complexity, number of features, integrations, testing requirements, and deployment needs. A focused digital product may require less time, while enterprise applications with complex workflows and integrations require a longer development lifecycle. We establish a clear roadmap and milestones before development begins.",
  },
  {
    question: "How do I choose an Android app development company?",
    answer:
      "Look for a development partner with strong Android expertise, a proven engineering process, scalable architecture practices, security awareness, and experience integrating applications with APIs, cloud platforms, and enterprise systems. Clear communication, technical transparency, post-launch support, and the ability to understand your business requirements are equally important.",
  },
  {
    question: "What are the key stages in Android app development?",
    answer:
      "Our Android development process typically includes discovery and consultation, product strategy, UI/UX design, architecture planning, application development, API and system integration, quality assurance, security testing, deployment, and ongoing optimization. The process can be adapted based on the requirements of each digital product or enterprise application.",
  },
  {
    question: "Which OS is best for Android app development?",
    answer:
      "Android applications are primarily developed for the Android operating system using technologies such as Kotlin, Java, Android SDK, and Jetpack. For businesses requiring cross-platform delivery, technologies such as React Native can also support Android development while enabling shared development across platforms.",
  },
  {
    question: "How are resources allocated for Android app development?",
    answer:
      "Resources are allocated according to the project's scope, technical complexity, timeline, and business objectives. Depending on the engagement, a team may include Android developers, UI/UX designers, backend engineers, QA specialists, DevOps engineers, project managers, and technical architects. Team size and expertise can scale as the product evolves.",
  },
  {
    question: "Which tools and technologies does Greyloops use for Android development?",
    answer:
      "We use modern Android technologies and development tools based on project requirements, including Kotlin, Java, Android Studio, Android SDK, Jetpack Compose, Gradle, Firebase, Retrofit, Room, Git, and Android testing frameworks. For cross-platform Android solutions, we can also leverage React Native when appropriate.",
  },
  {
    question: "Does Greyloops assist in uploading the Android app to the Play Store?",
    answer:
      "Yes. We can support the Android application release process, including production build preparation, signing configuration, release setup, Play Store submission, and deployment guidance. We also help ensure the application is prepared according to applicable Google Play requirements.",
  },
  {
    question: "Will my project get support after completion?",
    answer:
      "Yes. Our engagement can continue beyond initial deployment with post-launch support, maintenance, performance optimization, security updates, bug fixes, monitoring, and feature enhancements. This helps keep your Android application reliable, secure, and aligned with evolving business and technology requirements.",
  },
  {
    question: "Do you build both iOS and Android apps?",
    answer:
      "Yes. We build native iOS apps with Swift and SwiftUI, native Android apps with Kotlin and Jetpack Compose, and cross-platform apps using React Native and Flutter. We’ll recommend the right approach (native or cross-platform) based on your product requirements, not on what’s more profitable for us.",
  },
];

function FaqAccordionItem({ faq, index, isOpen, onToggle, isLast, progress, segment }) {
  const itemRef = useRef(null);

  const localFill = useTransform(progress, [segment.start, segment.end], [0, 1]);
  const lineHeight = useTransform(localFill, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);
  const dotScale = useTransform(localFill, [0, 0.15], [1, 1.15]);

  return (
    <div ref={itemRef} className="relative flex gap-5 pb-10 last:pb-0">
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

      <div className="flex-1 pb-1">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-1 text-left group cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors pr-4">
            {faq.question}
          </span>
          <Plus
            size={20}
            strokeWidth={1.5}
            className={`shrink-0 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-45 text-blue-600" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 pb-3 pt-2" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AndroidFAQs() {
  const [openIndex, setOpenIndex] = useState(0);

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

  const total = FAQS.length;
  const segments = FAQS.map((_, i) => ({
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
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24">
        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Android FAQs</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">Frequently Asked</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              Got questions about our Android app development services, timelines,
              costs, or process? Browse through our comprehensive FAQs to find clear
              answers or reach out to our team directly for tailored guidance on
              your project.
            </p>
          </div>
        </div>

        <hr className="mb-12 border-t border-slate-200/80" />

        <div ref={rowRef} className="grid w-full gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 items-start">
          <div className="min-w-0 w-full">
            {FAQS.map((faq, index) => (
              <FaqAccordionItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                isLast={index === FAQS.length - 1}
                progress={smoothProgress}
                segment={segments[index]}
              />
            ))}
          </div>

          <div className="relative">
            <motion.div
              ref={imageWrapRef}
              style={{ y: imageY }}
              className="lg:absolute lg:left-0 lg:top-0 lg:w-full will-change-transform"
            >
              <div className="flex flex-col">
                <div className="relative w-full h-[520px] sm:h-[600px] mb-6 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl shadow-blue-500/5 flex items-center justify-center">
                  <Image
                    src="/images/services/androidFSQ_v3.png"
                    alt="Android Frequently Asked Questions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    onLoadingComplete={measure}
                  />
                </div>

                <button className="w-full bg-blue-600 text-white font-medium text-base py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 mb-3 cursor-pointer">
                  Get free consultation
                </button>

                <p className="text-center text-sm font-medium text-slate-600">
                  Have more questions? Talk to our Android experts today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}