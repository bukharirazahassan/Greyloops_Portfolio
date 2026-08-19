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
    <section className="relative w-full overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24 font-sans">
      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Decorative Blur Circles matching site theme */}
      <div className="pointer-events-none absolute left-10 top-12 z-0 h-72 w-72 animate-float rounded-full bg-blue-300/20 blur-3xl" />
      <div
        className="pointer-events-none absolute bottom-12 right-12 z-0 h-64 w-64 animate-float rounded-full bg-orange-200/25 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="relative mb-4 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-wider">
              Got Questions?
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/70 to-transparent" />
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              SaaS Development{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Find clarity on cloud architecture, development costs, timelines,
            and enterprise SaaS solutions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl transition-all duration-200 ${
                  isOpen
                    ? "bg-white/95 shadow-md shadow-blue-500/10 ring-1 ring-blue-200 backdrop-blur-sm"
                    : "bg-zinc-50/80 ring-1 ring-slate-100 backdrop-blur-sm hover:bg-white/90 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-bold transition-colors sm:text-lg ${
                      isOpen
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                        : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-50 text-blue-600"
                        : "bg-slate-200/60 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
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
                      <div className="border-t border-slate-100 px-5 pb-6 pt-4 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:text-base">
                        {item.answer}
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