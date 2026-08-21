"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Search, Copy, Check, ThumbsUp, ThumbsDown } from "lucide-react";

const faqData = [
  {
    id: "frontend-involvement",
    category: "General & Scope",
    question: "What does frontend development involve?",
    answer: (
      <p>
        Frontend development is all about building the user-facing parts of your website or app. This includes designing responsive layouts, creating interactive features, and ensuring a smooth and intuitive user experience. We also optimize performance, improve accessibility, and make sure your site works across all browsers.
      </p>
    ),
  },
  {
    id: "responsive-design",
    category: "Design & Performance",
    question: "Why do I need responsive design?",
    answer: (
      <p>
        Responsive design ensures your website looks and functions perfectly on any device, whether it’s a phone, tablet, or desktop. This is essential because users access websites from various devices, and a consistent experience helps keep them engaged and satisfied.
      </p>
    ),
  },
  {
    id: "code-quality",
    category: "Architecture & Quality",
    question: "How do you make sure the code is good?",
    answer: (
      <p>
        We maintain high-quality code by following industry best practices and coding standards. We use tools like Git for version control to track changes and ensure collaboration. Automated testing and QA tests help us catch bugs early.
      </p>
    ),
  },
  {
    id: "accessibility",
    category: "Standards & Compliance",
    question: "How do you ensure accessibility?",
    answer: (
      <p>
        We make sure your website is accessible to all users - inclusive of their special needs. This includes using semantic HTML for better screen reader support, adding descriptive alt attributes for images, and ensuring keyboard navigability. We also test your site with accessibility tools to meet standards like WCAG. Our teams are always keeping an eye on areas of improvement.
      </p>
    ),
  },
  {
    id: "third-party-integrations",
    category: "Integrations & APIs",
    question: "Can you integrate third-party tools or services?",
    answer: (
      <p>
        Yes, we can seamlessly integrate third-party tools. This includes analytics platforms, payment gateways, or APIs into your website. This ensures your site has all the functionality you need while maintaining performance and usability.
      </p>
    ),
  },
];

const CATEGORIES = [
  "All",
  "General & Scope",
  "Design & Performance",
  "Architecture & Quality",
  "Standards & Compliance",
  "Integrations & APIs",
];

export default function FrontendDevelopmentFQA() {
  const [openId, setOpenId] = useState("frontend-involvement");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [feedback, setFeedback] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({ ...prev, [id]: type }));
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="frontend-font relative w-full overflow-hidden bg-slate-50/70 py-16 font-sans text-slate-900 sm:py-24">
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

      {/* Background Ambient Lights & Dot Mask Pattern */}
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
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-200/40 via-sky-200/30 to-indigo-200/40 blur-[130px]" />
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-sky-200/50 via-cyan-100/40 to-blue-200/30 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Got Questions?
          </span>

          <h2 className="frontend-display mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frontend & Web{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Development FAQ
            </span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Everything you need to know about our web application engineering, user experiences, responsiveness, and code standards.
          </p>
        </div>

        {/* Search & Category Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative mx-auto max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 backdrop-blur-md"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white/80 text-slate-600 hover:bg-white hover:text-blue-600 border border-slate-200/80 shadow-sm backdrop-blur-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 py-12 text-center backdrop-blur-md">
              <p className="text-sm font-medium text-slate-600">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 text-xs font-semibold text-blue-600 underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-2xl transition-all duration-200 ${
                    isOpen
                      ? "border border-blue-200 bg-white shadow-lg shadow-blue-500/5 ring-1 ring-blue-100"
                      : "border border-slate-200/80 bg-white/80 hover:bg-white hover:border-slate-300 shadow-sm backdrop-blur-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`frontend-display text-base font-bold transition-colors sm:text-lg ${
                        isOpen ? "text-blue-600" : "text-slate-900"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
                          {item.answer}

                          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
                            <div className="flex items-center gap-3">
                              <span>Was this helpful?</span>
                              <button
                                onClick={() => handleFeedback(item.id, "yes")}
                                className={`flex items-center gap-1 rounded-md px-2 py-1 transition-colors ${
                                  feedback[item.id] === "yes"
                                    ? "bg-emerald-50 text-emerald-600 font-semibold"
                                    : "hover:text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <ThumbsUp className="h-3.5 w-3.5" /> Yes
                              </button>
                              <button
                                onClick={() => handleFeedback(item.id, "no")}
                                className={`flex items-center gap-1 rounded-md px-2 py-1 transition-colors ${
                                  feedback[item.id] === "no"
                                    ? "bg-rose-50 text-rose-600 font-semibold"
                                    : "hover:text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <ThumbsDown className="h-3.5 w-3.5" /> No
                              </button>
                            </div>

                            <button
                              onClick={() => handleCopyText(item.id, "Frontend Development FAQ Answer")}
                              className="flex items-center gap-1 transition-colors hover:text-slate-700"
                            >
                              {copiedId === item.id ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                                  <span className="text-emerald-600 font-semibold">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}