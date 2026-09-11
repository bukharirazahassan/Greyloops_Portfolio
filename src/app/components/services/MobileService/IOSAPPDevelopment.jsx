"use client";

import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import OfferingiSODevelopment from "@/app/components/services/MobileService/OfferingiSODevelopment";
import MobileIndustryFocusedDigitalSolutions from "@/app/components/services/MobileService/MobileIndustryFocusedDigitalSolutions";
import IndustryCategories from "@/app/components/services/MobileService/IndustryCategories";

const iosServices = [
  "Custom iOS App Development",
  "Digital Product Engineering",
  "Enterprise iOS Solutions",
  "Cloud & API Integration",
];

export default function IOSAPPDevelopment() {
  return (
    <>
      <section className="relative flex min-h-[85vh] w-full items-center border-t border-slate-200/80 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0 h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/services/apple_ios_development_v3.png"
            alt="iOS App Development Background"
            fill
            priority
            sizes="100vw"
            className="object-contain object-right"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50 via-30% to-slate-50/0 lg:w-[68%]" />
        </div>

        <div className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[500px] w-[500px] max-w-[100vw] rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 z-0 h-[600px] w-[600px] max-w-[100vw] rounded-full bg-sky-500/15 blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        <div className="relative z-10 flex w-full max-w-7xl px-6 py-16 sm:px-12 md:px-16 lg:px-16 lg:py-20 xl:px-24">
          <div className="flex max-w-2xl flex-col items-start text-left xl:max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>iOS Expertise</span>
            </div>

            <h1 className="mb-6 text-left text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                iOS App Development
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Company
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-left text-base font-normal leading-relaxed text-slate-700 antialiased sm:text-lg">
              We build secure, scalable iOS applications and digital products that transform ideas into high-performance experiences for modern businesses and enterprises. From customer-facing mobile products to complex enterprise applications, we combine intuitive UX, robust architecture, seamless integrations, and scalable technology to create reliable solutions built for long-term growth.
            </p>

            <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {iosServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-600 shadow-sm backdrop-blur-sm">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-slate-700 sm:text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Render the offering component directly underneath */}
      <OfferingiSODevelopment />
      <MobileIndustryFocusedDigitalSolutions />
      <IndustryCategories />
    </>
  );
}