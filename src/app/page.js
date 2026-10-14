import Header from "./components/Header";
import Slider from "./components/Slider";
import TechStackShowcase from "./components/TechStackShowcase";
import EngagementModels from "./components/EngagementModels";
import CaseStudiesShowcase from "./components/CaseStudiesShowcase";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Wavedivider from "./components/Wavedivider"
import PricingPlans from "./components/PricingPlans";
import BlogSection from "./components/BlogSection";
import Industries from "./components/Industries";
import IndustryExpertise from "./components/IndustryExpertise";
import Delivertansformation from "./components/Delivertansformation";
import Industrieschallenges from "./components/Industrieschallenges";
import ProvenExpertise from "./components/ProvenExpertise";
import OurServices from "@/app/components/services/OurServices";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Slider />
      <Delivertansformation />
      <ProvenExpertise />
      <OurServices />
      <TechStackShowcase />
      <EngagementModels />
      {/* <CaseStudiesShowcase /> */}
      {/* <PricingPlans /> */}
      {/* <Industrieschallenges /> */}
      {/* <Industries/> */}
      <IndustryExpertise/>
      <ContactUs />
      <BlogSection/>
      <Footer />
    </div>
  );
}