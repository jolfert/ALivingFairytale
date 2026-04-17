import Link from "next/link";
import type { CtaBannerContent } from "@/data/types";

type CtaBannerProps = {
  content: CtaBannerContent;
  tone?: "fairytale" | "hero" | "playful";
};

const tonePanel = {
  fairytale:
    "border-[rgba(245,102,187,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))]",
  hero: "border-[rgba(42,98,195,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(228,238,255,0.96))]",
  playful:
    "border-[rgba(65,181,111,0.26)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.96))]",
} as const;

const toneBullet = {
  fairytale: "text-rose",
  hero: "text-[color:#2f4f8f]",
  playful: "text-[color:#2fa066]",
} as const;

export function CtaBanner({
  content,
  tone = "fairytale",
}: CtaBannerProps) {
  const panelClass = tonePanel[tone];
  const bulletClass = toneBullet[tone];

  return (
    <div className="glass-panel grid gap-8 rounded-[2rem] p-6 sm:p-10 xl:grid-cols-[1.15fr_.85fr]">
      <div>
        <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="section-copy mt-5 max-w-xl text-base sm:text-lg">
          {content.description}
        </p>
      </div>

      <div className={`rounded-[1.5rem] border p-6 sm:p-7 ${panelClass}`}>
        <ul className="space-y-3.5">
          {content.notes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-3 text-sm text-copy-soft sm:text-base"
            >
              <span className={`mt-1 shrink-0 ${bulletClass}`} aria-hidden>
                {"\u2726"}
              </span>
              <span className="leading-relaxed">{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
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
