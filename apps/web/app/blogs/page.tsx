import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Blog, BlogsResponse } from './types';

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
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { docs: blogs, totalPages } = await getBlogs(currentPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {blog.thumbnail && (
              <div className="relative h-48">
                <Image
                  src={blog.thumbnail.url}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              {blog.excerpt && (
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
              )}
              <time className="text-sm text-gray-500">
                {formatDate(blog.publishedDate)}
              </time>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/blogs?page=${page}`}
              className={`px-4 py-2 rounded ${page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 