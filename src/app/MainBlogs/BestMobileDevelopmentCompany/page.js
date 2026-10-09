// src/app/MainBlogs/BestMobileDevelopmentCompany/page.js
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Users,
  Link2,
  Check,
  Target,
  Cpu,
  FolderOpen,
  ShieldAlert,
  GitBranch,
  MessageSquare,
  DollarSign,
  LifeBuoy,
} from "lucide-react";

import {
  capabilities,
  takeAways,
  centerInsights,
  partnerFactors,
  numberTints,
  requirementPoints,
  technicalExpertisePoints,
  portfolioPoints,
  securityPerformancePoints,
  developmentProcessPoints,
  communicationPoints,
  costValuePoints,
  postLaunchPoints,
} from "../../lib/blogData";

function useSmoothFollow(colRef, innerRef, { top = 104, ease = 0.06 } = {}) {
  useEffect(() => {
    const col = colRef.current;
    const inner = innerRef.current;
    if (!col || !inner) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let current = 0;
    let raf = 0;

    const getTarget = () => {
      if (!desktop.matches) return 0;
      const colTop = col.getBoundingClientRect().top;
      const max = Math.max(0, col.offsetHeight - inner.offsetHeight);
      return Math.min(Math.max(top - colTop, 0), max);
    };

    const tick = () => {
      const target = getTarget();
      if (reduce.matches || !desktop.matches) {
        current = target;
      } else {
        current += (target - current) * ease;
        if (Math.abs(target - current) < 0.1) current = target;
      }
      inner.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      raf = current !== target ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [colRef, innerRef, top, ease]);
}

export default function BestMobileDevelopmentCompany() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const leftInnerRef = useRef(null);
  const rightColRef = useRef(null);
  const rightInnerRef = useRef(null);

  const [activeId, setActiveId] = useState(takeAways[0].id);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useSmoothFollow(leftColRef, leftInnerRef, { top: 104, ease: 0.06 });
  useSmoothFollow(rightColRef, rightInnerRef, { top: 104, ease: 0.06 });

  useEffect(() => {
    const targets = takeAways
      .map((t) => document.getElementById(t.id))
      .filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const pct = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setProgress(Math.round(pct * 100));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Header />

      <div className="pointer-events-none fixed left-0 top-20 z-40 h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="relative flex w-full items-start bg-slate-50 pt-16 pb-20 lg:min-h-[calc(100vh-80px)] lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blogs/Best_Mobile_App_Development_Company_Header.png"
            alt="Best Mobile App Development Company Background"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 sm:text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                Trending Blog & Insights
              </span>

              <h1 className="mx-0 mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
                <span className="text-slate-900">How to Choose the</span>{" "}
                <span className="text-blue-600">
                  Best Mobile App Development Company
                </span>
              </h1>

              <p className="mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                Choosing the right mobile app development company can directly impact your app’s quality, security, scalability, and long-term success. Evaluate potential partners based on their technical expertise, proven experience, development approach, security standards, and ability to support your product beyond launch.
              </p>

              <div className="mt-6 flex flex-col gap-4 w-full">
                {capabilities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <CheckCircle2
                      className="h-6 w-6 shrink-0 text-blue-600"
                      strokeWidth={2.25}
                    />
                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative w-full bg-slate-50 py-16 lg:py-24"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[240px_minmax(0,1fr)_320px] xl:grid-cols-[260px_minmax(0,1fr)_380px] 2xl:grid-cols-[280px_minmax(0,1fr)_440px]">
            
            {/* Left column */}
            <aside ref={leftColRef} className="relative order-2 lg:order-1">
              <div
                ref={leftInnerRef}
                className="flex flex-col gap-4 will-change-transform"
              >
                <div className="rounded-3xl bg-white/80 p-5 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl">
                  <h3 className="mb-3 px-1 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    On this page
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {takeAways.map((item, index) => {
                      const isActive = activeId === item.id;
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/25"
                              : "bg-slate-50 text-slate-800 ring-1 ring-slate-200/60 hover:bg-white hover:shadow-md"
                          }`}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-[#007AFF]/10 text-[#007AFF]"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="line-clamp-2 flex-1 leading-snug">
                            {item.label}
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      );
                    })}
                  </nav>

                  <div className="mt-5 px-1">
                    <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>Reading progress</span>
                      <span className="text-[#007AFF]">{progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/80 p-5 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl">
                  <h3 className="mb-3 px-1 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    Share this article
                  </h3>
                  <button
                    type="button"
                    onClick={copyLink}
                    className="group flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800 ring-1 ring-slate-200/60 transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        copied
                          ? "bg-[#34C759]/15 text-[#28A745]"
                          : "bg-[#5856D6]/10 text-[#5856D6]"
                      }`}
                    >
                      {copied ? (
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Link2 className="h-4 w-4" strokeWidth={2.25} />
                      )}
                    </span>
                    <span className="flex-1 text-left">
                      {copied ? "Link copied!" : "Copy article link"}
                    </span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Center column */}
            <div className="order-1 flex min-w-0 flex-col gap-6 lg:order-2">
              
              {/* Key Takeaways Card */}
              <div
                id="key-takeaways"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-7 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF9500]/12 text-[#F08000] ring-1 ring-black/[0.04]">
                    <Lightbulb className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      Key Takeaways
                    </h2>
                    <p className="text-sm font-medium text-slate-500">
                      Six things to look for before you choose a partner
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {centerInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5 sm:p-5"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${
                          numberTints[index % numberTints.length]
                        }`}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                        {insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why the Right Development Partner Matters Card */}
              <div
                id="partner-matters"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                    <Users className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Why the Right Development Partner Matters
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                  Choosing the right mobile app development company directly influences your product’s quality, security, scalability, cost, and time to market. A capable technology partner brings the right expertise, architecture, and development approach to turn your business requirements into a reliable product built for long-term growth.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                  {partnerFactors.map(({ label, Icon, tint }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-3 rounded-2xl bg-slate-50/80 px-3 py-5 text-center ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-black/[0.04] ${tint}`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Define Your Mobile App Requirements Card */}
              <div
                id="app-requirements"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#03AF79]/10 text-[#03AF79] ring-1 ring-black/[0.04]">
                    <Target className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Define Your Mobile App Requirements
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  Before selecting a mobile app development company, clearly define what you want to achieve and what the application needs to deliver. A well-defined scope helps development teams understand your expectations, recommend the right technology approach, estimate costs accurately, and create a realistic delivery plan.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Mobile_App_Requirements.png"
                    alt="Define Your Mobile App Requirements"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirementPoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evaluate Technical Expertise Card */}
              <div
                id="evaluate-expertise"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                    <Cpu className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Evaluate Technical Expertise
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  Technical expertise is one of the most important factors when choosing a mobile app development company. Look beyond basic app development and assess whether the team has the engineering capabilities to design, integrate, secure, and scale a complete digital product.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Evaluate_Technical_Expertise.png"
                    alt="Evaluate Technical Expertise"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalExpertisePoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Portfolio & Case Studies Card */}
              <div
                id="review-portfolio"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#AF52DE]/10 text-[#AF52DE] ring-1 ring-black/[0.04]">
                    <FolderOpen className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Review Portfolio & Case Studies
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  A company’s portfolio gives you a clear view of its practical experience, technical capabilities, and approach to solving real business challenges. Do not judge a development company only by the number of apps it has built. Look at the type of projects, their complexity, the technologies used, and the results delivered.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Review_Portfolio_Case_Studies.png"
                    alt="Review Portfolio & Case Studies"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioPoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assess Security, Scalability & Performance Card */}
              <div
                id="assess-security"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#34C759]/12 text-[#28A745] ring-1 ring-black/[0.04]">
                    <ShieldAlert className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Assess Security, Scalability & Performance
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  Security, scalability, and performance are essential when choosing a mobile app development company. Your application should protect sensitive data, deliver a reliable user experience, and handle growing business demands without major technical issues.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Assess_Security_Scalability_Performance.png"
                    alt="Assess Security, Scalability & Performance"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityPerformancePoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Understand Their Development Process Card */}
              <div
                id="development-process"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF9500]/12 text-[#F08000] ring-1 ring-black/[0.04]">
                    <GitBranch className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Understand Their Development Process
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  A well-defined development process helps keep your mobile app project organized, transparent, and aligned with your business goals. Before choosing a development company, understand how it manages each stage, from planning and design to deployment and ongoing support.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Development_Process.png"
                    alt="Understand Their Development Process"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {developmentProcessPoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consider Communication & Collaboration Card */}
              <div
                id="communication-collaboration"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                    <MessageSquare className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Consider Communication & Collaboration
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  Clear communication and effective collaboration are essential for a successful mobile app development project. Choose a company that keeps you informed, shares progress regularly, and involves your team in important decisions throughout development.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Consider_Communication_Collaboration.png"
                    alt="Consider Communication & Collaboration"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communicationPoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evaluate Cost & Long-Term Value Card */}
              <div
                id="evaluate-cost"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF9500]/12 text-[#F08000] ring-1 ring-black/[0.04]">
                    <DollarSign className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Evaluate Cost & Long-Term Value
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  The cost of mobile app development depends on the application&apos;s complexity, features, technology, integrations, security requirements, and ongoing support needs. Instead of choosing the lowest quote, evaluate the overall value, quality, and long-term cost of ownership.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Evaluate_Cost_LongTerm_Value.png"
                    alt="Evaluate Cost & Long-Term Value"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {costValuePoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Launch Support & Continuous Improvement Card */}
              <div
                id="post-launch-support"
                className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#34C759]/12 text-[#28A745] ring-1 ring-black/[0.04]">
                    <LifeBuoy className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Post-Launch Support & Continuous Improvement
                  </h2>
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                  Launching a mobile application is only the beginning of its lifecycle. After release, the application needs ongoing maintenance, performance monitoring, security updates, and improvements to remain reliable and meet changing user expectations.
                </p>

                <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/Assess_Security_Scalability_Performance.png"
                    alt="Post-Launch Support & Continuous Improvement"
                    className="h-full w-full object-cover aspect-[1376/768]"
                    loading="lazy"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {postLaunchPoints.map(({ title, description, Icon, tint }, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right column */}
            <aside ref={rightColRef} className="relative order-3">
              <div
                ref={rightInnerRef}
                className="flex flex-col gap-4 will-change-transform"
              >
                <div className="overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/blogs/e-commerce.jpg"
                      alt="E-commerce mobile app solutions"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-lg shadow-blue-900/5">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />
                  <div className="relative">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#007AFF]">
                      Let’s talk
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold leading-snug tracking-tight text-slate-900">
                      Planning a mobile app? Talk to our team.
                    </h3>
                    <Link
                      href="/contact"
                      className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
                    >
                      Get in Touch
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}