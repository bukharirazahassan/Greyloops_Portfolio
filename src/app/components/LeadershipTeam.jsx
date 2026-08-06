"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Haseeb Saif",
    role: "VP OPERATIONS",
    image: "/member1.jpeg",
  },
  {
    name: "Awais Ayub",
    role: "CHEIF TECHNOLOGY OFFICER",
    image: "/member2.jpeg",
  },
  {
    name: "Amalia Bruno",
    role: "CTO OF COMPANY",
    image: null, // Empty image slot
  },
  {
    name: "Nabeekh Abid",
    role: "CEO OF COMPANY",
    image: null, // Empty image slot
  },
  {
    name: "Neeta Abid",
    role: "HR MANAGER",
    image: "/IMG_8855-Large.jpeg",
  },
  {
    name: "Syed Esar",
    role: "Client Relationship Manager",
    image: "/IMG_8860-Large.jpeg",
  },
  {
    name: "Sehrish Fatima",
    role: "SQA MANAGER",
    image: "/IMG_8861-Large.jpeg",
  },
  {
    name: "Harry M",
    role: "SENIOR DEV",
    image: "/harry-Large.jpeg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/50 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture - Precise Faint Grid Pattern to Match Image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Center Ambient Blue Shade Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-100/60 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Our Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Our <span className="text-blue-600">Leadership Team</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            <p>
              Greyloops is led by a team of experienced and passionate IT
              professionals who are committed to helping our customers succeed.
              Our leadership team has a deep understanding of the challenges
              and opportunities that businesses face in today&rsquo;s digital world,
              bringing expertise in the latest IT technologies and trends.
            </p>
            <p className="text-sm text-slate-500 sm:text-base">
              Responsible for setting our strategic direction and maintaining a
              strong team culture that fosters innovation and collaboration, our
              leaders ensure we deliver the highest quality of service to every
              client.
            </p>
          </motion.div>
        </div>

        {/* ================= TEAM GRID ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group flex flex-col items-center border-b border-r border-slate-100 bg-white"
            >
              {/* Image Box / Full Animated Abstract Canvas */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                {member.image ? (
                  <>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />
                  </>
                ) : (
                  /* Full Dynamic Mesh-Gradient & Animated Light-Orb Frame */
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-950">
                    {/* Rotating Primary Gradient Sphere */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 0.9, 1],
                        rotate: [0, 180, 360],
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-60 blur-2xl"
                    />

                    {/* Secondary Flowing Accent Blob */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                        x: [0, -30, 20, 0],
                        y: [0, 30, -30, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-gradient-to-br from-violet-600 via-blue-700 to-indigo-900 opacity-70 blur-2xl"
                    />

                    {/* Continuous Shimmer Light Beam */}
                    <motion.div
                      initial={{ x: "-100%", y: "-100%" }}
                      animate={{ x: "200%", y: "200%" }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-white/15 to-transparent"
                    />

                    {/* Subtle Overlay Pattern Texture */}
                    <div
                      className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Floating Glow Pill Badge */}
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/60 px-4 py-2 shadow-2xl backdrop-blur-xl"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-white/90">
                        Profile Incoming
                      </span>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Text Info Box */}
              <div className="w-full bg-slate-50/80 py-6 text-center backdrop-blur-sm transition-colors duration-300 group-hover:bg-blue-50/40">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-blue-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ================= BOTTOM MEETING FRAME (Matching Light Theme) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative mt-16 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-12"
        >
          {/* Matching Light-Dot Background Texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Ambient Soft Blue Gradient Shades */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl transition-all duration-500 group-hover:bg-blue-200/70" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            {/* Frame Content */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
                <Calendar className="h-3.5 w-3.5 text-blue-600" />
                Schedule a Consultation
              </span>

              <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                Ready to collaborate with our{" "}
                <span className="text-blue-600">leadership team?</span>
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Book a direct meeting with our technical experts and leadership
                to discuss your project vision, digital transformation strategy, or custom AI solution.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
              >
                <Calendar className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
                <span>Book a Meeting</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}