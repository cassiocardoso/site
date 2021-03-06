import { FC } from 'react';
import styled from 'styled-components';

import { BaseLayout } from 'layouts/Base';
import { Container } from 'components/Container';
import { Nav } from 'components/Nav';
import { screenMd } from 'styles/tokens';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: var(--spacing-lg);

  @media screen and (min-width: ${screenMd}) {
    padding-top: 0;
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  text-align: center;

  @media screen and (min-width: ${screenMd}) {
    font-size: var(--font-size-xxl);
  }
`;

const Lead = styled.p`
  font-family: var(--font-family-heading);
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 2rem;

  @media screen and (min-width: ${screenMd}) {
    font-size: 2rem;
  }
`;

const HomePage: FC = () => (
  <BaseLayout>
    <Container>
      <Wrapper>
        <Title>Hi, I&apos;m Cassio</Title>
        <Lead>
          I am a passionate and self-motivated frontend engineer, I have been working with tech
          since the early 2010s. I love to craft great user experiences in the most efficient and
          elegant way. I am completely enthusiastic with a full-stack environment and passionate
          about the JavaScript world
        </Lead>
        <Nav />
      </Wrapper>
    </Container>
  </BaseLayout>
);

export default HomePage;
