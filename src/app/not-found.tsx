import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-[#FFD400] text-9xl font-bold mb-4">404</div>
        
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Oops! Property Not Found
        </h1>

        {/* Search Suggestions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Search size={24} />
            What are you looking for?
          </h2>
          <div className="space-y-2 text-green-100">
            <p>• Browse our <Link href="/properties" className="text-[#FFD400] hover:underline font-semibold">available properties</Link></p>
            <p>• Explore properties by <Link href="/locations" className="text-[#FFD400] hover:underline font-semibold">location</Link></p>
            <p>• Read our <Link href="/blog" className="text-[#FFD400] hover:underline font-semibold">real estate blog</Link></p>
            <p>• Learn <Link href="/about" className="text-[#FFD400] hover:underline font-semibold">about us</Link></p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#FFD400] text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0d4f3a] transition-all"
          >
            <Search size={20} />
            View Properties
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-green-100 mb-4">
            Need help finding the right property?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
            <a href="tel:+250789208631" className="hover:text-[#FFD400] transition-colors">
              📞 +250 789 208 631
            </a>
            <a href="mailto:audacieuxniyibikoze@gmail.com" className="hover:text-[#FFD400] transition-colors">
              ✉️ audacieuxniyibikoze@gmail.com
            </a>
            <a 
              href="https://wa.me/250789208631?text=Hi%20Audacieux%2C%20I%20need%20help%20finding%20a%20property"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD400] transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
