import Link from "next/link";
import Card, { CardProps } from "./Card";

interface SectionProps {
  title: string;
  items: CardProps[];
  seeMoreLink: string;
}

const Section: React.FC<SectionProps> = ({ title, items, seeMoreLink }) => (
  <section className="py-6">
    <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
    <div className="mt-4">
      <Link
        href={seeMoreLink}
        className="hover:underline active:underline text-blue-800"
      >
        See More →
      </Link>
    </div>
  </section>
);

export default Section;
