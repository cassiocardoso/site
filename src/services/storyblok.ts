import Storyblok, { Richtext } from 'storyblok-js-client';

/**
 * RichText resolver
 */

const client = new Storyblok({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
});

export const renderRichText = (richText: Richtext): string =>
  client.richTextResolver.render(richText);

/**
 * API
 */

export type Post = {
  content: {
    date: number | Date;
    language: 'pt-br' | 'en';
    slug: string;
    title: string;
    banner: {
      alt: string;
      filename: string;
    };
    body: Richtext;
  };
};

type Options = {
  variables?: Record<string, any>;
  preview?: boolean;
};

async function fetchAPI(query: string, { variables, preview = false }: Options = {}) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
      Version: preview ? 'draft' : 'published',
    } as any,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

const PostFragment = `
	content {
		title
		slug
		date
		language
		banner {
			filename,
			alt
		}
		body
	}
`;

export async function getAllPosts(): Promise<Array<Post>> {
  const data = await fetchAPI(
    `
    {
      PostItems(sort_by: "created_at:desc") {
        items {
					content {
						title
						slug
						date
						language
						banner {
							filename,
							alt
						}
					}
        }
      }
    }
  `,
  );

  return data?.PostItems.items;
}

export async function getAllPostsSlug(): Promise<Array<{ slug: string }>> {
  const data = await fetchAPI(`
    {
      PostItems {
        items {
          slug
        }
      }
    }
  `);
  return data?.PostItems.items;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: ID!) {
    PostItem(id: $slug) {
      ${PostFragment}
    }
  }
  `,
    {
      variables: {
        slug: `post/${slug}`,
      },
    },
  );

  return data?.PostItem;
}
