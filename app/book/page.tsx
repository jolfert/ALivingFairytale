import type { Metadata } from "next";
import { BookTrustColumn } from "@/components/book/book-trust-column";
import { InquiryFormShell } from "@/components/book/inquiry-form-shell";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { packages } from "@/data/catalog";
import { bookPageContent } from "@/data/book-page";

export const metadata: Metadata = {
  title: "Book a Party",
  description:
    "Submit a structured party inquiry for princess, hero, mascot, or rental celebrations. Requests are emailed to your team when Resend is configured.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Party | A Living Fairytale",
    description:
      "Calm booking flow: trust details and a structured inquiry form for your celebration.",
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
      <Header
        links={bookPageContent.navigation}
        brandHref="/"
        cta={{ label: "Book", href: "/book" }}
      />
      <main id="top" className="relative overflow-x-clip pb-24 pt-12 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] max-h-[55vh] bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,102,187,0.12),transparent_50%),radial-gradient(ellipse_at_85%_10%,rgba(125,100,255,0.1),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16 xl:items-start">
            <BookTrustColumn />
            <InquiryFormShell packageChoices={packageChoices} />
          </div>
        </div>
      </main>
      <Footer links={bookPageContent.navigation} />
    </>
  );
}
