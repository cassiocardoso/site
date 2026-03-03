import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/readme')({
  component: ReadmePage,
});

function ReadmePage() {
  return <div>Readme — coming soon</div>;
}
