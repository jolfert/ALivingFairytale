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
      className={`group overflow-hidden rounded-[2rem] border border-line shadow-magical ${path.accentClassName}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/60 p-6">
        <div>
          <span className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-copy-soft">
            {path.eyebrow}
          </span>
          <h3 className="mt-2 text-2xl font-semibold leading-snug text-midnight sm:text-3xl">
            {path.title}
          </h3>
        </div>
        <div
          className={`shrink-0 overflow-hidden border border-white/80 bg-white/85 shadow-magical ${
            usesPhotography ? "h-20 w-20 rounded-[1.35rem]" : "rounded-2xl p-2"
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

      <div className="p-6">
        <p className="section-copy text-base">{path.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {path.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/72 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-copy-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={path.href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-midnight transition group-hover:gap-3"
        >
          {path.ctaLabel}
          <span aria-hidden>{"\u2192"}</span>
        </Link>
      </div>
    </article>
  );
}
