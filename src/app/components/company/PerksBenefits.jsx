// src/app/components/company/PerksBenefits.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

const PERKS = [
  {
    title: "Paid Leaves",
    image: "/Paid_Leaves.png",
    description:
      "Take time off when you need it. An annual quota of paid leaves lets you enjoy vacations, handle personal matters, or simply rest and recharge.",
  },
  {
    title: "Child Education Support",
    image: "/Child_Education_Support_v2.png",
    description:
      "Greyloops supports your family's future by helping with your children's education, backing their learning journey and overall growth.",
  },
  {
    title: "Gym Passport Facility",
    image: "/Gym_Passport_Facility.png",
    description:
      "Your well-being matters to us. A gym passport gives you access to multiple gyms in the city, so you can stay active and keep your energy high.",
  },
  {
    title: "Provident Fund",
    image: "/Provident_Fund.png",
    description:
      "Plan for a worry-free retirement. Our provident fund helps you build savings steadily and secure your financial future.",
  },
  {
    title: "Professional Growth Allowance",
    image: "/Professional_Growth_Allowance.png",
    description:
      "We back your ambition to learn. An allowance for certifications helps you build new skills and reach higher levels of excellence.",
  },
  {
    title: "Growing and Dynamic Team",
    image: "/Growing _Dynamic_Team.png",
    description:
      "A team that keeps growing brings fresh ideas and constant learning, with plenty of room for personal and professional development.",
  },
  {
    title: "Medical Coverage",
    image: "/Medical_Coverage.png",
    description:
      "Comprehensive in-patient and out-patient coverage gives you peace of mind. It is an essential benefit, and we hope you rarely need it!",
  },
  {
    title: "Flexible Timings",
    image: "/Flexible_Timings.png",
    description:
      "Not an early riser? No problem. Start your day when it works best for you and enjoy a flexible, supportive work culture.",
  },
  {
    title: "Gaming Facility",
    image: "/Gaming_Facility.png",
    description:
      "Work is better when it's fun. Game breaks bring the team together and keep the office lively and relaxed.",
  },
  {
    title: "Annual Increment",
    image: "/Annual_Increment.png",
    description:
      "We value the time and effort you invest with us. Annual increments recognize your contribution, a relationship built on mutual respect.",
  },
  {
    title: "Work From Home",
    image: "/Work_From_Home.png",
    description:
      "Enjoy up to 3 days of work from home each month, a good balance between the comfort of home and productive teamwork.",
  },
  {
    title: "Performance-Based Bonuses",
    image: "/Performance_Based_Bonuses.png",
    description:
      "Great performance doesn't go unnoticed. Dedicated, high-performing team members are rewarded with bonuses.",
  },
];

// Changed from 6 to 8 so 2 rows of 4 grid cards are fully filled
const INITIAL_PAGE_SIZE = 8;
const STEP_SIZE = 4;

function FlipCard({ perk, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % STEP_SIZE) * 0.06 }}
      className="list-none"
    >
      <article
        tabIndex={0}
        aria-label={`${perk.title}. ${perk.description}`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        onBlur={() => setFlipped(false)}
        className="group h-64 cursor-pointer rounded-[1.75rem] [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-72"
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side: Full Cover Image + Inverted Cut Corner Heading */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-50 shadow-[0_20px_50px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">
            
            {/* Full Cover Image */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <Image
                src={perk.image}
                alt={perk.title}
                fill
                priority={index < 4}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Left Corner Notch Cut-Out Box */}
            <div className="absolute bottom-0 left-0 z-10 flex items-center rounded-tr-2xl bg-slate-50 px-4 py-2.5 shadow-sm">
              
              {/* Curved Top Inverted Fillet Effect */}
              <div className="pointer-events-none absolute -top-4 left-0 h-4 w-4 rounded-bl-2xl bg-transparent shadow-[-6px_6px_0_6px_#f8fafc]" />
              
              {/* Curved Right Inverted Fillet Effect */}
              <div className="pointer-events-none absolute bottom-0 -right-4 h-4 w-4 rounded-bl-2xl bg-transparent shadow-[-6px_6px_0_6px_#f8fafc]" />

              {/* Direct Heading Inside Corner Notch */}
              <h3 className="text-xs font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-sm">
                {perk.title}
              </h3>

            </div>

          </div>

          {/* Back Side: Description */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-7 text-center shadow-[0_24px_60px_rgba(37,99,235,0.3)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
            <h3 className="relative text-lg font-bold tracking-tight text-white sm:text-xl">
              {perk.title}
            </h3>
            <span className="relative block h-1 w-8 rounded-full bg-white/60" />
            <p className="relative text-sm font-medium leading-relaxed text-blue-50 sm:text-[0.9375rem]">
              {perk.description}
            </p>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

export default function PerksBenefits() {
  const [visible, setVisible] = useState(INITIAL_PAGE_SIZE);
  const hasMore = visible < PERKS.length;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-20">
      {/* Standard Light Theme: Dot Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-10 top-1/3 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
        {/* Header: heading left, description right */}
        <div className="mb-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-100/80 sm:text-sm"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>Life at Greyloops</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              <span>Perks &amp; Benefits </span>
              <span className="text-blue-600">Built Around You</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:pt-2"
          >
            <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              We believe great work comes from people who feel supported. Our benefits are designed to help you stay healthy, keep learning, and enjoy the balance that lets you do your best work.
            </p>
          </motion.div>
        </div>

        {/* Flip cards grid (4 columns) */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {PERKS.slice(0, visible).map((perk, i) => (
            <FlipCard key={perk.title} perk={perk} index={i} />
          ))}
        </ul>

        {/* Load More / Show Less button at bottom */}
        {PERKS.length > INITIAL_PAGE_SIZE && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                hasMore
                  ? setVisible((v) => Math.min(v + STEP_SIZE, PERKS.length))
                  : setVisible(INITIAL_PAGE_SIZE)
              }
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-blue-600 shadow-md shadow-slate-900/5 ring-1 ring-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {hasMore ? "Load More" : "Show Less"}
              {hasMore ? (
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={2.5} />
              ) : (
                <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}