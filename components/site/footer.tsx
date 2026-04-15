import Image from "next/image";

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
              src="/A%20living%20fairytale%20logo.png"
              alt="A Living Fairytale"
              width={220}
              height={84}
              className="h-auto w-[11rem] sm:w-[13rem]"
            />
            <p className="section-copy mt-4 text-sm">
              Princess wonder, hero excitement, mascot fun, and polished party
              planning built to feel memorable from the very first click.
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
