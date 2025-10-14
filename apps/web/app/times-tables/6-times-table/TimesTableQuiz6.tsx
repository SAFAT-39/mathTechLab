import TimesTableQuiz from "../uitils/timeTableQuiz/TimeTableQuiz";

const TimesTableQuiz6 = () => {
  return (
    <div className="container mx-auto  pt-[60px]">
      <h2 className="text-lg md:text-2xl  font-bold  mb-1">
        Interactive 6 Times Table Quiz
      </h2>
      <p className="text-gray-600 font-medium md:w-[700px] mb-3">
        Mastering multiplication tables is a fundamental math skill that helps
        children develop number fluency and build a strong foundation for more
        advanced mathematics.
      </p>
      <p className="mb-2 text-gray-600">
        Regular practice with interactive quizzes like this one helps students:
      </p>
      <ul className="list-disc pl-6 mb-7 space-y-2 text-gray-600">
        <li>Improve calculation speed and accuracy</li>
        <li>Build confidence in their math abilities</li>
        <li>Develop problem-solving skills</li>
        <li>Prepare for more advanced mathematical concepts</li>
        <li>Make learning fun through gamification</li>
      </ul>

      <div className=" mx-auto">
        <TimesTableQuiz tableNumber={6} />
      </div>
      <h2 className="text-lg md:text-2xl font-bold mb-1 mt-7">
        How to Use This 6 Times Table Quiz
      </h2>
      <p className="mb-4 md:w-[700px] text-gray-600">
        This interactive quiz is designed to help students practice their times
        tables in an engaging way. Simply select the correct answer for each
        multiplication problem. The quiz tracks your progress and provides
        immediate feedback.
      </p>
      <p className="md:w-[700px] text-gray-600 ">
        Teachers and parents can easily customize the quiz by changing the table
        number and question count to match the student's learning level.
      </p>
    </div>
  );
};

export default TimesTableQuiz6;
