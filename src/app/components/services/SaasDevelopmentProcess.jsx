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
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 font-sans">
      {/* BACKGROUND DOTS MATRIX MASK */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 85% at 50% 20%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 85% at 50% 20%, black 30%, transparent 100%)",
        }}
      />

      {/* BACKGROUND CIRCLE SHADES & AMBIENT GLOWS */}
      <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-300/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 z-0 h-[400px] w-[400px] rounded-full bg-indigo-300/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 z-0 h-[400px] w-[400px] rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-12">
        {/* SECTION HEADER - MATCHED standard THEME & GRADIENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              How Do We Approach the{" "}
            </span>
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              SaaS Development Process?
            </span>
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
          <div className="pointer-events-none absolute left-8 top-10 bottom-10 w-0.5 border-r-2 border-dashed border-blue-400/50 lg:hidden" />

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
                  className={`relative flex flex-col gap-8 pl-16 lg:pl-0 lg:flex-row lg:items-center ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* STEP NUMBER CONNECTOR (MOBILE) */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg ring-4 ring-slate-50 lg:hidden">
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
                        <span className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-sm font-bold text-white shadow-md shadow-blue-500/20">
                          {item.step}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                          Phase {item.step}
                        </span>
                      </div>

                      <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                        {item.description}
                      </p>
                    </div>

                    {/* IMAGE CONTAINER WITH STRICT 210 x 228 SIZING */}
                    <div className="flex shrink-0 justify-start sm:justify-center">
                      <div className="group relative flex h-[228px] w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
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