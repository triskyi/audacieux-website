import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Blog Kigali | Property Tips & Market Insights Rwanda",
  description: "Expert real estate advice for buying, selling, and renting property in Kigali, Rwanda. Learn about house prices, market trends, and investment opportunities.",
  keywords: ["real estate blog Kigali", "property tips Rwanda", "Kigali housing market", "real estate investment Rwanda"],
};

export default function BlogPage() {
  const articles = [
    {
      slug: "best-houses-for-rent-kimironko-2026",
      title: "Best Houses for Rent in Kimironko (2026 Complete Guide)",
      excerpt: "Everything you need to know about renting a house in Kimironko, including average prices, best neighborhoods, and how to find the perfect home.",
      category: "Renting",
      date: "February 10, 2026",
      readTime: "8 min read",
      image: "kimironko-guide"
    },
    {
      slug: "cost-of-buying-land-in-kigali-2026",
      title: "Cost of Buying Land in Kigali (2026 Complete Guide)",
      excerpt: "Everything you need to know about land prices, neighborhoods, and the buying process in Rwanda's capital. From 30M to 200M RWF across all locations.",
      category: "Buying",
      date: "February 17, 2026",
      readTime: "8 min read",
      image: "land-prices"
    },
    {
      slug: "rent-costs-kigali-2026-complete-guide",
      title: "Rent Costs in Kigali (2026 Complete Guide)",
      excerpt: "Exactly how much you'll pay for apartments, houses, and offices in every neighborhood. From studios at 150K to executive villas at 3M RWF/month.",
      category: "Renting",
      date: "February 17, 2026",
      readTime: "10 min read",
      image: "rental-costs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Estate Blog & Insights
            </h1>
            <p className="text-xl text-gray-100">
              Expert advice on buying, selling, and renting property in Kigali, Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] flex items-center justify-center">
                    <span className="text-white text-6xl">📝</span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-yellow-400 text-[#0d4f3a] text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d4f3a] transition line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0d4f3a] mb-4">
            Need Personal Advice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our real estate experts are ready to help you
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
