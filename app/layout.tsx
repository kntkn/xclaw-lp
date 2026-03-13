import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIチームレンタル | AIエージェントチームで即日POC",
  description:
    "採用も研修も不要。専門知識と個性を持つAIエージェントチームを、御社のプロジェクトにそのまま投入します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
