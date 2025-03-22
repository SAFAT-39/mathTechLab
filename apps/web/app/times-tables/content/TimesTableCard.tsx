import Card from "./Card";

const tables = [
  { title: "1 Times Table", link: "/1-times-table", bgColor: "bg-yellow-700" },
  { title: "2 Times Table", link: "/2-times-table", bgColor: "bg-blue-700" },
  { title: "3 Times Table", link: "/3-times-table", bgColor: "bg-green-700" },
  { title: "4 Times Table", link: "/4-times-table", bgColor: "bg-purple-700" },
  { title: "5 Times Table", link: "/5-times-table", bgColor: "bg-red-700" },
  { title: "6 Times Table", link: "/6-times-table", bgColor: "bg-indigo-700" },
  { title: "7 Times Table", link: "/7-times-table", bgColor: "bg-teal-700" },
  { title: "8 Times Table", link: "/8-times-table", bgColor: "bg-pink-700" },
  { title: "9 Times Table", link: "/9-times-table", bgColor: "bg-gray-700" },
  {
    title: "10 Times Table",
    link: "/10-times-table",
    bgColor: "bg-orange-700",
  },
  { title: "11 Times Table", link: "/11-times-table", bgColor: "bg-cyan-700" },
  {
    title: "12 Times Table",
    link: "/12-times-table",
    bgColor: "bg-violet-700",
  },
];

const TimesTableCard = () => {
  return (
    <div className="py-6 ">
      <h2 className="text-xl font-bold">
        Which multiplication table would you like to master?
      </h2>
      <div className="flex flex-wrap md:flex-row flex-col gap-4 pt-2 md:items-start items-center">
        {tables.map((table, index) => (
          <Card
            key={index}
            title={table.title}
            link={table.link}
            bgColor={table.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TimesTableCard;
