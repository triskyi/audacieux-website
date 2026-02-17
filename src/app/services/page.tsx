import Services from "@/components/Services";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Services Kimironko Kigali | House Selling & Renting",
  description: "House selling, small house renting, house rental & leasing, plot selling, office leasing, apartment leasing in Kimironko, Kigali, Rwanda. Professional real estate services.",
  keywords: ["house selling Kigali", "house rental Kimironko", "plot selling Rwanda", "office leasing Kigali", "apartment leasing Kimironko"],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-100">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0d4f3a] text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We listen to your needs and understand your requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0d4f3a] text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Search</h3>
                <p className="text-gray-600">
                  We find the perfect properties that match your criteria
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0d4f3a] text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Close Deal</h3>
                <p className="text-gray-600">
                  We handle all paperwork and ensure a smooth transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0d4f3a] mb-4">
            Need Help Finding the Right Property?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to assist you
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
