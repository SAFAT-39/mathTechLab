// import Image from "next/image";
// import multiplicationTable from "../../../public/static/image/timesTable/multiplicationTables.webp";

// const MultiplicationTable = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center mb-12">
//         <Image
//           src={multiplicationTable}
//           alt="Times Table"
//           className="rounded-lg shadow-md w-full"
//         />
//       </div>

//       {/* Styled Title */}
//       <div className="text-2xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-500 to-green-400 mb-5">
//         Practice Your Multiplication Tables: Essential Math Skills
//       </div>

//       {/* Content Section */}
//       <div>
//         <div className="font-medium mb-5">
//           <span>
//             Multiplication tables are the building blocks of mathematical
//             fluency and numerical literacy. Our colorful, easy-to-read chart
//             provides a comprehensive visual aid to help students of all ages
//             master these essential math facts. Whether you’re just beginning or
//             diving into more advanced mathematics, a solid understanding of
//             multiplication tables will unlock success and boost confidence.
//           </span>
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-8">
//           <h2 className="text-xl font-bold text-blue-600 mb-3">
//             Why Regular Multiplication Practice Matters:
//           </h2>
//           <ul className="list-inside list-disc pl-5  text-gray-00">
//             <li>
//               <strong>Improved mental calculation speed</strong> - Solve
//               problems up to 4 times faster.
//             </li>
//             <li>
//               <strong>Enhanced problem-solving abilities</strong> - Reduced
//               cognitive load for complex problems.
//             </li>
//             <li>
//               <strong>Better performance in advanced math</strong> - Strong
//               foundation for algebra, fractions, and division.
//             </li>
//             <li>
//               <strong>Increased confidence in mathematics</strong> - Mastering
//               multiplication boosts self-esteem.
//             </li>
//             <li>
//               <strong>Time-saving during tests</strong> - Faster recall leaves
//               more time for challenging questions.
//             </li>
//           </ul>
//         </div>

//         {/* How to Use Section */}
//         <div className="mb-8">
//           <h2 className="text-xl font-bold text-blue-600 mb-3">
//             How to Use Our Multiplication Tables Chart:
//           </h2>
//           <ul className="list-inside list-disc pl-5  text-gray-00">
//             <li>
//               <strong>Identify patterns:</strong> Look for similarities within
//               and across multiplication tables.
//             </li>
//             <li>
//               <strong>Visualize relationships:</strong> Connect numbers and
//               visualize multiplication concepts.
//             </li>
//             <li>
//               <strong>Practice quick recall:</strong> Improve speed and accuracy
//               with regular practice.
//             </li>
//             <li>
//               <strong>Build confidence:</strong> Consistent review leads to
//               mastery.
//             </li>
//           </ul>
//         </div>

//         {/* Effective Learning Strategies */}
//         <div>
//           <h2 className="text-xl font-bold text-blue-600 mb-3">
//             Effective Learning Strategies:
//           </h2>
//           <ul className="list-inside list-disc pl-5  text-gray-00">
//             <li>
//               <strong>Daily practice sessions:</strong> Even just 5-10 minutes
//               daily shows remarkable improvement.
//             </li>
//             <li>
//               <strong>Gamification:</strong> Make practice fun with challenges
//               and friendly competitions.
//             </li>
//             <li>
//               <strong>Pattern recognition:</strong> Encourage students to spot
//               patterns within the tables.
//             </li>
//             <li>
//               <strong>Real-world applications:</strong> Relate multiplication to
//               real-life scenarios to deepen understanding.
//             </li>
//             <li>
//               <strong>Progressive learning:</strong> Focus on mastering one
//               table before moving on to the next.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MultiplicationTable;
import Image from "next/image";
import multiplicationTable from "../../../public/static/image/timesTable/multiplicationTables.webp";

const MultiplicationTable = () => {
  return (
    <>
      {/* Hero Image */}
      <div className="flex justify-center items-center mb-12">
        <Image
          src={multiplicationTable}
          alt="Colorful Multiplication Tables Chart"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Styled Title */}
      <div className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-green-600 to-lime-600 bg-clip-text text-transparent mb-8">
        Master Your Multiplication Tables with Smart Practice
      </div>

      {/* Content Section */}
      <div className="mb-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-md p-6 border-l-4 border-indigo-600">
        <p className="text-gray-800 leading-relaxed text-lg font-medium">
          Multiplication tables are the{" "}
          <strong>foundation of mathematical understanding</strong> and an
          essential skill every student needs to master. Our{" "}
          <strong>interactive and colorful multiplication chart</strong> helps
          learners of all ages visualize number patterns and develop confidence
          through fun, engaging practice. It’s not just about memorizing — it’s
          about understanding how numbers connect.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed text-lg font-medium">
          One of the simplest <strong>multiplication tricks</strong> is to use
          what you already know. For instance, if you find{" "}
          <strong>6 × 7</strong> tricky, try calculating{" "}
          <strong>5 × 7 = 35</strong> first, then simply add{" "}
          <strong>1 × 7 = 7</strong> to get <strong>42</strong>. The same works
          in reverse: to find <strong>4 × 7</strong>, think of{" "}
          <strong>5 × 7 = 35</strong> and subtract <strong>1 × 7 = 7</strong> to
          get <strong>28</strong>. These small shortcuts build number sense and
          make learning multiplication faster, smarter, and more enjoyable.
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed text-lg font-medium">
          By combining visual learning, pattern recognition, and daily practice,
          you’ll discover that multiplication isn’t just math — it’s a skill
          that strengthens logic, memory, and problem-solving abilities used in
          everyday life.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Why Regular Multiplication Practice Matters
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" shadow-lg rounded-2xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-green-700">
              Improves Mental Math Speed
            </h3>
            <p className="text-gray-700 mt-2">
              Practicing multiplication regularly strengthens your{" "}
              <strong>mental arithmetic</strong> and helps you solve problems up
              to <strong>four times faster</strong>. This quick recall becomes
              especially useful in exams and real-world tasks like budgeting or
              shopping.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700">
              Builds a Strong Foundation for Advanced Math
            </h3>
            <p className="text-gray-700 mt-2">
              Understanding multiplication deeply prepares students for{" "}
              <strong>algebra, fractions, and division</strong>. Once you’re
              fluent in your times tables, solving higher-level problems feels
              easier and more intuitive.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-purple-700">
              Boosts Confidence and Motivation
            </h3>
            <p className="text-gray-700 mt-2">
              When children realize they can calculate quickly, it builds{" "}
              <strong>self-esteem</strong> and encourages them to take on more
              challenging problems. Success in multiplication leads to success
              in all areas of math.
            </p>
          </div>

          <div className=" shadow-lg rounded-2xl p-6 border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-amber-700">
              Sharpens Logical and Analytical Thinking
            </h3>
            <p className="text-gray-700 mt-2">
              Multiplication strengthens <strong>pattern recognition</strong>{" "}
              and <strong>reasoning skills</strong>. By noticing how numbers
              relate across tables, learners naturally develop sharper logical
              thinking for problem-solving in everyday scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* Effective Learning Strategies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Effective Learning Strategies for Multiplication Tables
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-white shadow-md rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-indigo-700">
              Practice a Little Every Day
            </h3>
            <p className="text-gray-700 mt-2">
              Consistent, short sessions of <strong>5–10 minutes daily</strong>{" "}
              are more effective than long, irregular study times. Regular
              repetition helps move facts from short-term to long-term memory.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white shadow-md rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-green-700">
              Use Patterns and Number Tricks
            </h3>
            <p className="text-gray-700 mt-2">
              Recognizing <strong>patterns within multiplication tables</strong>{" "}
              makes learning faster and more meaningful. For instance, if you
              know <strong>5 × 7 = 35</strong>, it’s easy to find{" "}
              <strong>6 × 7</strong> by adding another 7 or{" "}
              <strong>4 × 7</strong> by subtracting 7 — simple, effective, and
              memorable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white shadow-md rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-pink-700">
              Make Learning Fun with Challenges
            </h3>
            <p className="text-gray-700 mt-2">
              Turn math into a game! Compete with friends or try to beat your
              own best time. <strong>Gamified learning</strong> keeps students
              engaged and motivated to improve their multiplication recall.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-white shadow-md rounded-2xl p-6 border border-yellow-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-yellow-700">
              Connect Math to Real Life
            </h3>
            <p className="text-gray-700 mt-2">
              Encourage learners to apply multiplication in{" "}
              <strong>daily situations</strong> — like calculating total costs
              at a store, arranging items in groups, or measuring ingredients
              while cooking. It reinforces understanding through real-world
              examples.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiplicationTable;
