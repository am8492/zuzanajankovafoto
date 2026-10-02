import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://zuzanajankova-foto.cz";
const siteName = "Zuzana Janková | Rodinná fotografka";
const metaDescription =
  "Rodinná fotografka Zuzana Janková zachycuje přirozené, emotivní okamžiky rodin, párů a portrétů v Brně, Přerově a okolí.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Zuzana Janková",
  },
  description: metaDescription,
  keywords: [
    "rodinná fotografka",
    "fotografka Brno",
    "portrétní fotografie",
    "rodinné focení",
    "párové focení",
    "focení v Brně",
    "Zuzana Janková",
  ],
  alternates: {
    canonical: "/",
    languages: {
      cs: "/",
    },
  },
  openGraph: {
    title: siteName,
    description: metaDescription,
    url: siteUrl,
    siteName,
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zuzana Janková - Rodinná fotografka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: metaDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zuzana Janková",
  image: `${siteUrl}/logo.png`,
  description: metaDescription,
  url: siteUrl,
  telephone: "+420000000000",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
    addressLocality: "Brno",
  },
  areaServed: ["Brno", "Přerov", "Česká republika"],
  priceRange: "€€",
  sameAs: [
    "https://www.facebook.com/Zuzana.jankova.foto",
    "https://www.instagram.com/zuzana.jankova.foto",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        <meta name="theme-color" content="#f8f1ee" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="canonical" href={siteUrl} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GHZJ9CQP3S"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHZJ9CQP3S');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

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
