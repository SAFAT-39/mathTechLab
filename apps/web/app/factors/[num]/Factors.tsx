import { NumProps } from "./type";
import { getFactors } from "./utils";

const factorDescriptions = [
  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `The factors of ${num} are the whole numbers that divide it exactly without leaving a remainder. These numbers are ${factorsString()}. When we include negative values, the complete set becomes ${factorsString(-1)}. Each of these numbers can multiply with another to give ${num}. In mathematics, factors help us understand how a number is built — whether it’s made up of smaller numbers or stands alone as a prime. ${factors.length > 2 ? `${num} can be divided by other numbers besides 1 and itself, so it’s considered a composite number.` : `${num} cannot be divided evenly by any other numbers except 1 and itself, which makes it a prime number.`}`,

  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `When we talk about the factors of ${num}, we’re referring to numbers that divide it evenly. These are ${factorsString()}. If we also consider negative divisors, we get ${factorsString(-1)}. Each factor pairs with another to make ${num}. This idea of factorization is key in number theory, it tells us whether ${num} is prime or composite. ${factors.length > 2 ? `Because ${num} has several factors, it’s classified as a composite number, meaning it is built from smaller integers.` : `Since ${num} has only two factors (1 and itself), it’s recognized as a prime number one of the building blocks of all numbers.`}`,

  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `Factors of ${num} are the numbers that divide it perfectly, leaving no remainder. The positive factors are ${factorsString()}, and if we include negatives, we get ${factorsString(-1)}. Each factor fits into ${num} an exact number of times. Understanding factors helps identify whether a number is simple like a prime, or made up of smaller parts like a composite. ${factors.length > 2 ? `${num} is composite because it’s made from the multiplication of smaller whole numbers.` : `${num} is prime because no other whole numbers divide it evenly except 1 and itself.`}`,

  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `The list of factors for ${num} shows which numbers divide it evenly. These positive factors are ${factorsString()}, and the negative ones are ${factorsString(-1)}. Each factor reveals something about the structure of ${num}. Factors are used in many areas of math from simplifying fractions to finding greatest common divisors. ${factors.length > 2 ? `${num} turns out to be a composite number since it’s divisible by more than just 1 and itself.` : `${num} turns out to be a prime number because only 1 and ${num} divide it exactly.`}`,

  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `Every number has a unique set of factors that tell us how it’s composed. For ${num}, those numbers are ${factorsString()}, and including negatives gives us ${factorsString(-1)}. Each factor divides ${num} completely. This concept is essential for understanding divisibility and prime numbers in mathematics. ${factors.length > 2 ? `${num} is classified as a composite number since it has several divisors other than 1 and itself.` : `${num} is classified as a prime number because it has no divisors other than 1 and itself.`}`,

  (num: number, factors: number[], factorsString: (sign?: number) => string) =>
    `The factors of ${num} are the numbers that can divide it exactly — with no remainder left behind. Those numbers are ${factorsString()}. Their negative counterparts are ${factorsString(-1)}. Each factor contributes to the mathematical makeup of ${num}. Knowing factors helps you understand multiplication, division, and number properties. ${factors.length > 2 ? `${num} is a composite number because it can be expressed as a product of smaller integers.` : `${num} is a prime number because it cannot be broken down into smaller whole numbers.`}`,
];

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

  const randomDescription =
    factorDescriptions[Math.floor(Math.random() * factorDescriptions.length)];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-700">
        What are the Factors of {num}?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {randomDescription(num, factors, factorsString)}
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
