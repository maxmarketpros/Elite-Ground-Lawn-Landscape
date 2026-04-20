import Image from "next/image";
import AnimatedElement from "@/components/ui/AnimatedElement";

const benefits = [
  "#1 for Property Clean-Ups in Little Rock",
  "Fast, Reliable Scheduling – No Waiting Weeks",
  "Locally Owned. Family Operated. Quality Guaranteed.",
];

export default function BenefitsSection() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="flex items-center gap-10 max-lg:flex-col">
          {/* Image */}
          <div className="lg:w-1/2 max-lg:w-full relative">
            <AnimatedElement animation="scale">
              <Image
                src="/images/landscaping-20service-20visuals-20jun-2011-202025.png"
                alt="Elite Grounds landscaping"
                width={449}
                height={337}
                sizes="(max-width: 479px) 100vw, 449px"
                className="w-full max-w-[449px] h-auto rounded-lg"
                loading="lazy"
              />
            </AnimatedElement>
            <AnimatedElement
              animation="translateBadge"
              className="absolute -top-4 -right-4 max-lg:right-0 max-lg:top-0"
            >
              <Image
                src="/images/group-2041739.png"
                alt=""
                width={117}
                height={117}
                loading="lazy"
              />
            </AnimatedElement>
          </div>

          {/* Benefits */}
          <div className="lg:w-1/2 max-lg:w-full">
            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white rounded-full px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                >
                  <div className="font-[family-name:var(--font-hey-comic)] text-[20px] leading-[110%] text-black">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
