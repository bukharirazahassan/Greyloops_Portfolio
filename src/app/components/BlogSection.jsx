// src/components/BlogSection.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How to Choose the Best Mobile App Development Company",
    href: "/MainBlogs/BestMobileDevelopmentCompany",
    image: "/Blogs_Mobile_App_Development_Company_v1.png",
    category: "Technology",
    date: "06 December, 2026",
  },
  {
    id: 2,
    title: "Latest ERP Trends: How AI and Cloud Technology Are Transforming Businesses",
    href: "/MainBlogs/latest-erp-trends",
    image: "/mega_menu_erp_trend_v1.png",
    category: "Software",
    date: "13 October, 2026",
  },
  {
    id: 3,
    title: "Cloud infrastructure trends every CTO should watch out for",
    href: "/MainBlogs",
    image: "/3.jpg",
    category: "Business",
    date: "18 August, 2026",
  },
];

function BlogCard({ post }) {
  return (
    <div className="group flex flex-col">
      {/* Image container with notched bottom-left corner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Notched bottom-left badge strip overlay */}
        <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-tr-2xl bg-slate-50 pb-1.5 pr-4 pt-2">
          {/* Category Tag */}
          <span className="rounded-lg border border-slate-200/80 bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-800 shadow-xs backdrop-blur-xs">
            {post.category}
          </span>
          {/* Date */}
          <span className="text-xs font-medium text-slate-500">
            {post.date}
          </span>
        </div>
      </div>

      {/* Content below the card */}
      <div className="mt-4 flex flex-1 flex-col justify-between text-left">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
          {post.title}
        </h3>

        <Link
          href={post.href}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-600 transition-colors group-hover:text-blue-600"
        >
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pb-16 pt-4 text-slate-900 lg:pb-24 lg:pt-8">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Ambient glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      {/* Full-width container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start px-2 text-left sm:px-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Latest blog posts</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-6xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="text-slate-900">News &amp; </span>
            <span className="text-blue-600">Events</span>
          </motion.h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}