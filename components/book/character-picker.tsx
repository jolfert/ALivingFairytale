"use client";

import { useState } from "react";
import Image from "next/image";
import type { ResolvedCharacter } from "@/data/types";

type CharacterPickerProps = {
  characters: ReadonlyArray<ResolvedCharacter>;
  name: string;
  label: string;
  required?: boolean;
  err?: string;
  errId?: string;
};

export function CharacterPicker({
  characters,
  name,
  label,
  required,
  err,
  errId,
}: CharacterPickerProps) {
  const [selected, setSelected] = useState<string>("");

  function toggle(characterName: string) {
    setSelected((prev) => (prev === characterName ? "" : characterName));
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="block text-sm font-bold text-midnight">
        {label}
        {required ? (
          <span className="font-semibold text-copy-soft">
            &nbsp;(required)
          </span>
        ) : null}
      </span>

      {/* Hidden input carries the selected character name into the FormData on submit */}
      <input type="hidden" name={name} value={selected} />

      <div
        className={`max-h-[22rem] overflow-y-auto overscroll-contain rounded-xl border bg-white/95 p-3 transition sm:p-4 ${
          err
            ? "border-rose/45 ring-2 ring-rose/15"
            : "border-line-strong"
        }`}
        role="radiogroup"
        aria-label="Choose your character"
        aria-required={required}
        aria-invalid={err ? true : undefined}
        aria-describedby={err ? errId : undefined}
      >
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 md:grid-cols-5">
          {characters.map((character) => {
            const media = character.insetMedia ?? character.mainMedia;
            const isSelected = selected === character.name;

            return (
              <button
                key={character.slug}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => toggle(character.name)}
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
      </div>

      {err ? (
        <p
          id={errId}
          className="text-sm font-semibold text-rose"
          role="status"
        >
          {err}
        </p>
      ) : null}
    </div>
  );
}
