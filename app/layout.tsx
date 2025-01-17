import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRECISION MACHINERY",
  description: "PRECISION MACHINERY C² DIVISION",
  icons: {
    icon: '/PM-C2DIV-SOCIAL.png', // Place your favicon.png in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ width: '500px', margin: 'auto', textAlign: 'justify', textJustify: 'inter-word' }}
      >        {children}
      </body>
    </html>
  );
}
