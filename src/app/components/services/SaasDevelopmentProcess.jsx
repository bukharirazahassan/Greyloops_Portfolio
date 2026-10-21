// src/app/components/services/SaasDevelopmentProcess.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin with a comprehensive discovery phase, offering expert SaaS consulting to align with your business objectives, understand your target audience, and outline a clear roadmap for your project.",
    image: "/images/services/SaaS-Process-15.webp",
    imageAlt: "Discovery & Consultation Phase",
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Our team designs the architecture, creates wireframes, and develops a detailed project plan, leveraging the latest SaaS technology to ensure your application is secure, scalable, and efficient.",
    image: "/images/services/SaaS-Process-16.webp",
    imageAlt: "Planning & Design Phase",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "As a trusted SaaS development company, AI-first development approach, with continuous testing to maintain the highest quality and security.",
    image: "/images/services/SaaS-Process-19.webp",
    imageAlt: "Development & Testing Phase",
  },
  {
    step: "04",
    title: "Deployment & Ongoing Support",
    description:
      "Once your application is ready, we ensure smooth deployment and provide ongoing support and maintenance to ensure optimal performance and continuous improvement.",
    image: "/images/services/SaaS-Process-18.webp",
    imageAlt: "Deployment & Ongoing Support Phase",
  },
];

export default function SaasDevelopmentProcess() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 font-sans border-t border-slate-200/60">
      {/* Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient Glow Effects */}
      <div className="pointer-events-none absolute left-10 top-12 z-0 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-12 bottom-12 z-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6">
        {/* SECTION HEADER - STANDARD TWO-TONE HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left max-w-3xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How Do We Approach the{" "}
            <span className="text-blue-600">SaaS Development Process?</span>
          </h2>
        </motion.div>

        {/* PROCESS FLOW CONTAINER */}
        <div className="relative">
          {/* DESKTOP CONNECTING S-CURVE DOTTED LINE */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 520 120 
                 C 520 320, 800 240, 800 480 
                 C 800 720, 520 640, 520 880 
                 C 520 1120, 800 1040, 800 1280"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
              className="opacity-40"
            />
          </svg>

          {/* MOBILE & TABLET STRAIGHT DOTTED LINE */}
          <div className="pointer-events-none absolute left-6 top-10 bottom-10 w-0.5 border-r-2 border-dashed border-blue-400/50 lg:hidden" />

          {/* PROCESS STEPS LOOP */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {processSteps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col gap-8 pl-14 lg:pl-0 lg:flex-row lg:items-center ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* STEP NUMBER CONNECTOR (MOBILE) */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-md shadow-blue-600/30 ring-4 ring-slate-50 lg:hidden text-sm">
                    {item.step}
                  </div>

                  {/* LEFT-ALIGNED TEXT & IMAGE CONTAINER */}
                  <div
                    className={`flex w-full flex-col gap-6 sm:flex-row sm:items-center lg:w-[60%] ${
                      isEven ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    {/* TEXT CONTENT - STRICTLY LEFT ALIGNED */}
                    <div className="flex-1 text-left">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="hidden lg:flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-blue-600/25">
                          {item.step}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                          Phase {item.step}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                        {item.description}
                      </p>
                    </div>

                    {/* IMAGE CONTAINER WITH STRICT 210 x 228 SIZING */}
                    <div className="flex shrink-0 justify-start sm:justify-center">
                      <div className="group relative flex h-[228px] w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            width={210}
                            height={228}
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}