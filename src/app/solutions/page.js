//src/app/solutions/page.js
import Link from "next/link";
import Header from "../components/Header";
import { solutionsColumns } from "../lib/navigationData";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 py-20 sm:py-28">
        {/* Decorative circles, consistent with the mega menu styling */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/30 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-orange-100/50 blur-2xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100">
            How We Help
          </span>
          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Solutions Engineered for{" "}
            <span className="text-blue-600">Scale and Intelligence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600">
            We design and build data, AI, and commerce solutions that turn
            complexity into a competitive advantage — grounded in real
            architecture, not just proof-of-concepts.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {solutionsColumns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.slug}
                className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-orange-300" />

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </span>
                  <h2 className="text-xl font-bold text-zinc-900">
                    {col.title}
                  </h2>
                </div>

                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={`/solutions/${link.slug}`}
                        className="flex items-center gap-2 text-base font-medium text-zinc-600 transition-colors hover:text-blue-600"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-zinc-300 transition-colors group-hover:bg-blue-400" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}