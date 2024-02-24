import type { Metadata } from "next";

import { poppins } from "@/app/fonts";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "LS dev blog",
  description: "Portfolio de desenvolvedor idealizado e desenvolvido por Lucas Lemes Borges",
  icons: {
    icon: '/icon.png'
  }
};

export default function ProjectLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}