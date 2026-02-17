import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a3d2d] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">Follow us: <strong>audacieux_niyibikoze</strong></p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com/audacieux_niyibikoze" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-300">
          © 2026 Audacieux Real Estate. All rights reserved. Building Dreams, Securing Future.
        </p>
      </div>
    </footer>
  );
}
