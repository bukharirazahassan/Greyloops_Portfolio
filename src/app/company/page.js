"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Wavedivider from "../components/Wavedivider";
import Footer from "../components/Footer";
import { companyColumns } from "../lib/companyData";
import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

const featureCards = [
  { title: "Our Mission", image: "/company-mission.jpg", href: "#" },
  { title: "Our Vision", image: "/company-vision.jpg", href: "#" },
  { title: "Our Philosophy", image: "/company-philosophy.jpg", href: "#" },
  { title: "Our Strategy", image: "/company-strategy.jpg", href: "#" },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-800">
      <Header />

      {/* TOP: Dark Modern Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        {/* Dot-grid texture (dark variant) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Orbit ring texture */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full border border-white/10" />

        {/* Static Background Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-12 h-64 w-64 rounded-full bg-indigo-600/20 blur-2xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Software Innovation Partner
            </span>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
              Empowering Businesses for the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Modern Age
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Specializing in integrated software, data management, and development services, that enable businesses to take the digital leap to growth and success.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/40"
            >
              Let’s work together
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM: Themed light section */}
      <main className="relative w-full flex-1 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-16 sm:py-20">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
          }}
        />

        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          {/* ================= YOUR PARTNER FOR SOFTWARE INNOVATION ================= */}
          <div className="mb-20">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                What We Offer
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Your Partner for{" "}
                <span className="text-blue-600">Software Innovation</span>
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600">
                We aim to amplify your business proposition by offering bespoke
                software development, inventive product design, meticulous QA,
                and strategic consultancy services.
              </p>
            </div>

            {/* Large image frames — sequential scroll-triggered fade-in,
                same slow Ken Burns zoom technique as the hero Slider */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {featureCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="group relative block h-80 overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-blue-900/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/20 sm:h-96"
                  >
                    <div className="absolute inset-0 animate-kenburns">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Gradient wash for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Soft pulsing glow border */}
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] animate-glow-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-7">
                      <h3 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                        {item.title}
                      </h3>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE GREYLOOPS ================= */}
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              Explore
            </span>
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Explore <span className="text-blue-600">Greyloops</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-zinc-500">
              Learn more about our company structure, team, and open roles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyColumns.map((col) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.slug}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

                  <div className="mb-5 flex items-center gap-3">
                    {Icon ? (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                      </span>
                    ) : (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-zinc-900">
                      {col.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {col.links.map((link) => (
                      <Link
                        key={link.slug}
                        href={`/company/${link.slug}`}
                        className="group/chip inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {link.name}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/chip:translate-x-0 group-hover/chip:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}