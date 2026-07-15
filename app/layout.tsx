import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaMeiZi Hot Pot & BBQ | Tampa",
  description:
    "LaMeiZi Hot Pot & BBQ serves all-you-can-eat hotpot, Korean BBQ, starters, drinks, and late-night dining in Tampa, Florida.",
  icons: {
    icon: "/images/restaurant/logo-lameizi.png",
    shortcut: "/images/restaurant/logo-lameizi.png",
  },
};

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
