import Link from "next/link";
import Image from "next/image";
import type { ResolvedCharacter } from "@/data/types";

type CharacterCardProps = {
  character: ResolvedCharacter;
  variant?: "compact" | "showcase";
  theme?: "princess" | "hero" | "neutral" | "playful";
};

const themeStyles = {
  princess: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,242,248,0.96))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,247,252,0.96),rgba(245,235,255,0.92))]",
    tag: "bg-[rgba(245,102,187,0.1)] text-rose",
  },
  hero: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(232,241,255,0.96))]",
    media:
      "bg-[linear-gradient(180deg,rgba(244,249,255,0.96),rgba(220,234,252,0.92))]",
    tag: "bg-[rgba(42,98,195,0.1)] text-[color:#2f4f8f]",
  },
  neutral: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,241,255,0.94))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,241,255,0.92))]",
    tag: "bg-[rgba(125,100,255,0.08)] text-violet",
  },
  playful: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,252,240,0.96))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,255,246,0.9))]",
    tag: "bg-[rgba(255,214,123,0.24)] text-[color:#1e4d32]",
  },
} as const;

export function CharacterCard({
  character,
  variant = "showcase",
  theme = "neutral",
}: CharacterCardProps) {
  const styles = themeStyles[theme];
  const mediaHeight =
    variant === "compact"
      ? "h-[9.75rem] sm:h-[16.5rem]"
      : "h-[12rem] sm:h-[20rem]";
  const mainImageFit = character.mainMedia.objectFit ?? "cover";
  const insetImageFit = character.insetMedia?.objectFit ?? "cover";
  const description =
    variant === "showcase" && character.longDescription
      ? character.longDescription
      : character.shortDescription;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line shadow-soft transition-shadow duration-300 hover:shadow-magical sm:rounded-[1.75rem] ${styles.frame}`}
    >
      <div
        className={`relative border-b border-line p-3 sm:p-5 ${styles.media}`}
      >
        <span className="eyebrow-plain text-[0.62rem] sm:text-[0.72rem]">
          {character.category}
        </span>
        <div
          className={`mt-3 overflow-hidden rounded-[1rem] border border-white/60 bg-white/75 sm:mt-4 sm:rounded-[1.25rem] ${mediaHeight}`}
        >
          <Image
            src={character.mainMedia.src}
            alt={character.mainMedia.alt}
            width={character.mainMedia.width}
            height={character.mainMedia.height}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
              mainImageFit === "contain"
                ? "bg-white p-3 object-contain"
                : "object-cover"
            }`}
            style={{ objectPosition: character.mainMedia.objectPosition }}
          />
        </div>

        {character.insetMedia ? (
          <div className="absolute bottom-3 right-3 w-16 overflow-hidden rounded-xl border border-white/90 bg-white shadow-magical sm:bottom-4 sm:right-4 sm:w-24 sm:rounded-2xl">
            <Image
              src={character.insetMedia.src}
              alt={character.insetMedia.alt}
              width={character.insetMedia.width}
              height={character.insetMedia.height}
              className={`h-full w-full ${
                insetImageFit === "contain"
                  ? "bg-white p-2 object-contain"
                  : "object-cover"
              }`}
              style={{ objectPosition: character.insetMedia.objectPosition }}
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-base font-semibold leading-tight text-midnight sm:text-[1.7rem]">
          {character.name}
        </h3>
        <p className="section-copy mobile-clamp-2 mt-2 text-xs leading-relaxed sm:mt-2.5 sm:text-base">
          {description}
        </p>

        <ul className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
          {character.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-2.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] ${styles.tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {character.detailHref ? (
          <div className="mt-auto pt-4 sm:pt-5">
            <Link
              href={character.detailHref}
              className="button-secondary min-h-0 px-3.5 py-2.5 text-xs sm:min-h-[3.1rem] sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="sm:hidden">View</span>
              <span className="hidden sm:inline">See {character.name}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
