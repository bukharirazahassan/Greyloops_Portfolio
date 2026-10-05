//src/app/components/company/OurValues.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, TrendingUp, ShieldCheck, Target, Sprout } from "lucide-react";

export default function OurValues() {
  return (
    <div className="w-full text-slate-900">
      {/* ================= OUR VALUES SECTION ================= */}
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
          {/* Section Header */}
          <div className="mb-12 max-w-3xl text-left">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Guiding Principles
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We Own the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Outcomes
              </span>
            </h2>
          </div>

          {/* ===== BLOCK 1: ROI (image right, card top-left) ===== */}
          <div className="relative mx-auto mt-12 max-w-7xl">
            {/* Image pushed to the right on desktop so the card can sit in the left gap */}
            <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-3xl shadow-xl lg:ml-auto lg:w-[74%]">
              <Image
                src="/return_on_investment_v1.png"
                alt="We Keep Our Eye on the ROI"
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Glass card: top-left corner, overlapping the image edge */}
            <div className="relative z-20 mt-6 w-full lg:absolute lg:left-0 lg:top-0 lg:mt-0 lg:w-[46%] lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl sm:p-10"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-blue-600 shadow-sm backdrop-blur-md">
                    <TrendingUp className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    We Keep Our Eye on the{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                      ROI
                    </span>
                  </h3>

                  <p className="text-base font-medium leading-relaxed text-slate-700 lg:text-[17px]">
                    We don’t build technology just for the sake of building it.
                    Every solution should have a clear purpose and bring real
                    value to your business. We look at how each feature,
                    workflow, and technical decision can improve the way your
                    business works, save time and resources, and support growth.
                    From the first idea to the final product, we stay focused on
                    making your technology investment worthwhile.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== BLOCK 2: Responsibilities (image left, card top-right) ===== */}
          <div className="relative mx-auto mt-16 max-w-7xl lg:mt-24">
            {/* Image on the left; the right gap is reserved for the card */}
            <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-3xl shadow-xl lg:mr-auto lg:w-[74%]">
              <Image
                src="/own_responsibilities.png"
                alt="We Own Responsibilities"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Glass card: top-right corner, overlapping the image edge */}
            <div className="relative z-20 mt-6 w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[46%] lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl sm:p-10"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-blue-600 shadow-sm backdrop-blur-md">
                    <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    We Own{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                      Responsibilities
                    </span>
                  </h3>

                  <p className="text-base font-medium leading-relaxed text-slate-700 lg:text-[17px]">
                    We take ownership of every project from planning to
                    delivery. Our team brings together experienced strategists,
                    designers, and developers who work with modern technologies,
                    reliable development practices, and strong security
                    standards. This allows us to adapt to different business
                    needs, solve challenges effectively, and deliver
                    high-quality solutions without unnecessary delays or
                    compromises.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== BLOCK 3: Results-Driven (image right, card top-left) ===== */}
          <div className="relative mx-auto mt-16 max-w-7xl lg:mt-24">
            {/* Image pushed to the right so the card can sit in the left gap */}
            <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-3xl shadow-xl lg:ml-auto lg:w-[74%]">
              <Image
                src="/results_driven.png"
                alt="Results-Driven"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Glass card: top-left corner, overlapping the image edge */}
            <div className="relative z-20 mt-6 w-full lg:absolute lg:left-0 lg:top-0 lg:mt-0 lg:w-[46%] lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl sm:p-10"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-blue-600 shadow-sm backdrop-blur-md">
                    <Target className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Results-
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                      Driven
                    </span>
                  </h3>

                  <p className="text-base font-medium leading-relaxed text-slate-700 lg:text-[17px]">
                    We stay focused on what matters most: delivering results
                    that create real value for our clients. We combine data,
                    experience, and practical thinking to make better decisions,
                    solve problems effectively, and continuously improve our
                    work. By keeping business goals at the center of what we do,
                    we build solutions that support meaningful and lasting
                    growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== BLOCK 4: Continuous Growth (image left, card top-right) ===== */}
          <div className="relative mx-auto mt-16 max-w-7xl lg:mt-24">
            {/* Image on the left; the right gap is reserved for the card */}
            <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-3xl shadow-xl lg:mr-auto lg:w-[74%]">
              <Image
                src="/continuous_growth.png"
                alt="Continuous Growth"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Glass card: top-right corner, overlapping the image edge */}
            <div className="relative z-20 mt-6 w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[46%] lg:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-xl sm:p-10"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-blue-600 shadow-sm backdrop-blur-md">
                    <Sprout className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Continuous{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                      Growth
                    </span>
                  </h3>

                  <p className="text-base font-medium leading-relaxed text-slate-700 lg:text-[17px]">
                    We believe there is always room to learn, improve, and do
                    things better. Our team continues to grow through hands-on
                    experience, new technologies, knowledge sharing, and ongoing
                    development. We embrace new challenges, learn from every
                    project, and turn what we learn into better ideas, stronger
                    solutions, and lasting value for our clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}