"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

const cardDataList = [
  {
    main: "Software Development ",
    accent: "& QA",
    description:
      "We build scalable web, mobile, and enterprise applications engineered for performance, security, and seamless user experiences.\n\nOur quality-driven approach combines modern development practices with rigorous QA to deliver reliable, production-ready software.",
  },
  {
    main: "Web, Mobile ",
    accent: "& Enterprise",
    description:
      "We build modern web, mobile, and enterprise applications tailored to complex business needs and evolving digital demands.\n\nFrom intuitive user experiences to scalable enterprise platforms, we deliver secure, high-performance solutions built to grow.",
  },
  {
    main: "Enterprise Applications ",
    accent: "& IT Operations",
    description:
      "We build scalable enterprise applications that streamline workflows, integrate systems, and improve operational efficiency.\n\nOur IT operations services ensure secure, reliable infrastructure with seamless performance and business continuity.",
  },
  {
    main: "Enterprise & Digital ",
    accent: "Data Solutions",
    description:
      "We turn complex data into actionable insights through scalable data platforms, analytics, and intelligent solutions.\n\nFrom enterprise systems to web and mobile applications, we enable secure, connected, and data-driven experiences.",
  },
  {
    main: "Enterprise ",
    accent: "Artificial Intelligence",
    description:
      "We build intelligent AI solutions that automate workflows, enhance decision-making, and unlock new opportunities across your business.\n\nFrom enterprise systems to digital applications, we integrate AI to deliver smarter, faster, and more scalable experiences.",
  },
  {
    main: "Digital & Enterprise ",
    accent: "Commerce",
    description:
      "We build seamless e-commerce experiences across web, mobile, and enterprise platforms that drive engagement and business growth.\n\nFrom online storefronts to order, inventory, and commerce management, we deliver scalable solutions built for modern business.",
  },
];

const allFrames = [
  ...servicesColumns.map((col) => ({ ...col, categoryType: "Services", basePath: "/services" })),
  ...solutionsColumns.map((col) => ({ ...col, categoryType: "Solutions", basePath: "/solutions" })),
];

export default function Offerings() {
  return (
    <section className="relative w-full overflow-x-clip bg-white py-8 sm:py-12">
      {/* Outer section dot-grid ambient background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute right-0 -top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-12">
        {/* Stacking Cards Container — sticky-stack effect kicks in at lg where the
            layout has a predictable height; below lg the cards flow normally so
            content never gets clipped. */}
        <div className="relative flex flex-col gap-6 pb-12 sm:gap-8 sm:pb-16 lg:gap-10 lg:pb-20">
          {allFrames.map((frame, index) => {
            // Sticky top position calculation for clean offset stacking (lg+ only)
            const stickyTop = 80 + index * 28;
            const content = cardDataList[index % cardDataList.length];

            return (
              <div
                key={frame.slug}
                style={{ top: `${stickyTop}px` }}
                className="relative z-10 w-full lg:sticky lg:min-h-[85vh]"
              >
                <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white/95 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl sm:rounded-[2.25rem] sm:p-8 lg:min-h-[85vh] lg:rounded-[3rem] lg:p-14">

                  {/* Subtle Inner Card Ambient Dot Texture */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.4]"
                    style={{
                      backgroundImage: "radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px)",
                      backgroundSize: "20px 20px",
                      maskImage:
                        "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)",
                    }}
                  />

                  {/* Card Content Grid - Takes maximum space */}
                  <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">

                    {/* Left Side: Category Title, Description & Expanded Services Grid */}
                    <div className="flex h-full flex-col justify-between lg:col-span-7">
                      <div>
                        {/* Category Header */}
                        <div className="mb-5 flex flex-col items-start gap-2.5 sm:mb-6 sm:gap-3">
                          {/* Eyebrow Tag Standardized */}
                          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 ring-1 ring-blue-100">
                            {frame.categoryType}
                          </span>

                          {/* Heading */}
                          <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                              {content.main}
                            </span>
                            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                              {content.accent}
                            </span>
                          </h3>

                          {/* Section Description with Spacing & Paragraph Breaks */}
                          <div className="mt-1 flex max-w-2xl flex-col gap-2 text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-lg">
                            {content.description.split("\n\n").map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>
                        </div>

                        {/* Services Grid Spreading across full space */}
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                          {frame.links.map((link) => (
                            <Link
                              key={link.slug}
                              href={`${frame.basePath}/${link.slug}`}
                              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 sm:p-5"
                            >
                              {/* Inner Mini Card Dot Pattern Accent */}
                              <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.2]"
                                style={{
                                  backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                                  backgroundSize: "14px 14px",
                                }}
                              />

                              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                              <div className="flex items-start justify-between gap-3">
                                <h4 className="text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-600 sm:text-base">
                                  {link.name}
                                </h4>
                              </div>
                              {/* Card Body Paragraph Standardized */}
                              <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2 sm:text-sm">
                                {link.description || "Delivering scalable and tailored technology solutions."}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Large Modern Portrait Display Frame — desktop only.
                        Border-spin ring removed; image now sits directly in the
                        rounded frame with just the ambient glow behind it. */}
                    <div className="hidden h-full lg:col-span-5 lg:flex lg:items-center lg:justify-center">
                      <div className="relative w-full max-w-[420px]">
                        {/* Outer Glow Effect */}
                        <div className="pointer-events-none absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-300/10 to-transparent blur-3xl" />

                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl shadow-slate-900/20">
                          <Image
                            src={`/${frame.slug}.png`}
                            alt={frame.title}
                            fill
                            sizes="420px"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}