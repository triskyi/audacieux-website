import { notFound } from "next/navigation";
import { properties, formatPrice } from "@/data/properties";
import PropertyImage from "@/components/PropertyImage";
import { MapPin, Ruler, Phone, Mail, Share2, Heart, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

  const relatedProperties = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0d4f3a]">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-[#0d4f3a]">Properties</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                <div className="relative h-96">
                  <PropertyImage type={property.type} alt={property.title} />
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-[#0d4f3a] px-4 py-2 rounded-full text-sm font-bold z-10">
                      Featured Property
                    </div>
                  )}
                </div>
              </div>

              {/* Property Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#0d4f3a] text-white text-sm rounded-full uppercase font-medium">
                    {property.type}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-[#0d4f3a]" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler size={20} className="text-[#0d4f3a]" />
                    <span>{property.size}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#0d4f3a]">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Up to 45% discount available</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {property.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This premium {property.type} in {property.location} offers an excellent opportunity 
                    for investment or personal use. Located in one of Kigali's most sought-after areas, 
                    this property combines accessibility with modern amenities. The {property.size} space 
                    provides ample room for development or immediate occupancy.
                  </p>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Prime location in {property.location.split(",")[0]}
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Total area: {property.size}
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Ready for immediate development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Clear ownership documents
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Access to main roads
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#0d4f3a] rounded-full"></span>
                      Utilities available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Interested in this property?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us for more information or to schedule a viewing
                </p>

                <div className="space-y-4 mb-6">
                  <a
                    href="tel:+250789208631"
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#0d4f3a] hover:bg-gray-50 transition"
                  >
                    <Phone className="text-[#0d4f3a]" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Call Us</p>
                      <p className="font-medium text-gray-900">+250 789 208 631</p>
                    </div>
                  </a>

                  <a
                    href="mailto:audacieuxniyibikoze@gmail.com"
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#0d4f3a] hover:bg-gray-50 transition"
                  >
                    <Mail className="text-[#0d4f3a]" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">Email Us</p>
                      <p className="font-medium text-gray-900 text-sm">audacieuxniyibikoze@gmail.com</p>
                    </div>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-yellow-400 text-[#0d4f3a] px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-md mb-3"
                >
                  Schedule Viewing
                </Link>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Heart size={18} />
                    <span className="text-sm">Save</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Share2 size={18} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>

              {/* Discount Badge */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-2xl font-bold text-[#0d4f3a] mb-2">
                  Special Offer!
                </h4>
                <p className="text-[#0d4f3a] font-medium">
                  Get up to 45% discount on this property
                </p>
              </div>
            </div>
          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Similar Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProperty) => (
                  <Link
                    key={relatedProperty.id}
                    href={`/properties/${relatedProperty.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48">
                      <PropertyImage type={relatedProperty.type} alt={relatedProperty.title} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-1">
                        {relatedProperty.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                        <MapPin size={14} />
                        {relatedProperty.location}
                      </p>
                      <p className="text-xl font-bold text-[#0d4f3a]">
                        {formatPrice(relatedProperty.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
