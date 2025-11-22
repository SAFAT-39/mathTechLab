import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export interface GameData {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface RelatedGamesProps {
  relatedGames: GameData[];
}

const RelatedGames = ({ relatedGames }: RelatedGamesProps) => {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">Related Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {relatedGames.map((game) => (
          <Link key={game.href} href={game.href}>
            <div className="flex items-center bg-blue-50 rounded-lg border-2 border-blue-600 p-4 shadow hover:shadow-lg transition cursor-pointer">
              <img
                src={game.image}
                alt={game.title}
                className="w-24 h-24 object-contain rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-900">{game.description}</p>
              </div>
              <div className="ml-auto"><ArrowRightIcon /></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-2 p-4">
        <Link
          href="/games"
          className="hover:underline active:underline text-blue-800"
        >
          See More →
        </Link>
      </div>
    </div>
  );
};

export default RelatedGames;
