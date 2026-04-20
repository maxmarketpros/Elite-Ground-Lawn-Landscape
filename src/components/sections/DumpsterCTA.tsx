import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/ui/AnimatedElement";

export default function DumpsterCTA() {
  return (
    <section className="relative py-[80px] bg-black overflow-hidden">
      {/* Subtle paw watermark */}
      <Image
        src="/images/light-20big-20paw.svg"
        alt=""
        width={420}
        height={420}
        className="absolute -right-10 -bottom-16 opacity-[0.08] pointer-events-none invert"
        loading="lazy"
      />

      <div className="max-w-[1160px] mx-auto px-5 relative">
        <div className="grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
          {/* Dumpster image */}
          <AnimatedElement animation="slideUp" y={30}>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-[2px] flex items-center justify-center">
              <Image
                src="/images/site/ChatGPT-Image-Apr-2-2026-10_27_13-AM.png"
                alt="Black 15-yard dumpster with Elite Grounds logo and phone number (501) 503-8577"
                width={1400}
                height={900}
                sizes="(max-width: 992px) 90vw, 560px"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>
          </AnimatedElement>

          {/* Content */}
          <div>
            <AnimatedElement animation="fade">
              <div className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/20 border border-steel-blue/50 text-steel-blue text-[13px] font-semibold uppercase tracking-wide mb-5">
                15-Yard Dumpster Rental
              </div>
              <h2 className="text-white mb-5">
                Big project? We&apos;ve got a{" "}
                <span className="text-steel-blue">dumpster for that.</span>
              </h2>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay={0.15}>
              <p className="text-white/80 text-[18px] leading-[160%] mb-6 max-w-[520px]">
                Perfect for home renovations, cleanouts, and construction
                debris. Delivered right to your site — loaded, hauled, and out
                of your way.
              </p>

              <ul className="flex flex-col gap-3 mb-8 max-w-[500px]">
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-steel-blue flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0"
                  >
                    ✓
                  </span>
                  <div className="flex-1 flex items-baseline gap-2 flex-wrap">
                    <span className="text-white font-[family-name:var(--font-hey-comic)] text-[18px]">
                      15 Cubic Yards
                    </span>
                    <span className="text-white/60 text-[14px]">
                      — ample room for medium projects
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-steel-blue flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0"
                  >
                    ✓
                  </span>
                  <div className="flex-1 flex items-baseline gap-2 flex-wrap">
                    <span className="text-white font-[family-name:var(--font-hey-comic)] text-[18px]">
                      14&apos; L × 7&apos; W × 4&apos; H
                    </span>
                    <span className="text-white/60 text-[14px]">
                      — easy to load, low to the ground
                    </span>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col gap-3 xs:flex-row max-w-[440px]">
                <Link
                  href="/dumpster-rental"
                  className="inline-flex items-center justify-center bg-green-cta text-white font-bold py-3 px-6 rounded-full text-[17px] shadow-[0_20px_30px_-12px_#0e861578] hover:-translate-y-[5px] active:scale-95 transition-transform"
                >
                  Book a Dumpster
                </Link>
                <Link
                  href="tel:5015038577"
                  className="inline-flex items-center justify-center bg-white text-black font-bold py-3 px-6 rounded-full text-[17px] hover:-translate-y-[5px] active:scale-95 transition-transform"
                >
                  🤙 (501) 503-8577
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
