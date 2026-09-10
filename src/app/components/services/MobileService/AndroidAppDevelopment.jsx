"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Check,
  ShieldCheck,
  Cloud,
  Bot,
  Network,
  Globe2,
  Cpu,
} from "lucide-react";
import MobileTech from "@/app/components/services/MobileService/MobileTech";
import BuildingIndustry from "@/app/components/services/MobileService/Buildingindustry";
import DevelopmentProcess from "@/app/components/services/MobileService/Developmentprocess"
import AndroidFAQs from "@/app/components/services/MobileService/AndroidFAQs"

export default function AndroidAppDevelopment() {
  const heroServices = [
    "Android App Strategy & Architecture",
    "Kotlin & Java Native Development",
    "Android UI/UX Design (Material You)",
    "API & Third-Party Integration",
    "Android App Modernization & Refactoring",
    "Google Play Store Deployment & Maintenance",
  ];

  const coreCapabilities = [
    {
      icon: Cloud,
      title: "Scalable Architecture",
      description:
        "Build robust Android applications supported by AWS, Azure, and GCP, with flexible architectures designed for performance, scalability, reliability, and long-term product growth.",
    },
    {
      icon: Bot,
      title: "AI-Powered Personalization",
      description:
        "Create intelligent digital experiences using AI-driven personalization that adapts to user behavior, interactions, preferences, and evolving business requirements.",
    },
    {
      icon: Network,
      title: "Enterprise Integration",
      description:
        "Connect Android applications seamlessly with ERP, CRM, APIs, cloud platforms, databases, and mission-critical legacy systems to create unified business workflows.",
    },
    {
      icon: Globe2,
      title: "Modular Backend",
      description:
        "Develop flexible and modular backend architectures that support feature expansion, high transaction volumes, multi-region operations, and evolving digital product requirements.",
    },
    {
      icon: Cpu,
      title: "Future-Ready Tech",
      description:
        "Build Android solutions aligned with evolving OS versions, security standards, device capabilities, and emerging technologies to support long-term product sustainability.",
    },
  ];

  const consultationSubItems = [
    {
      title: "1. Market Analysis",
      description:
        "Conduct detailed market research and competitive analysis to identify opportunities and shape digital products around business objectives and user needs.",
    },
    {
      title: "2. Technology Feasibility",
      description:
        "Evaluate technology stacks, frameworks, cloud platforms, and integrations to define the right technical foundation for scalable Android digital products.",
    },
  ];

  const uiuxSubItems = [
    {
      title: "Digital Product Experience",
      description:
        "Create intuitive interfaces, adaptive navigation, and engaging user experiences that support product usability, customer adoption, and evolving digital journeys.",
    },
    {
      title: "Enterprise Experience Design",
      description:
        "Design structured, scalable interfaces for complex enterprise workflows, ensuring usability, accessibility, consistency, and efficient interaction across business applications and devices.",
    },
  ];

  const customDevSubItems = [
    {
      title: "Native Development",
      description:
        "Kotlin-based applications optimized for high performance, advanced device capabilities, seamless integrations, and enterprise-grade reliability.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Modular architectures designed to support product expansion, complex business workflows, high transaction volumes, and evolving enterprise requirements.",
    },
  ];

  const testingSubItems = [
    {
      title: "Comprehensive Testing",
      description:
        "Automated and manual protocols are used to validate performance, functionality, and stability across the fragmented Android ecosystem.",
    },
    {
      title: "Security Validation",
      description:
        "Penetration tests, audits, and load validation is used to safeguard sensitive enterprise data while maintaining compliance across Android app development process.",
    },
  ];

  const multiPlatformSubItems = [
    {
      title: "CI/CD Release",
      description:
        "Our experts release optimized pipelines for efficient Google Play submissions, app store updates, and enterprise-wide deployment of Android app development solutions.",
    },
    {
      title: "Post-launch Support",
      description:
        "Continuous monitoring, upgrades, and maintenance is carried out to sustain app performance across global business operations.",
    },
  ];

  return (
    <div className="relative w-full bg-slate-950 font-sans text-slate-100">
      {/* SECTION 1: HERO (DARK THEME) */}
      <section className="relative flex min-h-[80vh] w-full items-center border-t border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Image
            src="/images/services/android_banner_home_two.png"
            alt="Android App Development Background"
            fill
            priority
            sizes="100vw"
            className="object-contain object-right"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950 via-30% to-slate-950/0 lg:w-[68%]" />
        </div>

        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] max-w-[100vw] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] max-w-[100vw] rounded-full bg-sky-500/20 blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 flex w-full max-w-7xl px-6 py-16 sm:px-12 md:px-16 lg:px-16 lg:py-20 xl:px-24">
          <div className="flex max-w-2xl flex-col items-start text-left xl:max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Android Engineering</span>
            </div>

            <h1 className="mb-6 text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
              <span className="block text-white">Android App </span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Development Company
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-left text-base font-normal leading-relaxed text-slate-300 antialiased sm:text-lg">
              We build secure, enterprise-grade Android applications designed for scalability, compliance, and seamless integration with complex IT systems. Every app is performance-optimized across devices, cloud-ready for expansion, and adaptable to evolving frameworks to support long-term digital growth for your business.
            </p>

            <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {heroServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/20 text-blue-400 shadow-sm backdrop-blur-sm">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-slate-200 sm:text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE CAPABILITIES */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] max-w-[100vw] rounded-full bg-blue-400/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] max-w-[100vw] rounded-full bg-sky-400/15 blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
          <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                <span>ENTERPRISE EXCELLENCE</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl">
                <span className="block text-slate-900">Our Core </span>
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pl-8 lg:pt-1">
              <p className="text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg">
                With over a decade of experience in building Android applications for businesses and enterprises, we create scalable digital products that support complex operations, integrate seamlessly with enterprise ecosystems, and deliver reliable experiences across diverse business environments. Our capabilities span the complete Android product lifecycle, from product strategy and UI/UX design to development, integration, testing, deployment, and ongoing optimization. We engineer solutions that combine modern Android technologies, cloud infrastructure, AI capabilities, secure APIs, and enterprise integrations to support evolving digital and business requirements.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coreCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 lg:p-8"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl" />

                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-50 to-sky-100/60 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/20">
                      <Icon className="h-7 w-7 stroke-[1.8]" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      {item.title}
                    </h3>

                    <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: STICKY STACKING CARDS */}
      <section className="relative w-full border-t border-slate-200/80 bg-slate-50 py-12 sm:py-16 pb-16">
        <div className="pointer-events-none absolute right-0 top-1/3 z-0 h-[500px] w-[500px] max-w-full rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="pointer-events-none absolute left-0 bottom-1/3 z-0 h-[500px] w-[500px] max-w-full rounded-full bg-sky-400/15 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
          <div className="mb-10 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
            <div className="flex flex-col items-start text-left lg:col-span-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl">
                <span className="block text-slate-900">Driving Business Growth </span>
                <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  with Our Android Services
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start text-left lg:col-span-7 lg:pl-8 lg:pt-1">
              <p className="text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg">
                Our full-cycle Android application development services are built for businesses that require scalability, security, and seamless integration. From strategic consulting and development to Google Play deployment, we deliver high-performance Android applications designed to support complex operations and evolving business needs. We combine modern Android technologies, cloud platforms, APIs, and enterprise integrations to create connected digital products that perform reliably across diverse devices and environments. Our approach supports the complete product lifecycle, enabling continuous enhancement, seamless scalability, and long-term digital growth.
              </p>
            </div>
          </div>

          <div className="relative flex w-full flex-col gap-12 pb-16">
            {/* CARD 1 */}
            <div className="sticky top-24 z-10 box-border grid w-full grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-2 shadow-2xl lg:grid-cols-12 lg:gap-8">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl lg:col-span-5 sm:p-8 xl:p-10">
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-600/25 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />

                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                      01
                    </div>
                    <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl">
                      <span className="text-white">Android App </span>
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Consultation
                      </span>
                    </h3>

                    <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
                      As an Android app development company, we provide strategic consulting to help businesses transform ideas into scalable digital products, define the right mobile roadmap, and reduce technical and implementation risks.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {consultationSubItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900"
                      >
                        <h4 className="mb-2 text-sm font-bold text-white sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl backdrop-blur-xl lg:col-span-7 lg:min-h-[500px]">
                <Image
                  src="/images/services/FAQs-mobile-development.png"
                  alt="FAQs Mobile Development"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="sticky top-32 z-20 box-border grid w-full grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-2 shadow-2xl lg:grid-cols-12 lg:gap-8">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl lg:col-span-5 sm:p-8 xl:p-10">
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-600/25 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />

                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                      02
                    </div>
                    <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl">
                      <span className="text-white">Android </span>
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        UI/UX Design
                      </span>
                    </h3>

                    <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
                      We design intuitive, scalable Android experiences for digital products and enterprise applications, combining user-centered design with modern Material Design principles to deliver seamless experiences across devices, workflows, and business environments.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {uiuxSubItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900"
                      >
                        <h4 className="mb-2 text-sm font-bold text-white sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl backdrop-blur-xl lg:col-span-7 lg:min-h-[500px]">
                <Image
                  src="/images/services/native_android_development.png"
                  alt="Native Android Development UI UX Design"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* CARD 3: CUSTOM ANDROID APP DEVELOPMENT */}
            <div className="sticky top-40 z-30 box-border grid w-full grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-2 shadow-2xl lg:grid-cols-12 lg:gap-8">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl lg:col-span-5 sm:p-8 xl:p-10">
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-600/25 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />

                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                      03
                    </div>
                    <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl">
                      <span className="text-white">Custom Android </span>
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        App Development
                      </span>
                    </h3>

                    <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
                      Our experts build tailored Android digital products and enterprise applications around specific business workflows, user requirements, integration needs, compliance standards, and long-term scalability.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {customDevSubItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900"
                      >
                        <h4 className="mb-2 text-sm font-bold text-white sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl backdrop-blur-xl lg:col-span-7 lg:min-h-[500px]">
                <Image
                  src="/images/services/mobile-backend-API.png"
                  alt="Custom Android App Development Backend API"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* CARD 4 */}
            <div className="sticky top-48 z-40 box-border grid w-full grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-2 shadow-2xl lg:grid-cols-12 lg:gap-8">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl lg:col-span-5 sm:p-8 xl:p-10">
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-600/25 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />

                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                      04
                    </div>
                    <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl">
                      <span className="text-white">Android App </span>
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Testing
                      </span>
                    </h3>

                    <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
                      We apply comprehensive testing and validation throughout the development lifecycle to ensure Android digital products and enterprise applications deliver reliable performance, security, usability, and compliance. Our testing approach helps identify issues early, validate complex integrations, and ensure consistent experiences across devices, environments, and business workflows.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {testingSubItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900"
                      >
                        <h4 className="mb-2 text-sm font-bold text-white sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl backdrop-blur-xl lg:col-span-7 lg:min-h-[500px]">
                <Image
                  src="/images/services/native_iOS_app.png"
                  alt="Android App Testing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* CARD 5 */}
            <div className="sticky top-56 z-50 box-border grid w-full grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-2 shadow-2xl lg:grid-cols-12 lg:gap-8">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl backdrop-blur-2xl lg:col-span-5 sm:p-8 xl:p-10">
                <div
                  className="pointer-events-none absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                <div className="pointer-events-none absolute -left-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-600/25 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />

                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                      05
                    </div>
                    <h3 className="mb-4 text-left text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl xl:text-4xl">
                      <span className="text-white">Multi-platform </span>
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        Deployment
                      </span>
                    </h3>

                    <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
                      We ensure Android digital products and enterprise applications deliver consistent, reliable experiences across smartphones, tablets, wearables, Android TV, and diverse business environments. Our deployment approach supports scalable releases, seamless updates, and optimized performance across multiple devices and platforms.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {multiPlatformSubItems.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-start rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-inner backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900"
                      >
                        <h4 className="mb-2 text-sm font-bold text-white sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl backdrop-blur-xl lg:col-span-7 lg:min-h-[500px]">
                <Image
                  src="/images/services/mobile-app-modernization.png"
                  alt="Multi-platform Deployment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH DESKTOP TECH STACK SECTION */}
      <section className="relative w-full">
        <div className="w-full">
          <MobileTech />
        </div>
      </section>
      {/* FULL-WIDTH DESKTOP TECH INDUSTRY SECTION */}
      <section className="relative w-full">
        <div className="w-full">
          <BuildingIndustry />
        </div>
      </section>
      {/* FULL-WIDTH DESKTOP Development SECTION */}
      <section className="relative w-full">
        <div className="w-full">
          <DevelopmentProcess />
        </div>
      </section>
      {/* FULL-WIDTH DESKTOP AndroidFAQs SECTION */}
      <section className="relative w-full">
        <div className="w-full">
          <AndroidFAQs />
        </div>
      </section>
      
              
                    
      
    </div>
  );
}