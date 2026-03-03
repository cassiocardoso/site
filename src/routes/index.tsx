import { createFileRoute } from '@tanstack/react-router';

import { Container } from '@/components/container';
import { BaseLayout } from '@/components/layouts/base-layout';
import { Nav } from '@/components/nav';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <BaseLayout>
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center pt-lg md:pt-0">
          <h1 className="mb-md text-center text-xl md:text-2xl">Hi, I&apos;m Cassio</h1>
          <p className="mb-md font-heading text-[1.2rem] leading-[1.4] md:text-[2rem]">
            I am a passionate and self-motivated frontend engineer, I have been working with tech
            since the early 2010s. I love to craft great user experiences in the most efficient and
            elegant way. I am completely enthusiastic with a full-stack environment and passionate
            about the JavaScript world
          </p>
          <Nav />
        </div>
      </Container>
    </BaseLayout>
  );
}
