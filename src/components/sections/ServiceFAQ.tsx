import SectionHeading from "@/components/ui/SectionHeading";
import ButtonGroup from "@/components/ui/ButtonGroup";
import AccordionItem from "@/components/ui/AccordionItem";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  heading?: string;
  faqs: FAQ[];
  showCta?: boolean;
}

export default function ServiceFAQ({
  heading = "FAQs",
  faqs,
  showCta = true,
}: ServiceFAQProps) {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading showDecoration>{heading}</SectionHeading>
        <div className="grid grid-cols-2 gap-4 mb-10 max-lg:grid-cols-1">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        {showCta && <ButtonGroup className="max-w-[380px] mx-auto" />}
      </div>
    </section>
  );
}
