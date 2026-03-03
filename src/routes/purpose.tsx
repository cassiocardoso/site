import { createFileRoute } from '@tanstack/react-router';

import { PageLayout } from '@/components/layouts/page-layout';

export const Route = createFileRoute('/purpose')({
  component: PurposePage,
});

function PurposePage() {
  return (
    <PageLayout title="Purpose">
      <h2 className="relative mb-sm p-lg">
        <span className="absolute -translate-x-1/2 -translate-y-1/2 select-none text-[7rem] opacity-20">
          W
        </span>
        <span>Work hard and be nice to people.</span>
      </h2>
      <p>
        Over the years I am proud to see how much I learnt, through college, by myself and, mostly,
        from my teammates. This inspires me to keep going on this path.
      </p>
      <p>
        The excitement of doing something new, the joy of sharing it with others, the fun of talking
        about things I like, all these feelings motivate me to keep learning and sharing as much as
        I can.
      </p>
      <p>
        The possibility to work on something that is meaningful for others, that challenges the
        status quo, that creates a positive impact in the world we live in. This makes me jump out
        of bed in the morning to solve problems that will make our world a better place.
      </p>
      <p>
        <em>
          This is <strong>my purpose</strong>. Find more about it at{' '}
          <a href="https://slashpurpose.org/" target="_blank" rel="noopener noreferrer">
            slashpurpose.org
          </a>
          .
        </em>
      </p>
    </PageLayout>
  );
}
