//src/app/components/company/OurExpertise.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";

const expertise = [
  {
    title: "Consulting",
    image: "/images/services/DevOps/devops_consulting_transformation.png",
    items: [
      "Digital transformation",
      "Discovery phase",
      "Product ideation",
      "Design sprint",
      "Technology",
      "IT audit",
      "Software manual QA",
      "AI consulting",
      "Big data consulting",
      "CTO as a Service",
    ],
  },
  {
    title: "Software Engineering",
    image: "/images/services/DevOps/CI_CD_pipeline_development.png",
    items: [
      "Custom software development",
      "Web",
      "Mobile",
      "Blockchain",
      "IoT",
      "MVP development",
      "Integration services",
      "QA/QC testing",
    ],
  },
  {
    title: "Cloud Services",
    image: "/images/services/DevOps/cloud_devops_implementation.png",
    items: [
      "DevOps Engineering",
      "Cloud infrastructure",
      "Infrastructure cost optimization",
      "Amazon Web Services",
      "AWS Well-Architected Review",
    ],
  },
  {
    title: "AI & ML",
    image: "/images/services/DevOps/devsecops_security_integration.png",
    items: [
      "AI software development",
      "AI-powered app",
      "AI integration",
      "AI staff augmentation",
      "Gen AI",
      "AI chatbot",
      "LLM development",
      "MLOps",
      "Retrieval-Augmented Generation",
    ],
  },
];

export default function OurExpertise() {
  return (
    <div className="w-full text-slate-900">
      {/* ================= OUR EXPERTISE SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20">
        {/* Consistent ambient glow shades spanning across pages */}
        <div className="pointer-events-none absolute -left-24 top-20 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 z-0 h-[550px] w-[550px] rounded-full bg-sky-400/15 blur-[170px]" />

        {/* Continuous dot-grid texture overlay matching About Us */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          {/* Section Header */}
          <div className="mb-12 max-w-3xl text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              What We Do
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          {/* Cards Grid (equal height) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {expertise.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/60 hover:bg-white/80 hover:shadow-[0_16px_48px_0_rgba(37,99,235,0.22)]"
              >
                {/* Image filling the top edge completely with object-cover */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-t-3xl bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                    quality={100}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Information at the bottom */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="mb-4 text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                    {card.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-medium leading-snug text-slate-700 sm:text-[15px]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}