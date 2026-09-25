"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import DevOpsChallenges from "@/app/components/services/DevOps/DevOpsChallenges";
import DevOpsProblems from "@/app/components/services/DevOps/DevOpsProblems";
import DevOpsBenefits from "@/app/components/services/DevOps/DevOpsBenefits"
import DevOpsSolutionsDeliver from "@/app/components/services/DevOps/DevOpsSolutionsDeliver"
import DevOpsTechnology from "@/app/components/services/DevOps/DevOpsTechnology"



const NAVBAR_HEIGHT_PX = 80; // match your real header height

const QUESTIONS = [
  "How often do you experience delays in software delivery?",
  "Is your team struggling to maintain code quality and reliability?",
  "Is it difficult to deploy updates and fixes quickly and efficiently?",
  "Are there communication issues between your development and operations teams?",
  "Is it difficult to scale your IT operations to support your company’s growth?",
];

const HERO_EXIT_SLICE = 0.16; // scroll fraction spent on hero-out + title-in, combined
const SCROLL_LENGTH_VH = 80 + (QUESTIONS.length + 1) * 55; // +1 slice reserved for the CTA button
const STEP_Y = 16; // vertical gap between cards

export default function DevOpsServices() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollableDistance = rect.height - viewportH;

      if (scrollableDistance <= 0) {
        setProgress(1);
        return;
      }

      const raw = -rect.top / scrollableDistance;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeProgress);
      }
    };

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Split HERO_EXIT_SLICE into two non-overlapping halves:
  // first half = hero fades/moves out completely; second half = title fades in.
  const halfSlice = HERO_EXIT_SLICE / 2;
  const heroPhase = Math.min(1, progress / halfSlice); // 1 -> hero fully gone
  const titlePhase = Math.min(
    1,
    Math.max(0, (progress - halfSlice) / halfSlice)
  ); // 0 -> 1, only starts once heroPhase has reached 1

  // Everything after the full HERO_EXIT_SLICE is spent on the card column + button.
  const afterHeroRange = Math.max(0.0001, 1 - HERO_EXIT_SLICE);
  const afterHeroProgress = Math.max(
    0,
    (progress - HERO_EXIT_SLICE) / afterHeroRange
  );
  const slotCount = QUESTIONS.length + 1; // +1 for the CTA button
  const perSlot = 1 / slotCount;

  const localReveal = (slotIndex, easeFraction = 0.7) => {
    const start = slotIndex * perSlot;
    const end = start + perSlot * easeFraction;
    return Math.min(1, Math.max(0, (afterHeroProgress - start) / (end - start)));
  };

  const buttonLocal = localReveal(QUESTIONS.length, 0.8);

  return (
    <>
    <section
      ref={containerRef}
      className="relative w-full bg-slate-950"
      style={{ height: `${SCROLL_LENGTH_VH}vh` }}
    >
      <div
        className="sticky flex w-full flex-col items-center overflow-hidden px-6 sm:px-12"
        style={{
          top: `${NAVBAR_HEIGHT_PX}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT_PX}px)`,
        }}
      >
        {/* Pinned background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/DevOps/enterprise_devops.png"
            alt="DevOps Services and Solutions"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        {/* Hero heading + description — fully exits before the title starts */}
        <div
          className="absolute inset-x-0 top-0 z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: 1 - heroPhase,
            transform: `translate3d(0, ${-heroPhase * 30}vh, 0)`,
            pointerEvents: heroPhase > 0.4 ? "none" : "auto",
            willChange: "transform, opacity",
          }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
            <span className="block text-white">DevOps Services and</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
            Streamline software delivery with reliable cloud infrastructure,
            automated deployments, continuous monitoring, and DevOps
            practices built for scalable, high-performing applications.
          </p>
        </div>

        {/* Title + centered card column + CTA — only starts once hero is fully gone */}
        <div
          className="relative z-10 flex h-full w-full max-w-4xl flex-col items-center justify-center px-4"
          style={{
            opacity: titlePhase,
            pointerEvents: titlePhase > 0.3 ? "auto" : "none",
          }}
        >
          <h2
            className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{
              transform: `translate3d(0, ${(1 - titlePhase) * 16}px, 0)`,
              willChange: "transform, opacity",
            }}
          >
            Is Your Business Ready for DevOps?
          </h2>

          {/* Centered column of question cards — same width, same alignment */}
          <div className="mt-8 flex w-full flex-col items-center sm:mt-10">
            {QUESTIONS.map((question, i) => {
              const local = localReveal(i);
              return (
                <div
                  key={question}
                  className="w-full max-w-4xl rounded-2xl border border-white/20 bg-white/10 px-8 py-5 text-center shadow-xl backdrop-blur-xl sm:px-12 sm:py-6"
                  style={{
                    marginTop: i === 0 ? 0 : `${STEP_Y}px`,
                    opacity: local,
                    transform: `translate3d(0, ${(1 - local) * 24}px, 0)`,
                    willChange: "transform, opacity",
                  }}
                >
                  <p className="text-base font-medium leading-snug text-white sm:whitespace-nowrap sm:text-lg">
                    {question}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA button — matches the site's existing button style */}
          <div
            className="mt-9 sm:mt-10"
            style={{
              opacity: buttonLocal,
              transform: `translate3d(0, ${(1 - buttonLocal) * 16}px, 0)`,
              willChange: "transform, opacity",
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span>Consult With Our Dedicated Team</span>
              <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <DevOpsChallenges />
    <DevOpsProblems />
    <DevOpsBenefits />
    <DevOpsSolutionsDeliver />
    <DevOpsTechnology/>
    </>
  );
}