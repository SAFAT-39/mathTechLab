'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  if (!content) {
    return <p>No content available.</p>;
  }

  return <MDXRemote source={content} />;
} 