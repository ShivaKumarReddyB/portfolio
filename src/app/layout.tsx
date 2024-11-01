import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const besterMind = localFont({
  src: "./fonts/BestermindRegular.ttf",
  variable: "--font-besterMind",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shiva Reddy",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${besterMind.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
