// src/app/company/[slug]/page.js
import { notFound } from "next/navigation";
import { companyColumns, findCompanyLinkBySlug } from "../../lib/companyData";

export function generateStaticParams() {
  return companyColumns.flatMap((col) =>
    col.links.map((link) => ({ slug: link.slug }))
  );
}

export default async function CompanyDetailPage({ params }) {
  const { slug } = await params;
  const companyItem = findCompanyLinkBySlug(slug);

  if (!companyItem) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
        {companyItem.columnTitle}
      </p>
      <h1 className="mb-6 text-4xl font-extrabold text-zinc-900">{companyItem.name}</h1>
      <p className="text-lg text-zinc-600">
        Content for {companyItem.name} coming soon.
      </p>
    </main>
  );
}