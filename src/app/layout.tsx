import type { Metadata } from "next";

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
  return children;
}
