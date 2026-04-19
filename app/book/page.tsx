import type { Metadata } from "next";
import { BookTrustColumn } from "@/components/book/book-trust-column";
import { InquiryFormShell } from "@/components/book/inquiry-form-shell";
import { Accordion, AccordionItem } from "@/components/shared/accordion";
import { PageSection } from "@/components/shared/page-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { characters, packages } from "@/data/catalog";
import { bookPageContent } from "@/data/book-page";
import { bookingFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Book a Party",
  description:
    "Book a princess, superhero, mascot or rental party. Send your date and details — a real person replies within a day.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Party | A Living Fairytale",
    description:
      "Send your party date and details. A real person replies within a day.",
    url: "/book",
  },
};

export default function BookPage() {
  const packageChoices = packages.map((pkg) => ({
    slug: pkg.slug,
    name: pkg.name,
    duration: pkg.duration,
  }));

  return (
    <>
      <Header brandHref="/" cta={{ label: "Book", href: "/book" }} />
      <main
        id="top"
        className="relative overflow-x-clip pb-20 pt-10 sm:pt-14 lg:pt-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] max-h-[60vh] bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,102,187,0.12),transparent_52%),radial-gradient(ellipse_at_85%_10%,rgba(125,100,255,0.1),transparent_48%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16 xl:items-start">
            <BookTrustColumn />
            <InquiryFormShell
              packageChoices={packageChoices}
              characterChoices={characters}
            />
          </div>
        </div>

        {/* FAQs */}
        <PageSection id="faqs" className="relative" spacing="default">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="eyebrow-plain">FAQ</span>
              <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">
                Common questions.
              </h2>
            </div>
            <div className="mt-8">
              <Accordion>
                {bookingFaqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    title={faq.question}
                    defaultOpen={index === 0}
                  >
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer links={bookPageContent.navigation} />
    </>
  );
}
