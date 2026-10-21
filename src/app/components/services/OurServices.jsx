// src/app/components/OurServices.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "UX/UI Design",
    href: "/services/ux-ui-design",
    image: "/images/services/Services/UX_UI_Design_v1.png",
    capabilities: [
      "User-Centered Design",
      "Responsive Web & Mobile Design",
      "Wireframing & Prototyping",
      "User Flow Optimization",
      "Accessibility & Usability",
      "Visual & Brand Design",
      "UX Testing & Refinement",
    ],
  },
  {
    title: "Backend Development",
    href: "/services/backend-development",
    image: "/images/services/Services/Backend_Development_v1.png",
    capabilities: [
      "Scalable Backend Architecture",
      "API Development & Integration",
      "Database Design & Optimization",
      "Authentication & Access Control",
      "Server-Side Development",
      "Security & Performance",
      "Third-Party Integrations",
    ],
  },
  {
    title: "SaaS Development",
    href: "/services/saas-development",
    image: "/images/services/Services/SaasDevelopment_v1.png",
    capabilities: [
      "Custom SaaS Platforms",
      "Multi-Tenant Architecture",
      "Subscription & Billing Systems",
      "Cloud Deployment & Scaling",
      "User & Role Management",
      "API & System Integration",
      "SaaS Security & Optimization",
    ],
  },
  {
    title: "Frontend Development",
    href: "/services/frontend-development",
    image: "/images/services/Services/FrontendDevelopment_v1.png",
    capabilities: [
      "Responsive Interface Development",
      "Modern JavaScript Frameworks",
      "Interactive UI Components",
      "Cross-Browser Compatibility",
      "Frontend Performance",
      "API & Data Integration",
      "Accessibility & Usability",
    ],
  },
  {
    title: "Software Consulting",
    href: "/services/software-consulting",
    image: "/images/services/Services/SoftwareConsulting_v1.png",
    capabilities: [
      "Technology Strategy & Planning",
      "Software Architecture",
      "Technology Stack Assessment",
      "Legacy System Modernization",
      "Digital Transformation",
      "Performance Assessment",
      "Technical Risk Analysis",
    ],
  },
  {
    title: "Enterprise Development",
    href: "/services/enterprise-software-development",
    image: "/images/services/Services/EnterpriseDevelopment_v1.png",
    capabilities: [
      "Custom Enterprise Solutions",
      "ERP System Development",
      "CRM System Development",
      "Enterprise API Integration",
      "Workflow Automation",
      "Enterprise Security",
      "Scalable System Modernization",
    ],
  },
];

const appServices = [
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    image: "/images/services/Services/mobile_web_development.png",
    capabilities: [
      "iOS & Android Applications",
      "Secure & User-Friendly Design",
      "Scalable App Solutions",
    ],
  },
  {
    title: "Web App Development",
    href: "/services/web-app-development",
    image: "/images/services/Services/web_app_development_v1.png",
    capabilities: [
      "Custom Web Applications",
      "Responsive & Secure Interfaces",
      "API & System Integration",
    ],
  },
  {
    title: "iOS App Development",
    href: "/services/ios-app-development",
    image: "/images/services/Services/iOS_App_Development.png",
    capabilities: [
      "Native iOS Applications",
      "Apple Ecosystem Integration",
      "Performance & Security Optimization",
    ],
  },
  {
    title: "Android App Development",
    href: "/services/android-app-development",
    image: "/images/services/Services/Android_App_Development.png",
    capabilities: [
      "Custom Android Applications",
      "Feature-Rich User Experiences",
      "Scalable & Secure Architecture",
    ],
  },
];

export default function OurServices() {
  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-slate-50 py-6 lg:pb-16 lg:pt-4 font-sans">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40" />

      {/* Ambient background glow effects */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start px-2 text-left sm:px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            OUR SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="text-slate-900">Innovative Services.</span>{" "}
            <span className="text-blue-600">Intelligent Engineering.</span>
          </motion.h2>
        </div>

        {/* Primary Service cards grid */}
        <ul className="mt-8 grid grid-cols-1 gap-6 px-2 sm:px-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.li
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="list-none"
            >
              <Link
                href={service.href}
                aria-label={`${service.title} – learn more`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex-row"
              >
                {/* Left Image Stage — Flushes Top, Bottom & Left Edge */}
                <div className="relative z-10 min-h-[220px] w-full shrink-0 overflow-hidden bg-gradient-to-br from-slate-100/80 via-slate-50 to-blue-50/60 sm:min-h-[280px] sm:w-[45%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right Text & Capabilities List */}
                <div className="relative z-10 flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                      {service.title}
                    </h3>
                    
                    <ul className="mt-3 space-y-1.5">
                      {service.capabilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs font-semibold leading-tight text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More link */}
                  <div className="flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                    <span>Learn more</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* ───── App development: four cards in one row ───── */}
        <ul className="mt-6 grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 sm:px-4 xl:grid-cols-4">
          {appServices.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="list-none"
            >
              <Link
                href={item.href}
                aria-label={`${item.title} – learn more`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    
                    <ul className="mt-3 space-y-1.5">
                      {item.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs font-semibold leading-tight text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                    <span>Learn more</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                {/* Bottom Image Container — Touches Bottom & Sides */}
                <div className="relative z-10 aspect-[5/4] w-full shrink-0 overflow-hidden bg-gradient-to-br from-slate-100/80 via-slate-50 to-blue-50/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}