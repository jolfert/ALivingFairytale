import Image from "next/image";
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
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-line shadow-magical ${path.accentClassName}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/60 p-6">
        <div>
          <span className="eyebrow border-0 px-0 py-0 shadow-none">
            {path.eyebrow}
          </span>
          <h3 className="mt-3 text-3xl font-semibold text-midnight">
            {path.title}
          </h3>
        </div>
        <Image
          src={path.image.src}
          alt=""
          width={64}
          height={64}
          aria-hidden
        />
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

        <a
          href={path.href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-midnight transition group-hover:gap-3"
        >
          {path.ctaLabel}
          <span aria-hidden>{"\u2192"}</span>
        </a>
      </div>
    </article>
  );
}
