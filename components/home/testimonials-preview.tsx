import Link from "next/link";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import type { Testimonial } from "@/data/testimonials";

type TestimonialsPreviewProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

export function TestimonialsPreview({ testimonials }: TestimonialsPreviewProps) {
  return (
    <>
      {/* Mobile: swipeable row so three quotes cost one screen, not three */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.slug}
            className="w-[85%] shrink-0 snap-center md:w-auto md:shrink"
          >
            <TestimonialCard testimonial={testimonial} variant="featured" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center sm:mt-7">
        <Link href="/reviews" className="button-secondary">
          Read more reviews
        </Link>
      </div>
    </>
  );
}
