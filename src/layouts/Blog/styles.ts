import styled from 'styled-components';
import { screenMd } from 'styles/tokens';

export const BlogLayout = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  padding-bottom: var(--spacing-xxl);
  transition: background-color 400ms ease;
  width: 100vw;
`;

export const PageTitle = styled.h1`
  margin: var(--spacing-xxl) 0 var(--spacing-md) 0;

  @media screen and (min-width: ${screenMd}) {
    margin: var(--spacing-md) 0;
  }
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PostSnippet = styled.li`
  border: 2px solid var(--anchor-color);
  display: flex;
  align-items: center;
  margin: var(--spacing-sm) 0;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  cursor: pointer;

  img {
    width: 80px;
    border-radius: var(--radius-sm);
    margin-right: var(--spacing-sm);
    height: auto;

    @media screen and (min-width: ${screenMd}) {
      width: 120px;
      border-radius: var(--radius-md);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.h3`
  font-family: var(--font-family-body);
  margin: 0;
`;
