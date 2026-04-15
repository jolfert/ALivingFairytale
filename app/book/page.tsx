import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { bookPageContent } from "@/data/book-page";

export const metadata: Metadata = {
  title: "Book a Party | A Living Fairytale",
  description:
    "Start your party booking request with A Living Fairytale—princess, hero, mascot, and rental experiences under one premium brand.",
};

export default function BookPage() {
  return (
    <>
      <Header
        links={bookPageContent.navigation}
        brandHref="/"
        cta={{ label: "Book", href: "/book" }}
      />
      <main id="top" className="relative overflow-x-clip pb-24 pt-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[2.25rem] p-8 sm:p-10">
            <span className="eyebrow sparkle-dot">{bookPageContent.eyebrow}</span>
            <h1 className="mt-6 text-4xl font-semibold text-midnight sm:text-5xl">
              {bookPageContent.title}
            </h1>
            <p className="section-copy mt-5 text-base sm:text-lg">
              {bookPageContent.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={bookPageContent.primaryCta.href} className="button-primary">
                {bookPageContent.primaryCta.label}
              </a>
              <a href={bookPageContent.secondaryCta.href} className="button-secondary">
                {bookPageContent.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer links={bookPageContent.navigation} />
    </>
  );
}
