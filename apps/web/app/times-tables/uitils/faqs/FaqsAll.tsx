interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why is learning the 1 Times Table important?",
    answer:
      "Mastering the 1 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
  },
  {
    question: "How does MathTechLab help with Times Tables practice?",
    answer:
      "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
  },
  {
    question: "Can I download and print the 1 Times Table?",
    answer:
      "Yes! You can download and print the times table from our website for offline practice.",
  },
  {
    question: "Is this platform suitable for kids?",
    answer:
      "Absolutely! Our website is designed to be kid-friendly, engaging, and interactive, making learning fun and effective.",
  },
  {
    question: "What makes MathTechLab different from other math sites?",
    answer:
      "We focus on interactive learning instead of plain memorization. Our drag-and-drop exercises, audio assistance, and step-by-step guidance ensure a deeper understanding of multiplication.",
  },
];

const TimesTableFAQs: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600">
              {faq.question}
            </h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimesTableFAQs;
