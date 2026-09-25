"use client";

import React from "react";
import Image from "next/image";
import {
  Rocket,
  ShieldCheck,
  Radar,
  PiggyBank,
  Lock,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function DevOpsBenefits() {
  const leftBenefits = [
    {
      icon: Rocket,
      title: "Faster Releases",
      description:
        "Automated workflows help teams deliver software updates faster and with fewer manual steps.",
    },
    {
      icon: ShieldCheck,
      title: "Higher Reliability",
      description:
        "Consistent infrastructure and deployments help applications remain stable and dependable.",
    },
    {
      icon: Radar,
      title: "Early Issue Detection",
      description:
        "Monitoring and alerts help teams identify application and infrastructure issues sooner.",
    },
  ];

  const rightBenefits = [
    {
      icon: PiggyBank,
      title: "Lower Operational Costs",
      description:
        "Automation reduces repetitive work and helps teams use cloud resources more efficiently.",
    },
    {
      icon: Lock,
      title: "Stronger Security",
      description:
        "Security practices throughout the delivery process help identify and address risks earlier.",
    },
    {
      icon: TrendingUp,
      title: "Easier Scalability",
      description:
        "Automated infrastructure makes it easier to support growing workloads and changing business needs.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 font-sans text-slate-900 lg:min-h-screen lg:py-14">
      <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[140px]" />

      <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] rounded-full bg-sky-400/15 blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-8">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            DevOps Benefits
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Benefits of a Mature{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              DevOps Practice
            </span>
          </h2>
        </div>

        {/* Benefits Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_430px_1fr] lg:gap-10 xl:grid-cols-[1fr_460px_1fr] xl:gap-14">
          {/* Left Benefits */}
          <div className="flex flex-col gap-8 lg:gap-9 lg:items-end lg:text-right">
            {leftBenefits.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="group flex w-full max-w-md flex-col items-start gap-4 lg:flex-row-reverse lg:items-start"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10 text-blue-600 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="max-w-sm text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center lg:h-[620px] lg:items-center">
            <div className="relative h-[520px] w-[350px] sm:h-[580px] sm:w-[390px] lg:h-[620px] lg:w-[430px] xl:h-[650px] xl:w-[460px]">
              <Image
                src="/images/services/DevOps/devops_benefits_v1.png"
                alt="DevOps Practice Benefits"
                fill
                priority
                sizes="(max-width: 640px) 350px, (max-width: 1024px) 390px, (max-width: 1280px) 430px, 460px"
                className="object-contain object-center drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="flex flex-col gap-8 lg:gap-9 lg:items-start lg:text-left">
            {rightBenefits.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="group flex w-full max-w-md flex-col items-start gap-4 lg:flex-row"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10 text-blue-600 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="max-w-sm text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}