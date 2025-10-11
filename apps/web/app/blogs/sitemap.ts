import { MetadataRoute } from 'next';
import { Blog } from './types';

/**
 * Fetches all published blog posts for sitemap generation
 * @param cmsUrl URL of your CMS API
 * @returns Promise resolving to an array of blog posts
 */
async function fetchBlogsForSitemap(cmsUrl: string): Promise<Blog[]> {
  try {
    // Fetch all published blogs with pagination
    const res = await fetch(
      `${cmsUrl}/api/blogs?limit=100&where[published][equals]=true&sort=-publishedAt`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      console.error('Failed to fetch blogs for sitemap');
      return [];
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL of your website
  const baseUrl = 'https://mathtechlab.com';
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';

  // Fetch all published blog posts
  const blogs = await fetchBlogsForSitemap(cmsUrl);

  // Generate sitemap entries for blog posts
  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: (blog.updatedAt ? new Date(blog.updatedAt) : new Date()).toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Add static pages
  const staticPages = [
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // Add other static pages as needed
  ];

  // Return combined sitemap entries
  return [...staticPages, ...blogEntries];
}