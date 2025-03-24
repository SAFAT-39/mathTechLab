import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  url: string;
}

export default function GameCard({ title, description, url }: GameCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-medium text-primary mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link href={url} className="text-blue-600 hover:underline">
        Play Now
      </Link>
    </div>
  );
}
