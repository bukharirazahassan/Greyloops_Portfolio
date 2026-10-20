// src/app/components/services/CoreSaasServicesSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Smartphone,
  Monitor,
  UserCheck,
  Layers,
  BarChart3,
  Boxes,
  Code2,
  Sparkles,
} from "lucide-react";

const saasServices = [
  {
    phase: "01",
    title: "AI-Powered Development",
    description:
      "We are pioneers in an AI-first approach to software development, leveraging Large Language Models (LLMs) to build smarter and faster. By aggressively utilizing state-of-the-art AI coding agents like GitHub Copilot, Claude, and Gemini, we automate module generation, app creation, and custom development. Combined with our expertise in fine-tuning LLMs for specific business needs, this massively reduces your project costs and accelerates your go-to-market timeline.",
    icon: Search,
    image: "/images/services/AI-powered-mobile-app-development.png",
    imageAlt: "AI-Powered SaaS Development Dashboard",
  },
  {
    phase: "02",
    title: "SaaS CMS Development",
    description:
      "We develop high-quality content-rich web applications on CMS platforms. Implementing the best SaaS practices into your business model with high quality and precision to get a significant return.",
    icon: Layout,
    image: "/images/services/CMS-Platform-Integration.png",
    imageAlt: "SaaS CMS Development Interface",
  },
  {
    phase: "03",
    title: "SaaS CRM Solutions",
    description:
      "We provide best-in-class CRM solutions to gain access to your business data anytime, anywhere. You just need to have an internet connection. Once you have an internet connection, your data is accessible across all your devices from desktop to mobile.",
    icon: Smartphone,
    image: "/images/services/CMS-Migration-Upgrades.png",
    imageAlt: "SaaS CRM Solutions Platform",
  },
  {
    phase: "04",
    title: "SaaS Mobile App Development",
    description:
      "We help out to bring your SaaS solution to the mobile platform. We are experts in all native and hybrid mobile application platforms and help you to grow your business effectively.",
    icon: Monitor,
    image: "/images/services/Enterprise-iOS-Solutions.png",
    imageAlt: "SaaS Mobile App Development",
  },
  {
    phase: "05",
    title: "SaaS Consulting Services",
    description:
      "We provide consulting, and technology services to you based on your business desire and expectations which will help you to run your business smoothly and effectively.",
    icon: UserCheck,
    image: "/images/services/Ongoing-Consulting-Support.jpg",
    imageAlt: "SaaS Consulting Services",
  },
  {
    phase: "06",
    title: "SaaS Migration Services",
    description:
      "We provide migration services to cloud-based SaaS applications and help you out by providing flexibility to support new business models and to ensure to run the business as per the latest tech trend.",
    icon: Layers,
    image: "/images/services/SaaS_Migration_Services.png",
    imageAlt: "SaaS Migration Services",
  },
  {
    phase: "07",
    title: "SaaS Analytics & Database Management",
    description:
      "We provide extensive services in key areas such as data portability, analytics and database management and help out to easily centralize and manage vast amounts of data.",
    icon: BarChart3,
    image: "/images/services/SaaSAnalytics.webp",
    imageAlt: "SaaS Analytics & Database Management",
  },
  {
    phase: "08",
    title: "Multi-tenant Architecture",
    description:
      "Build a secure, scalable SaaS platform where multiple organizations can use the same application while keeping their data and access securely isolated. Our multi-tenant architecture makes it easier to onboard customers, manage resources, and scale your platform efficiently.",
    icon: Boxes,
    image: "/images/services/MultitenantArchitecture_v1.png",
    imageAlt: "Multi-tenant Architecture",
  },
  {
    phase: "09",
    title: "Custom SaaS Software Development",
    description:
      "We assist you to convert your idea into reality by building a custom SaaS product that is scalable and secure at the same time. We improvise the usage of the latest technology tools to create a custom solution that can be scaled for future needs and upgrades.",
    icon: Code2,
    image: "/images/services/Custom_SaaS_Software_Development.png",
    imageAlt: "Custom SaaS Software Development",
  },
];

const pad = (n) => String(n).padStart(2, "0");

export default function CoreSaasServicesSection() {
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
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const current = saasServices[active];
  const CurrentIcon = current.icon;

  return (
    <div className="relative w-full bg-slate-50 font-sans">
      {/* Background Dot Matrix Pattern & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-0 top-10 z-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 z-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
        <div className="absolute bottom-20 left-1/4 z-0 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      </div>

      {/* SECTION HEADER - LEFT ALIGNED */}
      <section className="relative z-10 w-full pt-2 pb-4 lg:pt-4 lg:pb-6">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Core Capabilities</span>
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              <span className="text-blue-600">Our Core SaaS Development </span>
              <span className="text-slate-900">Services</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* SCROLL-SYNCED SERVICES: pinned image on the left, services on the right */}
      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ───────── Left: pinned square image (desktop) ───────── */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div
                className="relative"
                style={{ width: "min(100%, 640px, calc(100vh - 13.5rem))" }}
              >
                <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blue-400/15 blur-3xl" />

                {/* Image frame – the whole square image is always visible */}
                <div className="relative rounded-[2rem] bg-white/70 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.12)] ring-1 ring-white/80 backdrop-blur-xl">
                  <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-100">
                    {saasServices.map((service, i) => (
                      <motion.div
                        key={service.title}
                        initial={false}
                        animate={{
                          opacity: active === i ? 1 : 0,
                          scale: active === i ? 1 : 1.06,
                        }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                        aria-hidden={active !== i}
                      >
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1024px) 640px, 100vw"
                          className="object-cover object-center"
                        />
                      </motion.div>
                    ))}

                    {/* Caption */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-lg shadow-slate-900/10 ring-1 ring-white/80 backdrop-blur-xl">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                        <CurrentIcon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-900">
                        {current.title}
                      </span>
                      <span className="font-mono text-xs font-semibold tabular-nums text-slate-500">
                        {pad(active + 1)} / {pad(saasServices.length)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Segmented progress / quick navigation */}
                <div className="mt-4 flex gap-1.5 px-1" role="tablist" aria-label="Services">
                  {saasServices.map((service, i) => (
                    <button
                      key={service.title}
                      type="button"
                      role="tab"
                      aria-selected={active === i}
                      aria-label={service.title}
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

            {saasServices.map((service, i) => {
              const Icon = service.icon;
              const isActive = active === i;
              return (
                <li
                  key={service.title}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-index={i}
                  className={`relative scroll-mt-32 transition-opacity duration-500 ${isActive ? "" : "lg:opacity-60"}`}
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
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-3xl p-6 transition-all duration-500 sm:p-8 lg:min-h-[22rem] lg:p-10 ${
                      isActive
                        ? "bg-white/90 shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-blue-200"
                        : "bg-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.05)] ring-1 ring-white/80"
                    } backdrop-blur-xl lg:flex lg:flex-col lg:justify-center`}
                  >
                    {/* Mobile / tablet: the image sits with its own card (whole square visible) */}
                    <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 lg:hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/25">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-sm font-semibold text-blue-600">
                        {service.phase}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        / {pad(saasServices.length)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                      {service.description}
                    </p>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}