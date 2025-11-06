import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../../public/static/image/allTimesTable/9-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 9 Times Table important?",
      answer:
        "Mastering the 9 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 9 Times Table?",
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
        title="Make the 9 Times Table Easy and Fun to Learn"
        description={
          <>
            The <b>9 Times Table</b> teaches pattern-based multiplication that
            boosts numerical confidence. <b>MathTechLab</b> turns complex tables
            into simple, enjoyable challenges.
          </>
        }
        points={[
          "Pattern Discovery – Identify unique patterns within the 9 Times Table.",
          "Gamified Practice – Play math games that make learning fun and effective.",
          "Mixed Questions – Solve shuffled problems to build critical thinking.",
          "Progressive Feedback – See instant results and tips for improvement.",
          "Cross-Device Compatible – Fully optimized for PC, tablet, and mobile learning.",
          "Downloadable Resources – Download your 9 Times Table sheet for home practice.",
        ]}
        imageUrl={timestable}
        imagealt="9 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-violet-500"
        questionTextColor="text-violet-600"
        titleTextColor="text-violet-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
