"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Smartphone,
  Cloud,
  Monitor,
  Link2,
  RefreshCw,
  Server,
  ShieldCheck,
  Compass,
} from "lucide-react";

import BackendSlider from "../../components/services/BackendSlider";
import BackendFAQ from "../../components/services/BackendFAQ";
import Backendexpert from "../../components/services/Backendexpert";

const serviceIcons = {
  mobile: Smartphone,
  cloud: Cloud,
  "web-apps": Monitor,
  api: Link2,
  refactoring: RefreshCw,
  server: Server,
  testing: ShieldCheck,
  consulting: Compass,
};

const backendServices = [
  {
    id: "mobile",
    navTitle: "Mobile App Back-End Development",
    category: "Mobile Solutions",
    titleLine1: "Mobile App ",
    titleLine2: "Back-End Development",
    shortDesc:
      "Never worry about unpredictable user loads or cross-device compatibility anymore: we develop a back-end for native (Java/Kotlin, Swift) and cross-platform (Flutter, React Native, Kotlin Multiplatform) applications that will run on different OS and devices like iOS and Android.",
    image: "/images/services/svc-mobile.jpg",
    imageAlt: "Mobile backend application architecture",
    bullets: [
      { label: "Mobile banking backends.", text: "We build PCI-ready mobile banking backends with KYC/AML flows, transaction histories, limits management, and fraud checks for iOS and Android apps." },
      { label: "Courier apps.", text: "We power courier and driver apps with trip assignment, GPS tracking, delivery status updates, and proof-of-delivery sync to your core systems." },
      { label: "Field operations.", text: "Our back end application development services deliver solutions for operators and technicians with work orders, asset status, checklists, and downtime reporting tied into ERP, MES, or CMMS." },
      { label: "Push messaging.", text: "We implement push and in-app messaging backends that trigger alerts for payments, shipments, incidents, and account activity in real time." },
      { label: "Offline-first sync engines.", text: "We design offline-first sync engines with local caching and conflict resolution for unstable networks in warehouses, plants, and on the road." },
    ],
    conclusion:
      "A well-architected mobile backend protects the business as the product scales. It enables mobile products to behave consistently across devices and stay stable under peak demand.",
  },
  {
    id: "cloud",
    navTitle: "Cloud Back-End Solutions",
    category: "Infrastructure",
    titleLine1: "Cloud ",
    titleLine2: "Back-End Solutions",
    shortDesc:
      "Switch to cloud infrastructure to scale up and down easily, handle heavy loads, and eliminate latency issues. Let us assist you in migration to public, private, or hybrid clouds. We support AWS, Google Cloud, Azure and other cloud vendors.",
    image: "/images/services/svc-cloud.jpg",
    imageAlt: "Global cloud server network visualization",
    bullets: [
      { label: "Cloud migration backends.", text: "We handle Java back end development migrations to AWS, Azure, or GCP with a mix of re-hosting, re-platforming, and targeted refactoring." },
      { label: "Microservices architectures.", text: "We design and implement containerized microservices with Kubernetes, service discovery, centralized configuration, and full observability." },
      { label: "Serverless workloads.", text: "We build serverless APIs and event handlers on Lambda, Azure Functions, or Cloud Functions for spiky workloads like campaigns, billing, and ETL." },
      { label: "Multi-tenant SaaS cores.", text: "We architect multi-tenant SaaS backends with tenant isolation, subscription management, RBAC, and metered usage tracking." },
      { label: "Cloud reliability engineering.", text: "We set up CI/CD, infrastructure as code, autoscaling, backup and disaster recovery, monitoring, and alerting for production cloud workloads." },
    ],
    conclusion:
      "Cloud backend solutions provide the ability to scale capacity in line with demand while keeping performance stable and operating costs under control. A well-executed cloud migration reduces infrastructure constraints, improves system resilience under peak loads, and gives teams the flexibility to adapt architecture without latency becoming a limiting factor.",
  },
  {
    id: "web-apps",
    navTitle: "Web Applications",
    category: "High-Load Systems",
    titleLine1: "Web Applications ",
    titleLine2: "Back-End Development",
    shortDesc:
      "Whether it's a large-scale system, web portal, or IoT infrastructure, our team will deliver high-load performance systems with enhanced stability. We will leverage server-side logic and infrastructure to ensure smooth and high platform performance.",
    image: "/images/services/svc-web.jpg",
    imageAlt: "Analytics and web app performance dashboards",
    bullets: [
      { label: "Customer and partner portals.", text: "We create secure portals for customers, agents, shippers, and suppliers with tailored roles, self-service tools, and API connectivity." },
      { label: "Enterprise system extensions.", text: "We extend ERP, MES, WMS, and TMS with custom backends for new workflows, events, and integration endpoints that the core system lacks." },
      { label: "Analytics backends.", text: "We use Python back end development to aggregate operational, financial, and logistics data into backend services that power dashboards, exports, and alerting." },
      { label: "Pricing and order engines.", text: "We implement pricing, quoting, and order management engines with configurable rules, approvals, and lifecycle tracking." },
      { label: "Workflow automation cores.", text: "We build workflow backends that orchestrate underwriting, credit approvals, shipment exceptions, maintenance requests, and similar processes." },
    ],
    conclusion:
      "For the business, this means stable back end web development that ensures platforms continue to perform as demand grows, without sudden slowdowns, outages, or costly firefighting. A stable backend turns growth into a controllable process and allows the product to evolve without performance becoming a limiting factor.",
  },
  {
    id: "api",
    navTitle: "API Development and Integration",
    category: "Integrations",
    titleLine1: "API Development ",
    titleLine2: "& System Integration",
    shortDesc:
      "Developing versatile solutions for mobile, web, and other back-end to improve your current interoperability level, enable multi-platform functionality, share data across systems, and leverage seamless integration with third-party services. Using REST API, GraphQL, WebSocket, Hooks, and EventStreams.",
    image: "/images/services/svc-api.jpg",
    imageAlt: "API server infrastructure and data integration hubs",
    bullets: [
      { label: "Payment APIs.", text: "We integrate payment providers such as Stripe, PayPal, ACH, and wallets and build reconciliation logic, webhooks, and payout flows." },
      { label: "Banking and KYC APIs.", text: "We connect to banking cores, KYC/AML providers, and credit bureaus through secure APIs with strict access control and auditing." },
      { label: "Logistics APIs.", text: "We integrate carrier and telematics APIs for parcel, freight, GPS tracking, route status, and proof-of-delivery data." },
      { label: "Industrial IoT APIs.", text: "We expose and consume APIs for IIoT platforms, gateways, and machine data, streaming telemetry into scalable cloud backends." },
      { label: "Public and partner APIs.", text: "We design and operate API development back end platforms with OAuth2, rate limiting, versioning, and developer onboarding tools. Stable API contracts and versioning strategies allow frontend and partner teams to evolve independently, while backend modernization continues in parallel." },
    ],
    conclusion:
      "Strong API design turns fragmented systems into a single, reliable business platform. It removes integration friction, accelerates feature delivery across platforms, and allows data to flow freely between products, partners, and services—without instability or manual overhead.",
  },
  {
    id: "refactoring",
    navTitle: "Back-End Refactoring",
    category: "Optimization",
    titleLine1: "Legacy Software ",
    titleLine2: "Back-End Refactoring",
    shortDesc:
      "Failing to get optimum app performance? Devox Software can rehaul the entire solution infrastructure, leaving the front end intact. Rebuild existing systems to reduce development, infrastructural and supporting costs, enhancing the code base quality on the way.",
    image: "/images/services/svc-refactoring.jpg",
    imageAlt: "Software engineer refactoring backend source code",
    bullets: [
      { label: "Backend audit roadmap.", text: "We analyze codebases, dependencies, data flows, and infrastructure to define a clear, risk-aware refactoring roadmap with measurable performance and cost outcomes. The roadmap is organized into independent slices, each delivering production-ready improvements with clear ownership, quality gates, and visible impact on performance and maintainability." },
      { label: "API refactoring integration.", text: "We deliver API development back end improvements by redesigning and stabilizing backend APIs using REST or GraphQL to improve scalability, integration reliability, and long-term maintainability." },
      { label: "Microservices refactoring.", text: "We break down tightly coupled backends into well-defined services to enable independent scaling, faster releases, and architectural clarity." },
      { label: "Cloud-ready refactoring.", text: "We refactor backend components for cloud-native operation and align them with automated CI/CD pipelines to support predictable, low-risk delivery." },
      { label: "Performance optimization.", text: "We optimize backend performance through data access tuning, caching, and runtime observability to keep systems responsive as load and complexity grow." },
    ],
    conclusion:
      "In many back end development projects, refactoring restores control over performance and costs without disrupting users or ongoing operations. We decompose backend systems into delivery slices aligned with business flows. Each slice moves through audit, refactor or rewrite, automated testing, and production release on its own timeline, allowing teams to modernize continuously while feature development moves forward.",
  },
  {
    id: "server",
    navTitle: "Custom Server Development",
    category: "Custom Hardware",
    titleLine1: "Custom On-Premise ",
    titleLine2: "Server Development",
    shortDesc:
      "If you need a close local infrastructure for an internal network, we can develop a custom server exclusively for your company's needs. Relevant for a product that has unique requirements like high-performance processing, advanced security needs, or low-latency demands.",
    image: "/images/services/svc-server.jpg",
    imageAlt: "High performance custom server racks",
    bullets: [
      { label: "Backend audit roadmap.", text: "We analyze codebases, dependencies, data flows, and infrastructure to define a clear, risk-aware refactoring roadmap with measurable performance and cost outcomes." },
      { label: "API refactoring integration.", text: "We deliver API development back end improvements by redesigning and stabilizing backend APIs using REST or GraphQL." },
      { label: "Microservices refactoring.", text: "We break down tightly coupled backends into well-defined services to enable independent scaling and faster releases." },
      { label: "Cloud-ready refactoring.", text: "We refactor backend components for cloud-native operation and align them with automated CI/CD pipelines." },
      { label: "Performance optimization.", text: "We optimize backend performance through data access tuning, caching, and runtime observability." },
    ],
    conclusion:
      "In many back end development projects, refactoring restores control over performance and costs without disrupting users or ongoing operations, allowing teams to modernize continuously while feature development moves forward.",
  },
  {
    id: "testing",
    navTitle: "Back-End Testing",
    category: "Quality Assurance",
    titleLine1: "Comprehensive System ",
    titleLine2: "Back-End Testing",
    shortDesc:
      "Get an exhaustive test coverage of your existing back-end. We're conducting security and stress testing to trial-run your app's back-end and evaluate its performance under pressure, resistance to high load or attacks, and overall capacity. No stones unturned, no potential issues undetected.",
    image: "/images/services/svc-testing.jpg",
    imageAlt: "Security operations dashboard testing server integrity",
    bullets: [
      { label: "Backend testing strategy.", text: "We define a backend testing strategy that aligns business logic, integration risks, and system boundaries with meaningful test coverage." },
      { label: "Automated backend testing.", text: "We implement automated tests that validate core logic, service interactions, and data consistency across backend components." },
      { label: "API contract testing.", text: "We test backend APIs against defined contracts to ensure reliability, backward compatibility, and safe evolution of integrations." },
      { label: "Performance load testing.", text: "We validate backend behavior under realistic load scenarios to uncover bottlenecks before they impact users or operations." },
      { label: "Regression validation.", text: "We run regression testing pipelines that verify backend stability as changes move through CI/CD toward production." },
    ],
    conclusion:
      "By validating business logic, data integrity, and service interactions before changes reach production, teams reduce outage risk, avoid revenue-impacting defects, and keep delivery predictable as systems evolve.",
  },
  {
    id: "consulting",
    navTitle: "Back-End Consulting",
    category: "Advisory",
    titleLine1: "Architecture & Tech ",
    titleLine2: "Back-End Consulting",
    shortDesc:
      "Let us provide sound guidance into any aspect of back-end development that is relevant for you, help you pick a proper solution, or assist in finding the way to design, develop, optimize, and maintain the back-end components of your software applications.",
    image: "/images/services/svc-consulting.jpg",
    imageAlt: "Software architect consulting on backend solution design",
    bullets: [
      { label: "Backend architecture advisory.", text: "We advise on backend architecture choices that balance scalability, maintainability, and long-term operational cost." },
      { label: "Technology stack guidance.", text: "We help select back end development technologies and frameworks based on real workload demands, team maturity, and growth plans." },
      { label: "Legacy system modernization.", text: "We assess existing backend systems and define pragmatic modernization paths that reduce risk while improving delivery speed." },
      { label: "Scalability performance consulting.", text: "We identify architectural and data-level constraints that limit backend scalability and recommend targeted improvements." },
      { label: "Delivery governance advisory.", text: "We support backend decision-making with guidance on delivery models, technical risk management, and engineering governance." },
    ],
    conclusion:
      "Backend consulting helps avoid costly architectural mistakes by aligning technical decisions with real-world product, scalability, and operational needs. It shortens decision cycles, prevents expensive rework, and ensures backend investments support long-term growth instead of locking the business into fragile or costly paths.",
  },
];

export default function BackendServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wheelAreaRef = useRef(null);
  const isLocked = useRef(false);

  const activeService = backendServices[currentIndex];

  useEffect(() => {
    const el = wheelAreaRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const goingDown = e.deltaY > 0;
      const canGoDown = currentIndex < backendServices.length - 1;
      const canGoUp = currentIndex > 0;

      if ((goingDown && !canGoDown) || (!goingDown && !canGoUp)) return;

      e.preventDefault();
      if (isLocked.current) return;
      isLocked.current = true;

      setCurrentIndex((prev) =>
        goingDown
          ? Math.min(backendServices.length - 1, prev + 1)
          : Math.max(0, prev - 1)
      );

      window.setTimeout(() => {
        isLocked.current = false;
      }, 500);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);

  return (
    <>
      {/* Top Header Hero Slider */}
      <BackendSlider />

      {/* Interactive Services Carousel */}
      <section className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-white p-4 sm:p-6 lg:p-8 xl:p-12 text-slate-900">
        {/* Soft floating decorative blur circles */}
        <div className="pointer-events-none absolute left-10 top-16 z-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute left-52 bottom-24 z-0 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Right Background Image Overlay */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 h-full w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                unoptimized
                priority
                className="object-cover object-center opacity-90 lg:opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 sm:hidden" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Grid Content Area - Optimized Column Ratios */}
        <div
          ref={wheelAreaRef}
          className="relative z-10 mx-auto grid w-full max-w-[1536px] grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-14"
        >
          {/* Left Navigation Panel Tabs - Compact Width */}
          <div className="flex flex-col justify-center lg:col-span-4 xl:col-span-3.5">
            <div className="mb-4 flex items-center gap-2">
              <span className="relative inline-flex animate-fade-up items-center gap-2 overflow-hidden rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                <Code2 className="h-3.5 w-3.5 text-blue-600" />
                <span className="relative z-10 font-bold uppercase tracking-wider text-[11px]">
                  Backend Services
                </span>
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent animate-shimmer" />
              </span>
            </div>

            <div className="no-scrollbar flex flex-row gap-2 overflow-x-auto pb-2 sm:pb-0 lg:max-h-[75vh] lg:flex-col lg:gap-1.5 lg:overflow-y-auto lg:pr-2">
              {backendServices.map((service, idx) => {
                const isActive = idx === currentIndex;
                const TabIcon = serviceIcons[service.id] ?? Code2;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`group relative flex min-w-[220px] shrink-0 items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-all duration-200 focus:outline-none lg:min-w-0 lg:w-full ${
                      isActive
                        ? "bg-white shadow-md shadow-blue-500/10 ring-1 ring-blue-100"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-sm"
                          : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                      }`}
                    >
                      <TabIcon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span
                      className={`relative z-10 text-xs font-bold leading-tight tracking-tight transition-colors sm:text-sm ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-extrabold"
                          : "text-zinc-600 group-hover:text-slate-900"
                      }`}
                    >
                      {service.navTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Content Panel - Expanded Width */}
          <div className="flex flex-col justify-center lg:col-span-8 xl:col-span-8.5">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeService.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mb-4 animate-fade-up text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {activeService.titleLine1}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {activeService.titleLine2}
                </span>
              </motion.h2>
            </AnimatePresence>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                    {activeService.category}
                  </span>

                  <p className="mb-5 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-lg">
                    {activeService.shortDesc}
                  </p>

                  <div className="mb-6 max-w-3xl space-y-2.5">
                    {activeService.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                        <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm lg:text-base">
                          <strong className="mr-1 font-bold text-slate-800">
                            {bullet.label}
                          </strong>
                          {bullet.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="max-w-3xl rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur-md">
                    <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm lg:text-base">
                      <strong className="mr-1 font-bold text-slate-900">
                        Business Impact:
                      </strong>
                      {activeService.conclusion}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <BackendFAQ />
      <Backendexpert />
    </>
  );
}