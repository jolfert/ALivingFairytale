"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkConfig } from "@/data/types";
import { siteShellContent } from "@/data/site-shell";
import { MobileSubNav } from "@/components/site/mobile-sub-nav";

type NavLink = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  items: ReadonlyArray<NavLink>;
};

type HeaderProps = {
  // Kept for backwards compatibility. Nav content lives in this file.
  links?: ReadonlyArray<NavLink>;
  brandHref?: string;
  cta?: LinkConfig;
};

const partiesGroup: NavGroup = {
  label: "Parties",
  items: [
    { label: "Princess Parties", href: "/princess" },
    { label: "Superhero Parties", href: "/heroes" },
    { label: "Mascots & Rentals", href: "/mascots" },
  ],
};

const infoLinks: ReadonlyArray<NavLink> = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

export function Header({
  brandHref = "/",
  cta = siteShellContent.headerDefaultCta,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  // Hide the CTA when the user is already on the CTA's destination page.
  const hideCta = pathname === cta.href;

  // Close on Escape; lock body scroll while the menu panel is open.
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 bg-white/92 md:sticky md:top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 border-b border-line px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3">
        <Link
          href={brandHref}
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <Image
            src={siteShellContent.brandLogo.src}
            alt={siteShellContent.brandLogo.alt}
            width={siteShellContent.brandLogo.width}
            height={siteShellContent.brandLogo.height}
            className="h-auto w-[11rem] sm:w-[13.5rem] lg:w-[15rem]"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {!hideCta ? (
            <Link
              href={cta.href}
              className="button-primary hidden text-sm sm:inline-flex"
            >
              {cta.label}
            </Link>
          ) : null}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-midnight shadow-soft transition hover:bg-white"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Menu"}</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileSubNav />

      {/* Full-panel menu - renders inside the header's stacking context */}
      {menuOpen ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60]"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-midnight/50 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-[1.75rem] border-b border-line bg-white shadow-magical">
            <div className="mx-auto max-w-7xl px-5 pt-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-2">
                <Image
                  src={siteShellContent.brandLogo.src}
                  alt={siteShellContent.brandLogo.alt}
                  width={siteShellContent.brandLogo.width}
                  height={siteShellContent.brandLogo.height}
                  className="h-auto w-[10rem] sm:w-[12rem]"
                />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-midnight shadow-soft"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>

              <nav
                aria-label="Site"
                className="grid gap-8 pb-6 pt-2 sm:grid-cols-2 sm:gap-10 sm:pt-4"
              >
                <section>
                  <h2 className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-copy-soft">
                    {partiesGroup.label}
                  </h2>
                  <ul className="mt-3 flex flex-col gap-1">
                    {partiesGroup.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-xl px-3 py-3 text-lg font-semibold text-midnight transition hover:bg-mist"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-copy-soft">
                    Info
                  </h2>
                  <ul className="mt-3 flex flex-col gap-1">
                    {infoLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-xl px-3 py-3 text-lg font-semibold text-midnight transition hover:bg-mist"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </nav>

              <div className="border-t border-line py-5">
                <Link
                  href={cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="button-primary w-full justify-center sm:w-auto"
                >
                  {cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
