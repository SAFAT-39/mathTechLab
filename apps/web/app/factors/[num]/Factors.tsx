import { NumProps } from "./type";
import { getFactors } from "./utils";

const Factors = ({ num }: NumProps) => {
  const factors = getFactors(num);
  const factorsString = (sign: number = 1) => {
    const facs = factors.map((f) => f * sign);
    if (!facs || facs.length === 0) return "";

    if (facs.length === 1) return `${facs[0]}`;

    const allButLast = facs.slice(0, -1).join(", ");
    const last = facs[facs.length - 1];

    return `${allButLast} and ${last}`;
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-700">What are the Factors of {num}?</h2>
      <p className="text-gray-700 leading-relaxed">
        There are {factors.length} factors of {num}. The factors of{" "}
        {num} are {factorsString()}. Factors can be negative. The negative factors are{" "}
        {factorsString(-1)}. All of these numbers divides {num} completely.{" "}
        {factors.length > 2
          ? `${num} is a composite number because it has other factors besides 1 and ${num}.`
          : `${num} is a prime number because it has no other factors than 1 and ${num}.`}
      </p>
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 text-center">
        <p className="text-lg font-semibold text-purple-700">
          Factors of {num}: {factorsString()}
        </p>
      </div>
    </section>
  );
};

export default Factors;
