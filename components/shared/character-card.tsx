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
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,242,248,0.98))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,247,252,0.98),rgba(245,235,255,0.95))]",
    tag: "bg-[rgba(245,102,187,0.09)] text-rose",
  },
  hero: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,244,255,0.98))]",
    media:
      "bg-[linear-gradient(180deg,rgba(248,251,255,0.98),rgba(233,241,255,0.95))]",
    tag: "bg-[rgba(73,101,201,0.09)] text-[color:#4665c9]",
  },
  neutral: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,241,255,0.94))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,241,255,0.95))]",
    tag: "bg-[rgba(125,100,255,0.08)] text-violet",
  },
  playful: {
    frame:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,252,240,0.98))]",
    media:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,255,246,0.92))]",
    tag: "bg-[rgba(255,214,123,0.22)] text-[color:#1e4d32]",
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
      ? "min-h-[15rem] sm:min-h-[16rem]"
      : "min-h-[20rem] sm:min-h-[22rem]";

  return (
    <article
      className={`glass-panel overflow-hidden rounded-[2rem] ${styles.frame}`}
    >
      <div
        className={`relative border-b border-line p-5 sm:p-6 ${styles.media} ${mediaHeight}`}
      >
        <span className="eyebrow border-0 px-0 py-0 shadow-none">
          {character.category}
        </span>
        <div className="mt-5 overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/75">
          <Image
            src={character.mainMedia.src}
            alt={character.mainMedia.alt}
            width={character.mainMedia.width}
            height={character.mainMedia.height}
            className="h-full w-full object-cover"
          />
        </div>

        {character.insetMedia ? (
          <div className="absolute bottom-4 right-4 w-24 overflow-hidden rounded-[1.4rem] border border-white/90 bg-white shadow-magical sm:w-28">
            <Image
              src={character.insetMedia.src}
              alt={character.insetMedia.alt}
              width={character.insetMedia.width}
              height={character.insetMedia.height}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-semibold text-midnight">{character.name}</h3>
        <p className="section-copy mt-3 text-sm sm:text-base">
          {variant === "showcase" && character.longDescription
            ? character.longDescription
            : character.shortDescription}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {character.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] ${styles.tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
