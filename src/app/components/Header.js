"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  LayoutGrid,
  PhoneCall,
  Mail,
  Briefcase,
  HelpCircle,
  Building2,
  TrendingUp,
  Share2,
} from "lucide-react";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";
import { casestudiesProjects } from "../lib/casestudiesData";
import { companyColumns, trendingBlogs, socialLinks } from "../lib/companyData";

const menuItems = [
  {
    label: "Company",
    href: "/company",
    hasMega: true,
    type: "company",
    columns: companyColumns,
  },
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
  // {
  //   label: "Case Studies",
  //   href: "/casestudies",
  //   hasMega: true,
  //   type: "portfolio",
  //   projects: casestudiesProjects,
  // },
  // { label: "Industries", href: "/industries" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Click-to-toggle a mega menu (instead of hover)
  const toggleMenu = (label) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  // Close the open mega menu when clicking anywhere outside the nav
  useEffect(() => {
    if (!activeMenu) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeMenu]);

  return (
    <header className="relative w-full sticky top-0 z-50">
      {/* Modern Crystal / Glassmorphic Header Frame */}
      <div className="absolute inset-0 border-b border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-300" />

      {/* Subtle Specular Reflection Edge Line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <div className="relative flex h-20 w-full items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Left-Aligned Group: Logo + Navigation Links strictly pinned left */}
        <div className="flex items-center gap-6 md:gap-10 shrink-0">
          {/* Logo Container with Boosted Visual Scaling */}
          <Link
            href="/"
            className="group relative flex h-16 w-40 md:w-52 items-center justify-center shrink-0 overflow-visible transition-transform duration-300 hover:scale-105"
            aria-label="Greyloops home"
          >
            <Image
              src="/GreyLoop_Logo.png"
              alt="Greyloops"
              width={2917}
              height={2085}
              priority
              className="h-auto w-full max-w-none scale-115 md:scale-130 object-contain"
            />
          </Link>

          {/* Desktop Nav - Attached to Logo on the Left */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 shrink-0"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasMega ? (
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.label)}
                    aria-expanded={activeMenu === item.label}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-semibold transition-all duration-200 ${
                      activeMenu === item.label
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                        : "text-zinc-800 hover:bg-white/70 hover:text-zinc-900 hover:shadow-sm"
                    }`}
                  >
                    {item.label}
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
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-semibold text-zinc-800 transition-all duration-200 hover:bg-white/70 hover:text-zinc-900 hover:shadow-sm"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasMega && activeMenu === item.label && (
                  <div className="fixed left-0 top-20 w-full border-t border-blue-100 bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/10 overflow-hidden">
                    {item.type === "company" ? (
                      <div className="company-menu-font relative mx-auto flex max-w-7xl justify-between items-stretch">
                        {/* Shared display font */}
                        <style jsx global>{`
                          @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
                          .company-menu-font {
                            font-family:
                              "Plus Jakarta Sans", ui-sans-serif, system-ui,
                              sans-serif;
                          }
                          .company-menu-display {
                            font-family:
                              "Sora", "Plus Jakarta Sans", ui-sans-serif,
                              sans-serif;
                            letter-spacing: -0.02em;
                          }
                          @keyframes companyMenuShimmer {
                            0% {
                              transform: translateX(-120%) skewX(-12deg);
                            }
                            100% {
                              transform: translateX(220%) skewX(-12deg);
                            }
                          }
                          .company-menu-shimmer {
                            animation: companyMenuShimmer 3.5s ease-in-out
                              infinite;
                          }
                        `}</style>

                        {/* Left Side Navigation & Blog Links */}
                        <div className="grid flex-1 grid-cols-8 gap-10 py-10 pl-8 pr-8">
                          {/* Column 1: Company Links */}
                          <div className="col-span-2 space-y-4">
                            {companyColumns[0] && (
                              <div>
                                <div className="mb-4 flex items-center gap-2.5">
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <Building2
                                      className="h-4.5 w-4.5"
                                      strokeWidth={2}
                                    />
                                  </span>
                                  <h3 className="company-menu-display text-base font-bold tracking-tight text-slate-800">
                                    {companyColumns[0].title}
                                  </h3>
                                </div>
                                <div className="mb-4 h-px w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />
                                <ul className="space-y-3">
                                  {companyColumns[0].links.map((link) => (
                                    <li key={link.slug}>
                                      <Link
                                        href={`/company/${link.slug}`}
                                        onClick={() => setActiveMenu(null)}
                                        className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                                      >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-blue-500" />
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Column 2: Careers Links */}
                          <div className="col-span-2 space-y-4">
                            {companyColumns[1] && (
                              <div>
                                <div className="mb-4 flex items-center gap-2.5">
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <Briefcase
                                      className="h-4.5 w-4.5"
                                      strokeWidth={2}
                                    />
                                  </span>
                                  <h3 className="company-menu-display text-base font-bold tracking-tight text-slate-800">
                                    {companyColumns[1].title}
                                  </h3>
                                </div>
                                <div className="mb-4 h-px w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />
                                <ul className="space-y-3">
                                  {companyColumns[1].links.map((link) => (
                                    <li key={link.slug}>
                                      <Link
                                        href={`/company/${link.slug}`}
                                        onClick={() => setActiveMenu(null)}
                                        className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-blue-600"
                                      >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-blue-500" />
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Column 3: Trending Blogs & Social Links */}
                          <div className="col-span-4 space-y-6">
                            {/* Trending Blogs */}
                            <div>
                              <div className="mb-4 flex items-center gap-2.5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <TrendingUp
                                    className="h-4.5 w-4.5"
                                    strokeWidth={2}
                                  />
                                </span>
                                <h3 className="company-menu-display text-base font-bold tracking-tight text-slate-800">
                                  Trending Blogs
                                </h3>
                              </div>
                              <div className="mb-4 h-px w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />
                              <div className="space-y-3">
                                {trendingBlogs.map((blog, idx) => (
                                  <Link
                                    key={idx}
                                    href={blog.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-center gap-3 rounded-xl p-1.5 transition-colors duration-200 hover:bg-blue-50/60"
                                  >
                                    {/* Blog Image Thumbnail */}
                                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-200/80 bg-slate-900 shadow-sm">
                                      {blog.image ? (
                                        <Image
                                          src={blog.image}
                                          alt={blog.title}
                                          fill
                                          sizes="64px"
                                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                      ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-center">
                                          <span className="text-[9px] font-black uppercase tracking-wider text-blue-400">
                                            Greyloops
                                          </span>
                                        </div>
                                      )}
                                    </div>

                                    {/* Blog Title */}
                                    <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-700 transition-colors group-hover:text-blue-600">
                                      {blog.title}
                                    </h4>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Find us on */}
                            <div>
                              <div className="mb-3 flex items-center gap-2.5">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Share2 className="h-4 w-4" strokeWidth={2} />
                                </span>
                                <h3 className="company-menu-display text-sm font-bold tracking-tight text-slate-800">
                                  Find us on
                                </h3>
                              </div>
                              <div className="flex items-center gap-2.5">
                                {socialLinks.map((social) => {
                                  const IconComponent = social.icon;
                                  return (
                                    <a
                                      key={social.name}
                                      href={social.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={social.name}
                                      className={`group flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr ${social.gradient} text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                    >
                                      <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side: Direct Contact Card */}
                        <div className="relative w-96 shrink-0 overflow-hidden border-l border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-7 text-white shadow-2xl">
                          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                          <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/15 blur-2xl" />
                          <HelpCircle className="pointer-events-none absolute -right-4 top-10 h-32 w-32 text-white/5" />

                          <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="company-menu-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
                          </div>

                          <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-400">
                                    Direct Contact
                                  </span>
                                  <h4 className="company-menu-display text-xl font-bold tracking-tight text-white">
                                    Have Any Questions?
                                  </h4>
                                </div>
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-600/20 text-blue-300 shadow-inner backdrop-blur-md">
                                  <PhoneCall className="h-5 w-5" />
                                </span>
                              </div>

                              {/* Contact Info List */}
                              <div className="mt-6 space-y-4">
                                <a
                                  href="tel:+180045647823"
                                  className="group flex items-center gap-3 text-base font-bold text-blue-300 transition-colors hover:text-white"
                                >
                                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-105">
                                    <PhoneCall className="h-4 w-4" />
                                  </span>
                                  +1-800-456-478-23
                                </a>

                                <div className="flex items-start gap-3">
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                                    <Mail className="h-4 w-4" />
                                  </span>
                                  <div>
                                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                      Business:
                                    </span>
                                    <a
                                      href="mailto:query@greyloops.com"
                                      className="text-sm font-semibold text-white transition-colors hover:text-blue-300"
                                    >
                                      query@greyloops.com
                                    </a>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3">
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                                    <Briefcase className="h-4 w-4" />
                                  </span>
                                  <div>
                                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                      Careers:
                                    </span>
                                    <a
                                      href="mailto:hr@greyloops.com"
                                      className="text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                                    >
                                      hr@greyloops.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <Link
                              href="/contact"
                              onClick={() => setActiveMenu(null)}
                              className="relative mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
                            >
                              Get in Touch
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : item.type === "portfolio" ? (
                      /* Portfolio mega menu */
                      <div className="relative mx-auto max-w-7xl px-8 py-10">
                        <div className="grid grid-cols-4 gap-5">
                          {item.projects.map((project) => {
                            const ProjectIcon = project.icon;
                            return (
                              <Link
                                key={project.slug}
                                href={`/portfolio/${project.slug}`}
                                onClick={() => setActiveMenu(null)}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/10"
                              >
                                <div
                                  className={`relative flex h-28 items-center justify-center gap-2.5 bg-gradient-to-br ${project.from} ${project.to}`}
                                >
                                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                                    <ProjectIcon
                                      className="h-5.5 w-5.5"
                                      strokeWidth={2}
                                    />
                                  </span>
                                  <span className="text-lg font-extrabold text-white">
                                    {project.name}
                                  </span>
                                </div>

                                <div className="flex flex-1 flex-col p-4">
                                  <h4 className="mb-1.5 text-sm font-bold leading-snug text-zinc-900">
                                    {project.tagline}
                                  </h4>
                                  <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-zinc-500">
                                    {project.description}
                                  </p>
                                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                                    Discover More
                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </span>
                                </div>
                              </Link>
                            );
                          })}

                          {/* View All card */}
                          <Link
                            href="/portfolio"
                            onClick={() => setActiveMenu(null)}
                            className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-5 text-center transition-all duration-200 hover:border-blue-400 hover:bg-blue-50"
                          >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                              <LayoutGrid
                                className="h-5.5 w-5.5"
                                strokeWidth={2}
                              />
                            </span>
                            <span className="text-sm font-bold text-blue-600">
                              View All Projects
                            </span>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      /* Existing Services / Solutions mega menu */
                      <div className="relative mx-auto flex max-w-7xl">
                        {/* Text columns */}
                        <div className="grid flex-1 grid-cols-3 gap-10 px-8 py-10">
                          {(item.columns || []).map((col) => {
                            const Icon = col.icon;
                            return (
                              <div key={col.slug}>
                                <div className="mb-4 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2.5">
                                  {Icon && (
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                      <Icon
                                        className="h-4.5 w-4.5"
                                        strokeWidth={2}
                                      />
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
                                        onClick={() => setActiveMenu(null)}
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

                        {/* Stat Card */}
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
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop CTA - Pinned strictly to the Right */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-base font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-600"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-white/70"
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
                        {item.type === "company" ? (
                          /* Mobile Company Accordion */
                          <div className="space-y-4">
                            {companyColumns.map((col) => (
                              <div key={col.title}>
                                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-orange-500">
                                  {col.title}
                                </h4>
                                <ul className="space-y-2 pl-4">
                                  {col.links.map((link) => (
                                    <li key={link.slug}>
                                      <Link
                                        href={`/company/${link.slug}`}
                                        className="block py-1 text-base font-medium text-zinc-700"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Mobile Direct Contact Section */}
                            <div className="mt-4 rounded-xl bg-slate-900 p-4 text-white">
                              <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                                Direct Contact
                              </h5>
                              <p className="text-sm font-bold">
                                +1-800-456-478-23
                              </p>
                              <div className="mt-2 text-xs text-slate-300 space-y-1">
                                <p>
                                  <span className="text-slate-400">
                                    Business:
                                  </span>{" "}
                                  query@greyloops.com
                                </p>
                                <p>
                                  <span className="text-slate-400">
                                    Careers:
                                  </span>{" "}
                                  hr@greyloops.com
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : item.type === "portfolio" ? (
                          /* Mobile Portfolio Accordion */
                          <ul className="space-y-1">
                            {item.projects.map((project) => {
                              const ProjectIcon = project.icon;
                              return (
                                <li key={project.slug}>
                                  <Link
                                    href={`/portfolio/${project.slug}`}
                                    className="flex items-center gap-3 rounded-lg py-2 pr-2"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span
                                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.from} ${project.to} text-white`}
                                    >
                                      <ProjectIcon
                                        className="h-4 w-4"
                                        strokeWidth={2}
                                      />
                                    </span>
                                    <span>
                                      <span className="block text-base font-bold text-zinc-900">
                                        {project.name}
                                      </span>
                                      <span className="block text-xs text-zinc-500">
                                        {project.tagline}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                            <li>
                              <Link
                                href="/portfolio"
                                className="mt-2 flex items-center gap-2 py-2 text-sm font-bold text-blue-600"
                                onClick={() => setMobileOpen(false)}
                              >
                                View All Projects
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          /* Existing Services / Solutions accordion */
                          (item.columns || []).map((col) => {
                            const Icon = col.icon;
                            return (
                              <div key={col.slug} className="mb-4">
                                <div className="mb-2 flex items-center gap-2">
                                  {Icon && (
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-500">
                                      <Icon
                                        className="h-3.5 w-3.5"
                                        strokeWidth={2.25}
                                      />
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
                          })
                        )}
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
