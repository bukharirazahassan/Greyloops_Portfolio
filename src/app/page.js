import Header from "./components/Header";
import Slider from "./components/Slider";
import Offerings from "./components/Offerings";
import TechStackShowcase from "./components/TechStackShowcase";
import EngagementModels from "./components/EngagementModels";
import CaseStudiesShowcase from "./components/CaseStudiesShowcase";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Wavedivider from "./components/Wavedivider"
import PricingPlans from "./components/PricingPlans";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Slider />
      <Offerings />
      <Wavedivider />
      <TechStackShowcase />
      <Wavedivider />
      <EngagementModels />
      <CaseStudiesShowcase />
      <PricingPlans />
      <ContactUs />
      <Wavedivider />
      <Footer />
    </div>
  );
}