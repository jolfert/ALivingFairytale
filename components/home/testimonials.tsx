type TestimonialItem = {
  title: string;
  description: string;
  note: string;
};

type TestimonialsProps = {
  items: ReadonlyArray<TestimonialItem>;
};

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="glass-panel rounded-[2rem] p-6">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-copy-soft">
            {item.note}
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-midnight">
            {item.title}
          </h3>
          <p className="section-copy mt-4 text-sm">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
