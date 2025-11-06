import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../../public/static/image/allTimesTable/8-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 8 Times Table important?",
      answer:
        "Mastering the 8 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 8 Times Table?",
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
        title="Learn and Practice the 8 Times Table Online"
        description={
          <>
            The <b>8 Times Table</b> helps students understand larger
            multiplication patterns. MathTechLab’s interactive design keeps kids
            motivated while strengthening problem-solving skills.
          </>
        }
        points={[
          "Interactive Visuals – Bright and engaging UI to keep learners focused.",
          "Practice Options – Switch between ordered and mixed question sets.",
          "Audio Learning – Listen and repeat equations for auditory reinforcement.",
          "Motivating Feedback – Fun progress tracking keeps students engaged.",
          "Cross-Device Compatible – Learn on mobile, tablet, or desktop without limits.",
          "Downloadable Resources – Grab your 8 Times Table chart for offline learning.",
        ]}
        imageUrl={timestable}
        imagealt="8 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-fuchsia-500"
        questionTextColor="text-fuchsia-600"
        titleTextColor="text-fuchsia-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
