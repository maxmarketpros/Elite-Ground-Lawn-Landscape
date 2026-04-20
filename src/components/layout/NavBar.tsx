"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const services = [
  { href: "/services/lawn-mowing", label: "Lawn Mowing" },
  { href: "/services/mulch-installation", label: "Mulch Installation" },
  { href: "/services/landscaping-rocks", label: "Landscaping Rocks" },
  { href: "/services/tree-services", label: "Tree Services" },
];

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dumpster-rental", label: "Dumpster Rental" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const isServicesActive = pathname.startsWith("/services/");

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between h-[84px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Elite Grounds Lawn & Landscaping home">
          <Image
            src="/images/NEW-LOGO.png"
            alt="Elite Grounds Lawn & Landscaping logo"
            width={220}
            height={70}
            priority
            className="h-[60px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {primaryLinks.slice(0, 2).map((link) => (
            <NavLink key={link.href} href={link.href} active={isActive(link.href)}>
              {link.label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors cursor-pointer ${
                isServicesActive ? "text-steel-blue" : "text-black hover:text-steel-blue"
              }`}
            >
              Services
              <svg
                aria-hidden="true"
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 8L1 3h10z" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-3 min-w-[240px] border border-black/5">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-5 py-2.5 text-[15px] transition-colors ${
                        isActive(s.href)
                          ? "text-steel-blue font-semibold"
                          : "text-black hover:text-steel-blue hover:bg-black/[0.03]"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.slice(2).map((link) => (
            <NavLink key={link.href} href={link.href} active={isActive(link.href)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <PrimaryButton href="#contact" className="!px-4 !py-2 !text-[14px]">
            📝 Free Quote
          </PrimaryButton>
          <PrimaryButton
            href="tel:5015038577"
            variant="secondary"
            className="!px-4 !py-2 !text-[14px]"
          >
            🤙 (501) 503-8577
          </PrimaryButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-md text-black hover:bg-black/5 cursor-pointer"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 py-4 flex flex-col gap-1">
            {primaryLinks.slice(0, 2).map((link) => (
              <MobileLink key={link.href} href={link.href} active={isActive(link.href)}>
                {link.label}
              </MobileLink>
            ))}
            <div className="pt-2 pb-1 px-3 text-[12px] uppercase tracking-wide text-dim-grey font-semibold">
              Services
            </div>
            {services.map((s) => (
              <MobileLink key={s.href} href={s.href} active={isActive(s.href)} indent>
                {s.label}
              </MobileLink>
            ))}
            {primaryLinks.slice(2).map((link) => (
              <MobileLink key={link.href} href={link.href} active={isActive(link.href)}>
                {link.label}
              </MobileLink>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <PrimaryButton href="#contact" className="text-center">
                📝 Free Quote
              </PrimaryButton>
              <PrimaryButton href="tel:5015038577" variant="secondary" className="text-center">
                🤙 (501) 503-8577
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`text-[15px] font-medium transition-colors ${
        active ? "text-steel-blue" : "text-black hover:text-steel-blue"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  active,
  children,
  indent = false,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`block rounded-md px-3 py-2.5 text-[16px] font-medium transition-colors ${
        indent ? "pl-6" : ""
      } ${active ? "text-steel-blue bg-steel-blue/5" : "text-black hover:bg-black/[0.04]"}`}
    >
      {children}
    </Link>
  );
}
