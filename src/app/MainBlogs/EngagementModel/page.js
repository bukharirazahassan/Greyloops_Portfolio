// src/app/MainBlogs/engagement-models/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Sparkles, ArrowRight, Link as LinkIcon, Check, CheckCircle2 } from "lucide-react";

import {
  engagementTakeAways,
  introductionData,
  staffAugmentationData,
  managedServicesData,
  comparisonSectionData,
  benefitsCostsLimitationsData,
  howToChooseSectionData,
  whyChooseGreyloopsData,
} from "../../lib/engagementModelData";

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

export default function EngagementModel() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const leftInnerRef = useRef(null);
  const rightColRef = useRef(null);
  const rightInnerRef = useRef(null);

  const [activeId, setActiveId] = useState(engagementTakeAways[0].id);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useSmoothFollow(leftColRef, leftInnerRef, { top: 104, ease: 0.06 });
  useSmoothFollow(rightColRef, rightInnerRef, { top: 104, ease: 0.06 });

  useEffect(() => {
    const targets = engagementTakeAways
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

  const IntroIcon = introductionData.Icon;
  const StaffIcon = staffAugmentationData.Icon;
  const ManagedIcon = managedServicesData.Icon;
  const ComparisonIcon = comparisonSectionData.Icon;
  const BenefitsIcon = benefitsCostsLimitationsData.Icon;
  const HowToChooseIcon = howToChooseSectionData.Icon;
  const WhyGreyloopsIcon = whyChooseGreyloopsData.Icon;

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Header />

      {/* Reading progress bar */}
      <div className="pointer-events-none fixed left-0 top-20 z-40 h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          }}
        />

        {/* Ambient blue circle glows */}
        <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-blue-300/35 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/30 blur-[120px]" />

        {/* HERO SECTION */}
        <section className="relative mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Strategic Guide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-5xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Staff Augmentation vs. Managed Services vs. Dedicated Teams:{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Which Is Right for Your Business?
              </span>
            </motion.h1>

            {/* Image in modern glass frame */}
            <div className="mt-12 w-full max-w-7xl overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl ring-1 ring-slate-200/60 backdrop-blur-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/blogs/Staff_Augmentation.png"
                  alt="Staff Augmentation vs Managed Services vs Dedicated Teams"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Short overview description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 w-full max-w-7xl text-left"
            >
              <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                Choosing the right IT engagement model can help your business scale efficiently, access the right technical expertise, and achieve its technology goals. Explore the differences between staff augmentation, managed services, and dedicated teams to find the approach that best fits your business needs.
              </p>
            </motion.div>

          </div>
        </section>

        {/* 3-COLUMN LAYOUT WITH STICKY PINNED CARDS */}
        <section
          ref={sectionRef}
          className="relative z-10 w-full py-12 lg:py-20"
        >
          <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[240px_minmax(0,1fr)_320px] xl:grid-cols-[260px_minmax(0,1fr)_380px] 2xl:grid-cols-[280px_minmax(0,1fr)_440px]">
              
              {/* Left Column: Sticky Navigation */}
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
                      {engagementTakeAways.map((item, index) => {
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
                          <LinkIcon className="h-4 w-4" strokeWidth={2.25} />
                        )}
                      </span>
                      <span className="flex-1 text-left">
                        {copied ? "Link copied!" : "Copy article link"}
                      </span>
                    </button>
                  </div>
                </div>
              </aside>

              {/* Center Column: Content Cards */}
              <div className="order-1 flex min-w-0 flex-col gap-8 lg:order-2">
                
                {/* 1. Introduction Card */}
                <div
                  id="introduction"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <IntroIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {introductionData.title}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                    {introductionData.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* 2. IT Staff Augmentation Card */}
                <div
                  id="staff-augmentation"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <StaffIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {staffAugmentationData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-6">
                    {staffAugmentationData.description}
                  </p>

                  <div className="flex flex-col gap-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-8">
                    {staffAugmentationData.descriptionParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-4">
                      Key Benefits of IT Staff Augmentation
                    </h3>
                    <div className="grid grid-cols-1 gap-3.5">
                      {staffAugmentationData.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3.5 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                          <div>
                            <span className="font-bold text-slate-900 sm:text-base">
                              {benefit.title}:{" "}
                            </span>
                            <span className="text-slate-600 sm:text-base">
                              {benefit.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-4">
                      {staffAugmentationData.whenToChooseTitle}
                    </h3>
                    <div className="flex flex-col gap-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                      {staffAugmentationData.whenToChooseParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Managed IT Services Card */}
                <div
                  id="managed-services"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <ManagedIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {managedServicesData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-6">
                    {managedServicesData.description}
                  </p>

                  <div className="flex flex-col gap-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-8">
                    {managedServicesData.descriptionParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-4">
                      Key Benefits of Managed IT Services
                    </h3>
                    <div className="grid grid-cols-1 gap-3.5">
                      {managedServicesData.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3.5 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                          <div>
                            <span className="font-bold text-slate-900 sm:text-base">
                              {benefit.title}:{" "}
                            </span>
                            <span className="text-slate-600 sm:text-base">
                              {benefit.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-4">
                      {managedServicesData.whenToChooseTitle}
                    </h3>
                    <div className="flex flex-col gap-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                      {managedServicesData.whenToChooseParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Comparing Engagement Models Card */}
                <div
                  id="comparing-models"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <ComparisonIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {comparisonSectionData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-4">
                    {comparisonSectionData.intro}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-8">
                    {comparisonSectionData.subIntro}
                  </p>

                  <div className="mb-10 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={comparisonSectionData.image}
                      alt={comparisonSectionData.imageAlt}
                      className="h-full w-full object-cover aspect-[1376/768]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col gap-6 mb-10">
                    {comparisonSectionData.models.map(({ title, Icon: ModelIcon, text, bestSuited, example }, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col gap-4 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                            <ModelIcon className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                        </div>

                        <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                          {text}
                        </p>

                        <div className="rounded-xl bg-white/90 p-4 ring-1 ring-slate-200/60 flex flex-col gap-2">
                          <p className="text-sm font-semibold text-slate-800">
                            <span className="font-bold text-blue-600">Best suited for: </span>
                            {bestSuited}
                          </p>
                          <p className="text-sm font-semibold text-slate-800">
                            <span className="font-bold text-indigo-600">Example: </span>
                            {example}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200/60 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead>
                        <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 text-sm font-extrabold">
                          {comparisonSectionData.tableHeaders.map((head, i) => (
                            <th key={i} className="p-4 sm:p-5 whitespace-nowrap">
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm font-medium text-slate-700">
                        {comparisonSectionData.tableRows.map((row, i) => (
                          <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                            <td className="p-4 sm:p-5 font-bold text-slate-900 whitespace-nowrap">
                              {row.feature}
                            </td>
                            <td className="p-4 sm:p-5">{row.staff}</td>
                            <td className="p-4 sm:p-5">{row.managed}</td>
                            <td className="p-4 sm:p-5">{row.dedicated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 ring-1 ring-blue-100">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-2">
                      {comparisonSectionData.howToChooseTitle}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-slate-600 mb-5">
                      {comparisonSectionData.howToChooseSubtitle}
                    </p>

                    <div className="flex flex-col gap-3 mb-6">
                      {comparisonSectionData.choiceBulletPoints.map(({ bold, text }, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                          <p className="text-sm sm:text-base font-medium text-slate-800">
                            <strong className="text-slate-900 font-bold">{bold}</strong> {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700 border-t border-blue-200/60 pt-4">
                      {comparisonSectionData.closingText}
                    </p>
                  </div>
                </div>

                {/* 5. Benefits, Costs, and Limitations Card */}
                <div
                  id="benefits-costs-limitations"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <BenefitsIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {benefitsCostsLimitationsData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-4">
                    {benefitsCostsLimitationsData.intro}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-10">
                    {benefitsCostsLimitationsData.subIntro}
                  </p>

                  <div className="flex flex-col gap-10 mb-12">
                    {benefitsCostsLimitationsData.modelsBreakdown.map((mod, idx) => (
                      <div key={idx} className="flex flex-col gap-6 rounded-2xl bg-slate-50/80 p-6 sm:p-8 ring-1 ring-slate-200/60">
                        <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                          {mod.category}
                        </h3>
                        <p className="text-base font-medium leading-relaxed text-slate-700">
                          {mod.overview}
                        </p>

                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3">
                            {mod.benefitsTitle}
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {mod.benefits.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200/50 shadow-xs">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                                <div>
                                  <span className="font-bold text-slate-900">{b.title}: </span>
                                  <span className="text-slate-600">{b.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3">
                            Cost Considerations
                          </h4>
                          <div className="whitespace-pre-line text-base font-medium leading-relaxed text-slate-700 rounded-xl bg-white p-4 ring-1 ring-slate-200/50 shadow-xs">
                            {mod.costsText}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3">
                            {mod.limitationsTitle}
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {mod.limitations.map((l, lIdx) => (
                              <div key={lIdx} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200/50 shadow-xs">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">✕</span>
                                <div>
                                  <span className="font-bold text-slate-900">{l.title}: </span>
                                  <span className="text-slate-600">{l.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl bg-blue-50/70 p-4 ring-1 ring-blue-100 text-sm font-semibold text-slate-800">
                          <span className="font-bold text-blue-600">Best suited for: </span>
                          {mod.bestFit}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-2">
                      {benefitsCostsLimitationsData.costComparisonTitle}
                    </h3>
                    <p className="text-base font-medium text-slate-600 mb-6">
                      {benefitsCostsLimitationsData.costComparisonIntro}
                    </p>

                    <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200/60 shadow-sm mb-6">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 text-sm font-extrabold">
                            {benefitsCostsLimitationsData.costTableHeaders.map((h, i) => (
                              <th key={i} className="p-4 sm:p-5 whitespace-nowrap">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm font-medium text-slate-700">
                          {benefitsCostsLimitationsData.costTableRows.map((row, i) => (
                            <tr key={i} className="hover:bg-blue-50/35 transition-colors">
                              <td className="p-4 sm:p-5 font-bold text-slate-900 whitespace-nowrap">{row.factor}</td>
                              <td className="p-4 sm:p-5">{row.staff}</td>
                              <td className="p-4 sm:p-5">{row.managed}</td>
                              <td className="p-4 sm:p-5">{row.dedicated}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 mb-2">
                      {benefitsCostsLimitationsData.evaluationTitle}
                    </h3>
                    <p className="text-base font-medium text-slate-600 mb-6">
                      {benefitsCostsLimitationsData.evaluationIntro}
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      {benefitsCostsLimitationsData.evaluationSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-extrabold text-sm">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="font-bold text-slate-900 sm:text-base">{step.title}</h4>
                            <p className="text-sm sm:text-base text-slate-600 mt-0.5">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 sm:p-8 ring-1 ring-blue-100">
                    <div className="whitespace-pre-line text-base font-medium leading-relaxed text-slate-800">
                      {benefitsCostsLimitationsData.conclusionSummary}
                    </div>
                  </div>
                </div>

                {/* 6. How to Choose the Right Model Card */}
                <div
                  id="how-to-choose"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <HowToChooseIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {howToChooseSectionData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-4">
                    {howToChooseSectionData.intro}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-8">
                    {howToChooseSectionData.subIntro}
                  </p>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                    {howToChooseSectionData.evaluateTitle}
                  </h3>

                  <div className="flex flex-col gap-6 mb-10">
                    {/* Staff Augmentation choice */}
                    <div className="rounded-2xl bg-slate-50/80 p-6 ring-1 ring-slate-200/50">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        Choose IT Staff Augmentation if:
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {howToChooseSectionData.staffOptions.map((opt, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                            <p className="text-sm sm:text-base font-medium text-slate-700">{opt}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Managed Services choice */}
                    <div className="rounded-2xl bg-slate-50/80 p-6 ring-1 ring-slate-200/50">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        Choose Managed IT Services if:
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {howToChooseSectionData.managedOptions.map((opt, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                            <p className="text-sm sm:text-base font-medium text-slate-700">{opt}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dedicated Team choice */}
                    <div className="rounded-2xl bg-slate-50/80 p-6 ring-1 ring-slate-200/50">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        Choose a Dedicated Development Team if:
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {howToChooseSectionData.dedicatedOptions.map((opt, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={2.25} />
                            <p className="text-sm sm:text-base font-medium text-slate-700">{opt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                    {howToChooseSectionData.factorsTitle}
                  </h3>

                  <div className="flex flex-col gap-4 mb-8">
                    {howToChooseSectionData.factors.map((factor, i) => (
                      <div key={i} className="rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50">
                        <h4 className="font-bold text-slate-900 sm:text-base mb-1">{factor.title}</h4>
                        <p className="text-sm sm:text-base text-slate-600">{factor.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 ring-1 ring-blue-100">
                    <p className="text-base font-medium leading-relaxed text-slate-800">
                      {howToChooseSectionData.summaryText}
                    </p>
                  </div>
                </div>

                {/* 7. Why Choose Greyloops Card */}
                <div
                  id="why-choose-greyloops"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <WhyGreyloopsIcon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      {whyChooseGreyloopsData.title}
                    </h2>
                  </div>

                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-4">
                    {whyChooseGreyloopsData.intro}
                  </p>
                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg mb-10">
                    {whyChooseGreyloopsData.subIntro}
                  </p>

                  <div className="flex flex-col gap-6 mb-12">
                    {whyChooseGreyloopsData.features.map((feat, i) => (
                      <div key={i} className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-6 ring-1 ring-slate-200/50">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {feat.title}
                        </h3>
                        <div className="whitespace-pre-line text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                          {feat.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Banner inside Greyloops section */}
                  <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 sm:p-8 shadow-md">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight text-slate-900 mb-3">
                        {whyChooseGreyloopsData.ctaHeading}
                      </h3>
                      <div className="whitespace-pre-line text-sm sm:text-base font-medium leading-relaxed text-slate-600 mb-6">
                        {whyChooseGreyloopsData.ctaText}
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
                      >
                        Get in Touch
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Image Card (CTA card removed) */}
              <aside ref={rightColRef} className="relative order-3">
                <div
                  ref={rightInnerRef}
                  className="flex flex-col gap-4 will-change-transform"
                >
                  <div className="overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/blogs/Dedicated_Development_Teams.png"
                        alt="Dedicated Development Teams"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}