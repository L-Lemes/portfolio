import type { Metadata } from "next";

import { poppins } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "LS dev blog",
  description: "Portfolio de desenvolvedor idealizado e desenvolvido por Lucas Lemes Borges",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#fffdfa]`}>{children}</body>
    </html>
  )
}