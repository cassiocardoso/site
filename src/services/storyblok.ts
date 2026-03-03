import StoryblokClient, { type ISbRichtext } from 'storyblok-js-client';

import { type Post } from '@/types/storyblok';

const client = new StoryblokClient({
  accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
});

export const renderRichText = (richText: ISbRichtext): string =>
  client.richTextResolver.render(richText);

// Internal type — raw shape returned by the GraphQL API (body is ISbRichtext, not rendered HTML)
type RawPost = {
  content: Omit<Post['content'], 'body'> & { body: ISbRichtext };
};

async function fetchAPI(query: string, variables?: Record<string, unknown>) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
      Version: 'published',
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = (await res.json()) as { data?: unknown; errors?: unknown };
  if (json.errors) throw new Error('Failed to fetch Storyblok API');

  return json.data;
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchAPI(`
    {
      PostItems(sort_by: "created_at:desc") {
        items {
          content {
            title
            slug
            date
            language
            banner {
              filename
              alt
            }
          }
        }
      }
    }
  `);

  return (data as { PostItems: { items: Post[] } }).PostItems.items;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: ID!) {
      PostItem(id: $slug) {
        content {
          title
          slug
          date
          language
          banner {
            filename
            alt
          }
          body
        }
      }
    }
  `,
    { slug: `post/${slug}` },
  );

  const raw = (data as { PostItem: RawPost }).PostItem;

  return {
    content: {
      ...raw.content,
      body: renderRichText(raw.content.body),
    },
  };
}
