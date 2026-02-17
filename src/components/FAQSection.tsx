interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0d4f3a] mb-8 text-center">
          {title}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-50 rounded-lg p-6 group hover:bg-gray-100 transition-colors"
            >
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-[#0d4f3a] text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
