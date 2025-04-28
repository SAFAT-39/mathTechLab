export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  thumbnail?: {
    url: string;
  };
  publishedAt: string;
  author?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface BlogPost extends Blog {
  content: string;
  tags?: Array<{ tag: string }>;
}

export interface BlogsResponse {
  docs: Blog[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}