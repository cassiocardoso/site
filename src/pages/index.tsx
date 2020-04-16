import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Mail, User, Linkedin, GitHub, Codepen, Twitter } from 'react-feather';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';

import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import config from '../../config/SiteConfig';
import theme from '../../config/Theme';
import { mediaV2 } from '../utils/media';
import { personSchema } from '../utils/jsonLd';

const Homepage = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${mediaV2.tablet} {
    flex-direction: column;
  	height: 100%;
  }

  @media ${mediaV2.desktop} {
  	flex-direction: row;
  	height: 100vh;
  }
`;

const SocialLinksWrapper = styled.div`
	@media ${mediaV2.desktop} {
		margin-top: 2rem;
	}
`;

const SocialLinks = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0.5rem;
    padding: 1rem;

    a {
  		border-bottom: 0;
  		color: ${theme.colors.white};

  		&:hover {
  			border-bottom: 0;
  		}
  	}
  }
`;

const GridRow: any = styled.div`
  align-items: center;
  background: ${(props: any) =>
	props.background
		? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)},
      ${rgba(lighten(0.1, props.theme.colors.rocketBlack), 0.9)}), url(/assets/bg.jpg) no-repeat`
		: null};
  background-size: cover;
	color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 2rem 1.5rem;

  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }

  @media ${mediaV2.tablet} {
    padding: 3rem 3rem;
  }

  @media ${mediaV2.desktop} {
  	padding: 2rem 4rem;
  }
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const Logo = styled.img`
  height: 5rem;

  @media ${mediaV2.desktop} {
    height: 7rem;
  }
`;

const HomeLink = styled(Link)`
  border-bottom: 0;
  display: inline-block;
  margin: 0.5rem;

  &:hover {
    border-bottom: 0;
  }

  @media ${mediaV2.desktop} {
    display: initial;
    height: 120px;
  }
`;

export default class IndexPage extends React.Component<PageProps, any> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;

    return (
      <Layout>
        <Wrapper fullWidth={true}>
					<Helmet title={`Homepage | ${config.siteTitle}`}>
						<script type="application/ld+json">
							{personSchema}
						</script>
					</Helmet>
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                <Logo src={config.siteLogo} alt="Cassio Cardoso | Front-end Engineer" />
                <h1>
                  Hi. I am <br />
                  Cassio Cardoso
                </h1>
                <p>I write about tech, travel, food, sports and games</p>
                <HomeLink to="/about">
                  <Button big>
                    <User size="20" />
                    About Me
                  </Button>
                </HomeLink>
                <HomeLink to="/contact">
                  <Button big>
                    <Mail size="20" />
                    Contact
                  </Button>
                </HomeLink>
                <SocialLinksWrapper>
                  <SocialLinks>
                    <li>
                      <a href="https://br.linkedin.com/in/cassiocardoso" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/cassiocardoso" target="_blank" rel="noopener noreferrer">
                        <GitHub size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://codepen.io/cassiocardoso" target="_blank" rel="noopener noreferrer">
                        <Codepen size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/cassiocardoso" target="_blank" rel="noopener noreferrer">
                        <Twitter size={24} />
                      </a>
                    </li>
                  </SocialLinks>
                </SocialLinksWrapper>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2>About Me</h2>
                <p>
                  I am a passionate and self-motivated front-end engineer with more than eight years
                  of experience. I love to craft great user experiences in the most efficiently and
                  elegantly way. I am completely enthusiastic with a full-stack environment and
                  passionate about the JavaScript world.
                </p>
                <hr />
                <h2>Latest Post</h2>
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <p className={'textRight'}>
                  <HomeLink to={'/blog'}>All articles ({totalCount})</HomeLink>
                </p>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}

export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
