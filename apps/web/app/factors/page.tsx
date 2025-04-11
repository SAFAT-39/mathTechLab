import numberList from "./[num]/numberList";

export const metadata = {
  title: "What Are Factors? | Factor Pairs & Prime Factorization Explained",
  description:
    "Learn what factors are, how to find factor pairs, and understand prime factorization with easy examples.",
};

export default function FactorsPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Understanding Factors and Prime Factorization
      </h1>

      {/* What are Factors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔹 What Are Factors?</h2>
        <p className="mb-2">
          A <strong>factor</strong> of a number is a whole number that divides
          exactly into another number, leaving no remainder. In other words, if
          you can multiply two whole numbers to get another number, then both of
          those numbers are factors of the product.
        </p>
        <p className="mb-2">
          <strong>Example:</strong> The factors of <strong>24</strong> are:
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>1 × 24</li>
          <li>2 × 12</li>
          <li>3 × 8</li>
          <li>4 × 6</li>
        </ul>
        <p>
          So, the factors of 24 are: <strong>1, 2, 3, 4, 6, 8, 12, 24</strong>.
        </p>
      </section>

      {/* Factor Pairs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🟢 Factor Pairs</h2>
        <p className="mb-2">
          A <strong>factor pair</strong> is a set of two whole numbers that
          multiply together to give the original number.
        </p>
        <p className="mb-2">
          <strong>Example (24):</strong>
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>1 × 24</li>
          <li>2 × 12</li>
          <li>3 × 8</li>
          <li>4 × 6</li>
        </ul>
        <p>
          Factor pairs of <strong>24</strong>:{" "}
          <em>(1, 24), (2, 12), (3, 8), (4, 6)</em>
        </p>
      </section>

      {/* Prime Factorization */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔴 Prime Factorization</h2>
        <p className="mb-2">
          <strong>Prime factorization</strong> is the process of expressing a
          number as a product of its
          <strong> prime numbers</strong>. A prime number is greater than 1 and
          only divisible by 1 and itself.
        </p>
        <p className="mb-2">To find the prime factorization of 24:</p>
        <ul className="list-disc pl-6 mb-2">
          <li>24 ÷ 2 = 12</li>
          <li>12 ÷ 2 = 6</li>
          <li>6 ÷ 2 = 3</li>
          <li>3 ÷ 3 = 1</li>
        </ul>
        <p className="mb-2">
          So, the prime factorization of 24 is: <strong>2 × 2 × 2 × 3</strong> ={" "}
          <strong>2³ × 3</strong>
        </p>
        <p>This breakdown can also be visualized with a factor tree.</p>
      </section>

      {/* Explore Factor Pages */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🟨 Explore Factor Pages</h2>
        <p className="mb-4">
          Click on any number below to view its full factor list, factor pairs,
          and prime factorization.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {numberList.map((num) => (
            <a
              key={num}
              href={`/factors/factors-of-${num}`}
              className="bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium p-3 rounded shadow text-center"
            >
              Factors of {num}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
