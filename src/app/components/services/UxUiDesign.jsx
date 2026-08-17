"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  DollarSign,
  Users,
  Search,
  Layout,
  Smartphone,
  Monitor,
  UserCheck,
  Layers,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import StartProjectCTA from "../../components/services/StartProjectCTA" 

const uiUxServices = [
  {
    phase: "01",
    title: "Web Design & UX Audit Services",
    description:
      "Is your application losing users? Our UI UX company performs data-driven UI/UX design audits to identify the key friction points and transform your existing platform into an optimized conversion engine.",
    href: "/services/ux-audit",
    icon: Search,
    image: "/images/services/ux-audit.jpg",
    imageAlt: "UI/UX audit dashboard with heatmap and usability scores",
    color: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-500",
  },
  {
    phase: "02",
    title: "SaaS Interface Design",
    description:
      "We specialize in simplifying high-density data networks. Our team designs responsive, scalable dashboards and cloud-native SaaS interfaces that reduce user learning curves and drive long-term platform adoption.",
    href: "/services/saas-design",
    icon: Layout,
    image: "/images/services/saas-design.jpg",
    imageAlt: "SaaS analytics dashboard interface with charts and tables",
    color: "from-indigo-500 to-purple-500",
    lightBg: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    textColor: "text-indigo-500",
  },
  {
    phase: "03",
    title: "Custom Mobile App Design",
    description:
      "Capture the mobile market with pixel-perfect screens. We design mobile app screens around iOS and Android user behavior. Every flow, tap, form, and screen is planned to feel clear on smaller devices.",
    href: "/services/mobile-design",
    icon: Smartphone,
    image: "/images/services/mobile-design.jpg",
    imageAlt: "Mobile app screens showing tasks, stats and calendar UI",
    color: "from-violet-500 to-fuchsia-500",
    lightBg: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-500",
  },
  {
    phase: "04",
    title: "Web UI/UX Design",
    description:
      "We design web interfaces for dashboards, portals, SaaS platforms, and business websites. The goal is to make complex products easier to understand, use, and move through.",
    href: "/services/web-design",
    icon: Monitor,
    image: "/images/services/web-design.jpg",
    imageAlt: "Web portal dashboard layout with component blocks",
    color: "from-sky-500 to-blue-600",
    lightBg: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-500",
  },
  {
    phase: "05",
    title: "HCI Design",
    description:
      "We use user research, interviews, and persona development to design interfaces that match how people actually work. This helps improve usability, reduce confusion, and make daily tasks easier.",
    href: "/services/hci-design",
    icon: UserCheck,
    image: "/images/services/hci-design.jpg",
    imageAlt: "User personas, journey map and interview flow research board",
    color: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-500",
  },
  {
    phase: "06",
    title: "Design Systems & Component Libraries",
    description:
      "Are your developers wasting hours rewriting code for the same buttons, forms, and menus? We build scalable, centralized Figma design systems and reusable component libraries for total visual consistency.",
    href: "/services/design-systems",
    icon: Layers,
    image: "/images/services/design-systems.jpg",
    imageAlt: "Design system layers with buttons, color tokens and typography",
    color: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-500",
  },
];

const faqData = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "CX optimization services cover the process of identifying, measuring, and improving every interaction a customer has with your business across the full lifecycle. This includes customer journey mapping, omnichannel integration, AI-powered analytics, CSAT and NPS program design, workforce optimization, and self-service automation. The goal is to reduce friction at specific touchpoints, improve retention, and increase customer lifetime value using data your team can act on.",
  },
  {
    question: "Why are UX services important for business growth?",
    answer:
      "Customer service improvement focuses on resolving individual support interactions faster or more effectively. CX optimization is broader. It covers the entire customer journey from first contact through post-purchase, including product experience, onboarding, self-service, and every touchpoint in between. You can have excellent customer service scores and still lose customers because the journey outside the support interaction is broken.",
  },
  {
    question: "How can UI services benefit my product?",
    answer:
      "Customer Experience (CX) optimization services in the US typically range from $1,500 to $30,000+ per month for full-service consulting and implementation, with hourly rates varying from $150 to $500+. The exact cost depends heavily on the project scale, the size of your organization, and the pricing model. Greyloops global delivery model reduces typical US consulting rates by 30 to 40 percent, with CX consultants available at $30 to $120 per hour.",
  },
  {
    question: "Does Greyloops offer customized UI/UX solutions?",
    answer:
      "CSAT scores improve when the specific touchpoints driving dissatisfaction are identified and fixed at the journey level, not just measured at the survey level. We connect each CSAT data point to the exact interaction that generated it, identify which journey stages consistently underperform, and build agent and process changes around those specific gaps. Generic training rarely moves CSAT. Targeted journey fixes do.",
  },
  {
    question:
      "How will you deliver the best UI & UX design for my app or website?",
    answer:
      "Creating a complete UI/UX design takes anywhere from 2 weeks to 4+ months, depending on project complexity. Simple redesigns or landing pages take 1–3 weeks, whereas complex enterprise applications or new mobile platforms require 2–4 months to cover research, wireframing, visual design, and user testing. Greyloops as a top 3% UI UX company applies a data-driven approach combining deep audience research with extensive wireframing. Our dedicated UI/UX designers map layouts directly to your technical specifications and validate every single screen through usability testing before your developers touch any code.",
  },
  {
    question: "How long does it take to create UI/UX design?",
    answer:
      "Timelines adapt to your exact product scope. A lightweight startup MVP design takes 2 to 4 weeks, while complex enterprise dashboards or comprehensive custom mobile app design services require 8 to 12 weeks of structured design sprints.",
  },
  {
    question: "How much does UI/UX design cost?",
    answer:
      "Pricing scales with the total number of unique app screens and custom workflows. In the US, UI/UX design typically costs between $1,500 and $150,000+ per project, depending heavily on project complexity, research depth, and team seniority. Hourly rates range from $25 to $250+, with independent freelancers representing the lower end and specialized US agencies the higher end.",
  },
];

export default function UxUiDesign() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-slate-50 font-sans">
      {/* SECTION 1: Hero Section */}
      <section className="relative flex min-h-[80vh] w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 pt-6 pb-24 sm:pt-8 sm:pb-28 lg:pt-10 lg:pb-32">
        {/* Dot Mask for Hero Section */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          }}
        />

        {/* Hero Background Glows */}
        <div className="pointer-events-none absolute -left-20 top-0 z-0 h-[320px] w-[320px] rounded-full bg-blue-300/35 blur-[100px] lg:h-[400px] lg:w-[400px]" />
        <div className="pointer-events-none absolute -right-20 bottom-10 z-0 h-[320px] w-[320px] rounded-full bg-indigo-300/30 blur-[100px] lg:h-[400px] lg:w-[400px]" />

        {/* Hero Content Grid */}
        <div className="relative z-10 mx-auto my-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Design System &amp; Interfaces
            </span>

            {/* HEADER TITLE */}
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                UX/UI Design Services{" "}
              </span>
            </h1>

            {/* HEADER DESCRIPTION */}
            <p className="w-full text-base leading-relaxed text-zinc-600 sm:text-lg">
              A great design puts the user first. By understanding real user
              needs, motivations, and pain points, we design products that solve
              the right problems.
            </p>
          </motion.div>

          {/* Right Column: Hero Graphic/Video */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mb-12 flex justify-center sm:mb-16 lg:col-span-7 lg:mb-20 lg:justify-end"
          >
            <div className="relative w-full max-w-4xl rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:p-3.5">
              <div className="mb-2 flex items-center gap-2 px-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <div className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover object-center"
                >
                  <source src="/video/UXHeader.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <div className="relative z-30 mx-auto -mt-24 max-w-5xl px-6 sm:-mt-28 sm:px-8 lg:-mt-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 ring-1 ring-blue-100/80 transition-colors group-hover:bg-blue-100/80">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                30–80% Faster Delivery
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We use AI-assisted workflows across design, engineering, and QA
                — so your product reaches users faster and with less rework.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-lg shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-blue-400 ring-1 ring-slate-700 transition-colors group-hover:bg-slate-700">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-white sm:text-xl">
                Cut Dev Costs by 50%
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                AI-driven automation handles repetitive build and testing tasks,
                so your budget goes further without cutting scope or quality.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-600 ring-1 ring-indigo-100/80 transition-colors group-hover:bg-indigo-100/80">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Half Team, Same Output
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Our AI-augmented delivery model compresses what normally
                requires a large team, so you ship the same scope with fewer
                people and lower overhead.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 & 3 CONTAINER */}
      <div className="relative w-full bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50">
        {/* Isolated Background Decorative Layer */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 90% 85% at 50% 10%, black 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 85% at 50% 10%, black 30%, transparent 100%)",
            }}
          />
          <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px]" />
          <div className="absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-[120px]" />
        </div>

        {/* SECTION 2: Header for Services */}
        <section className="relative z-10 w-full pt-28 pb-10 sm:pt-32 lg:pt-36">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:text-left"
            >
              <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive UI/UX Design Services{" "}
                </span>
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  for Market Success
                </span>
              </h2>
              <p className="w-full max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Our vetted UI/UX design team bridges the gap between complex
                software backend logic and seamless human interaction. We
                provide end-to-end, customized UI/UX solutions across every
                phase of your product lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: STACKING STICKY CARDS */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 sm:px-10 lg:px-12">
          {uiUxServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="sticky top-20 mb-16 flex min-h-[85vh] items-center justify-center"
                style={{
                  zIndex: index + 10,
                }}
              >
                <div className="relative flex min-h-[85vh] w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 transition-colors duration-300 lg:flex-row">
                  {/* Ambient Dots & Background Glow */}
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <div
                      className={`absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br ${service.color} opacity-15 blur-3xl`}
                    />
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #64748b 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* LEFT SIDE: CARD TEXT CONTENT */}
                  <div className="relative z-10 flex w-full flex-col justify-center p-8 sm:p-12 md:p-16 lg:w-1/2">
                    {/* Badge / Service Counter */}
                    <div className="mb-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20">
                        <Icon className="h-3.5 w-3.5" />
                        {service.phase} — UI/UX Service
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        0{index + 1} / 0{uiUxServices.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-2xl text-lg leading-relaxed font-medium text-slate-700 sm:text-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* RIGHT SIDE: IMAGE CONTAINER WITH VISIBILITY FADE (RIGHT TO LEFT) */}
                  <div className="relative h-[400px] w-full overflow-hidden bg-slate-100 lg:h-auto lg:min-h-full lg:w-1/2">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Left-to-Right Edge Fade Gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/30 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section className="relative z-10 w-full pt-16 pb-28 lg:pt-20 lg:pb-36">
          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-12">
            {/* FAQ Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-left"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur-md">
                <HelpCircle className="h-3.5 w-3.5" />
                Got Questions?
              </span>

              <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Frequently Asked{" "}
                </span>
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Everything you need to know about our design process,
                deliverables, and how we help products scale through
                user-centered UX/UI.
              </p>
            </motion.div>

            {/* FAQ Accordion List */}
            <div className="flex flex-col gap-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-300 bg-white shadow-xl shadow-blue-900/5 ring-1 ring-blue-200"
                        : "border-slate-200/90 bg-white/80 shadow-sm hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7"
                    >
                      <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                        {faq.question}
                      </span>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-blue-50 text-blue-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="border-t border-slate-100 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <StartProjectCTA />
    </div>
  );
}
