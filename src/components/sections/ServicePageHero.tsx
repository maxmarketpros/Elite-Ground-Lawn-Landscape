import Image from "next/image";
import ButtonGroup from "@/components/ui/ButtonGroup";

interface ServicePageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subhead: string;
  bullets?: string[];
  heroImage: string;
  heroImageAlt: string;
  mascot: string;
  mascotAlt: string;
}

export default function ServicePageHero({
  eyebrow,
  title,
  titleAccent,
  subhead,
  bullets,
  heroImage,
  heroImageAlt,
  mascot,
  mascotAlt,
}: ServicePageHeroProps) {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(#000000d6, #000000d6), url('${heroImage}')`,
        }}
        aria-label={heroImageAlt}
      >
        <div className="max-w-[1160px] mx-auto px-5">
          <div className="flex items-center gap-8 py-[100px] pb-[60px] lg:flex-row max-lg:flex-col max-lg:py-[60px]">
            {/* Content */}
            <div className="lg:w-[55%] max-lg:w-full">
              {eyebrow && (
                <div className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/20 border border-steel-blue/50 text-steel-blue text-[13px] font-semibold uppercase tracking-wide mb-5">
                  {eyebrow}
                </div>
              )}
              <h1 className="text-white">
                {titleAccent && (
                  <span className="text-steel-blue block">{titleAccent}</span>
                )}
                {title}
              </h1>
              <p className="text-white text-[18px] leading-[150%] mt-6 mb-6 max-w-[560px]">
                {subhead}
              </p>
              {bullets && bullets.length > 0 && (
                <ul className="text-white text-[18px] leading-[180%] mb-8 max-w-[560px]">
                  {bullets.map((b) => (
                    <li key={b}>✅ {b}</li>
                  ))}
                </ul>
              )}
              <ButtonGroup className="max-w-[380px]" />
            </div>

            {/* Mascot */}
            <div className="lg:w-[45%] max-lg:w-full flex justify-center">
              <Image
                src={mascot}
                alt={mascotAlt}
                width={900}
                height={900}
                sizes="(max-width: 1024px) 80vw, 500px"
                className="w-full max-w-[500px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
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
