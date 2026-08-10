"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UsersRound, Rocket, Sparkles } from "lucide-react";

const models = [
  {
    title: "IT Staff Augmentation",
    subtitle: "Scale Teams On-Demand",
    description:
      "Fill critical skills gaps rapidly by embedding vetted tech professionals seamlessly into your existing workflows and tools.",
    image: "/IT_Staff_Augmentation.jpg",
    icon: Users,
  },
  {
    title: "Dedicated Teams",
    subtitle: "End-to-End Commitment",
    description:
      "Deploy fully autonomous, cross-functional development teams aligned directly with your company culture, KPIs, and long-term goals.",
    image: "/Dedicated_Teams.jpg",
    icon: UsersRound,
  },
  {
    title: "Software Development Outsourcing",
    subtitle: "Turnkey Product Delivery",
    description:
      "Entrust full product lifecycle development to us—from strategy and design to deployment—so you can focus on core business growth.",
    image: "/Software_Development_Outsourcing.jpg",
    icon: Rocket,
  },
];

export default function EngagementModels() {
  const cardRef = useRef(null);
  const isLocked = useRef(false);
  const [active, setActive] = useState(0);

  // Mouse-wheel over the card switches models internally. The page's own
  // scroll is only intercepted while there's still another model to move to
  // in that direction — at the first/last model, the wheel event passes
  // straight through and the page scrolls normally, same as anywhere else.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const goingDown = e.deltaY > 0;
      const canGoDown = active < models.length - 1;
      const canGoUp = active > 0;

      if ((goingDown && !canGoDown) || (!goingDown && !canGoUp)) {
        return;
      }

      e.preventDefault();
      if (isLocked.current) return;
      isLocked.current = true;

      setActive((prev) =>
        goingDown ? Math.min(models.length - 1, prev + 1) : Math.max(0, prev - 1)
      );

      window.setTimeout(() => {
        isLocked.current = false;
      }, 500);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [active]);

  const current = models[active];
  const ActiveIcon = current.icon;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* Dot-grid texture — matched to the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient background glows aligned with Slider theme */}
      <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Standardized Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Engagement Models
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Flexible Ways We{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Press a step below, or scroll your mouse over this card to move
            through each engagement model.
          </motion.p>
        </div>

        {/* Card view — wheel events here switch models; the page's own
            scroll only kicks in once you're at the first or last model */}
        <div
          ref={cardRef}
          className="grid items-center gap-6 rounded-[2.5rem] border border-slate-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm lg:grid-cols-12 lg:gap-10 lg:p-8"
        >
          {/* Left Column: Syncing Image Card */}
          <div className="relative h-[34vh] w-full overflow-hidden rounded-3xl border border-white/80 bg-slate-900 shadow-2xl shadow-blue-900/15 sm:h-[38vh] lg:col-span-7 lg:h-[52vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Counter Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2.5 sm:left-6 sm:top-6 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-blue-600 shadow-lg backdrop-blur-md ring-1 ring-white/50 sm:h-12 sm:w-12 sm:rounded-2xl">
                <ActiveIcon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={2.2} />
              </div>
              <div className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-xs">
                Model 0{active + 1} / 0{models.length}
              </div>
            </div>

            {/* Bottom Visual Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-300 sm:text-xs">
                    {current.subtitle}
                  </span>
                  <h3 className="text-lg font-extrabold text-white sm:text-2xl lg:text-3xl">
                    {current.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Text + clickable step navigation */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:p-6 lg:p-7"
              >
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                  {current.subtitle}
                </span>
                <h4 className="mb-2.5 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  {current.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                  &ldquo;{current.description}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Clickable step track — press any model to jump straight to it */}
            <div className="relative flex flex-col pl-1">
              {models.map((model, index) => {
                const isActive = index === active;
                const Icon = model.icon;

                return (
                  <button
                    key={model.title}
                    onClick={() => setActive(index)}
                    className="group relative flex items-center gap-3 rounded-xl px-2 py-1.5 text-left transition-all duration-300 hover:bg-white/60"
                  >
                    {/* Vertical progress track */}
                    <div className="relative flex h-8 w-5 shrink-0 items-center justify-center">
                      {index !== models.length - 1 && (
                        <div className="absolute top-6 h-6 w-0.5 bg-slate-200" />
                      )}
                      <div
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          isActive
                            ? "scale-125 bg-blue-600 ring-4 ring-blue-100"
                            : "bg-slate-300 group-hover:bg-blue-300"
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                            : "bg-blue-50 text-blue-400 group-hover:text-blue-600"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span
                        className={`text-xs font-bold tracking-tight transition-colors duration-300 sm:text-sm ${
                          isActive ? "text-slate-900" : "text-zinc-600 group-hover:text-slate-900"
                        }`}
                      >
                        {model.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="hidden text-center text-[11px] font-medium text-zinc-600 lg:block lg:text-left">
              Press a step above, or scroll over the card to move through each model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}