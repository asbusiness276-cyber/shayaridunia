import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "../lib/shayari";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shayari Dunia | Hindi Shayari, Punjabi Status & English Quotes",
    template: "%s | Shayari Dunia",
  },
  description:
    "Original Hindi shayari, Punjabi status and English quotes for every emotion, with 18 share-ready images and a clear meaning on every page.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shayari Dunia",
    title: "Shayari Dunia | Har Ehsaas, Khoobsurat Alfaaz",
    description:
      "Hindi shayari, Punjabi status and English quotes with images and meanings.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shayari Dunia — Har ehsaas, khoobsurat alfaaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shayari Dunia | Har Ehsaas, Khoobsurat Alfaaz",
    description:
      "Hindi shayari, Punjabi status and English quotes with images and meanings.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mul">
      <body>{children}</body>
    </html>
  );
}
