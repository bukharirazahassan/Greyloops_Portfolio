"use client";

import { useRef } from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

function StickyCard({ card, index, total, progress }) {
  const containerRef = useRef(null);

  const targetScale = 1 - (total - index - 1) * 0.04;
  const startRange = index / total;
  const endRange = 1;

  const scale = useTransform(progress, [startRange, endRange], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      style={{ zIndex: index + 1 }}
      className="sticky top-20 flex w-full justify-center items-start pt-2"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 20}px`,
        }}
        className="relative grid w-full max-w-[1800px] grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d111d] shadow-2xl shadow-black/80 lg:grid-cols-12"
      >
        {/* Card Ambient Dot Background */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Left Side: Information Content */}
        <div className="relative z-20 flex flex-col justify-center items-start p-6 text-left sm:p-10 lg:col-span-5 lg:p-12 xl:p-16 bg-[#0d111d]">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-950/60 shadow-lg shadow-blue-950/50 backdrop-blur-md">
            <Check className="h-6 w-6 text-blue-400" />
          </div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>{card.badge}</span>
          </div>

          <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            <span>{card.titleStart}</span>
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {card.titleEnd}
            </span>
          </h3>

          <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
            {card.description}
          </p>
        </div>

        {/* Right Side: Image Column with Aspect Ratio 512x286 */}
        <div className="relative z-20 min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[572px] w-full h-full lg:col-span-7 bg-[#0d111d]">
          <Image
            src={card.image}
            alt={card.alt}
            width={512}
            height={286}
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={index === 0}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function MobileConsulting() {
  const containerRef = useRef(null);

  const cardsData = [
    {
      badge: "Mobile Strategy",
      titleStart: "Mobile Strategy ",
      titleEnd: "Consulting",
      description:
        "Define a clear mobile strategy that connects your product vision, customer needs, business objectives, and technology direction. We assess your existing mobile capabilities, identify opportunities for improvement, prioritize product initiatives, and establish practical technology roadmaps that support scalability, user engagement, operational efficiency, and long-term business growth.",
      image: "/images/services/expert-mobile-consulting.png",
      alt: "Mobile Strategy Consulting Banner",
    },
    {
      badge: "Mobile Product",
      titleStart: "Mobile Product ",
      titleEnd: "Consulting",
      description:
        "We help businesses define, evaluate, and evolve mobile products that align with customer needs, business objectives, and market opportunities. Our consulting approach covers product vision, feature prioritization, user journeys, UX/UI, technology decisions, architecture, analytics, and growth strategy. We assess existing mobile products or help shape new ideas, identify opportunities for improvement, and create practical product roadmaps that reduce risk, improve user engagement, and support long-term growth.",
      image: "/images/services/mobile_product_consulting_v2.png",
      alt: "Mobile Product Consulting",
    },
    {
      badge: "Mobile Architecture",
      titleStart: "Mobile Architecture ",
      titleEnd: "Consulting",
      description:
        "Design a scalable, secure, and maintainable mobile architecture aligned with your product requirements, business goals, and long-term growth. We assess existing application architectures, identify technical risks and bottlenecks, and recommend the right architectural patterns, technology approaches, API integrations, data strategies, and infrastructure foundations. Our consulting helps businesses build reliable mobile products that perform efficiently, scale confidently, and remain easier to maintain and evolve.",
      image: "/images/services/mobile-architecture-consulting.png",
      alt: "Mobile Architecture Consulting",
    },
    {
      badge: "Native & Cross-Platform",
      titleStart: "Native & Cross-Platform ",
      titleEnd: "Development",
      description:
        "Choose the right mobile development approach based on your product requirements, target platforms, performance expectations, budget, and long-term growth plans. We provide strategic guidance on native and cross-platform technologies, helping businesses evaluate the trade-offs between platform-specific and shared-code solutions. Our consulting ensures the selected approach delivers the right balance of performance, scalability, development efficiency, maintainability, and user experience.",
      image: "/images/services/native-cross-platform-development.png",
      alt: "Native & Cross-Platform Development",
    },
    {
      badge: "Cloud & API Integration",
      titleStart: "Cloud & API ",
      titleEnd: "Integration",
      description:
        "Connect mobile applications with cloud platforms, backend systems, APIs, and third-party services through secure and scalable integration strategies. We help businesses design reliable integration architectures, define API communication patterns, improve data synchronization, and select suitable cloud services that support performance, availability, security, and future growth. Our consulting ensures mobile products remain connected, flexible, and easier to scale as business requirements evolve.",
      image: "/images/services/cloud-api-integration-v2.png",
      alt: "Cloud & API Integration",
    },
    {
      badge: "Mobile Security",
      titleStart: "Mobile ",
      titleEnd: "Security",
      description:
        "Protect mobile applications and sensitive user data with security strategies designed around your product, technology stack, and business requirements. We assess application security risks, authentication and authorization mechanisms, data protection, API communication, and third-party integrations to identify vulnerabilities and recommend practical improvements. Our consulting helps businesses strengthen mobile security, protect user information, and establish secure foundations for long-term product growth.",
      image: "/images/services/mobile-security.png",
      alt: "Mobile Security",
    },
    {
      badge: "Performance Optimization",
      titleStart: "Performance ",
      titleEnd: "Optimization",
      description:
        "Improve mobile application speed, responsiveness, stability, and resource efficiency through systematic performance assessment and optimization. We analyze application behavior, network performance, API response times, memory usage, battery consumption, and overall user experience to identify technical bottlenecks. Our consulting provides practical recommendations that enhance performance, reliability, scalability, and user satisfaction across devices and platforms.",
      image: "/images/services/performance-optimization.png",
      alt: "Performance Optimization",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="w-full bg-[#0a0c14] font-sans text-slate-100">
      {/* Top Section: Heading & Description */}
      <section className="relative w-full border-t border-slate-800/80 bg-[#0a0c14] px-6 pt-6 pb-2 sm:px-10 lg:px-16 lg:pt-16 xl:px-20">
        {/* Glow Container: Clips floating blurred elements without breaking sticky parents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        {/* Ambient Dot Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle, #64748b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16 w-full pb-4">
          {/* Left Side: Badge and Clean Three-Line Heading */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-3.5 py-1 text-xs font-semibold text-blue-400 shadow-lg shadow-blue-950/50 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Mobile Consulting</span>
            </div>

            <h1 className="text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl lg:leading-[1.12]">
              <span className="block text-white">Expert</span>
              <span className="block text-white">Mobile Consulting</span>
              <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Scalable Digital Products
              </span>
            </h1>
          </div>

          {/* Right Side: Description Paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left lg:pt-14">
            <p className="text-left text-base font-normal leading-relaxed text-slate-300 antialiased sm:text-lg lg:text-xl lg:leading-relaxed">
              We provide expert consulting to help businesses plan, design,
              build, modernize, and scale successful mobile products. Our team
              combines product strategy, UX/UI expertise, mobile architecture,
              engineering, cloud integration, security, and performance
              optimization to create mobile solutions aligned with business
              goals and user expectations. From launching new applications to
              improving existing products, we help organizations make the right
              technology decisions, reduce development risks, and establish a
              strong foundation for long-term growth.
            </p>
          </div>
        </div>

        {/* Single Centered Divider Line */}
        <div className="relative z-10 mt-4 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </section>

      {/* Modern Sticky Stacking Section */}
      <section ref={containerRef} className="relative w-full bg-[#0a0c14] pt-4 pb-32 px-4 sm:px-6 lg:px-8">
        {cardsData.map((card, index) => (
          <StickyCard
            key={index}
            card={card}
            index={index}
            total={cardsData.length}
            progress={scrollYProgress}
          />
        ))}
      </section>
    </div>
  );
}