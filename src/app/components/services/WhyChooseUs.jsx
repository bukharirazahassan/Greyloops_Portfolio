"use client";

import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-slate-50 border-t border-slate-200 py-16 px-6 sm:px-12 lg:px-16 xl:px-24 text-slate-900">
      {/* Ambient background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto">
        {/* Section Header */}
        <div className="text-left w-full mb-10">
          <span className="mb-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Why Choose Us
          </span>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Why Choose Greyloops as{" "}
            </span>
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Your Web App Development Partner?
            </span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg max-w-6xl">
            From initial consultation to the final product, Greyloops attention to detail and commitment to excellence is unparalleled. As a renowned web application design services firm, our experts combine cutting-edge technologies with creative
          </p>
        </div>

        {/* Grid layout: shared 58/42 columns for BOTH rows, tighter gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-3 w-full">

          {/* Row 1, Col 1: Top Image */}
          <div className="relative w-full aspect-[1376/768] bg-slate-900 shadow-2xl rounded-3xl overflow-hidden">
            <Image
              src="/images/services/agile_development_practices.png"
              alt="Agile Development Practices"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
              quality={95}
              priority
            />
          </div>

          {/* Row 1, Col 2: Methodology Card */}
          <div className="relative w-full bg-slate-900 text-slate-100 p-8 sm:p-10 lg:p-12 flex flex-col justify-center rounded-3xl shadow-xl shadow-blue-900/10">
            <div className="relative z-10 flex flex-col items-start">
              <span className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25">
                <Sparkles className="h-3 w-3 inline mr-1 text-white" />
                Methodology
              </span>
              <h3 className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                Agile Development Practices
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                As a custom web development company, we follow agile development practices to build flexible, reliable, and sustainable web solutions. Our iterative approach allows us to break projects into manageable stages, prioritize important features, and continuously refine the application based on evolving business requirements. Through regular collaboration, development, testing, and feedback, we identify potential issues early and maintain greater control over project progress. This helps us deliver high-quality web applications that can adapt to changing business needs while reducing development risks and supporting long-term growth.
              </p>
            </div>
          </div>

          {/* Row 2, Col 1: Two stacked cards */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full bg-slate-900 text-slate-100 p-8 sm:p-10 flex flex-col justify-center rounded-3xl shadow-xl shadow-blue-900/10 flex-1">
              <div className="relative z-10 flex flex-col items-start">
                <span className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25">
                  <Sparkles className="h-3 w-3 inline mr-1 text-white" />
                  Delivery
                </span>
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                  Timely Project Delivery
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Being one of the leading web development companies, we have a track record of completing projects before time. Our team works hard to meet your deadlines and ensure your web app is ready to go live when you want it to. We follow a structured development process with clear milestones, regular progress tracking, and effective team coordination to keep projects moving forward without unnecessary delays. From initial planning and development to testing and final deployment, we carefully manage each stage to maintain quality while staying aligned with your delivery schedule. Our commitment to timely execution helps you launch your web application confidently and start achieving your business goals sooner.
                </p>
              </div>
            </div>

            <div className="relative w-full bg-slate-900 text-slate-100 p-8 sm:p-10 flex flex-col justify-center rounded-3xl shadow-xl shadow-blue-900/10 flex-1">
              <div className="relative z-10 flex flex-col items-start">
                <span className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25">
                  <Sparkles className="h-3 w-3 inline mr-1 text-white" />
                  Communication
                </span>
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                  Transparent Communication
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  As a custom web application development company, we maintain open and transparent communication channels throughout development to keep you updated and involved at all stages. We believe clear communication is essential for building successful web applications and long-term client relationships. Our team keeps you informed about project progress, development milestones, priorities, and any potential challenges that may arise during the process. Through regular discussions, updates, and feedback, we make sure your requirements and expectations remain aligned with the development process. This collaborative approach gives you better visibility into the project, enables timely decisions, reduces misunderstandings, and ensures the final web application reflects your business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: Bottom Image */}
          <div className="relative w-full min-h-[650px] lg:min-h-[750px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            <Image
              src="/images/services/timely_project_delivery.png"
              alt="Timely Project Delivery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
              quality={95}
            />
          </div>

        </div>
      </div>
    </section>
  );
}