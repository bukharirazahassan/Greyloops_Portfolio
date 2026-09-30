"use client";

import { useState } from "react";
import { Plus, MessageCircleQuestion, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What do your IT infrastructure services include?",
    answer:
      "Our IT infrastructure services cover everything from initial planning and design to implementation, monitoring, and ongoing support. This includes server setup, network configuration, cloud integration, storage solutions, and system maintenance to keep your environment secure, scalable, and aligned with your business needs.",
  },
  {
    question: "How do I know if my infrastructure needs to be upgraded?",
    answer:
      "Signs include recurring downtime, slow system performance, growing security risks, or limited scalability. If your infrastructure struggles to support current operations or future plans, an evaluation can help identify which areas need to be improved or modernized.",
  },
  {
    question: "Do you support both on-premise and cloud-based infrastructure?",
    answer:
      "Yes, we help businesses manage and modernize both on-premise infrastructure and cloud environments. Our team provides guidance on hybrid models, cloud migrations, and which solution best fits your operational and compliance needs.",
  },
  {
    question: "Can you help with infrastructure planning for growth?",
    answer:
      "Absolutely. We assess your current environment and provide a roadmap that accounts for future users, applications, and data needs. Our goal is to ensure your infrastructure can scale without compromising performance or reliability.",
  },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className="group rounded-3xl border backdrop-blur-xl transition-all duration-500"
      style={{
        borderColor: isOpen ? "rgba(37,99,235,0.3)" : "rgba(226,232,240,0.8)",
        backgroundColor: isOpen
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.55)",
        boxShadow: isOpen
          ? "0 20px 50px rgba(37,99,235,0.12), inset 0 1px 0 0 rgba(255,255,255,0.9)"
          : "0 8px 30px rgba(0,0,0,0.03), inset 0 1px 0 0 rgba(255,255,255,0.8)",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-5 p-6 sm:p-8 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-xs font-bold tracking-widest transition-colors duration-300 shrink-0"
          style={{ color: isOpen ? "#2563eb" : "#94a3b8" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
            isOpen ? "text-slate-900" : "text-slate-800"
          }`}
        >
          {item.question}
        </span>

        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-500"
          style={{
            borderColor: isOpen ? "transparent" : "rgba(37,99,235,0.2)",
            background: isOpen
              ? "linear-gradient(135deg, #2563eb, #4f46e5)"
              : "rgba(37,99,235,0.08)",
            color: isOpen ? "#ffffff" : "#2563eb",
            transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
          }}
        >
          <Plus className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </button>

      {/* Smooth height animation via CSS grid-template-rows — no JS height
          measuring needed, and it stays accurate if the text reflows. */}
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 pl-[3.25rem] sm:pl-[4rem]">
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InfrastructureFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative w-full overflow-clip bg-slate-50 py-24 sm:py-32 px-6 sm:px-12 lg:px-24 font-sans text-slate-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

      {/* Dot matrix overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14">
          {/* Left: heading + CTA (sticky on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Frequently Asked{" "}
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Answers to common questions about how we plan, design, and
                support IT infrastructure. Can&apos;t find what you&apos;re
                looking for?
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 p-5 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/95 hover:shadow-[0_16px_36px_rgb(59,130,246,0.12)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 text-white shadow-sm">
                  <MessageCircleQuestion className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold text-slate-900">
                    Talk to our team
                  </span>
                  <span className="block text-xs text-slate-500">
                    We&apos;ll help with the rest
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}