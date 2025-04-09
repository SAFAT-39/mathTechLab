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
    <section className="text-base space-y-2">
      <h2 className="text-2xl font-semibold">What are the Factors of {num}?</h2>
      <p>
        There are {factors.length} factors of {num}. The positive factors of{" "}
        {num} are {factorsString()}, while it's negative factors include{" "}
        {factorsString(-1)}. All of these numbers divides {num} completely.{" "}
        {factors.length > 2
          ? `${num} is a composite number because it has other factors besides 1 and ${num}.`
          : `${num} is a prime number because it has no other factors than 1 and ${num}.`}
      </p>
      <p className="p-2 w-full border rounded bg-gray-200 text-center">
        <strong>
          Factors of {num}: {factorsString()}.
        </strong>
      </p>
    </section>
  );
};

export default Factors;
