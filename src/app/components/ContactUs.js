"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Mail,
  Phone,
  Rocket,
} from "lucide-react";

const ORBIT_NODES = [
  { icon: Mail, angle: 0, color: "#38bdf8" },
  { icon: Phone, angle: 90, color: "#a78bfa" },
  { icon: Rocket, angle: 180, color: "#fb923c" },
  { icon: ShieldCheck, angle: 270, color: "#34d399" },
];

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
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder-zinc-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24 text-slate-900">
      {/* Background Dot Texture */}
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

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Let&rsquo;s Build{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Have a vision for your platform? Connect with our technical experts
            and we&rsquo;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur-md lg:grid-cols-12"
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

            {/* Orbit Animation Visual */}
            <div className="relative z-10 my-10 flex items-center justify-center">
              <div className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-6 rounded-full border border-dashed border-blue-400/25"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-14 rounded-full border border-cyan-400/25"
                />

                {/* Glowing core */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_50px_rgba(59,130,246,0.45)] backdrop-blur-md"
                >
                  <MessageCircle className="h-9 w-9 text-white drop-shadow-md" />
                </motion.div>

                {/* Orbiting nodes */}
                {ORBIT_NODES.map(({ icon: Icon, angle, color }, i) => (
                  <motion.div
                    key={angle}
                    className="absolute inset-0"
                    animate={{ rotate: [angle, angle + 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          rotate: [-angle, -angle - 360],
                        }}
                        transition={{
                          opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md"
                        style={{
                          borderColor: `${color}40`,
                          backgroundColor: "rgba(15,23,42,0.85)",
                          boxShadow: `0 0 20px ${color}55`,
                        }}
                      >
                        <Icon className="h-4 w-4" style={{ color }} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-6 border-t border-slate-700/50 pt-6 text-xs font-semibold text-slate-300 sm:text-sm">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-400" strokeWidth={2} />
                24-hour response time
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-blue-400"
                  strokeWidth={2}
                />
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
                    <span className="mt-1 block text-[11px] text-zinc-600">
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
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] disabled:opacity-70 sm:w-auto"
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