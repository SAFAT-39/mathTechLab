import Content from "./content";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-3 md:mt-4 ">
        <h1 className="ltext-4xl md:text-5xl font-extrabold text-purple-700 text-center">
          Multiplication Tables
        </h1>
        <h2 className="text-center mt-2 lg:w-lg ">
          Learn and practice multiplication tables easily with free charts,
          quizzes, and engaging math practice.
        </h2>
      </div>
      {/* <div className="relative text-xl  text-white pb-4 mt-7 inline-block">
        <div
          className="bg-gradient-to-b from-indigo-800 via-purple-800 to-indigo-700 md:px-10 px-5 md:py-5 text-center text-white font-bold relative"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          Practice Multiplication Tables Online – Learn 1 to 12 Times Tables
          Easily
        </div>
      </div> */}
      <div className="text-2xl font-bold pb-2 mt-7 ">
        Learn and Practice Multiplication Tables Online
      </div>

      <div className="text-lg  mb-2">
        {/* Welcome to MathTechLab Times Tables, where numbers multiply, and minds
        grow! Our interactive platform makes mastering multiplication easy and
        fun. Whether you're a student, parent, or educator, you'll find engaging
        tools, practice exercises, and learning techniques designed to boost
        math confidence. Explore step-by-step guides, challenges, and quizzes to
        sharpen your skills. Start your multiplication journey today and unlock
        the power of numbers with MathTechLab! */}
        MathTechLab Times Tables makes it easy to learn, practice, and master
        multiplication tables. Simply click one of the times table to explore
        interactive lessons, practice exercises, printable charts, and quizzes
        designed to make learning multiplication simple and fun. Build strong
        math skills and enjoy a smarter way to study with{" "}
        <Link href={"/"} className="font-bold text-blue-700">
          MathTechLab
        </Link>
        .
      </div>
      <Content />
    </>
  );
};

export default Page;
