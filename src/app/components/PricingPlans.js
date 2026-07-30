"use client";

import Link from "next/link";
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
      {/* Dot-grid texture, consistent with the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            Pricing
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Simple, Transparent <span className="text-blue-600">Engagement Plans</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            No hidden fees, no vague quotes. Choose the model that fits your
            stage — every plan scales with real engineers, not templates.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/30 lg:-translate-y-4 lg:scale-105"
                    : "border border-zinc-100 bg-white text-zinc-900 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
                }`}
              >
                {/* Most Popular badge */}
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/25">
                    <Star className="h-3.5 w-3.5" fill="currentColor" />
                    Most Popular
                  </span>
                )}

                {/* Icon + name */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      plan.featured ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-xl font-extrabold">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                </div>
                <p
                  className={`mb-6 text-xs font-medium uppercase tracking-wide ${
                    plan.featured ? "text-blue-100" : "text-zinc-400"
                  }`}
                >
                  {plan.billingNote}
                </p>

                {/* Description */}
                <p
                  className={`mb-7 text-sm leading-relaxed ${
                    plan.featured ? "text-blue-50" : "text-zinc-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span
                        className={`text-sm ${plan.featured ? "text-blue-50" : "text-zinc-700"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold shadow-md transition-all duration-200 ${
                    plan.featured
                      ? "bg-white text-blue-600 shadow-black/10 hover:bg-blue-50"
                      : "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-sm text-zinc-500">
          Need something in between? {" "}
          <Link href="/contact" className="font-semibold text-blue-600 hover:underline">
            Talk to our team
          </Link>{" "}
          for a custom quote tailored to your project.
        </p>
      </div>
    </section>
  );
}