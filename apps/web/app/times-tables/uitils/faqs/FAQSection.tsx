import React, { ReactNode } from "react";

interface FAQ {
  question: string;
  answer: string | ReactNode;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  borderColor?: string; // Example: "border-indigo-500"
  questionTextColor?: string; // Example: "text-indigo-600"
  titleTextColor?: string; // Example: "text-indigo-700"
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs,
  borderColor = "border-indigo-500",
  questionTextColor = "text-indigo-600",
  titleTextColor = "text-indigo-700",
}) => {
  return (
    <section className="mx-auto  space-y-6">
      <h2
        className={`text-2xl md:text-3xl font-bold text-center ${titleTextColor}`}
      >
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 ${borderColor}`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${questionTextColor}`}>
              {faq.question}
            </h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
