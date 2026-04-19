"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LinkConfig } from "@/data/types";
import { siteShellContent } from "@/data/site-shell";

type NavLink = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  href?: string;
  items: ReadonlyArray<NavLink>;
};

type HeaderProps = {
  // Kept for backwards compatibility — new nav comes from siteShellContent.
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

const flatLinks: ReadonlyArray<NavLink> = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

export function Header({
  brandHref = "/",
  cta = siteShellContent.headerDefaultCta,
}: HeaderProps) {
  const [partiesOpen, setPartiesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const partiesRef = useRef<HTMLDivElement | null>(null);

  // Close the parties dropdown on outside click
  useEffect(() => {
    if (!partiesOpen) return;
    function onClick(event: MouseEvent) {
      if (
        partiesRef.current &&
        !partiesRef.current.contains(event.target as Node)
      ) {
        setPartiesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [partiesOpen]);

  // Close the mobile menu on Esc, disable body scroll while open
  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href={brandHref}
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <Image
            src={siteShellContent.brandLogo.src}
            alt={siteShellContent.brandLogo.alt}
            width={siteShellContent.brandLogo.width}
            height={siteShellContent.brandLogo.height}
            className="h-auto w-[8.5rem] sm:w-[10rem] lg:w-[11rem]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <div ref={partiesRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={partiesOpen}
              onClick={() => setPartiesOpen((prev) => !prev)}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold text-copy-soft transition hover:bg-white hover:text-midnight"
            >
              {partiesGroup.label}
              <span
                aria-hidden
                className={`text-[0.7rem] transition-transform ${
                  partiesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {partiesOpen ? (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 min-w-[14rem] overflow-hidden rounded-2xl border border-line bg-white shadow-magical"
              >
                {partiesGroup.items.map((item) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    href={item.href}
                    onClick={() => setPartiesOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-midnight transition hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {flatLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-copy-soft transition hover:bg-white hover:text-midnight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.href}
            className="button-primary hidden text-sm sm:inline-flex"
          >
            {cta.label}
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/92 text-midnight transition hover:bg-white lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-midnight/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 max-h-[90vh] overflow-y-auto rounded-b-[1.75rem] border-b border-line bg-white/98 shadow-magical backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 py-4">
              <Image
                src={siteShellContent.brandLogo.src}
                alt={siteShellContent.brandLogo.alt}
                width={siteShellContent.brandLogo.width}
                height={siteShellContent.brandLogo.height}
                className="h-auto w-[8.5rem]"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-midnight"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-3 pb-6"
            >
              <div className="px-3 pb-2 pt-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-copy-soft">
                Parties
              </div>
              {partiesGroup.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-midnight transition hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 px-3 pb-2 pt-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-copy-soft">
                Info
              </div>
              {flatLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-midnight transition hover:bg-mist"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={cta.href}
                onClick={() => setMobileOpen(false)}
                className="button-primary mt-5 justify-center"
              >
                {cta.label}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
