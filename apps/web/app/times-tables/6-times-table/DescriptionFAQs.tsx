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
        title="Why Practice the 6 Times Table on MathTechLab?"
        description="This is the perfect place to practice the 6 Times Table. At MathTechLab, we provide an interactive and engaging way to master the 6 times table with visual learning, audio support, and hands-on activities. Unlike traditional rote memorization, our platform offers a multi-sensory approach that enhances understanding and retention."
        points={[
          "Interactive Learning – Our platform provides step-by-step guidance with audio playback to help users visualize, listen, and repeat equations.",
          "Engaging Practice Methods – Users can practice in sequential and shuffled order to reinforce learning dynamically.",
          "Drag-and-Drop Games – Improve problem-solving skills by matching colorful number tiles to their correct equations.",
          "Instant Feedback – Get real-time hints and corrections to ensure a fun and frustration-free learning experience.",
          "Downloadable Resources – Access and download our beautifully designed 6 Times Table chart for offline practice.",
        ]}
        imageUrl={timestable}
        imagealt="6 times table"
        downloadText="Download"
      />
      <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        borderColor="border-orange-500"
        questionTextColor="text-orange-600"
        titleTextColor="text-orange-700"
      />
      {/* <FAQSection title="Frequently Asked Questions" faqs={faqs} /> */}
    </div>
  );
};

export default DescriptionFAQs;
