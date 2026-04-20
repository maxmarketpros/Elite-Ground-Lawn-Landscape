import LeadConnectorForm from "@/components/ui/LeadConnectorForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-[60px] px-5 lg:py-[100px] scroll-mt-24">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-2 gap-10 items-start max-lg:grid-cols-1">
          {/* Left - Heading + contact details */}
          <div>
            <div className="font-[family-name:var(--font-hey-comic)] text-white text-[69px] leading-[100%] max-md:text-[48px] max-xs:text-[36px] mb-6">
              Tell us about it
            </div>
            <p className="text-white/80 text-[18px] leading-[150%] mb-8 max-w-[460px]">
              Tell us about your property and the services you&apos;re after.
              We&apos;ll get back to you quickly with a fast, honest quote — no
              pressure, no hidden fees.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:5015038577"
                className="flex items-center gap-3 text-white hover:text-steel-blue transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-steel-blue text-white text-[18px]">
                  📞
                </span>
                <span className="text-[18px] font-medium">(501) 503-8577</span>
              </a>
              <a
                href="mailto:elitegroundslawn@gmail.com"
                className="flex items-center gap-3 text-white hover:text-steel-blue transition-colors break-all"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-steel-blue text-white text-[18px]">
                  ✉️
                </span>
                <span className="text-[18px] font-medium">
                  elitegroundslawn@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-steel-blue text-white text-[18px]">
                  📍
                </span>
                <span className="text-[18px] font-medium">
                  Little Rock, AR + 25-mile radius
                </span>
              </div>
            </div>
          </div>

          {/* Right - LeadConnector form */}
          <div>
            <LeadConnectorForm />
          </div>
        </div>
      </div>
    </section>
  );
}
