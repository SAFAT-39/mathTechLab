"use client";

import Link from "next/link";

// Blogs navigation data
const blogsData = {
  title: "Blogs",
  url: "/blogs",
};

const Blogs = () => {
  return (
    <Link
      href={blogsData.url}
      className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
    >
      {blogsData.title}
    </Link>
  );
};

export default Blogs;
