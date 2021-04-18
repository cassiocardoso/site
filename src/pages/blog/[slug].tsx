import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { BlogPostLayout } from 'layouts/BlogPost';
import { getAllPostsSlug, getPostBySlug, Post } from 'services/storyblok';

type Props = {
  post: Post;
};

const BlogPostPage: FC<Props> = ({ post }: Props) => {
  if (!post) return null;
  return <BlogPostLayout post={post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context?.params?.slug as string) ?? '';
  const post = (await getPostBySlug(slug)) || {};

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsSlug();
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  };
};

export default BlogPostPage;
