import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMIT UI/UX Designer Portfolio",
  description:
    "Portfolio specializing in user-centered design, intuitive interfaces, and meaningful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
