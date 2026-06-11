import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/features";
import { Layout } from "@/shared";

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
      <body className="min-h-full flex flex-col">
        <Header />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
