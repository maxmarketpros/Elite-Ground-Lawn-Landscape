import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedElement from "@/components/ui/AnimatedElement";

interface ServiceBenefitsProps {
  heading: string;
  intro?: string;
  benefits: string[];
}

export default function ServiceBenefits({ heading, intro, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading>{heading}</SectionHeading>
        {intro && (
          <p className="text-dim-grey text-[18px] leading-[150%] max-w-[760px] mx-auto text-center mb-10">
            {intro}
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-w-[900px] mx-auto">
          {benefits.map((b, i) => (
            <AnimatedElement
              key={b}
              animation="slideUp"
              y={15}
              delay={i * 0.05}
            >
              <div className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] h-full border border-black/5">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-green-cta text-white flex items-center justify-center text-[14px] font-bold mt-0.5"
                >
                  ✓
                </span>
                <span className="text-[17px] leading-[140%] text-black">
                  {b}
                </span>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
