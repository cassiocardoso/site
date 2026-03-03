import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { BrShell } from '@/components/br-shell';
import { getAllPosts } from '@/services/storyblok';
import { dateFormatter } from '@/utils/date-formatter';
import { renderLangFlag } from '@/utils/render-lang-flag';

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

  if (isPending) {
    return (
      <BrShell title="Blog">
        <p className="text-br-muted">Loading posts...</p>
      </BrShell>
    );
  }

  if (isError) {
    return (
      <BrShell title="Blog">
        <p className="text-br-body">Failed to load posts. Please try again later.</p>
      </BrShell>
    );
  }

  return (
    <BrShell title="Blog">
      {posts.length > 0 && (
        <ul className="m-0 list-none space-y-4 p-0">
          {posts.map(({ content }) => (
            <li key={content.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: content.slug }}
                className="group flex items-center gap-4 border-2 border-br-ink bg-br-bg p-4 no-underline transition-colors hover:bg-br-ink hover:text-br-bg sm:gap-6 sm:p-5"
              >
                <img
                  src={content.banner.filename}
                  alt={content.banner.alt}
                  className="h-auto w-[72px] object-cover sm:w-[100px] md:w-[120px]"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 font-display text-[0.95rem] font-bold uppercase tracking-[0.03em] text-br-ink group-hover:text-br-bg sm:text-[1.05rem]">
                    {renderLangFlag(content.language)} {content.title}
                  </h3>
                  <span className="font-mono text-[0.7rem] text-br-muted group-hover:text-br-faint sm:text-[0.75rem]">
                    {dateFormatter(content.date)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </BrShell>
  );
}
