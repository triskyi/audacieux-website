import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";
import { generateSEO, generateRealEstateAgentSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEO(
  "Audacieux Real Estate - Houses, Land & Property Across Rwanda",
  "Rwanda's premier real estate agency. Houses, land, apartments & offices for sale and rent across all Rwanda including Kigali, Musanze, Rubavu. Based in Kimironko. Up to 45% discount.",
  [
    "real estate Rwanda",
    "houses for sale Kigali",
    "land for sale Rwanda",
    "property Rwanda nationwide",
    "apartments Kigali",
    "office space Rwanda",
    "houses for rent Kigali",
    "Musanze real estate",
    "Rubavu property",
    "Kimironko office",
    "Rwanda property agency",
  ]
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data with proper typing (nationwide Rwanda)
  const jsonLd = generateRealEstateAgentSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon using logo.png */}
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F8DN2PH6HY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F8DN2PH6HY');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
