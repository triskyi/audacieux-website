"use client";

import { Home, Facebook, Twitter, Instagram, Linkedin, Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Locations", href: "/locations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0d4f3a] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+250789208631" className="flex items-center gap-2 hover:text-yellow-300 transition">
                <Phone size={14} />
                <span className="hidden sm:inline">+250 789 208 631</span>
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a href="mailto:audacieuxniyibikoze@gmail.com" className="hidden md:inline hover:text-yellow-300 transition">
                audacieuxniyibikoze@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com/audacieux_niyibikoze" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Home className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0d4f3a] tracking-tight">AUDACIEUX</h1>
              <p className="text-xs text-gray-600 uppercase tracking-wider">Real Estate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.href)
                    ? "text-[#0d4f3a] bg-yellow-400/20"
                    : "text-gray-700 hover:text-[#0d4f3a] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block bg-yellow-400 text-[#0d4f3a] px-6 py-2.5 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-md"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#0d4f3a] transition p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? "text-[#0d4f3a] bg-yellow-400/20"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-yellow-400 text-[#0d4f3a] px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-300 transition-all"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
