import type { Metadata } from "next";
import Image from "next/image";
import ButtonGroup from "@/components/ui/ButtonGroup";
import AnimatedElement from "@/components/ui/AnimatedElement";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import PortfolioSlice from "@/components/sections/PortfolioSlice";
import ContactSection from "@/components/sections/ContactSection";
import GoogleReviews from "@/components/sections/GoogleReviews";

export const metadata: Metadata = {
  title: "About Elite Grounds Lawn & Landscaping",
  description:
    "Family-owned lawn & landscape company serving Little Rock, AR. 20 years of experience, 70+ five-star reviews, and a crew that treats every yard like their own.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Elite Grounds Lawn & Landscaping | Little Rock, AR",
    description:
      "Meet the local, family-owned crew behind Elite Grounds. 20 years of experience. Serving Little Rock and surrounding communities.",
    url: "/about",
    images: ["/images/site/2024-09-21-3.jpg"],
  },
};

const values = [
  "Locally owned & operated in Little Rock, AR",
  "20 years of hands-on lawn and landscape experience",
  "Clear quotes, no hidden fees, no upsells",
  "Friendly, professional, on-time crew",
  "Fast scheduling with reliable turnaround",
  "Satisfaction guaranteed on every job",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(#000000d6, #000000d6), url('/images/site/2024-09-21-3.jpg')",
        }}
      >
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="flex items-center gap-8 py-[100px] pb-[60px] lg:flex-row max-lg:flex-col max-lg:py-[60px]">
            <div className="lg:w-[55%] max-lg:w-full">
              <div className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/20 border border-steel-blue/50 text-steel-blue text-[13px] font-semibold uppercase tracking-wide mb-5">
                About Us
              </div>
              <h1 className="text-white">
                <span className="text-steel-blue block">Local Roots.</span>
                Real People. Lasting Results.
              </h1>
              <p className="text-white text-[18px] leading-[150%] mt-6 mb-6 max-w-[560px]">
                Elite Grounds Lawn &amp; Landscaping is a family-owned, Little
                Rock–based crew that&apos;s been transforming yards across
                Central Arkansas for 20 years. We built our name one happy
                neighbor at a time — and 70+ five-star reviews later, we&apos;re
                still showing up the same way.
              </p>
              <ButtonGroup className="max-w-[380px]" />
            </div>
            <div className="lg:w-[45%] max-lg:w-full flex justify-center">
              <Image
                src="/images/NEW-LOGO.png"
                alt="Elite Grounds Lawn & Landscaping mascot and logo"
                width={900}
                height={900}
                sizes="(max-width: 1024px) 80vw, 500px"
                className="w-full max-w-[460px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/images/shape-201920x54.png"
        alt=""
        width={1920}
        height={54}
        sizes="(max-width: 1919px) 100vw, 1920px"
        className="w-full h-auto block -mt-1"
      />

      {/* Story */}
      <section className="py-[60px]">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
            <AnimatedElement animation="slideUp" y={40}>
              <Image
                src="/images/site/2024-09-21.jpg"
                alt="Clean, professionally mowed front lawn with landscaped entry walk"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                loading="lazy"
              />
            </AnimatedElement>
            <div>
              <AnimatedElement animation="fade">
                <h2 className="mb-6">
                  Built on trust,{" "}
                  <span className="text-steel-blue">one yard at a time.</span>
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="fade" delay={0.15}>
                <p className="text-dim-grey text-[18px] leading-[160%]">
                  We&apos;re proud to call Little Rock home. Every project we
                  take on — from a weekly mow to a full property clean-up —
                  gets the same attention, the same crew quality, and the same
                  straightforward pricing. No shortcuts. No hidden fees. No
                  surprises at the end.
                  <br />
                  <br />
                  Whether you need a one-time reset, ongoing lawn care, a fresh
                  mulch install, or something bigger like rock features and
                  tree work, we&apos;ll walk your property, listen to what you
                  want, and give you a plan that actually fits.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Values / What makes us different */}
      <ServiceBenefits
        heading="What Makes Us Different"
        intro="The small stuff that actually matters when you're hiring a crew to work on your property."
        benefits={values}
      />

      {/* Google Reviews widget */}
      <section className="py-[60px] bg-feature-bg">
        <div className="max-w-[1160px] mx-auto px-5">
          <SectionHeading>What Little Rock Is Saying</SectionHeading>
          <GoogleReviews />
        </div>
      </section>

      {/* Photo gallery */}
      <PortfolioSlice
        heading="Recent Work Across Little Rock"
        photos={[
          { src: "/images/2024-09-21-20-1-.webp", alt: "Elegant brick home with professionally landscaped boxwoods and lawn" },
          { src: "/images/2024-07-21.webp", alt: "Modern home with mature trees and professionally maintained lawn" },
          { src: "/images/2024-09-21-20-4-.webp", alt: "Full front yard landscape and lawn transformation" },
          { src: "/images/2023-04-10.webp", alt: "Round mulch bed with raised stone border and manicured grass" },
        ]}
      />

      <ContactSection />
    </main>
  );
}
