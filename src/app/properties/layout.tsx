import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houses for Rent & Sale in Kigali Rwanda | Properties Kimironko",
  description: "Browse houses for rent, plots for sale, and apartments for lease in Kimironko, Kigali. 100+ properties available across Rwanda. Up to 45% discount on selected properties.",
  keywords: ["houses for rent Kigali", "plots for sale Kimironko", "apartments for lease Rwanda", "office space Kigali", "real estate Kimironko"],
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
