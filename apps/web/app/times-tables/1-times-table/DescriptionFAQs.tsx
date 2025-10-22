import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/1-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 1 Times Table important?",
      answer:
        "Mastering the 1 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 1 Times Table?",
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
        // title="Why Practice the 1 Times Table on MathTechLab?"
        // description="This is the perfect place to practice the 1 Times Table. At MathTechLab, we provide an interactive and engaging way to master the 1 times table with visual learning, audio support, and hands-on activities. Unlike traditional rote memorization, our platform offers a multi-sensory approach that enhances understanding and retention."
        // points={[
        //   "Interactive Learning – Our platform provides step-by-step guidance with audio playback to help users visualize, listen, and repeat equations.",
        //   "Engaging Practice Methods – Users can practice in sequential and shuffled order to reinforce learning dynamically.",
        //   "Drag-and-Drop Games – Improve problem-solving skills by matching colorful number tiles to their correct equations.",
        //   "Instant Feedback – Get real-time hints and corrections to ensure a fun and frustration-free learning experience.",
        //   "Downloadable Resources – Access and download our beautifully designed 1 Times Table chart for offline practice.",
        // ]}
        title="Why Practice the 1 Times Table on MathTechLab?"
        description={
          <>
            Learning the 1 Times Table is the first step toward mastering
            multiplication. At <b>MathTechLab</b>, students can explore the{" "}
            <b>1 Times Table</b> in an interactive, visual, and audio-supported
            way. Our hands-on activities make math fun and help learners build a
            strong foundation for higher tables.
          </>
        }
        points={[
          "Interactive Learning – Visual and auditory tools make it easy to understand multiplication basics.",
          "Engaging Practice – Solve questions in order or shuffled mode for better retention.",
          "Drag-and-Drop Games – Match colorful tiles to the right answers and learn through play.",
          "Instant Feedback – See your progress immediately with hints and corrections.",
          "Cross-Device Compatible – Use this times table app on PC, tablet, or mobile for a seamless learning experience.",
          "Downloadable Resources – Download and print the 1 Times Table chart for offline learning.",
        ]}
        imageUrl={timestable}
        imagealt="1 times table"
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
