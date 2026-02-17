import { Target, Award, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About Audacieux Real Estate Rwanda | Operating Nationwide from Kimironko",
  description: "Audacieux Real Estate operates across all Rwanda from our Kimironko office. We help clients buy, sell and rent properties in Kigali, Musanze, Rubavu and nationwide. Up to 45% discount.",
  keywords: ["real estate agency Rwanda", "property agent nationwide Rwanda", "Audacieux Real Estate", "Kimironko office", "Rwanda property services"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Audacieux Real Estate
            </h1>
            <p className="text-xl text-gray-100">
              Building Dreams, Securing Future
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to Audacieux Real Estate, Rwanda's premier property agency operating nationwide from our headquarters in Kimironko, Kigali. We are committed to helping Rwandans build their dreams and secure their future through exceptional real estate services across the entire country.
              </p>
              <p>
                With years of experience in the Rwandan real estate market, we've built a reputation 
                for integrity, professionalism, and customer satisfaction across Kigali, Musanze, Rubavu, and all provinces. Our team of dedicated experts 
                works tirelessly to match you with properties that not only meet your needs but exceed 
                your expectations—whether you're in the capital or the countryside.
              </p>
              <p>
                Based in Kimironko but serving all Rwanda, whether you're looking to buy your first home in Kigali, invest in commercial property in Huye, or find 
                the perfect  plot of land in Musanze, Audacieux Real Estate is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0d4f3a] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-[#0d4f3a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every transaction and interaction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#0d4f3a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency are at the heart of our business
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#0d4f3a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority and driving force
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#0d4f3a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace modern solutions to serve you better
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-8 text-center">
              Why Choose Audacieux?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-[#0d4f3a] font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of Kigali's real estate market</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-[#0d4f3a] font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Competitive Prices</h3>
                  <p className="text-gray-600">Up to 45% discount on select properties</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-[#0d4f3a] font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-gray-600">Experienced team dedicated to your success</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-[#0d4f3a] font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">After-Sales Support</h3>
                  <p className="text-gray-600">We're with you even after the transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d4f3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Let us help you build your dreams and secure your future
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
