"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    badge: "Expert Software Advisory",
    titlePrefix: "Software Development",
    titleGradient: "Consulting Services",
    description:
      "Build scalable and high-performing digital solutions with expert guidance across enterprise software, web applications, and mobile platforms. We help businesses define the right architecture, technology stack, cloud strategy, integrations, security, and development roadmap to turn ideas into reliable, future-ready products.",
    image: "/images/services/software_development_consulting.png",
    ctaText: "Schedule a Consultation",
    ctaLink: "/contact",
  },
  {
    badge: "Strategic Advisory & Innovation",
    titlePrefix: "Strategic Technology",
    titleGradient: "Consulting",
    description:
      "Align technology with your business goals through strategic guidance across software, web, mobile, cloud, data, AI, and emerging technologies. We help organizations define technology strategies, drive digital transformation, design scalable architectures, modernize legacy systems, and build practical roadmaps for cloud, data, and AI adoption—accelerating innovation, scalability, security, and long-term business growth.",
    image: "/images/services/strategic_technology_consulting.png",
    ctaText: "Get Free Tech Audit",
    ctaLink: "/contact",
  },
  {
    badge: "Enterprise Platform Advisory",
    titlePrefix: "Solution",
    titleGradient: "Consulting",
    description:
      "Transform complex business requirements into practical, technology-driven solutions with expert consulting across supply chain, CRM, ecommerce, and corporate finance. We help organizations analyze business processes, identify the right platforms and technologies, optimize workflows, integrate systems, and develop scalable solution strategies that improve efficiency, customer experiences, and business performance.",
    image: "/images/services/solution_consulting.png",
    ctaText: "Talk to Platform Expert",
    ctaLink: "/contact",
  },
];

export default function SoftwareConsulting() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isTransitioning = useRef(false);

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

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    isTransitioning.current = false;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = slidesData[currentIndex];

  const textElementVariants = {
    initial: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 15 : -15,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -15 : 15,
      transition: { duration: 0.25, ease: "easeIn" },
    }),
  };

  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.97,
      x: dir > 0 ? -20 : 20,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col overflow-hidden bg-white text-slate-900">
      {/* Light Theme Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 75% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-100/20 blur-3xl" />

      {/* Main Grid Content Stage */}
      <div className="relative z-10 grid w-full flex-grow items-stretch lg:grid-cols-12">
        {/* Left Side Column */}
        <div className="relative flex flex-col justify-between px-6 py-10 sm:px-12 sm:py-14 md:px-16 lg:col-span-5 lg:pl-16 lg:pr-8 xl:pl-24 xl:pr-12">
          
          <div className="flex flex-1 flex-col justify-center py-4">
            <AnimatePresence
              mode="wait"
              custom={direction}
              initial={false}
              onExitComplete={() => {
                isTransitioning.current = false;
              }}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => {
                  isTransitioning.current = true;
                }}
                className="flex flex-col items-start"
              >
                {/* Eyebrow Badge */}
                <motion.div
                  variants={textElementVariants}
                  custom={direction}
                  className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-blue-200/80 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md sm:px-4 sm:py-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>{currentSlide.badge}</span>
                </motion.div>

                {/* 2-Line High-Impact Heading */}
                <motion.h1
                  variants={textElementVariants}
                  custom={direction}
                  className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl lg:leading-[1.12]"
                >
                  <span className="block">{currentSlide.titlePrefix}</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    {currentSlide.titleGradient}
                  </span>
                </motion.h1>

                {/* Body Paragraph */}
                <motion.p
                  variants={textElementVariants}
                  custom={direction}
                  className="mb-8 text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg lg:leading-relaxed"
                >
                  {currentSlide.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Pinned Action Button */}
            <div className="pt-2">
              <Link
                href={currentSlide.ctaLink}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-sky-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-600/40 sm:text-base"
              >
                <span className="relative">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentSlide.ctaText}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="block"
                    >
                      {currentSlide.ctaText}
                    </motion.span>
                  </AnimatePresence>
                </span>

                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Dots Pagination Track */}
          <div className="relative z-20 pt-6 flex items-center gap-2.5">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-gradient-to-r from-blue-600 to-sky-500 shadow-sm shadow-blue-500/50"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Right Side Image Stage */}
        <div className="relative min-h-[40vh] w-full overflow-hidden lg:col-span-7 lg:min-h-full">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
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
                alt={currentSlide.titlePrefix + " " + currentSlide.titleGradient}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-left transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/30 to-transparent lg:from-white lg:via-white/10" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}