"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    icon: "/images/services/appconsulting.png",

    title: "iOS App Development Consultation",

    description:
      "We provide strategic iOS consulting to transform ideas into scalable digital products, define the right technology approach, validate technical feasibility, and establish a clear roadmap aligned with business and user requirements.",
  },

  {
    icon: "/images/services/iOS_UIUX_design.png",

    title: "iOS UI/UX Design",

    description:
      "We design intuitive, premium iOS experiences for digital products and enterprise applications, combining user-centered design with Apple design principles to create consistent, accessible, and engaging experiences across Apple devices.",
  },

  {
    icon: "/images/services/Custom_iOS_application_development.png",

    title: "Custom iOS Application Development",

    description:
      "We engineer custom iOS digital products and enterprise applications around specific business workflows, user requirements, integration needs, security standards, and long-term scalability using modern iOS technologies and development practices.",
  },

  {
    icon: "/images/services/iOS_software_testing.png",

    title: "iOS Software Testing",

    description:
      "We apply comprehensive testing throughout the iOS development lifecycle to ensure digital products and enterprise applications deliver reliable performance, security, usability, compatibility, and seamless functionality across Apple devices.",
  },

  {
    icon: "/images/services/multi_platform_deployment.png",

    title: "Multi-platform Deployment",

    description:
      "We prepare and deploy iOS digital products and enterprise applications across supported Apple devices, ensuring consistent performance, reliable releases, seamless updates, and a high-quality experience across the Apple ecosystem.",
  },
];

/**
 * Smooth, SSR-safe scroll-linked parallax.
 * No external animation library — just a rAF loop that lerps the current
 * value toward the scroll-derived target each frame, which gives the same
 * "spring-smoothed" feel as framer-motion without touching browser globals
 * during server prerendering.
 */
function useScrollParallax(sectionRef, range) {
  const [transform, setTransform] = useState({ y: 0, rotate: 0 });

  useEffect(() => {
    let raf = 0;
    let currentY = 0;
    let currentRotate = 0;

    const tick = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        // 0 when section top hits bottom of viewport, 1 when section bottom hits top
        const total = rect.height + viewportH;
        const progressRaw = (viewportH - rect.top) / total;
        const progress = Math.min(1, Math.max(0, progressRaw));

        const targetY = (progress - 0.5) * 2 * range;
        const targetRotate = (progress - 0.5) * 3;

        currentY += (targetY - currentY) * 0.08;
        currentRotate += (targetRotate - currentRotate) * 0.08;

        setTransform({ y: currentY, rotate: currentRotate });
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [sectionRef, range]);

  return transform;
}

export default function OfferingiSODevelopment() {
  const sectionRef = useRef(null);
  const { y, rotate } = useScrollParallax(sectionRef, 70);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-slate-50 py-20 lg:py-28 border-t border-slate-200/80"
    >
      {/* Background Glows & Dot Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="absolute -right-20 bottom-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/15 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-7xl px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
        {/* Outer row: left content column + right sticky image column.
            Grid stretches the right column to the left column's full height
            so the sticky image has room to travel top -> bottom on scroll. */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] lg:gap-10 xl:gap-16">
          {/* LEFT COLUMN */}
          <div className="flex w-full flex-col items-start text-left max-w-6xl">
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl leading-tight whitespace-nowrap">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                iOS Application Development Services{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                We Offer
              </span>
            </h2>

            <p className="w-full max-w-none text-base font-normal leading-relaxed text-slate-700 antialiased sm:text-lg mb-12">
              iOS application development is known as the best choice for
              building secure, scalable digital solutions. Our iOS development
              service experts ensure that your applications are engineered
              perfectly to make your business lead the digital landscape.
            </p>

            <div className="flex flex-col gap-6 w-full">
              {CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className="group relative flex flex-col md:flex-row w-full items-stretch overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* index watermark */}
                  <span className="pointer-events-none absolute right-6 top-4 select-none text-5xl font-black text-slate-900/[0.04]">
                    0{i + 1}
                  </span>

                  <div className="relative w-full md:w-[220px] shrink-0 min-h-[200px] md:min-h-full flex items-center justify-center p-8">
                    <div className="absolute inset-4 rounded-3xl bg-slate-100 border border-slate-200/60" />
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:pr-14 lg:py-10 w-full text-left">
                    <h3 className="mb-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — full-height grid cell, only shown lg+. */}
          <div className="hidden lg:block relative w-full">
            <div className="sticky top-24">
              <div
                className="relative"
                style={{
                  transform: `translateY(${y}px) rotate(${rotate}deg)`,
                }}
              >
                <div className="relative">
                  <div
                    className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-md bg-white"
                    style={{ aspectRatio: "886 / 1200" }}
                  >
                    <Image
                      src="/images/services/iSO_right_pinned_v1.png"
                      alt="iOS Development"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 460px, 400px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}