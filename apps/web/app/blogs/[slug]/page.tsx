import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import 'katex/dist/katex.min.css'
import { BlogPost } from '../types';
import { renderMDX } from './renderMDX';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?where[slug][equals]=${slug}&where[published][equals]=true`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return {
      title: 'Post Not Found',
    };
  }

  const { docs } = await res.json();
  const post = docs[0];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on MathTechLab`,
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = (await params).slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs?where[slug][equals]=${slug}&where[published][equals]=true`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    notFound();
  }

  const { docs } = await res.json();
  const post = docs[0] as BlogPost;

  if (!post) {
    notFound();
  }

  const Content = await renderMDX(post.content);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 rounded-2xl shadow-xl bg-white border-t border-gray-200">
      {/* Header Card */}
      <div className="">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-4xl font-extrabold text-purple-700 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 text-sm mb-4">
            <time dateTime={post.publishedDate} className="font-medium">
              {formatDate(post.publishedDate)}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(({ tag }: { tag: string }) => (
                  <span key={tag} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {post.excerpt && (
            <p className="text-base text-gray-700 italic max-w-4xl mx-auto">{post.excerpt}</p>
          )}
        </div>

        {post.thumbnail && (
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
      <hr></hr>

      {/* Content Card */}
      <article className="mt-8">
        <div className="prose prose-lg max-w-none mx-auto">
          <Content />
        </div>
      </article>
    </div>
  );
} 