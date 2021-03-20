import styled from 'styled-components';
import { screenMd } from 'styles/tokens';

export const PageLayout = styled.div`
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
  transition: background-color 400ms ease;
  width: 100vw;

  h2 {
    margin: 2rem 0;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  margin: 6rem 0 2rem 0;

  @media screen and (min-width: ${screenMd}) {
    margin: 2rem 0;
  }
`;
