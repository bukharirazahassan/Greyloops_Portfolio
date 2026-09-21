"use client";

import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

export default function WhyChooseUs() {
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
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg max-w-6xl">
            From initial consultation to the final product, Greyloops attention to detail and commitment to excellence is unparalleled. As a renowned web application design services firm, our experts combine cutting-edge technologies with creative
          </p>
        </div>

        {/* Grid layout: shared 58/42 columns for BOTH rows, tighter gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-3 w-full">

          {/* Row 1, Col 1: Top Image */}
          <div className="relative w-full aspect-[1376/768] bg-slate-100 shadow-xl ring-1 ring-blue-100 rounded-3xl overflow-hidden">
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
          <div className="relative w-full bg-white/80 backdrop-blur-xl text-slate-900 p-8 sm:p-10 lg:p-12 flex flex-col justify-center rounded-3xl shadow-xl ring-1 ring-blue-100 overflow-hidden">
            {/* Top light edge highlight */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100 z-20" />
            
            <div className="relative z-10 flex flex-col items-start">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-xs">
                <Sparkles className="h-3 w-3 inline text-blue-600" />
                Methodology
              </span>
              <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl lg:text-2xl">
                Agile Development Practices
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                As a custom web development company, we follow agile development practices to build flexible, reliable, and sustainable web solutions. Our iterative approach allows us to break projects into manageable stages, prioritize important features, and continuously refine the application based on evolving business requirements. Through regular collaboration, development, testing, and feedback, we identify potential issues early and maintain greater control over project progress. This helps us deliver high-quality web applications that can adapt to changing business needs while reducing development risks and supporting long-term growth.
              </p>
            </div>
          </div>

          {/* Row 2, Col 1: Two stacked cards */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full bg-white/80 backdrop-blur-xl text-slate-900 p-8 sm:p-10 flex flex-col justify-center rounded-3xl shadow-xl ring-1 ring-blue-100 flex-1 overflow-hidden">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100 z-20" />
              
              <div className="relative z-10 flex flex-col items-start">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-xs">
                  <Sparkles className="h-3 w-3 inline text-blue-600" />
                  Delivery
                </span>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl lg:text-2xl">
                  Timely Project Delivery
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Being one of the leading web development companies, we have a track record of completing projects before time. Our team works hard to meet your deadlines and ensure your web app is ready to go live when you want it to. We follow a structured development process with clear milestones, regular progress tracking, and effective team coordination to keep projects moving forward without unnecessary delays. From initial planning and development to testing and final deployment, we carefully manage each stage to maintain quality while staying aligned with your delivery schedule. Our commitment to timely execution helps you launch your web application confidently and start achieving your business goals sooner.
                </p>
              </div>
            </div>

            <div className="relative w-full bg-white/80 backdrop-blur-xl text-slate-900 p-8 sm:p-10 flex flex-col justify-center rounded-3xl shadow-xl ring-1 ring-blue-100 flex-1 overflow-hidden">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-100 z-20" />
              
              <div className="relative z-10 flex flex-col items-start">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-xs">
                  <Sparkles className="h-3 w-3 inline text-blue-600" />
                  Communication
                </span>
                <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl lg:text-2xl">
                  Transparent Communication
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  As a custom web application development company, we maintain open and transparent communication channels throughout development to keep you updated and involved at all stages. We believe clear communication is essential for building successful web applications and long-term client relationships. Our team keeps you informed about project progress, development milestones, priorities, and any potential challenges that may arise during the process. Through regular discussions, updates, and feedback, we make sure your requirements and expectations remain aligned with the development process. This collaborative approach gives you better visibility into the project, enables timely decisions, reduces misunderstandings, and ensures the final web application reflects your business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: Bottom Image */}
          <div className="relative w-full min-h-[650px] lg:min-h-[750px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-blue-100 bg-slate-100">
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