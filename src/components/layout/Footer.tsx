import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/services/lawn-mowing", label: "Lawn Mowing" },
  { href: "/services/mulch-installation", label: "Mulch Installation" },
  { href: "/services/landscaping-rocks", label: "Landscaping Rocks" },
  { href: "/services/tree-services", label: "Tree Services" },
  { href: "/dumpster-rental", label: "15-Yard Dumpster Rental" },
];

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1160px] mx-auto px-5 py-[60px]">
        <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-xs:grid-cols-1">
          {/* Brand */}
          <div className="max-lg:col-span-2 max-xs:col-span-1">
            <Link href="/" aria-label="Elite Grounds Lawn & Landscaping home" className="inline-block mb-5">
              <Image
                src="/images/NEW-LOGO.png"
                alt="Elite Grounds Lawn & Landscaping logo"
                width={220}
                height={70}
                className="h-[64px] w-auto"
              />
            </Link>
            <p className="text-white/70 text-[15px] leading-[155%] mb-5 max-w-[320px]">
              Little Rock&apos;s trusted lawn &amp; landscape experts. 20 years
              of experience, family-owned, and committed to beautiful,
              professional results that last.
            </p>
            <div className="flex flex-col gap-2 text-[15px]">
              <a href="tel:5015038577" className="hover:text-steel-blue transition-colors">
                📞 (501) 503-8577
              </a>
              <a
                href="mailto:elitegroundslawn@gmail.com"
                className="hover:text-steel-blue transition-colors break-all"
              >
                ✉️ elitegroundslawn@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-[20px] mb-5 font-[family-name:var(--font-hey-comic)]">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/80 hover:text-steel-blue transition-colors text-[15px]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[20px] mb-5 font-[family-name:var(--font-hey-comic)]">
              Company
            </h3>
            <ul className="flex flex-col gap-3 mb-6">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-white/80 hover:text-steel-blue transition-colors text-[15px]"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-[20px] mb-3 font-[family-name:var(--font-hey-comic)]">
              Service Area
            </h3>
            <p className="text-white/70 text-[14px] leading-[155%]">
              Little Rock, AR and surrounding communities within a 25-mile
              radius.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-5 py-5 flex flex-wrap items-center justify-between gap-3 text-[13px] text-white/60">
          <div>
            © {year} Elite Grounds Lawn &amp; Landscaping. All rights reserved.
          </div>
          <div>
            Serving Little Rock, AR and surrounding areas.
          </div>
        </div>
      </div>
    </footer>
  );
}
