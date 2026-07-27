"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

const menuItems = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasMega: true,
    columns: servicesColumns,
    basePath: "/services",
    statCard: {
      bgImage: "/services-bg.jpg",
      label: "NPS",
      stat: "81.8%",
      text: "78% of our clients believe that greyloops is better than most other providers they have worked with.",
      rating: "5",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    hasMega: true,
    columns: solutionsColumns,
    basePath: "/solutions",
    statCard: {
      bgImage: "/Solutions-bg.jpg",
      label: "",
      stat: "99.4%",
      text: "Empowering businesses with enterprise-grade data architecture, intelligent automation, and scalable AI solutions.",
      rating: "5",
    },
  },
  { label: "Industries", href: "/industries" },
  { label: "Our Products", href: "/products" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="relative w-full sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-blue-50/60 backdrop-blur-md" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center shrink-0"
          aria-label="Greyloops home"
        >
          <Image
            src="/GreyLoop_Logo.png"
            alt="Greyloops"
            width={2917}
            height={2085}
            priority
            className="h-28 md:h-32 lg:h-36 w-auto object-contain -my-8"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasMega && openMenu(item.label)}
              onMouseLeave={() => item.hasMega && scheduleClose()}
            >
              <Link
                href={item.href || "#"}
                className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-200 ${
                  activeMenu === item.label
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                    : "text-zinc-800 hover:bg-white/70 hover:text-zinc-900 hover:shadow-sm"
                }`}
              >
                {item.label}
                {item.hasMega && (
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMenu === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {item.hasMega && activeMenu === item.label && (
                <div
                  className="fixed left-0 top-16 w-full border-t border-blue-100 bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/10 overflow-hidden"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <div className="relative mx-auto flex max-w-7xl">
                    {/* Text columns */}
                    <div className="grid flex-1 grid-cols-3 gap-10 px-8 py-10">
                      {item.columns.map((col) => {
                        const Icon = col.icon;
                        return (
                          <div key={col.slug}>
                            <div className="mb-4 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2.5">
                              {Icon && (
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                                </span>
                              )}
                              <h3 className="text-lg font-bold text-zinc-900">
                                {col.title}
                              </h3>
                            </div>
                            <ul className="space-y-3.5">
                              {col.links.map((link) => (
                                <li key={link.slug}>
                                  <Link
                                    href={`${item.basePath}/${link.slug}`}
                                    className="text-base font-medium text-zinc-700 hover:text-blue-600 transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Stat Card — Full-bleed dark photo card (Used for both Services & Solutions) */}
                    {item.statCard && (
                      <div className="relative w-100 shrink-0 overflow-hidden text-white">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${item.statCard.bgImage})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />

                        <div className="relative flex h-full min-h-[380px] flex-col justify-between p-7">
                          <div className="flex items-start justify-between">
                            <span className="text-3xl font-extrabold tracking-tight text-blue-300">
                              {item.statCard.label}
                            </span>
                          </div>

                          <div>
                            <p className="mb-3 text-5xl font-extrabold">
                              {item.statCard.stat}
                            </p>
                            <p className="mb-4 text-base leading-relaxed text-zinc-100">
                              {item.statCard.text}
                            </p>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-bold text-white">
                              {"★".repeat(Number(item.statCard.rating))}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 hover:bg-white/70"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden relative border-t border-blue-100 bg-white/98 backdrop-blur-md shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-zinc-100 last:border-none"
              >
                {item.hasMega ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-zinc-900"
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {mobileExpanded === item.label && (
                      <div className="pb-4 pl-2">
                        {item.columns.map((col) => {
                          const Icon = col.icon;
                          return (
                            <div key={col.slug} className="mb-4">
                              <div className="mb-2 flex items-center gap-2">
                                {Icon && (
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-500">
                                    <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                                  </span>
                                )}
                                <h4 className="text-sm font-bold uppercase tracking-wide text-orange-500">
                                  {col.title}
                                </h4>
                              </div>
                              <ul className="space-y-2 pl-8">
                                {col.links.map((link) => (
                                  <li key={link.slug}>
                                    <Link
                                      href={`${item.basePath}/${link.slug}`}
                                      className="block py-1 text-base font-medium text-zinc-700"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3.5 text-base font-semibold text-zinc-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="mt-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-center text-base font-bold text-white shadow-md shadow-blue-500/25"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}