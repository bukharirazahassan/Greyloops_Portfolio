"use client";

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
} from "lucide-react";

const saasServices = [
  {
    phase: "01",
    title: "AI-Powered Development",
    description:
      "We are pioneers in an AI-first approach to software development, leveraging Large Language Models (LLMs) to build smarter and faster. By aggressively utilizing state-of-the-art AI coding agents like GitHub Copilot, Claude, and Gemini, we automate module generation, app creation, and custom development. Combined with our expertise in fine-tuning LLMs for specific business needs, this massively reduces your project costs and accelerates your go-to-market timeline.",
    icon: Search,
    image: "/images/services/AI-powered-mobile-app-development-company-768x768.webp",
    imageAlt: "AI-Powered SaaS Development Dashboard",
    color: "from-blue-500 to-cyan-500",
  },
  {
    phase: "02",
    title: "SaaS CMS Development",
    description:
      "We develop high-quality content-rich web applications on CMS platforms. Implementing the best SaaS practices into your business model with high quality and precision to get a significant return.",
    icon: Layout,
    image: "/images/services/CMS-Platform-Integration.jpg",
    imageAlt: "SaaS CMS Development Interface",
    color: "from-indigo-500 to-purple-500",
  },
  {
    phase: "03",
    title: "SaaS CRM Solutions",
    description:
      "We provide best-in-class CRM solutions to gain access to your business data anytime, anywhere. You just need to have an internet connection. Once you have an internet connection, your data is accessible across all your devices from desktop to mobile.",
    icon: Smartphone,
    image: "/images/services/CMS-Migration-Upgrades.jpg",
    imageAlt: "SaaS CRM Solutions Platform",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    phase: "04",
    title: "SaaS Mobile App Development",
    description:
      "We help out to bring your SaaS solution to the mobile platform. We are experts in all native and hybrid mobile application platforms and help you to grow your business effectively.",
    icon: Monitor,
    image: "/images/services/Enterprise-iOS-Solutions.jpg",
    imageAlt: "SaaS Mobile App Development",
    color: "from-sky-500 to-blue-600",
  },
  {
    phase: "05",
    title: "SaaS Consulting Services",
    description:
      "We provide consulting, and technology services to you based on your business desire and expectations which will help you to run your business smoothly and effectively.",
    icon: UserCheck,
    image: "/images/services/Ongoing-Consulting-Support.jpg",
    imageAlt: "SaaS Consulting Services",
    color: "from-emerald-500 to-teal-500",
  },
  {
    phase: "06",
    title: "SaaS Migration Services",
    description:
      "We provide migration services to cloud-based SaaS applications and help you out by providing flexibility to support new business models and to ensure to run the business as per the latest tech trend.",
    icon: Layers,
    image: "/images/services/CMS-Website-Development.jpg",
    imageAlt: "SaaS Migration Services",
    color: "from-amber-500 to-orange-500",
  },
  {
    phase: "07",
    title: "SaaS Analytics & Database Management",
    description:
      "We provide extensive services in key areas such as data portability, analytics and database management and help out to easily centralize and manage vast amounts of data.",
    icon: BarChart3,
    image: "/images/services/SaaSAnalytics.webp",
    imageAlt: "SaaS Analytics & Database Management",
    color: "from-cyan-500 to-teal-500",
  },
  {
    phase: "08",
    title: "Multi-tenant Architecture",
    description:
      "Build a secure, scalable SaaS platform where multiple organizations can use the same application while keeping their data and access securely isolated. Our multi-tenant architecture makes it easier to onboard customers, manage resources, and scale your platform efficiently.",
    icon: Boxes,
    image: "/images/services/MultitenantArchitecture.png",
    imageAlt: "Multi-tenant Architecture",
    color: "from-purple-500 to-pink-500",
  },
  {
    phase: "09",
    title: "Custom SaaS Software Development",
    description:
      "We assist you to convert your idea into reality by building a custom SaaS product that is scalable and secure at the same time. We improvise the usage of the latest technology tools to create a custom solution that can be scaled for future needs and upgrades.",
    icon: Code2,
    image: "/images/services/Saas.jpg",
    imageAlt: "Custom SaaS Software Development",
    color: "from-blue-600 to-indigo-600",
  },
];

export default function CoreSaasServicesSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 font-sans">
      {/* Isolated Background Decorative Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 10%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 10%, black 30%, transparent 100%)",
          }}
        />
        <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      {/* SECTION HEADER - CENTER ALIGNED */}
      <section className="relative z-10 w-full pt-20 pb-12 sm:pt-24 lg:pt-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Our Core SaaS Development{" "}
              </span>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Greyloops is an established web and SaaS development company,
              delivering SaaS services of any complexity to clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STACKING STICKY CARDS SECTION */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 sm:px-10 lg:px-12">
        {saasServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="sticky top-20 mb-16 flex min-h-[85vh] items-center justify-center"
              style={{
                zIndex: index + 10,
              }}
            >
              <div className="relative flex min-h-[85vh] w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 transition-colors duration-300 lg:flex-row">
                {/* Ambient Dots & Background Glow */}
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                  <div
                    className={`absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br ${service.color} opacity-15 blur-3xl`}
                  />
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #64748b 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* LEFT SIDE: CARD TEXT CONTENT */}
                <div className="relative z-10 flex w-full flex-col justify-center p-8 sm:p-12 md:p-16 lg:w-1/2">
                  {/* Badge / Service Counter */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20">
                      <Icon className="h-3.5 w-3.5" />
                      {service.phase} — SaaS Service
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1} /{" "}
                      {saasServices.length < 10
                        ? `0${saasServices.length}`
                        : saasServices.length}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl flex items-center gap-3">
                    {service.title}
                    {index === 0 && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Trending
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="max-w-2xl text-lg leading-relaxed font-medium text-slate-700 sm:text-xl">
                    {service.description}
                  </p>
                </div>

                {/* RIGHT SIDE: IMAGE CONTAINER */}
                <div className="relative h-[400px] w-full overflow-hidden bg-slate-100 lg:h-auto lg:min-h-full lg:w-1/2">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Left-to-Right Edge Fade Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}