import styled from 'styled-components';
import { screenMd } from 'styles/tokens';

export const BlogPostLayout = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 400ms ease;
  width: 100vw;
  padding: var(--spacing-xxl) 0;
`;

export const BannerWrapper = styled.div`
  display: flex;

  > div {
    display: flex;
    width: 100%;
  }

  img {
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-lg);
  margin: var(--spacing-md) 0;

  @media screen and (min-width: ${screenMd}) {
    font-size: var(--font-size-xl);
  }
`;

export const Meta = styled.div`
  margin-bottom: var(--spacing-lg);
`;

export const Body = styled.div`
  /* prevent images from overflowing the content */
  img {
    max-width: 100%;
  }
`;
