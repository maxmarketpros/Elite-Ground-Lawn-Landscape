import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceIncludes from "@/components/sections/ServiceIncludes";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import PortfolioSlice from "@/components/sections/PortfolioSlice";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ContactSection from "@/components/sections/ContactSection";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Mulch Installation in Little Rock, AR",
  description:
    "Professional mulch installation for instant curb appeal in Little Rock, AR. Organic & inorganic mulch, weed barriers, edging and proper depth — residential & commercial.",
  alternates: { canonical: "/services/mulch-installation" },
  openGraph: {
    title: "Mulch Installation in Little Rock, AR | Elite Grounds",
    description:
      "Organic and inorganic mulch, proper depth, clean edging, and optional weed barrier. Fast, free estimates in the Greater Little Rock area.",
    url: "/services/mulch-installation",
    images: ["/images/site/2023-05-12-1.jpg"],
  },
};

const includes = [
  { title: "Mulch Options", description: "Organic and inorganic mulch to match your landscape goals." },
  { title: "Measured Coverage", description: "Precise depth and coverage across every bed and border." },
  { title: "Proper Application", description: "Pro techniques that protect plant crowns and maximize benefit." },
  { title: "Weed Barrier", description: "Optional weed fabric installation beneath the mulch for added protection." },
  { title: "Soil Prep & Grading", description: "Existing debris cleared, soil lightly raked, beds shaped correctly." },
  { title: "Edging & Borders", description: "Crisp, clean edges that define beds and elevate curb appeal." },
];

const benefits = [
  "Moisture retention for healthier plants",
  "Weed suppression that saves you hours",
  "Soil temperature regulation year-round",
  "Natural erosion control on slopes and beds",
  "Improved soil structure as mulch breaks down",
  "Instant, dramatic curb appeal",
];

const faqs = [
  {
    question: "How often should mulch be replaced?",
    answer:
      "Typically, mulch should be replaced or replenished annually. This can vary depending on the type of mulch used and environmental factors. Organic mulches break down faster and may need replacement more frequently, while inorganic mulches like stones can last longer. We recommend an annual inspection to determine if your mulch needs refreshing.",
  },
  {
    question: "What is the ideal depth for mulch installation?",
    answer:
      "The ideal depth for mulch installation is generally 2 to 4 inches. That's enough to provide moisture retention and weed suppression without suffocating plant roots. The exact depth can vary depending on the type of mulch and the specific needs of your landscape. Our team will assess your property and recommend the optimal depth for your situation.",
  },
  {
    question: "Can mulch be installed over growing weeds?",
    answer:
      "While mulch can help suppress weeds, it's not recommended to install mulch directly over existing weeds — doing so can actually protect them and let them keep growing. For best results, we thoroughly remove existing weeds before mulch installation. We can also install a weed barrier beneath the mulch for added protection against future weed growth.",
  },
];

export default function MulchInstallationPage() {
  return (
    <main>
      <ServiceJsonLd
        name="Mulch Installation"
        description="Professional mulch installation for residential and commercial properties in the Greater Little Rock, AR area. Organic and inorganic mulch options, proper depth, edging, and optional weed barrier."
        url="/services/mulch-installation"
        image="/images/site/2023-05-12-1.jpg"
        serviceType="Mulch Installation"
      />
      <ServicePageHero
        eyebrow="Residential & Commercial"
        title="Mulch Installation for Instant Curb Appeal"
        titleAccent="Professional"
        subhead="Enhance the beauty and health of your outdoor space with expert mulch installation from Elite Grounds Lawn & Landscaping. We offer comprehensive mulch solutions for properties in the Greater Little Rock area."
        bullets={[
          "Organic & Inorganic Mulch Options",
          "Proper Depth & Coverage",
          "Clean Edging & Borders",
        ]}
        heroImage="/images/site/2023-05-12-1.jpg"
        heroImageAlt="Fresh dark mulch installation with flowering plants at a home entrance"
        mascot="/images/service-pages/mulch-installation-mascot.png"
        mascotAlt="Elite Grounds mascot spreading mulch from a wheelbarrow"
      />

      <ServiceIncludes
        heading="Our Mulch Installation Services"
        intro="Every job comes with the full package — from the right mulch for your beds to sharp, professional edges."
        items={includes}
      />

      <ServiceBenefits
        heading="Why You Need Fresh Mulch"
        intro="Mulch installation is more than just an aesthetic choice — it's a crucial part of landscape health and long-term maintenance."
        benefits={benefits}
      />

      <PortfolioSlice
        heading="Recent Mulch Work"
        photos={[
          { src: "/images/site/2023-05-12-1.jpg", alt: "Fresh dark mulch bed with flowering annuals at a home entrance" },
          { src: "/images/site/2023-05-12-2.jpg", alt: "Completed mulch bed renovation at front of residential property" },
          { src: "/images/site/2023-05-12-3.jpg", alt: "Dark mulch beds with flowering shrubs along home foundation" },
          { src: "/images/site/2024-03-14-7.jpg", alt: "Fresh mulch bed with clean edging and young foundation shrub" },
        ]}
      />

      <ServiceFAQ faqs={faqs} />

      <ContactSection />
    </main>
  );
}
