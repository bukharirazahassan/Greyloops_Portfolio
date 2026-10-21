// src/app/components/services/UxUiDesign.jsx
"use client";

import { useEffect, useRef, useState } from "react";
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
import StartProjectCTA from "../../components/services/StartProjectCTA";

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

const pad = (n) => String(n).padStart(2, "0");

export default function UxUiDesign() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Scroll-synced services (Section 3)
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        }),
      { rootMargin: "-40% 0px -45% 0px" }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i) => {
    setActive(i);
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const current = uiUxServices[active];
  const CurrentIcon = current.icon;

  return (
    <div className="relative w-full overflow-x-clip bg-slate-50 font-sans text-slate-900">
      {/* ONE continuous background for the whole page: dots + blue/indigo glow circles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />
        <div className="absolute left-0 top-[4%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-0 top-[20%] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
        <div className="absolute left-0 top-[38%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-0 top-[56%] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
        <div className="absolute left-0 top-[74%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-0 top-[90%] h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />
      </div>

      {/* All sections sit in one column with the SAME gap between them */}
      <div className="relative z-10 flex flex-col gap-12 pb-12 lg:gap-16 lg:pb-16">
      {/* SECTION 1: Hero */}
      <section className="relative w-full pt-8 sm:pt-10">
        <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8">
          {/* Top Header: Badge, Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-10 max-w-4xl text-center"
          >
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Design System &amp; Interfaces
              </span>
            </div>

            {/* Standard Two-Tone Heading */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              UX/UI Design <span className="text-blue-600">Services</span>
            </h1>

            {/* Header Description */}
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              A great design puts the user first. By understanding real user
              needs, motivations, and pain points, we design products that solve
              the right problems and accelerate digital transformation.
            </p>
          </motion.div>

          {/* Full-Display Large Showcase Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-16 max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-3 sm:p-5 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-2 px-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <div className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-contain object-center"
                >
                  <source src="/video/UXHeader.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>

          {/* Three Standard Light Glassmorphism Feature Cards */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                  30–80% Faster Delivery
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  We use AI-assisted workflows across design, engineering, and QA
                  — so your product reaches users faster and with less rework.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                  Cut Dev Costs by 50%
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  AI-driven automation handles repetitive build and testing tasks,
                  so your budget goes further without cutting scope or quality.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                  Half Team, Same Output
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  Our AI-augmented delivery model compresses what normally
                  requires a large team, so you ship the same scope with fewer
                  people and lower overhead.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 CONTAINER */}
      <div className="contents">
        {/* SECTION 2: Header for Services (Wide Centered Description) */}
        <section className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-5xl text-center"
            >
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Comprehensive UI/UX Design Services{" "}
                <span className="text-blue-600">for Market Success</span>
              </h2>
              <p className="mx-auto max-w-4xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                Our vetted UI/UX design team bridges the gap between complex
                software backend logic and seamless human interaction. We
                provide end-to-end, customized UI/UX solutions across every
                phase of your product lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: SCROLL-SYNCED SERVICES – pinned image on the left, services on the right */}
        <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ───────── Left: pinned image (desktop) – large, whole image always visible ───────── */}
            <div className="hidden lg:col-span-7 lg:block">
              <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center justify-center">
                <div
                  className="relative"
                  style={{ width: "min(100%, 900px, calc(100vh - 10.5rem))" }}
                >
                  <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-blue-400/15 blur-3xl" />

                  {/* Frame: square image area that fills the card edge to edge */}
                  <div className="relative rounded-[2rem] bg-white/70 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.12)] ring-1 ring-white/80 backdrop-blur-xl">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-slate-50">
                      {uiUxServices.map((service, i) => (
                        <motion.div
                          key={service.title}
                          initial={false}
                          animate={{
                            opacity: active === i ? 1 : 0,
                            scale: active === i ? 1 : 1.04,
                          }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0"
                          aria-hidden={active !== i}
                        >
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            priority={i === 0}
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-cover object-center"
                          />
                        </motion.div>
                      ))}

                      {/* Small counter chip (top-left corner) */}
                      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/85 py-1.5 pl-1.5 pr-3.5 shadow-md shadow-slate-900/10 ring-1 ring-white/80 backdrop-blur-xl">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                          <CurrentIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                        </span>
                        <span className="font-mono text-xs font-semibold tabular-nums text-slate-700">
                          {pad(active + 1)} / {pad(uiUxServices.length)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Segmented progress / quick navigation */}
                  <div className="mt-4 flex gap-1.5 px-1" role="tablist" aria-label="Services">
                    {uiUxServices.map((service, i) => (
                      <button
                        key={service.title}
                        type="button"
                        role="tab"
                        aria-selected={active === i}
                        aria-label={service.title}
                        onClick={() => goTo(i)}
                        className="group h-5 flex-1 focus:outline-none"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-500 group-focus-visible:ring-2 group-focus-visible:ring-blue-500 ${
                            i < active
                              ? "bg-blue-300"
                              : i === active
                              ? "bg-blue-600"
                              : "bg-slate-200 group-hover:bg-slate-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ───────── Right: service list ───────── */}
            <ol className="relative space-y-6 lg:col-span-5 lg:space-y-10 lg:pl-10">
              {/* Timeline line (desktop) */}
              <span className="pointer-events-none absolute bottom-6 left-[0.5625rem] top-6 hidden w-px bg-slate-200 lg:block" />

              {uiUxServices.map((service, i) => {
                const Icon = service.icon;
                const isActive = active === i;
                return (
                  <li
                    key={service.title}
                    ref={(el) => (itemRefs.current[i] = el)}
                    data-index={i}
                    className={`relative scroll-mt-32 transition-opacity duration-500 ${
                      isActive ? "" : "lg:opacity-60"
                    }`}
                  >
                    {/* Timeline dot (desktop) */}
                    <span
                      className={`absolute -left-10 top-9 z-10 hidden h-[1.125rem] w-[1.125rem] rounded-full border-4 transition-all duration-500 lg:block ${
                        isActive
                          ? "border-blue-100 bg-blue-600 shadow-md shadow-blue-600/40"
                          : "border-slate-50 bg-slate-300"
                      }`}
                    />

                    <motion.article
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 sm:p-8 lg:flex lg:min-h-[20rem] lg:flex-col lg:justify-center lg:p-10 ${
                        isActive
                          ? "bg-white/90 shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-blue-200"
                          : "bg-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.05)] ring-1 ring-white/80"
                      }`}
                    >
                      {/* Mobile / tablet: image with its own card, shown whole */}
                      <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 lg:hidden">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 760px"
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/25">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-mono text-sm font-semibold text-blue-600">
                          {service.phase}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          / {pad(uiUxServices.length)}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                        {service.description}
                      </p>
                    </motion.article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
            {/* FAQ Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-left max-w-3xl"
            >
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
                <HelpCircle className="h-3.5 w-3.5 text-blue-500" />
                Got Questions?
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
                Frequently asked <span className="text-blue-600">questions</span>
              </h2>
              <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
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
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
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
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
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
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="border-t border-slate-100/80 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                            <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
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

      <StartProjectCTA embedded />
      </div>
    </div>
  );
}