// src/app/components/FAQSection.jsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Search,
  X,
  Sparkles,
} from "lucide-react";
import { CATEGORIES, FAQS } from "@/app/lib/faqData";
import CollaborateMobileDevelopment from "@/app/components/services/MobileService/CollaborateMobileDevelopment";

const searchText = (f) =>
  [
    f.question,
    ...(f.intro || []),
    f.listTitle,
    ...(f.items || []).map((i) => (typeof i === "string" ? i : `${i.label} ${i.text}`)),
    ...(f.outro || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const pad = (n) => String(n).padStart(2, "0");

function FaqAnswer({ faq }) {
  return (
    <div className="space-y-4 px-5 pb-6 pl-[4.25rem] pr-6 text-sm font-medium leading-relaxed text-slate-600 sm:pl-[5.5rem] sm:pr-10 sm:text-base">
      {faq.intro?.map((para) => (
        <p key={para}>{para}</p>
      ))}

      {faq.items && (
        <div>
          {faq.listTitle && <p className="mb-3 font-bold text-slate-900">{faq.listTitle}</p>}
          <ul className="space-y-2.5">
            {faq.items.map((item) => {
              const isObj = typeof item === "object";
              return (
                <li key={isObj ? item.label : item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>
                    {isObj ? (
                      <>
                        <strong className="font-bold text-slate-900">{item.label}:</strong>{" "}
                        {item.text}
                      </>
                    ) : (
                      <span className="font-semibold text-slate-800">{item}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {faq.outro?.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </div>
  );
}

export default function FAQSection() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(FAQS[0].id);

  const counts = useMemo(() => {
    const c = { All: FAQS.length };
    CATEGORIES.slice(1).forEach((cat) => {
      c[cat] = FAQS.filter((f) => f.category === cat).length;
    });
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (category === "All" || f.category === category) && (!q || searchText(f).includes(q))
    );
  }, [category, query]);

  const selectCategory = (cat) => {
    setCategory(cat);
    const first = FAQS.find((f) => (cat === "All" || f.category === cat) && (!query || searchText(f).includes(query.trim().toLowerCase())));
    setOpenId(first ? first.id : null);
  };

  const onSearch = (value) => {
    setQuery(value);
    const q = value.trim().toLowerCase();
    const first = FAQS.find((f) => (category === "All" || f.category === category) && (!q || searchText(f).includes(q)));
    setOpenId(first ? first.id : null);
  };

  return (
    <section className="relative w-full bg-slate-50 py-10 lg:py-16">
      {/* Background patterns */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />
      <div className="pointer-events-none absolute left-0 top-10 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[35%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card: Left 5 Cols Text, Right 7 Cols Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-white/80 backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Column (5 Cols): Heading & Description */}
            <div className="flex flex-col items-start lg:col-span-5">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Frequently Asked Questions</span>
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                <span className="block">Got Questions?</span>
                <span className="mt-1 block text-blue-600">We&apos;ve Got Answers.</span>
              </h2>

              <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                Find answers to common questions about Greyloops, our software development services, technology expertise, project approach, and collaboration models. Learn how we work, what to expect, and how we help businesses build secure, scalable, and innovative digital solutions.
              </p>
            </div>

            {/* Right Column (7 Cols): Expanded Width Image */}
            <div className="-mx-6 -mb-6 flex h-full items-center justify-center lg:col-span-7 lg:-my-12 lg:-mr-12">
              <div className="relative flex h-full min-h-[320px] w-full items-center justify-center p-2 sm:min-h-[400px] lg:min-h-[460px]">
                <Image
                  src="/FAQ_Header.png"
                  alt="Greyloops FAQ Header Banner"
                  width={1376}
                  height={768}
                  priority
                  unoptimized
                  className="h-full w-full scale-105 object-contain object-right sm:scale-110 lg:scale-105"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Main Content Layout (Sidebar + Search + Accordion) */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Sticky Topics Sidebar */}
          <aside className="px-1 sm:px-2 lg:sticky lg:top-28 lg:col-span-3">
            <div>
              <p className="mb-3 text-sm font-bold text-slate-900">Browse by topic</p>

              <div
                role="group"
                aria-label="Filter questions by topic"
                className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = category === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => selectCategory(cat)}
                      aria-pressed={isActive}
                      className={`flex shrink-0 items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:w-full ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                          : "bg-white/80 text-slate-700 shadow-xs ring-1 ring-white/80 backdrop-blur-md hover:bg-white hover:text-blue-600"
                      }`}
                    >
                      <span className="whitespace-nowrap">{cat}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-bold tabular-nums ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {counts[cat]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Search + Accordion Questions */}
          <div className="px-1 sm:px-2 lg:col-span-9">
            
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search questions, e.g. pricing, security, AI…"
                aria-label="Search questions"
                className="h-12 w-full rounded-2xl bg-white/80 pl-12 pr-11 text-sm font-medium text-slate-900 placeholder-slate-400 shadow-[0_12px_30px_rgba(15,23,42,0.06)] ring-1 ring-white/80 backdrop-blur-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => onSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <p className="mt-3 text-xs font-semibold text-slate-500" aria-live="polite">
              Showing {visible.length} of {FAQS.length} questions
            </p>

            <ul className="mt-4 space-y-3">
              <AnimatePresence initial={false} mode="popLayout">
                {visible.map((faq, i) => {
                  const isOpen = openId === faq.id;
                  return (
                    <motion.li
                      key={faq.id}
                      layout="position"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: Math.min(i, 6) * 0.03 }}
                      className={`overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl transition-all duration-300 ${
                        isOpen
                          ? "shadow-[0_20px_50px_rgba(37,99,235,0.12)] ring-1 ring-blue-200"
                          : "shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-white/80 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${faq.id}`}
                        id={`faq-trigger-${faq.id}`}
                        className="group flex w-full items-start gap-4 px-5 py-4 text-left focus:outline-none focus-visible:bg-blue-50/60 sm:gap-6 sm:py-5"
                      >
                        <span
                          className={`mt-0.5 w-9 shrink-0 font-mono text-sm font-semibold tabular-nums transition-colors duration-300 sm:w-12 ${
                            isOpen ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          [{pad(i + 1)}]
                        </span>
                        <span className="flex-1">
                          <span className="block text-base font-bold leading-snug text-slate-900 sm:text-lg">
                            {faq.question}
                          </span>
                          {category === "All" && (
                            <span className="mt-1.5 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600">
                              {faq.category}
                            </span>
                          )}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                              : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${faq.id}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <FaqAnswer faq={faq} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>

            {visible.length === 0 && (
              <div className="mt-4 flex flex-col items-center rounded-3xl bg-white/80 px-6 py-14 text-center shadow-[0_20px_50px_rgba(15,23,42,0.06)] ring-1 ring-white/80 backdrop-blur-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Search className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">No matching questions</h3>
                <p className="mt-1 max-w-sm text-sm font-medium text-slate-600">
                  Try a different keyword or topic, or contact our team and we will be happy to help.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    selectCategory("All");
                  }}
                  className="mt-5 rounded-xl bg-slate-100 px-5 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200"
                >
                  Reset filters
                </button>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Section: Directly Rendered Full-Width Component */}
       
        <CollaborateMobileDevelopment />
       

      </div>
    </section>
  );
}