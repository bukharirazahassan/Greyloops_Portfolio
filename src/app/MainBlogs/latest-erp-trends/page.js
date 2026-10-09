// src/app/blogs/latest-erp-trends/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ERPSolutions from "@/app/components/Erpsolutions"
import {
  CheckCircle2,
  Layers,
  FileText,
  Workflow,
  BarChart3,
  Cog,
  Users,
  BrainCircuit,
  TrendingUp,
  Bot,
  Lightbulb,
  Network,
  Cloud,
  Zap,
  Activity,
  Link2,
  ShieldCheck,
  MessageSquare,
  Info,
  ArrowRight,
  Sparkles,
  Link as LinkIcon,
  Check,
} from "lucide-react";

import {
  erpCapabilities,
  erpTakeAways,
  erpKeyTakeaways,
  aiPoweredErpPoints,
  cloudErpHybridPoints,
  erpAutomationPoints,
  realtimeAnalyticsPoints,
  erpIntegrationPoints,
  traditionalPoints,
  modernPoints,
  differences,
  modernPillars,
} from "../../lib/erpBlogData";

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

export default function LatestERPTrends() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const leftInnerRef = useRef(null);
  const rightColRef = useRef(null);
  const rightInnerRef = useRef(null);

  const [activeId, setActiveId] = useState(erpTakeAways[0].id);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useSmoothFollow(leftColRef, leftInnerRef, { top: 104, ease: 0.06 });
  useSmoothFollow(rightColRef, rightInnerRef, { top: 104, ease: 0.06 });

  useEffect(() => {
    const targets = erpTakeAways
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

      {/* Reading progress bar */}
      <div className="pointer-events-none fixed left-0 top-20 z-40 h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main shared background wrapper */}
      <main className="relative w-full overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />
        <div className="pointer-events-none absolute left-0 top-[6%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-[20%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-[42%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-[60%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-[80%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

        {/* ================= HERO ================= */}
        <section className="relative w-full py-16 lg:py-24">
          <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center text-center">
              <h1 className="max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl transition-all duration-500 ease-out">
                <span className="text-slate-900 inline-block hover:scale-[1.01] transition-transform">
                  Latest ERP Trends:
                </span>{" "}
                <span className="text-blue-600 inline-block hover:scale-[1.01] transition-transform">
                  How AI and Cloud Technology Are Transforming Businesses
                </span>
              </h1>

              {/* Full-width image frame */}
              <div className="mt-12 w-full max-w-7xl overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg ring-1 ring-slate-200/60 backdrop-blur-2xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/blogs/hero_erp_treding.png"
                    alt="Latest ERP Trends: How AI and Cloud Technology Are Transforming Businesses"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Content Section Under Image: Left Description & Right Modern Checkmarks */}
              <div className="mt-12 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                    Modern ERP systems are evolving beyond traditional business management software. With AI, cloud computing, automation, and real-time analytics, organizations can connect business operations, improve decision-making, strengthen visibility, and build a more scalable digital foundation.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-3.5 w-full">
                  {erpCapabilities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 rounded-2xl bg-white/80 px-4 py-3.5 shadow-xs ring-1 ring-slate-200/60 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:bg-blue-50/50"
                    >
                      <CheckCircle2
                        className="h-6 w-6 shrink-0 text-blue-600"
                        strokeWidth={2.25}
                      />
                      <span className="text-sm font-bold text-slate-900 sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3-COLUMN ARTICLE SECTION ================= */}
        <section
          ref={sectionRef}
          className="relative z-10 w-full py-16 lg:py-24"
        >
          <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[240px_minmax(0,1fr)_320px] xl:grid-cols-[260px_minmax(0,1fr)_380px] 2xl:grid-cols-[280px_minmax(0,1fr)_440px]">
              
              {/* Left Column: Navigation & Share */}
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
                      {erpTakeAways.map((item, index) => {
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

              {/* Center Column: All Body Content Cards */}
              <div className="order-1 flex min-w-0 flex-col gap-8 lg:order-2">
                
                {/* 1. Key Takeaways */}
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
                        Essential insights on modern ERP trends
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {erpKeyTakeaways.map((insight, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-blue-900/5 sm:p-5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 text-sm font-extrabold">
                          {index + 1}
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Traditional vs Modern ERP */}
                <div
                  id="traditional-vs-modern"
                  className="scroll-mt-28 flex flex-col gap-8"
                >
                  <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                      Traditional ERP vs.{" "}
                      <span className="text-blue-600">Modern ERP with AI</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      Traditional ERP systems manage core business operations by recording transactions and predefined rules. Modern ERP builds on that foundation with AI, cloud computing, and predictive analytics.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {/* Traditional card */}
                    <div className="flex flex-col rounded-3xl bg-white/80 backdrop-blur-md shadow-md p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                          <Layers className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                            Traditional ERP
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                            Focuses on structured processes and transaction management.
                          </p>
                        </div>
                      </div>

                      <ul className="mt-7 flex flex-col gap-3">
                        {traditionalPoints.map(({ icon: Icon, title, text }) => (
                          <li
                            key={title}
                            className="flex items-start gap-3.5 rounded-2xl bg-slate-50/80 px-4 py-3.5 shadow-xs"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                              <Icon className="h-[18px] w-[18px]" strokeWidth={2.25} />
                            </span>
                            <div>
                              <p className="text-sm font-bold text-slate-900 sm:text-base">
                                {title}
                              </p>
                              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                                {text}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Modern card */}
                    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 shadow-xl shadow-blue-600/20 sm:p-8 text-white">
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600">
                          <Sparkles className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white sm:text-2xl">
                            Modern ERP with AI
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-blue-100">
                            Combines enterprise management with intelligent data capabilities.
                          </p>
                        </div>
                      </div>

                      <ul className="relative mt-7 flex flex-col gap-3">
                        {modernPoints.map(({ icon: Icon, title, text }) => (
                          <li
                            key={title}
                            className="flex items-start gap-3.5 rounded-2xl bg-white/10 px-4 py-3.5 ring-1 ring-white/20 backdrop-blur-md"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/90 text-blue-600">
                              <Icon className="h-[18px] w-[18px]" strokeWidth={2.25} />
                            </span>
                            <div>
                              <p className="text-sm font-bold text-white sm:text-base">
                                {title}
                              </p>
                              <p className="mt-0.5 text-sm leading-relaxed text-blue-100">
                                {text}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Key Differences */}
                <div
                  id="key-differences"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl mb-2">
                    Key differences <span className="text-blue-600">at a glance</span>
                  </h2>
                  <p className="text-sm font-medium text-slate-500 mb-6">
                    Comparing traditional systems with AI-driven ERP capabilities
                  </p>

                  <div className="flex flex-col gap-3">
                    {differences.map(({ icon: Icon, capability, traditional, modern }) => (
                      <div
                        key={capability}
                        className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200/50 sm:p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Icon className="h-5 w-5" strokeWidth={2.25} />
                          </span>
                          <span className="text-base font-bold text-slate-900">
                            {capability}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="rounded-xl bg-white/80 p-3 ring-1 ring-slate-200/60">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                              Traditional ERP
                            </span>
                            <span className="text-sm text-slate-700 font-medium">
                              {traditional}
                            </span>
                          </div>
                          <div className="rounded-xl bg-blue-50/80 p-3 ring-1 ring-blue-100">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                              Modern ERP with AI
                            </span>
                            <span className="text-sm text-slate-900 font-semibold">
                              {modern}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. What Makes an ERP Modern */}
                <div
                  id="modern-pillars"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl mb-2">
                    What makes an ERP <span className="text-blue-600">modern?</span>
                  </h2>
                  <p className="text-sm font-medium text-slate-500 mb-8">
                    Core technical and functional pillars of next-gen enterprise systems
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {modernPillars.map(({ icon: Icon, title, text }) => (
                      <div
                        key={title}
                        className="flex flex-col gap-3 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-white hover:shadow-md"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          {title}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-slate-600">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Important Point */}
                <div
                  id="important-point"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Info className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      An important point
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                    Not every modern ERP system includes advanced AI capabilities. Some platforms modernize traditional ERP through cloud deployment, improved integration, automation, and better user experiences. AI-enabled ERP takes these capabilities further by using suitable data and AI technologies to support predictions, recommendations, and intelligent workflows.
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50/80 px-4 py-3.5 ring-1 ring-slate-200/50">
                    <Bot
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                      strokeWidth={2.25}
                    />
                    <p className="text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
                      The actual benefits depend on the platform, data quality, implementation, and business requirements.
                    </p>
                  </div>
                </div>

                {/* 6. AI-Powered ERP Systems Card */}
                <div
                  id="ai-powered-erp"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <BrainCircuit className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      AI-Powered ERP Systems
                    </h2>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                    AI is transforming ERP systems by helping organizations analyze business data, predict future needs, automate tasks, and make informed decisions. By integrating artificial intelligence into enterprise workflows, businesses can improve operational efficiency, strengthen planning, and respond to changing requirements.
                  </p>

                  <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/blogs/AI-Powered_ERP_Systems_v1.png"
                      alt="AI-Powered ERP Systems"
                      className="h-full w-full object-cover aspect-[1376/768]"
                      loading="lazy"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aiPoweredErpPoints.map(({ title, description, Icon, tint }, index) => (
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

                {/* 7. Cloud ERP & Hybrid Solutions Card */}
                <div
                  id="cloud-erp-hybrid"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <Cloud className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      Cloud ERP & Hybrid Solutions
                    </h2>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                    Cloud ERP enables organizations to manage business operations through cloud-hosted enterprise systems, reducing dependence on locally managed infrastructure. With flexible deployment options, scalable resources, and centralized access to business data, organizations can modernize their ERP environments while adapting to changing operational requirements.
                  </p>

                  <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/blogs/Evaluate_Technical_Expertise.png"
                      alt="Cloud ERP & Hybrid Solutions"
                      className="h-full w-full object-cover aspect-[1376/768]"
                      loading="lazy"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cloudErpHybridPoints.map(({ title, description, Icon, tint }, index) => (
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

                {/* 8. ERP Automation & Intelligent Workflows Card */}
                <div
                  id="erp-automation"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/10 text-[#007AFF] ring-1 ring-black/[0.04]">
                      <Zap className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      ERP Automation & Intelligent Workflows
                    </h2>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                    ERP automation helps organizations reduce manual work, standardize business processes, and improve operational efficiency. By combining predefined business rules with intelligent automation, businesses can streamline routine tasks and manage workflows more consistently.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {erpAutomationPoints.map(({ title, description, Icon, tint }, index) => (
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

                {/* 9. Real-Time Analytics & Business Intelligence Card */}
                <div
                  id="realtime-analytics"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#AF52DE]/10 text-[#AF52DE] ring-1 ring-black/[0.04]">
                      <BarChart3 className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      Real-Time Analytics & Business Intelligence
                    </h2>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                    Real-time analytics and business intelligence help organizations turn ERP data into actionable insights. By consolidating information across business functions, these capabilities improve operational visibility, support performance monitoring, and help decision-makers respond to changing conditions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {realtimeAnalyticsPoints.map(({ title, description, Icon, tint }, index) => (
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

                {/* 10. ERP Integration & Connected Systems Card */}
                <div
                  id="erp-integration"
                  className="scroll-mt-28 rounded-3xl bg-white/80 p-6 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8 lg:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#34C759]/12 text-[#28A745] ring-1 ring-black/[0.04]">
                      <Network className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                      ERP Integration & Connected Systems
                    </h2>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base mb-8">
                    ERP integration connects enterprise applications and data sources to create a more consistent flow of information across an organization. By linking ERP with other business platforms, organizations can reduce data silos, streamline processes, and improve coordination between departments.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {erpIntegrationPoints.map(({ title, description, Icon, tint }, index) => (
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

              {/* Right Column: Sticky Image Card */}
              <aside ref={rightColRef} className="relative order-3">
                <div
                  ref={rightInnerRef}
                  className="flex flex-col gap-4 will-change-transform"
                >
                  <div className="overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg shadow-blue-900/5 ring-1 ring-slate-200/60 backdrop-blur-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/blogs/ERP_Trending_v1.png"
                        alt="ERP Trending Solutions"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-lg shadow-blue-900/5">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />
                    <div className="relative">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#007AFF]">
                        Let’s talk
                      </span>
                      <h3 className="mt-1 text-xl font-extrabold leading-snug tracking-tight text-slate-900">
                        Ready to modernize your ERP? Talk to our experts.
                      </h3>
                      <a
                        href="/contact"
                        className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
                      >
                        Get in Touch
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

                 
      </main>
      <ERPSolutions />                 
      <Footer />
    </>
  );
}