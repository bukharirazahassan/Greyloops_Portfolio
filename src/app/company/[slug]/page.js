import { notFound } from "next/navigation";
import { companyColumns, findCompanyLinkBySlug } from "../../lib/companyData";
import AboutUs from "../../components/company/AboutUs";
import WhyChooseUs from "../../components/company/WhyChooseUs";
import OurTeam from "../../components/company/OurTeam";
import FaqsPage from "../../components/company/FaqsPage";
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

  // Full-width custom pages logic
  if (slug === "about-us") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  if (slug === "why-greyloops") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <WhyChooseUs />
        <Footer />
      </div>
    );
  }

  if (slug === "our-team") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <OurTeam />
        <Footer />
      </div>
    );
  }

  if (slug === "faqs") {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <FaqsPage />
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