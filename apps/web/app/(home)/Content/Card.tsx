import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => (
  <Link
    href={link}
    className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Card;
