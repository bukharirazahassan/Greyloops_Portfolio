"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "1. Setting the Priorities",
    image: "/images/services/Cybersecurity/Setting_Priorities_v1.png",
    imageAlt: "Setting the Priorities",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "We begin by developing a clear understanding of your business objectives, security concerns, operational priorities, and technology environment. Our consultants work with key stakeholders to identify the areas where cybersecurity can have the greatest business impact and establish priorities based on your specific requirements.",
    activities: [
      "Understanding business objectives and security priorities",
      "Identifying critical applications, systems, data, and business processes",
      "Discussing existing security concerns, incidents, and operational challenges",
      "Understanding regulatory, contractual, and compliance requirements",
      "Identifying security priorities across users, infrastructure, applications, cloud, and data",
      "Establishing clear objectives and expected outcomes for the engagement",
    ],
  },
  {
    step: "02",
    title: "2. Assessing the Current State",
    image: "/images/services/Cybersecurity/Assessing_Current_State_v1.png",
    imageAlt: "Assessing the Current State",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "We assess your existing security posture to establish a practical baseline of how your systems, policies, processes, and controls currently operate. Our team reviews the technology environment and security practices to identify weaknesses, gaps, and areas requiring improvement.",
    activities: [
      "Reviewing existing security policies, procedures, and controls",
      "Assessing infrastructure, networks, cloud environments, and endpoints",
      "Reviewing identity and access management practices",
      "Evaluating authentication, authorization, and privilege management",
      "Assessing application and data security considerations",
      "Reviewing security configurations and potential exposure points",
      "Identifying vulnerabilities, control gaps, and areas of elevated risk",
      "Evaluating existing security monitoring and incident response capabilities",
    ],
  },
  {
    step: "03",
    title: "3. Selecting the Right Security Approaches",
    image: "/images/services/Cybersecurity/Right_Security_Approaches_v1.png",
    imageAlt: "Selecting the Right Security Approaches",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "After identifying security gaps and risks, we determine the security approaches and controls that best fit your environment. Rather than applying every available security measure, we focus on controls that address identified risks and support your operational requirements.",
    activities: [
      "Defining appropriate access control and identity security measures",
      "Evaluating Zero Trust security principles where applicable",
      "Strengthening network segmentation and security boundaries",
      "Improving privileged access controls",
      "Establishing appropriate application and infrastructure security controls",
      "Defining data protection and security requirements",
      "Evaluating security monitoring and detection requirements",
      "Aligning security controls with business priorities and risk levels",
    ],
  },
  {
    step: "04",
    title: "4. Roadmap and Strategic Alignment",
    image: "/images/services/Cybersecurity/Roadmap_Strategic_Alignment_v1.png",
    imageAlt: "Roadmap and Strategic Alignment",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "We translate assessment findings and security priorities into a structured cybersecurity roadmap. The roadmap establishes what should be addressed first, what can be improved over time, and how security initiatives can align with broader technology and business plans.",
    activities: [
      "Prioritizing security improvements based on risk and business impact",
      "Defining short-term security improvements and long-term initiatives",
      "Establishing implementation milestones and dependencies",
      "Mapping security initiatives to business and technology objectives",
      "Defining governance and accountability requirements",
      "Identifying integration requirements across existing systems",
      "Establishing practical implementation priorities",
      "Providing leadership with a structured view of the security improvement journey",
    ],
  },
  {
    step: "05",
    title: "5. Compliance Integration",
    image: "/images/services/Cybersecurity/Compliance_Integration_v1.png",
    imageAlt: "Compliance Integration",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "Security requirements must work alongside the regulatory and compliance obligations that apply to your organization. We incorporate relevant privacy, security, and regulatory requirements into the cybersecurity strategy and implementation approach.",
    activities: [
      "Identifying applicable regulatory and contractual requirements",
      "Mapping security controls to relevant compliance requirements",
      "Addressing requirements related to data protection and privacy",
      "Supporting alignment with standards such as ISO 27001",
      "Considering applicable regulations such as GDPR and HIPAA where relevant",
      "Identifying documentation and governance requirements",
      "Establishing controls that support audit and compliance activities",
      "Maintaining security and compliance considerations throughout the project lifecycle",
    ],
  },
  {
    step: "06",
    title: "6. Deployment and Integration",
    image: "/images/services/Cybersecurity/Deployment_Integration_v1.png",
    imageAlt: "Deployment and Integration",
    // Square (1:1) image fills the square frame edge to edge.
    imageClass: "object-cover",
    description:
      "Once the security strategy and roadmap are defined, we support the implementation of appropriate security controls within your technology environment. Our team considers existing architecture, applications, infrastructure, workflows, and operational requirements during deployment.",
    activities: [
      "Implementing security controls across relevant environments",
      "Configuring identity and access controls",
      "Supporting secure infrastructure and cloud configurations",
      "Integrating security controls with existing systems and workflows",
      "Working with technology vendors and internal technical teams where required",
      "Applying security requirements to applications and infrastructure",
      "Supporting secure configuration and deployment practices",
      "Minimizing operational disruption during implementation",
    ],
  },
];

// Each card sticks a little lower than the previous one, so the next card
// slides up over it and the previous card's top edge stays peeking out.
const stickyTops = [
  "lg:top-28",
  "lg:top-40",
  "lg:top-52",
  "lg:top-64",
  "lg:top-76",
  "lg:top-[88]",
];

export default function CybersecurityProcess() {
  return (
    // NOTE: `overflow-clip` (not `overflow-hidden`) — overflow-hidden turns the
    // section into a scroll container and silently breaks `position: sticky`.
    <section className="relative w-full overflow-clip bg-slate-50 py-32 px-4 sm:px-8 lg:px-16 font-sans text-slate-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 z-0 h-[700px] w-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

      {/* Dot matrix overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[90rem]">
        {/* Top Heading */}
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Cybersecurity Consulting{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </div>

        {/* Overview */}
        <div
          className="w-full rounded-[2.5rem] border border-white/80 bg-white/60 p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl mb-24"
          style={{
            boxShadow:
              "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 10px 30px rgba(0, 0, 0, 0.03)",
          }}
        >
          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:text-xl text-center sm:text-left">
            Our cybersecurity consulting process is designed around your business
            environment, technology landscape, operational requirements, and
            security objectives. We begin by understanding your priorities and
            current security posture, then identify risks, define the right
            security controls, establish a practical roadmap, and support
            implementation and validation. Our approach integrates security,
            governance, compliance, and operational considerations throughout
            the engagement, helping organizations strengthen their defenses
            without unnecessarily disrupting day-to-day operations.
          </p>
        </div>

        {/* Stacked sticky cards.
            The cards are direct children of this container, so it is the
            sticky boundary: card 1 pins, card 2 rises from the bottom and
            slides over it, then both release together at the end. */}
        <div className="relative flex flex-col gap-[40vh] lg:gap-[45vh] pb-24">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`${stickyTops[i]} lg:sticky w-full rounded-[2.5rem] border border-slate-200/70 bg-white p-8 sm:p-12 lg:p-16 shadow-[0_-10px_50px_rgb(15,23,42,0.10)]`}
              style={{ zIndex: 10 + i }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <div className="lg:col-span-5 w-full">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/50 p-4 shadow-md">
                    <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-white">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className={`object-center ${s.imageClass}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                    Step {s.step}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
                    {s.title}
                  </h3>

                  <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg mb-8">
                    {s.description}
                  </p>

                  <h4 className="text-xs font-bold tracking-wider text-slate-900 mb-4 uppercase">
                    Key activities include:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {s.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 mt-0.5">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-medium leading-normal text-slate-700">
                          {activity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}