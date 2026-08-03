"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, Rocket, Building2, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$4,999",
    billingNote: "starting price, per project",
    description:
      "Perfect for MVPs and early-stage products that need to move fast without cutting corners.",
    featured: false,
    features: [
      "Dedicated 2-person engineering pod",
      "UX/UI design & prototyping",
      "Core MVP development",
      "Weekly progress demos",
      "4–8 week delivery timeline",
      "30 days of post-launch support",
    ],
    ctaText: "Start a Project",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: "$14,999",
    billingNote: "starting price, per project",
    description:
      "For scaling products that need a full team, robust architecture, and ongoing iteration.",
    featured: true,
    features: [
      "Dedicated 4–6 person team",
      "Full product design system",
      "Custom software development",
      "AI/ML & data integration",
      "CI/CD pipeline & QA automation",
      "Dedicated project manager",
      "90 days of post-launch support",
    ],
    ctaText: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    billingNote: "tailored to your scope",
    description:
      "For complex, mission-critical systems that demand enterprise-grade security and scale.",
    featured: false,
    features: [
      "Dedicated cross-functional team",
      "Enterprise architecture & security",
      "Legacy system modernization",
      "Dedicated DevOps & infrastructure",
      "SLA-backed support & uptime",
      "Quarterly strategy reviews",
      "Flexible engagement models",
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact",
  },
];

export default function PricingPlans() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture with Animated Opacity */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Dynamic Animated Background Ambient Glow Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Simple, Transparent <span className="text-blue-600">Engagement Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 sm:text-lg"
          >
            No hidden fees, no vague quotes. Choose the model that fits your
            stage — every plan scales with real engineers, not templates.
          </motion.p>
        </div>

        {/* Pricing Grid (pt-5 ensures badge overflow has headroom) */}
        <div className="grid gap-8 pt-4 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl shadow-blue-900/30 lg:-translate-y-2 lg:scale-105"
                    : "border border-slate-200/80 bg-white/90 text-slate-900 shadow-xl shadow-blue-900/5 backdrop-blur-md hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10"
                }`}
              >
                {/* Visible Most Popular Badge (No Overflow Hidden Cutoff) */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 z-30 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/40 ring-2 ring-slate-900">
                      <Star className="h-3.5 w-3.5 fill-current text-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Internal Layer Container for Clip-Effects (Shimmer, Orbit, Glows) */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {plan.featured && (
                    <>
                      {/* Ambient Glow Orbs */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-blue-600/40 blur-3xl"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-indigo-500/30 blur-3xl"
                      />

                      {/* Continuous Shimmer Light Beam */}
                      <motion.div
                        initial={{ x: "-100%", y: "-100%" }}
                        animate={{ x: "200%", y: "200%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                      />

                      {/* Animated Orbit Rings Texture */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full border border-white/5"
                      />

                      {/* Dot Grid Overlay inside Dark Card */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </>
                  )}
                </div>

                {/* Icon + Name */}
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      plan.featured
                        ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-xl font-extrabold">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="relative z-10 mb-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className="relative z-10 mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {plan.billingNote}
                </p>

                {/* Description */}
                <p
                  className={`relative z-10 mb-7 text-sm leading-relaxed ${
                    plan.featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="relative z-10 mb-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Link
                    href={plan.ctaHref}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99]"
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center text-sm text-slate-500">
          Need something in between?{" "}
          <Link
            href="/contact"
            className="font-semibold text-blue-600 hover:underline"
          >
            Talk to our team
          </Link>{" "}
          for a custom quote tailored to your project.
        </p>
      </div>
    </section>
  );
}