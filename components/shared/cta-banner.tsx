import Link from "next/link";
import type { CtaBannerContent } from "@/data/types";

type CtaBannerProps = {
  content: CtaBannerContent;
  tone?: "fairytale" | "hero" | "playful";
};

const tonePanelClasses = {
  fairytale:
    "border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))]",
  hero: "border-[rgba(42,98,195,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(228,238,255,0.96))]",
  playful:
    "border-[rgba(255,214,123,0.35)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.96))]",
} as const;

const toneBulletClasses = {
  fairytale: "text-rose",
  hero: "text-[color:#2f4f8f]",
  playful: "text-[color:#2fa066]",
} as const;

export function CtaBanner({
  content,
  tone = "fairytale",
}: CtaBannerProps) {
  const panelClass = tonePanelClasses[tone];
  const bulletClass = toneBulletClasses[tone];

  return (
    <div className="glass-panel grid gap-8 rounded-[2.4rem] p-6 sm:p-8 xl:grid-cols-[1.1fr_.9fr]">
      <div>
        <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold text-midnight sm:text-5xl">
          {content.title}
        </h2>
        <p className="section-copy mt-5 max-w-2xl text-base sm:text-lg">
          {content.description}
        </p>
      </div>

      <div
        className={`rounded-[2rem] border p-6 shadow-magical ${panelClass}`}
      >
        <ul className="space-y-4">
          {content.notes.map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-copy-soft">
              <span className={`mt-1 ${bulletClass}`} aria-hidden>
                {"\u25CF"}
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={content.primaryCta.href} className="button-primary">
            {content.primaryCta.label}
          </Link>
          {content.secondaryCta ? (
            <Link href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
