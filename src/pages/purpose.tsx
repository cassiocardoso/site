import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Layout, Wrapper, Header, Content } from '../components';
import config from '../../config/SiteConfig';
import theme from '../../config/Theme';
import PageProps from '../models/PageProps';
import { zIndex } from '../utils/zIndex';

const Title = styled.h2`
	color: ${theme.colors.gray.default};
  margin-bottom: 0.75rem;
  padding: 3rem;
  position: relative;
  text-shadow: 0 0.67rem 1.67rem rgba(0, 0, 0, 0.15);
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  user-select: none;
  z-index: ${zIndex.lowest};
`;

export default class PurposePage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Purpose | ${config.siteTitle}`} />
        <Header />
        <Wrapper>
          <Content>
						<Title>
							<Initiale>W</Initiale>
							<span>Work hard and be nice to people.</span>
						</Title>
            <p>
              Over the years I'm proud to see how much I learnt, through college, by myself and,
              mostly, from my teammates. This inspires me to keep going on this path.
            </p>
            <p>
              The excitement of doing something new, the joy of sharing it with others, the fun of
              talking about things I like, all these feelings motivate me to keep learning and
              sharing as much as I can.
            </p>
            <p>
              The possibility to work on something that's meaningful for others, that challenges the
              status quo, that creates a positive impact in the world we live in. This makes me jump
              out of bed in the morning to solve problems that will make our world a better place.
            </p>
            <p>
              This is my purpose. Find more about it at{' '}
              <a href="https://slashpurpose.org/" target="_blank" rel="noopener noreferrer">
                slashpurpose.org
              </a>
              .
            </p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
