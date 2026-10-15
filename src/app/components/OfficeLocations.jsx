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
    email: "careers@greyloops.com",
    tag: "Join our global team",
  },
];

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
    <section className="relative w-full overflow-hidden bg-slate-50 pb-16 pt-4 text-slate-900 lg:pb-24 lg:pt-8">
      {/* Background dots pattern — Seamless match with FAQContact */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Ambient background glowing circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      {/* Full-width container */}
      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start px-2 text-left sm:px-4"
        >
          <span className="relative mb-3 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Globe className="h-4 w-4 text-blue-600" />
            <span className="relative z-10">Global Operations &amp; Hubs</span>
          </span>

          <h2 className="max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <span className="text-slate-900">Where We </span>
            <span className="text-blue-600">Build &amp; Innovate</span>
          </h2>
        </motion.div>

        {/* ================= TAB SWITCHER & FEATURED OFFICE MAP ================= */}
        <div className="mt-6 px-2 sm:px-4">
          {/* Navigation Pill Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-3">
            {OFFICES.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office.id)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "bg-white/80 text-slate-600 ring-1 ring-slate-200 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <span className="text-base">{office.flag}</span>
                  <span>{office.city}</span>
                  <span
                    className={`hidden rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider sm:inline-block ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
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
            className="relative mt-6 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-xl lg:grid lg:grid-cols-12"
          >
            {/* Left Info Panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-slate-50/60 p-6 lg:col-span-5 lg:p-10">
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
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {activeOffice.timezone}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {activeOffice.title}
                    </h3>
                  </div>

                  <div className="space-y-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Address
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-relaxed text-slate-700">
                          {activeOffice.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Country &amp; Region
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
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
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <button
                  onClick={() => handleCopy(activeOffice.address)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
                >
                  {copiedText === activeOffice.address ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-400" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Map Panel */}
            <div className="relative min-h-[380px] border-t border-slate-200/80 bg-slate-100 lg:col-span-7 lg:border-t-0 lg:border-l">
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

        {/* ================= QUICK CONTACT CHANNELS (UNDER MAP) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 grid grid-cols-1 gap-5 px-2 sm:px-4 md:grid-cols-3"
        >
          {CONTACT_CHANNELS.map((channel) => (
            <motion.div
              key={channel.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-blue-200 hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                  <channel.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {channel.tag}
                  </p>
                  <h4 className="text-sm font-bold tracking-tight text-slate-900">
                    {channel.title}
                  </h4>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
                <a
                  href={`mailto:${channel.email}`}
                  className="text-xs font-semibold text-slate-900 transition-colors hover:text-blue-600"
                >
                  {channel.email}
                </a>
                <button
                  onClick={() => handleCopy(channel.email)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-white hover:text-slate-700"
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
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all hover:border-blue-200 hover:shadow-lg text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Direct Line
                </p>
                <h4 className="text-sm font-bold tracking-tight text-slate-900">
                  Speak to HQ
                </h4>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
              <a
                href="tel:+971551866704"
                className="text-xs font-semibold text-slate-900 transition-colors hover:text-blue-600"
              >
                +971 55 186 6704
              </a>
              <button
                onClick={() => handleCopy("+971551866704")}
                className="rounded-lg p-1 text-slate-400 hover:bg-white hover:text-slate-700"
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