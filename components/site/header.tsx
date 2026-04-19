"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-line px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href={brandHref}
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <Image
            src={siteShellContent.brandLogo.src}
            alt={siteShellContent.brandLogo.alt}
            width={siteShellContent.brandLogo.width}
            height={siteShellContent.brandLogo.height}
            className="h-auto w-[9rem] sm:w-[10.5rem] lg:w-[11.5rem]"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={cta.href}
            className="button-primary hidden text-sm sm:inline-flex"
          >
            {cta.label}
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/94 text-midnight shadow-soft transition hover:bg-white"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Menu"}</span>
            {menuOpen ? (
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
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Full-panel menu — renders at every breakpoint */}
      {menuOpen ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60]"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-midnight/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-[1.75rem] border-b border-line bg-white/98 shadow-magical backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-2">
                <Image
                  src={siteShellContent.brandLogo.src}
                  alt={siteShellContent.brandLogo.alt}
                  width={siteShellContent.brandLogo.width}
                  height={siteShellContent.brandLogo.height}
                  className="h-auto w-[9rem]"
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
                className="grid gap-8 pb-8 pt-4 sm:grid-cols-2 sm:gap-10 sm:pt-6"
              >
                {/* Parties group */}
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

                {/* Info group */}
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

              <div className="border-t border-line py-6">
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

      {/* Party-type quick nav — always visible below the header */}
      <MobileSubNav />
    </header>
  );
}
