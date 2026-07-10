type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: "tight" | "default" | "wide";
};

const spacingClasses = {
  tight: "py-6 sm:py-10",
  default: "py-8 sm:py-14",
  wide: "py-10 sm:py-18",
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
