import { NumProps } from "./type";

const Introduction = ({ num }: NumProps) => {
  return (
    <section className="text-base">
      <p>
        The <strong>factors of {num}</strong> are whole numbers that divide it
        exactly without leaving a remainder. They appear in positive and
        negative pairs, like (1, {num}) or (-1, -{num}), and are always
        integers, never fractions or decimals. You can find them using methods
        such as <strong>division</strong> or{" "}
        <strong>prime factorization</strong>. Learning about factors helps build
        a foundation for understanding divisibility, multiples, and prime
        numbers. In this guide, we’ll explore the different types of factors of{" "}
        {num}, including all <strong>positive factors</strong>,
        <strong> factor pairs</strong>, and the{" "}
        <strong>prime factorization</strong> of {num} with step-by-step
        explanations and examples.
      </p>
    </section>
  );
};

export default Introduction;
