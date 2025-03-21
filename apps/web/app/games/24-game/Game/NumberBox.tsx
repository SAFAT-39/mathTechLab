import React from "react";
import Fraction from "./Fraction";
import { infinity } from ".";

interface NumberBoxProps {
  index: number;
  num: Fraction;
  selected: boolean;
  onClick: (index: number, num: Fraction) => void;
}

const NumberBox = ({ index, num, selected, onClick }: NumberBoxProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents unintended default behaviors (optional)

    if (num.numerator === infinity) return;
    onClick(index, num);
  };

  const getValue = () => {
    if (num.numerator === infinity) return "";
    if (num.denominator === 1) return num.numerator.toString();
    return num.toString();
  };

  const getStyle = () => {
    if (num.numerator === infinity) return "";
    return selected
      ? "border-6 border-green-800 text-green-800"
      : "border-2 border-green-600 hover:border-green-800 active:border-green-800 text-green-600";
  };

  return (
    <button
      className={`${getStyle()} flex flex-col items-center justify-center h-[110px] font-extrabold text-[40px] rounded`}
      onClick={handleClick}
    >
      <p>{getValue()}</p>
    </button>
  );
};

export default NumberBox;
