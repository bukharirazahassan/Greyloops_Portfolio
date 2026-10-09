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
  Users,
  Sparkles,
  BookOpen,
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
      bgImage: "/NPS_v1.png",
      label: "NPS",
      stat: "81.8%",
      text: "78% of our clients believe that greyloops is better than most other providers they have worked with.",
      rating: "5",
    },
  },
  // {
  //   label: "Solutions",
  //   href: "/solutions",
  //   hasMega: true,
  //   columns: solutionsColumns,
  //   basePath: "/solutions",
  //   statCard: {
  //     bgImage: "/Solutions-bg.jpg",
  //     label: "",
  //     stat: "99.4%",
  //     text: "Empowering businesses with enterprise-grade data architecture, intelligent automation, and scalable AI solutions.",
  //     rating: "5",
  //   },
  // },
  // {
  //   label: "Case Studies",
  //   href: "/casestudies",
  //   hasMega: true,
  //   type: "portfolio",
  //   projects: casestudiesProjects,
  // },
  // { label: "Industries", href: "/industries" },
];

/* ─────────────────────────────────────────────────────────────
   Shared mega menu sizing — Company & Services use the same
   minimum height so both panels open at an identical size.
   Change this one value to make both taller / shorter.
   ───────────────────────────────────────────────────────────── */
const MEGA_MIN_H = "min-h-[730px] min-[1700px]:min-h-[820px]";

/* ─────────────────────────────────────────────────────────────
   Apple system colours (light mode) as soft tinted icon tiles.
   Full class strings are written out so Tailwind can detect them.
   ───────────────────────────────────────────────────────────── */
const APPLE = {
  blue: {
    soft: "bg-[#007AFF]/10 text-[#007AFF]",
    hover: "group-hover:bg-[#007AFF] group-hover:text-white",
    dot: "bg-[#007AFF]",
  },
  green: {
    soft: "bg-[#34C759]/12 text-[#28A745]",
    hover: "group-hover:bg-[#34C759] group-hover:text-white",
    dot: "bg-[#34C759]",
  },
  orange: {
    soft: "bg-[#FF9500]/12 text-[#F08000]",
    hover: "group-hover:bg-[#FF9500] group-hover:text-white",
    dot: "bg-[#FF9500]",
  },
  purple: {
    soft: "bg-[#AF52DE]/10 text-[#AF52DE]",
    hover: "group-hover:bg-[#AF52DE] group-hover:text-white",
    dot: "bg-[#AF52DE]",
  },
  pink: {
    soft: "bg-[#FF2D55]/10 text-[#FF2D55]",
    hover: "group-hover:bg-[#FF2D55] group-hover:text-white",
    dot: "bg-[#FF2D55]",
  },
  teal: {
    soft: "bg-[#5AC8FA]/15 text-[#1BA6DC]",
    hover: "group-hover:bg-[#5AC8FA] group-hover:text-white",
    dot: "bg-[#5AC8FA]",
  },
  indigo: {
    soft: "bg-[#5856D6]/10 text-[#5856D6]",
    hover: "group-hover:bg-[#5856D6] group-hover:text-white",
    dot: "bg-[#5856D6]",
  },
  red: {
    soft: "bg-[#FF3B30]/10 text-[#FF3B30]",
    hover: "group-hover:bg-[#FF3B30] group-hover:text-white",
    dot: "bg-[#FF3B30]",
  },
};

const APPLE_CYCLE = [
  "blue",
  "purple",
  "green",
  "orange",
  "pink",
  "teal",
  "indigo",
  "red",
];

const TILE_SIZES = {
  md: { box: "h-10 w-10 rounded-xl", icon: "h-5 w-5" },
  lg: { box: "h-14 w-14 rounded-2xl", icon: "h-7 w-7" },
  xl: { box: "h-16 w-16 rounded-[1.25rem]", icon: "h-8 w-8" },
};

/* Soft Apple-style icon tile. Put it inside a `group` parent and pass
   interactive to get the solid-colour fill on hover. */
function IconTile({ Icon, color = "blue", size = "md", interactive = false }) {
  const c = APPLE[color] || APPLE.blue;
  const s = TILE_SIZES[size];
  return (
    <span
      className={`flex shrink-0 items-center justify-center ring-1 ring-black/[0.04] transition-all duration-200 ${s.box} ${c.soft} ${
        interactive ? c.hover : ""
      }`}
    >
      <Icon className={s.icon} strokeWidth={2} />
    </span>
  );
}

/* Picks an icon + Apple colour for each company link based on its name */
function getCompanyLinkMeta(name = "") {
  const n = name.toLowerCase();
  if (n.includes("about")) return { Icon: Users, color: "blue" };
  if (n.includes("why")) return { Icon: Sparkles, color: "purple" };
  if (n.includes("faq")) return { Icon: HelpCircle, color: "orange" };
  if (n.includes("blog")) return { Icon: BookOpen, color: "pink" };
  if (n.includes("position") || n.includes("job") || n.includes("career"))
    return { Icon: Briefcase, color: "green" };
  return { Icon: Building2, color: "teal" };
}

/* Reusable blog image with branded light fallback (used by Trending Blogs) */
function BlogImage({ blog, sizes, priority = false }) {
  return (
    <>
      {blog.image ? (
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100">
          <span className="text-sm font-black uppercase tracking-widest text-blue-600">
            Greyloops
          </span>
        </div>
      )}
    </>
  );
}

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

      <div className="relative flex h-20 w-full items-center justify-between px-4 sm:px-8 lg:px-12 font-sans text-slate-900">
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
                        : "text-slate-900 hover:bg-white/70 hover:text-blue-600 hover:shadow-sm"
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
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-semibold text-slate-900 transition-all duration-200 hover:bg-white/70 hover:text-blue-600 hover:shadow-sm"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasMega && activeMenu === item.label && (
                  <div className="fixed left-0 top-20 w-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-blue-100 bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/10 overflow-x-hidden font-sans text-slate-900">
                    {item.type === "company" ? (
                      /* ───────────── COMPANY MEGA MENU ───────────── */
                      <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/70">
                        <div
                          className={`relative mx-auto grid max-w-[1600px] grid-cols-[300px_minmax(0,1fr)_370px] items-stretch gap-8 px-10 py-10 ${MEGA_MIN_H}`}
                        >
                          {/* ── Column 1: three separate cards — Company, Careers, Find us on ── */}
                          <div className="flex flex-col gap-4">
                            {companyColumns.slice(0, 2).map((col, colIdx) => (
                              <div
                                key={col.title}
                                className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm shadow-blue-900/5"
                              >
                                <div className="mb-3 flex items-center gap-3.5">
                                  <IconTile
                                    Icon={colIdx === 0 ? Building2 : Briefcase}
                                    color={colIdx === 0 ? "blue" : "orange"}
                                    size="lg"
                                  />
                                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                                    {col.title}
                                  </h3>
                                </div>
                                <ul className="space-y-1">
                                  {col.links.map((link) => {
                                    const { Icon: LinkIcon, color } =
                                      getCompanyLinkMeta(link.name);
                                    return (
                                      <li key={link.slug}>
                                        <Link
                                          href={`/company/${link.slug}`}
                                          onClick={() => setActiveMenu(null)}
                                          className="group flex items-center gap-3 rounded-xl p-1.5 text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
                                        >
                                          <IconTile
                                            Icon={LinkIcon}
                                            color={color}
                                            size="md"
                                            interactive
                                          />
                                          <span className="flex-1">
                                            {link.name}
                                          </span>
                                          <ArrowUpRight className="h-4 w-4 -translate-x-1 text-slate-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}

                            {/* Find us on — its own card, fills any leftover height */}
                            <div className="flex flex-1 flex-col justify-center gap-4 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm shadow-blue-900/5">
                              <div className="flex items-center gap-3">
                                <IconTile Icon={Share2} color="indigo" size="md" />
                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                  Find us on
                                </h4>
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                {socialLinks.map((social) => {
                                  const IconComponent = social.icon;
                                  return (
                                    <a
                                      key={social.name}
                                      href={social.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={social.name}
                                      className={`group flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${social.gradient} text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                    >
                                      <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* ── Column 2: Trending Blogs (large images) ── */}
                          <div className="flex min-w-0 flex-col">
                            <div className="mb-5 flex items-center gap-3.5">
                              <IconTile Icon={TrendingUp} color="pink" size="lg" />
                              <div>
                                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                                  Trending Blogs
                                </h3>
                                <p className="text-sm font-medium text-slate-500">
                                  Fresh insights from the Greyloops team
                                </p>
                              </div>
                            </div>

                            {trendingBlogs.length > 0 && (
                              <div className="flex flex-1 flex-col gap-5">
                                {/* Featured blog — large hero image */}
                                <Link
                                  href={trendingBlogs[0].href}
                                  onClick={() => setActiveMenu(null)}
                                  className="group relative block aspect-[2.2/1] w-full shrink-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                                >
                                  <BlogImage
                                    blog={trendingBlogs[0]}
                                    sizes="(min-width: 1280px) 820px, 60vw"
                                    priority
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                                  <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#007AFF] shadow-md backdrop-blur">
                                    Featured Article
                                  </span>

                                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-all duration-300 group-hover:bg-[#007AFF] group-hover:text-white">
                                    <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                  </span>

                                  <div className="absolute inset-x-0 bottom-0 p-6">
                                    <h4 className="line-clamp-2 max-w-2xl text-2xl font-extrabold leading-snug text-white drop-shadow">
                                      {trendingBlogs[0].title}
                                    </h4>
                                  </div>
                                </Link>

                                {/* Remaining blogs — large image cards (fill the row and remaining height) */}
                                {trendingBlogs.length > 1 && (
                                  <div
                                    className="grid flex-1 gap-5"
                                    style={{
                                      gridTemplateColumns: `repeat(${Math.min(
                                        trendingBlogs.length - 1,
                                        3,
                                      )}, minmax(0, 1fr))`,
                                    }}
                                  >
                                    {trendingBlogs
                                      .slice(1, 4)
                                      .map((blog, idx) => (
                                        <Link
                                          key={idx}
                                          href={blog.href}
                                          onClick={() => setActiveMenu(null)}
                                          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-blue-900/10"
                                        >
                                          <div className="relative min-h-[11rem] w-full flex-1 overflow-hidden bg-slate-100">
                                            <BlogImage
                                              blog={blog}
                                              sizes="(min-width: 1280px) 400px, 33vw"
                                            />
                                          </div>
                                          <div className="flex shrink-0 items-start justify-between gap-3 p-4">
                                            <h4 className="line-clamp-2 text-base font-bold leading-snug text-slate-900">
                                              {blog.title}
                                            </h4>
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#007AFF]/10 text-[#007AFF] transition-all duration-300 group-hover:bg-[#007AFF] group-hover:text-white">
                                              <ArrowUpRight className="h-5 w-5" />
                                            </span>
                                          </div>
                                        </Link>
                                      ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* ── Column 3: Direct Contact Card ── */}
                          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 shadow-sm shadow-blue-900/5">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />
                            <HelpCircle className="pointer-events-none absolute -right-6 bottom-24 h-40 w-40 text-[#007AFF]/5" />

                            <div className="relative z-10">
                              <div className="flex items-center gap-4">
                                <IconTile Icon={PhoneCall} color="green" size="xl" />
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#007AFF]">
                                    Direct Contact
                                  </span>
                                  <h4 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
                                    Have Any Questions?
                                  </h4>
                                </div>
                              </div>

                              <div className="my-6 h-px w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />

                              {/* Contact Info List */}
                              <div className="space-y-4">
                                <a
                                  href="tel:+180045647823"
                                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                                >
                                  <IconTile
                                    Icon={PhoneCall}
                                    color="green"
                                    size="lg"
                                    interactive
                                  />
                                  <div>
                                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                      Call us:
                                    </span>
                                    <span className="text-lg font-extrabold text-slate-900">
                                      +1-800-456-478-23
                                    </span>
                                  </div>
                                </a>

                                <a
                                  href="mailto:query@greyloops.com"
                                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                                >
                                  <IconTile
                                    Icon={Mail}
                                    color="blue"
                                    size="lg"
                                    interactive
                                  />
                                  <div className="min-w-0">
                                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                      Business:
                                    </span>
                                    <span className="block truncate text-base font-bold text-slate-900">
                                      Info@greyloops.com
                                    </span>
                                  </div>
                                </a>

                                <a
                                  href="mailto:hr@greyloops.com"
                                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                                >
                                  <IconTile
                                    Icon={Briefcase}
                                    color="orange"
                                    size="lg"
                                    interactive
                                  />
                                  <div className="min-w-0">
                                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                      Careers:
                                    </span>
                                    <span className="block truncate text-base font-bold text-slate-900">
                                      careers@greyloops.com
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>

                            <div className="relative z-10 pt-8">
                              <Link
                                href="/contact"
                                onClick={() => setActiveMenu(null)}
                                className="relative flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/35"
                              >
                                Get in Touch
                                <ArrowUpRight className="h-5 w-5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.type === "portfolio" ? (
                      /* Portfolio mega menu */
                      <div className="relative mx-auto max-w-7xl px-8 py-10">
                        <div className="grid grid-cols-4 gap-5 items-stretch">
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

                                <div className="flex flex-1 flex-col p-4 justify-between">
                                  <div>
                                    <h4 className="mb-1.5 text-sm font-bold leading-snug text-slate-900">
                                      {project.tagline}
                                    </h4>
                                    <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-600">
                                      {project.description}
                                    </p>
                                  </div>
                                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
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
                      /* ───────────── SERVICES / SOLUTIONS MEGA MENU (matches Company) ───────────── */
                      <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/70">
                        <div
                          className={`relative mx-auto grid max-w-[1600px] items-stretch gap-8 px-10 py-10 ${MEGA_MIN_H} ${
                            item.statCard
                              ? "grid-cols-[minmax(0,1fr)_370px]"
                              : "grid-cols-1"
                          }`}
                        >
                          {/* Left: heading + column cards */}
                          <div className="flex min-w-0 flex-col">
                            <div className="mb-5 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3.5">
                                <IconTile
                                  Icon={LayoutGrid}
                                  color="blue"
                                  size="lg"
                                />
                                <div>
                                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                                    Our {item.label}
                                  </h3>
                                  <p className="text-sm font-medium text-slate-500">
                                    Everything we build, run and scale for you
                                  </p>
                                </div>
                              </div>
                              <Link
                                href={item.href}
                                onClick={() => setActiveMenu(null)}
                                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition-all duration-200 hover:border-[#007AFF] hover:text-[#007AFF] hover:shadow-md"
                              >
                                View all {item.label.toLowerCase()}
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </Link>
                            </div>

                            <div className="grid flex-1 auto-rows-fr grid-cols-3 gap-5">
                              {(item.columns || []).map((col, colIdx) => {
                                const ColIcon = col.icon || Building2;
                                const color =
                                  APPLE_CYCLE[colIdx % APPLE_CYCLE.length];
                                return (
                                  <div
                                    key={col.slug}
                                    className="flex flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-blue-900/5"
                                  >
                                    <div className="mb-4 flex items-center gap-3.5">
                                      <IconTile
                                        Icon={ColIcon}
                                        color={color}
                                        size="lg"
                                      />
                                      <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900">
                                        {col.title}
                                      </h3>
                                    </div>
                                    <div className="mb-3 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
                                    <ul className="space-y-1">
                                      {col.links.map((link) => (
                                        <li key={link.slug}>
                                          <Link
                                            href={`${item.basePath}/${link.slug}`}
                                            onClick={() => setActiveMenu(null)}
                                            className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
                                          >
                                            <span
                                              className={`h-2 w-2 shrink-0 rounded-full ${APPLE[color].dot} opacity-60 transition-all duration-200 group-hover:scale-125 group-hover:opacity-100`}
                                            />
                                            <span className="flex-1">
                                              {link.name}
                                            </span>
                                            <ArrowUpRight className="h-4 w-4 -translate-x-1 text-slate-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Right: Stat Card — image shown in full (896x1200 ratio), content below */}
                          {item.statCard && (
                            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-lg shadow-blue-900/10">
                              {/* Image frame uses the image's own ratio so it fills edge-to-edge with no crop */}
                              <div className="relative aspect-[896/1200] w-full shrink-0 overflow-hidden bg-slate-100">
                                <Image
                                  src={item.statCard.bgImage}
                                  alt={item.statCard.label || "Greyloops"}
                                  fill
                                  sizes="370px"
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-sm font-extrabold tracking-tight text-[#007AFF] shadow-md backdrop-blur">
                                  {item.statCard.label || "Greyloops"}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                  <p className="mb-2 text-6xl font-extrabold tracking-tight drop-shadow">
                                    {item.statCard.stat}
                                  </p>
                                  <p className="text-sm leading-relaxed text-zinc-100">
                                    {item.statCard.text}
                                  </p>
                                </div>
                              </div>

                              {/* Footer fills whatever height is left */}
                              <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34C759] px-4 py-1.5 text-sm font-bold text-white shadow-md">
                                  {"★".repeat(Number(item.statCard.rating))}
                                </span>
                                <Link
                                  href="/contact"
                                  onClick={() => setActiveMenu(null)}
                                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-600"
                                >
                                  Start a Project
                                  <ArrowUpRight className="h-5 w-5" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
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
          className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 hover:bg-white/70"
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

                            {/* Mobile Direct Contact Section (light theme) */}
                            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-slate-900">
                              <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                                Direct Contact
                              </h5>
                              <p className="text-sm font-bold">
                                +1-800-456-478-23
                              </p>
                              <div className="mt-2 text-xs text-slate-600 space-y-1">
                                <p>
                                  <span className="text-slate-500">
                                    Business:
                                  </span>{" "}
                                  Info@greyloops.com
                                </p>
                                <p>
                                  <span className="text-slate-500">
                                    Careers:
                                  </span>{" "}
                                  careers@greyloops.com
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