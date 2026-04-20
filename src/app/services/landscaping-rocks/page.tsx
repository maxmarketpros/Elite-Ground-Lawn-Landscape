import type { Metadata } from "next";
import ServicePageHero from "@/components/sections/ServicePageHero";
import ServiceIncludes from "@/components/sections/ServiceIncludes";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import PortfolioSlice from "@/components/sections/PortfolioSlice";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ContactSection from "@/components/sections/ContactSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";
import AnimatedElement from "@/components/ui/AnimatedElement";

export const metadata: Metadata = {
  title: "Landscaping Rocks & Borders in Little Rock, AR",
  description:
    "Expert landscaping rock installation, river rock, boulders, gravel paths, and custom borders for properties in Little Rock, AR. Low-maintenance beauty for any yard.",
  alternates: { canonical: "/services/landscaping-rocks" },
  openGraph: {
    title: "Landscaping Rock Installation & Borders in Little Rock, AR",
    description:
      "River rock, boulders, gravel paths, rock gardens, drainage solutions, and custom landscaping borders — low-maintenance beauty that lasts.",
    url: "/services/landscaping-rocks",
    images: ["/images/site/2024-04-28.jpg"],
  },
};

const rockServices = [
  { title: "River Rock & Pebbles", description: "Smooth, decorative stones for beds, borders, and water features." },
  { title: "Boulders", description: "Strategic boulder placement to add scale, structure, and natural drama." },
  { title: "Gravel Paths & Drives", description: "Functional, good-looking gravel walkways and driveway surfaces." },
  { title: "Decorative Rock Gardens", description: "Low-maintenance rock garden designs that thrive year-round." },
  { title: "Retaining Walls", description: "Natural stone retaining wall construction for slopes and grade changes." },
  { title: "Drainage Solutions", description: "Rock-based drainage that redirects water and controls erosion." },
  { title: "Xeriscaping", description: "Water-smart landscapes using rocks, stones, and drought-tolerant plants." },
];

const rockBenefits = [
  "Low maintenance and long-lasting",
  "Provides natural erosion control",
  "Creates visual interest and texture",
  "Improves drainage in problem areas",
  "Reduces water consumption in xeriscaping",
  "Adds structure and definition to garden beds",
  "Serves as a natural weed barrier",
];

const borderServices = [
  "Stone and brick borders",
  "Concrete edging",
  "Metal landscape edging",
  "Plastic and rubber borders",
  "Natural wood borders",
  "Decorative paver borders",
];

const borderBenefits = [
  "Define and separate different areas of your landscape",
  "Prevent grass from encroaching into garden beds",
  "Control soil erosion",
  "Create a neat, organized appearance",
  "Simplify lawn maintenance",
  "Add visual interest and depth to your outdoor space",
  "Increase property value",
];

const faqs = [
  {
    question: "What types of landscaping rocks do you offer for installation?",
    answer:
      "At Elite Grounds Lawn & Landscaping, we offer a wide variety of landscaping rocks including river rocks, pebbles, boulders, gravel, decorative stones, and crushed rock. We'll help you choose the best type of rock for your specific landscaping needs and aesthetic preferences.",
  },
  {
    question: "How long does a typical landscaping rock installation project take?",
    answer:
      "The duration varies with the size of the area, the complexity of the design, and the type of rocks being used. Small projects can be completed in a day or two, while larger or more intricate installations may take up to a week. We always provide a timeline estimate before starting the project.",
  },
  {
    question: "Can landscaping rocks help with drainage issues in my yard?",
    answer:
      "Yes — landscaping rocks can be an effective solution for drainage problems. Properly installed rocks can redirect water flow, prevent soil erosion, and improve overall drainage. We design and implement rock-based drainage solutions tailored to your property's specific needs.",
  },
];

export default function LandscapingRocksPage() {
  return (
    <main>
      <ServiceJsonLd
        name="Landscaping Rock Installation"
        description="Expert landscaping rock installation — river rock, boulders, gravel paths, rock gardens, drainage and xeriscaping — plus custom landscaping borders in Little Rock, AR."
        url="/services/landscaping-rocks"
        image="/images/site/2024-04-28.jpg"
        serviceType="Landscaping Rock Installation"
      />

      <ServicePageHero
        eyebrow="Rocks · Boulders · Borders"
        title="Upgrade Your Landscape with Rock Features"
        titleAccent="Quality"
        subhead="Create stunning, low-maintenance outdoor spaces with expert rock installation from Elite Grounds — river rock, boulders, gravel paths, drainage solutions, and crisp custom borders."
        bullets={[
          "River Rock, Pebbles & Boulders",
          "Gravel Paths & Drainage",
          "Custom Landscape Borders",
        ]}
        heroImage="/images/site/2024-04-28.jpg"
        heroImageAlt="River rock path edging a landscaped backyard in Little Rock"
        mascot="/images/service-pages/landscaping-rock-installation-mascot.png"
        mascotAlt="Elite Grounds mascot pouring decorative rocks into a landscape bed"
      />

      <ServiceIncludes
        heading="Rock Installation Services We Offer"
        intro="From pebbled beds to boulder arrangements, we design and install rock features that look intentional and last for decades."
        items={rockServices}
      />

      <ServiceBenefits
        heading="Why Landscaping Rocks?"
        intro="With proper installation, landscaping rocks significantly enhance your outdoor space while reducing ongoing maintenance."
        benefits={rockBenefits}
      />

      {/* Landscaping Borders section */}
      <section className="py-[60px] bg-feature-bg">
        <div className="max-w-[1160px] mx-auto px-5">
          <SectionHeading>Custom Landscaping Borders</SectionHeading>
          <p className="text-dim-grey text-[18px] leading-[150%] max-w-[800px] mx-auto text-center mb-10">
            Enhance the beauty and functionality of your property with expertly
            designed and installed landscaping borders. We offer a wide range of
            border options to suit your unique style and needs across the
            Greater Little Rock area.
          </p>

          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
            <AnimatedElement animation="fade">
              <div>
                <h3 className="mb-5 font-[family-name:var(--font-hey-comic)] text-[28px]">
                  Border Options
                </h3>
                <ul className="flex flex-col gap-3">
                  {borderServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    >
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full bg-steel-blue text-white flex items-center justify-center text-[13px] font-bold flex-shrink-0 mt-0.5"
                      >
                        ✓
                      </span>
                      <span className="text-[16px] text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.15}>
              <div>
                <h3 className="mb-5 font-[family-name:var(--font-hey-comic)] text-[28px]">
                  Why You Need Borders
                </h3>
                <ul className="flex flex-col gap-3">
                  {borderBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    >
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full bg-green-cta text-white flex items-center justify-center text-[13px] font-bold flex-shrink-0 mt-0.5"
                      >
                        ✓
                      </span>
                      <span className="text-[16px] text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <PortfolioSlice
        heading="Rock & Hardscape Projects"
        photos={[
          { src: "/images/site/2024-04-28.jpg", alt: "River rock and black mulch combination edging a backyard path" },
          { src: "/images/site/2024-03-21.jpg", alt: "Stone patio hardscape with professional landscaping" },
          { src: "/images/site/2024-09-21-3.jpg", alt: "Backyard stone patio with pergola and mature landscaping" },
        ]}
      />

      <ServiceFAQ faqs={faqs} />

      <ContactSection />
    </main>
  );
}
