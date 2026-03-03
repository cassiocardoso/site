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
    body?: string; // pre-rendered HTML from renderRichText (absent on listing)
  };
};
