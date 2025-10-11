import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function GameCard({
  title,
  description,
  url,
  image,
}: GameCardProps) {
  return (
    <Link
      href={url}
      className="block p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:translate-y-[-2px]"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 flex-grow mb-4">{description}</p>
        <div className="flex justify-end">
          <span className="text-sm font-medium text-purple-600">
            Play now →
          </span>
        </div>
      </div>
    </Link>
  );
}
