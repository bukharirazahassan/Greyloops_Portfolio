// src/app/components/company/ProvenExpertise.jsx
"use client";

import { Image as ImageIcon } from "lucide-react";

const stats = [
  {
    id: "experience",
    value: "11",
    suffix: "+",
    label: ["Years of", "Experience"],
    description:
      "delivering enterprise technology consulting and digital engineering solutions",
    image: "/years_experience.png",
    imageAlt: "Years of experience",
  },
  {
    id: "experts",
    value: "50",
    suffix: "+",
    label: ["Technology", "Experts"],
    description:
      "bringing expertise across software engineering, AI, cloud, cybersecurity, and enterprise technology",
    image: "/technology_experts.png",
    imageAlt: "Technology experts",
  },
  {
    id: "solutions",
    value: "500",
    suffix: "+",
    label: ["Solutions", "Delivered"],
    description:
      "across consulting, software engineering, enterprise applications, AI, cloud, and digital transformation",
    image: "/solutions_delivered.png",
    imageAlt: "Solutions delivered",
  },
  {
    id: "ai-data",
    value: "100",
    suffix: "+",
    label: ["AI & Data", "Solutions"],
    description:
      "applying artificial intelligence, machine learning, and data engineering to solve complex business challenges",
    image: "/ai_data_solutions.png",
    imageAlt: "AI and data solutions",
  },
  {
    id: "industries",
    value: "20",
    suffix: "+",
    label: ["Industries", "Served"],
    description:
      "applying technology expertise across diverse business, operational, and industry environments",
    image: "/industries_served.png",
    imageAlt: "Industries served",
  },
  {
    id: "clients",
    value: "100",
    suffix: "+",
    label: ["Clients &", "Projects"],
    description:
      "delivering secure, scalable, and business-focused technology solutions from strategy through implementation",
    image: "/clients_projects.png",
    imageAlt: "Clients and projects",
  },
];

function StatCard({ stat }) {
  return (
    <article className="group flex w-[20rem] shrink-0 flex-col justify-between gap-6 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/70 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_70px_rgba(37,99,235,0.18)] sm:w-[24rem] sm:p-7 xl:w-[27rem] xl:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* Number: reduced from text-6xl / sm:text-7xl / xl:text-[5.5rem] */}
          <span className="text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
            {stat.value}
            <span className="text-blue-600">{stat.suffix}</span>
          </span>
          <p className="text-xs font-bold uppercase leading-snug tracking-wide text-slate-700 sm:text-sm">
            {stat.label[0]}
            <br />
            {stat.label[1]}
          </p>
        </div>

        <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base xl:text-lg">
          {stat.description}
        </p>
      </div>

      <div className="relative aspect-[10/7] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-slate-900/5">
        {stat.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={stat.image}
            alt={stat.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-blue-300">
            <ImageIcon className="h-10 w-10" strokeWidth={1.5} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProvenExpertise() {
  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-slate-50 py-10 lg:min-h-[calc(100vh-80px)] lg:pt-8 lg:pb-12">
      <style jsx global>{`
        @keyframes proven-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .proven-track {
          animation: proven-marquee 55s linear infinite;
        }
        .proven-marquee:hover .proven-track,
        .proven-marquee:focus-within .proven-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .proven-track {
            animation: none;
          }
          .proven-marquee {
            overflow-x: auto;
          }
          .proven-dup {
            display: none;
          }
        }
      `}</style>

      {/* Standard Light Theme: Background dots pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Standard Light Theme: Soft blue shaded glowing circles background accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        {/* Heading: Left-aligned single line header matching DeliverTransformation standard style */}
        <div className="relative z-10 flex flex-col items-start px-2 text-left sm:px-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            By the Numbers
          </span>

          <h2 className="mx-0 mt-3 max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <span className="text-slate-900">Proven Expertise.</span>{" "}
            <span className="text-blue-600">Measurable Impact.</span>
          </h2>
        </div>
      </div>

      {/* ───── Continuous marquee (full width, fades out at both edges) ───── */}
      <div
        className="proven-marquee relative z-10 mt-6 w-full overflow-hidden py-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] lg:mt-6"
        role="region"
        aria-label="Our numbers"
      >
        <div className="proven-track flex w-max">
          <div className="flex shrink-0 gap-6 pr-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

          <div className="proven-dup flex shrink-0 gap-6 pr-6" aria-hidden="true">
            {stats.map((stat) => (
              <StatCard key={`${stat.id}-copy`} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}