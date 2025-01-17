import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    icon: [
      {
        url: '/PM-C2DIV-SOCIAL.png',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
  },
  openGraph: {
    title: "PRECISION MACHINERY",
    description: "PRECISION MACHINERY C² DIVISION",
    images: '/PM-C2DIV-SOCIAL.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/PM-C2DIV-SOCIAL.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ width: '500px', margin: 'auto', textAlign: 'justify', textJustify: 'inter-word' }}
      >
        {children}
      </body>
    </html>
  );
}
