import { NumProps } from "./type";
import Link from "next/link";
import numberList from "./numberList";

// Function to shuffle the list using a seed
const seededShuffle = (array: number[], seed: number): number[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a deterministic random value based on the seed and index
    const j = Math.floor((seed + (i + 1) * 997) % arr.length);
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
  return shuffledList.slice(0, 10);
};

const RelatedLinks = ({ num }: NumProps) => {
  const relatedLinks = getRelatedNumbers(num);

  // Ensure the related links are grouped into pairs (two columns per row)
  const chunkedLinks = [];
  for (let i = 0; i < relatedLinks.length; i += 2) {
    chunkedLinks.push(relatedLinks.slice(i, i + 2));
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">Related Links</h2>
      <table className="w-full mt-4 bg-gray-200">
        <tbody>
          {chunkedLinks.map((linkPair, rowIndex: number) => (
            <tr key={rowIndex} className="bg-gray-100">
              {linkPair.map((relatedNum) => (
                <td key={relatedNum} className="p-2 border text-center">
                  <Link
                    className="text-blue-500 hover:underline"
                    href={`/factors/${relatedNum}`}
                  >
                    Factors of {relatedNum}
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RelatedLinks;
