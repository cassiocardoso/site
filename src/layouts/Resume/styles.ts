import styled, { css } from 'styled-components';
import NextImage from 'next/image';

import { screenMd } from 'styles/tokens';

export const PageLayout = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 400ms ease;
  width: 100vw;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-xxl);
`;

export const Image = styled(NextImage)`
  clip-path: circle(70px at center 70px);
  margin: 0;
`;

export const Name = styled.h1`
  font-size: var(--font-size-xl);
`;

export const Label = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
`;

export const Divider = styled.div<{ small?: boolean; width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '300px')};
  height: 50px;
  overflow: hidden;
  background: var(--background-color);
  color: var(--background-color);
  margin: var(--spacing-md) auto;
  transition-property: background-color;

  &:before {
    content: 'cassiocardoso';
    position: relative;
    font-size: 3rem;
    text-decoration: wavy var(--anchor-color) underline;
    top: -32px;
  }

  ${({ small }) =>
    small &&
    css`
      margin: var(--spacing-sm) auto;

      &:before {
        font-size: 1.5rem;
        top: -4px;
      }
    `}
`;

export const Download = styled.a`
  border: 0.2rem solid;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-xs);
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  svg {
    margin-right: var(--spacing-xs);
  }

  &:hover {
    background: var(--anchor-color);
    border-color: var(--anchor-color);
    color: var(--background-color);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${screenMd}) {
    grid-template-columns: 1fr 2fr;
    grid-gap: var(--spacing-md);
  }
`;

export const Sidebar = styled.aside`
  font-size: var(--font-size-sm);

  p {
    font-size: var(--font-size-sm);
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);

  svg {
    margin-right: var(--spacing-xs);
    color: var(--text-color);
  }

  a {
    display: flex;
    align-items: center;
  }
`;

export const SkillName = styled.dt`
  margin-bottom: var(--spacing-xs);
`;

export const SkillValue = styled.dd`
  margin-bottom: var(--spacing-md);
`;

export const Main = styled.main``;

export const SectionTitle = styled.h3`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
`;

export const Snippet = styled.div`
  margin-bottom: var(--spacing-lg);

  p {
    margin: var(--spacing-sm) 0;
  }

  li {
    margin-bottom: var(--spacing-xs);
  }
`;

export const SnippetTitle = styled.h4`
  display: inline-block;
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
`;

export const SnippetSmall = styled.small`
  font-family: var(--font-family-body);
  font-style: italic;
  margin-left: var(--spacing-sm);
`;

export const SnippetSummary = styled.div`
  margin-bottom: var(--spacing-xs);

  span {
    align-content: center;
    display: flex;
    margin-bottom: 0.25rem;
  }
`;

export const IconWrapper = styled.span`
  align-items: center;
  display: flex;
  margin-right: var(--spacing-xs);
`;
