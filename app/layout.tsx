import React from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/union/header";
import "react-responsive-modal/styles.css";
import { NextAuthProvider } from "./providers/NextAuth";
import { getServerSession } from "next-auth";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "adpoints",
  description: "adpoints",
};

export default async function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <NextAuthProvider session={session}>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
