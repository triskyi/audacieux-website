import { Metadata } from "next";
import { WithContext, RealEstateAgent, FAQPage, Question } from "schema-dts";

// Base SEO Configuration
export const siteConfig = {
  name: "Audacieux Real Estate",
  description: "Rwanda's premier real estate agency. Houses, land, apartments & offices for sale and rent across Kigali, Musanze, Rubavu, and all Rwanda.",
  url: "https://audacieux-realestate.com",
  ogImage: "https://audacieux-realestate.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/audacieux_niyibikoze",
    instagram: "https://instagram.com/audacieux_niyibikoze",
  },
};

// Global Keywords for Rwanda Real Estate
export const globalKeywords = [
  "real estate Rwanda",
  "houses for sale Kigali",
  "land for sale Rwanda",
  "property Rwanda",
  "apartments Kigali",
  "office space Rwanda",
  "houses for rent Kigali",
  "plot for sale Rwanda",
  "real estate Kigali",
  "property investment Rwanda",
  "Kimironko real estate",
  "Kacyiru property",
  "Remera apartments",
  "Nyarutarama houses",
  "Rwanda property agency",
];

// Generate default metadata for pages
export function generateSEO(
  title: string,
  description: string,
  keywords?: string[],
  canonical?: string
): Metadata {
  const fullTitle = `${title} | Audacieux Real Estate`;
  const allKeywords = [...globalKeywords, ...(keywords || [])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "Audacieux Real Estate" }],
    creator: "Audacieux Real Estate",
    publisher: "Audacieux Real Estate",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_RW",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: "@audacieux_niyibikoze",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate RealEstateAgent Schema
export function generateRealEstateAgentSchema(): WithContext<RealEstateAgent> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Audacieux Real Estate",
    description: "Rwanda's premier real estate agency offering houses, land, apartments, and office spaces across all of Rwanda including Kigali, Musanze, and Rubavu.",
    image: "https://audacieux-realestate.com/logo.jpg",
    telephone: "+250789208631",
    email: "audacieuxniyibikoze@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kimironko",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.9536,
      longitude: 30.1188,
    },
    url: "https://audacieux-realestate.com",
    priceRange: "35,000,000 RWF - 200,000,000 RWF",
    areaServed: [
      {
        "@type": "City",
        name: "Kigali",
      },
      {
        "@type": "City",
        name: "Musanze",
      },
      {
        "@type": "City",
        name: "Rubavu",
      },
      {
        "@type": "Country",
        name: "Rwanda",
      },
    ],
    sameAs: [
      "https://instagram.com/audacieux_niyibikoze",
      "https://wa.me/250789208631",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Selling",
            description: "Professional house selling services across Rwanda",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Land Sales",
            description: "Prime land plots for sale in Kigali and throughout Rwanda",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental & Leasing",
            description: "Houses, apartments, and office spaces for rent",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Investment Consulting",
            description: "Expert guidance on real estate investment in Rwanda",
          },
        },
      ],
    },
  };
}

// Generate FAQ Schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): WithContext<FAQPage> {
  const mainEntity: Question[] = faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

// Property-specific keywords generator
export function getLocationKeywords(location: string): string[] {
  return [
    `real estate ${location}`,
    `houses for sale ${location}`,
    `land for sale ${location}`,
    `property ${location}`,
    `apartments ${location}`,
    `rent ${location}`,
    `${location} Rwanda`,
  ];
}

// Blog article metadata helper
export function generateArticleSEO(
  title: string,
  description: string,
  slug: string,
  keywords: string[],
  publishedTime: string,
  modifiedTime?: string
): Metadata {
  const canonical = `${siteConfig.url}/blog/${slug}`;
  
  return {
    ...generateSEO(title, description, keywords, canonical),
    openGraph: {
      type: "article",
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: ["Audacieux Real Estate"],
      section: "Real Estate",
      tags: keywords,
    },
  };
}
