import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FAQSection from "../uitils/faqs/FAQSection";
import timestable from "../../../public/static/image/allTimesTable/4-times-table.webp";

const DescriptionFAQs = () => {
  const faqs = [
    {
      question: "Why is learning the 4 Times Table important?",
      answer:
        "Mastering the 4 times table helps build confidence and lays the foundation for learning higher multiplication tables.",
    },
    {
      question: "How does MathTechLab help with Times Tables practice?",
      answer:
        "MathTechLab provides interactive exercises, audio support, and drag-and-drop features to make learning engaging and fun!",
    },
    {
      question: "Can I download and print the 4 Times Table?",
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
        title="Build Confidence with the 4 Times Table"
        description={
          <>
            The <b>4 Times Table </b>lays the groundwork for understanding
            even-number multiplication. Our platform transforms traditional
            memorization into a joyful and interactive practice session.
          </>
        }
        points={[
          "Visual Memory Aids – Bright visuals and sounds support active recall.",
          "Interactive Mode – Practice problems in shuffled order for challenge and fun.",
          "Smart Hints – Receive instant corrections and guidance while solving.",
          "Fun Math Games – Drag and drop the right numbers to complete equations.",
          "Cross-Device Compatible – Enjoy the 4 Times Table experience on desktop, mobile, or tablet.",
          "Downloadable Resources – Get a printable 4 Times Table for home study.",
        ]}
        imageUrl={timestable}
        imagealt="4 times table"
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
