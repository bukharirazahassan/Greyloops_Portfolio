"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const slides = [
  {
    src: "/images/services/backend-slider-v1.jpg",
    alt: "Develop High-level Architecture",
    heading: [
      { text: "Develop ", accent: false },
      { text: "High-level Architecture", accent: true },
    ],
    subtitle:
      "Creating a blueprint for how the back-end of your application will be structured and how its components will interact. We consider your requirements, identify the major components and modules, select the right technologies, define their relationships, and map the data flow so the system has a clear and scalable technical foundation.",
    details: [
      "System structure and component relationships",
      "Technology and framework selection",
      "API communication and data flow",
      "Scalability, security, and maintainability",
    ],
    outcome:
      "The result is a clear technical blueprint that guides development and provides a strong foundation for future growth.",
  },
  {
    src: "/images/services/backend-slider-v2.jpg",
    alt: "Design Cloud Infrastructure",
    heading: [
      { text: "Design ", accent: false },
      { text: "Cloud Infrastructure", accent: true },
    ],
    subtitle:
      "Our engineers create the server and network resources required to host your back-end components in a scalable and cost-effective manner. We select the appropriate cloud service provider such as AWS, Azure, or Google Cloud, then configure virtual machines, containers, or serverless functions together with the networking and security controls required by your application.",
    details: [
      "AWS, Azure, or Google Cloud selection",
      "Virtual machines, containers, or serverless",
      "Network, routing, and service configuration",
      "Security groups and firewall rules",
      "Scalability and cost optimization",
    ],
    outcome:
      "The result is a secure and reliable cloud foundation designed to support your back-end services as your application grows.",
  },
  {
    src: "/images/services/backend-slider-v3.jpg",
    alt: "Design Database Schema",
    heading: [
      { text: "Design ", accent: false },
      { text: "Database Schema", accent: true },
    ],
    subtitle:
      "Providing a structured and organized way to store, retrieve, and manage application data. We select the appropriate SQL or NoSQL database system, design the schema by defining tables, fields, relationships, indexes, and constraints, then configure the database and populate initial data when required for testing and development.",
    details: [
      "SQL, NoSQL, or suitable database selection",
      "Tables, collections, fields, and relationships",
      "Indexes and data integrity constraints",
      "Efficient data access and retrieval",
      "Initial data seeding for development and testing",
    ],
    outcome:
      "The result is a structured data foundation that keeps application information organized, reliable, and ready to scale.",
  },
];

export default function BackendSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-white py-12 sm:py-16 lg:h-screen lg:py-0 text-slate-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Soft white gradient overlay matching theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent sm:hidden" />
        </div>
      ))}

      {/* Background Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[12] opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Decorative Blur Circles */}
      <div className="pointer-events-none absolute left-10 top-16 z-[15] h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute left-52 bottom-24 z-[15] h-56 w-56 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content Container */}
      <div className="relative z-20 flex h-full items-center pl-6 pr-6 sm:pl-10 md:pl-16 lg:pl-24">
        <div className="max-w-2xl">
          {/* Main Title Heading */}
          <h2
            key={`title-${current}`}
            className="mb-4 animate-fade-up text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {slides[current].heading.map((part, i) => (
              <span
                key={i}
                className={
                  part.accent
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                }
              >
                {part.text}
              </span>
            ))}
          </h2>

          {/* Subtitle / Description Paragraph */}
          <p
            key={`sub-${current}`}
            className="mb-5 animate-fade-up text-sm leading-relaxed text-zinc-600 [animation-delay:100ms] sm:text-base lg:text-lg"
          >
            {slides[current].subtitle}
          </p>

          {/* Key Focus Bullet Details */}
          <div
            key={`details-${current}`}
            className="mb-5 animate-fade-up [animation-delay:180ms]"
          >
            <span className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
              Key Architecture Focus
            </span>

            <div className="space-y-2">
              {slides[current].details.map((detail) => (
                <div key={detail} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-xs leading-relaxed text-zinc-600 sm:text-sm lg:text-base font-normal">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Card Box */}
          <div
            key={`outcome-${current}`}
            className="animate-fade-up max-w-xl rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur-md [animation-delay:260ms]"
          >
            <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm lg:text-base">
              <strong className="mr-1 font-bold text-slate-900">
                Outcome:
              </strong>
              {slides[current].outcome.replace("Outcome: ", "")}
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 sm:bottom-8 sm:left-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.alt}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-blue-600"
                : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}