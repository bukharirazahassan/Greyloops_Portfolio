"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FontendServicesListSection from "../../components/services/FontendServicesListSection";
import FrontendDevelopmentProcess from "../../components/services/Frontenddevelopmentprocess";
import HowEngagementWorks from "../../components/services/HowEngagementWorks";
import FrontendDevelopmentFQA from "../../components/services/FrontendDevelopmentFQA";
import FrontendDevelopmentExpert from "../../components/services/FrontendDevelopmentExpert"

export default function FrontendDevelopment() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="frontend-font relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-slate-950 py-12 text-slate-100 selection:bg-blue-500 selection:text-white sm:py-16 lg:py-20">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
          .frontend-font {
            font-family:
              "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
          }
          .frontend-display {
            font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
            letter-spacing: -0.02em;
          }
        `}</style>

        {/* Right Side Header Graphic */}
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-end">
          <div className="relative h-full w-full lg:w-[65%] xl:w-[60%]">
            <Image
              src="/images/services/frontendHeader.webp"
              alt="Frontend development interface illustration"
              width={2048}
              height={1153}
              priority
              className="h-full w-full object-cover object-right opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        </div>

        {/* Grid Background Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 20% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 20% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Glows */}
        <div className="pointer-events-none absolute left-6 top-1/3 z-0 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 z-0 h-[300px] w-[300px] rounded-full bg-indigo-500/15 blur-[120px]" />

        {/* Main Hero Content - Vertically Centered */}
        <div className="relative z-10 my-auto flex w-full items-center px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300 shadow-md shadow-blue-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                Frontend Development
              </span>

              <h1 className="frontend-display mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Interfaces Built to{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Perform &amp; Convert
                </span>
              </h1>

              <p className="mb-8 text-sm font-normal leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                Our frontend development services encompass everything from
                responsive design solutions to holistic UI and UX design for
                your project. With over a decade of experience, we have
                delivered frontend development services to a number of
                industries from finance and healthcare to education and travel.
              </p>

              <div>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35 sm:text-sm"
                >
                  Start Your Frontend Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Sticky List Section */}
      <FontendServicesListSection />
      <FrontendDevelopmentProcess />
      <HowEngagementWorks />
      <FrontendDevelopmentFQA />
      <FrontendDevelopmentExpert /> 
    </main>
  );
}