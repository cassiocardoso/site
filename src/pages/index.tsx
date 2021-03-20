import { FC } from 'react';
import styled from 'styled-components';

import { BaseLayout } from 'layouts/Base';
import { Container } from 'components/Container';
import { screenMd } from 'styles/tokens';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  @media screen and (min-width: ${screenMd}) {
    font-size: 6rem;
  }
`;

const Lead = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;

  @media screen and (min-width: ${screenMd}) {
    font-size: 2rem;
  }
`;

const Home: FC = () => (
  <BaseLayout>
    <Container>
      <Wrapper>
        <Title>Hi, I'm Cassio</Title>
        <Lead>
          I am a passionate and self-motivated frontend engineer. I've been working with tech since
          the early 2010s. I love to craft great user experiences in the most efficient and elegant
          way. I am completely enthusiastic with a full-stack environment and passionate about the
          JavaScript world
        </Lead>
      </Wrapper>
    </Container>
  </BaseLayout>
);

export default Home;
