//src/app/solutions/[slug]/page.js
import { notFound } from "next/navigation";
import { findSolutionBySlug, solutionsColumns } from "../../lib/navigationData";

export function generateStaticParams() {
  return solutionsColumns.flatMap((col) =>
    col.links.map((link) => ({ slug: link.slug }))
  );
}

export default async function SolutionsDetailPage({ params }) {
  const { slug } = await params;
  const solutions = findSolutionBySlug(slug);

  if (!solutions) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
        {solutions.columnTitle}
      </p>
      <h1 className="mb-6 text-4xl font-extrabold text-zinc-900">{solutions.name}</h1>
      <p className="text-lg text-zinc-600">
        Content for {solutions.name} coming soon.
      </p>
    </main>
  );
}