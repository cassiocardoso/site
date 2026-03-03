import { type ReactNode } from 'react';

import { Container } from '@/components/container';
import { ThemeSelector } from '@/components/theme-selector';

type Props = {
  children: ReactNode;
  title: string;
};

export function PageLayout({ children, title }: Props) {
  return (
    <div className="relative min-h-screen w-screen pb-xxl">
      <Container>
        <ThemeSelector />
        <h1 className="mt-xxl mb-md md:my-md">{title}</h1>
        {children}
      </Container>
    </div>
  );
}
