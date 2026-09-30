"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

// Distance from the top of the viewport where the image stays pinned (128px = old `top-32`)
const PIN_OFFSET_PX = 128;

const services = [
  {
    id: "managed-security",
    title: "Managed Security Services",
    paragraphs: [
      "We provide ongoing security management across applications, cloud environments, infrastructure, and enterprise systems to continuously identify security risks and strengthen protective controls. Our managed approach covers security monitoring, vulnerability assessment, cloud security, and security infrastructure, helping maintain consistent security practices across the technology environment.",
      "Our managed security services are adapted to the organization's applications, infrastructure, cloud architecture, access requirements, and operational environment. This allows security teams to maintain better visibility into potential threats, address vulnerabilities based on risk, and continuously improve security controls as systems and requirements evolve.",
    ],
    focusTitle: "Security Focus",
    focusItems: [
      {
        title: "Managed Threat Detection & Response",
        description:
          "Ongoing monitoring, security event analysis, and structured response coordination to help detect and address potential threats quickly across your environment.",
      },
      {
        title: "Managed Cloud Security",
        description:
          "Continuous security posture management and configuration reviews tailored for cloud environments, workloads, and containerized deployments.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Regular scanning, prioritization, and tracking of system vulnerabilities across applications, infrastructure, and endpoints to reduce exposure windows.",
      },
      {
        title: "Security Infrastructure Design",
        description:
          "Architectural guidance and operational configuration for core security controls, firewalls, IAM systems, and logging pipelines.",
      },
    ],
  },
  {
    id: "application-protection",
    title: "Application Protection",
    paragraphs: [
      "We implement application protection measures to safeguard web and mobile applications against security risks while protecting sensitive business and customer data. Our approach focuses on secure code practices, controlled application access, cloud application security, and data encryption to strengthen application-level protection.",
      "Our application security measures are adapted to the application's architecture, deployment environment, data sensitivity, and access requirements, helping reduce vulnerabilities and maintain the confidentiality and integrity of application data.",
    ],
    focusTitle: "Application Security Focus",
    focusItems: [
      {
        title: "Continuous Code Review",
        description:
          "Identify security weaknesses and coding vulnerabilities through ongoing code analysis.",
      },
      {
        title: "Mobile Device Management",
        description:
          "Apply security policies and access controls to protect applications and data on mobile devices.",
      },
      {
        title: "Cloud Application Security",
        description:
          "Strengthen cloud-hosted applications through secure configurations, access management, and ongoing security oversight.",
      },
      {
        title: "Data Encryption",
        description:
          "Protect sensitive application data through encryption during storage and transmission.",
      },
    ],
  },
  {
    id: "network-protection",
    title: "Network Protection",
    paragraphs: [
      "We strengthen network environments against unauthorized access, malicious traffic, and service disruption through layered security controls. Our approach covers network protection, traffic security, communication channels, and access controls to help maintain a secure and reliable technology environment.",
      "Network security measures are adapted to the organization's infrastructure, network architecture, connectivity requirements, and operational environment, helping reduce exposure to external threats while strengthening internal security controls.",
    ],
    focusTitle: "Network Security Focus",
    focusItems: [
      {
        title: "Firewall Protection",
        description:
          "Control and filter network traffic based on defined security policies.",
      },
      {
        title: "DDoS Protection",
        description:
          "Reduce the impact of malicious traffic and attempts to disrupt network availability.",
      },
      {
        title: "Email Security",
        description:
          "Protect organizational email channels against malicious messages, unauthorized access, and common email-based threats.",
      },
      {
        title: "Security Controls Implementation",
        description:
          "Establish and strengthen network security controls based on infrastructure and organizational requirements.",
      },
    ],
  },
  {
    id: "security-assessment",
    title: "Security Assessment",
    paragraphs: [
      "We assess applications, infrastructure, networks, and operating environments to identify security weaknesses and understand the organization's overall security posture. Our assessments provide practical findings that help prioritize risks and determine where security controls can be strengthened.",
      "Assessment activities are adapted to the technology environment, system architecture, business requirements, and security objectives, providing a structured view of vulnerabilities, configuration risks, and areas requiring improvement.",
    ],
    focusTitle: "Security Assessment Focus",
    focusItems: [
      {
        title: "Infrastructure Audit",
        description:
          "Review infrastructure configurations, security controls, and potential exposure across critical systems.",
      },
      {
        title: "Penetration Testing",
        description:
          "Identify exploitable weaknesses through controlled security testing of applications, networks, and systems.",
      },
      {
        title: "Stress Testing",
        description:
          "Evaluate system resilience and behavior under demanding workloads and conditions.",
      },
      {
        title: "Environment Assessment",
        description:
          "Examine the overall technology environment to identify security gaps, configuration risks, and improvement opportunities.",
      },
    ],
  },
  {
    id: "mfa",
    title: "Multi-Factor & Two-Factor Authentication",
    paragraphs: [
      "We strengthen application and system access by requiring users to verify their identity through multiple authentication factors. This adds an additional security layer beyond passwords and helps reduce the risk of unauthorized access caused by compromised credentials.",
      "Authentication controls are adapted to user roles, application requirements, access environments, and security policies, supporting stronger identity verification across digital applications and enterprise systems.",
    ],
    focusTitle: "Authentication Security Focus",
    focusItems: [
      {
        title: "Multi-Factor Authentication",
        description:
          "Combine multiple verification factors to strengthen user identity validation.",
      },
      {
        title: "Two-Factor Authentication",
        description:
          "Add a second verification step to protect accounts beyond password-based access.",
      },
      {
        title: "Access Security",
        description:
          "Strengthen authentication controls for applications, systems, and sensitive resources.",
      },
      {
        title: "Identity Verification",
        description:
          "Apply controlled authentication processes based on defined security and access requirements.",
      },
    ],
  },
  {
    id: "encryption",
    title: "Encryption",
    paragraphs: [
      "We protect sensitive data by applying encryption controls that help keep information unreadable to unauthorized users during storage and transmission. This helps reduce the impact of data exposure, interception, or unauthorized access across applications, infrastructure, and enterprise systems.",
      "Encryption practices are adapted to the type of data, application architecture, communication channels, and security requirements, supporting stronger confidentiality and protection of sensitive business and customer information.",
    ],
    focusTitle: "Encryption Security Focus",
    focusItems: [
      {
        title: "Data at Rest",
        description:
          "Protect stored data from unauthorized access or exposure.",
      },
      {
        title: "Data in Transit",
        description:
          "Secure information as it moves between applications, systems, and users.",
      },
      {
        title: "Sensitive Data Protection",
        description:
          "Apply encryption to critical business and customer information.",
      },
      {
        title: "Encryption Controls",
        description:
          "Implement appropriate encryption practices based on security and compliance requirements.",
      },
    ],
  },
  {
    id: "endpoint-security",
    title: "Endpoint Security",
    paragraphs: [
      "We protect laptops, workstations, mobile devices, and other endpoints that connect to organizational systems and networks. Our approach helps reduce endpoint exposure to malware, unauthorized access, and other security threats while maintaining the integrity of devices and business environments.",
      "Endpoint security measures are adapted to device types, user access requirements, operating environments, and organizational security policies, helping maintain consistent protection across distributed and workplace environments.",
    ],
    focusTitle: "Endpoint Security Focus",
    focusItems: [
      {
        title: "Device Protection",
        description:
          "Strengthen laptops, workstations, and mobile devices against security threats.",
      },
      {
        title: "Threat Prevention",
        description:
          "Reduce exposure to malware, unauthorized activity, and endpoint-based attacks.",
      },
      {
        title: "Access Controls",
        description:
          "Apply security controls to manage and protect endpoint access to organizational resources.",
      },
      {
        title: "Endpoint Monitoring",
        description:
          "Maintain visibility into endpoint activity and potential security risks.",
      },
    ],
  },
];

const glassShadow = {
  boxShadow:
    "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 10px 30px rgba(0, 0, 0, 0.03)",
};

function ServiceInfo({ service, index }) {
  return (
    <div className="flex flex-col gap-10">
      <div
        className="rounded-3xl border border-white/80 bg-white/60 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl"
        style={glassShadow}
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-5xl font-extrabold leading-none tracking-tighter text-transparent sm:text-6xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/40 via-sky-400/20 to-transparent" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
          {service.title}
        </h3>
        {service.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-base font-normal leading-relaxed text-slate-600 sm:text-lg ${
              i < service.paragraphs.length - 1 ? "mb-6" : ""
            }`}
          >
            {p}
          </p>
        ))}
      </div>

      <div className="pt-2">
        <h4 className="text-xl font-bold tracking-tight text-slate-900">
          {service.focusTitle}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {service.focusItems.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start rounded-3xl border border-white/80 bg-white/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/90 hover:shadow-[0_20px_40px_rgb(59,130,246,0.08)]"
            style={glassShadow}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 shadow-sm backdrop-blur-md mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h5 className="text-lg font-bold tracking-tight text-slate-900 mb-3">
              {item.title}
            </h5>
            <p className="text-sm font-normal leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CybersecurityOffer() {
  const containerRef = useRef(null);
  const imageCardRef = useRef(null);

  useEffect(() => {
    let target = 0; // where the image should be (px, downward from its top position)
    let current = 0; // smoothed position actually rendered
    let maxTravel = 0;
    let raf = null;

    const measure = () => {
      const container = containerRef.current;
      const card = imageCardRef.current;
      if (!container || !card) return;

      // Single-column layout on small screens: no pinned motion.
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      maxTravel = isDesktop
        ? Math.max(0, container.offsetHeight - card.offsetHeight)
        : 0;
    };

    const update = () => {
      const container = containerRef.current;
      if (!container) return;
      const top = container.getBoundingClientRect().top;

      // One image follows the scroll through ALL the information
      // (both services) and stops at the very end of the last card.
      target = Math.max(0, Math.min(maxTravel, PIN_OFFSET_PX - top));
    };

    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) > 0.05) {
        current += diff * 0.1; // lower = floatier
        const card = imageCardRef.current;
        if (card) card.style.transform = `translate3d(0, ${current}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    current = target;
    const card = imageCardRef.current;
    if (card) card.style.transform = `translate3d(0, ${current}px, 0)`;
    raf = requestAnimationFrame(tick);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-20 px-6 sm:px-12 lg:px-24 font-sans text-slate-950">
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Cybersecurity Services{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>
        </div>

        {/* ONE grid: a single image on the left, ALL information on the right */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start relative"
        >
          <div className="lg:col-span-2">
            <div
              ref={imageCardRef}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/85 bg-white/40 p-4 shadow-[0_20px_50px_rgb(0,0,0,0.06)] backdrop-blur-2xl"
              style={{ willChange: "transform" }}
            >
              <div className="relative h-[620px] w-full rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/services/Cybersecurity/managed_security_services.png"
                  alt="Managed Security Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-20 lg:gap-24">
            {services.map((service, index) => (
              <ServiceInfo key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}