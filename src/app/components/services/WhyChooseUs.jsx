"use client";

import React from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "High-Performance Execution",
    description:
      "We build applications optimized for speed, scalability, and seamless user experiences across all devices.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "Robust Security & Architecture",
    description:
      "Every project is engineered with enterprise-grade security standards and maintainable code structures from day one.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with your team, translating complex business challenges into intuitive, high-impact digital solutions.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
    title: "End-to-End Delivery",
    description:
      "From initial discovery and UI/UX design to robust development, testing, and cloud deployment, we handle it all.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="service-font relative w-full bg-slate-50 border-t border-slate-200 py-20 px-6 sm:px-12 lg:px-20 xl:px-28 text-slate-900">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .service-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .service-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Ambient background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-500/20">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Why Choose Us
          </span>
          <h2 className="service-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-950">
            <span>Built for Reliability, Scalability, and </span>
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Measurable Growth
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We combine rigorous technical expertise with a deep understanding of business goals to deliver digital products that stand out and scale securely.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:border-blue-200"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
                {feature.icon}
              </div>
              <h3 className="service-display text-xl font-bold text-slate-950 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}