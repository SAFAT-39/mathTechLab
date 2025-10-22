import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/11-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 11 Times Table important?",
      answer:
        "Mastering the 11 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 11 Times Table?",
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
        title="Interactive 11 Times Table Practice for Faster Learning"
        description={
          <>
            The <b>11 Times Table</b> introduces number repetition patterns that
            are fun to explore. With MathTechLab’s interactive features,
            learners can quickly master this table through practice and play.
          </>
        }
        points={[
          "Pattern Learning – Discover repeating number patterns for easy recall.",
          "Hands-On Games – Strengthen multiplication skills through visual puzzles.",
          "Instant Feedback – Get corrections and hints instantly for improvement.",
          "Audio Support – Listen, speak, and repeat for full learning engagement.",
          "Cross-Device Compatible – Works perfectly on PC, tablet, and mobile browsers.",
          "Downloadable Resources – Save the 11 Times Table sheet for continued study.",
        ]}
        imageUrl={timestable}
        imagealt="11 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-cyan-500"
        questionTextColor="text-cyan-600"
        titleTextColor="text-cyan-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
