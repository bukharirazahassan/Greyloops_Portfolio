//src/app/components/company/AboutUs.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Users, 
  FolderKanban, 
  Calendar, 
  Smartphone, 
  Cloud, 
  Server, 
  TrendingUp, 
  GraduationCap, 
  MonitorCheck, 
  UserCheck, 
  ThumbsUp,
  Target,
  Eye,
  Lightbulb,
  Compass,
  ArrowRight
} from "lucide-react";
import WhatWeDo from "./OurValues";
import OurExpertise from "./OurExpertise";
import AboutUsFAQs from "./AboutUsFAQs";
import CollaborateMobileDevelopment from "@/app/components/services/MobileService/CollaborateMobileDevelopment";
import LeadershipTeam from "../../components/LeadershipTeam";
import TalentOnDemand from "../../components/TalentOnDemand";

const featureCards = [
  {
    title: "Our Mission",
    image: "/Agencies.jpg",
    href: "#",
  },
  {
    title: "Our Vision",
    image: "/company-vision.jpg",
    href: "#",
  },
  {
    title: "Our Philosophy",
    image: "/company-philosophy.jpg",
    href: "#",
  },
  {
    title: "Our Strategy",
    image: "/company-strategy.jpg",
    href: "#",
  },
];

const coreValuesInfo = [
  {
    step: "01",
    title: "OUR MISSION",
    description: "We help businesses turn ideas into impactful digital solutions through strong engineering, thoughtful collaboration, and reliable technology.",
    icon: Target,
  },
  {
    step: "02",
    title: "OUR VISION",
    description: "We aim to shape a smarter digital future by helping businesses build scalable technology that creates lasting value and meaningful growth.",
    icon: Eye,
  },
  {
    step: "03",
    title: "OUR PHILOSOPHY",
    description: "We believe great technology starts with understanding, collaboration, and purposeful engineering that delivers simple, reliable, and lasting solutions.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "OUR STRATEGY",
    description: "We align technology with business goals, combining software, AI, cloud, and digital expertise to solve challenges and enable sustainable growth.",
    icon: Compass,
  },
];

const statsAndFeatures = [
  {
    type: "metric",
    value: "250+",
    label: "Experts in their fields",
    icon: Users,
  },
  {
    type: "metric",
    value: "180+",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    type: "metric",
    value: "8+",
    label: "Years on the market",
    icon: Calendar,
  },
  {
    type: "metric",
    value: "43%",
    label: "Mobile & front-end engineers",
    icon: Smartphone,
  },
  {
    type: "metric",
    value: "16%",
    label: "AWS cloud engineers",
    icon: Cloud,
  },
  {
    type: "metric",
    value: "35%",
    label: "Back-End engineers",
    icon: Server,
  },
  {
    type: "feature",
    value: "50% of team growth",
    label: "per year",
    icon: TrendingUp,
  },
  {
    type: "feature",
    value: "Comprehensive hiring strategy",
    label: "",
    icon: GraduationCap,
  },
  {
    type: "feature",
    value: "80% of the team have at least 5 years experience",
    label: "",
    icon: MonitorCheck,
  },
  {
    type: "feature",
    value: "Long-term recruitment focus",
    label: "",
    icon: UserCheck,
  },
  {
    type: "feature",
    value: "High level of eNPS with a low staff turnover",
    label: "",
    icon: ThumbsUp,
  },
];

export default function AboutUs() {
  return (
    <div className="w-full">
      {/* ================= UNIFIED HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-20 pb-16 text-slate-900 sm:pt-28 sm:pb-20">
        {/* Ambient blue glow shades spanning deep behind */}
        <div className="pointer-events-none absolute -left-32 top-20 z-0 h-[550px] w-[550px] rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="pointer-events-none absolute -right-32 top-40 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[170px]" />

        {/* Continuous dot-grid texture overlay across the whole section */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          {/* Hero Text Content */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Who We Are
            </span>

            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Passion & Precision
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-medium">
              Greyloops is a technology partner focused on building and evolving
              digital solutions that move businesses forward. From custom software
              and enterprise applications to AI, cloud, and digital
              transformation, we bring together engineering expertise and
              strategic thinking to turn business requirements into secure,
              scalable, and dependable technology.
            </p>
          </div>

          {/* Hero Image Showcase nested inside the same expanded background section */}
          <div className="mt-12 sm:mt-16">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[1440/720]">
              <Image
                src="/about_us_v1.png"
                alt="Greyloops Team Workplace Showcase"
                fill
                priority
                quality={100}
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ================= STATS & METRICS GLASS CARD SECTION (Equal Height Grid) ================= */}
          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 z-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[140px]" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 z-0 h-[400px] w-[400px] rounded-full bg-sky-400/20 blur-[140px]" />

            <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {statsAndFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/10 h-full"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-4">
                      {item.type === "metric" ? (
                        <div>
                          <div className="text-4xl font-extrabold tracking-tight text-blue-600 sm:text-5xl">
                            {item.value}
                          </div>
                          <p className="mt-3 text-base font-semibold text-slate-700">
                            {item.label}
                          </p>
                        </div>
                      ) : (
                        <p className="text-lg font-bold leading-snug text-slate-800">
                          {item.value}
                          {item.label && (
                            <span className="block text-sm font-normal text-slate-500 mt-1">
                              {item.label}
                            </span>
                          )}
                        </p>
                      )}

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/80 text-blue-600 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                        <IconComponent className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION: WHAT STANDS BY OUR TEAM ================= */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-20 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 z-0 h-[550px] w-[550px] rounded-full bg-sky-400/15 blur-[170px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          <div className="mb-12 max-w-3xl text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Our Core Values
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              What stands by{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                our Team
              </span>
            </h2>
          </div>

          {/* 4 Image Cards in a Single Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative block aspect-[4/4.5] overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] animate-glow-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600">
                  <Sparkles className="h-4 w-4" strokeWidth={2} />
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold tracking-wide text-white drop-shadow-md transition-transform duration-300 group-hover:scale-105">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* ================= ULTRA-MODERN BENTO / FLOATING CARD GRID (Equal Height Grid) ================= */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 items-stretch">
            {coreValuesInfo.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 h-full"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-110">
                        <CardIcon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                      <span className="text-3xl font-black tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-blue-500/30">
                        {card.step}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>Explore approach</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE ACTUALLY DO SECTION ================= */}
      <WhatWeDo />
      <OurExpertise />
      <AboutUsFAQs />      
      <CollaborateMobileDevelopment />


      {/* ================= LEADERSHIP TEAM SECTION ================= */}
      {/* <LeadershipTeam />
      <TalentOnDemand /> */}
    </div>
  );
}