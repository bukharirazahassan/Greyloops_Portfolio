// src/app/components/OurServices.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "UX/UI Design",
    href: "/services/ux-ui-design",
    image: "/images/services/Services/UX_UI_Design_v1.png",
    description:
      "We design intuitive digital experiences with modern interfaces, seamless navigation, and engaging interactions to improve usability, accessibility, and user satisfaction across web and mobile applications.",
  },
  {
    title: "Backend Development",
    href: "/services/backend-development",
    image: "/images/services/Services/Backend_Development_v1.png",
    description:
      "We build secure backend systems with scalable architecture, efficient data management, and seamless API integrations to ensure reliable performance across web and mobile applications.",
  },
  {
    title: "SaaS Development",
    href: "/services/saas-development",
    image: "/images/services/Services/SaasDevelopment_v1.png",
    description:
      "We develop scalable SaaS solutions with secure architecture, flexible features, and seamless integrations to streamline business operations and support long-term growth across industries.",
  },
  {
    title: "Frontend Development",
    href: "/services/frontend-development",
    image: "/images/services/Services/FrontendDevelopment_v1.png",
    description:
      "We build responsive frontend experiences with modern interfaces, interactive components, and optimized performance to deliver seamless user experiences across web and mobile applications.",
  },
  {
    title: "Software Consulting",
    href: "/services/software-consulting",
    image: "/images/services/Services/SoftwareConsulting_v1.png",
    description:
      "We provide strategic software consulting with expert guidance, technology planning, and tailored recommendations to align digital solutions with business goals and long-term growth.",
  },
  {
    title: "Enterprise Development",
    href: "/services/enterprise-software-development",
    image: "/images/services/Services/EnterpriseDevelopment_v1.png",
    description:
      "We develop enterprise software with scalable architecture, secure integrations, and tailored functionality to streamline complex operations and support business growth across departments.",
  },
];

const appServices = [
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    image: "/images/services/Services/mobile_web_development.png",
    description:
      "We develop secure, user-friendly mobile applications with intuitive interfaces, reliable performance, and scalable features to enhance engagement and support business growth across iOS and Android.",
  },
  {
    title: "Web App Development",
    href: "/services/web-app-development",
    image: "/images/services/Services/web_app_development_v1.png",
    description:
      "We develop secure, scalable web applications with responsive interfaces, powerful functionality, and seamless integrations to streamline workflows and deliver reliable digital experiences across devices.",
  },
  {
    title: "iOS App Development",
    href: "/services/ios-app-development",
    image: "/images/services/Services/iOS_App_Development.png",
    description:
      "We develop secure, high-performance iOS applications with intuitive interfaces, seamless integrations, and scalable features to deliver reliable digital experiences across Apple devices.",
  },
  {
    title: "Android App Development",
    href: "/services/android-app-development",
    image: "/images/services/Services/Android_App_Development.png",
    description:
      "We build feature-rich Android applications with responsive interfaces, robust functionality, and scalable architecture to enhance user engagement and support business growth.",
  },
];

export default function OurServices() {
  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-slate-50 py-6 lg:pb-16 lg:pt-4">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start px-2 text-left sm:px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            Our Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="text-slate-900">Strategic Thinking.</span>{" "}
            <span className="text-blue-600">Expert Engineering.</span>
          </motion.h2>
        </div>

        {/* Service cards grid */}
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
                className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-3xl bg-white/55 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-[0_28px_70px_rgba(37,99,235,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex-row lg:flex-col 2xl:flex-row"
              >
                {/* Glass sheen */}
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent" />

                {/* Image panel – flush with card top, bottom & left edges */}
                <div className="relative z-10 h-56 w-full shrink-0 overflow-hidden bg-white sm:h-auto sm:min-h-[260px] sm:w-[46%] lg:h-60 lg:min-h-0 lg:w-full 2xl:h-auto 2xl:min-h-[260px] 2xl:w-[52%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1536px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text content */}
                <div className="relative z-10 flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Link row with arrow */}
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-blue-600">
                    <span>Learn more</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
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
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/55 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-[0_28px_70px_rgba(37,99,235,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* Glass sheen */}
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent" />

                {/* Heading, description and link at the top */}
                <div className="relative z-10 flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2.5 text-sm font-semibold text-blue-600">
                    <span>Learn more</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                {/* Image at the bottom – flush with card bottom, left & right edges (5:4 crop trims only the empty top/bottom margin of the 1024×1024 art) */}
                <div className="relative z-10 aspect-[5/4] w-full shrink-0 overflow-hidden bg-white">
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