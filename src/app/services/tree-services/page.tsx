import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceIncludes from "@/components/sections/ServiceIncludes";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ContactSection from "@/components/sections/ContactSection";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Tree Services & Trimming in Little Rock, AR",
  description:
    "Expert tree services in Little Rock, AR — tree trimming, planting, and removal. Family-owned, fully licensed and insured, 20 years of experience, free estimates.",
  alternates: { canonical: "/services/tree-services" },
  openGraph: {
    title: "Tree Services & Trimming in Little Rock, AR | Elite Grounds",
    description:
      "Professional tree trimming, planting, and removal across the Greater Little Rock area. Family-owned, licensed & insured, free estimates.",
    url: "/services/tree-services",
    images: ["/images/site/2024-05-28.jpg"],
  },
};

const treeServices = [
  {
    title: "Tree Trimming & Pruning",
    description:
      "Shape, thin, and size your trees to improve health, airflow, and curb appeal — and reduce storm risk from overgrown limbs.",
  },
  {
    title: "Tree Planting",
    description:
      "We help you pick the right species for your soil and climate, then plant with techniques that give new trees the best possible start.",
  },
  {
    title: "Tree Removal",
    description:
      "When a tree poses a risk or needs to come down for new landscaping, we handle removal safely with the right equipment and strict safety protocols.",
  },
];

const faqs = [
  {
    question: "Do you handle emergency or storm-damaged trees?",
    answer:
      "Yes. If a storm has dropped a limb or brought a tree down on your property, reach out — we prioritize safety-critical tree work in the Greater Little Rock area as quickly as our schedule allows.",
  },
  {
    question: "Do you grind stumps after a tree is removed?",
    answer:
      "Stump grinding is available as an add-on to any tree removal. We'll grind below grade so the area can be re-sodded, mulched, or replanted. Just let us know during the quote so we can include it.",
  },
  {
    question: "Do I need a permit to remove a tree on my property?",
    answer:
      "Most private-property tree removals in Little Rock don't require a permit, but rules can vary by neighborhood, HOA, or protected-tree designation. We'll flag anything that looks permit-sensitive before work begins.",
  },
];

export default function TreeServicesPage() {
  return (
    <main>
      <ServiceJsonLd
        name="Tree Services"
        description="Tree trimming, planting, and removal in the Greater Little Rock, AR area. Family-owned, licensed and insured."
        url="/services/tree-services"
        image="/images/site/2024-05-28.jpg"
        serviceType="Tree Services"
      />
      <ServicePageHero
        eyebrow="Trimming · Planting · Removal"
        title="Tree Services for Your Outdoor Oasis"
        titleAccent="Expert"
        subhead="In the Greater Little Rock area, Elite Grounds Lawn & Landscaping provides comprehensive tree care — trimming, planting, and removal — backed by 20 years of experience. Family-owned, fully licensed and insured, with satisfaction guaranteed and free estimates."
        bullets={[
          "Family-Owned & Insured",
          "20 Years of Experience",
          "Free Estimates",
        ]}
        heroImage="/images/site/2024-05-28.jpg"
        heroImageAlt="Mature tree canopy and landscape in a Little Rock yard"
        mascot="/images/service-pages/tree-services-trimming-mascot.png"
        mascotAlt="Elite Grounds mascot holding tree pruning shears with trimmed branches"
      />

      <ServiceIncludes
        heading="What We Do for Your Trees"
        intro="Your trees are part of your property's ecosystem and appeal. We treat them that way — with the right tools, the right timing, and the right techniques."
        items={treeServices}
        background="sale-bg"
      />

      <ServiceFAQ faqs={faqs} />

      <ContactSection />
    </main>
  );
}
