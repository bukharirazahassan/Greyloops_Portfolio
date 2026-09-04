"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";

const consultingServices = [
  {
    id: "technology-advisory-roadmapping",
    title: "Technology Advisory & Roadmapping",
    image: "/images/services/data-science-ai-consulting.png",
    description:
      "We help organizations evaluate their technology landscape, identify strategic opportunities, and create practical roadmaps aligned with business objectives. Our advisory services combine data, AI, analytics, automation, and emerging technologies to help businesses make informed decisions, reduce technology risks, and build a clear path toward innovation and sustainable growth.",
    features: [
      {
        label: "Data Science & AI Strategy",
        description:
          "Turn business data into actionable insights and identify valuable opportunities for AI adoption.",
      },
      {
        label: "Analytics",
        description:
          "Transform complex data into meaningful insights that support faster, data-driven decisions.",
      },
      {
        label: "Machine Learning",
        description:
          "Develop intelligent models that learn from data and improve business processes and outcomes.",
      },
      {
        label: "Predictive Modeling",
        description:
          "Forecast trends, demand, risks, customer behavior, and future business outcomes.",
      },
      {
        label: "Intelligent Automation",
        description:
          "Apply AI and automation to streamline workflows, reduce manual effort, and improve operational efficiency.",
      },
      {
        label: "AI Adoption & Roadmap",
        description:
          "Identify practical AI opportunities, prioritize initiatives, and create scalable roadmaps aligned with business goals.",
      },
    ],
  },
  {
    id: "digital-transformation-consulting",
    title: "Digital Transformation Consulting",
    image: "/images/services/digital-transformation-consulting.png",
    description:
      "We help organizations modernize their business through strategic adoption of digital technologies, streamlined processes, and connected platforms. We assess existing systems and workflows, identify transformation opportunities, and develop practical strategies that improve operational efficiency, customer experiences, agility, and long-term business growth.",
    features: [
      {
        label: "Digital Strategy & Roadmapping",
        description:
          "Define transformation priorities, technology initiatives, and practical implementation roadmaps.",
      },
      {
        label: "Business Process Modernization",
        description:
          "Improve workflows and replace inefficient manual processes with modern digital solutions.",
      },
      {
        label: "Legacy System Modernization",
        description:
          "Transform outdated applications and platforms to improve performance, scalability, security, and maintainability.",
      },
      {
        label: "Cloud & Platform Transformation",
        description:
          "Adopt modern cloud platforms and technologies to create flexible, scalable, and reliable environments.",
      },
      {
        label: "Data & AI Transformation",
        description:
          "Leverage analytics, AI, and intelligent automation to improve decision-making and operational efficiency.",
      },
      {
        label: "Digital Customer Experience",
        description:
          "Create connected and personalized digital experiences across web, mobile, and customer-facing platforms.",
      },
      {
        label: "System Integration",
        description:
          "Connect applications, platforms, APIs, and data sources to create a unified technology ecosystem.",
      },
      {
        label: "Change & Adoption Strategy",
        description:
          "Support technology adoption with structured implementation, stakeholder alignment, and continuous improvement.",
      },
    ],
  },
  {
    id: "product-software-engineering-consulting",
    title: "Product & Software Engineering Consulting",
    image: "/images/services/product-software-engineering-consulting.png",
    description:
      "We help organizations design and build reliable, scalable software solutions across web, mobile, and enterprise platforms. Our consulting approach combines strong engineering practices with product thinking to deliver software that solves real business problems and drives measurable outcomes.",
    features: [
      {
        label: "Product Strategy & Discovery",
        description:
          "Define product vision, validate ideas, and prioritize features aligned with business goals.",
      },
      {
        label: "Custom Software Development",
        description:
          "Build tailored applications and platforms designed around specific business needs.",
      },
      {
        label: "Web & Mobile Engineering",
        description:
          "Deliver responsive, high-performance web and mobile applications across platforms.",
      },
      {
        label: "Enterprise Software Architecture",
        description:
          "Design scalable, secure, and maintainable systems for complex business environments.",
      },
      {
        label: "Quality Engineering & Testing",
        description:
          "Ensure software reliability through structured testing, automation, and quality assurance practices.",
      },
      {
        label: "DevOps & Platform Engineering",
        description:
          "Streamline development, deployment, and infrastructure with modern DevOps practices.",
      },
      {
        label: "API & Integration Development",
        description:
          "Build robust APIs and integrations that connect systems, platforms, and data sources.",
      },
      {
        label: "Product Modernization & Support",
        description:
          "Continuously improve, maintain, and scale existing products for long-term success.",
      },
    ],
  },
  {
    id: "enterprise-architecture-consulting",
    title: "Enterprise Architecture Consulting",
    image: "/images/services/enterprise_architecture_consulting.png",
    description:
      "Design and optimize enterprise technology ecosystems that are scalable, secure, integrated, and aligned with business objectives. We help organizations assess their current architecture, define target-state architectures, modernize technology environments, improve system integration, and establish clear architectural roadmaps that support long-term growth and digital transformation.",
    features: [
      {
        label: "Architecture Assessment",
        description:
          "Evaluate existing applications, platforms, infrastructure, and technology dependencies.",
      },
      {
        label: "Target Architecture Design",
        description:
          "Define scalable and future-ready technology architectures aligned with business goals.",
      },
      {
        label: "Application Architecture",
        description:
          "Design reliable application structures that support performance, maintainability, and growth.",
      },
      {
        label: "System Integration Architecture",
        description:
          "Connect applications, APIs, platforms, and data across the enterprise.",
      },
      {
        label: "Data Architecture",
        description:
          "Establish scalable approaches for data management, integration, analytics, and governance.",
      },
      {
        label: "Cloud & Infrastructure Architecture",
        description:
          "Design secure, resilient, and scalable cloud and infrastructure environments.",
      },
      {
        label: "Architecture Modernization",
        description:
          "Create practical strategies for modernizing legacy systems and technology ecosystems.",
      },
      {
        label: "Technology Governance",
        description:
          "Establish architecture standards, technology principles, security considerations, and decision frameworks.",
      },
    ],
  },
  {
    id: "technology-modernization-consulting",
    title: "Technology Modernization Consulting",
    image: "/images/services/technology_modernization_consulting.png",
    description:
      "Modernize outdated technology environments to improve performance, security, scalability, and maintainability while minimizing disruption to business operations. We assess legacy applications, platforms, infrastructure, and technology stacks, then develop practical modernization strategies that help organizations adopt modern architectures, cloud technologies, APIs, automation, and engineering practices.",
    features: [
      {
        label: "Legacy System Assessment",
        description:
          "Evaluate outdated applications, platforms, infrastructure, and technical dependencies.",
      },
      {
        label: "Modernization Strategy",
        description:
          "Define practical modernization approaches, priorities, timelines, and technology roadmaps.",
      },
      {
        label: "Application Modernization",
        description:
          "Transform legacy applications using modern architectures, frameworks, APIs, and development practices.",
      },
      {
        label: "Cloud Modernization",
        description:
          "Move and optimize legacy workloads using scalable, secure, and cloud-native technologies.",
      },
      {
        label: "Technology Stack Modernization",
        description:
          "Upgrade outdated languages, frameworks, databases, platforms, and development tools.",
      },
      {
        label: "API & Integration Modernization",
        description:
          "Replace outdated integrations with modern APIs and connected technology ecosystems.",
      },
      {
        label: "Performance & Scalability",
        description:
          "Improve system performance, reliability, scalability, and resource efficiency.",
      },
      {
        label: "Security & Maintainability",
        description:
          "Strengthen security, code quality, maintainability, and long-term technology sustainability.",
      },
    ],
  },
];

const statsData = [
  {
    number: "100",
    plus: "+",
    title: "Successful Projects",
    description:
      "Successfully delivering software and technology projects with a strong focus on quality, performance, and measurable business results.",
  },
  {
    number: "15",
    plus: "+",
    title: "Years of IT Experience",
    description:
      "Bringing extensive technical expertise and industry experience to solve complex challenges and deliver reliable, scalable solutions.",
  },
  {
    number: "500",
    plus: "+",
    title: "Happy Customers Globally",
    description:
      "Serving businesses worldwide with dependable technology solutions, responsive support, and a commitment to long-term partnerships.",
  },
  {
    number: "200",
    plus: "+",
    title: "IT Experts",
    description:
      "A skilled team of technology professionals combining experience, innovation, and technical expertise to deliver high-quality digital solutions.",
  },
];

export default function StrategicTechnologyConsulting() {
  const [itemProgress, setItemProgress] = useState(() =>
    consultingServices.map(() => 0)
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    // Measures each service block's own position against the vertical
    // center of the viewport, instead of assuming every block takes an
    // equal fraction of the scroll range. Blocks have different heights
    // (6 vs 8 checklist items), so an equal-segment assumption drifts out
    // of sync with what's actually on screen — this reads real pixel
    // positions instead, so the image and progress bar always match the
    // heading currently in view.
    const updateProgress = () => {
      rafRef.current = null;
      const viewportMid = window.innerHeight / 2;
      // The image should finish sliding in shortly after its heading
      // appears, then hold fully covered while the rest of that section's
      // (much taller) checklist scrolls by — not keep animating across the
      // whole block. Using a short, fixed distance (instead of the full
      // block height) also fixes the last section stalling mid-transition,
      // since there isn't always a full block-height of scroll room left
      // at the bottom of the page.
      const transitionDistance = Math.max(
        Math.min(window.innerHeight * 0.55, 480),
        220
      );

      const progresses = itemRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        if (rect.height === 0) return 0;
        return Math.min(
          Math.max((viewportMid - rect.top) / transitionDistance, 0),
          1
        );
      });

      setItemProgress(progresses);

      let active = 0;
      progresses.forEach((p, i) => {
        if (p > 0) active = i;
      });
      setActiveIndex(active);
    };

    // Throttle scroll updates through requestAnimationFrame so the
    // progress bar tracks the scroll position on every paint frame
    // instead of lagging behind bursty scroll events.
    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="w-full font-sans transition-colors duration-300">
      {/* DARK THEME SECTIONS */}
      <div className="w-full bg-slate-950 text-slate-100">
        {/* SECTION 1: Stats List */}
        <section className="relative w-full py-20 text-slate-100">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #334155 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="flex flex-col w-full">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 items-start justify-between border-t border-slate-800 py-10 gap-6 lg:grid-cols-12 lg:gap-12 lg:py-14"
                >
                  <div className="lg:col-span-6 flex flex-col items-start">
                    <div className="flex items-baseline tracking-tight font-light text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                      <span>{stat.number}</span>
                      <span className="text-blue-500 font-normal ml-1">{stat.plus}</span>
                    </div>
                    <h2 className="mt-2 text-base font-medium text-slate-200 sm:text-lg md:text-xl">
                      {stat.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-6 flex items-center lg:pt-6">
                    <p className="text-left text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-b border-slate-800" />
            </div>
          </div>
        </section>
      </div>

      {/* LIGHT THEME START FROM HERE */}
      <div className="w-full bg-slate-50 text-slate-900 border-t border-slate-200">
        {/* SECTION 2: Header Section */}
        <section className="relative w-full py-20 text-slate-900">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          <div className="relative z-10 flex h-full w-full flex-1 flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:items-center lg:gap-12 w-full">
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>Strategic Technology Consulting</span>
                </div>

                <h2 className="text-left text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl lg:leading-[1.15]">
                  Strategic Technology{" "}
                  <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                    Consulting
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-5 flex items-center">
                <p className="text-left text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg xl:text-xl lg:leading-relaxed">
                  Align technology with your business goals through strategic guidance across software, cloud, data, AI, and digital transformation. We help organizations make informed technology decisions, modernize existing systems, design scalable architectures, and build clear technology roadmaps for sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Sticky Interactive Content with Progress Bar */}
        <section className="relative w-full bg-slate-50 text-slate-900">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
            }}
          />

          <div className="relative z-10 flex w-full flex-col lg:flex-row">
            {/* Left Sticky Column: image is full height, half width of the section.
                top offset accounts for the site's fixed header so the image isn't
                hidden underneath it when the section first scrolls into view. */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-[88px] lg:h-[calc(100vh-88px)] flex items-stretch justify-center">
              <div className="relative flex w-full h-full items-stretch">
                {/* Image Container — fills the full height of the viewport column.
                    Each service image is stacked absolutely; itemProgress[i] is
                    measured directly from that service's own block position on
                    screen, so the image slides up and covers the previous one
                    exactly when its heading reaches the middle of the viewport —
                    no drift even though blocks have different heights. */}
                <div className="relative flex-1 h-full overflow-hidden bg-white">
                  {consultingServices.map((service, i) => {
                    // Image 0 is the base layer and stays fully in place.
                    const localProgress = i === 0 ? 1 : itemProgress[i] || 0;
                    // Slides in from 100% (fully below frame) to 0% (fully covering).
                    const translateY = (1 - localProgress) * 100;

                    return (
                      <div
                        key={service.id}
                        className="absolute inset-0"
                        style={{
                          transform: `translateY(${translateY}%)`,
                          zIndex: i,
                          willChange: "transform",
                        }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    );
                  })}
                  {/* Subtle edge fade so the progress rail reads as part of the image panel */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-slate-50/0 hidden lg:block" />
                </div>

                {/* Modern segmented progress bar — one pill per service.
                    Each segment reads the same itemProgress[i] value driving the
                    image above, so the bar and image move in exact lockstep,
                    synced to the real on-screen position of each heading. */}
                <div className="hidden sm:flex relative flex-col w-14 shrink-0 items-center justify-center gap-2 px-4 py-10">
                  {consultingServices.map((service, i) => {
                    const localProgress = itemProgress[i] || 0;
                    const isCurrent = i === activeIndex;

                    return (
                      <div
                        key={service.id}
                        className="relative w-1.5 flex-1 rounded-full bg-slate-200/70 overflow-hidden"
                      >
                        <div
                          className="absolute bottom-0 left-0 w-full origin-bottom rounded-full bg-gradient-to-t from-blue-600 via-sky-500 to-blue-400"
                          style={{
                            height: "100%",
                            transform: `scaleY(${localProgress})`,
                            willChange: "transform",
                            boxShadow: isCurrent
                              ? "0 0 10px rgba(37,99,235,0.45)"
                              : "none",
                          }}
                        />
                      </div>
                    );
                  })}

                  {/* Active step counter */}
                  <div className="mt-2 text-[11px] font-semibold tabular-nums text-slate-400">
                    <span className="text-blue-600">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-0.5 text-slate-300">/</span>
                    {String(consultingServices.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column — each numbered service with its checklist */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 pt-20 pb-20 sm:px-10 lg:px-16 xl:px-20">
              {consultingServices.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={service.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`flex flex-col items-start text-left border-t border-slate-200 py-12 first:border-t-0 first:pt-0 sm:py-14 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="flex items-start gap-5 sm:gap-6">
                      <div className="flex flex-col items-center pt-1 flex-none">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tabular-nums leading-none bg-gradient-to-b from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-3 h-10 w-px bg-gradient-to-b from-blue-600/40 to-transparent sm:h-14" />
                      </div>

                      <div className="flex flex-col items-start">
                        <h3 className="text-left text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-[1.15]">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-left text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg xl:text-xl lg:leading-relaxed">
                          {service.description}
                        </p>

                        <h4 className="mt-8 text-left text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Key Capabilities
                        </h4>

                        <ul className="mt-4 flex flex-col gap-5">
                          {service.features.map((feature) => (
                            <li key={feature.label} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                              </span>
                              <p className="text-left text-sm leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
                                <span className="font-semibold text-slate-900">
                                  {feature.label}
                                </span>
                                {" — "}
                                {feature.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}