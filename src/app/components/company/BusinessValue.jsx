// src/app/components/company/BusinessValue.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Cpu,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const efficiencyPoints = [
  "Automating manual and repetitive processes to reduce unnecessary effort, minimize errors, and give teams more time to focus on higher-value activities.",
  "Connecting disconnected systems and workflows so information can move efficiently across departments, applications, and business operations.",
  "Improving team coordination and operational visibility by providing centralized access to processes, information, tasks, and business activities.",
  "Accelerating access to critical information so teams can respond faster, make informed decisions, and keep daily operations moving efficiently.",
  "Standardizing business processes to create more consistent, reliable, and measurable ways of working across the organization.",
  "Improving overall productivity and operational performance through technology that is designed around how your teams actually work.",
];

const innovationPoints = [
  "Applying AI and Machine Learning to automate complex tasks, generate insights, improve processes, and support smarter business decisions.",
  "Introducing intelligent automation to simplify workflows, reduce repetitive activities, and create more efficient ways of working.",
  "Modernizing products and services with new digital capabilities that improve customer experiences and operational performance.",
  "Using cloud and modern technology platforms to create flexible foundations that support faster development, deployment, and innovation.",
  "Turning data into new opportunities by using analytics and intelligent solutions to identify trends, improve services, and uncover business insights.",
  "Supporting continuous innovation through scalable technology that allows organizations to experiment, adapt, and introduce new capabilities as business needs evolve.",
];

const scalablePoints = [
  "Supporting growing users and workloads with scalable applications and architectures designed to handle increasing demand while maintaining reliable performance.",
  "Scaling business applications and platforms to support expanding operations, higher transaction volumes, and evolving organizational requirements.",
  "Designing flexible technology architectures that allow systems, features, integrations, and infrastructure to expand as business needs change.",
  "Building scalable cloud and infrastructure environments that provide the capacity, resilience, and resources required for growing technology workloads.",
  "Enabling seamless system integration as organizations add new applications, platforms, services, and third-party technologies to their technology ecosystem.",
  "Preparing technology for long-term growth through maintainable architectures and engineering practices that make it easier to adapt, enhance, and scale over time.",
];

const securityPoints = [
  "Building security into technology from the start by considering security across architecture, development, infrastructure, deployment, and ongoing operations.",
  "Protecting critical data and systems through security controls, access management, encryption, vulnerability management, and secure technology practices.",
  "Strengthening application and infrastructure resilience so systems can remain reliable, available, and responsive as workloads and business demands increase.",
  "Reducing technology and operational risks by identifying vulnerabilities, addressing security gaps, and applying proactive risk management practices.",
  "Supporting business continuity through resilient architectures, monitoring, recovery capabilities, and technology designed to withstand disruptions.",
  "Securing complex technology environments across applications, cloud platforms, infrastructure, enterprise systems, integrations, and connected services as organizations evolve.",
];

const dataPoints = [
  "Turning data into actionable insights by transforming raw and fragmented information into meaningful intelligence that supports business decisions.",
  "Improving visibility across the business through dashboards, reporting, analytics, and centralized access to important performance information.",
  "Identifying trends and opportunities by analyzing business data to uncover patterns, changes, risks, and areas for improvement.",
  "Measuring business performance with relevant metrics and reporting that help teams understand results, track progress, and identify gaps.",
  "Applying AI and advanced analytics to uncover deeper insights, automate analysis, and support more intelligent and informed decision-making.",
  "Enabling data-driven business strategies by creating reliable data foundations that allow organizations to use information consistently across teams, processes, and operations.",
];

const agilityPoints = [
  "Adapting technology to changing requirements with flexible architectures and applications that can evolve as business priorities and operational needs change.",
  "Accelerating the introduction of new capabilities by using modern engineering practices, reusable components, APIs, cloud platforms, and scalable technology foundations.",
  "Streamlining changing business processes through automation and configurable workflows that make it easier to adjust how teams and operations work.",
  "Connecting systems and information through integration capabilities that allow applications, platforms, and services to work together as business environments evolve.",
  "Using cloud capabilities for greater flexibility by enabling organizations to scale resources, support new workloads, and adapt technology environments more efficiently.",
  "Supporting continuous business evolution with maintainable and adaptable technology that helps organizations respond to customer, market, and competitive changes over time.",
];

// Add more objects here (Security, Data, ...) and they stack automatically
const valueCards = [
  {
    title: "Operational Efficiency",
    icon: Cpu,
    image: "/Operational_Efficiency.png",
    alt: "Operational Efficiency Showcase",
    description:
      "We help organizations simplify and elevate everyday operations by transforming manual, fragmented routines into streamlined digital workflows. Through custom software, automation, system integration, and intelligent business applications, we create more connected and efficient ways for teams to manage their work.",
    points: efficiencyPoints,
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    image: "/Innovation_v1.png",
    alt: "Innovation Showcase",
    description:
      "We help organizations turn emerging technologies into practical business capabilities that improve how they operate, serve customers, and create new opportunities. By combining AI, Machine Learning, automation, cloud platforms, data, and modern application engineering, we help businesses adopt innovation with a clear focus on real business outcomes.",
    points: innovationPoints,
  },
  {
    title: "Scalable Growth",
    icon: TrendingUp,
    image: "/Scalable_Growth.png",
    alt: "Scalable Growth Showcase",
    description:
      "We engineer technology that grows alongside your business, providing the scalability, performance, and flexibility needed to support changing demands. From increasing users and workloads to expanding integrations and operations, we build solutions that can evolve without limiting business growth.",
    points: scalablePoints,
  },
  {
    title: "Security & Resilience",
    icon: ShieldCheck,
    image: "/Security_Resilience.png",
    alt: "Security and Resilience Showcase",
    description:
      "We engineer security and resilience into applications, infrastructure, cloud environments, and enterprise systems from the beginning. Our approach helps organizations protect critical data and technology, reduce operational risks, maintain reliable services, and strengthen business continuity as technology environments become more complex.",
    points: securityPoints,
  },
  {
    title: "Data-Driven Decisions",
    icon: BarChart3,
    image: "/Data_Driven_Decisions.png",
    alt: "Data-Driven Decisions Showcase",
    description:
      "We help organizations turn complex data into useful business intelligence that supports better decisions and stronger business performance. Through data engineering, analytics, reporting, dashboards, and AI-powered insights, we make information more accessible, actionable, and valuable across the organization.",
    points: dataPoints,
  },
  {
    title: "Business Agility",
    icon: Rocket,
    image: "/Business_Agility.png",
    alt: "Business Agility Showcase",
    description:
      "We build adaptable technology that helps organizations respond to change faster and operate with greater flexibility. Through modern applications, flexible architectures, cloud capabilities, automation, and integrated systems, we make it easier to evolve processes, introduce new capabilities, and respond to changing business and market requirements.",
    points: agilityPoints,
  },
];


export default function BusinessValue() {
  return (
    // overflow-clip (not overflow-hidden) so position: sticky keeps working
    <section className="relative z-10 w-full overflow-clip bg-slate-50 py-10 sm:py-14">
      {/* Background glow and dot pattern */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-400/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-sky-400/15 blur-[90px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[96rem] px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 lg:items-start">
          {/* Left Column: pinned, centered in the visible area under the navbar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col items-start text-left lg:sticky lg:top-[80px] lg:min-h-[calc(100vh-80px)] lg:justify-center"
          >
            {/* Tag Badge */}
            <div className="flex justify-start">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Strategic Impact
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6">
              Technology That Drives{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Business Value
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-normal leading-relaxed text-slate-600">
              Greyloops focuses on building technology that delivers meaningful value beyond implementation. We align engineering decisions with business objectives to improve operational efficiency, enable innovation, strengthen security, unlock actionable insights from data, and establish scalable digital foundations. By combining business understanding with software engineering, AI, cloud, infrastructure, cybersecurity, and enterprise technology expertise, we help organizations improve performance, respond to changing requirements, and build sustainable capabilities for long-term growth.
            </p>
          </motion.div>

          {/* Right Column: every card pair is a sticky layer. The next pair rises from the bottom and covers the previous one. */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:gap-0">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{ zIndex: index + 1 }}
                  className="lg:sticky lg:top-[80px] lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center"
                >
                  {/* === Your original card + image grid, unchanged === */}
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Card */}
                    <article className="flex flex-col justify-center h-full min-h-[520px] sm:min-h-[580px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.15)] relative">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-[150px] w-[150px] rounded-full bg-blue-400/10 blur-[50px]" />

                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600">
                            <Icon className="h-6 w-6" strokeWidth={1.8} />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {String(valueCards.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5">
                          {item.description}
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-2.5">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                              <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-snug">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>

                    {/* Image */}
                    <div className="relative w-full h-full min-h-[520px] sm:min-h-[580px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-xl flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={768}
                          height={1376}
                          quality={100}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}