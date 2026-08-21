"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const techIcons = [
  { name: "React JS", src: "/images/services/tech_icons/reactjs_logo_icon.webp" },
  { name: "Vue JS", src: "/images/services/tech_icons/Vue.js_Logo.webp" },
  { name: "Angular", src: "/images/services/tech_icons/angular_icon-logo.webp" },
  { name: "JavaScript", src: "/images/services/tech_icons/javascript-seeklogo.com_.svg" },
  { name: "Redux", src: "/images/services/tech_icons/Redux.webp" },
  { name: "Python", src: "/images/services/tech_icons/Python-logo.webp" },
  { name: "C#", src: "/images/services/tech_icons/csharp.webp" },
  { name: "MongoDB", src: "/images/services/tech_icons/mongodb.webp" },
  { name: "MySQL", src: "/images/services/tech_icons/mysql-5.webp" },
];

const serviceCards = [
  {
    title: "Custom Web Application Development",
    description:
      "We develop modern web applications tailored to your business workflows, users, and digital goals. From frontend architecture and reusable component systems to responsive interfaces and seamless API integrations, we create experiences that are fast, intuitive, and built to scale. Every project begins with requirements analysis and technical planning, followed by clearly defined scope, milestones, and delivery objectives.",
    bgImage: "/images/services/CustomDevelopment2.png",
    href: null,
  },
  {
    title: "Frontend Development",
    description:
      "Component-based frontend engineering with React, Next.js, Vue, or Angular, selected according to product requirements, architecture, and scalability needs. We cover interface architecture, reusable component systems, performance optimization, state management, accessibility, responsive design, and seamless API integration. Our frontend solutions also translate the product’s visual layer into responsive, accessible, and high-performance digital experiences.",
    bgImage: "/images/services/frontend development2.png",
    href: "/services/ux-ui-design",
  },
  {
    title: "Backend Development & API Engineering",
    description:
      "Scalable backend systems built on Node.js, Python, depending on the workload. REST and GraphQL APIs are designed for developer usability and documented for long-term maintainability. Database architecture suited to the query patterns the product will actually run.",
    bgImage: "/images/services/BackendDevelopment2.png",
    href: null,
  },
  {
    title: "Web Portal & Internal Tool Development",
    description:
      "We build web-based platforms for operations, reporting, administration, and data management, replacing disconnected spreadsheets and manual processes with systems designed around how your team works. These solutions prioritize reliable data handling, role-based access control, workflow efficiency, and maintainability, giving teams a centralized platform to manage everyday operations with greater accuracy and control.",
    bgImage: "/images/services/WebPortal2.png",
    href: null,
  },
  {
    title: "System Integration & API Development",
    description:
      "Connecting the web application to payment gateways, CRMs, ERPs, identity providers, analytics platforms, and third-party APIs in ways that remain stable as external services evolve. Integration documentation, error handling, and monitoring are included in scope, not added later.",
    bgImage: "/images/services/systemIntegration2.png",
    href: null,
  },
  {
    title: "Web Application Modernization",
    description:
      "Modernizing legacy web applications and monolithic systems with modern technologies such as React, Next.js, and Node.js. We assess the existing application, identify areas for improvement, and plan a phased transition toward a more scalable and maintainable architecture while keeping the product stable and usable throughout the process.",
    bgImage: "/images/services/WebApplicationModernization2.png",
    href: null,
  },
  {
    title: "Cloud Deployment & DevOps Setup",
    description:
      "Web applications that launch without a proper cloud setup, CI/CD pipeline, or monitoring configuration create operational risk from day one. We configure infrastructure on AWS, manage environments, and set up logging and alerting before the production release.",
    bgImage: "/images/services/CloudDeployment2.png",
    href: null,
  },
  {
    title: "QA & Testing",
    description:
      "Functional, performance, and security testing are integrated into the development cycle, not applied at the end. Automated regression suites reduce manual overhead per release without removing human judgment from complex test scenarios. For teams that need structured bug reporting and QA workflow management, Greyloops also offers tailored solutions.",
    bgImage: "/images/services/QATesting2.png",
    href: null,
  },
];

export default function ServicesListSection() {
  return (
    <section className="frontend-font relative w-full bg-slate-50/70 py-12 font-sans text-slate-900 sm:py-16 lg:py-20">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .frontend-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .frontend-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Crystal Ambient Light Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
          }}
        />
        <div className="absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200/40 via-sky-200/30 to-indigo-200/40 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-sky-200/50 via-cyan-100/40 to-blue-200/30 blur-[150px]" />
        <div className="absolute left-10 bottom-10 h-[450px] w-[450px] rounded-full bg-indigo-100/50 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT SIDE: STICKY PINNED HEADING & TECH CHIPS */}
          <div className="top-24 lg:sticky lg:col-span-5 lg:self-start">
            <div className="flex flex-col items-start text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Service Capabilities
              </span>

              <h2 className="frontend-display mb-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                What our secure frontend development{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  services include
                </span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Our secure frontend development services combine modern frontend engineering with security-focused practices to protect user interactions and application data. We implement secure authentication and session handling, input validation, protected API communication, role-aware interfaces, dependency management, and appropriate browser security practices. Each solution is designed to maintain usability, performance, and maintainability while reducing frontend security risks.
              </p>

              {/* Modern Tech Chips (Icon on Left, Name on Right) */}
              <div className="mt-8 w-full">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {techIcons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-3 rounded-xl border border-white/80 bg-white/60 px-3.5 py-2.5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/80 hover:bg-white/90 hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.15)]"
                    >
                      <div className="relative h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={icon.src}
                          alt={icon.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-sm">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLABLE CRYSTAL CARDS VIEW */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            {serviceCards.map((service, index) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative min-h-[260px] w-full overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-blue-300/80 hover:bg-white/80 hover:shadow-[0_20px_40px_0_rgba(59,130,246,0.12)] sm:p-9 ${
                    service.href ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Subtle Crystal Glass Highlights */}
                  <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-white/80 to-transparent opacity-60 blur-xl" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

                  {/* Clean Background Image with Fade Mask */}
                  <div
                    className="pointer-events-none absolute -bottom-1 -right-1 -top-1 z-0 w-full overflow-hidden sm:w-[65%]"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 30%, black 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 30%, black 100%)",
                    }}
                  >
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-right opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <h3 className="frontend-display mb-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More link */}
                    {service.href && (
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );

              return service.href ? (
                <Link key={index} href={service.href} className="block">
                  {CardContent}
                </Link>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}