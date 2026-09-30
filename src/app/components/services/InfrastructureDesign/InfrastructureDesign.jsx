"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

import InfrastructureCapabilities from "@/app/components/services/InfrastructureDesign/Infrastructurecapabilities" 
import InfrastructureApproach from "@/app/components/services/InfrastructureDesign/Infrastructureapproach" 
import InfrastructureFAQ from "@/app/components/services/InfrastructureDesign/Infrastructurefaq" 



const NAVBAR_OFFSET_PX = 78; // match your real navbar height
const SCROLL_LENGTH_VH = 180; // total scroll distance for this section
const EDGE_GAP_PX = 32; // breathing room kept between the card and each edge
const EASE = 0.09; // smoothing factor — smaller = smoother/slower catch-up

export default function InfrastructureDesign() {
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
          {/* Full-screen background image — clear and sharp, staying put for this whole section */}
          <div className="absolute inset-0">
            <Image
              src="/images/services/Cybersecurity/infrastructure_design_hero_v1.png"
              alt="Infrastructure Design Services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Subtle dark overlay for contrast */}
            <div className="absolute inset-0 bg-slate-950/15" />
          </div>

          {/* Card — translucent glass format, smoothly chasing scroll position */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6">
            <div
              ref={cardRef}
              className="w-full max-w-4xl rounded-[2.5rem] border border-white/30 bg-white/50 px-8 py-12 text-center shadow-2xl shadow-slate-950/10 backdrop-blur-md transition-all sm:px-14 sm:py-14"
              style={{
                transform: `translate3d(0, ${cardY}px, 0)`,
                willChange: "transform",
                boxShadow:
                  "inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 20px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Infrastructure Design
              </span>

              <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                <span className="block text-slate-950">
                  Infrastructure Design Services for
                </span>

                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Reliable IT Operations
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed text-slate-700 sm:text-lg">
                We design secure, reliable IT infrastructure across networking,
                cloud, compute, storage, and endpoints—built around your operations
                and ready to scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <InfrastructureCapabilities/>
      <InfrastructureApproach/>
      <InfrastructureFAQ/>
    </>
  );
}