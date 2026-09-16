"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MonitorSmartphone,
  ShoppingBag,
  Globe,
  BarChart3,
  HeartPulse,
  CreditCard,
  GraduationCap,
  Cloud,
  Users,
  Landmark,
  Zap,
  Layers,
  FileStack,
  LayoutGrid,
} from "lucide-react";

import WebDevelopmentTypesHeader from "@/app/components/services/webdevelopmenttypesheader";

/* ------------------------------------------------------------------ */
/* Data — each panel with its specific icon and content                */
/* ------------------------------------------------------------------ */

const webAppTypes = [
  {
    icon: MonitorSmartphone,
    title: "Enterprise Web Applications",
    description:
      "We develop scalable enterprise web applications that help organizations manage complex operations, streamline workflows, improve collaboration, and centralize business processes. Our solutions are designed around specific organizational requirements, providing secure, reliable, and flexible platforms that can adapt to evolving business needs and support long-term growth.",
    highlights: [
      "Business Process Management",
      "Workflow Automation",
      "Enterprise Data Management",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Web Applications",
    description:
      "We build scalable e-commerce web applications that deliver seamless shopping experiences while supporting efficient online business operations. Our solutions are designed to help businesses manage products, customers, orders, and digital transactions through secure and user-friendly platforms.",
    highlights: [
      "Online Store & Product Management",
      "Secure Payments & Order Processing",
      "Customer Experience & Checkout Optimization",
    ],
    image: "/images/services/web-app-types/eCommerce_web_v1.png",
  },
  {
    icon: Globe,
    title: "Web Portals",
    description:
      "We build custom web portals that provide centralized access to essential information, services, and resources, creating a seamless experience for different user groups. Our secure and user-friendly portals are designed around specific business requirements, helping organizations improve communication, simplify processes, and deliver better digital experiences.",
    highlights: [
      "Self-Service & Customer Portals",
      "Employee & Partner Portals",
      "Secure Information & Service Management",
    ],
    image: "/images/services/web-app-types/web_portals_v1.png",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Applications",
    description:
      "We develop custom data and analytics applications that transform complex business data into clear, actionable insights. Our solutions collect, process, analyze, and visualize data from multiple sources through interactive dashboards, reports, maps, and real-time monitoring interfaces. From business performance and operational analytics to GPS and location-based tracking, our applications help organizations understand trends, monitor activities, and make informed decisions.",
    highlights: [
      "Interactive Dashboards & Business Reporting",
      "Data Visualization & Real-Time Analytics",
      "GPS, Location Tracking & Geospatial Insights",
    ],
    image: "/images/services/web-app-types/data_analytics_applications_v1.jpg",
  },
  {
    icon: Cloud,
    title: "SaaS Web Applications",
    description:
      "We develop scalable SaaS web applications that deliver software services through the cloud, giving users convenient access to applications and features from any device with an internet connection. Our solutions are built to support multiple users, teams, and organizations while providing flexible architecture, secure access, and the ability to scale as your customer base and business requirements grow.",
    highlights: [
      "Multi-Tenant SaaS Architecture",
      "User, Subscription & Access Management",
      "Scalable Cloud-Based Platforms",
    ],
    image: "/images/services/web-app-types/saas_web_applications_v1.jpg",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Patient management, telemedicine, and claims systems designed around clinical workflows and data privacy.",
    highlights: [
      "Patient and provider portals",
      "Claims management and processing platforms",
      "Policy and coverage administration tools",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: CreditCard,
    title: "FinTech",
    description:
      "Banking dashboards, payment gateways, and trading tools built with compliance and security as first-class requirements.",
    highlights: [
      "Account management with transaction history",
      "KYC, compliance, and audit-log workflows",
      "Payment processing and reconciliation",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description:
      "Course portals, cohort tracking, and assessments for e-learning platforms and corporate training programs.",
    highlights: [
      "Course authoring and content delivery",
      "Enrollment, progress tracking, and certification",
      "Live session and video integration",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Tools for tracking leads, managing pipelines, and keeping every customer conversation in one place.",
    highlights: [
      "Contact and pipeline management with custom stages",
      "Role-based access and team activity tracking",
      "Integrations with email, calendar, and support tools",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: Landmark,
    title: "ERP",
    description:
      "Integrated platforms that bring finance, HR, inventory, and operations together under a single source of truth.",
    highlights: [
      "Finance, procurement, and inventory modules",
      "Cross-department reporting and dashboards",
      "Workflow automation and approval chains",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: Zap,
    title: "SPA",
    description:
      "Applications that load once and update instantly as users navigate, without a full page reload.",
    highlights: [
      "Fluid, app-like navigation",
      "Real-time UI updates without reloads",
      "Best fit for dashboards and internal tools",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: Layers,
    title: "MPA",
    description:
      "Traditional, SEO-friendly structures with full page reloads, well suited to large content-driven sites.",
    highlights: [
      "Strong out-of-the-box SEO performance",
      "Simple, predictable page-by-page structure",
      "Good fit for content and marketing sites",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: FileStack,
    title: "Static",
    description:
      "Fixed, pre-rendered content with no server-side processing, ideal for marketing sites and landing pages.",
    highlights: [
      "Fast load times served from a CDN",
      "Low hosting cost and minimal maintenance",
      "Easy to version and deploy",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
  {
    icon: LayoutGrid,
    title: "Dynamic",
    description:
      "Content that changes based on user interaction and live database state, the backbone of most business applications.",
    highlights: [
      "Personalized, user-specific content",
      "Real-time data from a connected backend",
      "Scales with business logic and workflows",
    ],
    image: "/images/services/web-app-types/enterprise_web_v1.png",
  },
];

/* ------------------------------------------------------------------ */
/* Open panel: text left, large image right                            */
/* ------------------------------------------------------------------ */

function OpenPanel({ type, animKey, direction, isAlone }) {
  const IconComponent = type.icon;
  const slideClass =
    direction === -1 ? "panel-slide-from-left" : "panel-slide-from-right";

  return (
    <div
      key={animKey}
      className={`flex min-h-[520px] lg:min-h-[580px] flex-1 flex-col overflow-hidden rounded-3xl bg-slate-900 ring-1 ring-slate-900 sm:flex-row ${slideClass}`}
    >
      {/* text side */}
      <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-14">
        <span className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </span>

        <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
          {type.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          {type.description}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {type.highlights.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm sm:text-base text-slate-300"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* large image side */}
      <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-[45%]">
        <Image
          src={type.image}
          alt={type.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent sm:bg-gradient-to-l" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Closed preview panel: icon + name only                              */
/* ------------------------------------------------------------------ */

function ClosedPanel({ type, animKey, direction, onOpen }) {
  const IconComponent = type.icon;
  const slideClass =
    direction === -1 ? "panel-slide-from-left" : "panel-slide-from-right";

  return (
    <button
      key={animKey}
      type="button"
      onClick={onOpen}
      aria-label={`Show ${type.title}`}
      className={`hidden w-[180px] shrink-0 flex-col items-center justify-center gap-6 rounded-3xl bg-white p-8 text-center ring-1 ring-slate-200 transition-colors duration-200 hover:ring-blue-300 sm:flex lg:w-[220px] ${slideClass}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {IconComponent && <IconComponent className="h-6 w-6" />}
      </span>
      <span className="text-base font-bold text-slate-700 sm:text-lg">
        {type.title}
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <ChevronRight className="h-5 w-5" />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Main section                                                         */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentTypes() {
  const [openIndex, setOpenIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const items = webAppTypes;
  const isFirst = openIndex === 0;
  const isLast = openIndex === items.length - 1;
  const nextIndex = isLast ? null : openIndex + 1;

  function goPrev() {
    if (isFirst) return;
    setDirection(-1);
    setOpenIndex((i) => i - 1);
  }

  function goNext() {
    if (isLast) return;
    setDirection(1);
    setOpenIndex((i) => i + 1);
  }

  function openAt(index) {
    setDirection(index > openIndex ? 1 : -1);
    setOpenIndex(index);
  }

  return (
    <>
      <WebDevelopmentTypesHeader />
      <section className="relative w-full bg-slate-50 border-t border-slate-200 py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 text-slate-900 font-sans">
        <style jsx global>{`
          @keyframes slideFromRight {
            from {
              opacity: 0;
              transform: translateX(36px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideFromLeft {
            from {
              opacity: 0;
              transform: translateX(-36px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .panel-slide-from-right {
            animation: slideFromRight 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .panel-slide-from-left {
            animation: slideFromLeft 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>

        {/* Ambient background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
            }}
          />
        </div>

        <div className="relative z-10 w-full mx-auto">
          {/* Two-panel view: open panel + next closed preview (or open alone at the end) */}
          <div className="flex w-full items-stretch gap-4">
            <OpenPanel
              type={items[openIndex]}
              animKey={`open-${openIndex}`}
              direction={direction}
              isAlone={isLast}
            />
            {nextIndex !== null && (
              <ClosedPanel
                type={items[nextIndex]}
                animKey={`closed-${nextIndex}`}
                direction={direction}
                onOpen={() => openAt(nextIndex)}
              />
            )}
          </div>

          {/* Bottom row: progress dots left, navigation arrows right */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {items.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === openIndex
                      ? "w-6 bg-blue-600"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                disabled={isFirst}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors duration-200 hover:text-blue-600 hover:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-600 disabled:hover:ring-slate-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isLast}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25 transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}