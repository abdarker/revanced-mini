import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revanced Mini",
  description: "Minified Revanced Apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={overpass.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
