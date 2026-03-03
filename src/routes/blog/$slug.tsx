import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { BrProse } from '@/components/br-prose';
import { BrShell } from '@/components/br-shell';
import { getPostBySlug } from '@/services/storyblok';
import { dateFormatter } from '@/utils/date-formatter';
import { renderLangFlag } from '@/utils/render-lang-flag';

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

  if (isPending) {
    return (
      <BrShell title="Loading...">
        <p className="text-br-muted">Loading post...</p>
      </BrShell>
    );
  }

  if (isError) {
    return (
      <BrShell title="Error">
        <p className="text-br-body">Failed to load post. Please try again later.</p>
      </BrShell>
    );
  }

  const { banner, body, date, language, title } = post.content;

  return (
    <BrShell
      title={title}
      titleSlot={
        <div className="br-slam overflow-hidden" style={{ animationDelay: '0.1s' }}>
          <h1
            className="m-0 font-display text-br-ink leading-[0.92]"
            style={{
              fontSize: 'clamp(1.6rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            {renderLangFlag(language)} {title.toUpperCase()}
          </h1>
          <div className="mt-3 font-mono text-[0.75rem] text-br-muted sm:text-[0.8rem]">
            {dateFormatter(date, language)}
          </div>
        </div>
      }
    >
      {banner?.filename && (
        <img
          src={banner.filename}
          alt={banner.alt}
          className="mb-8 w-full border-2 border-br-ink object-cover sm:mb-10"
        />
      )}
      <BrProse html={body ?? ''} />
    </BrShell>
  );
}
