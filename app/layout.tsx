import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Waiting Club",
  description: "A content-first, editorial-style website",
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

