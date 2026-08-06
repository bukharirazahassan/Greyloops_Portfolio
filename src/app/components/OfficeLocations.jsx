"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Building2,
  Globe,
  ArrowUpRight,
  Clock,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Compass,
} from "lucide-react";

const OFFICES = [
  {
    id: "uae",
    title: "UAE Headquarters",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    address: "114, Roy Mediterranean, Al Furjan, Dubai, UAE",
    query: "Roy Mediterranean, Al Furjan, Dubai, UAE",
    tag: "Global Operations",
    timezone: "GST (UTC+4)",
    badgeBg: "bg-blue-50 text-blue-600 ring-1 ring-blue-100",
    gradientBorder: "group-hover:border-blue-500/50",
    glowColor: "group-hover:shadow-blue-500/10",
  },
  {
    id: "engineering",
    title: "Engineering & R&D Hub",
    city: "Lahore",
    country: "Pakistan",
    flag: "🇵🇰",
    address: "59-B Phase 1 Johar Town, Lahore, Punjab 54000",
    query: "59-B Phase 1 Johar Town, Lahore, Punjab 54000, Pakistan",
    tag: "Product & Tech",
    timezone: "PKT (UTC+5)",
    badgeBg: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
    gradientBorder: "group-hover:border-indigo-500/50",
    glowColor: "group-hover:shadow-indigo-500/10",
  },
  {
    id: "business",
    title: "APAC Business Hub",
    city: "Birmingham Gardens",
    country: "Australia",
    flag: "🇦🇺",
    address: "26 Lee Crescent, Birmingham Gardens, NSW",
    query: "26 Lee Crescent, Birmingham Gardens, NSW, Australia",
    tag: "Client Relations",
    timezone: "AEST (UTC+10)",
    badgeBg: "bg-sky-50 text-sky-600 ring-1 ring-sky-100",
    gradientBorder: "group-hover:border-sky-500/50",
    glowColor: "group-hover:shadow-sky-500/10",
  },
];

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "General & Business Queries",
    email: "query@greyloops.com",
    tag: "Response within 24 hours",
  },
  {
    icon: Sparkles,
    title: "Careers & Talent",
    email: "hr@greyloops.com",
    tag: "Join our global team",
  },
];

// Motion Variants for Staggered Section Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function OfficeLocations() {
  const [activeTab, setActiveTab] = useState(OFFICES[0].id);
  const [copiedText, setCopiedText] = useState(null);

  const activeOffice = OFFICES.find((o) => o.id === activeTab) || OFFICES[0];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 text-slate-900 lg:py-32">
      {/* Soft floating background light effect */}
      <div className="pointer-events-none absolute left-10 top-16 z-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute right-10 bottom-24 z-0 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HERO HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="relative mb-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Globe className="h-4 w-4 text-blue-600" />
            <span className="relative z-10">Global Operations &amp; Hubs</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent animate-shimmer" />
          </span>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Where We{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Build &amp; Innovate
            </span>
          </h2>

          <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
            We empower businesses with distributed teams across three continents. Connect directly with our regional command hubs or locate our physical offices.
          </p>
        </motion.div>

        {/* ================= TAB SWITCHER & FEATURED OFFICE MAP ================= */}
        <div className="mt-12">
          {/* Navigation Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {OFFICES.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office.id)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-slate-900"
                  }`}
                >
                  <span className="text-base">{office.flag}</span>
                  <span>{office.city}</span>
                  <span
                    className={`hidden rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider sm:inline-block ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-200 text-zinc-500"
                    }`}
                  >
                    {office.country}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Office Card & Embed Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xl lg:grid lg:grid-cols-12"
          >
            {/* Left Info Panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-slate-50/50 p-8 lg:col-span-5 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${activeOffice.badgeBg}`}
                      >
                        {activeOffice.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                        <Clock className="h-3.5 w-3.5 text-zinc-400" />
                        {activeOffice.timezone}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                      <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {activeOffice.title}
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Address
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-relaxed text-zinc-700">
                          {activeOffice.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-zinc-100 pt-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                          Country &amp; Region
                        </p>
                        <p className="text-sm font-semibold text-zinc-700">
                          {activeOffice.flag} {activeOffice.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    activeOffice.query
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/35"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </a>

                <button
                  onClick={() => handleCopy(activeOffice.address)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50"
                >
                  {copiedText === activeOffice.address ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-zinc-400" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Map Panel */}
            <div className="relative min-h-[380px] border-t border-zinc-200/80 bg-zinc-100 lg:col-span-7 lg:border-t-0 lg:border-l">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <iframe
                    title={`${activeOffice.title} Map`}
                    width="100%"
                    height="100%"
                    className="h-full min-h-[380px] w-full border-0 grayscale-[10%] transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      activeOffice.query
                    )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ================= ALL LOCATIONS CARDS GRID (REDESIGNED & ANIMATED) ================= */}
        <div className="mt-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
                <Compass className="h-4 w-4" /> Regional Footprint
              </span>
              <h3 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  All Operating Hubs
                </span>
              </h3>
            </div>
            <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              3 Active Command Centers
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {OFFICES.map((office) => {
              const isSelected = activeTab === office.id;
              return (
                <motion.div
                  key={office.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setActiveTab(office.id)}
                  className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl ${office.gradientBorder} ${office.glowColor} ${
                    isSelected
                      ? "ring-2 ring-blue-500/80 border-transparent shadow-lg"
                      : "border-zinc-200/80 hover:border-zinc-300"
                  }`}
                >
                  {/* Subtle hover gradient background */}
                  <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl shadow-inner"
                      >
                        {office.flag}
                      </motion.div>
                      <span className="rounded-full bg-zinc-100/80 px-3 py-1 text-xs font-semibold text-zinc-600 ring-1 ring-zinc-200/60">
                        {office.country}
                      </span>
                    </div>

                    <h4 className="mt-6 text-2xl font-extrabold tracking-tight transition-colors">
                      <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-500">
                        {office.title}
                      </span>
                    </h4>
                    
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {office.tag}
                    </p>

                    <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50/80 p-3.5 ring-1 ring-slate-100 transition-colors group-hover:bg-white group-hover:ring-zinc-200">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-xs font-semibold leading-relaxed text-zinc-600">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                      <Clock className="h-3.5 w-3.5 text-zinc-400" />
                      {office.timezone}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition-all duration-200 group-hover:translate-x-1">
                      View Map &amp; Info
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= QUICK CONTACT CHANNELS (ANIMATED) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CONTACT_CHANNELS.map((channel) => (
            <motion.div
              key={channel.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                  <channel.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {channel.tag}
                  </p>
                  <h4 className="text-sm font-extrabold tracking-tight text-slate-900">
                    {channel.title}
                  </h4>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-100 bg-slate-50 p-3">
                <a
                  href={`mailto:${channel.email}`}
                  className="text-xs font-semibold text-slate-900 transition-colors hover:text-blue-600"
                >
                  {channel.email}
                </a>
                <button
                  onClick={() => handleCopy(channel.email)}
                  className="rounded-lg p-1 text-zinc-400 hover:bg-white hover:text-zinc-700"
                  title="Copy email"
                >
                  {copiedText === channel.email ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}

          {/* Direct HQ Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Direct Line
                </p>
                <h4 className="text-sm font-extrabold tracking-tight text-slate-900">
                  Speak to HQ
                </h4>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-100 bg-slate-50 p-3">
              <a
                href="tel:+971551866704"
                className="text-xs font-semibold text-slate-900 transition-colors hover:text-blue-600"
              >
                +971 55 186 6704
              </a>
              <button
                onClick={() => handleCopy("+971551866704")}
                className="rounded-lg p-1 text-zinc-400 hover:bg-white hover:text-zinc-700"
                title="Copy phone number"
              >
                {copiedText === "+971551866704" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}