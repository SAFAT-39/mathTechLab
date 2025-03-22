import Game from "./Game";

const Page = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl">24 Game – A Fun Math Challenge</h1>
        <h2 className="text-center md:w-[600px] font-semibold">
          The 24 Game is a fun and challenging math puzzle where you use four
          numbers and basic arithmetic operations (+, −, ×, ÷) to make 24. Test
          your problem-solving skills and see how fast you can find a solution!
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center px-2 py-5">
        <Game />
      </div>
    </section>
  );
};

export default Page;
