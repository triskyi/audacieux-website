import { MapPin, Home, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { properties, formatPrice } from "@/data/properties";
import PropertyImage from "@/components/PropertyImage";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Real Estate Kimironko Kigali | Houses for Rent & Sale in Kimironko",
  description: "Find the best houses for rent, plots for sale, and apartments in Kimironko, Kigali. Audacieux Real Estate offers premium properties in Kimironko with up to 45% discount.",
  keywords: ["Kimironko real estate", "houses for rent Kimironko", "plots for sale Kimironko", "apartments Kimironko Kigali"],
};

export default function KimironkoPage() {
  const kimironkoProperties = properties.filter(p => 
    p.location.toLowerCase().includes("kimironko")
  );

  const faqs = [
    {
      question: "How much is rent in Kimironko, Kigali?",
      answer: "Rent in Kimironko ranges from 150,000 RWF to 600,000 RWF per month depending on the size and amenities. Small houses start at 150,000 RWF while larger villas can go up to 1,000,000 RWF."
    },
    {
      question: "Is Kimironko a good area to live in Kigali?",
      answer: "Yes, Kimironko is one of the most sought-after residential areas in Kigali. It offers excellent infrastructure, proximity to schools and shopping centers, good security, and convenient access to the city center."
    },
    {
      question: "How much does land cost in Kimironko?",
      answer: "Land prices in Kimironko range from 70,000 RWF to 120,000 RWF per square meter depending on the exact location and proximity to main roads. A typical 500m² plot costs between 35-60 million RWF."
    },
    {
      question: "What amenities are available in Kimironko?",
      answer: "Kimironko has excellent amenities including supermarkets, Kimironko Market, schools, hospitals, banks, restaurants, and public transportation. It's well-connected to other parts of Kigali."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">
                Real Estate in Kimironko, Kigali
              </h1>
            </div>
            <p className="text-xl text-gray-100 mb-6">
              Discover premium houses, apartments, and plots in one of Kigali's most prestigious neighborhoods
            </p>
            <p className="text-lg text-yellow-300">
              ✨ Up to 45% Discount on Selected Properties
            </p>
          </div>
        </div>
      </section>

      {/* About Kimironko */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">
              Why Choose Kimironko?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kimironko is one of Kigali's most desirable residential and commercial areas, located in the Gasabo district. 
              Known for its vibrant market, excellent infrastructure, and strategic location, Kimironko has become a top 
              choice for families, professionals, and investors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Based on our experience helping over 50 clients in Kimironko, we've seen property values steadily increase 
              due to ongoing development and high demand. Whether you're looking for a family home, investment property, 
              or commercial space, Kimironko offers exceptional opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Home className="text-[#0d4f3a] mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Prime Location</h3>
                <p className="text-gray-600 text-sm">
                  Central location with easy access to city center and major roads
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="text-[#0d4f3a] mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Growing Value</h3>
                <p className="text-gray-600 text-sm">
                  Property values appreciate consistently due to high demand
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="text-[#0d4f3a] mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Great Community</h3>
                <p className="text-gray-600 text-sm">
                  Safe, family-friendly neighborhood with diverse amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0d4f3a] mb-8 text-center">
            Available Properties in Kimironko
          </h2>
          
          {kimironkoProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {kimironkoProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <PropertyImage type={property.type} alt={property.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">{property.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                    <p className="text-2xl font-bold text-[#0d4f3a]">
                      {formatPrice(property.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mb-8">More Kimironko properties coming soon!</p>
          )}

          <div className="text-center">
            <Link
              href="/properties"
              className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Common Questions About Kimironko Real Estate" />

      {/* CTA */}
      <section className="py-16 bg-[#0d4f3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Property in Kimironko?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Our local experts are ready to help you find your dream property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              Contact Us
            </Link>
            <a
              href="tel:+250789208631"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0d4f3a] transition"
            >
              Call: +250 789 208 631
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
