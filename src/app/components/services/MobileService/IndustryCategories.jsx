"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const industries = [
  {
    titleFirst: "FinTech & ",
    titleSecond: "Banking",
    description:
      "We build secure, scalable digital products for banks, fintech companies, and financial institutions, designed to simplify complex financial operations, improve customer experiences, and enable seamless digital banking across web and mobile platforms.",
    imageSrc: "/images/services/FinTech_Banking.png",
    imageAlt: "FinTech & Banking Solutions",
    subItems: [
      {
        title: "Digital Banking",
        description: "Secure and intuitive digital banking platforms for account management, money transfers, payments, transaction tracking, and personalized banking services across web and mobile.",
      },
      {
        title: "Payments & Wallets",
        description: "Reliable payment solutions with digital wallets, payment processing, transaction management, and secure workflows designed to support fast and seamless financial transactions.",
      },
      {
        title: "Financial Analytics",
        description: "Real-time financial dashboards, spending insights, performance reporting, transaction analysis, and intelligent data visualization to support smarter financial decision-making.",
      },
      {
        title: "Enterprise Integration",
        description: "Seamless integration with core banking systems, CRM, ERP, payment gateways, APIs, and third-party financial platforms to connect critical business processes and data.",
      },
      {
        title: "Security & Compliance",
        description: "Robust authentication, data encryption, access controls, secure transaction processing, and compliance-ready architecture designed to protect sensitive financial and customer information.",
      },
      {
        title: "AI-Powered Finance",
        description: "AI-driven insights, intelligent automation, fraud and risk analysis, predictive analytics, personalized financial recommendations, and data-driven solutions that improve financial decision-making.",
      },
    ],
  },
  {
    titleFirst: "Healthcare",
    titleSecond: "",
    description:
      "We build secure, scalable digital healthcare solutions that improve patient experiences, streamline clinical operations, and enable healthcare organizations to deliver connected, data-driven care across hospitals, clinics, and digital health platforms.",
    imageSrc: "/images/services/mobile_healthcare.png",
    imageAlt: "Healthcare Solutions",
    subItems: [
      {
        title: "Digital Healthcare Platforms",
        description: "Secure and intuitive healthcare platforms for patient portals, appointment management, medical applications, health records, and connected care experiences across web and mobile.",
      },
      {
        title: "Telehealth & Remote Care",
        description: "Connected telehealth solutions for virtual consultations, remote patient monitoring, digital communication, appointment coordination, and accessible healthcare services from anywhere.",
      },
      {
        title: "Healthcare Data & Analytics",
        description: "Real-time healthcare dashboards, patient insights, clinical reporting, operational analytics, and data visualization that help healthcare organizations make informed decisions.",
      },
      {
        title: "Healthcare System Integration",
        description: "Seamless integration with EHR/EMR systems, hospital management platforms, laboratories, pharmacies, medical devices, APIs, and third-party healthcare applications.",
      },
      {
        title: "Security & Compliance",
        description: "Robust authentication, patient data protection, encryption, role-based access control, privacy management, and compliance-ready architecture for sensitive healthcare information.",
      },
      {
        title: "AI-Powered Healthcare",
        description: "AI-driven automation, predictive insights, clinical decision support, intelligent patient analysis, personalized care recommendations, and advanced healthcare analytics to improve outcomes and efficiency.",
      },
    ],
  },
  {
    titleFirst: "eCommerce",
    titleSecond: "",
    description:
      "We build scalable, high-performance eCommerce solutions that create seamless shopping experiences, simplify digital commerce operations, and help businesses increase customer engagement, conversions, and long-term growth across web and mobile platforms.",
    imageSrc: "/images/services/mobile_eCommerce_v1.png",
    imageAlt: "eCommerce Solutions",
    subItems: [
      {
        title: "eCommerce Platforms",
        description: "Scalable online stores with intuitive product catalogs, customer accounts, shopping carts, checkout experiences, and flexible commerce features tailored to business needs.",
      },
      {
        title: "Digital Commerce Experiences",
        description: "Engaging web and mobile shopping experiences with personalized product discovery, intuitive navigation, responsive interfaces, and seamless customer journeys.",
      },
      {
        title: "Payments & Checkout",
        description: "Secure and optimized checkout solutions supporting multiple payment methods, transaction processing, order management, and frictionless purchasing experiences.",
      },
      {
        title: "Product & Order Management",
        description: "Centralized product catalogs, inventory management, pricing, promotions, order processing, fulfillment workflows, and real-time commerce operations.",
      },
      {
        title: "eCommerce Integration",
        description: "Seamless connectivity with ERP, CRM, payment gateways, shipping providers, marketplaces, inventory systems, APIs, and third-party business platforms.",
      },
      {
        title: "AI-Powered Commerce",
        description: "AI-driven product recommendations, personalized shopping experiences, customer insights, intelligent search, demand forecasting, automation, and data-driven commerce optimization.",
      },
    ],
  },
  {
    titleFirst: "Transportation & ",
    titleSecond: "Logistics",
    description:
      "We build secure, scalable digital solutions that optimize transportation operations, streamline logistics workflows, and provide real-time visibility across fleets, deliveries, supply chains, and connected mobility networks.",
    imageSrc: "/images/services/transportation_logistics.png",
    imageAlt: "Transportation & Logistics Solutions",
    subItems: [
      {
        title: "Fleet Management",
        description: "Real-time fleet tracking, vehicle monitoring, driver management, maintenance scheduling, and operational dashboards to improve fleet efficiency and visibility.",
      },
      {
        title: "Logistics & Delivery Management",
        description: "End-to-end delivery platforms for order management, route planning, dispatching, shipment tracking, and last-mile delivery optimization.",
      },
      {
        title: "Supply Chain Solutions",
        description: "Connected supply chain systems that improve inventory visibility, warehouse operations, procurement workflows, shipment coordination, and overall supply chain efficiency.",
      },
      {
        title: "Transportation & Mobility Platforms",
        description: "Digital platforms for ride management, transportation services, booking, scheduling, navigation, and connected mobility experiences across web and mobile.",
      },
      {
        title: "Real-Time Tracking & Analytics",
        description: "Live GPS tracking, delivery status, fleet analytics, performance dashboards, route insights, and operational intelligence for faster, data-driven decisions.",
      },
      {
        title: "AI-Powered Logistics",
        description: "AI-driven route optimization, demand forecasting, predictive maintenance, intelligent dispatching, delivery predictions, and automation to improve transportation efficiency.",
      },
    ],
  },
  {
    titleFirst: "Automotive",
    titleSecond: "",
    description:
      "We build secure, scalable digital automotive solutions that enhance connected vehicle experiences, streamline dealership and fleet operations, and enable smarter, data-driven mobility services.",
    imageSrc: "/images/services/automotive.png",
    imageAlt: "Automotive Solutions",
    subItems: [
      {
        title: "Connected Vehicle Platforms",
        description: "Digital platforms for vehicle connectivity, remote monitoring, diagnostics, driver experiences, and connected services across modern automotive ecosystems.",
      },
      {
        title: "Automotive Applications",
        description: "Feature-rich web and mobile applications for vehicle owners, dealerships, service centers, bookings, vehicle management, and customer engagement.",
      },
      {
        title: "Fleet & Vehicle Management",
        description: "Real-time vehicle tracking, fleet monitoring, maintenance scheduling, driver management, and operational analytics to improve fleet performance.",
      },
      {
        title: "Automotive Commerce",
        description: "Digital platforms for vehicle discovery, online sales, financing workflows, parts ordering, service bookings, and seamless customer purchasing experiences.",
      },
      {
        title: "Automotive Data & Analytics",
        description: "Real-time vehicle data, performance dashboards, predictive insights, customer analytics, and operational intelligence for better automotive decision-making.",
      },
      {
        title: "AI-Powered Mobility",
        description: "AI-driven predictive maintenance, intelligent vehicle diagnostics, personalized experiences, demand forecasting, automation, and smarter mobility solutions.",
      },
    ],
  },
  {
    titleFirst: "SaaS",
    titleSecond: "",
    description:
      "We build scalable SaaS platforms that simplify complex business processes, automate workflows, and deliver secure, flexible digital experiences for growing businesses and enterprises.",
    imageSrc: "/images/services/mobile_saas.png",
    imageAlt: "SaaS Solutions",
    subItems: [
      {
        title: "SaaS Product Development",
        description: "End-to-end SaaS platforms with scalable architecture, intuitive interfaces, powerful features, and reliable performance across web and mobile.",
      },
      {
        title: "Multi-Tenant Architecture",
        description: "Secure multi-tenant systems with isolated customer data, role-based access, tenant management, and flexible configurations for different users and organizations.",
      },
      {
        title: "Cloud-Native SaaS",
        description: "Cloud-based applications designed for scalability, high availability, efficient infrastructure management, and seamless deployment across modern cloud environments.",
      },
      {
        title: "SaaS Integrations",
        description: "Seamless connectivity with CRM, ERP, payment gateways, APIs, third-party applications, and enterprise systems to create connected business workflows.",
      },
      {
        title: "Automation & Analytics",
        description: "Intelligent workflow automation, real-time dashboards, reporting, business insights, and operational analytics to improve productivity and decision-making.",
      },
      {
        title: "AI-Powered SaaS",
        description: "AI-driven automation, intelligent recommendations, predictive insights, natural language capabilities, and personalized experiences built directly into SaaS platforms.",
      },
    ],
  },
  {
    titleFirst: "Education",
    titleSecond: "",
    description:
      "We build secure, scalable digital education solutions that create engaging learning experiences, streamline academic operations, and connect students, educators, institutions, and learning resources through modern technology.",
    imageSrc: "/images/services/mobile_education.png",
    imageAlt: "Education Solutions",
    subItems: [
      {
        title: "Digital Learning Platforms",
        description: "Interactive learning platforms for online courses, student portals, virtual classrooms, assessments, learning resources, and personalized educational experiences.",
      },
      {
        title: "Learning Management Systems",
        description: "Scalable LMS solutions for course management, student enrollment, assignments, grading, progress tracking, certifications, and centralized academic administration.",
      },
      {
        title: "Virtual Classrooms",
        description: "Connected virtual learning environments with live classes, video sessions, collaboration tools, digital communication, and interactive learning experiences.",
      },
      {
        title: "Student & Academic Management",
        description: "Integrated solutions for student records, attendance, scheduling, admissions, academic workflows, faculty management, and institutional operations.",
      },
      {
        title: "Education Analytics",
        description: "Real-time dashboards, student performance insights, learning analytics, progress tracking, reporting, and data-driven tools for improving educational outcomes.",
      },
      {
        title: "AI-Powered Learning",
        description: "AI-driven personalized learning, intelligent recommendations, automated assessments, virtual assistance, predictive student insights, and adaptive educational experiences.",
      },
    ],
  },
];

// Smooth acceleration/deceleration curve applied to each card's own local
// scroll progress, so the slide isn't a flat linear crawl.
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function IndustryCategories() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      // Lerp toward the real scroll position every frame instead of jumping
      // straight to it on each `scroll` event — this is what makes it glide.
      current += (target - current) * 0.12;
      setScrollProgress(current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Eased 0 -> 1 progress for a given industry's own entrance segment.
  // Every segment is exactly 1/industries.length of the scroll track, so
  // each card gets an identical amount of scroll distance -> equal timing.
  const getSegmentProgress = (index) => {
    const step = 1 / industries.length;
    const start = index * step;
    const end = start + step;

    if (scrollProgress <= start) return 0;
    if (scrollProgress >= end) return 1;

    const local = (scrollProgress - start) / (end - start);
    return easeInOutCubic(local);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-slate-50 border-t border-slate-200/80 h-[700vh]"
    >
      {/* Background Glows & Dot Pattern */}
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

      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex items-center">
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24">
          <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_600px] lg:gap-12 xl:gap-20 items-stretch">

            {/* step indicator */}
            <div className="absolute -top-8 left-8 sm:left-10 lg:left-12 z-20 flex items-center gap-1.5">
              {industries.map((ind, i) => (
                <span
                  key={ind.titleFirst}
                  className="h-1.5 rounded-full bg-slate-900/15 overflow-hidden"
                  style={{ minWidth: "1.5rem" }}
                >
                  <span
                    className="block h-full bg-blue-600 transition-none"
                    style={{
                      width: `${Math.round(getSegmentProgress(i) * 100)}%`,
                    }}
                  />
                </span>
              ))}
            </div>

            {/* LEFT COLUMN: Modern card with clean visible border & enhanced height */}
            <div
              className="relative h-[800px] w-full overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-xl shadow-slate-200/50"
              style={{ perspective: "1400px" }}
            >
              {industries.map((industry, index) => {
                const ownProgress = getSegmentProgress(index);
                const nextProgress =
                  index < industries.length - 1
                    ? getSegmentProgress(index + 1)
                    : 0;

                const translateY = index === 0 ? 0 : (1 - ownProgress) * 100;
                const scale = 1 - nextProgress * 0.035;
                const dim = 1 - nextProgress * 0.12;

                return (
                  <div
                    key={index}
                    className="absolute inset-0 h-full w-full overflow-y-auto p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left bg-white will-change-transform"
                    style={{
                      transform: `translateY(${translateY}%) scale(${scale})`,
                      filter: `brightness(${dim})`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-sky-400/5 rounded-3xl pointer-events-none z-0" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <h2 className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                            {industry.titleFirst}
                          </span>
                          {industry.titleSecond && (
                            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                              {industry.titleSecond}
                            </span>
                          )}
                        </h2>

                        <p className="w-full text-base font-normal leading-relaxed text-slate-700 antialiased sm:text-lg mb-8">
                          {industry.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 w-full my-auto">
                        {industry.subItems.map((item, subIndex) => (
                          <div key={subIndex} className="flex items-start gap-3.5">
                            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex flex-col text-left">
                              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                                {item.title}
                              </h3>
                              <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Modern framed card wrapper with object-cover so the image fills the card */}
            <div
              className="hidden lg:block relative h-[800px] w-full overflow-hidden"
              style={{ perspective: "1400px" }}
            >
              {/* solid backdrop to cover the section's dot pattern showing through around the image frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-slate-50 z-0" />
              {industries.map((industry, index) => {
                const ownProgress = getSegmentProgress(index);
                const nextProgress =
                  index < industries.length - 1
                    ? getSegmentProgress(index + 1)
                    : 0;

                const translateY = index === 0 ? 0 : (1 - ownProgress) * 100;
                const scale = 1 - nextProgress * 0.035;
                const dim = 1 - nextProgress * 0.12;

                return (
                  <div
                    key={index}
                    className="absolute inset-0 h-full w-full overflow-hidden flex items-center justify-center pointer-events-none will-change-transform"
                    style={{
                      transform: `translateY(${translateY}%) scale(${scale})`,
                      filter: `brightness(${dim})`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl border border-slate-300 shadow-xl shadow-slate-200/50 bg-white pointer-events-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-sky-400/5 rounded-3xl pointer-events-none z-0" />
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <Image
                          src={industry.imageSrc}
                          alt={industry.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 600px, 520px"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}