"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesColumns } from "../lib/navigationData";

export default function Footer() {
  const popularServices = servicesColumns
    .flatMap((col) => col.links)
    .slice(0, 6);

  const usefulLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "Email", icon: "/Email.svg", href: "mailto:query@greyloops.com" },
    { name: "LinkedIn", icon: "/footer-linkedin.svg", href: "https://linkedin.com" },
    { name: "X", icon: "/footer-x.svg", href: "https://x.com" },
    { name: "Facebook", icon: "/footer-facebook.svg", href: "https://facebook.com" },
    { name: "Instagram", icon: "/footer-instagram.svg", href: "https://instagram.com" },
    { name: "YouTube", icon: "/footer-youtube.svg", href: "https://youtube.com" },
  ];

  const offices = [
    {
      code: "UAE",
      flag: "🇦🇪",
      role: "Headquarters",
      address: "114, Roy Mediterranean, Al Furjan, Dubai, UAE",
      meta: "+971 55 186 6704",
      metaHref: "tel:+971551866704",
      dot: "bg-blue-400",
    },
    {
      code: "PK",
      flag: "🇵🇰",
      role: "Engineering Hub",
      address: "59-B Phase 1 Johar Town, Lahore, Punjab 54000",
      meta: "Software Delivery Center",
      dot: "bg-emerald-400",
    },
    {
      code: "AU",
      flag: "🇦🇺",
      role: "Business Team",
      address: "26 Lee Crescent, Birmingham Gardens, NSW",
      meta: "Oceania Client Relations",
      dot: "bg-amber-400",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800/80 bg-slate-900 pt-16 pb-6 text-slate-300">
      <style jsx>{`
        @keyframes footerShimmerLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .footer-shimmer-line {
          animation: footerShimmerLine 5s ease-in-out infinite;
        }
      `}</style>

      {/* shimmering top border, single restrained accent */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-slate-800/80">
        <div className="footer-shimmer-line absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      </div>

      {/* ambient glow circles — same treatment as the hero section above */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[600px] w-[750px] -translate-y-1/3 rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-[8%] top-0 z-0 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* dot matrix pattern — same color, size, and opacity as the hero section */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-16">
        {/* Top: brand + link/contact grid, unified by hairline dividers */}
        <div className="grid grid-cols-1 divide-slate-800/80 border border-slate-800/80 lg:grid-cols-12 lg:divide-x">
          {/* Brand column */}
          <div className="space-y-4 p-6 sm:p-8 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/GreyLoop_Logo-01.png"
                alt="Greyloops Logo"
                width={320}
                height={86}
                className="h-16 w-auto object-contain sm:h-20"
                priority
              />
            </Link>

            <h3 className="text-2xl font-extrabold leading-snug text-white sm:text-3xl">
              If{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                you
              </span>{" "}
              can imagine it, <span className="text-blue-400">we</span> can
              build it.
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              High-performance web &amp; mobile engineering, scalable
              enterprise applications, and AI integrations tailored for
              growth.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-slate-800 text-slate-500 transition-colors duration-200 hover:border-blue-500/60 hover:text-blue-300"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="border-t border-slate-800/80 p-6 sm:p-8 lg:col-span-3 lg:border-t-0">
            <h4 className="flex items-center gap-2 font-mono text-sm font-medium tracking-wider text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {"// services"}
            </h4>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {popularServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-blue-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div className="border-t border-slate-800/80 p-6 sm:p-8 lg:col-span-2 lg:border-t-0">
            <h4 className="flex items-center gap-2 font-mono text-sm font-medium tracking-wider text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {"// links"}
            </h4>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-blue-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact */}
          <div className="border-t border-slate-800/80 p-6 sm:p-8 lg:col-span-3 lg:border-t-0">
            <h4 className="flex items-center gap-2 font-mono text-sm font-medium tracking-wider text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {"// contact"}
            </h4>

            <div className="mt-5 space-y-4">
              <div>
                <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">
                  Have any questions?
                </span>
                <a
                  href="tel:+180045647823"
                  className="text-base font-bold text-white hover:text-blue-300"
                >
                  +1-800-456-478-23
                </a>
              </div>

              <div className="space-y-3 border-t border-slate-800/80 pt-3 text-sm">
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Business
                  </span>
                  <a
                    href="mailto:query@greyloops.com"
                    className="font-semibold text-slate-200 hover:text-blue-300"
                  >
                    Info@greyloops.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Careers
                  </span>
                  <a
                    href="mailto:careers@greyloops.com"
                    className="font-semibold text-slate-200 hover:text-blue-300"
                  >
                    careers@greyloops.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global presence: status-board rows instead of blurred map cards */}
        <div className="mt-6 border border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 px-6 py-4 sm:px-8">
            <div>
              <h4 className="text-lg font-bold text-white sm:text-xl">
                Global Presence
              </h4>
              <p className="mt-0.5 text-sm text-slate-400">
                Engineering hubs and client operations across international
                markets.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-sm text-slate-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              3 hubs online
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-800/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {offices.map((office) => (
              <div key={office.code} className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center border border-slate-800 bg-slate-900/60 text-base leading-none">
                      {office.flag}
                    </span>
                    <span className="font-mono text-xl font-bold tracking-tight text-white">
                      {office.code}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-500">
                    <span className={`h-1.5 w-1.5 rounded-full ${office.dot}`} />
                    {office.role}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {office.address}
                </p>
                <div className="mt-4 border-t border-slate-800/80 pt-3 text-sm">
                  {office.metaHref ? (
                    <a
                      href={office.metaHref}
                      className="font-semibold text-blue-300 hover:underline"
                    >
                      {office.meta}
                    </a>
                  ) : (
                    <span className="text-slate-500">{office.meta}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-slate-800/80 pt-5 text-center">
          <p className="font-mono text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">Greyloops</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}