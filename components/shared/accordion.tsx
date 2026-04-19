"use client";

import { useState, useId, type ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="soft-panel overflow-hidden rounded-[1.25rem]">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/60 sm:p-6"
      >
        <span className="text-base font-semibold text-midnight sm:text-lg">
          {title}
        </span>
        <span
          aria-hidden
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-white/80 text-sm font-bold text-midnight transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="border-t border-line px-5 pb-6 pt-4 text-sm leading-relaxed text-copy-soft sm:px-6 sm:text-base"
      >
        {children}
      </div>
    </div>
  );
}

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>{children}</div>
  );
}
