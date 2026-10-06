// src/app/components/company/StrategyImprovement.jsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const NAV_HEIGHT = 80; // fixed navbar height (px)
const PIN_TOP = NAV_HEIGHT + 12; // where the image frame pins (px from top of screen)
const FRAME_MAX_WIDTH = "78rem"; // max frame width (1248px)
const SCROLL_LENGTH = "520vh"; // extended scroll track length to accommodate all images sequentially

const lifecycleImages = [
  {
    src: "/Strategy_Improvement_v1.png",
    alt: "From Strategy to Continuous Improvement Overview",
  },
  {
    src: "/Architecture_Design_v1.png",
    alt: "Architecture and Design Phase",
  },
  {
    src: "/Engineering_Development_v1.png",
    alt: "Engineering and Development Phase",
  },
  {
    src: "/Quality_Security_v1.png",
    alt: "Quality and Security Assurance",
  },
  {
    src: "/Deployment_Integration_v1.png",
    alt: "Deployment and Integration Phase",
  },
  {
    src: "/Monitoring_Improvement_v1.png",
    alt: "Monitoring and Continuous Improvement",
  },
];

export default function StrategyImprovement() {
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: [`start ${PIN_TOP}px`, "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // Transform mappings for layers 1 through 5 sliding up sequentially
  const y1 = useTransform(progress, [0.05, 0.22], ["100%", "0%"]);
  const y2 = useTransform(progress, [0.24, 0.41], ["100%", "0%"]);
  const y3 = useTransform(progress, [0.43, 0.60], ["100%", "0%"]);
  const y4 = useTransform(progress, [0.62, 0.79], ["100%", "0%"]);
  const y5 = useTransform(progress, [0.81, 0.98], ["100%", "0%"]);

  const slideTransforms = [null, y1, y2, y3, y4, y5];

  return (
    // overflow-clip so position: sticky keeps working seamlessly
    <section className="relative z-10 w-full overflow-clip bg-slate-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background ambient blue glow circles */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-blue-400/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-sky-400/15 blur-[90px]" />

      {/* Background dot-grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[96rem] px-6">
        <div className="flex w-full flex-col items-center">
          {/* Header Content & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center sm:mb-16"
          >
            <div className="flex justify-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Delivery Lifecycle
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              From Strategy to Continuous{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Improvement
              </span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Greyloops follows a structured delivery lifecycle that connects business strategy, design, engineering, deployment, and continuous improvement. We work collaboratively throughout the journey to ensure technology remains aligned with business objectives, performs reliably in production, and evolves as your organization grows.
            </p>
          </motion.div>

          {/* Scroll track height scaled for all sequential images */}
          <div
            ref={trackRef}
            className="w-full"
            style={{ height: SCROLL_LENGTH }}
          >
            {/* Pinned frame */}
            <div
              className="sticky mx-auto w-full"
              style={{
                top: PIN_TOP,
                maxWidth: `min(${FRAME_MAX_WIDTH}, calc((100vh - ${PIN_TOP + 16}px) * 1376 / 768 * 0.92))`,
              }}
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl">
                {lifecycleImages.map((img, index) => {
                  if (index === 0) {
                    return (
                      <div
                        key={img.src}
                        className="relative flex h-auto w-full items-center justify-center"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1376}
                          height={768}
                          quality={100}
                          className="h-auto w-full object-cover"
                          priority
                        />
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={img.src}
                      style={{ y: slideTransforms[index] }}
                      className="absolute inset-0 will-change-transform shadow-[0_-24px_60px_-20px_rgba(15,23,42,0.5)]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={1376}
                        height={768}
                        quality={100}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}