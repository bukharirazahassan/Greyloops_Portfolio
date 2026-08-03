"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    countryCode: "+1",
    phone: "",
    project: "",
    budget: "",
    requestNda: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture - Animated Opacity Pulse */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative Glow Blobs - Animated Floating Movement */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"
      />

      {/* Container widened to max-w-7xl for a larger card presence */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
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

        {/* Larger Floating Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur-md lg:grid-cols-12"
        >
          {/* Left: Branding Panel (More spacious padding) */}
          <div className="relative flex flex-col justify-between overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 sm:p-12 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-slate-100/10 lg:p-14">
            
            {/* Ambient Background Glow Orbs */}
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

            {/* Continuous Shimmer Light Beam */}
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

            {/* Animated Orbit Rings Texture */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full border border-white/5"
            />

            {/* Grid Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
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

            {/* Floating Illustration Frame (Slightly Scaled Up) */}
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

            {/* Bottom Highlights */}
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

          {/* Right: Form Panel (Enlarged padding and layout gaps) */}
          <div className="flex flex-col justify-center bg-white p-8 sm:p-12 lg:col-span-7 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
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

              {/* Service */}
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

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Phone number
                </label>
                <div className="flex gap-2.5">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-28 shrink-0 cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-3.5 text-sm text-slate-700 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(xxx) xxx-xxxx"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Tell us about your project
                </label>
                <textarea
                  name="project"
                  rows={4}
                  required
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="What are you looking to build?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Estimated budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    What is your budget?
                  </option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="requestNda"
                  name="requestNda"
                  checked={formData.requestNda}
                  onChange={handleChange}
                  className="h-4.5 w-4.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="requestNda"
                  className="cursor-pointer select-none text-sm text-slate-600"
                >
                  Request NDA
                </label>
                <span
                  className="cursor-pointer text-xs text-slate-400 hover:text-slate-600"
                  title="Non-disclosure agreement"
                >
                  ⓘ
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] sm:w-auto"
                >
                  <span>Book a Free Discovery Call</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}