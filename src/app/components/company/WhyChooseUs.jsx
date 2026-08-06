"use client";
import CaseStudiesShowcase from "../../components/CaseStudiesShowcase";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import {
  Award,
  Wrench,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Layout,
  Code,
  BarChart3,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  Headphones,
  Monitor,
  Users,
  Code2,
  Apple,
  Cpu,
  Watch,
  Tv,
  Database,
  ArrowRightLeft,
  BrainCircuit,
  Bot,
  ShoppingBag,
  Mic,
} from "lucide-react";

// Services grid data matching the provided screenshot and HTML
const servicesData = [
  {
    title: "Web Development",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
    icon: Code,
  },
  {
    title: "Mobile Development",
    description:
      "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    icon: Monitor,
  },
  {
    title: "QA & Testing",
    description:
      "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
    icon: CheckCircle,
  },
  {
    title: "IT Counsultancy",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
    icon: Headphones,
  },
  {
    title: "Dedicated Team",
    description:
      "Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.",
    icon: Users,
  },
];

// Updated Solutions Data with Icons & Descriptions
const solutionsData = [
  {
    title: "Data Solutions",
    icon: Database,
    description:
      "Transform raw data into actionable insights with enterprise data warehousing, pipeline automation, and advanced analytics.",
  },
  {
    title: "Data Migration",
    icon: ArrowRightLeft,
    description:
      "Seamlessly transition your critical enterprise data to cloud environments with zero downtime and guaranteed data integrity.",
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "Empower your business processes using custom machine learning algorithms, predictive modeling, and intelligent automation.",
  },
  {
    title: "AI Chatbots & Support",
    icon: Bot,
    description:
      "Deliver 24/7 intelligent customer engagement with conversational AI agents tailored to your business workflow.",
  },
  {
    title: "eCommerce Development",
    icon: ShoppingBag,
    description:
      "Build high-converting, scalable digital storefronts equipped with secure checkout integrations and seamless user experiences.",
  },
  {
    title: "Voice Commerce",
    icon: Mic,
    description:
      "Pioneer hands-free shopping experiences powered by natural language processing and voice-activated search solutions.",
  },
];

// Feature points for the light section
const featurePoints = [
  {
    title: "Experience",
    description: "Our great team of more than 1,400 software experts.",
    icon: Award,
  },
  {
    title: "Quick Support",
    description: "We'll help you test bold new ideas while sharing yours.",
    icon: Wrench,
  },
];

// Stats bar data
const stats = [
  { value: 330, suffix: "+", label: "Active Clients" },
  { value: 850, suffix: "+", label: "Projects Done" },
  { value: 25, suffix: "+", label: "Team Advisors" },
  { value: 10, suffix: "+", label: "Glorious Years" },
];

// Concept section cards
const conceptCards = [
  {
    num: "01",
    title: "Product Design",
    description:
      "Transform ideas into intuitive, user-centered digital products through strategic UX research, modern UI design, rapid prototyping, and seamless user experiences.",
    icon: Layout,
    link: "/services",
  },
  {
    num: "02",
    title: "Development",
    description:
      "Build scalable, secure, and high-performance web, mobile, and enterprise applications using modern technologies, agile development, and cloud-native architecture.",
    icon: Code,
    link: "/services",
  },
  {
    num: "03",
    title: "Data Analytics",
    description:
      "Turn complex data into actionable insights with advanced analytics, interactive dashboards, AI-powered reporting, and real-time business intelligence solutions.",
    icon: BarChart3,
    link: "/services",
  },
  {
    num: "04",
    title: "Cyber Security",
    description:
      "Protect your business with proactive cybersecurity strategies, threat detection, vulnerability assessments, compliance solutions, and continuous security monitoring.",
    icon: ShieldCheck,
    link: "/services",
  },
];

// Reusable Animated Counter Component
function AnimatedCounter({ from = 0, to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const techData = [
  { title: "WEB", icon: Code2 },
  { title: "ANDROID", icon: Smartphone },
  { title: "IOS", icon: Apple },
  { title: "IOT", icon: Cpu },
  { title: "WEARABLES", icon: Watch },
  { title: "TV", icon: Tv },
];

// Staggered Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function WhyChooseUsPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= 1. CONCEPT & BUSINESS IDEA SECTION (DARK THEME) ================= */}
      <section className="relative w-full bg-[#17132e] pb-24 pt-12 text-white sm:pb-32 sm:pt-16 lg:pt-20">
        {/* Subtle background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Shimmer sweep animation */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-blue-400 sm:text-sm"
            >
              {"//"} WHY CHOOSE US
            </motion.span>

            <motion.h2
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Design the Concept <br />
              <span className="text-white">of Your Business Idea Now</span>
            </motion.h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {conceptCards.map((card, idx) => {
              const Icon = card.icon;
              const isFirst = idx === 0;

              return (
                <motion.div
                  key={card.title}
                  custom={idx + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`group relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 transition-all duration-300 ${
                    isFirst
                      ? "bg-white text-slate-900 shadow-xl"
                      : "border border-white/10 bg-[#211c40] text-white hover:border-blue-400/50 hover:bg-[#28224c]"
                  }`}
                >
                  <span
                    className={`absolute -right-2 -top-4 select-none text-7xl font-black transition-opacity duration-300 ${
                      isFirst
                        ? "text-slate-100"
                        : "text-white/5 group-hover:text-white/10"
                    }`}
                  >
                    {card.num}
                  </span>

                  <div>
                    <h3
                      className={`text-xl font-extrabold sm:text-2xl ${
                        isFirst ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isFirst ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <Link
                      href={card.link}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-2.5 ${
                        isFirst
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-blue-400 hover:text-blue-300"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                      LEARN MORE
                    </Link>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-tl-2xl sm:h-14 sm:w-14 sm:rounded-tl-3xl ${
                        isFirst
                          ? "bg-sky-400 text-white"
                          : "bg-white/5 text-blue-300 group-hover:bg-blue-600/30 group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* OVERLAPPING COUNTER CARDS */}
          <div className="relative z-40 -mb-28 mt-10 grid grid-cols-1 gap-6 sm:-mb-36 md:grid-cols-2">
            {/* Counter 1 */}
            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative min-h-[190px] overflow-hidden rounded-md shadow-2xl sm:min-h-[220px]"
            >
              <Image
                src="/bg-counter-1.jpg"
                alt="Countries worldwide background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-sky-500/40" />

              <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-8 md:p-10">
                <h3 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  <AnimatedCounter to={15} suffix="+" />
                </h3>
                <h4 className="mt-1.5 text-lg font-bold text-white sm:mt-2 sm:text-xl lg:text-2xl">
                  Countries Worldwide
                </h4>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment.
                </p>
              </div>
            </motion.div>

            {/* Counter 2 */}
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative min-h-[190px] overflow-hidden rounded-md shadow-2xl sm:min-h-[220px]"
            >
              <Image
                src="/bg-counter-2.jpg"
                alt="Happy customers background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-purple-600/50" />

              <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-8 md:p-10">
                <h3 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  <AnimatedCounter to={23} suffix="k" />
                </h3>
                <h4 className="mt-1.5 text-lg font-bold text-white sm:mt-2 sm:text-xl lg:text-2xl">
                  Happy Customers
                </h4>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHY CHOOSE US SECTION (WHITE THEME) ================= */}
      <section className="relative w-full overflow-visible bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pb-16 pt-36 sm:pb-24 sm:pt-44 md:pt-48">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* MAIN CONTENT GRID */}
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT: Image */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative lg:col-span-5"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-400/25 via-indigo-300/15 to-transparent blur-2xl sm:-inset-6 lg:rounded-[3rem]" />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-blue-900/10 sm:aspect-[4/3] lg:aspect-[3/4] lg:rounded-[2rem]">
                <Image
                  src="/WhyChooseUs.png"
                  alt="Why choose Greyloops"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* RIGHT: Content */}
            <div className="lg:col-span-7">
              <motion.span
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Why Choose Us
              </motion.span>

              <motion.h2
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:mb-5 sm:text-3xl lg:text-4xl lg:leading-[1.15] xl:text-[2.75rem]"
              >
                Your Partner for{" "}
                <span className="text-blue-600">Software Innovation</span>
              </motion.h2>

              <motion.p
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-600 sm:mb-10 sm:text-base lg:text-lg"
              >
                Greyloops is the partner of choice for many of the world&rsquo;s
                leading enterprises, SMEs and technology challengers. We help
                businesses elevate their value through custom software
                development, product design, QA and consultancy services.
              </motion.p>

              {/* Feature points */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                {featurePoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      custom={index + 4}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 sm:mb-4 sm:h-14 sm:w-14">
                        <Icon
                          className="h-6 w-6 sm:h-7 sm:w-7"
                          strokeWidth={1.8}
                        />
                      </div>
                      <h5 className="mb-2 text-base font-bold text-zinc-900 sm:text-lg">
                        {point.title}
                      </h5>
                      <div className="mb-3 h-px w-10 bg-gradient-to-r from-blue-500 to-orange-400" />
                      <p className="text-sm leading-relaxed text-zinc-600">
                        {point.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-8 sm:mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600 sm:w-auto"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ================= STATS BAR ================= */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative z-30 mt-12 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-white via-slate-50 to-blue-50/60 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:mt-16 sm:rounded-3xl lg:-mt-14"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-blue-100/60 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

            <div className="relative grid grid-cols-2 gap-6 px-5 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-4 lg:py-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-center sm:text-left"
                >
                  <p className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 sm:mt-2 sm:justify-start sm:text-xs">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. COMBINED SERVICES & CTA SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pb-16 pt-20 text-slate-900 lg:pb-24 lg:pt-28">
        {/* Radial Dot Pattern Layer */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 70% 20%, black 40%, transparent 100%)",
          }}
        />

        {/* Shimmer Animation Overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent" />
        </div>

        {/* Ambient Light Glow Accents */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-sm">
                {"//"} OUR SERVICES
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                We Offer a Wide <br />
                Variety of IT Services
              </h2>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link
                href="/it-services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/35 sm:w-auto"
              >
                ALL SERVICES
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* 6 Services Grid (3x2 layout) */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="group flex gap-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-zinc-900 transition-colors duration-300 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Integrated CTA Banner Card with Motion Animation & No Outer Border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mt-20 overflow-hidden rounded-3xl bg-slate-50 px-8 py-16 shadow-2xl sm:px-14 sm:py-20 lg:px-20"
          >
            {/* Background Image Container spanning full width */}
            <div className="pointer-events-none absolute inset-0 h-full w-full">
              <Image
                src="/bg-cta1-home1.png"
                alt="Let's build your website"
                fill
                priority
                className="object-cover object-right opacity-80"
              />
              {/* Light gradient mask: keeps text readable on the left while leaving the right fully visible */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent" />
            </div>

            {/* Left-Aligned Text & CTA Button */}
            <div className="relative z-10 max-w-xl text-left">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-sm">
                  {"//"} We Carry More Than Just Good Coding Skills
                </span>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                  Let&apos;s Build Your{" "}
                  <span className="text-blue-600">Website!</span>
                </h2>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35"
                >
                  CONTACT US
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 4. COMBINED SOLUTIONS SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-20 text-slate-900 lg:py-28">
        {/* Dot Grid Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Animated Shimmer */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent" />
        </div>

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full border border-slate-200" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full border border-blue-100" />

        {/* Ambient Lights */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[32rem] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-orange-100/40 blur-[120px]" />

        {/* Outer Layout Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          {/* ================= Header ================= */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-3xl"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                Our Solutions
              </span>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Intelligent Solutions
                <br />
                <span className="text-blue-600">
                  Built for Modern Enterprises
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Empower your organization with scalable AI, cloud-native
                platforms, enterprise automation, cybersecurity, and intelligent
                business solutions engineered for sustainable digital
                transformation.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link
                href="/solutions"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600 sm:w-auto"
              >
                Explore Solutions
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>

          {/* ================= Solutions Grid ================= */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
            {solutionsData.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] animate-glow-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Icon
                    className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 animate-float text-blue-50"
                    strokeWidth={1.5}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-0 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-8">
                    <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                      {solution.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 transition-all duration-300 group-hover:gap-2 sm:mt-8 sm:text-sm">
                    Learn More
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SOLUTIONS HERO BANNER ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative left-1/2 right-1/2 mt-20 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-slate-50 lg:mt-28"
        >
          <div className="relative min-h-[640px] w-full lg:min-h-[720px]">
            {/* Background Image - Positioned Right */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <div className="relative h-full w-full translate-x-12 sm:translate-x-16 lg:translate-x-24">
                <Image
                  src="/bg-solution-section.png"
                  alt="Greyloops Solutions"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-right"
                />
              </div>
            </div>

            {/* Soft Mask Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent sm:w-2/3 lg:w-1/2" />

            {/* Dot Grid Texture Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage:
                  "radial-gradient(ellipse 80% 70% at 30% 50%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 70% at 30% 50%, black 40%, transparent 100%)",
              }}
            />

            {/* Animated Shimmer Overlay */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent" />
            </div>

            {/* Main Hero Container */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-6 lg:px-8 lg:py-16 py-12">
              {/* Top Row Content (Left Side Info - Force moved further left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="-ml-3 sm:-ml-8 lg:-ml-12 w-full max-w-xl text-left"
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                  Intelligent Enterprise Solutions
                </span>

                {/* Heading */}
                <h2 className="mt-5 text-left text-3xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Empower Your Business
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                    With AI &amp; Digital Innovation
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-lg text-left text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-8 lg:text-lg">
                  Greyloops delivers intelligent enterprise solutions that
                  combine Artificial Intelligence, cloud technologies, data
                  analytics, and automation to help organizations innovate
                  faster, optimize operations, and unlock sustainable business
                  growth.
                </p>

                {/* Responsive Buttons */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/solutions"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Explore Solutions
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-5 sm:w-5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-blue-200 bg-white/90 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-white sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Talk to Our Experts
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Bottom Floating Stats Bar - Modern Dark Glassmorphism Frame with Dynamic Glow */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 flex w-full justify-start lg:justify-end"
              >
                <div className="group relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:p-7">
                  {/* Modern Animated Border Glow & Ambient Spotlight Background */}
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-25 blur-xl transition-opacity duration-500 group-hover:opacity-50" />
                  <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl transition-all duration-500 group-hover:bg-blue-500/30" />

                  {/* Animated Shimmer Line */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
                  </div>

                  <div className="relative z-10 grid grid-cols-3 gap-4 text-center divide-x divide-slate-800/80">
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="px-2"
                    >
                      <h3 className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl lg:text-4xl">
                        150+
                      </h3>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 sm:text-xs">
                        Successful Projects
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="px-2"
                    >
                      <h3 className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl lg:text-4xl">
                        98%
                      </h3>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 sm:text-xs">
                        Client Satisfaction
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="px-2"
                    >
                      <h3 className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl lg:text-4xl">
                        24/7
                      </h3>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 sm:text-xs">
                        Technical Support
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </section>

      <CaseStudiesShowcase />
    </div>
  );
}
