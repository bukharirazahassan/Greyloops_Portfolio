"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const popularServices = [
    { name: "Development & QA", slug: "development-and-qa" },
    { name: "Mobility & Apps", slug: "mobility-and-apps" },
    { name: "IT Operations", slug: "it-operations" },
    { name: "Data Solutions", slug: "data-solutions" },
    { name: "Artificial Intelligence", slug: "artificial-intelligence" },
    { name: "E-Commerce", slug: "e-commerce" },
  ];

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
    <footer className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-20 text-slate-100 font-sans">
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
          animation: footerShimmerLine 5s ease-in-out infinite;
        }
      `}</style>

      {/* Shimmering top border */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-slate-800">
        <div className="footer-shimmer-line absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      </div>

      {/* Dark Theme Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      {/* Dark Theme Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Full-width container matching section padding */}
      <div className="relative z-10 flex h-full w-full flex-1 flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* Top: brand + link/contact grid */}
        <div className="grid w-full grid-cols-1 divide-y divide-slate-800 border border-slate-800 bg-slate-900/40 backdrop-blur-sm lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {/* Brand column */}
          <div className="space-y-5 p-6 sm:p-8 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/GreyLoop_Logo-01.png"
                alt="Greyloops Logo"
                width={320}
                height={86}
                className="h-14 w-auto object-contain sm:h-16"
                priority
              />
            </Link>

            <p className="text-sm font-normal leading-relaxed text-slate-300 antialiased sm:text-base">
              We build secure, scalable, and high-performance digital solutions that turn business ideas into meaningful results. From modern web and mobile applications to enterprise software, cloud platforms, and AI-powered solutions, our experienced team delivers technology designed for long-term growth.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-slate-800 bg-slate-950/60 text-slate-400 transition-colors duration-200 hover:border-blue-500/60 hover:text-white"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="p-6 sm:p-8 lg:col-span-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {popularServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white antialiased"
                  >
                    <span className="text-slate-500 transition-colors group-hover:text-blue-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div className="p-6 sm:p-8 lg:col-span-2">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white antialiased"
                  >
                    <span className="text-slate-500 transition-colors group-hover:text-blue-400">
                      ›
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact */}
          <div className="p-6 sm:p-8 lg:col-span-3">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Have any questions?
                </span>
                <a
                  href="tel:+180045647823"
                  className="text-base font-semibold text-white transition-colors hover:text-blue-300 sm:text-lg"
                >
                  +1-800-456-478-23
                </a>
              </div>

              <div className="space-y-3 border-t border-slate-800 pt-4 text-sm sm:text-base">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Business
                  </span>
                  <a
                    href="mailto:query@greyloops.com"
                    className="font-medium text-slate-200 transition-colors hover:text-blue-300"
                  >
                    Info@greyloops.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Careers
                  </span>
                  <a
                    href="mailto:careers@greyloops.com"
                    className="font-medium text-slate-200 transition-colors hover:text-blue-300"
                  >
                    careers@greyloops.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global presence section */}
        <div className="mt-8 w-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-6 py-4 sm:px-8">
            <div>
              <h4 className="text-base font-bold tracking-tight text-white sm:text-lg">
                Global Presence
              </h4>
              <p className="mt-0.5 text-xs text-slate-300 antialiased sm:text-sm">
                Engineering hubs and client operations across international markets.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              3 Hubs Online
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {offices.map((office) => (
              <div key={office.code} className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center border border-slate-800 bg-slate-950 text-base leading-none">
                      {office.flag}
                    </span>
                    <span className="text-lg font-extrabold tracking-tight text-white">
                      {office.code}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                    <span className={`h-1.5 w-1.5 rounded-full ${office.dot}`} />
                    {office.role}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 antialiased sm:text-sm">
                  {office.address}
                </p>
                <div className="mt-4 border-t border-slate-800/80 pt-3 text-xs font-medium sm:text-sm">
                  {office.metaHref ? (
                    <a
                      href={office.metaHref}
                      className="text-blue-400 transition-colors hover:underline"
                    >
                      {office.meta}
                    </a>
                  ) : (
                    <span className="text-slate-400">{office.meta}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex w-full flex-col items-center justify-center border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-400 sm:text-sm antialiased">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-200">Greyloops</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}