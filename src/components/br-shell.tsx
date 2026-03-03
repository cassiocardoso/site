import { type ReactNode } from 'react';

import { BrBackLink } from '@/components/br-back-link';

type Props = {
  children: ReactNode;
  title: string;
  /** Custom element to render instead of the standard h1 title */
  titleSlot?: ReactNode;
};

export function BrShell({ children, title, titleSlot }: Props) {
  return (
    <div className="min-h-screen bg-br-bg font-body selection:bg-br-accent/15">
      <div className="mx-auto max-w-[72rem] px-4 py-6 sm:px-6 md:px-10 md:py-12">
        {/* Back link + HTML tag deco */}
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <BrBackLink />
          <span className="font-mono text-[0.65rem] tracking-wider text-br-faint sm:text-[0.7rem]">
            &lt;body&gt;
          </span>
        </div>

        {/* Page title */}
        {titleSlot ?? (
          <div className="br-slam overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <h1
              className="m-0 font-display text-br-ink leading-[0.88]"
              style={{
                fontSize: 'clamp(2rem, 7vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              {title.toUpperCase()}
            </h1>
          </div>
        )}

        {/* Divider line */}
        <div
          className="br-slide mt-4 h-[3px] w-16 bg-br-ink sm:mt-6 sm:w-24 md:w-32"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Page content */}
        <div className="br-slide mt-8 sm:mt-10 md:mt-14" style={{ animationDelay: '0.3s' }}>
          {children}
        </div>

        {/* Decorative bar */}
        <div
          className="br-slide mt-10 flex gap-[2px] sm:mt-14 sm:gap-[3px] md:mt-20"
          style={{ animationDelay: '0.5s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="h-4 flex-1 bg-br-ink sm:h-6"
              style={{ opacity: i % 3 === 0 ? 0.15 : i % 3 === 1 ? 0.08 : 0.04 }}
            />
          ))}
        </div>

        {/* Footer */}
        <footer
          className="br-slide mt-6 flex flex-wrap items-end justify-between gap-4 sm:mt-8"
          style={{ animationDelay: '0.55s' }}
        >
          <span className="font-mono text-[0.65rem] tracking-wider text-br-faint sm:text-[0.7rem]">
            &lt;/body&gt;
          </span>
          <div className="flex items-center gap-4 text-[0.7rem] text-br-subtle sm:gap-6 sm:text-[0.75rem]">
            <span>Berlin, DE</span>
            <span>est. 2010</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
