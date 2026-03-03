import { Link } from '@tanstack/react-router';

import { Container } from '@/components/container';
import { ThemeSelector } from '@/components/theme-selector';
import { dateFormatter } from '@/utils/date-formatter';
import { renderLangFlag } from '@/utils/render-lang-flag';
import { type Post } from '@/types/storyblok';

type Props = {
  posts: Post[];
};

export function BlogLayout({ posts }: Props) {
  return (
    <div className="relative min-h-screen w-screen pb-xxl">
      <Container>
        <ThemeSelector />
        <h1 className="mt-xxl mb-md md:my-md">Blog</h1>
        {posts.length > 0 && (
          <ul className="m-0 list-none p-0">
            {posts.map(({ content }) => (
              <li key={content.slug}>
                <Link to="/blog/$slug" params={{ slug: content.slug }}>
                  <div className="my-sm flex cursor-pointer items-center rounded-md border-2 border-blue-500 p-sm dark:border-purple-500">
                    <img
                      src={content.banner.filename}
                      alt={content.banner.alt}
                      className="mr-sm h-auto w-[80px] rounded-sm md:w-[120px] md:rounded-md"
                    />
                    <div className="flex flex-col">
                      <h3 className="m-0 font-body">{`${renderLangFlag(content.language)} ${content.title}`}</h3>
                      <span>{dateFormatter(content.date)}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
