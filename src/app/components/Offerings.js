//src/app/components/Offerings.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesColumns, solutionsColumns } from "../lib/navigationData";

const tabs = [
  { key: "services", label: "Our Services", basePath: "/services", columns: servicesColumns },
  { key: "solutions", label: "Our Solutions", basePath: "/solutions", columns: solutionsColumns },
];

export default function Offerings() {
  const [activeTab, setActiveTab] = useState("services");
  const currentTab = tabs.find((t) => t.key === activeTab);

  const [activeSlug, setActiveSlug] = useState(currentTab.columns[0].slug);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    const nextTab = tabs.find((t) => t.key === tabKey);
    setActiveSlug(nextTab.columns[0].slug);
  };

  const activeColumn =
    currentTab.columns.find((c) => c.slug === activeSlug) || currentTab.columns[0];
  const Icon = activeColumn.icon;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle decorative circles, consistent with the rest of the site */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100/50 to-indigo-100/30 blur-2xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-orange-50 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Our <span className="text-blue-600">Offerings</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            From the initial stages of development to QA processes to robust
            IT operations to AI solutions, we offer a broad range of tech
            services and solutions customized to your requirements.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center border-b border-zinc-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`relative px-6 py-3 text-lg font-semibold transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-blue-600"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content: left category list + right detail panel */}
        <div className="grid gap-10 md:grid-cols-[260px_1fr]">
          {/* Left list */}
          <div className="relative flex md:flex-col gap-2 overflow-x-auto border-b border-zinc-200 pb-4 md:overflow-visible md:border-b-0 md:border-l md:pb-0 md:pl-6">
            {currentTab.columns.map((col) => {
              const isActive = col.slug === activeSlug;
              return (
                <button
                  key={col.slug}
                  onClick={() => setActiveSlug(col.slug)}
                  className={`relative shrink-0 whitespace-nowrap rounded-lg px-4 py-3 text-left text-base font-semibold transition-colors duration-200 md:whitespace-normal ${
                    isActive
                      ? "bg-blue-50 text-blue-600 md:bg-transparent"
                      : "text-zinc-700 hover:text-blue-600"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-y-0 -left-6 hidden w-0.5 rounded-full bg-blue-600 md:block" />
                  )}
                  {col.title}
                </button>
              );
            })}
          </div>

          {/* Right detail panel */}
          <div className="rounded-2xl bg-zinc-50 p-8 sm:p-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
                {activeColumn.title}
              </h3>
            </div>

            <p className="mb-6 text-base leading-relaxed text-zinc-600">
              Our {activeColumn.title.toLowerCase()} offerings help you solve
              real business problems with proven, scalable approaches.
              Here&rsquo;s what&rsquo;s included — content for each item below
              can be expanded with full detail anytime.
            </p>

            <ul className="space-y-4">
              {activeColumn.links.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`${currentTab.basePath}/${link.slug}`}
                    className="group flex items-start gap-2.5 text-base text-zinc-700 transition-colors hover:text-blue-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 transition-colors group-hover:bg-blue-500" />
                    <span>
                      <span className="font-semibold text-zinc-900 group-hover:text-blue-600">
                        {link.name}
                      </span>{" "}
                      — {link.description || "placeholder description, update anytime."}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={currentTab.basePath}
              className="mt-8 inline-flex items-center gap-1.5 text-base font-semibold text-blue-600 hover:text-blue-700"
            >
              View all {currentTab.label.toLowerCase()}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}