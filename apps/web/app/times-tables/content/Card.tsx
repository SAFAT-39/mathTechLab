import Link from "next/link";
import { ArrowRight } from "lucide-react"; // import icon

interface CardProps {
  title: string;
  link: string;
  bgColor: string; // Pass Tailwind colors like "bg-blue-500"
}

const Card: React.FC<CardProps> = ({ title, link, bgColor }) => {
  return (
    <Link href={link}>
      <div
        className={`md:w-[250px] w-[250px] flex justify-center items-center gap-2 text-center  p-3 py-6 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer  bg-purple-600 hover:bg-purple-800 active:bg-purple-800 `}
      >
        <h3 className="text-xl font-extrabold text-white drop-shadow-lg tracking-wide">
          {title}
        </h3>
        <ArrowRight className="text-white w-5 h-5" />
      </div>
    </Link>
  );
};

export default Card;

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// interface CardProps {
//   title: string;
//   link: string;
//   bgColor: string; // Pass Tailwind colors like "bg-blue-500"
// }

// const Card: React.FC<CardProps> = ({ title, link, bgColor }) => {
//   return (
//     <Link href={link}>
//       <div
//         className={`md:w-[250px] w-[250px] flex items-center justify-center gap-2 text-center p-4 py-6 rounded-xl font-semibold text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out cursor-pointer ${bgColor} hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] active:scale-95`}
//       >
//         <h3 className="text-xl font-extrabold tracking-wide">{title}</h3>
//         <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//       </div>
//     </Link>
//   );
// };

// export default Card;
