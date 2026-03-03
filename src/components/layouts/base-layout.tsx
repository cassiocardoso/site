import { type ReactNode } from 'react';

import { ThemeSelector } from '@/components/theme-selector';

type Props = {
  children: ReactNode;
};

export function BaseLayout({ children }: Props) {
  return (
    <div className="relative h-screen w-screen">
      <ThemeSelector />
      {children}
    </div>
  );
}
