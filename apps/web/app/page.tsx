import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to MathTechLab</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore math from basic times tables to advanced topics, interactive math games,
          powerful math tools, and insights connecting mathematics to technology, including Machine Learning.
        </p>
      </section>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        <Link href="/games" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-primary">Math Games</h2>
          <p className="text-gray-600">Have fun while learning with interactive math games.</p>
        </Link>
        <Link href="/tools" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-primary">Math Tools</h2>
          <p className="text-gray-600">Use powerful tools to solve and visualize math problems.</p>
        </Link>
        <Link href="/blogs" className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-primary">Math & Tech Blogs</h2>
          <p className="text-gray-600">Read insightful articles on how math shapes technology.</p>
        </Link>
      </div>
    </>
  );
}