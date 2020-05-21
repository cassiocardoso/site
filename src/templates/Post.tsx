import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import LazyLoad from 'react-lazy-load';
import Disqus from 'react-disqus-comments';

import theme from '../../config/Theme';

import {
  Layout,
  Wrapper,
  Header,
  Subline,
  SEO,
  PrevNext,
  SectionTitle,
  Content,
} from '../components';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';

const PostContent = styled.article`
  margin-top: 4rem;

  .anchor {
    border-bottom-color: transparent;

    &:hover {
      border-bottom-color: ${theme.colors.ceruleanBlue};
    }
  }
`;

const Tag = styled(Link)`
  margin: 0 0.25rem;
`;

const DisqusWrapper = styled.section`
  padding: 4rem 0 2rem 0;
  margin: 0 auto;
  max-width: 800px;
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;

    return (
      <Layout>
        {post ? (
          <>
            <SEO postPath={post.fields.slug} postNode={post} postSEO />
            <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
            <Header banner={post.frontmatter.banner}>
              <SectionTitle>{post.frontmatter.title}</SectionTitle>
              <Subline light={true}>
                {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
                <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>
                  {post.frontmatter.category}
                </Link>
              </Subline>
            </Header>
            <Wrapper>
              <Content>
                <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
                {post.frontmatter.tags ? (
                  <Subline>
                    Tags: &#160;
                    {post.frontmatter.tags.map(tag => (
                      <Tag key={tag} to={`/tags/${kebabCase(tag)}`}>
                        {tag}
                      </Tag>
                    ))}
                  </Subline>
                ) : null}
                <DisqusWrapper>
                  <LazyLoad offsetTop={300}>
                    <Disqus
                      shortname="cassiocardoso-me"
                      identifier={post.id.toString()}
                      title={post.frontmatter.title}
                      url={`${config.siteUrl}/blog/${post.fields.slug}`}
                    />
                  </LazyLoad>
                </DisqusWrapper>
                <PrevNext prev={prev} next={next} />
              </Content>
            </Wrapper>
          </>
        ) : null}
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        banner
      }
      timeToRead
    }
  }
`;
