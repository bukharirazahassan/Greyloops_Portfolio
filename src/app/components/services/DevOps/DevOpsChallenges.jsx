"use client";

import Image from "next/image";
import React from "react";
import { Sparkles, Zap, DollarSign, ShieldAlert, Workflow } from "lucide-react";

export default function DevOpsChallenges() {
  return (
    <section className="relative w-full bg-slate-50 border-t border-slate-200 py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-slate-900 overflow-hidden">
      {/* Ambient background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-0 top-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-100/50 blur-[160px]" />
        <div className="absolute right-[8%] top-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-sky-100/50 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto">
        {/* Section Header: Two-column grid matching standard header alignment */}
        <div className="mb-12 grid w-full gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Side: Badge & Heading */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              DevOps Solutions
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight leading-[1.12] sm:text-4xl lg:text-5xl xl:text-5xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Common Challenges Our
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                DevOps Services Solve
              </span>
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <p className="w-full text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              As software and cloud environments grow, development teams can face slower releases, increasing infrastructure costs, security concerns, and communication gaps. Our DevOps services help simplify these challenges through automation, better cloud management, secure delivery processes, and improved collaboration.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
          {/* Left Column: 4 Glassmorphic Cards in a 2x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="relative w-full bg-white/75 backdrop-blur-xl text-slate-900 p-7 sm:p-8 flex flex-col justify-between rounded-[2rem] shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-blue-300">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100 z-20" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-md shadow-blue-500/20">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  Releases Are Taking Too Long
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Manual deployment steps and repeated processes can make it difficult to release new features quickly. We automate the delivery process to help your team release updates faster and with fewer deployment issues.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full bg-white/75 backdrop-blur-xl text-slate-900 p-7 sm:p-8 flex flex-col justify-between rounded-[2rem] shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-blue-300">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100 z-20" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-md shadow-blue-500/20">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  Cloud Costs Are Growing
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  As your application grows, cloud usage and infrastructure costs can increase. We help optimize your cloud environment, manage resources efficiently, and reduce unnecessary infrastructure spending.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full bg-white/75 backdrop-blur-xl text-slate-900 p-7 sm:p-8 flex flex-col justify-between rounded-[2rem] shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-blue-300">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100 z-20" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-md shadow-blue-500/20">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  Security Needs to Start Earlier
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Finding security issues late in development can cause delays and additional work. We build security practices into the development and deployment process so potential risks can be addressed earlier.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-full bg-white/75 backdrop-blur-xl text-slate-900 p-7 sm:p-8 flex flex-col justify-between rounded-[2rem] shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-blue-300">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100 z-20" />
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-md shadow-blue-500/20">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  Development and Operations Aren’t Working Together
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  When development and operations teams work separately, communication problems can slow releases and make issues harder to resolve. We create connected workflows that help teams collaborate and respond to problems more efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Perfectly fitted image wrapper with smooth rounded corners */}
          <div className="lg:col-span-5 relative w-full aspect-square lg:h-full bg-white shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 rounded-[2.5rem] overflow-hidden flex items-center justify-center p-2">
            <Image
              src="/images/services/DevOps/devopschallenges_v1.png"
              alt="DevOps Challenges and Solutions"
              fill
              className="object-cover rounded-[2rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              quality={95}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}