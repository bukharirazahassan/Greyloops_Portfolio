"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, ArrowUpRight, Sparkles } from "lucide-react";

const posts = [
  {
    id: 1,
    image: "/blog_hero_page_1.png",
    category: "Technology",
    author: "Greyloops Team",
    date: "12 August, 2024",
    title: "How AI is reshaping enterprise software delivery.",
    href: "/about",
    size: "large",
  },
  {
    id: 2,
    image: "/2.jpg",
    category: "Case Study",
    author: "Greyloops Team",
    date: "13 August, 2024",
    title: "Scaling a SaaS platform to 100K users, our playbook.",
    href: "/about",
    size: "small",
  },
  {
    id: 3,
    image: "/3.jpg",
    category: "Insights",
    author: "Greyloops Team",
    date: "14 August, 2024",
    title: "Cloud infrastructure trends every CTO should watch.",
    href: "/about",
    size: "small",
  },
];

function BlogCard({ post, className = "" }) {
  return (
    <Link
      href={post.href}
      className={`group relative block overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-blue-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 ${className}`}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

      {/* Category badge */}
      <span className="absolute right-5 top-5 z-10 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25">
        {post.category}
      </span>

      {/* Read more arrow, appears on hover */}
      <span className="absolute right-5 z-10 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" style={{ bottom: "1.25rem" }}>
        <ArrowUpRight className="h-4 w-4" />
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-300">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-blue-400" />
            {post.author}
          </span>
          <span className="h-px w-5 bg-slate-500" />
          <span>{post.date}</span>
        </div>
        <h3 className="blog-display text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-xl lg:text-2xl">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  const [featured, ...rest] = posts;

  return (
    <section className="blog-font relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 py-20 sm:py-28">
      {/* Shared display font, same pairing as the rest of the site */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap");
        .blog-font {
          font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .blog-display {
          font-family: "Sora", "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Dot-grid texture — matched to the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 20%, black 25%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-[400px] w-[400px] rounded-full bg-blue-300/35 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Latest Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="blog-display mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              News &amp;{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Updates
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            Explore our latest thoughts, technical deep-dives, and engineering playbooks.
          </motion.p>
        </div>

        {/* Grid: one large featured post + two stacked smaller posts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <BlogCard post={featured} className="aspect-[4/5] w-full sm:aspect-[4/4.2] lg:h-full lg:aspect-auto" />
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <BlogCard post={post} className="aspect-[16/10] w-full sm:aspect-[16/9]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}