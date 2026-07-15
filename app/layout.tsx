import type { Metadata } from "next";
import "./globals.css";
import { siteAsset } from "./site-data";

export const metadata: Metadata = {
  title: "LaMeiZi Hot Pot & BBQ | Tampa",
  description:
    "LaMeiZi Hot Pot & BBQ serves all-you-can-eat hotpot, Korean BBQ, starters, drinks, and late-night dining in Tampa, Florida.",
  icons: {
    icon: siteAsset("/images/restaurant/logo-lameizi.png"),
    shortcut: siteAsset("/images/restaurant/logo-lameizi.png"),
  },
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
