import TimesTableQuiz from "../uitils/timeTableQuiz/TimeTableQuiz";

const TimesTableQuiz1 = () => {
  return (
    <div className="container mx-auto  pt-[60px]">
      <h2 className="text-lg md:text-3xl  font-bold  pb-3">
        Interactive 6 Times Table Quiz
      </h2>
      <p className="text-gray-700 font-medium lg:w-[800px] md:w-[700px] leading-relaxed mb-6">
        Test your multiplication skills with this fun and interactive{" "}
        <span className="text-indigo-700 font-semibold">
          6 Times Table Quiz
        </span>
        ! This online math quiz helps children master basic multiplication facts
        through engaging multiple-choice questions. Improve your{" "}
        <strong>calculation speed</strong>, boost <strong>math accuracy</strong>
        , and track your learning progress in real-time — perfect for students,
        teachers, and parents looking for effective{" "}
        <span className="text-purple-700 font-semibold">
          times table practice
        </span>
        .
      </p>

      <div className="w-full mx-auto">
        <TimesTableQuiz tableNumber={6} />
      </div>

      <div className="mt-10  mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          How to Use Interactive 6 Times Table Quiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-indigo-700 font-semibold text-lg mb-2">
              🧮 Answer 12 Questions
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Think carefully and choose the correct answer for each of the 12
              multiplication questions based on the{" "}
              <strong>6 Times Table</strong>. Every click counts!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-pink-700 font-semibold text-lg mb-2">
              📊 Track Your Progress
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Watch your <strong>progress bar</strong> fill up as you move
              through each question. Stay motivated and see how close you are to
              finishing!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-blue-700 font-semibold text-lg mb-2">
              ✅ See Correct & Wrong Answers
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Instantly check how many questions you got right and wrong. Learn
              from mistakes and strengthen your multiplication memory.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-emerald-700 font-semibold text-lg mb-2">
              🏆 Build Confidence
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              With consistent practice, you’ll boost your speed, accuracy, and
              confidence in solving multiplication problems with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesTableQuiz1;
