// src/app/lib/companyData.js
import { slugify } from "./navigationData";

// Custom SVG Social Icons to prevent build errors with lucide-react
const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const XIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      clipRule="evenodd"
    />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.254.418-4.814a2.504 2.504 0 0 1 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.812.418zM9.75 15.02l5.75-3.02-5.75-3.02v6.04z"
      clipRule="evenodd"
    />
  </svg>
);

const rawCompanyColumns = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/company/about-us" },
      { name: "Why GreyLoops", href: "/company/why-greyloops" },
      // { name: "Our Team", href: "/company/our-team" },
      { name: "FAQs", href: "/company/faqs" },
      { name: "Blog", href: "/company/blog" },
    ],
  },
  {
    title: "Careers",
    links: [
      { name: "Open Positions", href: "/company/open-positions" },
    ],
  },
];

export const companyColumns = rawCompanyColumns.map((col) => ({
  title: col.title,
  slug: slugify(col.title),
  links: col.links.map((link) => ({
    name: link.name,
    href: link.href,
    slug: slugify(link.name),
  })),
}));

// Helper function to find company details by slug
export function findCompanyLinkBySlug(slug) {
  for (const col of companyColumns) {
    const match = col.links.find((link) => link.slug === slug);
    if (match) {
      return {
        ...match,
        columnTitle: col.title,
      };
    }
  }
  return null;
}

// Kept in sync with the `posts` array in BlogSection.jsx — same three
// posts, same images (/1.jpg, /2.jpg, /3.jpg), same hrefs. Update both
// places together if the featured posts change.
export const trendingBlogs = [
  {
    title: "How AI is reshaping enterprise software delivery.",
    href: "/about",
    image: "/1.jpg",
  },
  {
    title: "Scaling a SaaS platform to 100K users, our playbook.",
    href: "/about",
    image: "/2.jpg",
  },
  {
    title: "Cloud infrastructure trends every CTO should watch.",
    href: "/about",
    image: "/3.jpg",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://linkedin.com",
    gradient: "from-blue-600 to-blue-700 hover:shadow-blue-500/40",
  },
  {
    name: "X",
    icon: XIcon,
    href: "https://x.com",
    gradient: "from-slate-800 to-black hover:shadow-slate-700/40",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://facebook.com",
    gradient: "from-blue-500 to-indigo-600 hover:shadow-indigo-500/40",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com",
    gradient: "from-amber-500 via-rose-500 to-purple-600 hover:shadow-rose-500/40",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "https://youtube.com",
    gradient: "from-red-600 to-rose-700 hover:shadow-red-500/40",
  },
];