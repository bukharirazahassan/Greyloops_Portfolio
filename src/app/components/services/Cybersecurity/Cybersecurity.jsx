"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import CybersecurityOffer from "@/app/components/services/Cybersecurity/CybersecurityOffer";
import CybersecurityProcess from "@/app/components/services/Cybersecurity/CybersecurityProcess";
import FrequentlyAskedQuestions from "@/app/components/services/Cybersecurity/FrequentlyAskedQuestions";
import CollaborateMobileDevelopment from "../../../components/services/MobileService/CollaborateMobileDevelopment";


const NAVBAR_OFFSET_PX = 78; // match your real navbar height
const SCROLL_LENGTH_VH = 180; // total scroll distance for this section
const EDGE_GAP_PX = 32; // breathing room kept between the card and each edge
const EASE = 0.09; // smoothing factor — smaller = smoother/slower catch-up

export default function Cybersecurity() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const targetRef = useRef(0); // raw scroll progress, 0 -> 1
  const smoothRef = useRef(0); // eased progress that visually drives the card
  const maxTravelRef = useRef(0); // measured px distance from center to resting spot
  const rafRef = useRef(null);

  const [cardY, setCardY] = useState(0);

  useEffect(() => {
    const computeTarget = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollableDistance = rect.height - viewportH;

      targetRef.current =
        scrollableDistance <= 0
          ? 0
          : Math.min(1, Math.max(0, -rect.top / scrollableDistance));
    };

    const measureTravel = () => {
      const container = containerRef.current;
      const card = cardRef.current;
      if (!container || !card) return;

      const containerH = container.getBoundingClientRect().height;
      const cardH = card.getBoundingClientRect().height;
      const distance = containerH / 2 - cardH / 2 - EDGE_GAP_PX;
      maxTravelRef.current = Math.max(0, distance);
    };

    let scrollTicking = false;
    const onScroll = () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          computeTarget();
          scrollTicking = false;
        });
      }
    };

    const onResize = () => {
      computeTarget();
      measureTravel();
    };

    // Continuous easing loop — runs every frame so the card keeps chasing
    // the target smoothly, independent of how often scroll events fire.
    const tick = () => {
      // progress 0 -> card near the top edge; progress 1 -> card near the
      // bottom edge. (2p - 1) remaps 0..1 to -1..1 so the card travels the
      // FULL span between both edges, not just center-to-one-side.
      const target = (targetRef.current * 2 - 1) * maxTravelRef.current;
      smoothRef.current += (target - smoothRef.current) * EASE;
      setCardY(smoothRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    computeTarget();
    measureTravel();
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const securityCapabilities = [
    {
      title: "Security Assessments & Audits",
      description:
        "Full-scale security assessments, configuration audits, and prioritized risk evaluations across applications, digital platforms, cloud environments, infrastructure, and enterprise systems.",
    },
    {
      title: "DevSecOps Integration",
      description:
        "Security practices embedded throughout development and deployment pipelines through code validation, runtime checks, and continuous security verification.",
    },
    {
      title: "AI Development Risk Assessment",
      description:
        "Risk assessment for AI-assisted development, covering generated code patterns, model misuse, insecure configurations, and unverified or vulnerable dependencies.",
    },
    {
      title: "Identity & Access Management",
      description:
        "Identity-centric security structures with authenticated, controlled, and lifecycle-managed access across digital applications, enterprise systems, and connected environments.",
    },
    {
      title: "Compliance & Standards Alignment",
      description:
        "Cybersecurity practices aligned with NIST CSF, ISO standards, and applicable regional data protection and privacy requirements.",
    },
    {
      title: "Security Monitoring & Response",
      description:
        "Centralized logging and monitoring with SIEM integration, security event analysis, and structured incident response processes across digital and enterprise environments.",
    },
  ];

  return (
    <>
      {/* Section 1: Scroll-linked Hero */}
      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ height: `${SCROLL_LENGTH_VH}vh` }}
      >
        <div
          ref={containerRef}
          className="sticky overflow-hidden"
          style={{
            top: `${NAVBAR_OFFSET_PX}px`,
            height: `calc(100vh - ${NAVBAR_OFFSET_PX}px)`,
            minHeight: "600px",
          }}
        >
          {/* Full-screen background image — stays put for this whole section */}
          <div className="absolute inset-0">
            <Image
              src="/images/services/Cybersecurity/cybersecurity-hero-v2.png"
              alt="Cybersecurity Consulting Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-slate-950/25" />
          </div>

          {/* Card — smoothly chases scroll position, travels from top edge to bottom edge */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6">
            <div
              ref={cardRef}
              className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/45 px-6 py-10 text-center shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:px-12 sm:py-12"
              style={{
                transform: `translate3d(0, ${cardY}px, 0)`,
                willChange: "transform",
              }}
            >
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Cybersecurity</span>

                <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Consulting Services
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
                Protect your applications, infrastructure, and data with
                practical cybersecurity strategies designed to reduce risks
                and strengthen your digital environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Full-Width Light Crystal Glassmorphism Section */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-32 px-6 sm:px-12 lg:px-24 font-sans text-slate-950">
        {/* Full-screen background image - cybersecurity-hero-v1.png with light thematic treatment */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/Cybersecurity/cybersecurity-hero-v1.png"
            alt="Cybersecurity Core Measures"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-10 mix-blend-luminosity"
          />
        </div>

        {/* Blue Ambient Glow Circles Matching Theme */}
        <div className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[160px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

        {/* Full Section Ambient Light Dot Matrix Background Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header & Description Block */}
          <div className="mx-auto max-w-5xl text-center mb-20">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Capabilities Overview
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Comprehensive Cybersecurity Capabilities{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Across Digital & Enterprise Environments
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              We provide security capabilities spanning applications, digital
              platforms, cloud infrastructure, development environments, identity
              systems, and enterprise operations. From security assessments and
              secure development practices to compliance, monitoring, and incident
              response, our approach addresses security risks across the full
              technology environment.
            </p>
          </div>

          {/* Modern Light Crystal & Glassmorphic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {securityCapabilities.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start rounded-3xl border border-white/80 bg-white/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-slate-200/50 backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/90 hover:shadow-[0_20px_40px_rgb(59,130,246,0.08)]"
                style={{
                  boxShadow:
                    "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 10px 30px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Imported Separated Component */}
      <CybersecurityOffer />
      {/* Section 4: Imported Separated Component */}
      <CybersecurityProcess />
      <FrequentlyAskedQuestions/>
      <CollaborateMobileDevelopment/>
    </>
  );
}