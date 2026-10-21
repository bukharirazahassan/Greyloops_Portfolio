// src/app/components/services/SaasFAQs.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What is the cost of developing a custom SaaS application?",
    answer: (
      <p>
        The cost depends on the complexity, features, and scale of your product.
        We provide tailored pricing to match your business needs, ensuring
        cost-effective SaaS development services.
      </p>
    ),
  },
  {
    id: "faq-2",
    question: "Why should I consider implementing SaaS?",
    answer: (
      <p>
        SaaS technology offers scalability, flexibility, and lower infrastructure
        costs. It enables remote access, streamlines operations, and enhances
        productivity, helping businesses stay ahead.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "What benefits does Tech Formation offer for SaaS solutions?",
    answer: (
      <p>
        We provide end-to-end SaaS services, from consulting and development to
        deployment and ongoing support. Our expertise ensures secure,
        high-performance, and scalable solutions customized for your industry.
      </p>
    ),
  },
  {
    id: "faq-4",
    question: "How long does it take to develop a custom SaaS product?",
    answer: (
      <p>
        Timelines vary based on project complexity. However, a typical SaaS
        development project can take anywhere from 3 to 9 months to reach a
        fully functional stage.
      </p>
    ),
  },
  {
    id: "faq-5",
    question: "What are the advantages of outsourcing SaaS development?",
    answer: (
      <p>
        Partnering with a specialized SaaS development agency gives you access to
        top-tier talent, faster development cycles, reduced costs, and a
        hassle-free experience, allowing you to focus on business growth.
      </p>
    ),
  },
  {
    id: "faq-6",
    question:
      "Why should you invest in SaaS development in the coming years?",
    answer: (
      <p>
        As businesses increasingly shift to cloud-based solutions, SaaS
        development offers unparalleled flexibility, scalability, and
        cost-efficiency, helping you stay ahead of the curve.
      </p>
    ),
  },
  {
    id: "faq-7",
    question:
      "Can your SaaS experts help create scalable solutions for enterprises?",
    answer: (
      <p>
        Absolutely! As an expert SaaS development company, we build highly
        scalable SaaS platforms designed to support both startups and enterprises,
        ensuring seamless performance and long-term growth.
      </p>
    ),
  },
];

export default function SaasFAQs() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20 text-slate-900 border-t border-slate-200/60 font-sans">
      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Consistent ambient background glow effects */}
      <div className="pointer-events-none absolute left-10 top-12 z-0 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-12 bottom-12 z-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
            <HelpCircle className="h-3.5 w-3.5 text-blue-500" />
            Got Questions?
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
            SaaS Development <span className="text-blue-600">FAQs</span>
          </h2>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            Find clarity on cloud architecture, development costs, timelines,
            and enterprise SaaS solutions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
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
                      <div className="border-t border-slate-100/80 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                        <div className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}