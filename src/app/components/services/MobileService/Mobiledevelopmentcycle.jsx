"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

import Image from "next/image";

import { Sparkles } from "lucide-react";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const milestonesData = [
  {
    id: "discovery",

    title: "Discovery",

    description:
      "We define product scope, user flows, platform priorities, architecture assumptions, and delivery roadmap. We clarify what MVP is and what comes later. It's the work that stops you from spending six months building the wrong thing. The output is a clear brief that the entire development team can work from.",
  },

  {
    id: "uxui-design",

    title: "UX/UI design",

    description:
      "We map user journeys for mobile contexts — not desktop workflows squeezed onto a smaller screen. Touch-friendly navigation, clear information hierarchy, and scalable app design and development systems. UX decisions are aligned with business goals and release scope from the start, not redesigned after development begins.",
  },

  {
    id: "development",

    title: "Development",

    description:
      "We build native or cross-platform mobile applications based on the architecture agreed upon in discovery. APIs, authentication, push notifications, analytics, and core feature logic are all part of the development process. Code quality and release readiness are tracked throughout, not checked at the end.",
  },

  {
    id: "product-optimization",

    title: "Product optimization",

    description:
      "For product-led mobile apps, we help set up the foundations for growth after launch, including monetization strategy, product analytics, A/B testing, and product experiments. This allows teams to validate decisions faster, improve retention, and optimize revenue based on real user behaviour.",
  },

  {
    id: "qa-testing",

    title: "QA and testing",

    description:
      "We test app experience across devices, screen sizes, OS versions, and critical user flows. Performance, security, and release stability are validated before any deployment. Our QA process covers both automated and manual testing, depending on the application's requirements.",
  },

  {
    id: "deployment",

    title: "Deployment",

    description:
      "We prepare App Store and Google Play releases, configure builds, manage approvals, and handle production rollout. The goal is a clean launch without last-minute surprises, which only happens when deployment planning starts early in the development project, not the week before release.",
  },

  {
    id: "maintenance-support",

    title: "Maintenance and support",

    description:
      "We monitor crashes, release performance updates, push OS compatibility fixes, and support product growth after launch. A mobile product that doesn't get maintained degrades fast — OS updates break things, user behavior changes, and competitors move. We treat post-release as part of the engagement, not an optional extra.",
  },
];

function MilestoneItem({ item, index, isLast, progress, segment }) {
  const itemRef = useRef(null);

  const localFill = useTransform(
    progress,
    [segment.start, segment.end],
    [0, 1],
  );

  const lineHeight = useTransform(
    localFill,
    (v) => `${Math.max(0, Math.min(1, v)) * 100}%`,
  );

  const dotScale = useTransform(localFill, [0, 0.15], [1, 1.15]);

  const Heading = item.title;

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
          {Heading}
        </h3>

        <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base sm:leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function MobileDevelopmentCycle() {
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

  const total = milestonesData.length;

  const segments = milestonesData.map((_, i) => ({
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
        {/* Block Header Grid - Full Width Spacing */}

        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Side: 2-Line High Impact Heading */}

          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />

              <span>DEVELOPMENT PROCESS</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">
                Our mobile application
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                development cycle
              </span>
            </h2>
          </div>

          {/* Right Side: Description at the Top */}

          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              Our mobile application development cycle follows a structured and
              collaborative approach that transforms ideas into secure,
              scalable, and high-performing mobile experiences. From product
              discovery and UX/UI design to development, testing, deployment,
              and ongoing support, our team combines proven engineering
              practices with modern technologies to deliver reliable
              applications aligned with your business goals and user needs.
            </p>
          </div>
        </div>

        <hr className="mb-12 border-t border-slate-200/80" />

        {/* Layout Grid - Full Screen Edge Alignment */}

        <div
          ref={rowRef}
          className="grid w-full gap-12 lg:grid-cols-12 lg:gap-8"
        >
          <div className="relative lg:col-span-5">
            <motion.div
              ref={imageWrapRef}
              style={{ y: imageY }}
              className="lg:absolute lg:left-0 lg:top-0 lg:w-full will-change-transform"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-blue-500/5">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/services/mobile-application-development-cycle.png"
                    alt="Our mobile application development cycle"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                    onLoadingComplete={measure}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            {milestonesData.map((item, index) => (
              <MilestoneItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === milestonesData.length - 1}
                progress={smoothProgress}
                segment={segments[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
