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
    <header className="sticky top-0 z-50 border-b border-line bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={brandHref} className="flex items-center gap-3">
          <Image
            src={siteShellContent.brandLogo.src}
            alt={siteShellContent.brandLogo.alt}
            width={siteShellContent.brandLogo.width}
            height={siteShellContent.brandLogo.height}
            className="h-auto w-[10.5rem] sm:w-[11.75rem]"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-copy-soft transition hover:bg-white hover:text-midnight"
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
