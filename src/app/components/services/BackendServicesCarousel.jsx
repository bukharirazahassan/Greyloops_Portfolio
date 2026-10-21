// src/app/components/services/BackendServicesCarousel.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
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
      "Failing to get optimum app performance? Greyloops can rehaul the entire solution infrastructure, leaving the front end intact. Rebuild existing systems to reduce development, infrastructural and supporting costs, enhancing the code base quality on the way.",
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

const pad = (n) => String(n).padStart(2, "0");

export default function BackendServicesCarousel() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  // The service block in the middle of the screen becomes the active one
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        }),
      { rootMargin: "-40% 0px -45% 0px" }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i) => {
    setActive(i);
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const current = backendServices[active];
  const CurrentIcon = serviceIcons[current.id] ?? Code2;

  return (
    <>
      {/* Top Header Hero Slider */}
      <BackendSlider />

      {/* ───────── Scroll-synced services: pinned image left, services right ───────── */}
      <section className="relative w-full overflow-x-clip bg-slate-50 py-12 lg:py-16">
        {/* Standard light theme: dots + blue / indigo glow circles */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />
          <div className="absolute left-0 top-[6%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute right-0 top-[28%] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
          <div className="absolute left-0 top-[52%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute right-0 top-[76%] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col items-start px-2 text-left sm:px-4 lg:mb-14"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
              <Code2 className="h-3.5 w-3.5 text-blue-600" />
              <span>Backend Services</span>
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Our Core Back-End <span className="text-blue-600">Development Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ───────── Left: pinned square image (desktop) ───────── */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center justify-center">
                <div
                  className="relative"
                  style={{ width: "min(100%, 720px, calc(100vh - 10.5rem))" }}
                >
                  <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-blue-400/15 blur-3xl" />

                  <div className="relative rounded-[2rem] bg-white/70 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.12)] ring-1 ring-white/80 backdrop-blur-xl">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-slate-50">
                      {backendServices.map((service, i) => (
                        <motion.div
                          key={service.id}
                          initial={false}
                          animate={{
                            opacity: active === i ? 1 : 0,
                            scale: active === i ? 1 : 1.04,
                          }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0"
                          aria-hidden={active !== i}
                        >
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            unoptimized
                            priority={i === 0}
                            sizes="(min-width: 1024px) 720px, 100vw"
                            className="object-cover object-center"
                          />
                        </motion.div>
                      ))}

                      {/* Counter chip */}
                      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/85 py-1.5 pl-1.5 pr-3.5 shadow-md shadow-slate-900/10 ring-1 ring-white/80 backdrop-blur-xl">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                          <CurrentIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                        </span>
                        <span className="font-mono text-xs font-semibold tabular-nums text-slate-700">
                          {pad(active + 1)} / {pad(backendServices.length)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Segmented progress / quick navigation */}
                  <div className="mt-4 flex gap-1.5 px-1" role="tablist" aria-label="Back-end services">
                    {backendServices.map((service, i) => (
                      <button
                        key={service.id}
                        type="button"
                        role="tab"
                        aria-selected={active === i}
                        aria-label={service.navTitle}
                        title={service.navTitle}
                        onClick={() => goTo(i)}
                        className="group h-5 flex-1 focus:outline-none"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-500 group-focus-visible:ring-2 group-focus-visible:ring-blue-500 ${
                            i < active
                              ? "bg-blue-300"
                              : i === active
                              ? "bg-blue-600"
                              : "bg-slate-200 group-hover:bg-slate-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ───────── Right: service list ───────── */}
            <ol className="relative space-y-6 lg:col-span-7 lg:space-y-10 lg:pl-10">
              {/* Timeline line (desktop) */}
              <span className="pointer-events-none absolute bottom-6 left-[0.5625rem] top-6 hidden w-px bg-slate-200 lg:block" />

              {backendServices.map((service, i) => {
                const Icon = serviceIcons[service.id] ?? Code2;
                const isActive = active === i;
                return (
                  <li
                    key={service.id}
                    ref={(el) => (itemRefs.current[i] = el)}
                    data-index={i}
                    className={`relative scroll-mt-28 transition-opacity duration-500 ${
                      isActive ? "" : "lg:opacity-60"
                    }`}
                  >
                    {/* Timeline dot (desktop) */}
                    <span
                      className={`absolute -left-10 top-9 z-10 hidden h-[1.125rem] w-[1.125rem] rounded-full border-4 transition-all duration-500 lg:block ${
                        isActive
                          ? "border-blue-100 bg-blue-600 shadow-md shadow-blue-600/40"
                          : "border-slate-50 bg-slate-300"
                      }`}
                    />

                    <motion.article
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 sm:p-8 lg:p-10 ${
                        isActive
                          ? "bg-white/90 shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-blue-200"
                          : "bg-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.05)] ring-1 ring-white/80"
                      }`}
                    >
                      {/* Mobile / tablet: image with its own card */}
                      <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 lg:hidden">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 100vw, 720px"
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Icon, number and category */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/25">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-mono text-sm font-semibold text-blue-600">
                          {pad(i + 1)}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          / {pad(backendServices.length)}
                        </span>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                          {service.category}
                        </span>
                      </div>

                      {/* Standard two-colour title */}
                      <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                        <span className="text-slate-900">{service.titleLine1}</span>
                        <span className="text-blue-600">{service.titleLine2}</span>
                      </h3>

                      <p className="mt-4 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                        {service.shortDesc}
                      </p>

                      {/* Capabilities */}
                      <ul className="mt-6 space-y-3.5">
                        {service.bullets.map((bullet) => (
                          <li key={bullet.label} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                              <strong className="mr-1 font-bold text-slate-900">
                                {bullet.label}
                              </strong>
                              {bullet.text}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Business impact */}
                      <div className="mt-7 rounded-2xl bg-blue-50/70 p-5 ring-1 ring-blue-100">
                        <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                          <strong className="mr-1 font-bold text-blue-600">
                            Business Impact:
                          </strong>
                          {service.conclusion}
                        </p>
                      </div>
                    </motion.article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <BackendFAQ />
      <Backendexpert />
    </>
  );
}