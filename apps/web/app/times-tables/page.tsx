import TimesTableCard from "./content/TimesTableCard";
const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl">MathTechLab Times Table</h1>
        <h2>Where Numbers Multiply and Minds Grow </h2>
      </div>
      <div className="relative text-lg font-bold text-white py-4 mt-7 inline-block">
        <div
          className="bg-gradient-to-b from-indigo-800 via-purple-800 to-indigo-700 md:px-10 px-5 md:py-5  text-center text-white font-bold relative"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          MathTechLab Times Table – Learn and Master Multiplication Easily
        </div>
      </div>

      <div className="text-left md:w-[700px] mt-2">
        Welcome to MathTechLab Times Table, where numbers multiply, and minds
        grow! Our interactive platform makes mastering multiplication easy and
        fun. Whether you're a student, parent, or educator, you'll find engaging
        tools, practice exercises, and learning techniques designed to boost
        math confidence. Explore step-by-step guides, challenges, and quizzes to
        sharpen your skills. Start your multiplication journey today and unlock
        the power of numbers with MathTechLab!
      </div>
      <TimesTableCard />
    </>
  );
};

export default Page;
