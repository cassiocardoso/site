import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Layout, Article, Wrapper, SectionTitle, Header, Content, Pagination } from '../components';
import config from '../../config/SiteConfig';
import { blogSchema } from '../utils/jsonLd';
import Data from '../models/Data';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class BlogPage extends React.Component<Props> {
  public render() {
    const { currentPage, totalPages } = this.props.pageContext;

    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <Layout>
				<Helmet title={`Blog | ${config.siteTitle}`}>
					<script type="application/ld+json">
						{blogSchema(edges)}
					</script>
				</Helmet>
        <Header>
          <SectionTitle uppercase>Latest stories</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
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
            <Pagination currentPage={currentPage} totalPages={totalPages} url="blog" />
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
						tags
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
