import { Container } from '@/components/container';
import { ThemeSelector } from '@/components/theme-selector';
import { dateFormatter } from '@/utils/date-formatter';
import { renderLangFlag } from '@/utils/render-lang-flag';
import { type Post } from '@/types/storyblok';

type Props = {
  post: Post;
};

export function BlogPostLayout({ post }: Props) {
  const { banner, body, date, language, title } = post.content;

  return (
    <div className="relative min-h-screen w-screen py-xxl">
      <ThemeSelector />
      <Container>
        <article>
          <div className="flex w-full">
            <img src={banner.filename} alt={banner.alt} className="w-full object-cover" />
          </div>
          <header>
            <h1 className="my-md text-lg md:text-xl">
              {renderLangFlag(language)} {title}
            </h1>
            <div className="mb-lg">
              <span>Published at: {dateFormatter(date, language)}</span>
            </div>
          </header>
          <div
            className="prose dark:prose-invert max-w-none [&_img]:max-w-full"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </article>
      </Container>
    </div>
  );
}
