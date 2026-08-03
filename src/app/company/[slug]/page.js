import { notFound } from "next/navigation";
import { companyColumns, findCompanyLinkBySlug } from "../../lib/companyData";
import AboutUs from "../../components/company/AboutUs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return companyColumns.flatMap((col) =>
    col.links.map((link) => ({ slug: link.slug }))
  );
}

export default async function CompanyDetailPage({ params }) {
  const { slug } = await params;
  const companyItem = findCompanyLinkBySlug(slug);

  if (!companyItem) return notFound();

  // About Us has its own full-width hero + sections, so it must NOT be
  // nested inside the constrained/padded <main> used for generic pages below.
  if (slug === "about-us") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
          {companyItem.columnTitle}
        </p>
        <h1 className="mb-6 text-4xl font-extrabold text-zinc-900">
          {companyItem.name}
        </h1>
        <p className="text-lg text-zinc-600">
          Content for {companyItem.name} coming soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}