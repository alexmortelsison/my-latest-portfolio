import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "./components/Navbar";

const overcamebold = localfont({
  src: "../public/overcame-demo.bold.ttf",
  variable: "--font-overcame-bold",
  weight: "400",
});
const overcameoutline = localfont({
  src: "../public/overcame-demo.outline.ttf",
  variable: "--font-overcame-outline",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Sison",
  description: "Alex Sison Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overcamebold.variable} ${overcameoutline.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1f1f0] relative select-none`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
