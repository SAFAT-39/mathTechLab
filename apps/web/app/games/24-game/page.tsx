import Game from "./Game";

const Page = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1>24 Math Game</h1>
        <h2>
          Use four numbers and basic math operations to make 24! Can you solve
          it?
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Game />
      </div>
    </section>
  );
};

export default Page;
