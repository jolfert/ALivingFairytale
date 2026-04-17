"use client";

import { useState } from "react";
import { InquiryForm } from "@/components/book/inquiry-form";
import type { PackageChoice } from "@/components/book/inquiry-form";
import type { ResolvedCharacter } from "@/data/types";

type InquiryFormShellProps = {
  packageChoices: ReadonlyArray<PackageChoice>;
  characterChoices: ReadonlyArray<ResolvedCharacter>;
};

export function InquiryFormShell({
  packageChoices,
  characterChoices,
}: InquiryFormShellProps) {
  const [instance, setInstance] = useState(0);

  return (
    <InquiryForm
      key={instance}
      packageChoices={packageChoices}
      characterChoices={characterChoices}
      onRequestNew={() => setInstance((n) => n + 1)}
    />
  );
}
