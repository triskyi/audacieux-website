"use client";
import { MapPin, Ruler } from "lucide-react";
import { useEffect, useState } from "react";
import { formatPrice } from "@/data/properties";
import PropertyImage from "./PropertyImage";
import Link from "next/link";

export default function PropertyShowcase() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data.slice(0, 6)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0d4f3a]">
          Featured Properties
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our carefully selected properties across Kigali with competitive prices and great locations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 animate-pulse"
                >
                  <div className="relative h-56 bg-gray-200 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full" />
                    <div className="absolute top-3 right-3 bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold z-10 w-24 h-6" />
                  </div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
                    <div className="flex items-center mb-3">
                      <div className="h-4 w-4 bg-gray-200 rounded mr-2" />
                      <div className="h-4 bg-gray-200 rounded w-1/3" />
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="h-4 w-4 bg-gray-200 rounded mr-2" />
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-12 mb-1" />
                        <div className="h-6 bg-gray-200 rounded w-20" />
                      </div>
                      <div className="bg-gray-300 px-4 py-2 rounded-lg w-24 h-10" />
                    </div>
                  </div>
                </div>
              ))
            : properties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
                    {property.image ? (
                      <img src={property.image} alt={property.title} className="object-cover w-full h-full" />
                    ) : (
                      <PropertyImage type={property.type} alt={property.title} />
                    )}
                    <div className="absolute top-3 right-3 bg-yellow-400 text-[#0d4f3a] px-3 py-1 rounded-full text-sm font-bold z-10">
                      Up to 45% Off
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1 text-[#0d4f3a]" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Ruler size={16} className="mr-1 text-[#0d4f3a]" />
                      <span className="text-sm">{property.size}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-[#0d4f3a]">
                          {formatPrice(property.price)}
                        </p>
                      </div>
                      <span className="bg-[#0d4f3a] text-white px-4 py-2 rounded-lg hover:bg-[#1a7a55] transition-colors font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
