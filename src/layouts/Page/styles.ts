import styled from 'styled-components';
import { screenMd } from 'styles/tokens';

export const PageLayout = styled.div`
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
