"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Search,
  MessageSquare,
  ArrowUpRight,
  X,
} from "lucide-react";
import Link from "next/link";

const faqsData = [
  {
    id: 1,
    category: "Services",
    question: "What services does Greyloops provide?",
    answer:
      "Greyloops offers end-to-end IT solutions including web and mobile app development, enterprise software, SaaS platforms, AI-powered systems, and cloud application development. We serve businesses of all sizes across multiple industries worldwide.",
  },
  {
    id: 2,
    category: "Security",
    question: "How does Greyloops ensure data security and client confidentiality?",
    answer:
      "We follow strict security protocols with end-to-end encryption, secure authentication, and regular audits. Our team adheres to global compliance standards such as GDPR, HIPAA, and ISO 27001 to protect sensitive information at every stage.",
  },
  {
    id: 3,
    category: "Solutions",
    question: "Does Greyloops build custom enterprise-grade software?",
    answer:
      "Yes. We specialize in designing and developing scalable, enterprise-grade software tailored to specific business requirements, ensuring seamless integration, security, and long-term performance.",
  },
  {
    id: 4,
    category: "AI Technology",
    question: "How does Greyloops integrate AI into its solutions?",
    answer:
      "We use artificial intelligence to automate workflows, enhance data analytics, improve decision-making, and optimize user experiences. Our expertise includes AI agents, machine learning, and ChatGPT-based applications.",
  },
  {
    id: 5,
    category: "Industries",
    question: "What industries does Greyloops work with?",
    answer:
      "Greyloops has extensive experience across healthcare, logistics, fintech, retail, manufacturing, education, travel, and media. Each project is customized to the compliance and operational needs of the respective industry.",
  },
  {
    id: 6,
    category: "Process",
    question: "What development process does Greyloops follow?",
    answer:
      "We use an agile development methodology focused on collaboration, transparency, and timely delivery. Every project includes clear milestones, continuous testing, and regular client feedback loops to ensure predictable outcomes.",
  },
  {
    id: 7,
    category: "About Us",
    question: "Why do global businesses choose Greyloops as their technology partner?",
    answer:
      "Global clients choose Greyloops for our proven track record, transparent communication, and ability to deliver complex IT solutions on time and within budget. Our combination of technical excellence, strategic insight, and long-term support makes us a trusted partner for digital transformation.",
  },
  {
    id: 8,
    category: "Getting Started",
    question: "How can I start a project with Greyloops?",
    answer:
      "You can request a free consultation or project proposal directly through our website. Our team will analyze your requirements, provide cost estimates, and create a tailored development plan aligned with your business goals.",
  },
];

const categories = ["All", ...new Set(faqsData.map((f) => f.category))];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="faq-font relative w-full overflow-hidden bg-slate-50 py-20 text-slate-900 sm:py-28">
      {/* Modern display font — self-contained import, no tailwind.config changes needed */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .faq-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .faq-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Local shimmer keyframes — self-contained */}
      <style jsx>{`
        @keyframes faqShimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(220%);
          }
        }
        .faq-shimmer {
          animation: faqShimmer 2.6s ease-in-out infinite;
        }
        @keyframes faqGlowPulse {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.75;
          }
        }
        .faq-glow-pulse {
          animation: faqGlowPulse 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Dot Grid Texture — consistent with hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-indigo-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-6xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            Got Questions?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="faq-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-700 bg-clip-text text-transparent">
              Frequently Asked{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base sm:leading-8 lg:text-lg"
          >
            Everything you need to know about Greyloops, our services,
            processes, and how we help businesses grow through intelligent
            technology.
          </motion.p>
        </div>

        {/* ================= UNIFIED SEARCH + FILTER BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-2.5 shadow-lg shadow-slate-200/50 backdrop-blur-md"
        >
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search a question or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl bg-transparent py-3 pl-11 pr-11 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 border-t border-slate-100 px-2 pb-1 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================= FAQ LIST ================= */}
        <div className="mx-auto mt-12 max-w-7xl">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-12 text-center shadow-sm backdrop-blur-md">
              <p className="faq-display text-base font-bold text-slate-800">
                No matches for &quot;{searchQuery}&quot;
              </p>
              <p className="mt-1.5 text-sm text-slate-500">
                Try a different keyword or clear your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <motion.div layout className="flex flex-col gap-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    layout
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-300 bg-white shadow-xl shadow-blue-500/10 ring-1 ring-blue-400/20"
                        : "border-slate-200/80 bg-white/85 hover:border-blue-200 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    {/* Shimmer sweep — only plays on the active card */}
                    {isOpen && (
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="faq-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
                      </div>
                    )}

                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      className="relative z-10 flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className={`relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                        }`}
                      >
                        {isOpen && (
                          <span className="faq-glow-pulse pointer-events-none absolute -inset-1.5 rounded-full bg-blue-400/40 blur-md" />
                        )}
                        <span className="relative">{String(index + 1).padStart(2, "0")}</span>
                      </span>

                      <div className="min-w-0 flex-1">
                        <span
                          className={`mb-1.5 inline-flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                            isOpen ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          <span
                            className={`h-1 w-1 rounded-full transition-colors ${
                              isOpen ? "bg-blue-600" : "bg-slate-300"
                            }`}
                          />
                          {faq.category}
                        </span>
                        <h3
                          className={`faq-display truncate text-sm font-bold tracking-tight transition-colors sm:text-base lg:text-lg ${
                            isOpen ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-white text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="relative z-10 border-t border-slate-100 px-5 pb-6 pt-4 pl-[4.25rem] text-sm font-medium leading-relaxed text-slate-500 sm:px-6 sm:pl-[4.75rem] sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* ================= STILL HAVE QUESTIONS CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl transition-all duration-500 group-hover:bg-blue-200/70" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Still Have Questions?
              </span>

              <h3 className="faq-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-700 bg-clip-text text-transparent">
                  Can&rsquo;t find the answer you&rsquo;re looking for?
                </span>
              </h3>

              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
                Contact our team directly. We&rsquo;re here to help with your
                specific queries and project needs.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35 sm:text-sm"
              >
                <span className="faq-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <MessageSquare className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Get In Touch</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}