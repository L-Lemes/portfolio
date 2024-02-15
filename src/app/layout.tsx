import type { Metadata } from "next";

import { hubballi } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "",
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
      <body className={hubballi.className}>{children}</body>
    </html>
  )
}