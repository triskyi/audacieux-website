"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "250789208631";
  const message = encodeURIComponent("Hello! I'm interested in your real estate services in Kimironko, Kigali.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-in slide-in-from-bottom-2">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        )}

        {/* Button */}
        <div className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110">
          <MessageCircle size={24} className="animate-pulse" />
          <span className="font-bold hidden sm:inline">WhatsApp Us</span>
        </div>
      </div>
    </a>
  );
}
