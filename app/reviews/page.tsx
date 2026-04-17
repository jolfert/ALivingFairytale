import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "@/components/shared/page-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { primaryNavigation } from "@/data/site-shell";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "Kind words from parents, event organizers and families who've booked A Living Fairytale for their princess, superhero, mascot or rental celebrations in Manitoba.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews & Testimonials | A Living Fairytale",
    description:
      "Real reviews from Manitoba families who've booked A Living Fairytale since 2011.",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Header links={primaryNavigation} brandHref="/" />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#fff8fc_0%,#fdf8ff_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] max-h-[60vh] bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,102,187,0.14),transparent_55%),radial-gradient(ellipse_at_80%_12%,rgba(125,100,255,0.1),transparent_50%)]"
        />

        <PageSection id="intro" className="relative" spacing="tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow sparkle-dot">Reviews & testimonials</span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] text-midnight sm:text-5xl lg:text-6xl">
              Repeat bookings are the foundation of our business.
            </h1>
            <p className="section-copy mx-auto mt-6 max-w-2xl text-base sm:text-lg">
              A small collection of notes from parents, event organizers and
              families who've welcomed our princesses, superheroes and mascots
              into their celebrations. For the full list, head to our{" "}
              <Link
                href="https://www.facebook.com/alivingfairytale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Facebook page
              </Link>
              .
            </p>
          </div>
        </PageSection>

        <PageSection id="reviews" className="relative" spacing="tight">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.slug}
                testimonial={testimonial}
                variant={testimonial.featured ? "featured" : "default"}
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(255,234,248,0.6),rgba(252,248,255,0.45))]"
        >
          <div className="glass-panel mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] p-8 text-center sm:p-12">
            <span className="eyebrow sparkle-dot">Ready to book?</span>
            <h2 className="max-w-2xl text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
              Let's make your celebration the next story they tell.
            </h2>
            <p className="section-copy max-w-xl text-base sm:text-lg">
              Send us your party date, the character you have in mind, and a
              few details — a real person will get back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/book" className="button-primary">
                Book a Party
              </Link>
              <Link href="/" className="button-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer links={primaryNavigation} />
    </>
  );
}
