import type { Metadata } from "next";
import Image from "next/image";
import LeadConnectorForm from "@/components/ui/LeadConnectorForm";

export const metadata: Metadata = {
  title: "15-Yard Dumpster Rental in Little Rock, AR",
  description:
    "Rent a 15-yard dumpster from Elite Grounds Lawn & Landscaping in Little Rock, AR. Perfect for home renovations, cleanouts, and construction debris. 14' × 7' × 4'.",
  alternates: { canonical: "/dumpster-rental" },
  openGraph: {
    title: "15-Yard Dumpster Rental in Little Rock, AR | Elite Grounds",
    description:
      "15 cubic yards. 14' L × 7' W × 4' H. Ideal for medium projects, cleanouts, and construction debris. Delivered and picked up.",
    url: "/dumpster-rental",
    images: ["/images/site/ChatGPT-Image-Apr-2-2026-10_27_13-AM.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "15-Yard Dumpster Rental",
  description:
    "15 cubic yard dumpster rental from Elite Grounds Lawn & Landscaping. 14' L × 7' W × 4' H. Perfect for medium-sized projects, home renovations, large cleanouts, and construction debris removal.",
  image: "/images/site/ChatGPT-Image-Apr-2-2026-10_27_13-AM.png",
  brand: { "@type": "Brand", name: "Elite Grounds Lawn & Landscaping" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    url: "https://elitegroundlawnandlandscaping.com/dumpster-rental",
    seller: { "@id": "https://elitegroundlawnandlandscaping.com/#business" },
  },
};

export default function DumpsterRentalPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="py-[60px] max-lg:py-[40px]">
        <div className="max-w-[1160px] mx-auto px-5">
          {/* H1 + divider */}
          <h1 className="mb-2">15 YARD DUMPSTER</h1>
          <div className="h-px bg-black/10 mb-10" />

          {/* Two-column — image + stats card */}
          <div className="grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
            <div className="bg-white rounded-xl p-6 flex items-center justify-center">
              <Image
                src="/images/site/ChatGPT-Image-Apr-2-2026-10_27_13-AM.png"
                alt="Black 15-yard dumpster with Elite Grounds Lawn & Landscaping logo and phone number (501) 503-8577"
                width={1400}
                height={900}
                priority
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-[#f7f8fa] rounded-xl p-6 border border-black/5">
                <div className="mb-5">
                  <div className="text-[12px] uppercase tracking-[0.15em] text-dim-grey font-semibold mb-2">
                    Capacity
                  </div>
                  <div className="text-black text-[32px] leading-[110%] font-[family-name:var(--font-hey-comic)]">
                    15 Cubic Yards
                  </div>
                </div>
                <div className="h-px bg-black/10 my-4" />
                <div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-dim-grey font-semibold mb-2">
                    Dimensions
                  </div>
                  <div className="text-black text-[32px] leading-[110%] font-[family-name:var(--font-hey-comic)]">
                    14&apos; L × 7&apos; W × 4&apos; H
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-green-cta text-white font-bold py-4 rounded-lg text-[18px] shadow-[0_10px_24px_-10px_rgba(14,134,21,0.6)] hover:-translate-y-[2px] active:scale-[0.99] transition-transform"
              >
                BOOK NOW
              </a>

              <a
                href="tel:5015038577"
                className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-4 rounded-lg text-[17px] border border-black/15 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black/10 text-black text-[12px]">
                  📞
                </span>
                (501) 503-8577
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="mt-16">
            <div className="text-[12px] uppercase tracking-[0.15em] text-dim-grey font-semibold mb-3">
              Description
            </div>
            <p className="text-dim-grey text-[17px] leading-[170%] max-w-[820px]">
              Our 15-yard dumpster rental is perfect for medium-sized projects,
              including home renovations, large cleanouts, and construction
              debris removal. With ample space to accommodate various types of
              waste, this dumpster offers a convenient and efficient solution
              for managing your cleanup needs. Easy to load and delivered
              right to your location, it&apos;s an ideal choice for keeping
              your project site organized and clutter-free.
            </p>
          </div>
        </div>
      </section>

      {/* Booking form section */}
      <section
        id="contact"
        aria-label="Book a 15-yard dumpster"
        className="py-[60px] bg-feature-bg scroll-mt-24"
      >
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="grid grid-cols-5 gap-10 items-start max-lg:grid-cols-1">
            <div className="lg:col-span-2">
              <h2 className="mb-5">
                Book Your <span className="text-steel-blue">Dumpster.</span>
              </h2>
              <p className="text-dim-grey text-[17px] leading-[160%] mb-5">
                Tell us your address, your project, and when you need the
                dumpster delivered. We&apos;ll confirm availability and
                pricing quickly.
              </p>
              <a
                href="tel:5015038577"
                className="inline-flex items-center gap-2 text-steel-blue font-semibold text-[17px] hover:underline"
              >
                📞 Prefer to call? (501) 503-8577
              </a>
            </div>
            <div className="lg:col-span-3">
              <LeadConnectorForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
