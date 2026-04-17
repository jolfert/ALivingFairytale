import Image from "next/image";
import Link from "next/link";
import { siteShellContent } from "@/data/site-shell";

type FooterProps = {
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Image
              src={siteShellContent.brandLogo.src}
              alt={siteShellContent.brandLogo.alt}
              width={siteShellContent.brandLogo.width}
              height={siteShellContent.brandLogo.height}
              className="h-auto w-[10.5rem] sm:w-[12rem]"
            />
            <p className="section-copy mt-4 max-w-md text-sm leading-relaxed">
              {siteShellContent.footerDescription}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-1.5"
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
        </div>

        <div className="mt-8 border-t border-line pt-5 text-xs text-copy-soft">
          <p>
            &copy; {new Date().getFullYear()} A Living Fairytale. Magical party
            experiences crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
