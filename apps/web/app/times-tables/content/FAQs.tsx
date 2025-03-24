const FAQs = () => {
  const faqs = [
    {
      question: "How can I use the multiplication tables on this website?",
      answer: (
        <>
          Our website offers multiple ways to learn multiplication:
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              The <strong>Times Table Card</strong> provides a quick reference
              for 1 to 12 times tables.
            </li>
            <li>
              The <strong>Multiplication Table</strong> displays a complete
              multiplication grid for easy lookup.
            </li>
            <li>
              The <strong>Multiplication Activity Chart</strong> allows
              interactive learning by clicking on cells to reveal answers.
            </li>
          </ul>
        </>
      ),
    },
    {
      question:
        "What is an Interactive Multiplication Chart, and how does it help?",
      answer: (
        <>
          An <strong>Interactive Multiplication Chart</strong> is a dynamic tool
          that helps students visualize multiplication patterns by allowing them
          to tap on a grid and reveal products. It makes learning{" "}
          <strong>times tables (1-12)</strong> fun, engaging, and effective for
          all age groups.
        </>
      ),
    },
    {
      question:
        "Why should I use this site instead of a traditional multiplication chart?",
      answer: (
        <>
          Unlike static multiplication charts, our interactive tools encourage
          active learning. You can practice multiplication, track patterns, and
          improve retention through hands-on engagement. Plus, our{" "}
          <strong>color-coded grid</strong> makes it easier to recognize number
          relationships.
        </>
      ),
    },
    {
      question:
        "Can this multiplication chart help with speed math and mental calculations?",
      answer: (
        <>
          Absolutely! By practicing with our interactive multiplication charts,
          students can memorize <strong>times tables</strong> faster and improve
          their <strong>mental math skills</strong>. Repeated use helps in quick
          recall, making math calculations easier in everyday scenarios.
        </>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-xl font-bold text-blue-600 mt-8">
        ❓ Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto mt-6">
        <section className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:bg-gray-50 hover:scale-101 transition duration-200"
            >
              <h3 className="text-xl font-semibold ">{faq.question}</h3>
              <div className="mt-2 text-gray-700">{faq.answer}</div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default FAQs;
