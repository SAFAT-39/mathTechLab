import { NumProps } from "./type";
import Link from "next/link";
import numberList from "./numberList";

// Function to shuffle the list using a seed
const seededShuffle = (array: number[], seed: number): number[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a deterministic random value based on the seed and index
    const j = Math.floor((seed + (i + 1) * 99997) % arr.length);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getRelatedNumbers = (num: number) => {
  // Remove the current number from the list
  const filteredList = numberList.filter((n) => n !== num);

  // Shuffle the list using num as the seed
  const shuffledList = seededShuffle(filteredList, num);

  // Return the first 10 numbers from the shuffled list
  return shuffledList.slice(0, 12);
};

const RelatedLinks = ({ num }: NumProps) => {
  const relatedLinks = getRelatedNumbers(num);

  // Ensure the related links are grouped into pairs (two columns per row)
  const chunkedLinks = [];
  for (let i = 0; i < relatedLinks.length; i += 2) {
    chunkedLinks.push(relatedLinks.slice(i, i + 2));
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-700">Related Links</h2>
      <div className="bg-white border border-purple-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-y divide-purple-100">
          {chunkedLinks.map((linkPair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 divide-x divide-purple-100">
              {linkPair.map((relatedNum) => (
                <Link
                  key={relatedNum}
                  href={`/factors/factors-of-${relatedNum}`}
                  className="p-4 text-center text-blue-600 hover:text-blue-800 hover:bg-purple-50 transition-colors"
                >
                  Factors of {relatedNum}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
