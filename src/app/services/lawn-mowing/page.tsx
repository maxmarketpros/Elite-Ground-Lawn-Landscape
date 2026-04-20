import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceIncludes from "@/components/sections/ServiceIncludes";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import PortfolioSlice from "@/components/sections/PortfolioSlice";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ContactSection from "@/components/sections/ContactSection";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Lawn Mowing Services in Little Rock, AR",
  description:
    "Residential & commercial lawn mowing in Little Rock, AR. Weekly, bi-weekly, or one-time mows with a high-quality professional cut, edge trimming, and clean-up.",
  alternates: { canonical: "/services/lawn-mowing" },
  openGraph: {
    title: "Lawn Mowing Services in Little Rock, AR | Elite Grounds",
    description:
      "Weekly, bi-weekly, or one-time lawn mowing. Professional cut, edge trimming, and full clean-up every visit.",
    url: "/services/lawn-mowing",
    images: ["/images/site/2024-05-06.jpg"],
  },
};

const tiers = [
  {
    title: "Weekly",
    description:
      "Our most popular option. Keeps your lawn consistently crisp through the growing season and prevents stress on the grass.",
  },
  {
    title: "Bi-Weekly",
    description:
      "Every other week service — ideal for slower-growing lawns, shaded yards, or budget-conscious homeowners who want a clean look.",
  },
  {
    title: "One-Time",
    description:
      "Perfect if your lawn is overgrown and needs a reset, you're preparing for listing photos, an open house, or an event, you're between lawn providers, or you need a seasonal fresh-start mow.",
  },
];

const includes = [
  "A high-quality professional cut",
  "Trimming around the lawn and garden edges",
  "Blowing out garden beds and hard surfaces of any grass clippings",
  "Bagging and disposal of all grass clippings (or left on the lawn if you prefer)",
];

const faqs = [
  {
    question: "How often should my lawn be mowed in Little Rock?",
    answer:
      "During peak growing season (spring and summer) most lawns in the Little Rock area look best with a weekly mow. In cooler months or for slower-growing varieties, bi-weekly is usually enough. We'll assess your lawn and recommend the right cadence.",
  },
  {
    question: "Do you bag the clippings or mulch them back into the lawn?",
    answer:
      "Either works — the choice is yours. Mulching clippings returns nutrients to the soil, while bagging gives a cleaner finish. Let us know your preference and we'll make it happen on every visit.",
  },
  {
    question: "Do you service commercial properties and HOAs?",
    answer:
      "Yes. We handle residential yards, commercial properties, rental portfolios, and HOAs across Little Rock and the surrounding 25-mile radius. Contact us for a commercial quote.",
  },
];

export default function LawnMowingPage() {
  return (
    <main>
      <ServiceJsonLd
        name="Lawn Mowing"
        description="Residential & commercial lawn mowing in Little Rock, AR. Weekly, bi-weekly, or one-time mows with a high-quality professional cut."
        url="/services/lawn-mowing"
        image="/images/site/2024-05-06.jpg"
        serviceType="Lawn Mowing"
      />
      <ServicePageHero
        eyebrow="Residential & Commercial"
        title="Lawn Mowing in Little Rock"
        titleAccent="Professional"
        subhead="Weekly, bi-weekly, or one-time mows — a high-quality professional cut every visit, with edge trimming and full clean-up included."
        bullets={["Weekly & Bi-Weekly Plans", "One-Time Resets", "Residential & Commercial"]}
        heroImage="/images/site/2024-05-06.jpg"
        heroImageAlt="Freshly mowed lawn with professional stripe pattern in Little Rock"
        mascot="/images/service-pages/lawn-mowing-mascot.png"
        mascotAlt="Elite Grounds mascot mowing a lawn with a push mower"
      />

      <ServiceIncludes
        heading="Three Mowing Plans to Fit Your Yard"
        intro="Pick the cadence that fits your lawn, your schedule, and your budget — we keep it simple."
        items={tiers}
      />

      <ServiceBenefits
        heading="Our Lawn Mowing Services Include"
        intro="Every mow is the full package — no upsells, no surprises, no corners cut."
        benefits={includes}
      />

      <PortfolioSlice
        heading="Lawns We've Mowed"
        photos={[
          {
            src: "/images/site/2024-07-18.jpg",
            alt: "Elite Grounds riding mower on a residential lawn in Little Rock",
          },
          {
            src: "/images/site/2024-09-21-2.jpg",
            alt: "Commercial SCAG mower on a freshly cut backyard lawn",
          },
          {
            src: "/images/site/2024-09-21.jpg",
            alt: "Clean, professionally mowed front lawn with landscaped entry",
          },
          {
            src: "/images/site/2024-05-06.jpg",
            alt: "Terraced lawn with stripe mowing pattern and landscape beds",
          },
        ]}
      />

      <ServiceFAQ faqs={faqs} />

      <ContactSection />
    </main>
  );
}
