"use client";

import { useState } from "react";
import { InquiryForm } from "@/components/book/inquiry-form";
import type { PackageChoice } from "@/components/book/inquiry-form";

type InquiryFormShellProps = {
  packageChoices: ReadonlyArray<PackageChoice>;
};

export function InquiryFormShell({ packageChoices }: InquiryFormShellProps) {
  const [instance, setInstance] = useState(0);

  return (
    <InquiryForm
      key={instance}
      packageChoices={packageChoices}
      onRequestNew={() => setInstance((n) => n + 1)}
    />
  );
}
