"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import Head from "next/head";

const myFont = localFont({ src: "../public/avenir.otf" });

export default function RootLayout({ children }) {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Alexandre Fontani</title>
      </Head>
      <body className={myFont.className}>
        <main>{children}</main>
        <script async src="/DrawSVGPlugin.min.js"></script>
      </body>
    </html>
  );
}
