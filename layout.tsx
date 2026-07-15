import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "North Point Media Group",
  description: "OOH, experiential and retail media solutions across the United States and Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
