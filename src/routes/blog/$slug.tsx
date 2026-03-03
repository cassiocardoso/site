import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  return <div>Blog post: {slug} — coming soon</div>;
}
