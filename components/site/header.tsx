import type { LinkConfig } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import { siteShellContent } from "@/data/site-shell";

type HeaderProps = {
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  brandHref?: string;
  cta?: LinkConfig;
};

export function Header({
  links,
  brandHref = "/",
  cta = siteShellContent.headerDefaultCta,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/82 backdrop-blur-xl">
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
            className="h-auto w-[9.5rem] sm:w-[11rem]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-copy-soft transition hover:bg-white hover:text-midnight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href={cta.href} className="button-primary text-sm">
          {cta.label}
        </Link>
      </div>
    </header>
  );
}
