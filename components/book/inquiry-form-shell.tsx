"use client";

import { useState } from "react";
import { InquiryForm } from "@/components/book/inquiry-form";
import type { PackageRecord, ResolvedCharacter } from "@/data/types";

type InquiryFormShellProps = {
  packages: ReadonlyArray<PackageRecord>;
  characterChoices: ReadonlyArray<ResolvedCharacter>;
};

export function InquiryFormShell({
  packages,
  characterChoices,
}: InquiryFormShellProps) {
  const [instance, setInstance] = useState(0);

  return (
    <InquiryForm
      key={instance}
      packages={packages}
      characterChoices={characterChoices}
      onRequestNew={() => setInstance((n) => n + 1)}
    />
  );
}
