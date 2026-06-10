import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/features";

export const metadata: Metadata = {
  title: "노벨피디아",
  description: "노벨피디아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full antialiased`}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
