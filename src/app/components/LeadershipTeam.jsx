"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
];

export default function LeadershipTeam() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-20 text-slate-900 sm:py-28">
      {/* Background Dot Texture - Matches Site Theme */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative Glow Blobs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
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
            className="mt-4 space-y-3 text-base text-slate-600 sm:text-lg"
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
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-blue-900/5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group flex flex-col items-center bg-white ${
                index !== teamMembers.length - 1
                  ? "lg:border-r lg:border-slate-100"
                  : ""
              }`}
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
      </div>
    </section>
  );
}