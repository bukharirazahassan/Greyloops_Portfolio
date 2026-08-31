"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, UsersRound, Rocket } from "lucide-react";

const models = [
  {
    title: "IT Staff Augmentation",
    subtitle: "Scale Teams On-Demand",
    description:
      "Fill critical skills gaps rapidly by embedding vetted tech professionals seamlessly into your existing workflows and tools.",
    image: "/IT_Staff_Augmentation.jpg",
    icon: Users,
  },
  {
    title: "Dedicated Teams",
    subtitle: "End-to-End Commitment",
    description:
      "Deploy fully autonomous, cross-functional development teams aligned directly with your company culture, KPIs, and long-term goals.",
    image: "/Dedicated_Teams.jpg",
    icon: UsersRound,
  },
  {
    title: "Software Development Outsourcing",
    subtitle: "Turnkey Product Delivery",
    description:
      "Entrust full product lifecycle development to us—from strategy and design to deployment—so you can focus on core business growth.",
    image: "/Software_Development_Outsourcing_v2.png",
    icon: Rocket,
  },
];

export default function EngagementModels() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Continuously track outer scroll position to control cover slide calculations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollableHeight, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(
    Math.floor(scrollProgress * models.length),
    models.length - 1
  );

  const current = models[activeIndex];
  const ActiveIcon = current.icon;

  // Linear translateY percentage offset (100% to 0%) for bottom-to-top covering
  const getTopOffsetPercent = (index) => {
    if (index === 0) return 0;

    const step = 1 / models.length;
    const startProgress = index * step;
    const endProgress = (index + 1) * step;

    if (scrollProgress <= startProgress) return 100;
    if (scrollProgress >= endProgress) return 0;

    const localProgress = (scrollProgress - startProgress) / (endProgress - startProgress);
    return 100 - localProgress * 100;
  };

  const handleSelectModel = (index) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollableHeight = rect.height - window.innerHeight;
    const targetProgress = index / models.length + 0.01;
    const targetScrollY = window.scrollY + rect.top + targetProgress * totalScrollableHeight;

    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative w-full bg-white h-[350vh]">
      {/* Sticky viewport frame centered between top and bottom edges */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center justify-center">
        {/* Background Dot Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          }}
        />

        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1700px] items-center px-6 lg:px-12 py-6">
          <div className="grid h-full max-h-[80vh] w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Layered Covering Image Frame with Fixed Bottom Content */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-2xl shadow-blue-900/10 lg:col-span-7">
              {models.map((model, index) => {
                const topOffset = getTopOffsetPercent(index);

                return (
                  <div
                    key={model.title}
                    className="absolute inset-0 h-full w-full overflow-hidden transition-transform duration-75 ease-linear"
                    style={{
                      transform: `translateY(${topOffset}%)`,
                      zIndex: index + 1,
                    }}
                  >
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />
                  </div>
                );
              })}

              {/* Counter Badge Overlay */}
              <div className="absolute left-6 top-6 z-30 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-blue-600 shadow-lg backdrop-blur-md ring-1 ring-white/50">
                  <ActiveIcon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                  Model 0{activeIndex + 1} / 0{models.length}
                </div>
              </div>

              {/* Bottom Section Heading Overlay pinned over the images */}
              <div className="absolute inset-x-6 bottom-6 z-30 pointer-events-none">
                <div className="max-w-xl">
                  <span className="mb-2 inline-block rounded-full bg-blue-600/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md border border-blue-400/20">
                    Engagement Models
                  </span>
                  <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl leading-tight drop-shadow-md">
                    Flexible Engagement Models
                  </h2>
                  <p className="mt-2 text-sm font-medium text-slate-200 sm:text-base leading-relaxed drop-shadow">
                    Choose the right delivery model for your business—from individual technology specialists to dedicated teams and complete end-to-end software development.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Stationary Information & Interactive Timeline Navigation */}
            <div className="flex h-full flex-col justify-center space-y-8 lg:col-span-5">
              
              {/* Information Text Box */}
              <div className="relative min-h-[180px]">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-x-0 top-0"
                >
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-blue-600">
                    {current.subtitle}
                  </span>
                  <h4 className="mb-4 text-3xl font-extrabold text-slate-900 lg:text-4xl">
                    {current.title}
                  </h4>
                  <p className="text-base font-medium leading-relaxed text-zinc-600 lg:text-lg">
                    &ldquo;{current.description}&rdquo;
                  </p>
                </motion.div>
              </div>

              {/* Connected Dots Timeline Navigation */}
              <div className="relative flex flex-col pl-2 space-y-3 pt-6">
                <div className="absolute left-[23px] top-10 bottom-4 w-0.5 bg-slate-200 z-0" />

                {models.map((model, index) => {
                  const isActive = index === activeIndex;
                  const Icon = model.icon;

                  return (
                    <button
                      key={model.title}
                      onClick={() => handleSelectModel(index)}
                      className="group relative z-10 flex items-center gap-4 rounded-xl px-2 py-2 text-left transition-all duration-300 hover:bg-slate-50"
                    >
                      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                        <div
                          className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "scale-125 bg-blue-600 ring-4 ring-blue-100"
                              : "bg-slate-300 group-hover:bg-blue-400"
                          }`}
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                              : "bg-blue-50 text-blue-400 group-hover:text-blue-600"
                          }`}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span
                          className={`text-sm font-bold tracking-tight transition-colors duration-300 lg:text-base ${
                            isActive
                              ? "text-slate-900"
                              : "text-zinc-600 group-hover:text-slate-900"
                          }`}
                        >
                          {model.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}