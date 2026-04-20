import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedElement from "@/components/ui/AnimatedElement";

const services = [
  {
    href: "/services/lawn-mowing",
    title: "Lawn Mowing",
    description:
      "Weekly, bi-weekly, or one-time professional cuts with edge trimming and full clean-up.",
    mascot: "/images/service-pages/lawn-mowing-mascot.png",
    mascotAlt: "Elite Grounds mascot mowing a lawn with a push mower",
    bg: "bg-step-green",
  },
  {
    href: "/services/mulch-installation",
    title: "Mulch Installation",
    description:
      "Organic or inorganic mulch installed at the right depth with crisp edging and optional weed barrier.",
    mascot: "/images/service-pages/mulch-installation-mascot.png",
    mascotAlt: "Elite Grounds mascot spreading mulch from a wheelbarrow",
    bg: "bg-step-yellow",
  },
  {
    href: "/services/landscaping-rocks",
    title: "Landscaping Rocks",
    description:
      "River rock, boulders, gravel paths, drainage solutions, and clean custom borders.",
    mascot: "/images/service-pages/landscaping-rock-installation-mascot.png",
    mascotAlt: "Elite Grounds mascot pouring decorative rocks into a landscape bed",
    bg: "bg-step-blue",
  },
  {
    href: "/services/tree-services",
    title: "Tree Services",
    description:
      "Tree trimming, planting, and removal. Family-owned, licensed and insured, free estimates.",
    mascot: "/images/service-pages/tree-services-trimming-mascot.png",
    mascotAlt: "Elite Grounds mascot holding tree pruning shears",
    bg: "bg-step-cream",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1160px] mx-auto px-5">
        <SectionHeading showDecoration>Our Services</SectionHeading>
        <p className="text-dim-grey text-[18px] leading-[150%] max-w-[720px] mx-auto text-center mb-10">
          From weekly mows to rock features and tree care — everything your
          yard needs, handled by one trusted Little Rock crew.
        </p>

        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-xs:grid-cols-1">
          {services.map((s, i) => (
            <AnimatedElement
              key={s.href}
              animation="slideUp"
              y={20}
              delay={i * 0.08}
              className="h-full"
            >
              <Link
                href={s.href}
                className="group block h-full rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 border border-black/5"
              >
                <div
                  className={`${s.bg} relative aspect-square flex items-center justify-center overflow-hidden`}
                >
                  <Image
                    src={s.mascot}
                    alt={s.mascotAlt}
                    width={600}
                    height={600}
                    sizes="(max-width: 480px) 90vw, (max-width: 992px) 45vw, 260px"
                    className="w-[92%] h-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col items-start text-left">
                  <div className="font-[family-name:var(--font-hey-comic)] text-[24px] leading-[105%] text-black mb-2">
                    {s.title}
                  </div>
                  <p className="text-dim-grey text-[15px] leading-[145%] mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-steel-blue font-semibold text-[15px] group-hover:gap-2.5 transition-[gap] duration-200">
                    Learn more
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                    >
                      <path d="M8.78 3.22a.75.75 0 00-1.06 1.06L10.44 7H2.75a.75.75 0 000 1.5h7.69l-2.72 2.72a.75.75 0 101.06 1.06l4-4a.75.75 0 000-1.06l-4-4z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
