import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Audacieux Real Estate Kimironko Kigali | +250 789 208 631",
  description: "Contact Audacieux Real Estate in Kimironko, Kigali. Call +250 789 208 631 or email audacieuxniyibikoze@gmail.com. Visit our office in Kimironko for real estate services.",
  keywords: ["contact real estate Kigali", "Audacieux Real Estate Kimironko", "property agent contact Rwanda"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              We're here to help you find your dream property
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0d4f3a] mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-xl font-semibold mb-2">Kimironko, Kigali</p>
                <p>Map integration coming soon</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <strong>Address:</strong> Kimironko, Kigali, Rwanda
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Business Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
