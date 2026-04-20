import AnimatedElement from "@/components/ui/AnimatedElement";
import ButtonGroup from "@/components/ui/ButtonGroup";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    heading: "Request a Free Quote",
    detail:
      "Tell us about your yard and the services you need. We'll provide a fast, accurate estimate — no pressure.",
    bg: "bg-step-green",
  },
  {
    heading: "Schedule Your Service",
    detail:
      "Choose a time that works for you. We offer flexible scheduling and fast turnaround times.",
    bg: "bg-step-yellow",
  },
  {
    heading: "We Get to Work",
    detail:
      "Our crew shows up on time, fully equipped, and ready to clean up, transform, or maintain your yard with care.",
    bg: "bg-step-blue",
  },
  {
    heading: "Enjoy the Results",
    detail:
      "Stand back and admire your fresh, clean, professional-looking yard — no mess left behind.",
    bg: "bg-step-cream",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading>
          Getting Your Yard Cleaned Up is Simple
        </SectionHeading>

        <div className="grid grid-cols-4 gap-4 mb-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          {steps.map((step, i) => (
            <AnimatedElement
              key={step.heading}
              animation="slideUp"
              y={15}
              delay={i * 0.1}
            >
              <div
                className={`${step.bg} rounded-[10px] p-[60px_20px] flex flex-col items-center text-center h-full`}
              >
                <div className="font-[family-name:var(--font-hey-comic)] text-[24px] leading-[98%] text-black mb-4">
                  {step.heading}
                </div>
                <div className="text-dim-grey text-[16px] leading-[140%]">
                  {step.detail}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <ButtonGroup className="max-w-[380px] mx-auto" />
      </div>
    </section>
  );
}
