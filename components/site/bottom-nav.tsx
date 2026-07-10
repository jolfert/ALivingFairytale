"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type RailItem = {
  label: string;
  href: string;
  /** Active if the current pathname equals or starts with any of these. */
  activeWhen: ReadonlyArray<string>;
  icon: React.ReactNode;
  emphasis?: boolean;
};

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-[1.35rem] w-[1.35rem]",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const items: ReadonlyArray<RailItem> = [
  {
    label: "Princess",
    href: "/princess",
    activeWhen: ["/princess"],
    icon: (
      <svg aria-hidden {...iconProps}>
        <path d="M3.5 18h17M4.2 18 2.8 8.8l5.3 3.7L12 5.2l3.9 7.3 5.3-3.7L19.8 18" />
      </svg>
    ),
  },
  {
    label: "Heroes",
    href: "/heroes",
    activeWhen: ["/heroes"],
    icon: (
      <svg aria-hidden {...iconProps}>
        <path d="M13 2.5 5 13.5h5.5L11 21.5l8-11h-5.5L13 2.5Z" />
      </svg>
    ),
  },
  {
    label: "Mascots",
    href: "/mascots",
    activeWhen: ["/mascots"],
    icon: (
      <svg aria-hidden {...iconProps}>
        <ellipse cx="12" cy="8.6" rx="5.4" ry="6" />
        <path d="m12 14.6-.9 1.6h1.8l-.9 1.6c0 1.6-1.3 2.4-2.6 2.4" />
      </svg>
    ),
  },
  {
    label: "Pricing",
    href: "/pricing",
    activeWhen: ["/pricing"],
    icon: (
      <svg aria-hidden {...iconProps}>
        <path d="M20.4 13.1 12.9 5.6A2 2 0 0 0 11.5 5H6a1 1 0 0 0-1 1v5.5c0 .53.21 1.04.59 1.41l7.5 7.5a2 2 0 0 0 2.82 0l4.5-4.5a2 2 0 0 0 0-2.81Z" />
        <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Book",
    href: "/book",
    activeWhen: ["/book"],
    emphasis: true,
    icon: (
      <svg aria-hidden {...iconProps}>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
        <path d="M3.5 9.5h17M8.2 2.8V6M15.8 2.8V6M12 12.4l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3.9-1.8Z" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_28px_rgba(122,84,161,0.14)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => {
          const isActive = item.activeWhen.some(
            (prefix) =>
              pathname === prefix || pathname.startsWith(`${prefix}/`),
          );
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="flex flex-col items-center gap-0.5 pb-1.5 pt-2"
            >
              <span
                className={`grid h-7 w-12 place-items-center rounded-full transition ${
                  item.emphasis
                    ? "bg-[linear-gradient(135deg,#f566bb,#7d64ff)] text-white shadow-button"
                    : isActive
                      ? "bg-[rgba(245,102,187,0.14)] text-rose"
                      : "text-copy-soft"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-[0.64rem] font-bold tracking-wide ${
                  isActive || item.emphasis
                    ? "text-midnight"
                    : "text-copy-soft"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
