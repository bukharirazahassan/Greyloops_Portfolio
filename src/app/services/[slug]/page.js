import { notFound } from "next/navigation";
import { findServiceBySlug, servicesColumns } from "../../lib/navigationData";
import UxUiDesign from "../../components/services/UxUiDesign";
import BackendServicesCarousel from "../../components/services/BackendServicesCarousel";
import SaasDevelopment from "../../components/services/SaasDevelopment";
import FrontendDevelopment from "../../components/services/FrontendDevelopment";
import EnterpriseSoftwareDevelopment from "../../components/services/EnterpriseSoftwareDevelopment";
import SoftwareConsulting from "../../components/services/Consulting/SoftwareConsulting";
import ConsultingProvider from "../../components/services/Consulting/ConsultingProvider";
import StrategicTechnologyConsulting from "../../components/services/Consulting/StrategicTechnologyConsulting";
import MobileConsulting from "../../components/services/Consulting/MobileConsulting";
import MobileDevelopment from "../../components/services/MobileService/mobiledevelopment";
import AndroidAppDevelopment from "../../components/services/MobileService/AndroidAppDevelopment";
import IOSAppDevelopment from "../../components/services/MobileService/iosappdevelopment";
import FAQSection from "../../components/FAQSection";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return servicesColumns.flatMap((col) =>
    col.links.map((link) => ({ slug: link.slug })),
  );
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <main className="w-full bg-white">
      {slug === "ux-ui-design" ? (
        <>
          <Header />
          <UxUiDesign />
          <Footer />
        </>
      ) : slug === "backend-development" ? (
        <>
          <Header />
          <BackendServicesCarousel />
          <Footer />
        </>
      ) : slug === "saas-development" ? (
        <>
          <Header />
          <SaasDevelopment />
          <Footer />
        </>
      ) : slug === "frontend-development" ? (
        <>
          <Header />
          <FrontendDevelopment />
          <Footer />
        </>
      ) : slug === "enterprise-software-development" ? (
        <>
          <Header />
          <EnterpriseSoftwareDevelopment />
          <FAQSection />
          <Footer />
        </>
      ) : slug === "mobile-app-development" ? (
        <>
          <Header />
          <MobileDevelopment />
          <Footer />
        </>
      ) : slug === "android-app-development" ? (
        <>
          <Header />
          <AndroidAppDevelopment />
          <Footer />
        </>
      ) : slug === "ios-app-development" ? (
        <>
          <Header />
          <IOSAppDevelopment />
          <Footer />
        </>
      ) : slug === "software-consulting" ? (
        <>
          <Header />
          <SoftwareConsulting />
          <ConsultingProvider />
          <StrategicTechnologyConsulting />
          <MobileConsulting />
          <FAQSection />
          <Footer />
        </>
      ) : (
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
            {service.columnTitle}
          </p>
          <h1 className="mb-6 text-4xl font-extrabold text-zinc-900">
            {service.name}
          </h1>
          <p className="text-lg text-zinc-600">
            Content for {service.name} coming soon.
          </p>
        </div>
      )}
    </main>
  );
}