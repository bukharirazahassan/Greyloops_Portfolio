import { notFound } from "next/navigation";
import { findServiceBySlug, servicesColumns } from "../../lib/navigationData";

export function generateStaticParams() {
  return servicesColumns.flatMap((col) =>
    col.links.map((link) => ({ slug: link.slug }))
  );
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
        {service.columnTitle}
      </p>
      <h1 className="mb-6 text-4xl font-extrabold text-zinc-900">{service.name}</h1>
      <p className="text-lg text-zinc-600">
        Content for {service.name} coming soon.
      </p>
    </main>
  );
}