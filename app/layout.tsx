import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Waiting Club",
  description: "Where waiting becomes a ritual. Offline experiences that arrive slowly, meant to be savoured, not scrolled past.",
  keywords: ["waiting club", "offline experiences", "analog", "mail", "slow living", "digital detox"],
  authors: [{ name: "The Waiting Club" }],
  openGraph: {
    title: "The Waiting Club",
    description: "Where waiting becomes a ritual. Offline experiences that arrive slowly, meant to be savoured, not scrolled past.",
    url: "https://thewaitingclub.com",
    siteName: "The Waiting Club",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Waiting Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Waiting Club",
    description: "Where waiting becomes a ritual. Offline experiences that arrive slowly, meant to be savoured, not scrolled past.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}

