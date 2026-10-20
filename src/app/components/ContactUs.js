// src/app/components/FAQContact.jsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

const FAQS = [
  {
    id: 0,
    question: "What Digital Product Engineering Services Does Greyloops Offer?",
    intro: [
      "Greyloops delivers end-to-end digital product engineering services that help businesses transform ideas into secure, scalable, and high-performing digital solutions. From technology consulting and product strategy to development, integration, and continuous improvement, we align engineering expertise with business objectives.",
    ],
    listTitle: "Our core services include:",
    items: [
      {
        label: "AI & Intelligent Automation",
        text: "We integrate AI, machine learning, and intelligent automation to streamline operations, enhance decision-making, and unlock new business opportunities.",
      },
      {
        label: "Digital Product Development",
        text: "We design, develop, and optimize custom digital products through user-focused design, modern engineering, and continuous quality assurance.",
      },
      {
        label: "Digital Transformation",
        text: "We modernize legacy systems and connect business operations through scalable applications, cloud technologies, and integrated digital platforms.",
      },
      {
        label: "Technology Consulting",
        text: "We help businesses define technology strategies, select the right solutions, and align engineering investments with their long-term goals.",
      },
      {
        label: "Data Engineering & Analytics",
        text: "We build reliable data pipelines and analytics solutions that turn business data into actionable insights and support informed decisions.",
      },
    ],
  },
  {
    id: 1,
    question: "How Does Greyloops Help Businesses Scale Digital Products?",
    intro: [
      "Greyloops helps businesses scale existing digital products by optimizing performance, modernizing architecture, and improving system reliability. We combine cloud technologies, data-driven optimization, and automation to ensure applications adapt to growing users, workloads, and business demands.",
    ],
    listTitle: "We improve scalability through:",
    items: [
      "Cloud Migration & Microservices Architecture",
      "Performance Engineering & Optimization",
      "AI-Powered Monitoring & Predictive Analytics",
      "Modular UI/UX & API Integration",
      "Automated Testing & CI/CD Pipelines",
    ],
    outro: [
      "Our approach helps businesses build on existing investments, improve application performance, and support sustainable growth without compromising security or stability.",
    ],
  },
  {
    id: 2,
    question:
      "How Does Greyloops Modernize Legacy Systems with AI-Driven Engineering?",
    intro: [
      "Greyloops helps businesses modernize legacy systems by combining AI, modern software architecture, and automation to improve performance, streamline operations, and support long-term growth. We assess existing systems, identify inefficiencies, and develop a phased modernization strategy that preserves valuable business logic while upgrading outdated components and connecting disconnected platforms.",
      "Our approach integrates AI, machine learning, predictive analytics, and intelligent automation where they deliver measurable business value. We prioritize secure system design, reliable data integration, and continuous testing to ensure every solution remains scalable, maintainable, and aligned with business objectives.",
      "The result is a modern, AI-ready technology foundation that reduces operational complexity, improves decision-making, and prepares businesses for future innovation.",
    ],
  },
  {
    id: 3,
    question:
      "How Much Does It Cost to Build an Enterprise-Grade Digital Product, and How Long Does It Take?",
    intro: [
      "The cost and timeline of digital product engineering depend on your business objectives, project scope, technical complexity, and required features. Greyloops takes a requirement-driven approach to project planning, evaluating factors such as system architecture, integrations, security, scalability, and performance to determine the most suitable development strategy.",
      "Before development begins, we work with you to define project requirements, establish clear milestones, and provide a tailored cost and timeline estimate. This approach ensures transparency, aligns expectations, and helps deliver a solution that meets your business needs and long-term goals.",
      "Contact Greyloops to discuss your requirements and receive a project estimate tailored to your needs.",
    ],
  },
  {
    id: 4,
    question: "How Long Does a Typical Software Development Project Take?",
    intro: [
      "The timeline for a software development project depends on its scope, technical complexity, required features, integrations, and business objectives. At Greyloops, we follow a structured development approach that begins with understanding your requirements and defining clear project milestones.",
      "Depending on your goals, we can develop a Minimum Viable Product (MVP) to validate core functionality and gather early user feedback, or a Proof of Concept (PoC) to evaluate technical feasibility before moving toward full-scale development.",
      "We establish a realistic delivery timeline based on project requirements, development priorities, and testing needs, helping you plan effectively while maintaining a focus on quality, scalability, and long-term business value.",
    ],
  },
  {
    id: 5,
    question:
      "Can Greyloops Provide Dedicated Developers or Team Augmentation for Projects?",
    intro: [
      "Yes. Greyloops offers flexible engagement models to help businesses extend their development capabilities, access specialized technical expertise, and manage changing project requirements. Whether you need additional developers for an existing team or a dedicated team to build a digital product, we align our approach with your goals, project scope, and delivery needs.",
    ],
    listTitle: "Our engagement options include:",
    items: [
      {
        label: "Dedicated Development Teams",
        text: "A team focused on your project's objectives and development requirements.",
      },
      {
        label: "Staff Augmentation",
        text: "Skilled professionals who integrate with your existing team to fill technical or resource gaps.",
      },
      {
        label: "Project-Based Engagement",
        text: "Development services organized around defined deliverables, scope, and milestones.",
      },
      {
        label: "Hybrid Engagement Models",
        text: "A combination of internal resources and external expertise based on your project needs.",
      },
    ],
    outro: [
      "Our goal is to provide the right technical capabilities, maintain effective collaboration, and support efficient project delivery.",
    ],
  },
  {
    id: 6,
    question: "Does Greyloops Provide SLAs and Post-Launch Support?",
    intro: [
      "Greyloops provides ongoing support and maintenance options to help businesses maintain the reliability, security, and performance of their digital products after deployment. Support arrangements are tailored to the system's complexity, operational requirements, and agreed service levels.",
    ],
    listTitle: "Our post-launch support services may include:",
    items: [
      {
        label: "Technical Support and Troubleshooting",
        text: "Assistance with technical issues and system-related challenges.",
      },
      {
        label: "Bug Fixes and Security Updates",
        text: "Addressing software defects and applying relevant updates.",
      },
      {
        label: "System Monitoring and Optimization",
        text: "Evaluating system performance and identifying opportunities for improvement.",
      },
      {
        label: "Enhancements and Feature Updates",
        text: "Improving existing functionality based on evolving business needs and user feedback.",
      },
    ],
    outro: [
      "Where applicable, Service-Level Agreements (SLAs) can define support availability, response times, responsibilities, and performance expectations. Our focus is to help keep your digital solutions reliable, secure, and aligned with your long-term business goals.",
    ],
  },
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
];

const EMPTY_FORM = {
  name: "",
  email: "",
  service: "",
  countryCode: "+1",
  phone: "",
  project: "",
};

export default function FAQContact() {
  const [openItems, setOpenItems] = useState(FAQS.map((faq) => faq.id));
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone") setPhoneError("");
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return /^[0-9]{7,14}$/.test(cleanPhone);
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
        headers: { "Content-Type": "application/json" },
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
    "rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-xs transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";
  const labelClass = "mb-1 block text-xs font-semibold text-slate-700";

  return (
    <section className="relative w-full bg-slate-50 pb-16 pt-6 lg:pb-24 lg:pt-10">
      {/* Background Dot Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start px-2 text-left sm:px-4">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Help &amp; Answers</span>
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            <span className="text-blue-600">Frequently Asked </span>
            <span className="text-slate-900">Questions</span>
          </motion.h2>
        </div>

        {/* Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-8 px-2 sm:px-4 lg:grid-cols-12"
        >
          {/* Left Column Wrapper for Sticky Behavior */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="sticky top-28 flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />

              <div className="relative z-10 flex flex-1 flex-col">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      Thank you for the message.
                    </h3>
                    <p className="mt-2 text-base font-semibold text-blue-600 sm:text-lg">
                      We will get back to you.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData(EMPTY_FORM);
                      }}
                      className="mt-8 rounded-xl bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl">
                      Didn&rsquo;t Find What You Were{" "}
                      <span className="text-blue-600">Looking For?</span>
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="faq-name" className={labelClass}>
                            Name
                          </label>
                          <input
                            id="faq-name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className={`${inputClass} w-full`}
                          />
                        </div>
                        <div>
                          <label htmlFor="faq-email" className={labelClass}>
                            Email
                          </label>
                          <input
                            id="faq-email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className={`${inputClass} w-full`}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="faq-service" className={labelClass}>
                          Service you need
                        </label>
                        <select
                          id="faq-service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className={`${inputClass} w-full cursor-pointer`}
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
                        <label htmlFor="faq-phone" className={labelClass}>
                          Contact number
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            aria-label="Country code"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className={`${inputClass} w-[6.25rem] shrink-0 cursor-pointer px-2.5`}
                          >
                            {COUNTRY_CODES.map((c, index) => (
                              <option key={`${c.code}-${index}`} value={c.code}>
                                {c.flag} {c.code}
                              </option>
                            ))}
                          </select>
                          <input
                            id="faq-phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(300) 123-4567"
                            className={`${inputClass} min-w-0 flex-1 ${
                              phoneError
                                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                : ""
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
                        <label htmlFor="faq-project" className={labelClass}>
                          Tell us about your project
                        </label>
                        <textarea
                          id="faq-project"
                          name="project"
                          rows={4}
                          required
                          value={formData.project}
                          onChange={handleChange}
                          placeholder="What are you looking to build?"
                          className={`${inputClass} w-full resize-none`}
                        />
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 pl-5 pr-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 ring-1 ring-white/10 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          <span>
                            {isSubmitting ? "Scheduling..." : "Schedule Free Consultation"}
                          </span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </span>
                        </button>
                      </div>
                    </form>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-600 sm:text-sm">
                      <span className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-600" strokeWidth={2} />
                        24-hour response time
                      </span>
                      <span className="flex items-center gap-2">
                        <ShieldCheck
                          className="h-4 w-4 text-blue-600"
                          strokeWidth={2}
                        />
                        100% Confidential
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion Feed */}
          <div className="order-1 flex flex-col gap-4 lg:order-2 lg:col-span-7">
            {FAQS.map((faq, i) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="group overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] sm:p-7"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-sm font-bold text-blue-600">
                        [{i + 1 < 10 ? `0${i + 1}` : i + 1}]
                      </span>
                      <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4 pt-2 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                          {faq.intro?.map((para) => (
                            <p key={para}>{para}</p>
                          ))}

                          {faq.items && (
                            <div className="pt-2">
                              {faq.listTitle && (
                                <p className="mb-3 font-bold text-slate-900">
                                  {faq.listTitle}
                                </p>
                              )}
                              <ul className="space-y-2.5">
                                {faq.items.map((item) => {
                                  const isObj = typeof item === "object";
                                  return (
                                    <li
                                      key={isObj ? item.label : item}
                                      className="flex items-start gap-3"
                                    >
                                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                                      </span>
                                      <span>
                                        {isObj ? (
                                          <>
                                            <strong className="font-bold text-slate-900">
                                              {item.label}:
                                            </strong>{" "}
                                            {item.text}
                                          </>
                                        ) : (
                                          <span className="font-semibold text-slate-800">
                                            {item}
                                          </span>
                                        )}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                          {faq.outro?.map((para) => (
                            <p key={para}>{para}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}