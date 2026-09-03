"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    badge: "Expert Software Advisory",
    titlePrefix: "Software Development ",
    titleGradient: "Consulting Services",
    description:
      "Build scalable and high-performing digital solutions with expert guidance across enterprise software, web applications, and mobile platforms. We help businesses define the right architecture, technology stack, cloud strategy, integrations, security, and development roadmap to turn ideas into reliable, future-ready products.",
    image: "/images/services/software_development_consulting.png",
    ctaText: "Schedule a Consultation",
    ctaLink: "/contact",
  },
  {
    badge: "Strategic Advisory & Innovation",
    titlePrefix: "Strategic Technology ",
    titleGradient: "Consulting",
    description:
      "Align technology with your business goals through strategic guidance across software, web, mobile, cloud, data, AI, and emerging technologies. We help organizations define technology strategies, drive digital transformation, design scalable architectures, modernize legacy systems, and build practical roadmaps for cloud, data, and AI adoption—accelerating innovation, scalability, security, and long-term business growth.",
    image: "/images/services/strategic_technology_consulting.png",
    ctaText: "Schedule a Consultation",
    ctaLink: "/contact",
  },
  {
    badge: "Enterprise Platform Advisory",
    titlePrefix: "Solution ",
    titleGradient: "Consulting",
    description:
      "Transform complex business requirements into practical, technology-driven solutions with expert consulting across supply chain, CRM, ecommerce, and corporate finance. We help organizations analyze business processes, identify the right platforms and technologies, optimize workflows, integrate systems, and develop scalable solution strategies that improve efficiency, customer experiences, and business performance.",
    image: "/images/services/solution_consulting.png",
    ctaText: "Schedule a Consultation",
    ctaLink: "/contact",
  },
];

const stats = [
  { value: "100+", label: "Successful Projects" },
  { value: "15+", label: "Years in IT" },
  { value: "500+", label: "Happy Customers Globally" },
  { value: "200+", label: "IT Experts" },
];

export default function SoftwareConsulting() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Handlers declared before useEffect to avoid TDZ errors
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const currentSlide = slidesData[currentIndex];

  const textVariants = {
    initial: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 20 : -20,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -20 : 20,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.95,
      x: dir > 0 ? -30 : 30,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative flex min-h-[calc(100dvh-80px)] w-full flex-1 flex-col overflow-hidden bg-white">
      {/* Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 grid w-full flex-1 items-stretch lg:grid-cols-12">

        {/* Left Side: Text Content Slider */}
        <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 md:px-16 lg:col-span-5 lg:pl-16 lg:pr-6 xl:pl-24">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col justify-center"
            >
              {/* Eyebrow Badge */}
              <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md lg:mb-4">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span>{currentSlide.badge}</span>
              </div>

              {/* Standard Heading */}
              <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-[1.12]">
                {currentSlide.titlePrefix}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {currentSlide.titleGradient}
                </span>
              </h1>

              {/* Description */}
              <p className="mb-8 text-base font-normal leading-relaxed text-slate-600 antialiased sm:text-lg lg:text-xl lg:leading-relaxed">
                {currentSlide.description}
              </p>

              {/* CTA Link */}
              <div>
                <Link
                  href={currentSlide.ctaLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 sm:text-base"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots — arrow controls removed */}
          <div className="mt-8 flex items-center gap-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Image Slider */}
        <div className="relative min-h-[320px] w-full lg:col-span-7 lg:min-h-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.titlePrefix + currentSlide.titleGradient}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-left"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Stats Bar — true crystal-glass card. A soft color wash sits behind
          it so the frosted blur actually has something to refract (plain
          white-on-white made the previous version nearly invisible). */}
      <div className="relative z-10 w-full shrink-0 px-6 pb-6 pt-4 sm:px-10 sm:pb-8 md:px-16 lg:px-16 xl:px-24">
        <div className="relative mx-auto w-full max-w-5xl">
          {/* Color wash behind the card so the glass effect is visible */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-200/40 via-indigo-100/40 to-blue-200/40 blur-2xl" />
          <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative grid w-full grid-cols-2 divide-x divide-y divide-white/50 overflow-hidden rounded-2xl border border-white/70 bg-white/30 shadow-2xl shadow-blue-900/15 backdrop-blur-2xl sm:divide-y-0 sm:grid-cols-4">
            {/* Glass sheen highlight along the top edge */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center justify-center px-4 py-5 text-center sm:px-6 sm:py-6"
              >
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent sm:text-2xl lg:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}