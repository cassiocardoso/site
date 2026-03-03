import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/uses')({
  component: UsesPage,
});

function UsesPage() {
  return <div>Uses — coming soon</div>;
}
