"use client";

import { useState } from "react";
import Image from "next/image";
import type { ResolvedCharacter } from "@/data/types";

// How many characters to show before the "Show all" expander. Nine reads as
// three tidy rows on mobile (3 cols) and keeps the booking form short so the
// page scrolls naturally past it — no nested scroll region to get caught in.
const COLLAPSED_COUNT = 9;

type CharacterPickerProps = {
  characters: ReadonlyArray<ResolvedCharacter>;
  name: string;
  label: string;
  required?: boolean;
  err?: string;
  errId?: string;
  /** Selected character slugs (controlled by the parent form). */
  selected: ReadonlyArray<string>;
  onToggle: (slug: string) => void;
};

export function CharacterPicker({
  characters,
  name,
  label,
  required,
  err,
  errId,
  selected,
  onToggle,
}: CharacterPickerProps) {
  const [expanded, setExpanded] = useState(false);
  const selectedSet = new Set(selected);

  // Submit the human-readable names, comma-joined, so the inquiry email reads
  // "Cinderella, Batman" with no change to the server payload shape.
  const selectedNames = characters
    .filter((c) => selectedSet.has(c.slug))
    .map((c) => c.name)
    .join(", ");

  const canCollapse = characters.length > COLLAPSED_COUNT;
  // When collapsed, always keep already-selected characters visible so a
  // selection made further down the list can still be toggled off.
  const visibleCharacters =
    expanded || !canCollapse
      ? characters
      : characters.filter(
          (c, i) => i < COLLAPSED_COUNT || selectedSet.has(c.slug),
        );

  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center justify-between gap-3 text-sm font-bold text-midnight">
        <span>
          {label}
          {required ? (
            <span className="font-semibold text-copy-soft">
              &nbsp;(required)
            </span>
          ) : null}
        </span>
        {selected.length > 0 ? (
          <span className="rounded-full bg-violet/10 px-2.5 py-0.5 text-xs font-bold text-violet">
            {selected.length} selected
          </span>
        ) : (
          <span className="text-xs font-semibold text-copy-soft">
            Add one or more
          </span>
        )}
      </span>

      {/* Hidden input carries the joined names into FormData on submit */}
      <input type="hidden" name={name} value={selectedNames} />

      <div
        className={`rounded-xl border bg-white/95 p-3 transition sm:p-4 ${
          err ? "border-rose/45 ring-2 ring-rose/15" : "border-line-strong"
        }`}
        role="group"
        aria-label="Choose one or more characters"
        aria-required={required}
        aria-invalid={err ? true : undefined}
        aria-describedby={err ? errId : undefined}
      >
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 md:grid-cols-5">
          {visibleCharacters.map((character) => {
            const media = character.insetMedia ?? character.mainMedia;
            const isSelected = selectedSet.has(character.slug);

            return (
              <button
                key={character.slug}
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                onClick={() => onToggle(character.slug)}
                className={`group flex flex-col items-center gap-1.5 rounded-xl p-1.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 ${
                  isSelected
                    ? "bg-violet/8 ring-2 ring-violet/55"
                    : "ring-1 ring-transparent hover:bg-mist/45 hover:ring-violet/15"
                }`}
              >
                <div
                  className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg transition ${
                    isSelected
                      ? "bg-[#f6f1ff]"
                      : "bg-mist/55 group-hover:bg-mist"
                  }`}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className={`transition duration-300 group-hover:scale-[1.03] ${
                      media.objectFit === "contain"
                        ? "object-contain p-1"
                        : "object-cover object-top"
                    }`}
                    sizes="(max-width: 640px) 30vw, 16vw"
                  />
                  {isSelected ? (
                    <div
                      className="absolute inset-0 flex items-end justify-end p-1.5"
                      aria-hidden
                    >
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-[linear-gradient(135deg,#f566bb,#7d64ff)] text-[11px] font-black text-white shadow-soft">
                        ✓
                      </div>
                    </div>
                  ) : null}
                </div>
                <span className="line-clamp-2 text-center text-[0.7rem] font-semibold leading-tight text-midnight">
                  {character.name}
                </span>
              </button>
            );
          })}
        </div>

        {canCollapse ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-line-strong bg-white/80 py-2.5 text-sm font-bold text-midnight transition hover:bg-mist/50"
          >
            {expanded
              ? "Show fewer"
              : `Show all ${characters.length} characters`}
            <span
              aria-hidden
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              {"↓"}
            </span>
          </button>
        ) : null}
      </div>

      {err ? (
        <p id={errId} className="text-sm font-semibold text-rose" role="status">
          {err}
        </p>
      ) : null}
    </div>
  );
}
