
"use client";
import { Home, Building2, Key, MapPin, Briefcase, Building } from "lucide-react";
import React, { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
  Home,
  Building2,
  Key,
  MapPin,
  Briefcase,
  Building,
};

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-[#0d4f3a] px-6 py-2 rounded-full font-bold text-2xl mb-4">
            OUR SERVICES
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive real estate solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-[#0d4f3a]"
              >
                <Icon className="text-[#0d4f3a] mb-4" size={48} />
                <h3 className="font-bold text-lg text-gray-800">{service.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
