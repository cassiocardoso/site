import { FC } from 'react';
import Link from 'next/link';

import { ThemeSelector } from 'components/ThemeSelector';
import { Container } from 'components/Container';
import { Post } from 'services/storyblok';
import { renderLangFlag } from 'utils/renderLangFlag';
import { dateFormatter } from 'utils/dateFormatter';
import * as S from './styles';

type Props = {
  posts: Array<Post>;
};

export const BlogLayout: FC<Props> = ({ posts }: Props) => (
  <S.BlogLayout>
    <Container>
      <ThemeSelector />
      <S.PageTitle>Blog</S.PageTitle>
      {posts.length && (
        <S.PostList>
          {posts.map(({ content }) => (
            <Link href={`/blog/${content.slug}`} key={content.slug}>
              <S.PostSnippet>
                <img src={content.banner.filename} alt={content.banner.alt} />
                <S.PostInfo>
                  <S.PostTitle>{`${renderLangFlag(content.language)} ${
                    content.title
                  }`}</S.PostTitle>
                  <span>{dateFormatter(content.date)}</span>
                </S.PostInfo>
              </S.PostSnippet>
            </Link>
          ))}
        </S.PostList>
      )}
    </Container>
  </S.BlogLayout>
);
