"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, ShieldCheck, ArrowRight } from "lucide-react";

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
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 sm:py-28">
      {/* Dot-grid texture, consistent with the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            Get in Touch
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Let&rsquo;s Build <span className="text-blue-600">Something Great</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            Have a vision for your platform? Connect with our technical
            experts and we&rsquo;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Floating card */}
        <div className="grid overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-2xl shadow-blue-900/10 lg:grid-cols-12">
          {/* Left: Branding panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 sm:p-10 lg:col-span-5 lg:p-12">
            {/* Shimmer sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Orbit ring texture */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative z-10">
              <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md">
                Book a Discovery Call
              </span>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Tell us about your project.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/90">
                Our team reviews every request personally — no bots, no
                boilerplate replies. Just a real conversation about what
                you&rsquo;re building.
              </p>
            </div>

            {/* Floating illustration */}
            <div className="relative z-10 my-6 flex items-center justify-center">
              <div className="animate-float relative h-44 w-full max-w-xs sm:h-52">
                <Image
                  src="/ContactUs.png"
                  alt="Contact Illustration"
                  fill
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>

            {/* Bottom highlights */}
            <div className="relative z-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5 text-xs font-medium text-blue-100/90">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-blue-200" strokeWidth={2} />
                24-hour response time
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-200" strokeWidth={2} />
                100% Confidential
              </span>
            </div>
          </div>

          {/* Right: Form panel */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
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
                  <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
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
                  <span className="mt-1 block text-[11px] text-zinc-400">
                    We recommend using your work email.
                  </span>
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
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
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-28 shrink-0 cursor-pointer rounded-xl border border-zinc-200 bg-white px-2 py-3 text-sm text-zinc-700 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
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

              {/* Project description */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
                  Tell us about your project
                </label>
                <textarea
                  name="project"
                  rows={3}
                  required
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="What are you looking to build?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Budget */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700">
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

              {/* NDA checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="requestNda"
                  name="requestNda"
                  checked={formData.requestNda}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="requestNda" className="cursor-pointer select-none text-sm text-zinc-600">
                  Request NDA
                </label>
                <span
                  className="cursor-pointer text-xs text-zinc-400 hover:text-zinc-600"
                  title="Non-disclosure agreement"
                >
                  ⓘ
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600 active:scale-[0.99] sm:w-auto"
                >
                  <span>Book a Free Discovery Call</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}