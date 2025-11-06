import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../../public/static/image/allTimesTable/3-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 3 Times Table important?",
      answer:
        "Mastering the 3 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 3 Times Table?",
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
        title="Learn the 3 Times Table in a Fun and Interactive Way"
        description={
          <>
            The <b>3 Times Table</b> is an important step in developing
            arithmetic fluency. <b>MathTechLab</b> makes it enjoyable with
            colorful visuals, smart quizzes, and voice-based learning aids.
          </>
        }
        points={[
          "Step-by-Step Guidance – Each question includes hints for better comprehension.",
          "Engaging Activities – Strengthen pattern recognition with interactive games.",
          "Mixed-Order Practice – Reinforce learning with shuffled multiplication questions.",
          "Instant Results – Get feedback instantly to learn from your mistakes.",
          "Cross-Device Compatible – Study anywhere on PC, tablet, or smartphone effortlessly.",
          "Downloadable Resources – Download the printable 3 Times Table chart anytime.",
        ]}
        imageUrl={timestable}
        imagealt="3 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-teal-500"
        questionTextColor="text-teal-600"
        titleTextColor="text-teal-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
