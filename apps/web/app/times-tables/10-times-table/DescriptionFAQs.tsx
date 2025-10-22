import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/10-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 10 Times Table important?",
      answer:
        "Mastering the 10 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 10 Times Table?",
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
  return (
    <div className="space-y-[60px]">
      <TimesTableDescription
        title="Master the 10 Times Table with Confidence"
        description={
          <>
            The <b>10 Times Table</b> is essential for developing multiplication
            fluency. <b>MathTechLab</b> helps children master it quickly with
            guided exercises and visual math activities.
          </>
        }
        points={[
          "Easy-to-Follow Patterns – Understand how multiplying by 10 builds number sense.",
          "Engaging Visuals – Bright, animated designs make math fun and memorable.",
          "Practice Flexibility – Practice questions in sequence or shuffled mode.",
          "Instant Checking – Receive real-time feedback to improve accuracy.",
          "Cross-Device Compatible – Use on desktop, tablet, or phone for easy access.",
          "Downloadable Resources – Download the 10 Times Table printable chart for free.",
        ]}
        imageUrl={timestable}
        imagealt="10 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-indigo-500"
        questionTextColor="text-indigo-600"
        titleTextColor="text-indigo-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
