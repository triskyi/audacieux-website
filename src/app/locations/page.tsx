import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Locations in Kigali Rwanda | Top Neighborhoods",
  description: "Explore real estate opportunities across Kigali's top locations: Kimironko, Kacyiru, Nyarutarama, Gisozi, Remera, and more. Find houses, apartments, and plots for sale.",
  keywords: ["Kigali locations", "real estate neighborhoods Kigali", "where to buy house Kigali", "best areas Kigali Rwanda"],
};

export default function LocationsPage() {
  const locations = [
    {
      name: "Kimironko",
      slug: "kimironko",
      description: "Vibrant area with excellent market, schools, and amenities. Popular for both residential and commercial properties.",
      properties: "15+ properties",
      priceRange: "35M - 85M RWF"
    },
    {
      name: "Kacyiru",
      slug: "kacyiru",
      description: "Upscale neighborhood near government offices and embassies. Known for modern villas and luxury apartments.",
      properties: "Coming soon",
      priceRange: "60M - 150M RWF"
    },
    {
      name: "Nyarutarama",
      slug: "nyarutarama",
      description: "Premium residential area with golf course access. Attracts diplomats and expatriates.",
      properties: "Coming soon",
      priceRange: "100M - 300M RWF"
    },
    {
      name: "Gisozi",
      slug: "gisozi",
      description: "Growing neighborhood with affordable housing options and good infrastructure development.",
      properties: "Coming soon",
      priceRange: "30M - 70M RWF"
    },
    {
      name: "Remera",
      slug: "remera",
      description: "Commercial hub with modern apartments and office spaces. Excellent connectivity.",
      properties: "Coming soon",
      priceRange: "35M - 90M RWF"
    },
    {
      name: "Gacuriro",
      slug: "gacuriro",
      description: "Upscale area with scenic views and peaceful environment. Perfect for families.",
      properties: "Coming soon",
      priceRange: "55M - 120M RWF"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Kigali's Best Locations
            </h1>
            <p className="text-xl text-gray-100">
              Find your perfect property in Kigali's most desirable neighborhoods
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div
                  key={location.slug}
                  className={
                    "bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0d4f3a] hover:shadow-xl transition-all opacity-75 cursor-default"
                  }
                >
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-[#0d4f3a] flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                      <p className="text-sm text-gray-500">{location.properties}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {location.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Price Range</p>
                    <p className="font-bold text-[#0d4f3a]">{location.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">More locations coming soon!</p>
            <Link
              href="/contact"
              className="inline-block bg-[#0d4f3a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a7a55] transition"
            >
              Tell Us Your Preferred Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
