import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import { Subline } from './Subline';
import { zIndex } from '../utils/zIndex';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 0.67rem 1.67rem rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: ${zIndex.lowest};
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const NoBorderLink = styled(Link)`
	border-bottom: 0;
`;

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category: string;
}

export class Article extends React.PureComponent<Props> {
  public render() {
    const { title, date, excerpt, slug, timeToRead, category } = this.props;
    const firstChar = title.charAt(0);

    return (
      <Post>
        <Title>
          <Initiale>{firstChar}</Initiale>
          <NoBorderLink to={`/blog/${slug}`}>{title}</NoBorderLink>
        </Title>
        <Subline>
          {date} &mdash; {timeToRead} Min Read &mdash; In
          <NoBorderLink to={`/categories/${kebabCase(category)}`}> {category}</NoBorderLink>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
      </Post>
    );
  }
}
