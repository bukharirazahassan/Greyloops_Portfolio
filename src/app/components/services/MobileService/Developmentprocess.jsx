"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const STEPS = [
  {
    title: "Discovery & Strategy",
    text: "We begin by listening and understanding your business goals, user needs, and industry rules. This helps us shape a clear plan for your Android app development.",
  },
  {
    title: "UI/UX Design",
    text: "Our design team creates Android interfaces that feel natural, fast, and easy to use. Wireframes and prototypes make sure you see the flow before a single line of code is written.",
  },
  {
    title: "Development",
    text: "As a custom Android app development company, we use secure, scalable code to bring ideas to life. Agile sprints keep progress visible and allow for quick changes when needed.",
  },
  {
    title: "Testing & Quality Assurance",
    text: "Every Android application goes through careful testing. From security checks to performance under heavy load, we make sure nothing slips through before launch.",
  },
  {
    title: "Deployment",
    text: "We manage the rollout of your Android app on Google Play and enterprise environments. Compliance, integrations, and updates are handled so the launch is smooth.",
  },
  {
    title: "Support & Evolution",
    text: "Post-launch isn't the end. As an Android app development agency, we continue with monitoring, upgrades, and new features so your app keeps pace with user expectations.",
  },
];

export default function DevelopmentProcess() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

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

  const heightPercent = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let current = -1;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.75) current = i;
      });
      setActiveIndex(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-24"
    >
      {/* Blue background glow circles */}
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

      {/* Background dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Header section with top alignment between heading and description */}
        <div className="mb-16 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>From Vision to Reality</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:leading-[1.12]">
              <span className="block text-slate-900">Our Android</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg">
              We keep Android app development simple but structured. Every step is
              designed to reduce risk, cut delays, and make sure you end up with
              an Android app that performs at scale.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Continuous segmented background lines or precise gaps so line doesn't cross the circles */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-[18px] bottom-[18px] w-[2px] bg-slate-200 pointer-events-none" />
          
          <motion.div
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-[18px] w-[2px] bg-gradient-to-b from-blue-600 to-sky-400 rounded-full pointer-events-none origin-top"
            style={{ height: heightPercent }}
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {STEPS.map((step, i) => {
              const isActive = i <= activeIndex;
              return (
                <div
                  key={step.title}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_56px_1fr] items-start gap-4 sm:gap-8"
                >
                  {/* Left: Heading */}
                  <div className="sm:text-right sm:pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  {/* Center: Numbered dot with solid background masking the line */}
                  <div className="flex sm:justify-center relative z-10">
                    <div
                      className={`w-[36px] h-[36px] rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors duration-300 shrink-0 shadow-sm ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white shadow-blue-500/25"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="sm:pt-1">
                    <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}