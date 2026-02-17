import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audacieux Real Estate | Buy & Rent Houses in Kimironko Kigali Rwanda",
  description: "Buy, sell and rent houses in Kimironko, Kigali. Audacieux Real Estate offers house selling, apartment leasing, office leasing and plot selling in Rwanda. Up to 45% discount.",
  keywords: ["real estate Kigali", "house for rent Kimironko", "plot for sale Kigali", "apartment leasing Rwanda", "office space Kimironko", "land for sale Kigali", "houses for rent Kigali Rwanda"],
  authors: [{ name: "Audacieux Real Estate" }],
  openGraph: {
    title: "Audacieux Real Estate - Building Dreams, Securing Future",
    description: "Professional real estate services in Kimironko, Kigali, Rwanda. House selling, renting, plot selling, apartment and office leasing.",
    url: "https://audacieux-realestate.com",
    siteName: "Audacieux Real Estate",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audacieux Real Estate Kimironko Kigali",
    description: "Buy, sell and rent houses in Kigali, Rwanda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Audacieux Real Estate",
    image: "https://audacieux-realestate.com/logo.png",
    description: "Building Dreams, Securing Future. Professional real estate services in Kimironko, Kigali, Rwanda.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kimironko",
      addressLocality: "Kimironko",
      addressRegion: "Kigali",
      addressCountry: "Rwanda"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.9441,
      longitude: 30.1239
    },
    telephone: "+250789208631",
    email: "audacieuxniyibikoze@gmail.com",
    url: "https://audacieux-realestate.com",
    priceRange: "RWF 35,000,000 - RWF 120,000,000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00"
    },
    sameAs: [
      "https://facebook.com/audacieux",
      "https://instagram.com/audacieux_niyibikoze",
      "https://twitter.com/audacieux",
      "https://linkedin.com/company/audacieux"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
