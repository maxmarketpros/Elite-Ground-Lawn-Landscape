import SectionHeading from "@/components/ui/SectionHeading";
import ButtonGroup from "@/components/ui/ButtonGroup";
import LightboxGallery from "@/components/ui/LightboxGallery";

export default function PortfolioSection() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading>Our Work</SectionHeading>

        <div className="mb-10">
          <LightboxGallery />
        </div>

        <ButtonGroup className="max-w-[380px] mx-auto" />
      </div>
    </section>
  );
}
