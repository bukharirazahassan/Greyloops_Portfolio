"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Smooth acceleration/deceleration curve so the reveal doesn't feel linear/mechanical.
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// The stacked cards for the secondary content row with dynamic modern numbering.
const secondaryCards = [
  {
    title: "Custom Web Application Development",
    description:
      "Full-cycle development of web applications with well-defined architecture, API design, business logic, and user-facing interfaces. Each project starts with a requirements review and a technical proposal before development begins. Scope, timeline, and delivery milestones are agreed upon before the first sprint.",
    image: "/images/services/custom_web_application_development_bg.png",
  },
  {
    title: "Frontend Development",
    description:
      "Component-based frontend engineering with React, Next.js, Vue, or Angular, chosen based on product requirements, not framework trends. We cover interface architecture, performance optimization, state management, accessibility, and the visual layer.",
    image: "/images/services/custom_web_application_development_v1.png",
  },
  {
    title: "Backend Development and API Engineering",
    description:
      "Scalable backend systems built on Node.js, Python, Java, or PHP, depending on the workload. REST and GraphQL APIs are designed for developer usability and documented for long-term maintainability. Database architecture suited to the query patterns the product will actually run.",
    image: "/images/services/backend_devel_and_api_engineering_v1.png.png",
  },
  {
    title: "Web Portal and Internal Tool Development",
    description:
      "Internal platforms for operations, reporting, administration, and data management, replacing disconnected spreadsheets and manual processes with a web-based system built around how the team already works. These products rarely require complex UX, they require reliable data handling and role-based access control.",
    image: "/images/services/web_portal_and_internal_tool_development_v1.png",
  },
  {
    title: "System Integration and API Development",
    description:
      "Connecting the web application to payment gateways, CRMs, ERPs, identity providers, analytics platforms, and third-party APIs in ways that remain stable as external services evolve. Integration documentation, error handling, and monitoring are included in scope, not added later.",
    image: "/images/services/system_integration_API_development.png",
  },
  {
    title: "Cloud Deployment and DevOps Setup",
    description:
      "Web applications that launch without a proper cloud setup, CI/CD pipeline, or monitoring configuration create operational risk from day one. We configure infrastructure on AWS, manage environments, and set up logging and alerting before the production release. DevOps services and AWS expertise are available as standalone engagements.",
    image: "/images/services/cloud_deployment_and_devops_setup.png",
  },
  {
    title: "QA and Testing",
    description:
      "Our experienced QA specialists bring dedicated expertise to every stage of web application development, helping identify and resolve issues before they impact production. We perform comprehensive functional, performance, compatibility, usability, and security testing across different scenarios and environments. Our QA approach combines automated testing where it adds value with thorough manual testing and expert human validation for complex workflows and business-critical use cases. This helps ensure applications are stable, secure, reliable, and fully prepared for production.",
    image: "/images/services/qa_and_testing.png",
  },
];

export default function WebAppDevelopment() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    let target = 0;

    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target =
        scrollable > 0
          ? Math.min(Math.max(-rect.top / scrollable, 0), 1)
          : 0;
    };

    const tick = () => {
      measure();
      // Lerp toward the real scroll position every frame -> buttery glide,
      // no snapping, no dependence on how often `scroll` events fire.
      current += (target - current) * 0.12;
      setProgress(current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Adjusted timeline for 7 cards to move smoothly and progressively:
  const getCardProgress = (index) => {
    if (index === 0) return 1;
    let start = 0.07;
    let end = 0.19;

    if (index === 2) {
      start = 0.19;
      end = 0.31;
    } else if (index === 3) {
      start = 0.31;
      end = 0.43;
    } else if (index === 4) {
      start = 0.43;
      end = 0.55;
    } else if (index === 5) {
      start = 0.55;
      end = 0.67;
    } else if (index === 6) {
      start = 0.67;
      end = 0.79;
    }

    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return easeInOutCubic((progress - start) / (end - start));
  };

  // Final image rise triggers only after all cards are fully in place (starts at 0.83)
  const imageProgress =
    progress < 0.83 ? 0 : easeInOutCubic((progress - 0.83) / 0.17);
  const imageTranslateY = (1 - imageProgress) * 100;

  const scrimOpacity = progress >= 0.83 ? imageProgress : 0;

  const secondaryOpacity =
    progress <= 0.83
      ? 1
      : progress >= 0.95
      ? 0
      : 1 - (progress - 0.83) / 0.12;

  // When image rises (progress >= 0.83), translate the header downwards along with the scrolling progress so it moves together with the final banner.
  const headerTranslateY =
    progress >= 0.83 ? (progress - 0.83) * 450 : 0;

  // Button appears smoothly only once the final banner begins rising (progress >= 0.83)
  const buttonOpacity =
    progress < 0.83 ? 0 : Math.min((progress - 0.83) / 0.05, 1);
  const buttonPointerEvents = progress < 0.83 ? "none" : "auto";
  const buttonMaxHeight = progress < 0.83 ? "0px" : "100px";
  const buttonMarginTop = progress < 0.83 ? "0px" : "1.5rem";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[800vh] bg-slate-950 border-t border-slate-800"
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col">
        {/* Dark-theme background: centered glow "spotlight" + centered dot grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-blue-600/25 blur-[160px]" />
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(#475569 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
            }}
          />
        </div>

        {/* Heading + short description — stays pinned and moves down dynamically alongside the final image as you scroll */}
        <div
          className="relative z-30 w-full px-6 sm:px-12 lg:px-20 xl:px-28 pt-8 sm:pt-10 lg:pt-12 text-center shrink-0 will-change-transform"
          style={{
            transform: `translateY(${headerTranslateY}px)`,
          }}
        >
          <h1 className="animate-[fadeUp_0.9s_ease-out_0.1s_both] mx-auto text-2xl font-extrabold tracking-tight leading-[1.1] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Industry-Best{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Web App Development Services
            </span>
          </h1>

          <p className="animate-[fadeUp_0.9s_ease-out_0.3s_both] mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            As a trusted website app development company, we offer a comprehensive range of web development services. Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that not only meet but exceed your expectations. Our expert team is dedicated to transforming your vision into a dynamic web presence that drives success.
          </p>

          {/* Talk to our experts button, completely collapsed on initial load and only displayed on the final banner */}
          <div
            className="flex justify-center transition-all duration-300 overflow-hidden"
            style={{
              opacity: buttonOpacity,
              pointerEvents: buttonPointerEvents,
              maxHeight: buttonMaxHeight,
              marginTop: buttonMarginTop,
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Talk to our experts
            </a>
          </div>
        </div>

        {/* Secondary content row — stack of cards with smooth, slow staged timing */}
        <div
          className="relative z-[6] flex flex-1 items-center w-full px-6 sm:px-12 lg:px-20 xl:px-28 pt-4 pb-10 will-change-[opacity,transform]"
          style={{
            opacity: secondaryOpacity,
            transform: `translateY(${-progress * 10}px)`,
          }}
        >
          <div className="relative mx-auto w-full max-w-7xl h-[620px] sm:h-[680px] lg:h-[700px]">
            {secondaryCards.map((card, index) => {
              const cardProgress = index === 0 ? 1 : getCardProgress(index);
              const translateY = index === 0 ? 0 : (1 - cardProgress) * 100;
              const currentNumber = String(index + 1).padStart(2, "0");
              const totalNumber = String(secondaryCards.length).padStart(2, "0");

              return (
                <div
                  key={card.title}
                  className="absolute inset-0 flex w-full flex-col items-center gap-10 overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-50 p-6 pb-16 shadow-xl shadow-slate-200/50 sm:p-10 sm:pb-20 lg:flex-row lg:items-center lg:gap-16 lg:p-16 lg:pb-28 will-change-transform"
                  style={{
                    transform: `translateY(${translateY}%)`,
                    zIndex: index + 1,
                  }}
                >
                  {/* Background Glows & Dot Pattern inside the card container */}
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

                  {/* Modern Counter Figure positioned at the top right of the card */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-baseline gap-1 select-none pointer-events-none">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                      {currentNumber}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-400">
                      / {totalNumber}
                    </span>
                  </div>

                  <div className="relative z-10 w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px] aspect-square shrink-0 mx-auto lg:mx-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 600px, 75vw"
                      quality={90}
                      priority={index === 0}
                    />
                  </div>

                  <div className="relative z-10 w-full lg:flex-1 text-left">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-slate-950">
                      {card.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Darkening layers so the heading/description stay legible once the image rises beneath them */}
        <div
          className="pointer-events-none absolute inset-0 z-[15] bg-black"
          style={{ opacity: scrimOpacity * 0.55 }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-96 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent"
          style={{ opacity: scrimOpacity }}
        />

        {/* Rising image — starts hidden below the fold, waits for all cards to complete, then glides up */}
        <div
          className="absolute inset-0 z-10 will-change-transform"
          style={{ transform: `translateY(${imageTranslateY}%)` }}
        >
          <Image
            src="/images/services/web_application_development.png"
            alt="Web Application Development"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}