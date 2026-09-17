"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import WhyChooseUs from "@/app/components/services/WhyChooseUs";
import WebDevelopmentTypes from "@/app/components/services/webdevelopmenttypes";

// Smooth acceleration/deceleration curve so the reveal doesn't feel linear/mechanical.
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// The stacked cards for the secondary content row with dynamic modern numbering.
const secondaryCards = [
  {
    title: "Custom Web Application Development",

    description:
      "We develop custom web applications around specific business processes, user requirements, and operational goals. Our full-cycle approach covers requirements analysis, application architecture, database planning, business logic, API development, user interfaces, testing, and deployment. Before development begins, we establish the technical approach, project scope, priorities, and delivery milestones to create a clear foundation for the product.",

    image: "/images/services/custom_web_application_development_bg.png",
  },

  {
    title: "Frontend Development",

    description:
      "We build responsive and interactive frontend experiences using React, Next.js, Vue, and Angular based on application requirements. Our frontend development covers component architecture, reusable UI systems, state management, responsive layouts, accessibility, performance optimization, and integration with backend services. This creates consistent digital experiences that remain maintainable as applications evolve.",

    image: "/images/services/frontend_development_v1.png",
  },

  {
    title: "E-Commerce & Online Stores",

    description:
      "We develop e-commerce solutions that support the complete online shopping journey, from product discovery and catalog management to checkout, payment processing, order handling, and customer accounts. We work with platforms such as Shopify and WooCommerce or develop fully customized storefronts based on business requirements. Solutions can include inventory management, search and filtering, promotions, shipping workflows, payment integration, and customer-focused purchasing experiences.",

    image: "/images/services/eCommerce_online_stores_v1.png",
  },

  {
    title: "WordPress Development",

    description:
      "We create custom WordPress websites tailored to a business's content, branding, functionality, and management requirements. Our services include custom theme development, structured content, responsive layouts, WordPress configuration, WooCommerce implementation, performance optimization, and maintainable administrative experiences. We focus on creating websites that are easy to manage while providing a reliable foundation for future updates and growth.",

    image: "/images/services/wordpress_development_v1.png",
  },

  {
    title: "Backend Development and API Engineering",

    description:
      "We engineer the server-side systems that power web applications, including business logic, authentication, data processing, database operations, and API services. Depending on project requirements, our backend development can use Node.js, Python, Java, or PHP, with REST or GraphQL APIs where appropriate. We design backend architecture around expected workloads, data relationships, security requirements, and long-term maintainability.",

    image: "/images/services/backend_devel_and_api_engineering_v1.png.png",
  },

  {
    title: "Web Portal and Internal Tool Development",

    description:
      "We build web portals and internal applications that bring business information, workflows, and operational activities into a centralized environment. These solutions can support employee management, attendance, reporting, approvals, administration, inventory, customer self-service, partner access, and other organization-specific processes. Role-based permissions, structured data management, dashboards, and workflow controls help teams reduce manual work and operate through a more organized digital system.",

    image: "/images/services/web_portal_and_internal_tool_development_v1.png",
  },

  {
    title: "System Integration and API Development",

    description:
      "We connect web applications with the external systems businesses rely on, including payment services, CRM and ERP platforms, authentication providers, communication services, analytics systems, and third-party APIs. Our integration work covers API design and consumption, authentication, data synchronization, validation, error handling, and integration workflows. We structure integrations to handle service changes and failures while keeping communication between systems reliable.",

    image: "/images/services/system_integration_API_development.png",
  },

  {
    title: "Cloud Deployment and DevOps Setup",

    description:
      "We prepare web applications for reliable deployment by establishing cloud infrastructure, application environments, deployment workflows, and operational monitoring. Our DevOps services can include AWS infrastructure configuration, CI/CD pipelines, environment management, application logging, monitoring, alerting, and deployment automation. This creates a controlled path from development to production while making applications easier to deploy, monitor, maintain, and scale.",

    image: "/images/services/cloud_deployment_and_devops_setup.png",
  },

  {
    title: "QA and Testing",

    description:
      "Our experienced QA specialists bring dedicated testing expertise throughout the web application development lifecycle, helping identify functional and technical issues before production release. We cover functional, regression, compatibility, usability, performance, and security-focused testing according to application requirements. Our approach combines automated testing where it provides meaningful coverage with thorough manual testing and human validation for complex workflows, business rules, and real-world use cases.",

    image: "/images/services/qa_and_testing.png",
  },
];

export default function WebAppDevelopment() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    let target = 0;

    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target =
        scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0;
    };

    const tick = () => {
      measure();
      current += (target - current) * 0.09;
      setProgress(current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // PHASE 1 (0 -> 0.12): banner is visible immediately, then slides UP and out of view.
  const INTRO_END = 0.12;
  const introProgress = easeInOutCubic(Math.min(progress / INTRO_END, 1));
  const imageTranslateY = -introProgress * 100;
  const scrimOpacity = 0.5 * (1 - introProgress);

  // PHASE 2 (0.12 -> 1.0): all service cards cycle across the ENTIRE remaining scroll range.
  const CARD_PHASE_START = INTRO_END;
  const CARD_PHASE_END = 1;
  const cardStep = (CARD_PHASE_END - CARD_PHASE_START) / secondaryCards.length;
  const getCardProgress = (index) => {
    if (index === 0) return 1;
    const start = CARD_PHASE_START + (index - 1) * cardStep;
    const end = start + cardStep;
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return easeInOutCubic((progress - start) / (end - start));
  };

  // Smoothly cross-fade secondary section in as intro banner fades out
  const secondaryFadeStart = 0.04;
  const secondaryFadeEnd = 0.12;
  const secondaryOpacity =
    progress <= secondaryFadeStart
      ? 0
      : progress >= secondaryFadeEnd
        ? 1
        : (progress - secondaryFadeStart) /
          (secondaryFadeEnd - secondaryFadeStart);
  const secondaryPointerEvents =
    progress < secondaryFadeStart ? "none" : "auto";

  // Banner content visibility tied strictly to the intro scroll progress
  const bannerOpacity = 1 - introProgress;
  const bannerPointerEvents = introProgress < 0.5 ? "auto" : "none";
  const bannerTranslateY = -introProgress * 80;

  // Fallback layout for mobile/tablet screens
  if (isMobile) {
    return (
      <section className="relative w-full bg-slate-950 border-t border-slate-800 py-16 px-4 sm:px-8 text-white font-sans">
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

        {/* Ambient glows and texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[140px]" />
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-sky-400/15 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(#475569 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
            }}
          />
        </div>

        {/* First section banner heading */}
        <div className="relative z-30 w-full text-center max-w-4xl mx-auto mb-16">
          <span className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900/90 px-4 py-1.5 text-sm font-semibold text-blue-400 shadow-sm ring-1 ring-blue-500/30">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            Expertise
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Industry-Best{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Web App Development Services
            </span>
          </h1>

          <p className="mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            As a trusted website app development company, we offer a
            comprehensive range of web development services. Our skilled
            developers delve deep into your unique business challenges to
            deliver perfectly tailored solutions that not only meet but exceed
            your expectations.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              Talk to our experts
            </a>
          </div>
        </div>

        {/* Second section heading for cards on mobile */}
        <div className="relative z-30 w-full text-center max-w-4xl mx-auto mb-10 mt-16">
          <span className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900/90 px-4 py-1.5 text-sm font-semibold text-blue-400 shadow-sm ring-1 ring-blue-500/30">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            Capabilities
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Custom Web Development Services to Broaden{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Business Prospects
            </span>
          </h2>
        </div>

        <div className="relative z-[6] flex flex-col gap-8 max-w-4xl mx-auto">
          {secondaryCards.map((card, index) => {
            const currentNumber = String(index + 1).padStart(2, "0");
            const totalNumber = String(secondaryCards.length).padStart(2, "0");

            return (
              <div
                key={card.title}
                className="relative flex flex-col w-full gap-6 overflow-hidden rounded-[2rem] border border-slate-300/80 bg-slate-50 p-6 shadow-xl sm:p-8"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  <div className="absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-[100px]" />
                  <div className="absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-sky-500/15 blur-[100px]" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
                      backgroundSize: `24px 24px`,
                    }}
                  />
                </div>

                <div className="absolute top-6 right-6 z-20 flex items-baseline gap-1 select-none pointer-events-none">
                  <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    {currentNumber}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    / {totalNumber}
                  </span>
                </div>

                <div className="relative z-10 w-full max-w-[280px] aspect-square shrink-0 mx-auto">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="280px"
                    quality={90}
                    priority={index === 0}
                  />
                </div>

                <div className="relative z-10 w-full text-left">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto mt-12 rounded-[2rem] overflow-hidden shadow-2xl aspect-video">
          <Image
            src="/images/services/web_application_development.png"
            alt="Web Application Development"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-[720vh] bg-slate-950 border-t border-slate-800 text-white font-sans"
      >
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

        <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col">
          {/* Dark-theme background */}
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

          {/* Rising image with balanced overall opacity so the picture remains fully visible */}
          <div
            className="absolute inset-0 z-10 will-change-transform opacity-80"
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

          {/* First section banner heading with a clean central dark backdrop vignette */}
          <div
            className="absolute inset-x-0 top-0 z-30 w-full px-6 sm:px-12 lg:px-20 xl:px-28 pt-8 sm:pt-10 lg:pt-12 text-center will-change-[opacity,transform] flex flex-col items-center"
            style={{
              opacity: bannerOpacity,
              transform: `translateY(${bannerTranslateY}px)`,
              pointerEvents: bannerPointerEvents,
            }}
          >
            {/* Focused central contrast card so text pops out while image stays clear on sides */}
            <div className="relative max-w-4xl w-full px-6 py-8 sm:px-10 sm:py-10 rounded-3xl bg-slate-950/75 backdrop-blur-md border border-slate-800/80 shadow-2xl shadow-black/60">
              <span className="animate-[fadeUp_0.9s_ease-out_0.05s_both] mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900/90 px-4 py-1.5 text-sm font-semibold text-blue-400 shadow-sm ring-1 ring-blue-500/30">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                Expertise
              </span>

              <h1 className="animate-[fadeUp_0.9s_ease-out_0.1s_both] mx-auto text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Industry-Best{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Web App Development Services
                </span>
              </h1>

              <p className="animate-[fadeUp_0.9s_ease-out_0.3s_both] mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                As a trusted website app development company, we offer a
                comprehensive range of web development services. Our skilled
                developers delve deep into your unique business challenges to
                deliver perfectly tailored solutions that not only meet but
                exceed your expectations.
              </p>

              <div className="flex justify-center mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  Talk to our experts
                </a>
              </div>
            </div>
          </div>

          {/* Secondary content row (smoothly cross-fades in as intro banner scrolls away) */}
          <div
            className="relative z-[25] flex flex-1 flex-col justify-center items-center w-full px-6 sm:px-12 lg:px-20 xl:px-28 pt-2 pb-6 will-change-[opacity,transform]"
            style={{
              opacity: secondaryOpacity,
              pointerEvents: secondaryPointerEvents,
              transform: `translateY(${-progress * 10}px)`,
            }}
          >
            {/* Main heading for the cards section */}
            <div className="w-full max-w-7xl mb-4 text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900/90 px-4 py-1.5 text-sm font-semibold text-blue-400 shadow-sm ring-1 ring-blue-500/30">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                Capabilities
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight leading-[1.1] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Custom Web Development Services to Broaden{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Business Prospects
                </span>
              </h2>
            </div>

            <div className="relative mx-auto w-full max-w-7xl h-[clamp(450px,62vh,720px)] overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-2xl shadow-black/40">
              {secondaryCards.map((card, index) => {
                const cardProgress = index === 0 ? 1 : getCardProgress(index);
                const translateY = index === 0 ? 0 : (1 - cardProgress) * 100;
                const currentNumber = String(index + 1).padStart(2, "0");
                const totalNumber = String(secondaryCards.length).padStart(
                  2,
                  "0",
                );

                return (
                  <div
                    key={card.title}
                    className="absolute inset-0 flex w-full flex-col items-center gap-6 sm:gap-10 lg:gap-16 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-10 lg:p-16 xl:p-20 lg:flex-row lg:items-center will-change-transform"
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
                    <div className="absolute top-5 right-5 sm:top-8 sm:right-10 z-20 flex items-center gap-2 select-none pointer-events-none rounded-full bg-white/70 backdrop-blur-sm px-4 py-1.5 shadow-sm">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                        {currentNumber}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-400">
                        / {totalNumber}
                      </span>
                    </div>

                    {/* Top accent line, tinted per-card */}
                    <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600" />

                    <div className="relative z-10 w-[min(54vh,52vw,660px)] aspect-square shrink-0 mx-auto lg:mx-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 660px, 52vw"
                        quality={90}
                        priority={index === 0}
                      />
                    </div>

                    <div className="relative z-10 w-full lg:flex-1 text-left">
                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-4 sm:mt-6 text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft edge darkening layers so the heading/description stay legible while image remains bright outward */}
          <div
            className="pointer-events-none absolute inset-0 z-[15] bg-black"
            style={{ opacity: scrimOpacity * 0.35 }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-80 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent"
            style={{ opacity: scrimOpacity }}
          />
        </div>
      </section>

      <WhyChooseUs />
      <WebDevelopmentTypes />
    </>
  );
}
