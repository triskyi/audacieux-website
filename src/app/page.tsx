import Hero from "@/components/Hero";
import Services from "@/components/Services";
import  PropertyShowcase from "@/components/PropertyShowcase";
import Contact from "@/components/Contact";
import FAQSection from "@/components/FAQSection";
import ShortsSection from "@/components/ShortsSection";

export default function HomePage() {
  const faqs = [
    {
      question: "What areas do you serve in Kigali?",
      answer: "We serve all major areas in Kigali including Kimironko, Kacyiru, Remera, Nyarutarama, Gisozi, and Gacuriro. Our main office is in Kimironko."
    },
    {
      question: "How much is the discount on properties?",
      answer: "We offer up to 45% discount on selected properties. The exact discount depends on the property type, location, and current promotions. Contact us for specific deals."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we work with various financing partners and can help arrange payment plans for qualified buyers. Contact us to discuss your options."
    },
    {
      question: "How can I schedule a property viewing?",
      answer: "You can call us at +250 789 208 631, WhatsApp us, email audacieuxniyibikoze@gmail.com, or fill out our contact form. We arrange viewings within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <PropertyShowcase />
      <ShortsSection />
      <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      <Contact />
    </div>
  );
}
