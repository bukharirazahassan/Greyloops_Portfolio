"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 py-12 text-zinc-100 lg:py-0">
      {/* Background Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Edge-to-Edge Full Width & Height Layout */}
      <div className="relative z-10 grid min-h-screen w-full grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Branding Panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 sm:p-12 lg:col-span-5 lg:p-16">
          
          {/* Shimmer Effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Background Orbiting Lines */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10 bg-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/15 bg-transparent" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-80 w-80 rounded-full border border-white/10 bg-transparent" />

          <div className="relative z-10 pt-6 lg:pt-12">
            <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-md">
              Get in Touch
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&lsquo;s Build Something Great.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-blue-100/90">
              Have a vision for your platform? Connect with our technical experts and make it happen.
            </p>
          </div>

          {/* Floating Image Watermark */}
          <div className="relative z-10 my-8 flex items-center justify-center">
            <div className="animate-float relative h-56 w-full max-w-sm sm:h-64 lg:h-72">
              <Image
                src="/ContactUs.png"
                alt="Contact Illustration"
                fill
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pb-6 pt-6 text-xs text-blue-100/80 lg:pb-12">
            <span>⚡ 24-hour response time</span>
            <span>🔒 100% Confidential</span>
          </div>
        </div>

        {/* Right Side: Form Panel (Background removed for seamless mobile/desktop layout) */}
        <div className="relative flex flex-col justify-center p-6 sm:p-12 lg:col-span-7 lg:p-16">
          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have Questions? Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Talk.</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Fill in the details below and we will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="group relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name *"
                    className="peer w-full border-b border-zinc-700 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 peer-focus:w-full" />
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email *"
                    className="peer w-full border-b border-zinc-700 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-blue-500 focus:outline-none"
                  />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 peer-focus:w-full" />
                  <span className="mt-1 block text-[11px] text-zinc-500">
                    We recommend using your work email.
                  </span>
                </div>
              </div>

              {/* Service Selection */}
              <div className="group relative">
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="peer w-full border-b border-zinc-700 bg-transparent py-3 text-sm text-zinc-300 transition-all focus:border-blue-500 focus:outline-none [&>option]:bg-slate-900"
                >
                  <option value="" disabled className="text-zinc-500">
                    Select the service you need *
                  </option>
                  <option value="development">Development & QA</option>
                  <option value="mobility">Mobility & Apps</option>
                  <option value="it-operations">IT Operations</option>
                  <option value="data-solutions">Data Solutions</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="ecommerce">E-Commerce</option>
                </select>
              </div>

              {/* Phone Input with Country Code Dropdown */}
              <div className="group relative flex items-center gap-3 border-b border-zinc-700 py-1">
                <div className="relative shrink-0">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="cursor-pointer bg-transparent py-2 text-sm font-medium text-zinc-300 outline-none [&>option]:bg-slate-900"
                  >
                    <option value="+1">🇺🇸 +1 (USA)</option>
                    <option value="+92">🇵🇰 +92 (PK)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(xxx) xxx-xxxx *"
                  className="w-full bg-transparent py-2 text-sm text-white placeholder-zinc-500 transition-all focus:outline-none"
                />
              </div>

              {/* Project Description */}
              <div className="group relative">
                <textarea
                  name="project"
                  rows={3}
                  required
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Please describe your project. *"
                  className="peer w-full resize-none border-b border-zinc-700 bg-transparent py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-blue-500 focus:outline-none"
                />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 peer-focus:w-full" />
              </div>

              {/* Budget Selection */}
              <div className="group relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="peer w-full border-b border-zinc-700 bg-transparent py-3 text-sm text-zinc-300 transition-all focus:border-blue-500 focus:outline-none [&>option]:bg-slate-900"
                >
                  <option value="" disabled className="text-zinc-500">
                    What is your budget?
                  </option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              {/* Request NDA Checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="requestNda"
                  name="requestNda"
                  checked={formData.requestNda}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
                />
                <label htmlFor="requestNda" className="cursor-pointer select-none text-sm text-zinc-400">
                  Request NDA
                </label>
                <span className="cursor-pointer text-xs text-zinc-500 hover:text-zinc-300" title="Non-disclosure agreement">
                  ⓘ
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 active:scale-[0.99] sm:w-auto"
                >
                  <span>Book a Free Discovery Call</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}