import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BlogsResponse } from './types';

export const metadata: Metadata = {
  title: 'Blog | MathTechLab',
  description: 'Read our latest articles about mathematics, technology, and education.',
};

async function getBlogs(page = 1): Promise<BlogsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?page=${page}&limit=9&where[published][equals]=true&sort=-publishedDate`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const currentPage = Number((await searchParams).page) || 1;
  const { docs: blogs, totalPages } = await getBlogs(currentPage);

  return (
    <>
      {/* Decorative background and intro */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Gradient and floating math symbols */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/4 left-1/4 text-6xl text-purple-200 opacity-30">∑</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-purple-200 opacity-30">π</div>
        <div className="absolute bottom-1/4 right-1/4 text-7xl text-purple-200 opacity-30">∫</div>
        <div className="absolute bottom-1/3 left-1/3 text-6xl text-purple-200 opacity-30">√</div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
            MathTechLab Blogs
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
            Latest <span className="text-purple-600">Blog Posts</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Explore our latest articles about mathematics, technology, and education. Stay up to date with new insights, tutorials, and resources from MathTechLab.
          </p>
        </div>
      </section>

      {/* Blog cards grid */}
      <section className="max-w-full mx-auto pb-16 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 hover:border-purple-300"
            >
              {blog.thumbnail && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.thumbnail.url}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                  {blog.title}
                </h2>
                {blog.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{blog.excerpt}</p>
                )}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <time className="text-sm text-gray-500">
                    {formatDate(blog.publishedDate)}
                  </time>
                  <span className="inline-block px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-full font-medium">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/blogs?page=${page}`}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors text-base ${page === currentPage
                  ? 'bg-purple-700 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                  }`}
              >
                {page}
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
} 