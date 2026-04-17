import Image from "next/image";
import Link from "next/link";
import type { MediaAsset } from "@/data/types";

type PartyPath = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  tags: ReadonlyArray<string>;
  eyebrow: string;
  accentClassName: string;
  image: MediaAsset;
};

type PartyPathCardProps = {
  path: PartyPath;
};

export function PartyPathCard({ path }: PartyPathCardProps) {
  const usesPhotography = path.image.status === "approved";
  const imageFit = path.image.objectFit ?? "cover";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-magical ${path.accentClassName}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/60 p-5 sm:p-6">
        <div>
          <span className="eyebrow-plain">{path.eyebrow}</span>
          <h3 className="mt-2 text-xl font-semibold leading-snug text-midnight sm:text-2xl lg:text-[1.7rem]">
            {path.title}
          </h3>
        </div>
        <div
          className={`shrink-0 overflow-hidden border border-white/80 bg-white/88 shadow-soft ${
            usesPhotography ? "h-20 w-20 rounded-2xl" : "rounded-2xl p-2"
          }`}
        >
          <Image
            src={path.image.src}
            alt=""
            width={usesPhotography ? 80 : 64}
            height={usesPhotography ? 80 : 64}
            aria-hidden
            className={
              usesPhotography
                ? `h-full w-full ${
                    imageFit === "contain"
                      ? "bg-white p-2 object-contain"
                      : "object-cover"
                  }`
                : ""
            }
            style={{ objectPosition: path.image.objectPosition }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="section-copy text-sm leading-relaxed sm:text-base">
          {path.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {path.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/72 px-2.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-copy-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Link
            href={path.href}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-midnight transition group-hover:gap-3"
          >
            {path.ctaLabel}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              {"\u2192"}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
