import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  // Extract emoji from title if present
  const emoji = title.match(/^[^\s]+/)?.[0] || "✨";
  const titleText = title.replace(/^[^\s]+\s/, "");

  // Check if this is a "Coming Soon" card
  const isComingSoon = title.includes("Coming Soon");

  return (
    <Link
      href={link}
      className={`block p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:translate-y-[-2px] ${isComingSoon ? 'opacity-80' : ''}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-xl">
            {emoji}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{titleText}</h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 flex-grow mb-4">{description}</p>
        <div className="flex justify-end">
          <span className={`text-sm font-medium ${isComingSoon ? 'text-gray-500' : 'text-purple-600'}`}>
            {isComingSoon ? 'Coming Soon' : 'Try it now →'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
