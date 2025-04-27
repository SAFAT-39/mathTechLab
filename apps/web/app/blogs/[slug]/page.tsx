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
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <time dateTime={post.publishedDate}>
            {formatDate(post.publishedDate)}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="ml-4 flex gap-2">
              {post.tags.map(({ tag }: { tag: string }) => (
                <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.thumbnail && (
          <div className="relative w-full h-[400px] mb-6">
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        {post.excerpt && (
          <p className="text-xl text-gray-600 italic mb-6">{post.excerpt}</p>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <Content />
      </div>
    </article>
  );
} 