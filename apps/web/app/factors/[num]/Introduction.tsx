import { NumProps } from "./type";

const Introduction = ({ num }: NumProps) => {
  return (
    <section className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        The <strong className="font-bold">factors of {num}</strong> are whole numbers that divide it
        exactly without leaving a remainder. They appear in positive and
        negative pairs, like (1, {num}) or (-1, -{num}), and are always
        integers, never fractions or decimals. You can find them using methods
        such as <strong className="font-bold">division</strong> or{" "}
        <strong className="font-bold">prime factorization</strong>. Learning about factors helps build
        a foundation for understanding divisibility, multiples, and prime
        numbers. In this guide, we'll explore the different types of factors of{" "}
        {num}, including all <strong className="font-bold">positive factors</strong>,{" "}
        <strong className="font-bold">factor pairs</strong>, and the{" "}
        <strong className="font-bold">prime factorization</strong> of {num} with step-by-step
        explanations and examples.
      </p>
    </section>
  );
};

export default Introduction;
