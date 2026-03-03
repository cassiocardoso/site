import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { BlogPostLayout } from '@/components/layouts/blog-post-layout';
import { getPostBySlug } from '@/services/storyblok';

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();

  const {
    data: post,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (isPending) return null;
  if (isError) return <p>Failed to load post. Please try again later.</p>;

  return <BlogPostLayout post={post} />;
}
