"use client";

import Image from "next/image";
import { useRef } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ConsultingProvider() {
  const containerRef = useRef(null);

  // Track scroll position across 4 stacked cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll ranges: Card 2 (0.15-0.35), Card 3 (0.4-0.6), Card 4 (0.65-0.85)
  const card2Y = useTransform(scrollYProgress, [0.15, 0.35], ["100%", "0%"]);
  const card3Y = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const card4Y = useTransform(scrollYProgress, [0.65, 0.85], ["100%", "0%"]);

  const webCapabilities = [
    {
      title: "Product Design",
      description: "Create intuitive, user-focused digital experiences.",
    },
    {
      title: "Architecture Consulting",
      description: "Design scalable and maintainable web architectures.",
    },
    {
      title: "Modernization",
      description: "Upgrade legacy applications for improved performance and scalability.",
    },
    {
      title: "Cloud Migration",
      description: "Move web applications to secure, scalable cloud environments.",
    },
    {
      title: "Web Development",
      description: "Build robust, responsive, and high-performing web applications.",
    },
    {
      title: "Process & Code Audit",
      description: "Identify technical gaps, risks, and opportunities for improvement.",
    },
    {
      title: "Performance Optimization",
      description: "Improve application speed, stability, and overall efficiency.",
    },
    {
      title: "Troubleshooting",
      description: "Diagnose and resolve complex technical and application issues.",
    },
  ];

  const mobileCapabilities = [
    {
      title: "Mobile Product Design",
      description: "Create intuitive, engaging, and user-centered mobile experiences.",
    },
    {
      title: "Architecture Consulting",
      description: "Define scalable architectures for reliable and maintainable mobile applications.",
    },
    {
      title: "Mobile App Development",
      description: "Build high-performing native and cross-platform mobile applications.",
    },
    {
      title: "Modernization",
      description: "Upgrade legacy mobile applications with modern technologies and architecture.",
    },
    {
      title: "Cloud & API Integration",
      description: "Connect mobile applications with secure cloud services, APIs, and backend systems.",
    },
    {
      title: "Performance Optimization",
      description: "Improve app speed, responsiveness, stability, and resource efficiency.",
    },
  ];

  const saasCapabilities = [
    {
      title: "SaaS Product Strategy",
      description: "Define product vision, roadmap, business models, and opportunities for sustainable growth.",
    },
    {
      title: "SaaS Architecture",
      description: "Design scalable, cloud-native, and multi-tenant architectures with secure customer data isolation.",
    },
    {
      title: "Subscription & Billing",
      description: "Design flexible subscription, recurring payment, usage-based pricing, invoicing, and billing workflows.",
    },
    {
      title: "SaaS Migration",
      description: "Transform legacy, desktop, or on-premise applications into modern, scalable SaaS platforms.",
    },
    {
      title: "AI & Automation",
      description: "Integrate AI capabilities, intelligent workflows, copilots, and agentic experiences into SaaS products.",
    },
    {
      title: "Security & Compliance",
      description: "Strengthen authentication, access control, tenant isolation, data protection, auditability, and compliance readiness.",
    },
  ];

  const cloudCapabilities = [
    {
      title: "Cloud Strategy & Assessment",
      description: "Define the right cloud approach based on business goals, workloads, infrastructure, and growth requirements.",
    },
    {
      title: "Cloud Architecture",
      description: "Design secure, scalable, resilient, and high-performing cloud architectures.",
    },
    {
      title: "Cloud Migration",
      description: "Plan and execute the migration of applications, workloads, data, and infrastructure to modern cloud environments.",
    },
    {
      title: "Cloud Modernization",
      description: "Transform legacy applications and infrastructure using cloud-native technologies and modern architecture patterns.",
    },
    {
      title: "Cloud Security",
      description: "Strengthen identity, access control, data protection, network security, and cloud governance.",
    },
    {
      title: "Cloud DevOps & Automation",
      description: "Automate infrastructure, deployments, monitoring, and development workflows for faster and more reliable delivery.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[450vh] w-full bg-slate-950 text-slate-100"
    >
      {/* Fixed Sticky Viewport Stage with Navbar Offset (top-20) */}
      <div className="sticky top-20 flex min-h-[calc(100vh-80px)] w-full flex-col justify-start overflow-hidden pt-4 pb-12">
        {/* Dark Theme Background Dot Texture */}
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

        {/* Radial Background Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

        {/* Main Content Container */}
        <div className="relative z-10 flex h-full w-full flex-1 flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          {/* Eyebrow Badge */}
          <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/30 bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-400 shadow-lg shadow-blue-950/50 backdrop-blur-md sm:px-3.5">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>Software Development Consulting</span>
          </div>

          {/* Fixed Header Section */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-left text-xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-[1.15]">
                We Provide Expert Consulting Across{" "}
                <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Technology & Software Solutions
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-left text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base lg:text-lg xl:text-xl lg:leading-relaxed">
                Our consulting expertise spans technology strategy, business solutions, software development, cloud, data, and digital platforms—helping organizations make informed technology decisions and build scalable solutions aligned with their business goals.
              </p>
            </div>
          </div>

          {/* Sticky Stacked Hero Container Stage */}
          <div className="relative mt-6 h-[480px] sm:h-[520px] lg:h-[550px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl transition-all duration-300 hover:shadow-blue-900/10">
            
            {/* CARD 1: Web Consulting */}
            <div className="absolute inset-0 z-10 h-full w-full overflow-hidden">
              <Image
                src="/images/services/web-consulting-hero.jpg"
                alt="Web Consulting Hero"
                width={1920}
                height={640}
                priority
                className="h-64 w-full object-cover object-right sm:h-80 md:h-96 lg:absolute lg:inset-0 lg:h-full"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/95 lg:bg-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-5 sm:p-8 md:p-10 lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-2xl lg:p-10 xl:max-w-3xl xl:p-12">
                <div className="flex w-full flex-col items-start text-left">
                  <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-3.5 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Software Development Consulting</span>
                  </div>

                  <h3 className="mb-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.15]">
                    Web{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      Consulting
                    </span>
                  </h3>

                  <p className="mb-4 text-xs font-normal leading-relaxed text-slate-700 antialiased sm:text-sm md:text-base lg:leading-relaxed">
                    Design, modernize, and optimize high-performing web solutions with expert guidance across product design, architecture, cloud migration, development, and technical operations. We help businesses improve existing applications and build secure, scalable, reliable, and future-ready web experiences.
                  </p>

                  <div className="w-full">
                    <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                      Key Capabilities:
                    </h4>

                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
                      {webCapabilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                          <span className="text-xs leading-snug text-slate-800 sm:text-sm">
                            <strong className="font-semibold text-slate-950">
                              {item.title}
                            </strong>{" "}
                            — {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Mobile Consulting */}
            <motion.div
              style={{ y: card2Y }}
              className="absolute inset-0 z-20 h-full w-full overflow-hidden bg-slate-900"
            >
              <Image
                src="/images/services/mobile-consulting-hero.jpg"
                alt="Mobile Consulting Hero"
                width={1920}
                height={640}
                priority
                className="h-64 w-full object-cover object-right sm:h-80 md:h-96 lg:absolute lg:inset-0 lg:h-full"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/95 lg:bg-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-5 sm:p-8 md:p-10 lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-2xl lg:p-10 xl:max-w-3xl xl:p-12">
                <div className="flex w-full flex-col items-start text-left">
                  <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-3.5 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Software Development Consulting</span>
                  </div>

                  <h3 className="mb-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.15]">
                    Mobile{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      Consulting
                    </span>
                  </h3>

                  <p className="mb-4 text-xs font-normal leading-relaxed text-slate-700 antialiased sm:text-sm md:text-base lg:leading-relaxed">
                    Design, modernize, and optimize mobile solutions with expert guidance across product strategy, UX/UI, architecture, development, cloud integration, and performance. We help businesses create secure, scalable, and engaging mobile experiences while improving existing applications through modernization and technical optimization.
                  </p>

                  <div className="w-full">
                    <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                      Key Capabilities:
                    </h4>

                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
                      {mobileCapabilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                          <span className="text-xs leading-snug text-slate-800 sm:text-sm">
                            <strong className="font-semibold text-slate-950">
                              {item.title}
                            </strong>{" "}
                            — {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: SaaS Consulting */}
            <motion.div
              style={{ y: card3Y }}
              className="absolute inset-0 z-30 h-full w-full overflow-hidden bg-slate-900"
            >
              <Image
                src="/images/services/saas-consulting-hero.jpg"
                alt="SaaS Consulting Hero"
                width={1920}
                height={640}
                priority
                className="h-64 w-full object-cover object-right sm:h-80 md:h-96 lg:absolute lg:inset-0 lg:h-full"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/95 lg:bg-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-5 sm:p-8 md:p-10 lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-2xl lg:p-10 xl:max-w-3xl xl:p-12">
                <div className="flex w-full flex-col items-start text-left">
                  <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-3.5 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Software Development Consulting</span>
                  </div>

                  <h3 className="mb-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.15]">
                    SaaS{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      Consulting
                    </span>
                  </h3>

                  <p className="mb-4 text-xs font-normal leading-relaxed text-slate-700 antialiased sm:text-sm md:text-base lg:leading-relaxed">
                    Transform software ideas into scalable, cloud-native SaaS products with expert guidance across product strategy, architecture, development, and growth. We help businesses design multi-tenant platforms, define subscription and billing models, integrate AI and third-party services, modernize existing applications, and establish secure foundations for sustainable SaaS growth.
                  </p>

                  <div className="w-full">
                    <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                      Key Capabilities:
                    </h4>

                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
                      {saasCapabilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                          <span className="text-xs leading-snug text-slate-800 sm:text-sm">
                            <strong className="font-semibold text-slate-950">
                              {item.title}
                            </strong>{" "}
                            — {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Cloud Consulting */}
            <motion.div
              style={{ y: card4Y }}
              className="absolute inset-0 z-40 h-full w-full overflow-hidden bg-slate-900"
            >
              <Image
                src="/images/services/cloud-consulting-hero.jpg"
                alt="Cloud Consulting Hero"
                width={1920}
                height={640}
                priority
                className="h-64 w-full object-cover object-right sm:h-80 md:h-96 lg:absolute lg:inset-0 lg:h-full"
              />

              <div className="pointer-events-none absolute inset-0 bg-white/95 lg:bg-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-5 sm:p-8 md:p-10 lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-2xl lg:p-10 xl:max-w-3xl xl:p-12">
                <div className="flex w-full flex-col items-start text-left">
                  <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-3.5 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Software Development Consulting</span>
                  </div>

                  <h3 className="mb-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[1.15]">
                    Cloud{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      Consulting
                    </span>
                  </h3>

                  <p className="mb-4 text-xs font-normal leading-relaxed text-slate-700 antialiased sm:text-sm md:text-base lg:leading-relaxed">
                    Build, modernize, and optimize cloud environments with expert guidance across cloud strategy, architecture, migration, security, and operations. We help businesses adopt the right cloud technologies, modernize infrastructure, improve scalability and reliability, and establish secure, efficient cloud foundations that support long-term digital growth.
                  </p>

                  <div className="w-full">
                    <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 sm:text-sm">
                      Key Capabilities:
                    </h4>

                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5">
                      {cloudCapabilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 sm:h-4 sm:w-4" />
                          <span className="text-xs leading-snug text-slate-800 sm:text-sm">
                            <strong className="font-semibold text-slate-950">
                              {item.title}
                            </strong>{" "}
                            — {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}