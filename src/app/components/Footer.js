"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesColumns } from "../lib/navigationData";

export default function Footer() {
  // Extract top services links dynamically
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
    {
      name: "LinkedIn",
      icon: "/footer-linkedin.svg",
      href: "https://linkedin.com",
    },
    { name: "X", icon: "/footer-x.svg", href: "https://x.com" },
    {
      name: "Facebook",
      icon: "/footer-facebook.svg",
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: "/footer-instagram.svg",
      href: "https://instagram.com",
    },
    {
      name: "YouTube",
      icon: "/footer-youtube.svg",
      href: "https://youtube.com",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800/80 bg-slate-950 pt-10 pb-6 text-slate-300">
      {/* Local shimmer keyframes — self-contained */}
      <style jsx>{`
        @keyframes footerShimmerLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .footer-shimmer-line {
          animation: footerShimmerLine 4s ease-in-out infinite;
        }
        @keyframes footerShimmerSweep {
          0% {
            transform: translateX(-120%) skewX(-15deg);
          }
          100% {
            transform: translateX(220%) skewX(-15deg);
          }
        }
        .footer-shimmer-sweep {
          animation: footerShimmerSweep 3.2s ease-in-out infinite;
        }
        @keyframes footerGlowPulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .footer-glow-pulse {
          animation: footerGlowPulse 2.2s ease-in-out infinite;
        }
      `}</style>

      {/* Shimmering top border line */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-slate-800/80">
        <div className="footer-shimmer-line absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
      </div>

      {/* Ambient Glowing Background Orbs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] animate-pulse rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] animate-pulse rounded-full bg-indigo-600/10 blur-[130px] [animation-delay:2s]" />

      {/* Full-Width Main Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Logo & Punchy Heading */}
          <div className="space-y-4 lg:col-span-4 xl:col-span-4">
            {/* Logo Container with Ambient + Shimmer Glow */}
            <div className="group relative inline-block">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-md transition duration-500 group-hover:opacity-60" />
              <Link
                href="/"
                className="relative block overflow-hidden rounded-xl border border-white/10 bg-slate-900/90 p-3 backdrop-blur-md"
              >
                {/* Shimmer sweep across the logo card, always on */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="footer-shimmer-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <Image
                  src="/GreyLoop_Logo-01.png"
                  alt="Greyloops Logo"
                  width={240}
                  height={65}
                  className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
                  priority
                />
              </Link>
            </div>

            <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl lg:text-3xl">
              If{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                you
              </span>{" "}
              can imagine it, <span className="text-blue-500">we</span> can
              build it.
            </h3>

            <p className="max-w-md text-xs leading-relaxed text-slate-400 sm:text-sm">
              Delivering high-performance web &amp; mobile software
              engineering, scalable enterprise applications, and cutting-edge
              AI integrations tailored for growth.
            </p>

            {/* Social Icons moved here for tighter left-column balance */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group/social relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 hover:shadow-md hover:shadow-blue-500/20"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="relative h-4 w-4 opacity-70 transition-all duration-300 group-hover/social:scale-110 group-hover/social:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Area: Services, Useful Links, Direct Contact */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-8 xl:col-span-8">
            {/* Our Services */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span className="footer-glow-pulse h-1.5 w-1.5 rounded-full bg-blue-500" />
                Our Services
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {popularServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group inline-flex items-center text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="mr-1.5 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                        ›
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span className="footer-glow-pulse h-1.5 w-1.5 rounded-full bg-sky-400 [animation-delay:0.6s]" />
                Useful Links
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {usefulLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="mr-1.5 text-sky-400 opacity-0 transition-opacity group-hover:opacity-100">
                        ›
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Communication Box */}
            <div className="relative space-y-3 overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />

              {/* Shimmer sweep across the box on loop */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="footer-shimmer-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent [animation-delay:1.2s]" />
              </div>

              <div className="relative flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
                Direct Contact
              </div>

              {/* Phone Block */}
              <div className="relative flex items-center gap-2.5 border-b border-slate-800/80 pb-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-600/10 text-blue-400">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-slate-400">
                    Have Any Questions?
                  </span>
                  <a
                    href="tel:+180045647823"
                    className="text-xs font-bold text-white transition-colors hover:text-blue-400"
                  >
                    +1-800-456-478-23
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="relative space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Email.svg"
                    alt="Email Icon"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0 opacity-80"
                  />
                  <span className="text-[11px] text-slate-500">Business:</span>
                  <a
                    href="mailto:query@greyloops.com"
                    className="font-semibold text-slate-200 transition-colors hover:text-blue-400"
                  >
                    query@greyloops.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/Email.svg"
                    alt="Email Icon"
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0 opacity-80"
                  />
                  <span className="text-[11px] text-slate-500">Careers:</span>
                  <a
                    href="mailto:hr@greyloops.com"
                    className="font-semibold text-slate-200 transition-colors hover:text-blue-400"
                  >
                    hr@greyloops.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices Section - Compact Dark Glass Container */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-4 sm:p-6 lg:p-8">
          {/* World Map Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen">
            <Image
              src="/bg-map.png"
              alt="Global Operations Map"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Slow shimmer sweep across the whole offices panel */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="footer-shimmer-sweep absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/5 to-transparent [animation-duration:6s]" />
          </div>

          <div className="relative z-10">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <h4 className="text-base font-bold text-white sm:text-lg">
                  Global Presence
                </h4>
                <p className="text-xs text-slate-400">
                  Engineering hubs and client operations across international
                  markets.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                🌐 3 Global Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* UAE HQ */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇦🇪</span>
                    <h5 className="text-xs font-bold text-white">
                      UAE Office (HQ)
                    </h5>
                  </div>
                  <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-blue-400">
                    HQ
                  </span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                  📍 114, Roy Mediterranean, Al furjan, Dubai, UAE
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px]">
                  <span className="text-slate-500">HQ Phone:</span>
                  <a
                    href="tel:+971551866704"
                    className="font-semibold text-blue-400 hover:underline"
                  >
                    +971 55 186 6704
                  </a>
                </div>
              </div>

              {/* Engineering Team - Pakistan */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇵🇰</span>
                    <h5 className="text-xs font-bold text-white">
                      Engineering Hub
                    </h5>
                  </div>
                  <span className="rounded border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-indigo-400">
                    R&amp;D
                  </span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                  📍 59-B Phase 1 Johar Town, Lahore, Punjab 54000
                </p>
                <div className="mt-3 border-t border-slate-800/80 pt-2 text-[11px] text-slate-500">
                  Tech &amp; Software Delivery Center
                </div>
              </div>

              {/* Business Team - Australia */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇦🇺</span>
                    <h5 className="text-xs font-bold text-white">
                      Business Team
                    </h5>
                  </div>
                  <span className="rounded border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-sky-400">
                    Client Rel
                  </span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                  📍 26 Lee Crescent, Birmingham Gardens, NSW
                </p>
                <div className="mt-3 border-t border-slate-800/80 pt-2 text-[11px] text-slate-500">
                  Oceania Business Operations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright only now (socials moved up to left column) */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-slate-800/80 pt-5 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Greyloops</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}