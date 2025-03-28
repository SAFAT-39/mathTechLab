import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  url: string;
  image: string; // Added image prop
}

export default function GameCard({
  title,
  description,
  url,
  image,
}: GameCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-lg mr-6"
      />
      <div className="flex flex-col">
        <h3 className="text-2xl font-medium text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <Link href={url} className="text-blue-600 hover:underline">
          Play Now
        </Link>
      </div>
    </div>
  );
}
