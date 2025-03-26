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
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Related Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedGames.map((game) => (
          <Link key={game.href} href={game.href}>
            <div className="flex items-center border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
              <img
                src={game.image}
                alt={game.title}
                className="w-24 h-24 object-contain rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-600">{game.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href="/games"
          className="hover:underline active:underline text-blue-800"
        >
          See More →
        </Link>
      </div>
    </section>
  );
};

export default RelatedGames;
