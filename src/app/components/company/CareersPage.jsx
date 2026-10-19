// src/app/components/company/CareersPage.jsx
"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import PerksBenefits from "@/app/components/company/PerksBenefits";
import JobApplicationForm from "@/app/components/company/Jobapplicationform"

const BENEFITS = [
  {
    title: "Flexible Work Environment",
    description: "Enjoy flexibility that supports productivity and balance.",
  },
  {
    title: "Continuous Learning",
    description: "Build skills through learning and new challenges.",
  },
  {
    title: "Work-Life Balance",
    description: "Maintain balance between professional and personal life.",
  },
  {
    title: "Collaborative Culture",
    description: "Share ideas and solve challenges together.",
  },
  {
    title: "Career Growth",
    description: "Develop expertise through meaningful projects and opportunities.",
  },
  {
    title: "Inclusive Workplace",
    description: "Feel valued in a respectful and supportive team.",
  },
];

export default function CareersPage() {
  return (
    <div className="w-full bg-slate-50">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO & CAREERS HEADER                                         */}
      {/* ========================================================================= */}
      <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-slate-50 py-12 lg:py-16">
        {/* Standard Light Theme: Background dots pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

        {/* Standard Light Theme: Ambient glowing blue/indigo circles */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col items-center px-4 sm:px-6 lg:px-8">
          
          {/* CENTERED TRUE GLASSMORPHISM HEADING CARD */}
          <div className="relative z-20 -mb-12 flex w-full max-w-2xl flex-col items-center rounded-3xl border border-white/20 bg-white/40 px-6 py-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.12)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150 sm:-mb-16 sm:px-10 sm:py-8 lg:-mb-20">
            {/* Two-Color Heading */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-slate-900">Your Talent Matters </span>
              <span className="text-blue-600">For The World!</span>
            </h1>

            {/* Description */}
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              And we are here to appreciate it decently.
            </p>
          </div>

          {/* WIDER NATURAL DIMENSION IMAGE CONTAINER */}
          <div className="relative z-10 w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-900 shadow-2xl">
            <Image
              src="/careers_header_v1.png"
              alt="Careers Header Showcase"
              width={1440}
              height={720}
              priority
              quality={100}
              className="h-auto w-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY BUILD YOUR CAREER                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-20">
        {/* Standard Light Theme: Dot Grid Background */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

        {/* Ambient background glow */}
        <div className="pointer-events-none absolute left-10 top-1/2 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          
          {/* Single Row Layout: Left Heading & Right Description (Aligned Top) */}
          <div className="mb-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Eyebrow Badge & Title */}
            <div className="lg:col-span-6">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100/80 sm:text-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span>Join Our Team</span>
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                <span>Why Build Your Career </span>
                <span className="text-blue-600">at Greyloops?</span>
              </h2>
            </div>

            {/* Right Column: Paragraph Description */}
            <div className="lg:col-span-6 lg:pt-2">
              <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                At Greyloops, we bring together skilled professionals who are passionate about technology, innovation, and continuous learning. We create opportunities for developers, designers, marketers, and analysts to collaborate, solve meaningful challenges, and grow their careers while contributing to impactful digital solutions.
              </p>
            </div>

          </div>

          {/* Benefits Cards Grid with Right-Fitted Image */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {BENEFITS.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-row items-center justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Left Text Content Area */}
                <div className="flex-1 p-6 pr-4">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Right Image Container (Fitted on Right Side) */}
                <div className="relative h-full min-h-[120px] w-28 shrink-0 overflow-hidden sm:w-32">
                  <Image
                    src="/Why_Build_Your_Career.png"
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: PERKS & BENEFITS */}
      <PerksBenefits />
      <JobApplicationForm />
    </div>
  );
}