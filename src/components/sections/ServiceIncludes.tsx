import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedElement from "@/components/ui/AnimatedElement";

interface Item {
  title: string;
  description?: string;
}

interface ServiceIncludesProps {
  heading: string;
  intro?: string;
  items: Item[];
  background?: "white" | "sale-bg";
}

const cardBackgrounds = ["bg-step-green", "bg-step-yellow", "bg-step-blue", "bg-step-cream"];

export default function ServiceIncludes({ heading, intro, items, background = "white" }: ServiceIncludesProps) {
  const sectionBg = background === "sale-bg" ? "bg-sale-bg" : "";

  return (
    <section className={`py-[60px] ${sectionBg}`}>
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading>{heading}</SectionHeading>
        {intro && (
          <p className="text-dim-grey text-[18px] leading-[150%] max-w-[760px] mx-auto text-center mb-10">
            {intro}
          </p>
        )}

        <div
          className={`grid gap-4 ${
            items.length >= 4
              ? "grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1"
              : items.length === 3
              ? "grid-cols-3 max-md:grid-cols-1"
              : "grid-cols-2 max-md:grid-cols-1"
          }`}
        >
          {items.map((item, i) => (
            <AnimatedElement
              key={item.title}
              animation="slideUp"
              y={15}
              delay={i * 0.1}
            >
              <div
                className={`${cardBackgrounds[i % cardBackgrounds.length]} rounded-[12px] p-[36px_24px] h-full flex flex-col items-center text-center`}
              >
                <div className="font-[family-name:var(--font-hey-comic)] text-[24px] leading-[105%] text-black mb-3">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-dim-grey text-[16px] leading-[145%]">
                    {item.description}
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
