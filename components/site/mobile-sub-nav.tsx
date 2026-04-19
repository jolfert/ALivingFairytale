"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Pill = {
  label: string;
  href: string;
  /** Active if the current pathname starts with any of these prefixes */
  activeWhen: ReadonlyArray<string>;
};

const pills: ReadonlyArray<Pill> = [
  { label: "Princess", href: "/princess", activeWhen: ["/princess"] },
  { label: "Heroes", href: "/heroes", activeWhen: ["/heroes"] },
  { label: "Mascots", href: "/mascots", activeWhen: ["/mascots"] },
  { label: "Pricing", href: "/pricing", activeWhen: ["/pricing"] },
];

export function MobileSubNav() {
  const pathname = usePathname() ?? "/";

  // Hide on the homepage — the hero already sells the party paths.
  // Hide on the book page — the form should be the focus.
  if (pathname === "/" || pathname === "/book") return null;

  return (
    <div
      aria-label="Party types"
      className="border-b border-line bg-white/75 backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-3 py-2 sm:px-5">
        <nav
          aria-label="Party type quick links"
          className="flex min-w-max items-center gap-1.5"
        >
          {pills.map((pill) => {
            const isActive = pill.activeWhen.some((prefix) =>
              pathname === prefix || pathname.startsWith(`${prefix}/`),
            );
            return (
              <Link
                key={pill.href}
                href={pill.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition ${
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
