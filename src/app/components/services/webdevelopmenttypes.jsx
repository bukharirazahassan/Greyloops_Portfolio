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
      "We develop custom enterprise web applications that bring complex business processes, operational workflows, and organizational data into centralized digital platforms. These applications can support employee management, CRM, supply chain operations, inventory, finance, administration, reporting, and other business-critical functions, helping organizations improve visibility, coordination, and operational efficiency.",
    highlights: [
      "Business & Workflow Management",
      "Employee, CRM & Operations Systems",
      "Supply Chain, Inventory & Asset Management",
    ],
    image: "/images/services/web-app-types/enterprise_web_applications.png",
  },

  {
    icon: ShoppingBag,
    title: "E-Commerce Web Applications",
    description:
      "We build custom e-commerce web applications that manage the complete digital commerce journey, from product discovery and customer accounts to shopping carts, payments, orders, and fulfillment. Our solutions can be tailored for B2C, B2B, and specialized commerce models, providing flexible platforms for managing products, customers, transactions, and online sales operations.",
    highlights: [
      "Product Catalog & Store Management",
      "Shopping Cart, Checkout & Payments",
      "Orders, Customers & Fulfillment",
    ],
    image: "/images/services/web-app-types/eCommerce_web_applications.png",
  },

  {
    icon: Globe,
    title: "Web Portals",
    description:
      "We develop purpose-built web portals that give customers, employees, partners, vendors, and other users centralized access to information, services, and business processes. Each portal is designed around its specific audience and workflows, with features such as user accounts, role-based access, self-service functionality, document management, dashboards, and secure information sharing.",
    highlights: [
      "Customer & Self-Service Portals",
      "Employee, Partner & Vendor Portals",
      "Role-Based Access & Information Management",
    ],
    image: "/images/services/web-app-types/web_portals.png",
  },

  {
    icon: BarChart3,
    title: "Data & Analytics Applications",
    description:
      "We develop data and analytics applications that collect, process, organize, and visualize information from multiple business sources. These applications turn operational data into useful dashboards, reports, maps, and real-time insights, supporting areas such as performance monitoring, business intelligence, operational analysis, GPS tracking, and location-based decision-making.",
    highlights: [
      "Interactive Dashboards & Business Reporting",
      "Data Visualization & Real-Time Analytics",
      "GPS Tracking & Geospatial Insights",
    ],
    image: "/images/services/web-app-types/data_analytics_applications_v1.jpg",
  },

  {
    icon: Cloud,
    title: "SaaS Web Applications",
    description:
      "We build SaaS web applications that deliver software products through the cloud and provide users with continuous access through web browsers. These platforms can support multiple customers, teams, and user roles while managing subscriptions, permissions, application data, and account-specific functionality. The architecture is designed to support product growth, evolving features, and increasing user demand.",
    highlights: [
      "Multi-Tenant Application Architecture",
      "User, Subscription & Access Management",
      "Cloud-Based Product & Platform Management",
    ],
    image: "/images/services/web-app-types/saas_web_applications.png",
  },

  {
    icon: LayoutGrid,
    title: "Marketplace Web Applications",
    description:
      "We build marketplace web applications that connect multiple groups of users, such as buyers and sellers or customers and service providers, through a centralized digital platform. These applications can manage listings, profiles, search, communication, transactions, orders, reviews, and platform-specific workflows for different marketplace models.",
    highlights: [
      "Vendor & Listing Management",
      "Search, Profiles & Customer Interaction",
      "Orders, Transactions & Reviews",
    ],
    image: "/images/services/web-app-types/marketplace_web_applications.png",
  },

  {
    icon: Layers,
    title: "Industry-Specific Web Applications",
    description:
      "We create specialized web applications for industries with unique operational, regulatory, and user requirements. These solutions can be tailored for healthcare, financial services, education, logistics, real estate, and other sectors where standard software may not fully address specific business workflows.",
    highlights: [
      "Healthcare & Patient Management",
      "FinTech & Financial Services",
      "Education, Logistics & Industry Platforms",
    ],
    image: "/images/services/web-app-types/industry_specific_web_applications.png",
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
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 text-slate-900 font-sans">
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

        {/* Dot-grid texture matching standard */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 20% 50%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 20% 50%, black 25%, transparent 100%)",
          }}
        />

        {/* Ambient background glows matching standard */}
        <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/35 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[130px]" />

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