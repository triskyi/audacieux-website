import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Cost of Buying Land in Kigali 2026 - Complete Price Guide | Audacieux Real Estate",
  description: "Discover land prices in Kigali 2026. Complete guide to plot costs in Kimironko, Kacyiru, Remera & more. Expert tips on buying land in Rwanda. Prices from 40M RWF.",
  keywords: [
    "cost of buying land in Kigali",
    "land prices Kigali 2026",
    "plot for sale Kigali",
    "land prices Kimironko",
    "how much is land in Rwanda",
    "buying land Kigali guide",
    "plot prices Kacyiru",
    "real estate investment Kigali"
  ],
  openGraph: {
    title: "Cost of Buying Land in Kigali 2026 - Complete Price Guide",
    description: "Expert guide to land prices in Kigali. Find out how much plots cost in top neighborhoods. Updated for 2026.",
    type: "article",
  },
};

export default function CostOfBuyingLandInKigali() {
  const faqs = [
    {
      question: "How much does land cost in Kigali in 2026?",
      answer: "Land prices in Kigali vary by location. In prime areas like Nyarutarama, expect 80M-200M RWF per plot. Kimironko ranges from 40M-120M RWF. Emerging areas like Gisozi start from 30M-70M RWF. Prices depend on size, location, and infrastructure access."
    },
    {
      question: "What is the cheapest area to buy land in Kigali?",
      answer: "The most affordable areas include Gisozi (30M-70M RWF), outer Remera (35M-80M RWF), and parts of Gacuriro (40M-90M RWF). These areas still offer good infrastructure and appreciation potential."
    },
    {
      question: "Do I need to be Rwandan to buy land in Kigali?",
      answer: "Yes, according to Rwanda's land laws, only Rwandan citizens can own land. Foreigners can obtain long-term leases (up to 99 years) but cannot own land outright. Work with a licensed real estate agent to navigate the process."
    },
    {
      question: "What additional costs come with buying land in Rwanda?",
      answer: "Expect to pay: registration fees (4% of land value), transfer tax (approximately 6%), legal fees (1-2%), surveying costs, and agent commission (usually 5%). Total additional costs typically add 15-20% to the purchase price."
    },
    {
      question: "How long does it take to buy land in Kigali?",
      answer: "The entire process typically takes 2-4 months. This includes property search (2-4 weeks), due diligence (2-3 weeks), negotiation (1-2 weeks), documentation (3-4 weeks), and registration at RDB (2-3 weeks). Working with Audacieux Real Estate can expedite this process."
    },
    {
      question: "Is buying land in Kigali a good investment?",
      answer: "Yes, Kigali's real estate market has shown consistent growth of 8-12% annually. With ongoing infrastructure development, increasing urbanization, and Rwanda's stable economy, land remains one of the best long-term investments. Areas near planned BRT routes and new developments offer highest appreciation potential."
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
            <span>Cost of Buying Land in Kigali</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Cost of Buying Land in Kigali (2026 Complete Guide)</h1>
          <p className="text-xl text-green-100">Everything you need to know about land prices, neighborhoods, and the buying process in Rwanda's capital</p>
          <div className="mt-4 flex gap-4 text-sm">
            <span>📅 Updated: February 2026</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Looking to buy land in Kigali? You're making a smart investment choice. Rwanda's capital has seen remarkable growth over the past decade, with land values appreciating 8-12% annually in prime locations. But how much does land actually cost in 2026, and which neighborhoods offer the best value?
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              As Rwanda's leading real estate agency with over 50 successful land transactions in Kimironko alone, we've compiled this comprehensive guide to help you understand current land prices, hidden costs, and insider tips for securing the best deals in Kigali.
            </p>
            <div className="bg-yellow-50 border-l-4 border-[#FFD400] p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">💡 Quick Answer:</p>
              <p className="text-gray-700">Land prices in Kigali range from <strong>30M RWF</strong> (emerging areas) to <strong>200M RWF+</strong> (prime locations like Nyarutarama). Average plot in Kimironko: <strong>40M-120M RWF</strong>.</p>
            </div>
          </section>

          {/* Land Prices by Neighborhood */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Land Prices by Kigali Neighborhood (2026)</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏆 Prime Locations (High-End)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-900">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Price Range</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Market Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Nyarutarama</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">80M - 200M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">High demand, limited supply</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Kacyiru</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">60M - 150M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Government district, stable</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Kibagabaga</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">50M - 130M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Near KIA, rising fast</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🏘️ Mid-Range Locations (Best Value)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-900">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Price Range</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Investment Rating</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Kimironko ⭐</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">40M - 120M RWF</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="bg-green-600 text-white px-2 py-1 rounded">Excellent</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Remera</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">45M - 110M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Very good, commercial hub</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Gacuriro</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">40M - 90M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Growing, good potential</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">⭐ Our specialty area - we have exclusive deals in Kimironko</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">💰 Affordable Locations (Emerging)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-900">Neighborhood</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Price Range</th>
                        <th className="px-4 py-3 font-semibold text-gray-900">Growth Potential</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Gisozi</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">30M - 70M RWF</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded">High</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Batsinda</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">25M - 60M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Infrastructure expanding</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Masaka</td>
                        <td className="px-4 py-3 text-[#0d4f3a] font-bold">20M - 50M RWF</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Long-term investment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 italic">
              *Prices based on standard plot sizes (300-600 sqm). Larger plots command premium prices. All prices subject to negotiation - Audacieux Real Estate clients typically save 10-15% through our expert negotiation.
            </p>
          </section>

          {/* What Affects Land Prices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">What Affects Land Prices in Kigali?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Location Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Proximity to CBD:</strong> Within 5km adds 30-50% premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Main road access:</strong> Direct access adds 20-40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Security:</strong> Gated communities add 15-25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Viewpoints:</strong> Hilltop locations add 10-20%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Electricity connection:</strong> Essential (adds 10%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Water supply:</strong> Municipal water adds 15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Tarmac roads:</strong> Paved access adds 20%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Drainage system:</strong> Proper drainage adds 10%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Plot Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Plot size:</strong> 400-600 sqm most desirable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Shape:</strong> Regular rectangular adds value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Topography:</strong> Level ground preferred</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Corner plots:</strong> Double street access adds 15%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📈 Market Forces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Development plans:</strong> BRT routes boost prices 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Zoning:</strong> Commercial zoning adds 40-60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Supply & demand:</strong> Limited inventory drives prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD400] mr-2">✓</span>
                    <span><strong>Season:</strong> Dry season sees 10% higher activity</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hidden Costs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Hidden Costs When Buying Land in Rwanda</h2>
            
            <p className="text-gray-700 mb-6">
              The purchase price is just the beginning. Here's a complete breakdown of all costs involved when buying land in Kigali:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">⚠️ Important:</p>
              <p className="text-gray-700">Budget an additional <strong>15-20% of the purchase price</strong> for taxes, fees, and other costs. On a 50M RWF plot, expect to pay 7.5M-10M RWF in additional expenses.</p>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-200">
                <thead className="bg-[#0d4f3a] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Cost Item</th>
                    <th className="px-4 py-3 text-left">Percentage/Amount</th>
                    <th className="px-4 py-3 text-left">Example (50M RWF)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Registration Fee</td>
                    <td className="px-4 py-3 text-gray-700">4% of land value</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">2,000,000 RWF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Transfer Tax</td>
                    <td className="px-4 py-3 text-gray-700">~6% of land value</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">3,000,000 RWF</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Agent Commission</td>
                    <td className="px-4 py-3 text-gray-700">5% of land value</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">2,500,000 RWF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Legal Fees</td>
                    <td className="px-4 py-3 text-gray-700">1-2% of land value</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">500,000-1,000,000 RWF</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Land Survey</td>
                    <td className="px-4 py-3 text-gray-700">Fixed cost</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">300,000-500,000 RWF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Valuation Report</td>
                    <td className="px-4 py-3">Fixed cost</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">200,000-400,000 RWF</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Title Search</td>
                    <td className="px-4 py-3">Fixed cost</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold">50,000-100,000 RWF</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 font-bold">TOTAL ADDITIONAL COSTS</td>
                    <td className="px-4 py-3 font-bold">~15-20%</td>
                    <td className="px-4 py-3 text-[#0d4f3a] font-bold text-lg">8,550,000-10,000,000 RWF</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-gray-900 mb-2">💡 Audacieux Advantage:</p>
              <p className="text-gray-700">When you work with us, we negotiate agent discounts and connect you with our trusted legal partners who offer 10-15% reduced fees for our clients.</p>
            </div>
          </section>

          {/* Investment Potential */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Is Buying Land in Kigali a Smart Investment?</h2>
            
            <p className="text-gray-700 mb-6">
              Short answer: <strong>Absolutely yes</strong>. Here's why land remains Rwanda's #1 investment asset:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-green-200 bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0d4f3a] mb-2">8-12%</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Annual Appreciation</div>
                <div className="text-xs text-gray-600">Prime locations like Kimironko</div>
              </div>
              <div className="border border-green-200 bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0d4f3a] mb-2">180%</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">ROI Over 10 Years</div>
                <div className="text-xs text-gray-600">Based on historical data</div>
              </div>
              <div className="border border-green-200 bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0d4f3a] mb-2">7.1%</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">GDP Growth (2025)</div>
                <div className="text-xs text-gray-600">Rwanda's strong economy</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Kigali Land is a Safe Bet:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🏙️</span>
                <div>
                  <span className="font-semibold">Rapid Urbanization:</span>
                  <span className="text-gray-700"> Kigali's population growing by 4% annually. By 2030, expect 2+ million residents needing housing.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🚇</span>
                <div>
                  <span className="font-semibold">Infrastructure Boom:</span>
                  <span className="text-gray-700"> BRT expansion, new roads, airport development. Land near planned routes has already jumped 40%.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🏗️</span>
                <div>
                  <span className="font-semibold">Limited Supply:</span>
                  <span className="text-gray-700"> Kigali is hilly with limited buildable land. Demand far exceeds supply in desirable areas.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🛡️</span>
                <div>
                  <span className="font-semibold">Political Stability:</span>
                  <span className="text-gray-700"> Rwanda's stable government and investor-friendly policies make it East Africa's safest market.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">💼</span>
                <div>
                  <span className="font-semibold">Growing Middle Class:</span>
                  <span className="text-gray-700"> More Rwandans can afford homes. Rental and resale demand consistently high.</span>
                </div>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">📊 Real ROI Example</h3>
              <div className="space-y-2">
                <p><strong>Year 2021:</strong> Bought plot in Kimironko for 40M RWF</p>
                <p><strong>Year 2026:</strong> Current market value: 72M RWF</p>
                <p className="text-[#FFD400] text-xl font-bold">= 80% appreciation in 5 years (16% annually)</p>
                <p className="text-sm text-green-100 mt-4">* Based on actual transaction handled by Audacieux Real Estate</p>
              </div>
            </div>
          </section>

          {/* Buying Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Step-by-Step: How to Buy Land in Kigali</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Define Your Budget & Requirements</h3>
                  <p className="text-gray-700">Determine how much you can invest (including 15-20% additional costs). Choose preferred location, plot size, and purpose (residential vs commercial).</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Work with a Licensed Agent (Essential!)</h3>
                  <p className="text-gray-700">Never buy land in Rwanda without a licensed real estate agent. We navigate legal complexities, verify ownership, and negotiate on your behalf. Contact Audacieux Real Estate: +250 789 208 631.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Property Search & Site Visits</h3>
                  <p className="text-gray-700">We show you 5-10 options matching your criteria. Visit during both dry and rainy seasons if possible. Check drainage, access, neighborhood.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Due Diligence (Critical Step)</h3>
                  <p className="text-gray-700">We conduct: title search at RDB, verify seller ownership, check for encumbrances/disputes, confirm zoning, survey boundaries. Takes 2-3 weeks.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Negotiate & Make Offer</h3>
                  <p className="text-gray-700">We negotiate the best price (typically save clients 10-15%). Submit written offer. Pay 10% deposit to secure the plot while finalizing paperwork.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Sign Sale Agreement</h3>
                  <p className="text-gray-700">Lawyer prepares sale agreement. Both parties sign. Pay remaining balance (90%) plus transfer fees and taxes.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#FFD400] pl-4 py-2">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0d4f3a] text-white rounded-full flex items-center justify-center font-bold">7</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Transfer at RDB (Rwanda Development Board)</h3>
                  <p className="text-gray-700">Submit documents to RDB Land Office. Pay registration fees (4%). Receive new land title in your name. Takes 2-4 weeks.</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#0d4f3a] pl-4 py-2 bg-green-50">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FFD400] text-[#0d4f3a] rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">You're Now a Landowner!</h3>
                  <p className="text-gray-700">Congratulations! You now own land in one of Africa's fastest-growing cities. Consider building or leasing for passive income.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 italic">
              ⏱️ Total timeline: 2-4 months from search to ownership. Audacieux Real Estate has streamlined processes that can complete transfers in as little as 6 weeks.
            </p>
          </section>

          {/* Featured Properties */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Featured Land Plots for Sale</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/properties/2" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#0d4f3a]">
                <div className="bg-gradient-to-br from-amber-600 to-amber-800 h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  🏞️
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Prime Land Plot in Kimironko</h3>
                <p className="text-2xl font-bold text-[#0d4f3a] mb-2">120,000,000 RWF</p>
                <p className="text-gray-600 mb-3">500 sqm • Kimironko, Kigali • Ready to Build</p>
                <p className="text-sm text-gray-700 mb-4">Perfect for residential development. All infrastructure in place. Clean title. Prime location near main road.</p>
                <span className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">View Details →</span>
              </Link>

              <Link href="/properties/4" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#0d4f3a]">
                <div className="bg-gradient-to-br from-green-700 to-green-900 h-48 rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  📏
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Commercial Plot - Remera</h3>
                <p className="text-2xl font-bold text-[#0d4f3a] mb-2">85,000,000 RWF</p>
                <p className="text-gray-600 mb-3">400 sqm • Remera, Kigali • Commercial Zone</p>
                <p className="text-sm text-gray-700 mb-4">High-traffic commercial area. Ideal for office building, retail space, or mixed-use development.</p>
                <span className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">View Details →</span>
              </Link>
            </div>

            <div className="text-center mt-6">
              <Link href="/properties" className="inline-block bg-[#0d4f3a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a7a55] transition-colors">
                View All Available Land Plots →
              </Link>
            </div>
          </section>

          {/* Expert Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0d4f3a] mb-6">Expert Tips for Buying Land in Kigali (2026)</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Always verify land titles at RDB before paying</p>
                <p className="text-sm text-gray-600">Fraud exists. Never trust photocopies. Visit RDB Land Office yourself or have your agent do official title search.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Buy near planned BRT routes for instant equity</p>
                <p className="text-sm text-gray-600">Kigali's Bus Rapid Transit expansion is coming. Land near future stations has already appreciated 25-40%. We know which areas are next.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Consider "emerging" neighborhoods for maximum ROI</p>
                <p className="text-sm text-gray-600">Gisozi and Batsinda are where Kimironko was 10 years ago. Early buyers in these areas will see 200%+ appreciation by 2030.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Visit the plot during rainy season</p>
                <p className="text-sm text-gray-600">Flooding and drainage issues only appear when it rains. Visit in April-May or October-November to see the full picture.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Negotiate payment plans</p>
                <p className="text-sm text-gray-600">Many sellers accept installment payments. We've arranged deals with 30% down and 12-24 month payment plans. Saves you from big loans.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <p className="font-semibold text-gray-900">✓ Check zoning before buying</p>
                <p className="text-sm text-gray-600">Some areas are residential-only. If you plan commercial use, verify zoning at Kigali City Council first. We handle this during due diligence.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#0d4f3a] to-[#1a7a55] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Buy Land in Kigali?</h2>
              <p className="text-xl text-green-100 mb-6">
                Let Rwanda's #1 real estate agency help you find the perfect plot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/250789208631?text=Hi%20Audacieux%2C%20I%27m%20interested%20in%20buying%20land%20in%20Kigali.%20Can%20you%20help%3F"
                  className="bg-[#FFD400] text-[#0d4f3a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Us Now
                </a>
                <Link
                  href="/properties"
                  className="bg-white text-[#0d4f3a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  View Available Land
                </Link>
              </div>
              <p className="text-sm text-green-100 mt-4">
                ⭐ 50+ successful land transactions in Kimironko | Up to 45% discount on selected plots
              </p>
            </div>
          </section>

        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} title="Frequently Asked Questions About Buying Land in Kigali" />

        {/* Final CTA */}
        <div className="mt-12 text-center border-t border-gray-200 pt-8">
          <p className="text-gray-700 mb-4">
            <strong>Need personalized advice?</strong> Our land specialists are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+250789208631" className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">
              📞 +250 789 208 631
            </a>
            <a href="mailto:audacieuxniyibikoze@gmail.com" className="text-[#0d4f3a] font-semibold hover:text-[#1a7a55]">
              ✉️ audacieuxniyibikoze@gmail.com
            </a>
          </div>
        </div>

      </article>
    </div>
  );
}
