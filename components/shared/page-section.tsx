type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: "tight" | "default" | "wide";
};

const spacingClasses = {
  tight: "py-9 sm:py-14",
  default: "py-12 sm:py-20",
  wide: "py-14 sm:py-28",
} as const;

export function PageSection({
  id,
  children,
  className,
  spacing = "default",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${spacingClasses[spacing]}${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}
