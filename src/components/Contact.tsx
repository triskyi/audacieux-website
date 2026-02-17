import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0d4f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">FOR MORE INFO:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-4 rounded-full">
                  <Phone className="text-[#0d4f3a]" size={24} />
                </div>
                <div>
                  <a href="tel:+250789208631" className="text-xl hover:text-yellow-300 transition">
                    +250 789 208 631
                  </a>
                  <br />
                  <a href="tel:+250792639306" className="text-xl hover:text-yellow-300 transition">
                    +250 792 639 306
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-4 rounded-full">
                  <Mail className="text-[#0d4f3a]" size={24} />
                </div>
                <a href="mailto:audacieuxniyibikoze@gmail.com" className="text-xl hover:text-yellow-300 transition break-all">
                  audacieuxniyibikoze@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-4 rounded-full">
                  <MapPin className="text-[#0d4f3a]" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">ADDRESS</p>
                  <p className="text-xl">KIMIRONKO</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#0d4f3a]">Get In Touch</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4f3a]"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-[#0d4f3a] px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
