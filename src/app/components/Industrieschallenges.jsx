"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                              */
/* ------------------------------------------------------------------ */

const INDUSTRIES = [
  {
    title: "Healthcare",
    image: "/Industries_Health_v1.png",
    text: "Technology capabilities designed to streamline healthcare workflows, improve patient engagement, manage sensitive data, and support secure, efficient operations across healthcare organizations. Supporting digital health, clinical management, healthcare analytics, telemedicine, and intelligent workflow automation.",
   },
  {
    title: "FinTech",
    image: "/Industries_Finance_v1.png",
    text: "Technology capabilities designed to optimize financial workflows, strengthen data security, improve operational efficiency, and enable smarter, data-driven financial decision-making. Supporting financial analytics, payment workflows, risk management, reporting, automation, and intelligent customer experiences.",
  },
  {
    title: "Banking",
    image: "/Industries_Banking_v1.png",
    text: "Technology capabilities designed to modernize banking operations, simplify financial workflows, enhance customer experiences, and strengthen security across digital banking environments. Supporting digital banking, account management, transaction processing, financial analytics, fraud prevention, and personalized services.",
  },
  // {
  //   title: "Restaurant",
  //   image: "/Industries_Restaurant_v1.png",
  //   text: "Technology capabilities designed to streamline restaurant operations, improve customer experiences, simplify order management, and enhance day-to-day business efficiency. Supporting digital ordering, POS integration, inventory management, reservations, delivery workflows, analytics, and operational automation.",
  // },
  {
    title: "eCommerce",
    image: "/Industries_eCommerce_v1.png",
    text: "Technology capabilities designed to optimize digital commerce, enhance customer experiences, streamline online operations, and support scalable business growth. Supporting online storefronts, product management, payments, order processing, personalization, customer analytics, and commerce automation.",
  },
    {
    title: "SaaS",
    image: "/Industries_Saas_v1.png",
    text: "Technology capabilities designed to support scalable SaaS platforms, streamline subscription-based operations, and deliver seamless digital experiences for growing businesses. Supporting multi-tenant architectures, subscription management, user administration, integrations, analytics, automation, and secure cloud operations.",
  },
  /* {
    title: "Travel",
    image: "/Industries_Travel_v1.png",
    text: "Technology capabilities designed to simplify travel operations, enhance customer journeys, and deliver seamless experiences across the travel ecosystem. Supporting booking platforms, reservations, itinerary management, travel analytics, personalized experiences, and operational automation.",
  }, */
  {
    title: "Logistics",
    image: "/Industries_Logistics_v1.png",
    text: "Technology capabilities designed to optimize logistics operations, improve shipment visibility, streamline supply chain workflows, and enhance delivery efficiency. Supporting fleet management, route optimization, shipment tracking, inventory coordination, logistics analytics, and workflow automation.",
  },
  {
    title: "Education",
    image: "/Industries_Education_v1.png",
    text: "Technology capabilities designed to modernize learning environments, streamline educational operations, and create engaging digital experiences for students, educators, and institutions. Supporting learning management, student administration, virtual classrooms, assessments, academic analytics, and education workflow automation.",
  },
  {
    title: "Real Estate",
    image: "/Industries_RealEstate_v1.png",
    text: "Technology capabilities designed to simplify property operations, improve customer engagement, and streamline real estate workflows across the property lifecycle. Supporting property management, listings, digital property tours, lead management, transactions, market analytics, and workflow automation.",
  },
  // {
  //   title: "Oil and Gas",
  //   image: "/Industries_OilandGas_v1.png",
  //   text: "Technology capabilities designed to improve operational efficiency, strengthen asset visibility, and streamline complex workflows across the oil and gas industry. Supporting asset management, field operations, production monitoring, safety workflows, predictive analytics, and operational automation.",
  // },
  // {
  //   title: "Automotive",
  //   image: "/Industries_Automotive_v1.png",
  //   text: "Technology capabilities designed to optimize automotive operations, improve connected experiences, and streamline workflows across the automotive ecosystem. Supporting vehicle management, fleet operations, manufacturing workflows, connected mobility, predictive analytics, and process automation.",
  // },
  // {
  //   title: "Insurance",
  //   image: "/Industries_Insurance_v1.png",
  //   text: "Technology capabilities designed to streamline insurance operations, simplify complex workflows, improve customer experiences, and support data-driven decision-making. Supporting policy management, claims processing, underwriting, risk assessment, customer portals, analytics, and workflow automation.",
  // },
  {
    title: "Manufacturing",
    image: "/Industries_Manufacturing_v1.png",
    text: "Technology capabilities designed to optimize manufacturing operations, improve production efficiency, and streamline complex workflows across the industrial value chain. Supporting production planning, inventory management, quality control, asset monitoring, supply chain coordination, analytics, and process automation.",
  },
];

const ROW_H = 60;
const VH_PER_ITEM = 35;

/* ------------------------------------------------------------------ */
/* Helpers                                                           */
/* ------------------------------------------------------------------ */

function renderHighlighted(text) {
  return text.split(/(\{\{[^}]+\}\})/g).map((part, i) => {
    const match = part.match(/^\{\{([^}]+)\\}\}/);
    if (match) {
      return (
        <strong key={i} className="font-semibold text-blue-700 bg-blue-50/80 px-1 py-0.5 rounded">
          {match[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/* ------------------------------------------------------------------ */
/* Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function IndustriesChallenges() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const activeBtnRef = useRef(null);
  const listContainerRef = useRef(null);
  const rafRef = useRef(null);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const pinnable = !prefersReducedMotion;

  const trackHeightVh = INDUSTRIES.length * VH_PER_ITEM;

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = clamp(-rect.top, 0, total);
      const progress = scrolled / total;
      const idx = clamp(Math.floor(progress * INDUSTRIES.length), 0, INDUSTRIES.length - 1);
      setActive((prev) => (prev !== idx ? idx : prev));
    });
  }, []);

  useEffect(() => {
    if (!pinnable) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pinnable, handleScroll]);

  useEffect(() => {
    if (activeBtnRef.current && listContainerRef.current) {
      const container = listContainerRef.current;
      const btn = activeBtnRef.current;
      const containerHeight = container.clientHeight;
      const btnTop = btn.offsetTop;
      const btnHeight = btn.clientHeight;
      container.scrollTo({
        top: btnTop - containerHeight / 2 + btnHeight / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  const jumpTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const trackTop = rect.top + window.scrollY;
    const total = rect.height - window.innerHeight;
    const target = trackTop + (i / INDUSTRIES.length) * total + 2;
    window.scrollTo({ top: target, behavior: "smooth" });
    setActive(i);
  }, []);

  const current = INDUSTRIES[active];

  return (
    <section className="blog-font relative w-full bg-slate-50/50 text-slate-900">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap");
        
        .blog-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .blog-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }

        .ic-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .ic-no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .ic-fade { 
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1); 
        }

        @media (prefers-reduced-motion: reduce) {
          .ic-fade { transition: none !important; }
        }
      `}</style>

      {/* ---------------- Desktop View (Frameless) ---------------- */}
      {pinnable && (
        <div ref={trackRef} className="hidden md:block relative" style={{ height: `${trackHeightVh}vh` }}>
          <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
            
            {/* Ambient Background Pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.45]"
              style={{
                backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
                maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
              }}
            />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 w-full h-full px-10 lg:px-16 xl:px-20 flex items-center">
              <div className="grid grid-cols-[1.3fr_300px_1fr] gap-10 lg:gap-12 xl:gap-16 items-center w-full max-w-[1700px] mx-auto h-[80vh]">
                
                {/* Column 1 — Heading + Scaled Image (Equalized Vertical Spacing) */}
                <div className="flex flex-col justify-center h-full my-auto gap-7">
                  {/* Standard Header */}
                  <div>
                    <span className="mb-3.5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                      <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                      Our Expertise
                    </span>
                    <h2 className="blog-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                      <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Solving Complex Challenges Across{" "}
                      </span>
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                        Every Major Sector
                      </span>
                    </h2>
                  </div>

                  {/* Image Container with 16:10 ratio for increased visual presence */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl shadow-blue-900/5 bg-slate-100 border border-slate-200/60">
                    {INDUSTRIES.map((ind, i) => (
                      <Image
                        key={ind.title}
                        src={ind.image}
                        alt={ind.title}
                        fill
                        sizes="(max-width: 1200px) 50vw, 750px"
                        priority={i === 0}
                        className="object-cover ic-fade"
                        style={{
                          opacity: i === active ? 1 : 0,
                          transform: i === active ? "scale(1)" : "scale(1.02)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Column 2 — Center Scrollable Services List */}
                <div
                  ref={listContainerRef}
                  className="ic-no-scrollbar relative h-full overflow-y-auto flex flex-col justify-start"
                >
                  <div className="py-[35vh]">
                    {INDUSTRIES.map((ind, i) => {
                      const isActive = i === active;
                      return (
                        <button
                          key={ind.title}
                          ref={isActive ? activeBtnRef : null}
                          onClick={() => jumpTo(i)}
                          className="flex items-center w-full text-left transition-all duration-300 select-none cursor-pointer"
                          style={{
                            height: `${ROW_H}px`,
                            color: isActive ? "#2563eb" : "#64748b",
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: isActive ? 700 : 500,
                            fontSize: isActive ? "27px" : "19px",
                            transform: isActive ? "translateX(8px)" : "translateX(0)",
                          }}
                        >
                          <span
                            className={`mr-3 inline-block h-2.5 w-2.5 rounded-full transition-all duration-300 shrink-0 ${
                              isActive ? "bg-blue-600 scale-125 shadow-[0_0_8px_rgba(37,99,235,0.6)]" : "bg-transparent"
                            }`}
                          />
                          <span className="truncate">{ind.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3 — Direct Floating Text Details */}
                <div className="relative h-full w-full flex flex-col justify-between">
                  {INDUSTRIES.map((ind, i) => (
                    <div
                      key={ind.title}
                      className="absolute inset-0 ic-fade flex flex-col justify-center"
                      style={{
                        opacity: i === active ? 1 : 0,
                        pointerEvents: i === active ? "auto" : "none",
                        transform: i === active ? "translateY(0)" : "translateY(6px)",
                      }}
                    >
                      <p className="text-[18px] lg:text-[20px] leading-relaxed text-slate-700 mb-8">
                        {renderHighlighted(ind.text)}
                      </p>
                      <a
                        href={ind.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-700 transition-all w-fit shadow-sm"
                      >
                        Know More
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-600 group-hover:text-white"
                        />
                      </a>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reduced Motion Fallback */}
      {!pinnable && (
        <div className="hidden md:flex w-full h-screen items-center justify-center px-10 lg:px-16">
          <div className="grid grid-cols-[1.3fr_300px_1fr] gap-10 items-center w-full max-w-[1700px] h-[80vh]">
            <div className="flex flex-col justify-center h-full my-auto gap-7">
              <div>
                <span className="mb-3.5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  Our Expertise
                </span>
                <h2 className="blog-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Solving Complex Challenges Across{" "}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Every Major Sector
                  </span>
                </h2>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200/60">
                <Image src={current.image} alt={current.title} fill sizes="(max-width: 1200px) 50vw, 750px" className="object-cover" />
              </div>
            </div>

            <div className="ic-no-scrollbar overflow-y-auto h-full">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.title}
                  onClick={() => setActive(i)}
                  className="block w-full text-left transition-all duration-200"
                  style={{
                    height: `${ROW_H}px`,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: i === active ? "27px" : "19px",
                    fontWeight: i === active ? 700 : 500,
                    color: i === active ? "#2563eb" : "#64748b",
                  }}
                >
                  {ind.title}
                </button>
              ))}
            </div>

            <div className="w-full h-full flex flex-col justify-center">
              <p className="text-[18px] lg:text-[20px] leading-relaxed text-slate-700 mb-8">
                {renderHighlighted(current.text)}
              </p>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-700 transition-all shadow-sm w-fit"
              >
                Know More <ArrowUpRight size={15} className="text-blue-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Mobile View (Frameless) ---------------- */}
      <div className="md:hidden max-w-xl mx-auto px-6 py-12">
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Sparkles className="h-3 w-3 text-blue-500" />
            Our Expertise
          </span>
          <h2 className="blog-display text-2xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Solving Complex Challenges Across{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Every Major Sector
            </span>
          </h2>
        </div>

        <label htmlFor="ic-select" className="sr-only">
          Select industry
        </label>
        <select
          id="ic-select"
          value={active}
          onChange={(e) => setActive(Number(e.target.value))}
          className="w-full mb-6 rounded-xl px-4 py-3 text-sm font-semibold bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        >
          {INDUSTRIES.map((ind, i) => (
            <option key={ind.title} value={i}>
              {ind.title}
            </option>
          ))}
        </select>

        <div className="py-2">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-sm bg-slate-100 border border-slate-200/60">
            <Image src={current.image} alt={current.title} fill sizes="100vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {current.title}
            </h3>
            <p className="text-base leading-relaxed text-slate-700">{renderHighlighted(current.text)}</p>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-700 transition-all shadow-sm mt-2 w-fit"
            >
              Know More <ArrowUpRight size={14} className="text-blue-600 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}