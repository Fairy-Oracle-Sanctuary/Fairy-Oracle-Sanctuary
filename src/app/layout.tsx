import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fairy Oracle Sanctuary | 天机阁",
  description: "A developer collective with the spirit of free software at its core and open-source collaboration as its method.",
  icons: {
    icon: "/images/icon_128X128.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
