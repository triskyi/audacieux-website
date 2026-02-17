import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Rent Costs in Kigali 2026: Complete Pricing Guide | Audacieux Real Estate",
  description: "How much is rent in Kigali? Complete 2026 guide to rental prices in Kimironko, Kacyiru, Remera & all areas. Houses, apartments, offices. Updated monthly prices.",
  keywords: [
    "rent costs Kigali",
    "how much is rent in Kigali",
    "apartment rent Kimironko",
    "house rental prices Kigali 2026",
    "monthly rent Kigali",
    "cheap rent Kigali",
    "office rent Kigali",
    "rental market Rwanda"
  ],
  openGraph: {
    title: "Rent Costs in Kigali 2026: Complete Pricing Guide",
    description: "Find out exactly how much rent costs in every Kigali neighborhood. From studios to villas, offices to apartments.",
    type: "article",
  },
};

export default function RentCostsKigali2026() {
  const faqs = [
    {
      question: "How much is average rent in Kigali 2026?",
      answer: "Average monthly rent in Kigali varies by property type: Studios: 150,000-250,000 RWF | 1-bedroom: 250,000-400,000 RWF | 2-bedroom: 400,000-700,000 RWF | 3-bedroom houses: 600,000-1,200,000 RWF. Kimironko and Remera offer best value."
    },
    {
      question: "What is the cheapest area to rent in Kigali?",
      answer: "The most affordable rental areas are: Gisozi (studios from 120,000 RWF/month), Kabuga (from 100,000 RWF/month), Batsinda (from 150,000 RWF/month), and outer Kimironko (from 150,000 RWF/month). These areas have good public transport links."
    },
    {
      question: "Do landlords in Kigali require deposits?",
      answer: "Yes, standard practice is: 1 month rent as security deposit (refundable), 1 month advance rent, and sometimes 1 month agent fee. Plan to have 2-3 months rent ready when moving in. Audacieux clients often get reduced agent fees."
    },
    {
      question: "Are utilities included in rent in Kigali?",
      answer: "No, utilities are typically separate. Expect to pay: Electricity 30,000-80,000 RWF/month (depending on usage), Water 10,000-25,000 RWF/month, WiFi 30,000-50,000 RWF/month, and Security/cleaning in compounds 10,000-20,000 RWF/month."
    },
    {
      question: "Can I negotiate rent prices in Kigali?",
      answer: "Yes! Especially for: longer lease terms (12+ months get 10-15% discount), paying 3-6 months upfront (5-10% discount), unfurnished properties (10-20% cheaper), and during low season (March-June). Audacieux Real Estate negotiates on your behalf."
    },
    {
      question: "How often does rent increase in Kigali?",
      answer: "Most landlords increase rent 5-10% annually. However, if you sign a 2-year lease, you can lock in rates for 18-24 months. Multi-year leases are becoming more common and offer better value."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="hover:text-[#FFD400]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#FFD400]">Blog</Link>
            <span className="mx-2">/</span>
            <span>Rent Costs Kigali 2026</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Rent Costs in Kigali (2026 Complete Guide)</h1>
          <p className="text-xl text-green-100">Exactly how much you'll pay for apartments, houses, and offices in every neighborhood</p>
          <div className="mt-4 flex gap-4 text-sm">
            <span>📅 Updated: February 2026</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Planning to rent in Kigali? Whether you're moving to Rwanda for work, relocating within the city, or looking for investment properties, knowing exact rental costs is crucial for budgeting. The good news: Kigali offers options for every budget.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Audacieux Real Estate, we manage over 100 rental properties across Kigali and process 30+ rental transactions monthly. This guide shares our insider knowledge on current market rates, hidden costs, and how to find the best deals in 2026.
            </p>
            <div className="bg-yellow-50 border-l-4 border-[#FFD400] p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">💰 Quick Answer:</p>
              <p className="text-gray-700">Monthly rent in Kigali: <strong>Studios 150K-250K RWF</strong> | <strong>1-bed 250K-400K RWF</strong> | <strong>2-bed 400K-700K RWF</strong> | <strong>3-bed houses 600K-1.2M RWF</strong>. Add 50K-150K RWF for utilities.</p>
            </div>
          </section>

          {/* Rental Prices by Property Type */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Kigali Rental Prices by Property Type (2026)</h2>
            
            <div className="space-y-6">
              {/* Studios */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏠 Studio Apartments</h3>
                <p className="text-gray-600 mb-4">Single room with kitchenette and bathroom. Perfect for singles or young professionals.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold">Price Range (Monthly)</th>
                        <th className="px-4 py-3 font-semibold">Typical Features</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Nyarutarama</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">300,000 - 450,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Furnished, WiFi, security</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Kimironko</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">150,000 - 250,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Basic, water included</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Remera</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">180,000 - 280,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Near transport, shops</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Gisozi</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">120,000 - 200,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Affordable, basic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1-Bedroom */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛏️ 1-Bedroom Apartments</h3>
                <p className="text-gray-600 mb-4">Separate bedroom, living room, kitchen, bathroom. Ideal for couples or small families.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold">Price Range (Monthly)</th>
                        <th className="px-4 py-3 font-semibold">Average Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Kacyiru</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">400,000 - 650,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">60-80 sqm</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-medium">Kimironko ⭐</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">250,000 - 400,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">50-70 sqm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Remera</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">300,000 - 500,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">55-75 sqm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Gacuriro</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">280,000 - 450,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">60-80 sqm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">⭐ Best value - Kimironko offers quality apartments at competitive prices</p>
              </div>

              {/* 2-Bedroom */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏡 2-Bedroom Apartments</h3>
                <p className="text-gray-600 mb-4">Two bedrooms, living/dining area, kitchen, 1-2 bathrooms. Perfect for families.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold">Price Range (Monthly)</th>
                        <th className="px-4 py-3 font-semibold">Features</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Nyarutarama</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">800,000 - 1,500,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Fully furnished, pool, gym</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Kacyiru</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">600,000 - 950,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Modern, secure compound</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-medium">Kimironko ⭐</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">400,000 - 700,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Parking, water, security</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Gisozi</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">350,000 - 550,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Basic, good transport links</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3-Bedroom Houses */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-r from-green-50 to-transparent">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏠 3-Bedroom Houses/Villas</h3>
                <p className="text-gray-600 mb-4">Standalone houses with garden, parking, and compound. Executive-level accommodation.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold">Price Range (Monthly)</th>
                        <th className="px-4 py-3 font-semibold">Typical Amenities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Nyarutarama</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">1,500,000 - 3,000,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Pool, garden, staff quarters</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Kacyiru</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">1,000,000 - 1,800,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Gated, parking, modern</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Kimironko</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">600,000 - 1,200,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Garden, parking, 2 baths</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Gacuriro</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">700,000 - 1,100,000 RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Quiet, family-friendly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Office Spaces */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 Office Spaces</h3>
                <p className="text-gray-600 mb-4">Commercial rental spaces for businesses.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Location</th>
                        <th className="px-4 py-3 font-semibold">Price per SQM (Monthly)</th>
                        <th className="px-4 py-3 font-semibold">Sample Price (100sqm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">CBD (City Center)</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">15,000 - 25,000 RWF/sqm</td>
                        <td className="px-4 py-3 text-sm text-gray-600">1,500,000 - 2,500,000 RWF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Kacyiru (Near Ministries)</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">12,000 - 20,000 RWF/sqm</td>
                        <td className="px-4 py-3 text-sm text-gray-600">1,200,000 - 2,000,000 RWF</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Remera/Kimironko</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">8,000 - 15,000 RWF/sqm</td>
                        <td className="px-4 py-3 text-sm text-gray-600">800,000 - 1,500,000 RWF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 italic">
              *Prices are for unfurnished properties unless specified. Furnished apartments cost 20-40% more. All prices subject to negotiation.
            </p>
          </section>

          {/* Additional Costs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Additional Monthly Costs Beyond Rent</h2>
            
            <p className="text-gray-700 mb-6">
              Rent is just one part of your monthly housing budget. Here's what else you'll pay:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-200">
                <thead className="bg-[#0d4f3a] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Expense</th>
                    <th className="px-4 py-3 text-left">Monthly Cost</th>
                    <th className="px-4 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Electricity (EUCL)</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">30,000 - 80,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Depends on usage, AC increases cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Water (WASAC)</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">10,000 - 25,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Sometimes included in rent</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Internet/WiFi</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">30,000 - 50,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">30 Mbps average</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Security/Cleaning (Compound)</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">10,000 - 20,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Shared compound costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Gas/Cooking Fuel</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">15,000 - 30,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Gas cylinder refills</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Waste Collection</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">3,000 - 5,000 RWF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Monthly fee</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 font-bold">TOTAL UTILITIES</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold text-lg">100,000 - 210,000 RWF</td>
                    <td className="px-4 py-3 text-sm font-semibold">Add to your rent budget</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFD400] p-6">
              <p className="font-semibold text-gray-900 mb-2">💡 Budget Example:</p>
              <p className="text-gray-700">Renting a 2-bedroom in Kimironko (500,000 RWF/month) + utilities (150,000 RWF) = <strong>650,000 RWF total monthly housing cost</strong>.</p>
            </div>
          </section>

          {/* Upfront Costs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Upfront Costs When Renting in Kigali</h2>
            
            <p className="text-gray-700 mb-6">
              Before moving in, landlords and agents require several payments. Budget for 2-3 months rent upfront:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-600 bg-green-50 p-4">
                <h3 className="font-bold text-lg text-gray-900">1. Security Deposit (Refundable)</h3>
                <p className="text-[#0d4f3a] font-bold text-xl mb-2">= 1 Month Rent</p>
                <p className="text-sm text-gray-700">Held by landlord, returned when you move out (minus any damages). Standard practice across Kigali.</p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-4">
                <h3 className="font-bold text-lg text-gray-900">2. First Month's Rent (Advance)</h3>
                <p className="text-[#0d4f3a] font-bold text-xl mb-2">= 1 Month Rent</p>
                <p className="text-sm text-gray-700">Pay first month before moving in. Standard requirement.</p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-4">
                <h3 className="font-bold text-lg text-gray-900">3. Agent Fee (Sometimes)</h3>
                <p className="text-[#0d4f3a] font-bold text-xl mb-2">= 0.5 to 1 Month Rent</p>
                <p className="text-sm text-gray-700">Real estate agent commission. Negotiable - Audacieux clients often get this waived or reduced when signing long leases.</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-6">
              <p className="font-semibold text-gray-900 mb-2">⚠️ Example: Moving into 500K RWF/month apartment</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Security Deposit: 500,000 RWF</li>
                <li>• First Month: 500,000 RWF</li>
                <li>• Agent Fee: 250,000 RWF (if applicable)</li>
                <li className="font-bold text-[#0d4f3a] pt-2">= Total upfront: 1,250,000 RWF</li>
              </ul>
            </div>
          </section>

          {/* Money-Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">How to Save Money on Rent in Kigali (2026)</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">💚</span>
                  Negotiate Long Leases
                </h3>
                <p className="text-gray-700">
                  Sign 12-24 month leases for <strong>10-15% discount</strong>. Landlords prefer stable tenants. You also lock in rates against inflation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  Pay Multiple Months Upfront
                </h3>
                <p className="text-gray-700">
                  Pay 3-6 months rent upfront for <strong>5-10% discount</strong>. If you have savings, this significantly reduces monthly costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">📍</span>
                  Choose Emerging Areas
                </h3>
                <p className="text-gray-700">
                  Gisozi, Batsinda, outer Kimironko offer <strong>30-40% cheaper rent</strong> than CBD with good transport links. Still safe and developing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">🪑</span>
                  Rent Unfurnished
                </h3>
                <p className="text-gray-700">
                  Unfurnished apartments cost <strong>20-40% less</strong>. Invest in your own furniture - you'll save more in the long run.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">📅</span>
                  Move During Low Season
                </h3>
                <p className="text-gray-700">
                  March-June sees <strong>less demand = lower prices</strong>. Landlords more willing to negotiate during rainy season.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-3xl mr-3">🤝</span>
                  Use Audacieux Real Estate
                </h3>
                <p className="text-gray-700">
                  We negotiate on your behalf, often waive agent fees for long leases, and have <strong>exclusive off-market deals</strong> not advertised online.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Rentals */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Featured Properties for Rent</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/properties/3" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#0d4f3a]">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  🏢
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Modern Apartment in Kimironko</h3>
                <p className="text-2xl font-bold text-[#0d4f3a] mb-2">45,000,000 RWF (or rent 600K/month)</p>
                <p className="text-gray-600 mb-3">2 bed • 2 bath • 80 sqm • Kimironko</p>
                <p className="text-sm text-gray-700 mb-4">Modern 2-bedroom apartment in secure compound. Parking, water, WiFi ready. Available for rent or purchase.</p>
                <span className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">View Details →</span>
              </Link>

              <Link href="/properties/1" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#0d4f3a]">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  🏠
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Executive House in Kacyiru</h3>
                <p className="text-2xl font-bold text-[#0d4f3a] mb-2">60,000,000 RWF (or rent 800K/month)</p>
                <p className="text-gray-600 mb-3">4 bed • 3 bath • Kacyiru • Garden</p>
                <p className="text-sm text-gray-700 mb-4">Spacious family home with garden and parking. Quiet neighborhood near ministries. Perfect for executives/diplomats.</p>
                <span className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">View Details →</span>
              </Link>
            </div>

            <div className="text-center mt-6">
              <Link href="/properties" className="inline-block bg-[#0d4f3a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a7a55] transition-colors">
                View All Rental Properties →
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Looking for Your Next Home in Kigali?</h2>
              <p className="text-xl text-green-100 mb-6">
                We have 100+ rental properties across all budgets and neighborhoods
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/250789208631?text=Hi%20Audacieux%2C%20I%27m%20looking%20for%20a%20rental%20property%20in%20Kigali.%20Can%20you%20help%3F"
                  className="bg-[#FFD400] text-[#0d4f3a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Us Now
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-[#0d4f3a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Send Inquiry
                </Link>
              </div>
              <p className="text-sm text-green-100 mt-4">
                ☎️ Call: +250 789 208 631 | 📧 audacieuxniyibikoze@gmail.com
              </p>
            </div>
          </section>

        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Frequently Asked Questions About Renting in Kigali" />

        {/* Related Articles */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/best-houses-for-rent-kimironko-2026" className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-[#0d4f3a] mb-2">Best Houses for Rent in Kimironko</h4>
              <p className="text-sm text-gray-600">Complete guide to renting in Kigali's best neighborhood</p>
            </Link>
            <Link href="/blog/cost-of-buying-land-in-kigali-2026" className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-[#0d4f3a] mb-2">Cost of Buying Land in Kigali</h4>
              <p className="text-sm text-gray-600">Should you rent or buy? Compare costs and investment potential</p>
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
