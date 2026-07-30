import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Wavedivider from "../components/Wavedivider";
import Footer from "../components/Footer";
import { companyColumns } from "../lib/companyData";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-800">
      {/*
        Custom CSS for the floating animation across the whole frame.
        This moves the logo seamlessly along a large curved path using translate values.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes floatLogo {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-20vw, 10vh) rotate(3deg); }
          50% { transform: translate(-45vw, -5vh) rotate(-2deg); }
          75% { transform: translate(-25vw, -15vh) rotate(1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .animate-float-logo {
          animation: floatLogo 25s ease-in-out infinite;
        }
      `,
        }}
      />

      <Header />

      {/* TOP: Dark Modern Hero Section with Animated GreyLoop_Logo-01 */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        {/* Dot-grid texture, consistent with the rest of the site (dark variant) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Shimmer sweep, same technique used in ContactUs' branding panel */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Orbit ring texture, same technique used in ContactUs' branding panel */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full border border-white/10" />

        {/* The Animated Floating Logo Container — more visible now (opacity bumped) */}
        <div className="pointer-events-none absolute right-10 top-1/3 hidden select-none items-center justify-center md:flex animate-float-logo z-0 opacity-40">
          {/* Rotating Outer Gradient Ring around the logo */}
          <div className="absolute h-[420px] w-[420px] lg:h-[520px] lg:w-[520px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-transparent animate-[spin_15s_linear_infinite] blur-2xl" />

          {/* The Logo Itself with an extra breathing pulse */}
          <div className="relative animate-[pulse_4s_ease-in-out_infinite]">
            <Image
              src="/GreyLoop_Logo-01.png"
              alt="GreyLoop Background Watermark"
              width={520}
              height={520}
              priority
              className="w-[360px] lg:w-[460px] object-contain drop-shadow-[0_0_35px_rgba(37,99,235,0.5)]"
            />
          </div>
        </div>

        {/* Static Background Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-12 h-64 w-64 rounded-full bg-indigo-600/20 blur-2xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Software Innovation Partner
            </span>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Passion & Precision
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
              As a premier Software Innovation Partner, Greyloops stands
              alongside world-leading businesses, ambitious tech pioneers, and
              high-growth SMEs to deliver cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM: Themed light section, consistent with the rest of the site */}
      <main className="relative w-full flex-1 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-16 sm:py-20">
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 10%, black 40%, transparent 100%)",
          }}
        />

        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          {/* About Company Showcase Card (Light Theme) */}
          <div className="mb-16 overflow-hidden rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-blue-950/5 backdrop-blur-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Primary Copy */}
              <div className="space-y-4 lg:col-span-6">
                <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                  Your Partner for Software Innovation
                </h2>
                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                  We aim to amplify your business proposition by offering
                  bespoke software development, inventive product design,
                  meticulous QA, and strategic consultancy services.
                </p>
                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Additionally, we help modernize your IT infrastructure and
                  solve business-specific challenges through scalable,
                  enterprise-grade architecture.
                </p>
              </div>

              {/* Large Photo Frame for Company.png */}
              <div className="flex items-center justify-center border-t border-blue-100 pt-8 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="relative w-full">
                  <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-indigo-400/15 to-transparent blur-3xl" />
                  <div className="relative aspect-[16/10] w-full min-h-[260px] sm:min-h-[340px] overflow-hidden rounded-[2.2rem] bg-slate-900 shadow-2xl shadow-blue-950/25 border border-blue-100/50">
                    <Image
                      src="/Company.png"
                      alt="Greyloops Team"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links Grid */}
          <div className="mb-8 text-center">
            <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
              Explore
            </span>
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Explore <span className="text-blue-600">Greyloops</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-zinc-500">
              Learn more about our company structure, team, and open roles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {companyColumns.map((col) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.slug}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  {/* Blue Top Border Accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />

                  <div className="mb-5 flex items-center gap-3">
                    {Icon ? (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                      </span>
                    ) : (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-zinc-900">{col.title}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.slug}>
                        <Link
                          href={`/company/${link.slug}`}
                          className="group/link flex items-center justify-between rounded-lg py-1 text-base font-medium text-zinc-600 transition-colors hover:text-blue-600"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 transition-colors group-hover/link:bg-blue-600" />
                            {link.name}
                          </span>
                          <svg
                            className="h-4 w-4 -translate-x-2 text-blue-600 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer Dividers */}
      <Wavedivider />
      <Footer />
    </div>
  );
}