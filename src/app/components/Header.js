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
import {
  companyColumns,
  trendingBlogs,
  socialLinks,
} from "../lib/companyData";

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
  {
    label: "Case Studies",
    href: "/casestudies",
    hasMega: true,
    type: "portfolio",
    projects: casestudiesProjects,
  },
  { label: "Industries", href: "/industries" },
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
        <nav ref={navRef} className="hidden md:flex flex-1 items-center justify-center gap-1">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasMega ? (
                <button
                  type="button"
                  onClick={() => toggleMenu(item.label)}
                  aria-expanded={activeMenu === item.label}
                  className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-200 ${
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
                  className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-base font-semibold text-zinc-800 transition-all duration-200 hover:bg-white/70 hover:text-zinc-900 hover:shadow-sm"
                >
                  {item.label}
                </Link>
              )}

              {item.hasMega && activeMenu === item.label && (
                <div className="fixed left-0 top-16 w-full border-t border-blue-100 bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/10 overflow-hidden">
                  {
                  item.type === "company" ? (
                    /* Modern Full-Height Edge-to-Edge Company Mega Menu */
                    <div className="relative mx-auto flex max-w-7xl justify-between items-stretch">
                      {/* Left Side Navigation & Blog Links */}
                      <div className="grid flex-1 grid-cols-8 gap-10 py-10 pl-8 pr-8">
                        {/* Column 1: Company Links */}
                        <div className="col-span-2 space-y-4">
                          {companyColumns[0] && (
                            <div>
                              <div className="mb-4 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2.5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Building2 className="h-4.5 w-4.5" strokeWidth={2} />
                                </span>
                                <h3 className="text-lg font-bold text-zinc-900">
                                  {companyColumns[0].title}
                                </h3>
                              </div>
                              <ul className="space-y-3.5">
                                {companyColumns[0].links.map((link) => (
                                  <li key={link.slug}>
                                    <Link
                                      href={`/company/${link.slug}`}
                                      onClick={() => setActiveMenu(null)}
                                      className="text-base font-medium text-zinc-700 hover:text-blue-600 transition-colors block"
                                    >
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
                              <div className="mb-4 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2.5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Briefcase className="h-4.5 w-4.5" strokeWidth={2} />
                                </span>
                                <h3 className="text-lg font-bold text-zinc-900">
                                  {companyColumns[1].title}
                                </h3>
                              </div>
                              <ul className="space-y-3.5">
                                {companyColumns[1].links.map((link) => (
                                  <li key={link.slug}>
                                    <Link
                                      href={`/careers/${link.slug}`}
                                      onClick={() => setActiveMenu(null)}
                                      className="text-base font-medium text-zinc-700 hover:text-blue-600 transition-colors block"
                                    >
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
                            <div className="mb-4 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2.5">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <TrendingUp className="h-4.5 w-4.5" strokeWidth={2} />
                              </span>
                              <h3 className="text-lg font-bold text-zinc-900">
                                Trending Blogs
                              </h3>
                            </div>
                            <div className="space-y-3.5">
                              {trendingBlogs.map((blog, idx) => (
                                <Link
                                  key={idx}
                                  href={blog.href}
                                  onClick={() => setActiveMenu(null)}
                                  className="group flex items-center gap-3 transition-colors"
                                >
                                  {/* Blog Image Thumbnail */}
                                  <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center border border-slate-800 shadow-sm">
                                    {blog.image ? (
                                      <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                                      />
                                    ) : (
                                      <div className="flex h-full w-full items-center justify-center text-center">
                                        <span className="text-[9px] font-black tracking-wider text-blue-400 uppercase">
                                          Greyloops
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  {/* Blog Title */}
                                  <h4 className="text-sm font-medium text-zinc-700 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                  </h4>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Find us on: Colorful Modern Icons */}
                          <div>
                            <div className="mb-3 flex items-center gap-2.5 border-b-2 border-orange-400 pb-2">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <Share2 className="h-4 w-4" strokeWidth={2} />
                              </span>
                              <h3 className="text-lg font-bold text-zinc-900">
                                Find us on:
                              </h3>
                            </div>
                            <div className="flex items-center gap-2.5 pt-1">
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

                      {/* Right Side: Direct Contact Card - Touching Top & Bottom Full Bleed */}
                      <div className="relative w-96 shrink-0 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-7 text-white flex flex-col justify-between border-l border-slate-800 shadow-2xl">
                        {/* Shimmer Sweep Animation Layer */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          <div className="animate-shimmer absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -skew-x-12" />
                        </div>

                        {/* Ambient Background Blur Glows */}
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
                        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-orange-500/15 blur-2xl pointer-events-none" />
                        <HelpCircle className="absolute -right-4 top-10 h-32 w-32 text-white/5 pointer-events-none" />

                        {/* Header Section */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400">
                                Direct Contact
                              </span>
                              <h4 className="text-xl font-black text-white tracking-tight">
                                Have Any Questions?
                              </h4>
                            </div>
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/30 text-blue-300 backdrop-blur-md border border-blue-400/20 shadow-inner">
                              <PhoneCall className="h-5 w-5" />
                            </span>
                          </div>

                          {/* Contact Info List */}
                          <div className="mt-6 space-y-4">
                            {/* Phone Call */}
                            <a
                              href="tel:+180045647823"
                              className="group flex items-center gap-3 text-base font-bold text-blue-300 hover:text-white transition-colors"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-105">
                                <PhoneCall className="h-4 w-4" />
                              </span>
                              +1-800-456-478-23
                            </a>

                            {/* Business Email */}
                            <div className="flex items-start gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300 mt-0.5">
                                <Mail className="h-4 w-4" />
                              </span>
                              <div>
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                  Business:
                                </span>
                                <a
                                  href="mailto:query@greyloops.com"
                                  className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                                >
                                  query@greyloops.com
                                </a>
                              </div>
                            </div>

                            {/* Careers Email */}
                            <div className="flex items-start gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400 mt-0.5">
                                <Briefcase className="h-4 w-4" />
                              </span>
                              <div>
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                  Careers:
                                </span>
                                <a
                                  href="mailto:hr@greyloops.com"
                                  className="text-sm font-semibold text-white hover:text-orange-300 transition-colors"
                                >
                                  hr@greyloops.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Direct Call to Action Button */}
                        <Link
                          href="/contact"
                          onClick={() => setActiveMenu(null)}
                          className="relative z-10 mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-5 py-2.5 text-xs font-extrabold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-blue-500/30"
                        >
                          Get in Touch
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
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
                            <LayoutGrid className="h-5.5 w-5.5" strokeWidth={2} />
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
                          prev === item.label ? null : item.label
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
                              <p className="text-sm font-bold">+1-800-456-478-23</p>
                              <div className="mt-2 text-xs text-slate-300 space-y-1">
                                <p><span className="text-slate-400">Business:</span> query@greyloops.com</p>
                                <p><span className="text-slate-400">Careers:</span> hr@greyloops.com</p>
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