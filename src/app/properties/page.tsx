import { MapPin, Ruler, Filter, Search } from "lucide-react";
import { properties, formatPrice } from "@/data/properties";
import PropertyImage from "@/components/PropertyImage";
import Link from "next/link";

export const metadata = {
  title: "Houses for Rent & Sale in Kigali Rwanda | Properties Kimironko",
  description: "Browse houses for rent, plots for sale, and apartments for lease in Kimironko, Kigali. 100+ properties available across Rwanda. Up to 45% discount on selected properties.",
  keywords: ["houses for rent Kigali", "plots for sale Kimironko", "apartments for lease Rwanda", "office space Kigali", "real estate Kimironko"],
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Property
            </h1>
            <p className="text-xl text-gray-100">
              Explore our curated selection of premium properties across Kigali
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                />
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <select className="flex-1 md:flex-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]">
                <option>All Types</option>
                <option>Land</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Office</option>
              </select>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#0d4f3a] text-white rounded-lg hover:bg-[#1a7a55] transition">
                <Filter size={20} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              All Properties ({properties.length})
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200"
              >
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <PropertyImage type={property.type} alt={property.title} />
                  {property.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-[#0d4f3a] px-3 py-1 rounded-full text-xs font-bold z-10">
                      Featured
                    </div>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded uppercase font-medium">
                      {property.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-2 text-sm">
                    <MapPin size={14} className="mr-1 text-[#0d4f3a] flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3 text-sm">
                    <Ruler size={14} className="mr-1 text-[#0d4f3a]" />
                    <span>{property.size}</span>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-2xl font-bold text-[#0d4f3a]">
                      {formatPrice(property.price)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#0d4f3a] text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
