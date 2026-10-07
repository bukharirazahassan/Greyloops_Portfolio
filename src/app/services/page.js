// src/app/services/page.js
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import { servicesColumns } from "../lib/navigationData";

export default function ServicesPage() {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ───── Page-wide background: dot grid + soft circle shades ───── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* dot grid, fading out toward the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.16)_1px,transparent_1px)] [background-size:24px_24px] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]" />

        {/* circle shades spread down the whole page */}
        <div className="absolute -right-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-40 top-[18%] h-[24rem] w-[24rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute -right-40 top-[45%] h-[26rem] w-[26rem] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -left-32 top-[72%] h-[24rem] w-[24rem] rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[10%] h-[22rem] w-[22rem] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <Header />

      {/* ───── Hero ───── */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            What We Do
          </span>

          {/* two solid colors, no gradient text */}
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Services Built to{" "}
            <span className="text-blue-600">Move Your Business Forward</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            From product design to enterprise infrastructure, our teams partner
            with you at every stage, combining engineering depth with a product
            mindset to ship work that actually moves the needle.
          </p>

          {/* quick jump chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {servicesColumns.map((col) => {
              const Icon = col.icon;
              return (
                <a
                  key={col.slug}
                  href={`#${col.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Icon className="h-4 w-4 text-blue-600" strokeWidth={2} />
                  {col.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Services grid ───── */}
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-12 sm:pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesColumns.map((col, index) => {
            const Icon = col.icon;
            return (
              <div
                key={col.slug}
                id={col.slug}
                className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_70px_rgba(37,99,235,0.18)]"
              >
                {/* glow that appears on hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* header: icon, index number */}
                <div className="relative mb-6 flex items-start justify-between">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="text-4xl font-extrabold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="relative text-xl font-bold tracking-tight text-slate-900">
                  {col.title}
                </h2>
                <p className="relative mt-1 text-sm font-medium text-slate-500">
                  {col.links.length} services
                </p>

                <div className="relative my-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

                <ul className="relative -mx-2 flex-1 space-y-1">
                  {col.links.map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={`/services/${link.slug}`}
                        className="group/link flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] font-medium text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-colors group-hover/link:bg-blue-500" />
                          {link.name}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>

      {/* ───── Bottom call to action ───── */}
      <section className="relative px-6 pb-20 sm:pb-28">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-10 md:flex-row md:items-center">
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-base font-medium leading-relaxed text-slate-600">
              Tell us what you are building and we will help you choose the
              right path.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Talk to an Expert
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}