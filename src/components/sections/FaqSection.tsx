import SectionHeading from "@/components/ui/SectionHeading";
import ButtonGroup from "@/components/ui/ButtonGroup";
import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "How much does a property clean-up cost?",
    answer:
      "Pricing depends on the size of your property and the scope of work needed. Most clean-ups are quoted on a per-job basis. Get in touch for a fast, free estimate!",
  },
  {
    question: "What's included in a property clean-up?",
    answer:
      "Our clean-up service includes mowing, weed removal, leaf and debris clearing, trimming, bed clean-up, and full haul-away — everything your yard needs to look clean and fresh again.",
  },
  {
    question: "How soon can you schedule my job?",
    answer:
      "We offer fast scheduling with availability most weeks. Contact us today, and we'll get you on the calendar as soon as possible.",
  },
  {
    question: "Do you offer ongoing lawn maintenance?",
    answer:
      "Yes! We provide weekly and bi-weekly lawn care packages that include mowing, edging, and basic maintenance to keep your yard in top shape all season long.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading showDecoration>FAQs</SectionHeading>

        <div className="grid grid-cols-2 gap-4 mb-10 max-lg:grid-cols-1">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <ButtonGroup className="max-w-[380px] mx-auto" />
      </div>
    </section>
  );
}
