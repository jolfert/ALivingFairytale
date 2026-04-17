import Link from "next/link";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import type { Testimonial } from "@/data/testimonials";

type TestimonialsPreviewProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

export function TestimonialsPreview({ testimonials }: TestimonialsPreviewProps) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.slug}
            testimonial={testimonial}
            variant="featured"
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/reviews" className="button-secondary">
          Read more reviews
        </Link>
      </div>
    </>
  );
}
