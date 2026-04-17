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
      ? "min-h-[14rem] sm:min-h-[15rem]"
      : "min-h-[18rem] sm:min-h-[20rem]";
  const mainImageFit = character.mainMedia.objectFit ?? "cover";
  const insetImageFit = character.insetMedia?.objectFit ?? "cover";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line shadow-soft transition-shadow duration-300 hover:shadow-magical ${styles.frame}`}
    >
      <div
        className={`relative border-b border-line p-4 sm:p-5 ${styles.media} ${mediaHeight}`}
      >
        <span className="eyebrow-plain">{character.category}</span>
        <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/75">
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
          <div className="absolute bottom-4 right-4 w-20 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-magical sm:w-24">
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

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-2xl font-semibold leading-tight text-midnight sm:text-[1.7rem]">
          {character.name}
        </h3>
        <p className="section-copy mt-2.5 text-sm sm:text-base">
          {variant === "showcase" && character.longDescription
            ? character.longDescription
            : character.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
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
          <div className="mt-auto pt-5">
            <Link
              href={character.detailHref}
              className="button-secondary text-sm"
            >
              See {character.name}
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
