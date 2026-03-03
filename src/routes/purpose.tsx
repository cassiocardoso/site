import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/purpose')({
  component: PurposePage,
});

function PurposePage() {
  return <div>Purpose — coming soon</div>;
}
