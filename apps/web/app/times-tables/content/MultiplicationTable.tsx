import Image from "next/image";
import multiplicationTable from "../../../public/static/image/timesTable/multiplicationTables.webp";

const MultiplicationTable = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <Image
          src={multiplicationTable}
          alt="Times Table"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Styled Title */}
      <div className="text-2xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-500 to-green-400 mb-5">
        Practice Your Multiplication Tables: Essential Math Skills
      </div>

      {/* Content Section */}
      <div>
        <div className="font-medium mb-5">
          <span>
            Multiplication tables are the building blocks of mathematical
            fluency and numerical literacy. Our colorful, easy-to-read chart
            provides a comprehensive visual aid to help students of all ages
            master these essential math facts. Whether you’re just beginning or
            diving into more advanced mathematics, a solid understanding of
            multiplication tables will unlock success and boost confidence.
          </span>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-3">
            Why Regular Multiplication Practice Matters:
          </h2>
          <ul className="list-inside list-disc pl-5  text-gray-00">
            <li>
              <strong>Improved mental calculation speed</strong> - Solve
              problems up to 4 times faster.
            </li>
            <li>
              <strong>Enhanced problem-solving abilities</strong> - Reduced
              cognitive load for complex problems.
            </li>
            <li>
              <strong>Better performance in advanced math</strong> - Strong
              foundation for algebra, fractions, and division.
            </li>
            <li>
              <strong>Increased confidence in mathematics</strong> - Mastering
              multiplication boosts self-esteem.
            </li>
            <li>
              <strong>Time-saving during tests</strong> - Faster recall leaves
              more time for challenging questions.
            </li>
          </ul>
        </div>

        {/* How to Use Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-3">
            How to Use Our Multiplication Tables Chart:
          </h2>
          <ul className="list-inside list-disc pl-5  text-gray-00">
            <li>
              <strong>Identify patterns:</strong> Look for similarities within
              and across multiplication tables.
            </li>
            <li>
              <strong>Visualize relationships:</strong> Connect numbers and
              visualize multiplication concepts.
            </li>
            <li>
              <strong>Practice quick recall:</strong> Improve speed and accuracy
              with regular practice.
            </li>
            <li>
              <strong>Build confidence:</strong> Consistent review leads to
              mastery.
            </li>
          </ul>
        </div>

        {/* Effective Learning Strategies */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-3">
            Effective Learning Strategies:
          </h2>
          <ul className="list-inside list-disc pl-5  text-gray-00">
            <li>
              <strong>Daily practice sessions:</strong> Even just 5-10 minutes
              daily shows remarkable improvement.
            </li>
            <li>
              <strong>Gamification:</strong> Make practice fun with challenges
              and friendly competitions.
            </li>
            <li>
              <strong>Pattern recognition:</strong> Encourage students to spot
              patterns within the tables.
            </li>
            <li>
              <strong>Real-world applications:</strong> Relate multiplication to
              real-life scenarios to deepen understanding.
            </li>
            <li>
              <strong>Progressive learning:</strong> Focus on mastering one
              table before moving on to the next.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MultiplicationTable;
