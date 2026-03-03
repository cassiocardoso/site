import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/resume')({
  component: ResumePage,
});

function ResumePage() {
  return <div>Resume — coming soon</div>;
}
