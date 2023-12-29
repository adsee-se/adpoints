import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/union/header";
import "react-responsive-modal/styles.css";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "adpoints",
  description: "adpoints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
