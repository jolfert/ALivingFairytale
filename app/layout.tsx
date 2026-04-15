import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Living Fairytale | Magical Children's Party Experiences",
  description:
    "Princess parties, hero adventures, mascots, and memorable birthday magic designed to feel enchanting for kids and effortless for parents.",
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
