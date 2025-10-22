import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/5-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 5 Times Table important?",
      answer:
        "Mastering the 5 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 5 Times Table?",
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
        title="Explore the 5 Times Table with Fun Online Quizzes"
        description={
          <>
            The <b>5 Times Table </b>introduces patterns that help students
            understand multiplication deeply. <b>MathTechLab</b> enhances this
            with voice learning, animations, and real-time feedback.
          </>
        }
        points={[
          "Pattern Recognition – Identify and memorize easy-to-follow number sequences.",
          "Interactive Games – Practice multiplication through engaging drag-and-drop tasks.",
          "Audio Support – Listen and repeat for better retention and pronunciation.",
          "Instant Results – View your correct and incorrect answers immediately.",
          "Cross-Device Compatible – Access the 5 Times Table practice tool on mobile, tablet, or computer.",
          "Downloadable Resources – Download the 5 Times Table chart for continued learning.",
        ]}
        imageUrl={timestable}
        imagealt="5 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-yellow-500"
        questionTextColor="text-yellow-600"
        titleTextColor="text-yellow-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
