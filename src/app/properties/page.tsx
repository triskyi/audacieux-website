"use client";

import { MapPin, Ruler, Filter, Search } from "lucide-react";
import { properties, formatPrice } from "@/data/properties";
import PropertyImage from "@/components/PropertyImage";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [sortBy, setSortBy] = useState("featured");

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = properties.filter((property) => {
      // Search filter
      const matchesSearch = 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Type filter
      const matchesType = selectedType === "All Types" || property.type === selectedType;
      
      return matchesSearch && matchesType;
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered = [...filtered].reverse();
        break;
      default: // featured
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, selectedType, sortBy]);

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a] text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="flex-1 md:flex-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a] text-gray-900"
              >
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
              {filteredProperties.length === 0 ? "No Properties Found" : `All Properties (${filteredProperties.length})`}
            </h2>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4f3a] text-gray-900"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All Types");
                }}
                className="px-6 py-3 bg-[#0d4f3a] text-white rounded-lg hover:bg-[#1a7a55] transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
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
          )}
        </div>
      </section>
    </div>
  );
}
