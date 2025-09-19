import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Santos | Fullstack Developer",
  description:
    "Portfólio de Guilherme Santos - Desenvolvedor Fullstack especializado em React, Next.js, Node.js e soluções escaláveis.",
  keywords: [
    "Guilherme Santos",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfólio",
  ],
  authors: [{ name: "Guilherme Santos" }],
  creator: "Guilherme Santos",
  publisher: "Guilherme Santos",
  openGraph: {
    title: "Guilherme Santos | Fullstack Developer",
    description:
      "Portfólio de Guilherme Santos - Desenvolvedor Fullstack especializado em React, Next.js, Node.js e soluções escaláveis.",
    url: "https://guilhermesantos.surge.sh",
    siteName: "Guilherme Santos",
    images: [
      {
        url: "https://guilhermesantos.surge.sh/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Guilherme Santos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Santos | Fullstack Developer",
    description:
      "Portfólio de Guilherme Santos - Desenvolvedor Fullstack especializado em React, Next.js, Node.js e soluções escaláveis.",
    images: ["https://guilhermesantos.surge.sh/preview.png"],
    creator: "@guifsantos",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
