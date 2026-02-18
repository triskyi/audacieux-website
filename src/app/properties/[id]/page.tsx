
import { notFound } from "next/navigation";
import PropertyImage from "@/components/PropertyImage";
import { formatPrice } from "@/data/properties";
import { MapPin, Ruler, } from "lucide-react";
import Link from "next/link";



async function getProperty(id: string) {
  let url = "";
  let fetchOptions: any = { cache: 'no-store' };
  if (typeof window === "undefined") {
    // On the server, construct absolute URL
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000";
    url = `${protocol}://${host}/api/properties/${id}`;
    // Only add cookies if available and as a string
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const cookieHeader = Array.from(cookieStore).map(([name, cookie]) => `${name}=${cookie.value}`).join('; ');
      if (cookieHeader) fetchOptions.headers = { cookie: cookieHeader };
    } catch {}
  } else {
    // On the client, use relative URL
    url = `/api/properties/${id}`;
  }
  const res = await fetch(url, fetchOptions);
  if (!res.ok) return null;
  return res.json();
}

type PageProps = {
  params: { id: string }
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id || id === 'undefined') notFound();
  const property = await getProperty(id);
  if (!property) notFound();

  // Optionally, fetch related properties here if needed

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
                <div className="relative h-96 bg-gray-100 flex items-center justify-center">
                  {property.image ? (
                    <img src={property.image} alt={property.title} className="object-cover w-full h-full" />
                  ) : (
                    <PropertyImage type={property.type} alt={property.title} />
                  )}
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
                  <span className="text-2xl font-bold text-[#0d4f3a]">
                    {formatPrice(Number(property.price))}
                  </span>
                </div>

                {/* Add more property details here as needed */}
              </div>
            </div>
            {/* ...existing code for sidebar or related properties... */}
          </div>
        </div>
      </section>
    </div>
  );
}
