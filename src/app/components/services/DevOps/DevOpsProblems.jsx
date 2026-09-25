"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Rocket,
  Cloud,
  ShieldCheck,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

/**
 * DevOpsChallenges
 *
 * STRUCTURE (two separate pieces, stacked in normal document flow)
 * ------------------------------------------------------------------
 * 1. A plain, non-sticky header block (badge + heading top-left,
 *    description top-right). It scrolls normally, like any other content.
 * 2. A separate tall "pin" region *below* the header. Only THIS region is
 *    sticky. Because it's a distinct element that starts after the header,
 *    the pin only engages once the header has scrolled out of the way —
 *    exactly the "cross the heading first, then pin" behaviour requested.
 *    That also means the pinned viewport is no longer competing with the
 *    header for vertical space, so the card gets the full screen height to
 *    work with (fixes "DevOps Focus" getting clipped at the bottom).
 *
 * CARD ENTRANCE FIX
 * ------------------
 * Each card's state is driven by `rel = activeFloat - index`:
 *   rel <= -1  -> parked below, not visible yet
 *   -1 < rel<0 -> sliding up into place
 *   rel >= 0   -> settled, fully in place
 * At scroll progress 0, card index 0 has rel = 0, which is already in the
 * "settled" bucket — so it's fully visible immediately on load, with no
 * slide-in required (there's nothing before it to reveal it). Every card
 * is fully opaque and covers the ones behind it — no crossfade, so no
 * bleed-through.
 */

const NAVBAR_HEIGHT_PX = 80; // match your real header height

const challenges = [
  {
    number: "01",
    title: "Software Deployments Take Too Long",
    description:
      "Manual deployment steps, repeated checks, and complex release processes can slow down the delivery of new features and updates. As applications and teams grow, these processes become harder to manage and more prone to human error.",
    solution:
      "We automate build, testing, and deployment workflows to create a more consistent path from development to production. This helps teams release updates faster while reducing repetitive manual work and deployment-related issues.",
    focus: "CI/CD • Deployment Automation • Release Management",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Cloud Infrastructure Costs Keep Growing",
    description:
      "As applications expand, cloud environments often become larger and more difficult to manage. Unused resources, growing environments, changing workloads, and inefficient infrastructure can contribute to unnecessary cloud spending.",
    solution:
      "We help organizations improve visibility into their cloud infrastructure, manage resources more efficiently, and automate infrastructure processes. This creates a more controlled cloud environment that can support business growth while keeping infrastructure costs easier to manage.",
    focus: "Cloud Management • Resource Optimization • Infrastructure Automation",
    icon: Cloud,
  },
  {
    number: "03",
    title: "Security Comes Too Late in Development",
    description:
      "When security checks happen only before a release, problems can be discovered when they are more difficult and expensive to fix. Late security reviews can also create delays for development teams preparing software for production.",
    solution:
      "We bring security considerations into the development and deployment process so potential risks can be identified earlier. This helps teams address security requirements throughout the delivery lifecycle rather than treating security as a final step.",
    focus: "DevSecOps • Security Automation • Secure Delivery",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Development and Operations Work Separately",
    description:
      "Development and operations teams may have different workflows, responsibilities, and priorities even though they are working toward the same product goals. This can create communication gaps, slower releases, and delays when production issues occur.",
    solution:
      "We establish connected workflows that improve visibility and collaboration between development and operations. By creating a more coordinated delivery process, teams can respond to issues faster, manage releases more effectively, and maintain better continuity from development through production.",
    focus: "Team Collaboration • Shared Workflows • Operational Visibility",
    icon: GitBranch,
  },
];

const TOTAL = challenges.length;
const SCROLL_LENGTH_VH = 110 * TOTAL; // pinned scroll distance — raise to slow it down further

function cardTransform(rel) {
  if (rel <= -1) {
    // Not triggered yet — parked completely below the visible area
    return { y: 100 };
  }
  if (rel < 0) {
    // Sliding up into place, covering whatever is beneath it
    const t = rel + 1; // 0 -> 1
    return { y: 100 * (1 - t) };
  }
  // Settled — sits at rest, opaque, covering every earlier card
  return { y: 0 };
}

export default function DevOpsChallenges() {
  const pinRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      ticking = false;
      const el = pinRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollableDistance = rect.height - viewportH;

      if (scrollableDistance <= 0) {
        setProgress(0);
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

  const activeFloat = progress * TOTAL;
  const activeIndex = Math.min(TOTAL - 1, Math.floor(activeFloat));

  const jumpToChallenge = (index) => {
    const el = pinRef.current;
    if (!el) return;
    const target =
      el.getBoundingClientRect().top +
      window.scrollY +
      (index / TOTAL) * (el.offsetHeight - window.innerHeight) +
      1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section className="relative w-full border-t border-slate-200 bg-slate-50 text-slate-900">
      {/* ================= STATIC HEADER (not pinned) ================= */}
      <div className="relative overflow-hidden px-6 pb-8 pt-14 sm:px-12 sm:pt-20 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-0 top-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-100/50 blur-[160px]" />
          <div className="absolute right-[8%] top-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-sky-100/50 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
              maskImage:
                "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 grid w-full gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              DevOps Solutions
            </span>
            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl xl:text-5xl">
              <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Common Software Delivery
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Challenges We Solve
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start text-left lg:col-span-5">
            <p className="w-full text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
              As software applications grow, development teams can face
              slower releases, increasing cloud costs, security concerns,
              and disconnected workflows. Our DevOps services help simplify
              these challenges through automation, better infrastructure
              management, integrated security, and stronger collaboration
              across the software delivery process.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PINNED CARD-CYCLING REGION ================= */}
      <div ref={pinRef} className="relative w-full" style={{ height: `${SCROLL_LENGTH_VH}vh` }}>
        <div
          className="sticky overflow-hidden"
          style={{
            top: `${NAVBAR_HEIGHT_PX}px`,
            height: `calc(100vh - ${NAVBAR_HEIGHT_PX}px)`,
          }}
        >
          {/* Ambient background — matches the static header above */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute right-0 top-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-100/50 blur-[160px]" />
            <div className="absolute right-[8%] top-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-sky-100/50 blur-[120px]" />
            <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] translate-y-1/4 rounded-full bg-blue-100/40 blur-[140px]" />
            <div
              className="absolute inset-0 opacity-[0.20]"
              style={{
                backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
                backgroundSize: `24px 24px`,
                maskImage:
                  "radial-gradient(ellipse 90% 75% at 50% 50%, black 25%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 90% 75% at 50% 50%, black 25%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex h-full w-full flex-col justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              {/* LEFT: categories (top-aligned) + DevOps Focus checklist */}
              <div className="flex flex-col justify-start">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Categories
                </p>

                <div className="space-y-5">
                  {challenges.map((challenge, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={challenge.number}
                        type="button"
                        onClick={() => jumpToChallenge(index)}
                        className="flex w-full items-center gap-4 text-left"
                      >
                        <span
                          className="h-px bg-slate-300 transition-all duration-300"
                          style={{ width: isActive ? "42px" : "20px" }}
                        />
                        <span
                          className="text-base font-semibold transition-colors duration-300"
                          style={{ color: isActive ? "#2563eb" : "#94a3b8" }}
                        >
                          {challenge.number}
                        </span>
                        <span
                          className="text-base font-medium transition-colors duration-300 sm:text-lg"
                          style={{ color: isActive ? "#0f172a" : "#94a3b8" }}
                        >
                          {challenge.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* DevOps Focus — reflects whichever challenge is currently active */}
                <div className="mt-10 border-t border-slate-200 pt-8">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <ul className="space-y-4">
                    {challenges[activeIndex].focus.split(" • ").map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium leading-7 text-slate-700 sm:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: large detail card — now has the full pinned viewport to work with */}
              <div className="relative flex h-full items-center">
                <div className="relative h-[72vh] w-full max-h-[760px] overflow-hidden rounded-[2rem]">
                  {challenges.map((challenge, index) => {
                    const Icon = challenge.icon;
                    const rel = activeFloat - index;
                    const { y } = cardTransform(rel);

                    return (
                      <div
                        key={challenge.number}
                        className="absolute inset-0"
                        style={{
                          transform: `translate3d(0, ${y}%, 0)`,
                          zIndex: 100 + index,
                          pointerEvents: rel >= 0 ? "auto" : "none",
                          willChange: "transform",
                        }}
                      >
                        <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[2rem] bg-white/95 p-8 shadow-xl shadow-blue-500/5 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-10">
                          <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-50/70 blur-3xl" />

                          <div className="relative z-10">
                            <div className="mb-6 flex items-center justify-between">
                              <span className="text-sm font-semibold tracking-[0.2em] text-slate-400">
                                {challenge.number}
                              </span>
                              <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-md shadow-blue-500/20">
                                <Icon className="h-6 w-6" />
                              </div>
                            </div>

                            <h3 className="max-w-3xl text-xl font-bold leading-tight tracking-tight text-slate-900 sm:whitespace-nowrap sm:text-2xl xl:text-3xl">
                              {challenge.title}
                            </h3>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                              {challenge.description}
                            </p>

                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}