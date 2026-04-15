type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function PageSection({ id, children, className }: PageSectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}
