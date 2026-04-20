import HeroSection from "@/components/sections/HeroSection";
import FeatureLane from "@/components/sections/FeatureLane";
import GoogleReviews from "@/components/sections/GoogleReviews";
import SaleSection from "@/components/sections/SaleSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureLane />
      <GoogleReviews />
      <SaleSection />
      <BenefitsSection />
      <ProcessSection />
      <PortfolioSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
