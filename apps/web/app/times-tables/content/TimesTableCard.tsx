import Card from "./Card";
import Image from "next/image";
import learnmultiplication from "../../../public/static/image/timesTable/learnmultiplication.png";

const tables = [
  {
    title: "1 Times Table",
    link: "/times-tables/1-times-table",
    bgColor: "bg-yellow-700",
  },
  {
    title: "2 Times Table",
    link: "/times-tables/2-times-table",
    bgColor: "bg-blue-700",
  },
  {
    title: "3 Times Table",
    link: "/times-tables/3-times-table",
    bgColor: "bg-green-700",
  },
  {
    title: "4 Times Table",
    link: "/times-tables/4-times-table",
    bgColor: "bg-purple-700",
  },
  {
    title: "5 Times Table",
    link: "/times-tables/5-times-table",
    bgColor: "bg-red-700",
  },
  {
    title: "6 Times Table",
    link: "/times-tables/6-times-table",
    bgColor: "bg-indigo-700",
  },
  {
    title: "7 Times Table",
    link: "/times-tables/7-times-table",
    bgColor: "bg-teal-700",
  },
  {
    title: "8 Times Table",
    link: "/times-tables/8-times-table",
    bgColor: "bg-pink-700",
  },
  {
    title: "9 Times Table",
    link: "/times-tables/9-times-table",
    bgColor: "bg-gray-700",
  },
  {
    title: "10 Times Table",
    link: "/times-tables/10-times-table",
    bgColor: "bg-orange-700",
  },
  {
    title: "11 Times Table",
    link: "/times-tables/11-times-table",
    bgColor: "bg-cyan-700",
  },
  {
    title: "12 Times Table",
    link: "/times-tables/12-times-table",
    bgColor: "bg-violet-700",
  },
];

const TimesTableCard = () => {
  return (
    <div className="py-12 ">
      <h2 className="text-xl font-bold ">
        Which multiplication table would you like to master?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-3 md:items-start items-center ">
        {tables.map((table, index) => (
          <Card
            key={index}
            title={table.title}
            link={table.link}
            bgColor={table.bgColor}
          />
        ))}
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-10 pt-6 mt-6">
        <div className=" basis-1/2 ">
          <div className="text-2xl font-bold pb-5 ">
            Fun and interactive way to learn 1–12 Multiplication Tables
          </div>
          <p className="pb-3">
            Choose any <b>1 to 12 Times Table</b> and start mastering your math
            skills step by step. Begin with{" "}
            <b>Times Table Practice in Sequence</b> to understand each
            multiplication fact clearly, then challenge yourself with the{" "}
            <b>Shuffled Times Table Quiz</b> to test your memory and accuracy.
          </p>
          <p className="pb-3">
            Take your learning even further with our{" "}
            <b>
              Interactive Times Table Games — drag and drop the colorful number
              tiles
            </b>{" "}
            to match each equation correctly and make learning truly hands-on!
            Every table, from 1 Times Table to 12 Times Table, includes an{" "}
            <b>interactive quiz</b> to boost your confidence and make math
            practice exciting.
          </p>{" "}
          <p className="pb-3">
            Need a quick reference? You can{" "}
            <b>download each Times Table image</b> individually for offline
            study, printing, or classroom use.
          </p>
          <p>
            Start your journey today —{" "}
            <b>
              learn, play, and master all your times tables with MathTechLab!
            </b>
          </p>
        </div>
        <div className="w-full basis-1/2 ">
          <Image
            src={learnmultiplication}
            alt={"Fun and interactive way to learn 1–12 Multiplication Tables"}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TimesTableCard;
