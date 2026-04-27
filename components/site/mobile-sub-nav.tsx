"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Pill = {
  label: string;
  href: string;
  /** Active if the current pathname equals or starts with any of these. */
  activeWhen: ReadonlyArray<string>;
};

const pills: ReadonlyArray<Pill> = [
  { label: "Princess", href: "/princess", activeWhen: ["/princess"] },
  { label: "Heroes", href: "/heroes", activeWhen: ["/heroes"] },
  { label: "Mascots", href: "/mascots", activeWhen: ["/mascots"] },
  { label: "Pricing", href: "/pricing", activeWhen: ["/pricing"] },
  { label: "About", href: "/about", activeWhen: ["/about"] },
  { label: "Reviews", href: "/reviews", activeWhen: ["/reviews"] },
];

export function MobileSubNav() {
  const pathname = usePathname() ?? "/";

  return (
    <div
      aria-label="Party types"
      className="hidden border-b border-line bg-white/80 md:block"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-3 py-2 sm:px-6 lg:px-8">
        <nav
          aria-label="Quick links"
          className="flex min-w-max items-center gap-1.5"
        >
          {pills.map((pill) => {
            const isActive = pill.activeWhen.some(
              (prefix) =>
                pathname === prefix || pathname.startsWith(`${prefix}/`),
            );
            return (
              <Link
                key={pill.href}
                href={pill.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-bold transition ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#f566bb,#7d64ff)] text-white shadow-soft"
                    : "border border-line bg-white/80 text-midnight hover:bg-white"
                }`}
              >
                {pill.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
