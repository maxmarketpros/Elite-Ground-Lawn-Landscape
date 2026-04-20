import type { Metadata } from "next";
import Image from "next/image";
import LeadConnectorForm from "@/components/ui/LeadConnectorForm";

export const metadata: Metadata = {
  title: "Contact Elite Grounds Lawn & Landscaping",
  description:
    "Get a free quote from Elite Grounds Lawn & Landscaping. Call (501) 503-8577 or send us a message. Serving Little Rock, AR and the surrounding 25-mile radius.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Elite Grounds Lawn & Landscaping",
    description:
      "Call, email, or send us a message for a fast, free quote. Little Rock, AR + surrounding areas.",
    url: "/contact",
    images: ["/images/site/2024-09-21.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(#000000d6, #000000d6), url('/images/site/2024-09-21.jpg')",
        }}
      >
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="py-[80px] max-lg:py-[60px] text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/20 border border-steel-blue/50 text-steel-blue text-[13px] font-semibold uppercase tracking-wide mb-5">
              Contact
            </div>
            <h1 className="text-white">
              <span className="text-steel-blue block">Get in Touch.</span>
              We&apos;d love to hear about your yard.
            </h1>
            <p className="text-white text-[18px] leading-[150%] mt-6 max-w-[680px] mx-auto">
              Call, email, or drop us a message below. We&apos;ll get back to
              you fast with a free quote — no pressure, no hidden fees.
            </p>
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

      {/* Body */}
      <section id="contact" className="py-[60px] scroll-mt-24">
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="grid grid-cols-5 gap-10 max-lg:grid-cols-1">
            {/* Left — contact tiles */}
            <div className="lg:col-span-2">
              <h2 className="mb-6">
                Ways to <span className="text-steel-blue">reach us.</span>
              </h2>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:5015038577"
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow border border-black/5"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tomato text-white text-[22px] shrink-0">
                    📞
                  </span>
                  <div>
                    <div className="text-[13px] uppercase tracking-wide text-dim-grey font-semibold">
                      Call us
                    </div>
                    <div className="text-black text-[20px] font-[family-name:var(--font-hey-comic)]">
                      (501) 503-8577
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:elitegroundslawn@gmail.com"
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow border border-black/5"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-steel-blue text-white text-[22px] shrink-0">
                    ✉️
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] uppercase tracking-wide text-dim-grey font-semibold">
                      Email
                    </div>
                    <div className="text-black text-[18px] font-medium break-all">
                      elitegroundslawn@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-5 shadow-[0_4px_14px_rgba(0,0,0,0.07)] border border-black/5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-cta text-white text-[22px] shrink-0">
                    📍
                  </span>
                  <div>
                    <div className="text-[13px] uppercase tracking-wide text-dim-grey font-semibold">
                      Service area
                    </div>
                    <div className="text-black text-[18px] font-medium">
                      Little Rock, AR + 25-mile radius
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — LeadConnector form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 max-lg:text-center">
                Send us a <span className="text-steel-blue">message.</span>
              </h2>
              <LeadConnectorForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
