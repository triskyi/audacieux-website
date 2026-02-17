export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0d4f3a] to-[#1a7a55] text-white py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d4f3a]/80 to-[#1a7a55]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Dreams,<br />
            <span className="text-yellow-300">Securing Future.</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Your trusted partner in finding the perfect property in Kigali
          </p>
          
          {/* Discount Badge */}
          <div className="inline-block bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-xl mb-8 shadow-lg">
            Get Up To 45% Discount!
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#properties" 
              className="bg-yellow-400 text-[#0d4f3a] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
            >
              View Properties
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0d4f3a] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
