import type { Metadata } from "next";
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
    "Princess parties, hero adventures, mascots, and memorable birthday magic designed to feel enchanting for kids and effortless for parents.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A Living Fairytale",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body>{children}</body>
    </html>
  );
}
