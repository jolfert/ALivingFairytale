import type { Metadata } from "next";
import { ConfettiBursts } from "@/components/magic/confetti-bursts";
import { BottomNav } from "@/components/site/bottom-nav";
import { siteShellContent } from "@/data/site-shell";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default:
      "A Living Fairytale | Magical Children's Party Experiences",
    template: "%s | A Living Fairytale",
  },
  description:
    "Princess parties, superhero adventures, mascots, and memorable birthday magic designed to feel enchanting for kids and effortless for parents.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A Living Fairytale",
    images: [
      {
        url: "/media/princess/princess-group-gallery.jpg",
        width: 1438,
        height: 960,
        alt: "Three princess performers with a child on a grand staircase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/media/princess/princess-group-gallery.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="pb-[calc(3.6rem+env(safe-area-inset-bottom))] md:pb-0">
        {children}
        <BottomNav />
        <ConfettiBursts />
      </body>
    </html>
  );
}
