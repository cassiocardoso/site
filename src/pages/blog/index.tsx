import { FC } from 'react';
import { GetStaticProps } from 'next';

import { BlogLayout } from 'layouts/Blog';
import { getAllPosts, Post } from 'services/storyblok';

type Props = {
  posts: Array<Post>;
};

const BlogPage: FC<Props> = ({ posts }: Props) => {
  return <BlogLayout posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
