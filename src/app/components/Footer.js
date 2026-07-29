"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

export default function Footer() {
  // Extract top services & solutions links dynamically
  const popularServices = servicesColumns.flatMap((col) => col.links).slice(0, 6);
  const popularSolutions = solutionsColumns.flatMap((col) => col.links).slice(0, 6);

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

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800/80 bg-slate-950 pt-16 text-slate-300">
      
      {/* Ambient Glowing Background Orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px] animate-pulse" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[160px] animate-pulse [animation-delay:2s]" />

      {/* Full-Width Main Section */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Enlarged Logo & New Subtext */}
          <div className="space-y-6 lg:col-span-5 xl:col-span-4">
            
            {/* Logo Container with Ambient Glow */}
            <div className="group relative inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-60" />
              <Link href="/" className="relative block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-md">
                <Image
                  src="/GreyLoop_Logo-01.png"
                  alt="Greyloops Logo"
                  width={300}
                  height={85}
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>
            
            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              If <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">you</span> can imagine it,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">we</span> can build it.
            </h3>

            {/* Replaced Text Paragraph */}
            <p className="text-sm leading-relaxed text-slate-400 max-w-lg">
              Delivering high-performance web & mobile software engineering, scalable enterprise applications, and cutting-edge AI integrations tailored for growth.
            </p>

          </div>

          {/* Right Area: Navigation Links & Direct Communication */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7 xl:col-span-8 xl:grid-cols-4">
            
            {/* Our Services */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Our Services
              </h4>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm">
                {popularServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group inline-flex items-center text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="mr-1.5 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">›</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solutions */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Our Solutions
              </h4>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm">
                {popularSolutions.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/solutions/${item.slug}`}
                      className="group inline-flex items-center text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="mr-1.5 text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">›</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Useful Links
              </h4>
              <ul className="mt-5 space-y-3 text-xs sm:text-sm">
                {usefulLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="mr-1.5 text-sky-400 opacity-0 transition-opacity group-hover:opacity-100">›</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Communication Box (Moved to Right Side) */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 space-y-4 xl:col-span-1">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                Direct Contact
              </div>
              
              {/* Have Any Questions Block */}
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] font-medium text-slate-400">Have Any Questions?</span>
                  <a href="tel:+180045647823" className="text-xs sm:text-sm font-bold text-white transition-colors hover:text-blue-400">
                    +1-800-456-478-23
                  </a>
                </div>
              </div>

              {/* Email Addresses with Email.svg */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <Image src="/Email.svg" alt="Email Icon" width={16} height={16} className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                  <div>
                    <span className="block font-medium text-slate-500">Business:</span>
                    <a href="mailto:query@greyloops.com" className="font-semibold text-slate-200 transition-colors hover:text-blue-400">
                      query@greyloops.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Image src="/Email.svg" alt="Email Icon" width={16} height={16} className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                  <div>
                    <span className="block font-medium text-slate-500">Careers:</span>
                    <a href="mailto:hr@greyloops.com" className="font-semibold text-slate-200 transition-colors hover:text-blue-400">
                      hr@greyloops.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Global Offices Section - Full Width Container */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-6 sm:p-10 lg:p-14">
          
          {/* World Map Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
            <Image
              src="/bg-map.png"
              alt="Global Operations Map"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Shimmer Effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-shimmer absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div>
                <h4 className="text-xl font-bold text-white sm:text-2xl">
                  Our Global Presence
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Engineering hubs and client operations across international markets.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-400">
                🌐 3 Global Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* UAE HQ */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇦🇪</span>
                  <div>
                    <h5 className="font-bold text-white">UAE Office (HQ)</h5>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">Headquarters</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  📍 114, Roy Mediterranean, Al furjan, Dubai, UAE
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
                  <span className="text-slate-500">HQ Phone:</span>
                  <a href="tel:+971551866704" className="font-semibold text-blue-400 hover:underline">
                    +971 55 186 6704
                  </a>
                </div>
              </div>

              {/* Engineering Team - Pakistan */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇵🇰</span>
                  <div>
                    <h5 className="font-bold text-white">Engineering Hub</h5>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">Development & R&D</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  📍 59-B Phase 1 Johar Town, Lahore, Punjab 54000
                </p>
                <div className="mt-4 border-t border-slate-800/80 pt-3 text-xs text-slate-500">
                  Tech & Software Delivery Center
                </div>
              </div>

              {/* Business Team - Australia */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇦🇺</span>
                  <div>
                    <h5 className="font-bold text-white">Business Team</h5>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Client Relations</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  📍 26 Lee Crescent, Birmingham Gardens, NSW
                </p>
                <div className="mt-4 border-t border-slate-800/80 pt-3 text-xs text-slate-500">
                  Oceania Business Operations
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Buttons */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 py-8 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Greyloops</span>. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="h-5 w-5 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}