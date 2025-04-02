import TimesTableDescription from "../uitils/description/TimesTableDescription";
import FaqsAll from "../uitils/faqs/FaqsAll";
import timestable from "../../../public/static/image/allTimesTable/1-times-table (2).png";

const DescriptionFAQs = () => {
  return (
    <div className="space-y-12">
      <TimesTableDescription
        title="Why Practice the 1 Times Table on MathTechLab?"
        description="This is the perfect place to practice the 1 Times Table. At MathTechLab, we provide an interactive and engaging way to master the 1 times table with visual learning, audio support, and hands-on activities. Unlike traditional rote memorization, our platform offers a multi-sensory approach that enhances understanding and retention."
        points={[
          "Interactive Learning – Our platform provides step-by-step guidance with audio playback to help users visualize, listen, and repeat equations.",
          "Engaging Practice Methods – Users can practice in sequential and shuffled order to reinforce learning dynamically.",
          "Drag-and-Drop Games – Improve problem-solving skills by matching colorful number tiles to their correct equations.",
          "Instant Feedback – Get real-time hints and corrections to ensure a fun and frustration-free learning experience.",
          "Downloadable Resources – Access and download our beautifully designed 1 Times Table chart for offline practice.",
        ]}
        imageUrl={timestable}
        downloadText="Download"
      />
      <FaqsAll />
    </div>
  );
};

export default DescriptionFAQs;
