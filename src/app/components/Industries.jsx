"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Cloud,
  Briefcase,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const baseIndustries = [
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Streamlined Admin & Compliance",
    description:
      "Reduce admin load by automating scheduling, intake routing, and internal handoffs—without touching sensitive clinical workflows.",
    image: "/Healthcare.jpg",
    icon: HeartPulse,
    details: {
      challenges: "Heavy administrative burdens, patient scheduling delays, and fragmented team handoffs.",
      solutions: "Secure automated administrative routing that preserves HIPAA-compliant patient privacy.",
      useCases: "Automated appointment scheduling, intake processing, and department handoffs.",
      impact: "Reduced staff fatigue, faster patient intake, and strict data security compliance.",
    },
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "Automated Compliance & Security",
    description:
      "Streamline approvals and reconciliations with controlled automations that log actions and keep humans in the loop.",
    image: "/Finance.jpg",
    icon: Landmark,
    details: {
      challenges: "Manual reconciliation errors, slow multi-layer approval chains, and strict audit compliance.",
      solutions: "Human-in-the-loop automated workflows with automated audit logging.",
      useCases: "Transaction matching, approval routing, and continuous compliance verification.",
      impact: "Reduced processing times, zero audit gaps, and minimized operational risks.",
    },
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    subtitle: "Unified Operations Platform",
    description:
      "Sync orders, inventory, support tickets, and returns so ops stays clean while customers get fast, consistent updates.",
    image: "/e-commerce.jpg",
    icon: ShoppingBag,
    details: {
      challenges: "Inventory overselling, disjointed support channels, and delayed return processing.",
      solutions: "Real-time sync between storefront, ERP, inventory, and support ticketing systems.",
      useCases: "Automated inventory updates, order status notifications, and self-service returns.",
      impact: "Higher customer satisfaction, lower support volume, and optimized inventory turn.",
    },
  },
  
  {
    id: "saas",
    title: "SaaS",
    subtitle: "High-Growth Architecture",
    description:
      "Scale software operations with fault-tolerant cloud engines, real-time analytics, and seamless API integrations.",
    image: "/Saas_v2.jpg",
    icon: Cloud,
    details: {
      challenges: "System downtime risks, complex API orchestration, and scaling bottlenecks.",
      solutions: "Cloud-native event-driven architectures with automated failover systems.",
      useCases: "User onboarding sync, API payload routing, and real-time operational analytics.",
      impact: "99.99% system uptime, instant developer scaling, and smooth cross-platform integrations.",
    },
  },
  {
    id: "agencies",
    title: "Agencies",
    subtitle: "Connected Production Pipeline",
    description:
      "Turn intake → scoping → proposals → project kickoff into one connected pipeline across email, docs, and your PM tool.",
    image: "/Agencies.jpg",
    icon: Briefcase,
    details: {
      challenges: "Scattered client requests, manual scoping bottlenecks, and delayed project kickoffs.",
      solutions: "Automated workflow pipelines linking email, documentation, and project management tools.",
      useCases: "Intake forms, automated proposal generation, and instant client onboarding.",
      impact: "Faster deal closing, reduced admin overhead, and seamless project launches.",
    },
  },
];

export default function Industries() {
  // Default selected set to Agencies
  const [activeId, setActiveId] = useState("healthcare");

  const activeIndustry =
    baseIndustries.find((item) => item.id === activeId) || baseIndustries[0];

  return (
    <section className="relative w-full overflow-hidden bg-white flex items-center min-h-[720px] lg:h-screen">
      {/* Dot-grid texture matching theme */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32] z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient background circle glows */}
      <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-float z-0" />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl animate-float z-0"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Full Screen Height Background Image Container — inset-0 guarantees
          this always spans exactly the section's real rendered height (top
          to bottom), so on laptops with a taller-than-720px content stack
          the image still reaches all the way down instead of stopping short. */}
      <div
        className="pointer-events-none absolute inset-0 lg:left-auto lg:w-[65%] xl:w-[60%] z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={activeIndustry.image}
              alt={activeIndustry.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-[75%_18%] opacity-100"
            />

            {/* Continuous gradient overlays for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/25" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-8 xl:col-span-7 max-w-3xl">
            
            {/* Header Section */}
            <div className="mb-6 lg:mb-8">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Industries
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Built for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  your industry
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base leading-relaxed text-zinc-600 sm:text-lg"
              >
                We tailor to your data + compliance needs. We tailor every solution to your specific data requirements and compliance needs.
              </motion.p>
            </div>

            {/* Modern Horizontal Glass Tabs Bar */}
            <div className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-lg shadow-blue-900/5 backdrop-blur-md">
              {baseIndustries.map((item) => {
                const isActive = activeId === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-md shadow-blue-600/25"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeModernTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Information Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-md sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/30">
                    <activeIndustry.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {activeIndustry.subtitle}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                      {activeIndustry.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  &ldquo;{activeIndustry.description}&rdquo;
                </p>

                {/* 4 Points: Challenges, Solutions, Use Cases, Impact */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 rounded-xl bg-red-50/60 p-3 ring-1 ring-red-100/80">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-red-700">
                        Challenges
                      </span>
                      <p className="text-xs text-slate-600">
                        {activeIndustry.details.challenges}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-blue-50/60 p-3 ring-1 ring-blue-100/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-blue-700">
                        Solutions
                      </span>
                      <p className="text-xs text-slate-600">
                        {activeIndustry.details.solutions}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-amber-50/60 p-3 ring-1 ring-amber-100/80">
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-amber-700">
                        Use Cases
                      </span>
                      <p className="text-xs text-slate-600">
                        {activeIndustry.details.useCases}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-emerald-50/60 p-3 ring-1 ring-emerald-100/80">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-emerald-700">
                        Impact
                      </span>
                      <p className="text-xs text-slate-600">
                        {activeIndustry.details.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}