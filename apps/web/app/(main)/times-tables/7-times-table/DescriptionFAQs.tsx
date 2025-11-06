import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../../public/static/image/allTimesTable/7-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 7 Times Table important?",
      answer:
        "Mastering the 7 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 7 Times Table?",
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
        title="Master the 7 Times Table Through Interactive Play"
        description={
          <>
            The <b>7 Times Table</b> can be tricky, but our engaging practice
            system makes it easy and enjoyable. MathTechLab’s visual tools,
            audio support, and smart feedback guide learners every step of the
            way.
          </>
        }
        points={[
          "Visual and Audio Practice – Reinforce learning with multi-sensory tools.",
          "Challenging Quizzes – Build confidence with progressively harder questions.",
          "Drag-and-Drop Fun – Solve equations by moving colorful tiles into place.",
          "Instant Review – Identify errors quickly to boost retention.",
          "Cross-Device Compatible – Use the 7 Times Table app on any device, anywhere.",
          "Downloadable Resources – Print or save the 7 Times Table chart for revision.",
        ]}
        imageUrl={timestable}
        imagealt="7 times table"
        downloadText="Download"
      />
      {/* <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-red-500"
        questionTextColor="text-red-600"
        titleTextColor="text-red-700"
      /> */}
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
