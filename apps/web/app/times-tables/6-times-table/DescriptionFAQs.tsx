import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/6-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 6 Times Table important?",
      answer:
        "Mastering the 6 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 6 Times Table?",
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
        title="Strengthen Multiplication Skills with the 6 Times Table"
        description={
          <>
            {" "}
            The <b> 6 Times Table </b> bridges simple and advanced
            multiplication. <b>MathTechLab</b> helps learners build speed and
            accuracy with interactive exercises and guided practice.
          </>
        }
        points={[
          "Interactive Interface – Hands-on activities enhance math comprehension.",
          "Multiple Practice Modes – Choose sequential or random question sets.",
          "Engagement Tools – Learn through colorful animations and smart quizzes.",
          "Performance Feedback – Instantly know your progress and accuracy.",
          "Cross-Device Compatible – Practice comfortably on PC, tablet, or smartphone.",
          "Downloadable Resources – Access the 6 Times Table PDF for offline use.",
        ]}
        imageUrl={timestable}
        imagealt="6 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-orange-500"
        questionTextColor="text-orange-600"
        titleTextColor="text-orange-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
