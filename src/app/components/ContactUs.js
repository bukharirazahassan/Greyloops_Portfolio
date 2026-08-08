"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const COUNTRY_CODES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    countryCode: "+1",
    phone: "",
    project: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^[0-9]{7,14}$/;
    return phoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid phone number (7 to 14 digits).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture — matched to FAQ / OfficeLocations opacity + mask */}
      <motion.div
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 25%, transparent 100%)",
        }}
      />

      {/* Decorative Glow Blobs — stronger, same palette as the rest of the site */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Let&rsquo;s Build <span className="text-blue-600">Something Great</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 sm:text-lg"
          >
            Have a vision for your platform? Connect with our technical
            experts and we&rsquo;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur-md lg:grid-cols-12"
        >
          {/* Left: Branding Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 sm:p-12 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-slate-100/10 lg:p-14">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-blue-600/40 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"
            />

            <motion.div
              initial={{ x: "-100%", y: "-100%" }}
              animate={{ x: "200%", y: "200%" }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-white/10 to-transparent"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 ring-1 ring-blue-500/20 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Book a Discovery Call
              </span>
              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Tell us about your project.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Our team reviews every request personally — no bots, no
                boilerplate replies. Just a real conversation about what
                you&rsquo;re building.
              </p>
            </div>

            <div className="relative z-10 my-10 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-52 w-full max-w-sm sm:h-64"
              >
                <Image
                  src="/ContactUs.png"
                  alt="Contact Illustration"
                  fill
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-6 border-t border-slate-700/50 pt-6 text-xs font-semibold text-slate-300 sm:text-sm">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-400" strokeWidth={2} />
                24-hour response time
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-400" strokeWidth={2} />
                100% Confidential
              </span>
            </div>
          </div>

          {/* Right: Form Panel */}
          <div className="flex flex-col justify-center bg-white p-8 sm:p-12 lg:col-span-7 lg:p-14">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-inner ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Thank you for the message.
                </h3>
                <p className="mt-2 text-base font-semibold text-blue-600 sm:text-lg">
                  We Will get back to you.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "",
                      countryCode: "+1",
                      phone: "",
                      project: "",
                    });
                  }}
                  className="mt-8 rounded-xl bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                    <span className="mt-1 block text-[11px] text-slate-400">
                      We recommend using your work email.
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Service you need
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="development">Development & QA</option>
                    <option value="mobility">Mobility & Apps</option>
                    <option value="it-operations">IT Operations</option>
                    <option value="data-solutions">Data Solutions</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ecommerce">E-Commerce</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Phone number
                  </label>
                  <div className="flex gap-2.5">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-36 shrink-0 cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-sm text-slate-700 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                      {COUNTRY_CODES.map((c, index) => (
                        <option key={`${c.code}-${index}`} value={c.code}>
                          {c.flag} {c.code} ({c.name})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(300) 123-4567"
                      className={`${inputClass} ${
                        phoneError ? "border-red-500 focus:ring-red-100" : ""
                      }`}
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Tell us about your project
                  </label>
                  <textarea
                    name="project"
                    rows={7}
                    required
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="What are you looking to build?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] disabled:opacity-70 sm:w-auto"
                  >
                    <span>
                      {isSubmitting
                        ? "Scheduling..."
                        : "Schedule Free Consultation"}
                    </span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}