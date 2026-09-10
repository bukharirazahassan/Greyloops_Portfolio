"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Plus } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const INDUSTRIES = [
  {
    name: "Healthcare",
    description:
      "We build secure, scalable Android applications that support healthcare providers, patients, clinicians, and healthcare operations. Our solutions are designed around clinical workflows, data privacy, seamless integrations, and reliable access to critical healthcare services.",
    apps: [
      {
        title: "Remote Patient Monitoring Android App",
        desc: "Enable healthcare teams to remotely monitor patient health data, track vital signs, receive alerts, and support continuous care beyond traditional clinical settings.",
      },
      {
        title: "Telemedicine & Virtual Consultation Android Platform",
        desc: "Connect patients and healthcare professionals through secure video consultations, appointment scheduling, digital communication, and remote healthcare services.",
      },
      {
        title: "Mobile EHR/EMR Access App",
        desc: "Provide authorized healthcare professionals with secure mobile access to patient records, clinical information, medical history, and care workflows whenever and wherever they need them.",
      },
      {
        title: "AI-Powered Clinical Decision Support App",
        desc: "Use AI-driven insights to help healthcare professionals analyze clinical data, identify relevant patterns, support informed decisions, and improve the efficiency of care workflows.",
      },
    ],
  },
  {
    name: "FinTech",
    description:
      "We engineer enterprise-grade Android solutions for banks, financial institutions, fintech companies, and large organizations, combining secure architecture, scalable infrastructure, financial integrations, and intelligent automation to support complex digital operations.",
    apps: [
      {
        title: "Digital Banking & Mobile Wallet App",
        desc: "Build enterprise mobile banking and wallet platforms that integrate with core banking systems, payment gateways, identity services, and financial infrastructure while supporting secure account management and transactions at scale.",
      },
      {
        title: "Digital Payments & Transaction Platform",
        desc: "Develop robust Android payment platforms designed to handle high-volume transactions, multi-channel payment workflows, secure processing, reconciliation, and integration with enterprise financial systems.",
      },
      {
        title: "Personal Finance & Wealth Management App",
        desc: "Create scalable financial management platforms that connect with banking, investment, and financial data systems to support portfolio management, financial planning, reporting, and personalized enterprise-grade experiences.",
      },
      {
        title: "AI-Powered Financial Intelligence App",
        desc: "Integrate AI into enterprise financial platforms to analyze large volumes of financial data, identify patterns, support risk assessment, automate operational processes, and provide actionable intelligence for financial decision-making.",
      },
    ],
  },
  {
    name: "Banking",
    description:
      "We engineer enterprise-grade Android solutions for banks, financial institutions, and banking organizations, combining secure architecture, core banking integrations, regulatory requirements, and scalable infrastructure to support complex financial operations and digital banking services.",
    apps: [
      {
        title: "Mobile Banking & Account Management App",
        desc: "Build secure mobile banking platforms that integrate with core banking systems, customer identity services, payment infrastructure, and financial APIs while enabling account management, transfers, statements, and banking services at scale.",
      },
      {
        title: "Corporate & Business Banking App",
        desc: "Develop enterprise mobile banking solutions that support corporate accounts, approval workflows, payment authorization, transaction management, cash management, and role-based access for business users and financial teams.",
      },
      {
        title: "Secure Payment & Transaction Platform",
        desc: "Create high-performance Android platforms capable of supporting secure payments, fund transfers, transaction processing, authentication, reconciliation, and integration with enterprise financial infrastructure.",
      },
      {
        title: "AI-Powered Banking Intelligence App",
        desc: "Integrate AI into banking platforms to analyze financial data, identify transaction patterns, support fraud and risk detection, automate operational workflows, and provide intelligent insights for financial decision-making.",
      },
    ],
  },
  {
    name: "Lending",
    apps: [
      { title: "Loan Application & Approval Android App", desc: "Accelerate submission flows and automated underwriting decisions for borrowers." },
      { title: "Digital Credit Scoring Application", desc: "Evaluate alternative data sources to generate instant credit risk profiles." },
      { title: "EMI Scheduling & Payment Reminder App", desc: "Automate installment tracking and trigger proactive payment notifications." },
      { title: "Customer Relationship Management (CRM) Android App", desc: "Manage borrower interactions, follow-ups, and pipeline conversions on mobile." },
    ],
  },
  {
    name: "Insurance",
    apps: [
      { title: "Policy Comparison & Management App", desc: "Compare coverage tiers and administer active policies from a unified dashboard." },
      { title: "Mobile Claims Processing Android Solution", desc: "Submit incident evidence, file claims, and track payout lifecycles remotely." },
      { title: "AI-Driven Risk Assessment App", desc: "Calculate underwriting risk variables instantly using predictive data models." },
      { title: "Insurance Chatbot & Customer Support App", desc: "Provide automated conversational assistance for FAQs and policy inquiries." },
    ],
  },
  {
    name: "Automotive",
    apps: [
      { title: "Vehicle Tracking & Fleet Management Android App", desc: "Monitor telemetry, location mapping, and driver safety metrics in real-time." },
      { title: "In-App Car Diagnostics & Service Log Application", desc: "Track maintenance intervals and analyze onboard diagnostic trouble codes." },
      { title: "Driver Performance Monitoring App", desc: "Score driving habits, harsh braking, and fuel consumption efficiency." },
      { title: "Ride-Sharing & Car Booking Android Platform", desc: "Match passengers with drivers, handle fare calculations, and track trips." },
    ],
  },
  {
    name: "eCommerce",
    description:
      "We build enterprise-grade Android commerce solutions that connect digital storefronts with product management, payments, inventory, fulfillment, customer platforms, and back-office systems to support scalable and connected commerce operations.",
    apps: [
      {
        title: "Enterprise eCommerce Mobile App",
        desc: "Develop scalable Android commerce applications integrated with product catalogs, customer accounts, pricing engines, payment gateways, order management, and enterprise commerce platforms.",
      },
      {
        title: "Omnichannel Commerce Platform",
        desc: "Connect mobile commerce experiences with web stores, physical locations, marketplaces, CRM, ERP, inventory, and customer engagement systems to create unified omnichannel operations.",
      },
      {
        title: "B2B eCommerce Android Platform",
        desc: "Build business-focused commerce applications supporting account-based purchasing, negotiated pricing, bulk orders, approval workflows, recurring orders, and integration with enterprise procurement systems.",
      },
      {
        title: "AI-Powered Commerce Intelligence App",
        desc: "Integrate AI to deliver intelligent product recommendations, customer insights, demand analysis, personalized experiences, and automated decision support across enterprise commerce operations.",
      },
    ],
  },
  {
    name: "Manufacturing",
    apps: [
      { title: "Production Monitoring Android Dashboard", desc: "Track assembly line output, machine uptime, and factory floor throughput." },
      { title: "Maintenance & Repair Request App", desc: "Log equipment faults, schedule servicing, and dispatch technical teams." },
      { title: "Inventory Tracking Application", desc: "Manage raw material stock and finished goods logistics using barcode scanning." },
      { title: "Workforce Shift Management Android Tool", desc: "Coordinate shift rosters, attendance tracking, and internal communications." },
    ],
  },
  {
    name: "Transportation & Logistics",
    description:
      "We engineer enterprise Android solutions for transportation and logistics organizations, connecting fleet operations, drivers, shipments, warehouses, routes, and real-time operational data to improve visibility, coordination, and execution across complex supply chains.",
    apps: [
      {
        title: "Fleet Management Android App",
        desc: "Develop connected mobile platforms for vehicle tracking, driver management, maintenance workflows, fleet monitoring, operational reporting, and integration with enterprise transportation systems.",
      },
      {
        title: "Driver & Delivery Management App",
        desc: "Build Android applications that support driver workflows, route assignments, delivery confirmations, digital documentation, real-time communication, and seamless synchronization with logistics platforms.",
      },
      {
        title: "Shipment & Logistics Tracking Platform",
        desc: "Create real-time tracking solutions that connect shipments, vehicles, warehouses, customers, and logistics systems to provide centralized visibility throughout the delivery lifecycle.",
      },
      {
        title: "AI-Powered Route & Operations Platform",
        desc: "Apply AI and intelligent analytics to optimize routes, predict operational disruptions, analyze fleet performance, improve resource allocation, and support data-driven logistics decisions.",
      },
    ],
  },
  {
    name: "SaaS",
    description:
      "We build enterprise Android applications that extend SaaS platforms into mobile environments, supporting secure access, multi-tenant architectures, real-time synchronization, cloud infrastructure, enterprise integrations, and complex business workflows.",
    apps: [
      {
        title: "Enterprise SaaS Mobile App",
        desc: "Develop scalable Android applications that connect seamlessly with cloud-based SaaS platforms, enabling users to access business applications, workflows, dashboards, and operational data from mobile devices.",
      },
      {
        title: "Multi-Tenant SaaS Platform",
        desc: "Build secure multi-tenant Android experiences with tenant isolation, role-based access, configurable workflows, centralized administration, and scalable cloud integration for organizations serving multiple customers.",
      },
      {
        title: "SaaS Business Operations App",
        desc: "Extend enterprise SaaS products to mobile with workflow management, approvals, reporting, notifications, collaboration, and real-time synchronization across distributed business teams.",
      },
      {
        title: "AI-Powered SaaS Platform",
        desc: "Integrate AI capabilities into SaaS applications to automate workflows, analyze business data, generate insights, personalize experiences, and support intelligent decision-making across enterprise operations.",
      },
    ],
  },
  {
    name: "Social Media",
    apps: [
      { title: "Community Networking Android Platform", desc: "Connect users through interest-based feeds, messaging, and profile curation." },
      { title: "Content Moderation & Admin Tool App", desc: "Review reported media, manage user bans, and enforce community guidelines." },
      { title: "Event Scheduling & Participation App", desc: "Organize digital or local gatherings, RSVPs, and attendee interactions." },
      { title: "Social Media API Integration App", desc: "Sync social feeds and sharing capabilities across external platforms." },
    ],
  },
  {
    name: "Education",
    apps: [
      { title: "Virtual Classroom Android Application", desc: "Host live video lectures, interactive whiteboards, and student breakouts." },
      { title: "Gamified Learning & Quiz App", desc: "Engage students through interactive modules, points, and quizzes." },
      { title: "Attendance & Performance Tracking App", desc: "Log daily classroom presence and monitor academic progression over time." },
      { title: "Teacher Assignment & Grading App", desc: "Distribute coursework, evaluate submissions, and provide direct feedback." },
    ],
  },
];

function IndustryAccordionItem({ industry, index, isOpen, onToggle, isLast, progress, segment }) {
  const itemRef = useRef(null);

  const localFill = useTransform(progress, [segment.start, segment.end], [0, 1]);
  const lineHeight = useTransform(localFill, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);
  const dotScale = useTransform(localFill, [0, 0.15], [1, 1.15]);

  return (
    <div ref={itemRef} className="relative flex gap-5 pb-10 last:pb-0">
      <div className="relative flex flex-col items-center">
        <motion.span
          style={{ scale: dotScale }}
          className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white shadow-sm shadow-blue-500/20"
        >
          <motion.span
            style={{ opacity: localFill }}
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
          />
        </motion.span>

        {!isLast && (
          <span
            aria-hidden="true"
            className="relative mt-1 w-[2px] flex-1 overflow-hidden rounded-full bg-slate-200"
          >
            <motion.span
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-blue-600 to-sky-400"
            />
          </span>
        )}
      </div>

      <div className="flex-1 pb-1">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-1 text-left group cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {industry.name}
          </span>
          <Plus
            size={20}
            strokeWidth={1.5}
            className={`shrink-0 text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-45 text-blue-600" : ""
            }`}
          />
        </button>

        {industry.description && (
          <div
            className={`grid transition-all duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr] opacity-100 pb-3 pt-2" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base">
                {industry.description}
              </p>
            </div>
          </div>
        )}

        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pb-4 pt-3">
              {industry.apps.map((appObj) => (
                <div key={appObj.title} className="flex flex-col gap-1">
                  <div className="text-sm font-semibold text-slate-900 sm:text-base">
                    {appObj.title}
                  </div>
                  <div className="text-xs font-normal leading-relaxed text-slate-600 antialiased sm:text-sm">
                    {appObj.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildingIndustry() {
  const [openIndex, setOpenIndex] = useState(0);

  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const imageWrapRef = useRef(null);
  const [maxOffset, setMaxOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const total = INDUSTRIES.length;
  const segments = INDUSTRIES.map((_, i) => ({
    start: i / total,
    end: (i + 1) / total,
  }));

  const { scrollYProgress: rowProgress } = useScroll({
    target: rowRef,
    offset: ["start start", "end end"],
  });

  const smoothRowProgress = useSpring(rowProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const measure = useCallback(() => {
    if (rowRef.current && imageWrapRef.current) {
      const rowHeight = rowRef.current.offsetHeight;
      const imageHeight = imageWrapRef.current.offsetHeight;
      setMaxOffset(Math.max(rowHeight - imageHeight, 0));
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const t = setTimeout(measure, 300);

    let observer;
    if (typeof ResizeObserver !== "undefined" && rowRef.current) {
      observer = new ResizeObserver(measure);
      observer.observe(rowRef.current);
    }

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
      if (observer) observer.disconnect();
    };
  }, [measure]);

  const imageY = useTransform(smoothRowProgress, [0, 1], [0, maxOffset]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24">
        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Industry Solutions</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-slate-900">Android Solutions</span>
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Built for Every Industry
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed">
              We build secure, scalable, and user-focused Android applications
              tailored to the unique needs of modern businesses across
              industries. From complex enterprise workflows and regulated
              environments to fast-growing digital products, our solutions are
              designed to integrate seamlessly with existing systems, solve real
              business challenges, and support long-term growth.
            </p>
          </div>
        </div>

        <hr className="mb-12 border-t border-slate-200/80" />

        <div ref={rowRef} className="grid w-full gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 items-start">
          <div className="min-w-0 w-full">
            {INDUSTRIES.map((industry, index) => (
              <IndustryAccordionItem
                key={industry.name}
                industry={industry}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                isLast={index === INDUSTRIES.length - 1}
                progress={smoothProgress}
                segment={segments[index]}
              />
            ))}
          </div>

          <div className="relative">
            <motion.div
              ref={imageWrapRef}
              style={{ y: imageY }}
              className="lg:absolute lg:left-0 lg:top-0 lg:w-full will-change-transform"
            >
              <div className="flex flex-col">
                <div className="relative w-full h-[520px] sm:h-[600px] mb-6 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl shadow-blue-500/5 flex items-center justify-center">
                  <Image
                    src="/images/services/frequently-asked-questions.png"
                    alt="Frequently Asked Questions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    onLoadingComplete={measure}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-base sm:text-lg font-medium text-slate-800 text-left">
                    Get tailored solutions for every industry
                  </p>

                  <button className="bg-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 cursor-pointer whitespace-nowrap">
                    Get free consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}