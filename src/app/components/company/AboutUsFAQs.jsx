// src/app/components/company/AboutUsFAQs.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Services Does Greyloops Offer?",
    answer:
      "Greyloops provides end-to-end software development and digital transformation services designed to help businesses build, modernize, and scale their technology ecosystems. Our capabilities span product strategy and engineering, UI/UX design, custom web and mobile application development, and enterprise software solutions tailored to specific business requirements.\n\nWe also help organizations modernize legacy systems and adopt emerging technologies, including Artificial Intelligence and Machine Learning, IoT, Cloud Computing, DevOps, Blockchain, and AR/VR. Our expertise extends to custom enterprise platforms, including CRM and ERP solutions, system integrations, and technology modernization initiatives—enabling businesses to improve operational efficiency, enhance digital experiences, and support long-term growth.",
  },
  {
    question: "Does Greyloops Specialize in AI, IoT, Blockchain, and Other Emerging Technologies?",
    answer:
      "Yes. Greyloops helps businesses adopt emerging technologies to modernize operations, improve decision-making, and build scalable digital capabilities. Our teams work across AI, IoT, Blockchain, AR/VR, Cloud, DevOps, Data Analytics, and Cybersecurity, applying these technologies to practical business requirements rather than treating them as standalone technology initiatives.\n\nOur capabilities include:\n\n• Artificial Intelligence (AI) — We develop intelligent systems that use data to automate processes, identify patterns, generate insights, and support faster, data-driven decision-making. AI agents and machine learning solutions can be integrated into business workflows to improve operational efficiency and user experiences.\n• Internet of Things (IoT) — We build connected solutions that integrate devices, sensors, machines, and software platforms, enabling real-time monitoring, data collection, and operational control across environments such as manufacturing, logistics, healthcare, and enterprise operations.\n• Blockchain — We develop secure and transparent blockchain-based solutions for applications such as digital transactions, supply chain visibility, decentralized workflows, and smart contracts, with a focus on traceability, data integrity, and controlled access.\n• Augmented & Virtual Reality (AR/VR) — We create immersive digital experiences for applications including training, education, healthcare, retail, product visualization, and interactive environments.\n• Cloud & DevOps — We modernize applications and infrastructure through cloud-native architectures, automated CI/CD pipelines, infrastructure automation, deployment optimization, and scalable cloud environments that support reliable and efficient software delivery.\n• Data Analytics — We transform business data into actionable insights through data engineering, analytics, visualization, and intelligent reporting, helping organizations identify trends, measure performance, and support informed decision-making.\n• Cybersecurity — We integrate security across applications, infrastructure, cloud environments, and enterprise systems through security assessments, identity and access controls, vulnerability management, continuous monitoring, threat detection, and structured security practices.",
  },
  {
    question: "Does Greyloops Provide Consulting for Digital Transformation and Strategy?",
    answer:
      "Yes. Greyloops provides digital transformation and technology consulting to help businesses align technology investments with their operational objectives, customer needs, and long-term growth strategy. We work closely with business and technology stakeholders to understand existing challenges, identify opportunities, and establish practical technology strategies that deliver measurable business value.\n\nOur consulting approach typically covers:\n\n• Discovery & Assessment — We assess existing applications, infrastructure, workflows, technology environments, and business objectives to identify gaps, risks, inefficiencies, and opportunities for improvement.\n• Strategic Roadmapping — We translate business objectives into a structured technology roadmap, defining priorities, initiatives, dependencies, and implementation phases aligned with available resources and business goals.\n• Technology Modernization — We help organizations modernize legacy applications and infrastructure through cloud adoption, application modernization, automation, system integration, and the introduction of technologies that improve scalability and operational efficiency.\n• Change Enablement — We support technology transformation by aligning processes, teams, and workflows with new systems, helping organizations transition effectively and adopt modern technology across their operations.\n• Performance & Continuous Improvement — We establish measurable objectives and technology performance indicators to evaluate outcomes, identify improvement opportunities, and continuously refine digital capabilities after implementation.\n\nOur approach extends beyond technology implementation. Greyloops remains focused on ensuring that transformation initiatives are aligned with business requirements, operational realities, and measurable outcomes throughout the engagement.",
  },
  {
    question: "Can Greyloops Modernize Legacy Applications and Enterprise Systems?",
    answer:
      "Yes. Greyloops helps organizations modernize legacy applications and enterprise systems through application re-engineering, architecture modernization, cloud migration, API modernization, system integration, and workflow automation. We focus on improving scalability, maintainability, security, performance, and operational efficiency while supporting business continuity.",
  },
  {
    question: "Does Greyloops Provide Custom Enterprise Software Development?",
    answer:
      "Yes. Greyloops develops custom enterprise software tailored to complex business processes, operational workflows, and organizational requirements. Our capabilities include enterprise applications, business process management platforms, workflow automation, internal business systems, data management solutions, CRM and ERP platforms, and integrated enterprise environments.",
  },
  {
    question: "Does Greyloops Provide Cloud and DevOps Services?",
    answer:
      "Yes. Greyloops provides cloud and DevOps services to help organizations build scalable infrastructure and improve software delivery. Our capabilities include cloud architecture, application migration, cloud-native development, CI/CD implementation, infrastructure automation, deployment optimization, monitoring, and cloud environment management.",
  },
  {
    question: "Does Greyloops Provide Cybersecurity Services?",
    answer:
      "Yes. Greyloops provides cybersecurity services across applications, cloud environments, infrastructure, and enterprise systems. Our capabilities include security assessments, vulnerability management, configuration reviews, identity and access controls, security validation, continuous monitoring, threat detection, and structured security practices throughout the software development and deployment lifecycle.",
  },
  {
    question: "Does Greyloops Provide Software Quality Assurance and Testing?",
    answer:
      "Yes. Greyloops provides comprehensive software quality assurance throughout the development lifecycle. Our QA capabilities include functional, performance, security, integration, regression, and usability testing, combining automated testing where appropriate with manual validation to improve reliability, identify defects, and ensure applications meet defined business and technical requirements.",
  },
  {
    question: "Does Greyloops Develop Custom Web and Mobile Applications?",
    answer:
      "Yes. Greyloops develops custom web and mobile applications designed around specific business and customer requirements. Our services cover application architecture, frontend and backend development, API engineering, third-party integrations, responsive web experiences, mobile applications, cloud deployment, and quality assurance.",
  },
  {
    question: "Does Greyloops Provide API Development and System Integration?",
    answer:
      "Yes. Greyloops develops secure and scalable APIs that connect applications, databases, cloud services, third-party platforms, and enterprise systems. Our integration services help organizations establish reliable data exchange, streamline workflows, connect disconnected systems, and create unified digital ecosystems.",
  },
  {
    question: "How Does Greyloops Approach Software Development Projects?",
    answer:
      "Greyloops follows a structured and collaborative development approach that begins with understanding business requirements and defining the appropriate technical strategy. We establish architecture, scope, priorities, milestones, and delivery plans before progressing through iterative development, quality assurance, deployment, and continuous improvement.",
  },
  {
    question: "Does Greyloops Provide Ongoing Software Maintenance and Support?",
    answer:
      "Yes. Greyloops provides ongoing software maintenance and technical support to help applications remain secure, reliable, and aligned with evolving business requirements. Support can include issue resolution, performance optimization, security updates, infrastructure improvements, application enhancements, and continuous technical maintenance.",
  },
];

export default function AboutUsFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full text-slate-900">
      {/* ================= ABOUT US FAQS SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20">
        {/* Consistent ambient glow shades spanning across pages */}
        <div className="pointer-events-none absolute -left-24 top-20 z-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[150px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 z-0 h-[550px] w-[550px] rounded-full bg-sky-400/15 blur-[170px]" />

        {/* Continuous dot-grid texture overlay matching About Us */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[88rem] px-6">
          {/* Header Section (Left-Aligned Standard) */}
          <div className="mb-12 max-w-3xl text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Got Questions?
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
          </div>

          {/* Accordion List with full width and left alignment matching standard sections */}
          <div className="mx-auto w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="w-full overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-blue-300/60 hover:bg-white/80"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-6 text-left sm:p-7"
                  >
                    <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 text-left">
                          <p className="whitespace-pre-line text-base font-medium leading-relaxed text-slate-700">
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
  );
}