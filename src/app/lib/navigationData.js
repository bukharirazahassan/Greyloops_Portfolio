//src/app/lib/navigationData.js
import {
  Code2,
  Smartphone,
  Server,
  Database,
  BrainCircuit,
  ShoppingCart,
} from "lucide-react";

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const rawServices = [
  {
    title: "Development & QA",
    icon: Code2,
    links: [
      {
        name: "UX/UI Design",
        description:
          "Greyloops crafts intuitive, high-converting interfaces with human-centered design and scalable design systems.",
      },
      {
        name: "Backend Development",
        description:
          "Greyloops engineers secure, scalable server-side architecture, robust APIs, and high-performance databases.",
      },
      {
        name: "Custom Software Development",
        description:
          "Greyloops builds tailor-made software solutions around your unique workflows and business goals.",
      },
      {
        name: "Software Testing",
        description:
          "Greyloops delivers thorough manual and automated QA to eliminate bugs and ensure flawless performance.",
      },
      {
        name: "SaaS Development",
        description:
          "Greyloops designs secure, scalable multi-tenant SaaS platforms built for seamless subscriptions and uptime.",
      },
      {
        name: "Software Consulting",
        description:
          "Greyloops provides strategic guidance on architecture and tech stacks to optimize your engineering roadmap.",
      },
      {
        name: "Frontend Development",
        description:
          "Greyloops builds fast, responsive, pixel-perfect web apps using modern frameworks like React and Next.js.",
      },
      {
        name: "Enterprise Software Development",
        description:
          "Greyloops architects mission-critical enterprise systems built for scale, security, and integration.",
      },
    ],
  },
  {
    title: "Mobility & Apps",
    icon: Smartphone,
    links: [
      {
        name: "Mobile App Development",
        description:
          "Greyloops builds high-performing, cross-platform apps with smooth experiences on iOS and Android.",
      },
      {
        name: "Android App Development",
        description:
          "Greyloops creates scalable Android apps optimized for performance and Google Play standards.",
      },
      {
        name: "iOS App Development",
        description:
          "Greyloops crafts premium native iOS apps tailored for Apple's ecosystem with sleek, flawless UI.",
      },
      {
        name: "Web App Development",
        description:
          "Greyloops develops fast, responsive progressive web apps that feel native across every browser.",
      },
    ],
  },
  {
    title: "IT Operations",
    icon: Server,
    links: [
      {
        name: "DevOps Services",
        description:
          "Greyloops streamlines delivery with automated CI/CD pipelines, cloud orchestration, and continuous monitoring.",
      },
      {
        name: "Cybersecurity",
        description:
          "Greyloops safeguards your digital assets with threat detection, security audits, and proactive compliance.",
      },
      {
        name: "Infrastructure Design",
        description:
          "Greyloops architects resilient, scalable cloud infrastructure built for uptime and disaster recovery.",
      },
    ],
  },
];

const rawSolutions = [
  {
    title: "Data Solutions",
    icon: Database,
    links: [
      {
        name: "Data Engineering",
        description:
          "Greyloops builds robust data pipelines and architectures that turn raw data into a reliable, real-time asset.",
      },
      {
        name: "BI & Data Analytics",
        description:
          "Greyloops transforms complex data into clear, actionable dashboards that drive smarter business decisions.",
      },
      {
        name: "Data Governance & Security",
        description:
          "Greyloops implements enterprise-grade governance and security frameworks to protect and control your data.",
      },
      {
        name: "Data Migration",
        description:
          "Greyloops ensures seamless, zero-downtime migration of your data across platforms with no data loss.",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    links: [
      {
        name: "Agentic AI",
        description:
          "Greyloops designs autonomous AI agents that execute complex workflows and decisions with minimal human input.",
      },
      {
        name: "Deep Learning",
        description:
          "Greyloops builds advanced neural network models that solve complex pattern recognition and prediction challenges.",
      },
      {
        name: "Generative AI",
        description:
          "Greyloops develops custom generative AI solutions that create content, code, and insights at scale.",
      },
      {
        name: "Predictive Analysis",
        description:
          "Greyloops leverages predictive modeling to forecast trends and help you make proactive, data-driven decisions.",
      },
    ],
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    links: [
      {
        name: "AI Chatbots & Support",
        description:
          "Greyloops builds intelligent chatbots that deliver instant, personalized customer support around the clock.",
      },
      {
        name: "eCommerce Development",
        description:
          "Greyloops builds scalable, secure online stores designed to convert visitors into loyal customers.",
      },
      {
        name: "Voice Commerce",
        description:
          "Greyloops enables voice-powered shopping experiences that make purchasing faster and more accessible.",
      },
    ],
  },
];

// Accepts either a plain string ("Data Engineering") or an object
// ({ name, description }) — kept flexible in case you add more
// columns later without descriptions ready yet.
function withSlugs(raw) {
  return raw.map((col) => ({
    ...col,
    slug: slugify(col.title),
    links: col.links.map((item) => {
      const name = typeof item === "string" ? item : item.name;
      const description = typeof item === "string" ? null : item.description;
      return { name, slug: slugify(name), description };
    }),
  }));
}

export const servicesColumns = withSlugs(rawServices);
export const solutionsColumns = withSlugs(rawSolutions);

export function findServiceBySlug(slug) {
  for (const col of servicesColumns) {
    const found = col.links.find((l) => l.slug === slug);
    if (found) return { ...found, columnTitle: col.title };
  }
  return null;
}

export function findSolutionBySlug(slug) {
  for (const col of solutionsColumns) {
    const found = col.links.find((l) => l.slug === slug);
    if (found) return { ...found, columnTitle: col.title };
  }
  return null;
}