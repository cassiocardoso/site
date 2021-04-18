import { FC } from 'react';

import { PageLayout } from 'layouts/Page';

const AboutPage: FC = () => (
  <PageLayout title="About Me">
    <p>
      I’m a passionate and self-motivated front-end engineer and I have been working with tech since
      the early 2010s. Throughout my career I had the chance to work on, lead and deliver projects
      of all sizes, from small internal tools to applications that are used by millions of people
      each month, I always strive to deliver the best user experience to the customer with a
      reliable, resilient and highly available solution.
    </p>
    <p>
      I am flexible and adaptable, I don’t fall in love with any particular solution, I aim to
      understand the problem and then figure out how to solve it in the most efficient. I’d rather
      fail fast and learn from it than keep banging my head against a brick wall.
    </p>
    <p>
      I believe sharing is one of the most important skills that one can have, both in the technical
      and the interpersonal side. It is a great growing tool as you can develop your skills, teach
      and learn from others as well as build a trusting and safe working environment.
    </p>
    <p>
      I love to learn, and I am constantly studying topics that aren’t my strongest skills, and this
      is not restricted to tech-related topics but also to finance, diet and nutrition, exercise and
      sports and other topics that I find interesting.
    </p>
    <h2>Where am I</h2>
    <p>
      I have been living in Berlin since November of 2018, and I feel super lucky to have been able
      to explore the city (and a few other places in Europe) before the pandemic started.
    </p>
    <p>
      In the summer of 2020, I joined{' '}
      <a href="https://vimcar.de/" target="_blank" rel="noreferrer">
        Vimcar
      </a>{' '}
      to revolutionize an entire industry by digitizing the company car of the future.
    </p>
    <p>
      For more detailed information, check my <a href="/resume">resume</a>.
    </p>
  </PageLayout>
);

export default AboutPage;
