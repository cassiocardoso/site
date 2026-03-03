import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
});

function BlogPage() {
  return <div>Blog — coming soon</div>;
}
