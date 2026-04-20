import Image from "next/image";
import ButtonGroup from "@/components/ui/ButtonGroup";
import AnimatedElement from "@/components/ui/AnimatedElement";

export default function SaleSection() {
  return (
    <section className="relative bg-sale-bg py-[60px] overflow-hidden">
      {/* Decorative paw SVG */}
      <Image
        src="/images/light-20big-20paw.svg"
        alt=""
        width={400}
        height={400}
        className="absolute top-0 left-0 opacity-30 pointer-events-none"
        loading="lazy"
      />

      <div className="max-w-[1160px] mx-auto px-5">
        <div className="flex items-center gap-10 max-lg:flex-col">
          {/* Image */}
          <div className="lg:w-1/2 max-lg:w-full">
            <AnimatedElement animation="slideUp" y={50}>
              <Image
                src="/images/landscaping-20service-20visuals-20jun-2011-202025-20-2-.png"
                alt="Elite Grounds landscaping service"
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </AnimatedElement>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 max-lg:w-full">
            <div>
              <AnimatedElement animation="fade">
                <h2 className="mb-6">
                  Local Roots. Lasting{" "}
                  <span className="text-steel-blue">Results</span>.
                </h2>
              </AnimatedElement>

              <AnimatedElement animation="fade" delay={0.2}>
                <p className="text-dim-grey text-[18px] leading-[140%] mb-6">
                  At Elite Grounds, we&apos;re more than just a landscaping
                  company — we&apos;re your neighbors. Proudly serving Little
                  Rock and surrounding communities, we&apos;ve built our
                  reputation one yard at a time with 70+ five-star reviews and a
                  commitment to reliable, high-quality service.
                  <br />
                  <br />
                  Whether it&apos;s a full property clean-up, fresh sod
                  installation, or weekly lawn care, our experienced team treats
                  every project like it&apos;s our own home. No shortcuts. No
                  surprises. Just beautiful, professional results that last.
                  <br />
                  <br />
                  What Makes Us Different?
                  <br />
                  ✅ Locally Owned &amp; Operated
                  <br />
                  ✅ Clear Quotes, No Hidden Fees
                  <br />
                  ✅ Friendly, Professional Crew
                  <br />
                  ✅ Fast Scheduling with Reliable Turnaround
                  <br />✅ Satisfaction Guaranteed
                </p>
              </AnimatedElement>

              <ButtonGroup className="max-w-[380px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
