import Card from "./Card";

const TimesTableCard = () => {
  return (
    <>
      <div>
        <div className="pt-6 font-bold">
          Which multiplication table would you like to master?
        </div>
        <div className="flex md:flex-row flex-col  gap-6 pt-2 ">
          <Card
            title="1 Times Table"
            link="/1-times-table"
            bgColor="bg-yellow-700"
          />
          <Card
            title="2 Times Table"
            link="/2-times-table"
            bgColor="bg-blue-500"
          />
          <Card
            title="3 Times Table"
            link="/3-times-table"
            bgColor="bg-green-700"
          />
          <Card
            title="4 Times Table"
            link="/4-times-table"
            bgColor="bg-purple-700"
          />
        </div>
      </div>
    </>
  );
};

export default TimesTableCard;
