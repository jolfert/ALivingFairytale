import Image from "next/image";
import { siteShellContent } from "@/data/site-shell";

type FooterProps = {
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Image
              src={siteShellContent.brandLogo.src}
              alt={siteShellContent.brandLogo.alt}
              width={siteShellContent.brandLogo.width}
              height={siteShellContent.brandLogo.height}
              className="h-auto w-[11rem] sm:w-[13rem]"
            />
            <p className="section-copy mt-4 text-sm">
              {siteShellContent.footerDescription}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-2"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-copy-soft transition hover:bg-white hover:text-midnight"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
