import Link from "next/link";

interface CardProps {
  title: string;
  link: string;
  bgColor: string; // Pass Tailwind colors like "bg-blue-500"
}

const Card: React.FC<CardProps> = ({ title, link, bgColor }) => {
  return (
    <Link href={link}>
      <div
        className={`md:w-[200px] w-[250px] text-center  p-3 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-200 ${bgColor}`}
      >
        <h3 className="text-xl font-extrabold text-white drop-shadow-lg tracking-wide">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
