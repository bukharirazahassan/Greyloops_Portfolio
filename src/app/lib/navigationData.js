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
        description: "Intuitive interfaces, built to convert.",
      },
      {
        name: "Backend Development",
        description: "Secure, scalable server-side architecture.",
      },
      {
        name: "Software Testing",
        description: "Manual & automated QA, zero bugs.",
      },
      {
        name: "SaaS Development",
        description: "Multi-tenant platforms built for scale.",
      },
      {
        name: "Software Consulting",
        description: "Strategic guidance on architecture & stack.",
      },
      {
        name: "Frontend Development",
        description: "Fast, pixel-perfect apps in React/Next.js.",
      },
      {
        name: "Enterprise Software Development",
        description: "Mission-critical systems, built to scale.",
      },
    ],
  },
  {
    title: "Mobility & Apps",
    icon: Smartphone,
    links: [
      {
        name: "Mobile App Development",
        description: "Cross-platform apps, smooth on both.",
      },
      {
        name: "Android App Development",
        description: "Scalable apps, built for Google Play.",
      },
      {
        name: "iOS App Development",
        description: "Premium native apps for Apple's ecosystem.",
      },
      {
        name: "Web App Development",
        description: "Fast PWAs that feel native everywhere.",
      },
    ],
  },
  {
    title: "IT Operations",
    icon: Server,
    links: [
      {
        name: "DevOps Services",
        description: "Automated CI/CD & cloud orchestration.",
      },
      {
        name: "Cybersecurity",
        description: "Threat detection, audits & compliance.",
      },
      {
        name: "Infrastructure Design",
        description: "Resilient cloud infra, built for uptime.",
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
        description: "Reliable pipelines, real-time data.",
      },
      {
        name: "BI & Data Analytics",
        description: "Clear dashboards, smarter decisions.",
      },
      {
        name: "Data Governance & Security",
        description: "Enterprise-grade governance & protection.",
      },
      {
        name: "Data Migration",
        description: "Zero-downtime migration, zero data loss.",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    links: [
      {
        name: "Agentic AI",
        description: "Autonomous agents, minimal human input.",
      },
      {
        name: "Deep Learning",
        description: "Neural networks for complex prediction.",
      },
      {
        name: "Generative AI",
        description: "Custom AI for content & code.",
      },
      {
        name: "Predictive Analysis",
        description: "Forecast trends, act proactively.",
      },
    ],
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    links: [
      {
        name: "AI Chatbots & Support",
        description: "Instant, personalized 24/7 support.",
      },
      {
        name: "eCommerce Development",
        description: "Secure stores built to convert.",
      },
      {
        name: "Voice Commerce",
        description: "Voice-powered shopping, made simple.",
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