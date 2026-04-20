import HeroSection from "@/components/sections/HeroSection";
import FeatureLane from "@/components/sections/FeatureLane";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GoogleReviews from "@/components/sections/GoogleReviews";
import SaleSection from "@/components/sections/SaleSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import DumpsterCTA from "@/components/sections/DumpsterCTA";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureLane />
      <ServicesGrid />
      <GoogleReviews />
      <SaleSection />
      <BenefitsSection />
      <ProcessSection />
      <PortfolioSection />
      <DumpsterCTA />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
