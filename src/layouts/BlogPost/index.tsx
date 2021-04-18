import { FC } from 'react';
import Image from 'next/image';

import * as S from './styles';
import { ThemeSelector } from 'components/ThemeSelector';
import { Container } from 'components/Container';
import { Post, renderRichText } from 'services/storyblok';
import { renderLangFlag } from 'utils/renderLangFlag';
import { dateFormatter } from 'utils/dateFormatter';

type Props = {
  post: Post;
};

export const BlogPostLayout: FC<Props> = ({ post }: Props) => (
  <S.BlogPostLayout>
    <ThemeSelector />
    <Container>
      <article>
        <S.BannerWrapper>
          <Image
            src={post.content.banner.filename}
            alt={post.content.banner.alt}
            height={360}
            width={640}
          />
        </S.BannerWrapper>
        <header>
          <S.Title>
            {renderLangFlag(post.content.language)} {post.content.title}
          </S.Title>
          <S.Meta>
            <span>Published at: {dateFormatter(post.content.date, post.content.language)}</span>
          </S.Meta>
        </header>
        <S.Body dangerouslySetInnerHTML={{ __html: renderRichText(post.content.body) }} />
      </article>
    </Container>
  </S.BlogPostLayout>
);
