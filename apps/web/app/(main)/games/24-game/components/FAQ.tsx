import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}
interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({
  faqs,
  title = '❓ Frequently Asked Questions'
}) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-blue-50 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {faq.question}
            </h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
