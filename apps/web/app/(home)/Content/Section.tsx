import Link from "next/link";
import Card, { CardProps } from "./Card";

interface SectionProps {
  title: string;
  description?: string;
  items: CardProps[];
  seeMoreLink: string;
}

const Section: React.FC<SectionProps> = ({ title, description, items, seeMoreLink }) => (
  <section className="py-12">
    <div className="flex items-center mb-8">
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
        <span className="text-2xl text-purple-600">
          {title === "Math Calculators" ? "🔢" :
            title === "Interactive Math Games" ? "🎮" :
              title === "Math Learning" ? "📚" : "✨"}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-purple-700">{title}</h2>
    </div>

    {description && (
      <p className="text-gray-600 text-lg mb-8 max-w-4xl">
        {description}
      </p>
    )}

    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>

    <div className="mt-8 flex justify-center">
      <Link
        href={seeMoreLink}
        className="group inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-purple-200 hover:border-purple-300"
      >
        <span>See All {title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </section>
);

export default Section;
