import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: "default" | "featured";
};

export function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  const initial = testimonial.author.charAt(0).toUpperCase();

  return (
    <figure
      className={`soft-panel relative flex h-full flex-col rounded-[1.5rem] p-6 sm:p-7 ${
        variant === "featured"
          ? "border-[rgba(245,102,187,0.22)]"
          : ""
      }`}
    >
      <div
        aria-hidden
        className="absolute left-6 top-4 font-display text-6xl leading-none text-rose/25 sm:left-7 sm:text-7xl"
      >
        &ldquo;
      </div>
      <blockquote className="relative pt-4 text-sm leading-relaxed text-midnight sm:text-base">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <div
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-lg font-black text-white shadow-soft"
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-bold text-midnight">{testimonial.author}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-copy-soft">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
