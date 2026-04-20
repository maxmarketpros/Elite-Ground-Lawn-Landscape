import Image from "next/image";
import ButtonGroup from "@/components/ui/ButtonGroup";

export default function HeroSection() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pb-10"
        style={{
          backgroundImage:
            "linear-gradient(#000000d6, #000000d6), url('/images/2023-08-17.webp')",
        }}
      >
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="flex items-center gap-8 py-[100px] pb-[60px] lg:flex-row max-lg:flex-col max-lg:py-[60px]">
            {/* Content */}
            <div className="lg:w-[55%] max-lg:w-full">
              <div className="relative mb-6">
                <h1 className="text-white">
                  <span className="text-steel-blue block">Little Rock&apos;s</span>
                  Trusted Lawn &amp; Landscape Clean-Up Experts
                </h1>
              </div>
              <p className="text-white text-[18px] leading-[140%] mb-6 max-w-[540px]">
                From overgrown to outstanding — Elite Grounds Lawn &amp;
                Landscaping transforms yards across Little Rock and surrounding
                areas with expert clean-ups, sod, mulch, and more.
                <br />
                <br />
                ✅ Locally Owned
                <br />
                ✅ Transparent Pricing
                <br />
                ✅ Quick Scheduling
              </p>
              <ButtonGroup className="max-w-[380px] mb-8" />

              {/* Review Badges */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center">
                  <Image
                    src="/images/ellipse-20188.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/images/ellipse-20189.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white -ml-3"
                  />
                  <Image
                    src="/images/ellipse-20187.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white -ml-3"
                  />
                  <div className="ml-2 bg-steel-blue text-white text-[14px] font-bold rounded-full w-[36px] h-[36px] flex items-center justify-center">
                    5.0
                  </div>
                </div>
                <div className="w-px h-[40px] bg-white/30" />
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/srar.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    ))}
                  </div>
                  <div className="text-white text-[14px]">70+ Reviews</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-[45%] max-lg:w-full">
              <Image
                src="/images/landscaping-20service-20visuals-20jun-2011-202025-20-5-.png"
                alt="Elite Grounds landscaping service"
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Shape Divider */}
      <Image
        src="/images/shape-201920x54.png"
        alt=""
        width={1920}
        height={54}
        sizes="(max-width: 1919px) 100vw, 1920px"
        className="w-full h-auto block -mt-1"
      />
    </>
  );
}
