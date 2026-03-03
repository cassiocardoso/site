import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { BlogLayout } from '@/components/layouts/blog-layout';
import { getAllPosts } from '@/services/storyblok';

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
});

function BlogPage() {
  const {
    data: posts = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });

  if (isPending) return null;
  if (isError) return <p>Failed to load posts. Please try again later.</p>;

  return <BlogLayout posts={posts} />;
}
