"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What does cybersecurity consulting involve?",
    answer:
      "Cybersecurity consulting involves assessing your current security posture, identifying risks and vulnerabilities, defining appropriate security controls, and developing a practical roadmap to strengthen your organization's security.",
  },
  {
    question: "How do you assess our current cybersecurity posture?",
    answer:
      "We review your existing applications, infrastructure, cloud environments, access controls, security policies, configurations, and monitoring capabilities to identify security gaps and prioritize areas requiring improvement.",
  },
  {
    question: "Can you help with cybersecurity compliance?",
    answer:
      "Yes. We incorporate applicable security, privacy, and regulatory requirements into the cybersecurity strategy, including alignment with standards and regulations such as ISO 27001, GDPR, and HIPAA where applicable.",
  },
  {
    question: "Do you provide penetration testing and security validation?",
    answer:
      "Yes. Depending on the engagement requirements, security validation can include vulnerability assessments, penetration testing, configuration reviews, and controlled security scenarios to identify weaknesses and validate implemented controls.",
  },
  {
    question: "Can you secure cloud and enterprise environments?",
    answer:
      "Yes. Our cybersecurity approach can address cloud infrastructure, enterprise systems, applications, identities, data, access controls, configurations, and security monitoring across your technology environment.",
  },
  {
    question: "How do you prioritize cybersecurity risks?",
    answer:
      "We evaluate identified vulnerabilities, control gaps, business dependencies, and potential impact to establish practical security priorities. This helps organizations focus resources on risks requiring the most immediate attention.",
  },
  {
    question: "Can you integrate security into our existing systems?",
    answer:
      "Yes. We design and implement security controls around your existing applications, infrastructure, cloud environments, and operational workflows while considering business requirements and minimizing unnecessary disruption.",
  },
  {
    question: "Do you provide ongoing cybersecurity support?",
    answer:
      "Yes. Cybersecurity requires continuous improvement as technologies, vulnerabilities, threats, and business requirements evolve. Ongoing support can include security reviews, monitoring, incident response, control improvements, and security optimization.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-32 px-6 sm:px-12 lg:px-24 font-sans text-slate-950">
      {/* Full-screen background image - cybersecurity-hero-v1.png with light thematic treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/Cybersecurity/cybersecurity-hero-v1.png"
          alt="Cybersecurity Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 mix-blend-luminosity"
        />
      </div>

      {/* Blue Ambient Glow Circles Matching Theme */}
      <div className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

      {/* Full Section Ambient Light Dot Matrix Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Got Questions?
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Accordion List with Light Glassmorphic Style */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/80 bg-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-slate-200/50 backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/90 overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 10px 30px rgba(0, 0, 0, 0.03)",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 shadow-sm backdrop-blur-md transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 text-slate-600 text-base sm:text-lg leading-relaxed border-t border-slate-200/60 pt-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}