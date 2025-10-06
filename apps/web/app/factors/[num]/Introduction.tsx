import { NumProps } from "./type";

const Introduction = ({ num }: NumProps) => {
  const versions = [
    (
      <p className="text-gray-700 leading-relaxed">
        The <strong className="font-bold">factors of {num}</strong> are the whole numbers that divide {num} exactly, leaving no remainder.
        These numbers always come in pairs, like (1, {num}) or (-1, -{num}), and both positive and negative factors are possible.
        Factors are always integers, not fractions or decimals. You can find them through simple division or prime factorization.
        Understanding the factors of {num} builds a strong base in number theory and helps in learning divisibility, multiples,
        and prime numbers. In this article, we’ll explore all positive factors, factor pairs, and the prime factorization of {num}
        with examples to make it easy to follow.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        The <strong>factors of {num}</strong> are numbers that divide {num} evenly without leaving any remainder.
        They appear in pairs, for instance, (1, {num}), (-1, {-num}), and so on. Both positive and negative pairs exist, such as (-1, -{num}).
        These factors are always whole numbers. You can determine them by dividing {num} by smaller integers or by using prime factorization.
        Knowing the factors of {num} is important for understanding divisibility rules, multiples, and prime properties.
        Below, we’ll go through all factors, factor pairs, and the prime factorization of {num} step by step.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        In mathematics, <strong>factors of {num}</strong> are numbers that multiply together to make {num}.
        For example, 1 × {num} = {num}, so both 1 and {num} are factors. Every number has at least two factors: 1 and itself.
        These factors always divide {num} completely without leaving a remainder. To find them, you can use basic division
        or break the number into prime factors. Learning about the factors of {num} helps with understanding multiplication,
        greatest common factors (GCF), and prime factorization. Let’s explore all the factors, factor pairs, and prime factors
        of {num} with clear examples.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        The <strong>factors of {num}</strong> are integers that divide {num} completely, leaving no remainder.
        These factors can be positive or negative and usually come in pairs like (1, {num}) and (-1, -{num}).
        Finding factors helps you understand how numbers are built and related to each other.
        You can discover the factors of {num} by testing smaller numbers or using prime factorization methods.
        Learning this concept is useful for topics such as multiples, least common multiples (LCM), and prime numbers.
        Here, you’ll find all factors, factor pairs, and the prime factorization of {num} explained simply.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        When we talk about the <strong>factors of {num}</strong>, we mean the whole numbers that divide {num} exactly.
        They are the building blocks of {num} and always come in matching pairs, one small and one large, like (1, {num}).
        Factors never include fractions or decimals. You can find them by dividing {num} by smaller integers until the division
        is exact. Understanding the factors of {num} makes it easier to learn about primes, multiples, and greatest common divisors.
        In this guide, we’ll show the list of all positive factors, factor pairs, and the prime factorization of {num} in an easy-to-read format.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        The <strong>factors of {num}</strong> are numbers that divide {num} completely without leaving a remainder.
        For example, if you divide {num} by one of its factors, you’ll always get another whole number.
        These factors usually come in pairs, such as (1, {num}) and (-1, -{num}). They’re useful for understanding how numbers
        relate to each other through multiplication and division. You can find the factors of {num} using simple division or
        by breaking it into prime factors. In this article, you’ll see all positive factors, factor pairs, and the prime factorization
        of {num} with clear steps and examples.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        Every number has factors, and the <strong>factors of {num}</strong> are the ones that divide it exactly, leaving no remainder.
        They include both positive and negative numbers and always come in pairs, one small, one large.
        You can find the factors of {num} by dividing it by smaller numbers or using prime factorization.
        Learning about factors helps in many math topics, such as divisibility, multiples, and greatest common factors.
        Below, we’ll explore the complete list of factors of {num}, all factor pairs, and the prime factorization with step-by-step explanations.
      </p>
    ),
    (
      <p className="text-gray-700 leading-relaxed">
        The <strong>factors of {num}</strong> are the integers that divide it evenly, meaning they leave no remainder.
        These factors come in pairs, for example, (1, {num}), (-1, {-num}), and (-1, -{num}).
        They are always whole numbers and can be found using methods like division or prime factorization.
        Knowing the factors of {num} helps in learning about prime numbers, multiples, and divisibility rules.
        This page will show all the positive factors, factor pairs, and the prime factorization of {num} in a clear and simple way.
      </p>
    ),
  ];

  const randomVersion = versions[Math.floor(Math.random() * versions.length)];

  return <section className="space-y-4">{randomVersion}</section>;
};

export default Introduction;
