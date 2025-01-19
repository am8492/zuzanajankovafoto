import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fotky od Zuzky",
  description: "Zuzana Jankova - amaterska fotografka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <link
        rel="icon"
        href="/logo.png"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
