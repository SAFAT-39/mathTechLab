import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/2-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 2 Times Table important?",
      answer:
        "Mastering the 2 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 2 Times Table?",
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
        title="Master the 2 Times Table with Interactive Learning"
        description={
          <>
            The <b>2 Times Table</b> introduces the concept of doubling numbers,
            a core skill in early math education. <b>MathTechLab</b> turns this
            into an engaging digital experience through visual quizzes and
            hands-on challenges.
          </>
        }
        points={[
          "Audio and Visual Support – Hear and see each multiplication for better understanding.",
          "Dynamic Quizzes – Practice in sequential and shuffled formats for long-term recall.",
          "Interactive Challenges – Strengthen your math logic with drag-and-drop puzzles.",
          "Progress Tracking – Instantly view which answers are correct or need improvement.",
          "Cross-Device Compatible – Fully responsive design for PC, tablet, and mobile users.",
          "Downloadable Resources – Access the 2 Times Table worksheet for easy offline study.",
        ]}
        imageUrl={timestable}
        imagealt="2 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-sky-500"
        questionTextColor="text-sky-600"
        titleTextColor="text-sky-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
