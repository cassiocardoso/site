import { type ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  html?: string;
};

export function BrProse({ children, html }: Props) {
  const className =
    'prose max-w-none text-br-body font-body ' +
    'prose-headings:font-display prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-[0.05em] prose-headings:text-br-ink ' +
    'prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[1.1rem] prose-h2:sm:text-[1.25rem] ' +
    'prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1rem] prose-h3:sm:text-[1.1rem] ' +
    'prose-p:text-[0.95rem] prose-p:leading-[1.6] prose-p:sm:text-[1.05rem] prose-p:my-4 ' +
    'prose-a:text-br-accent prose-a:underline prose-a:underline-offset-2 prose-a:decoration-br-accent/40 prose-a:transition-colors hover:prose-a:decoration-br-accent ' +
    'prose-strong:text-br-ink prose-strong:font-bold ' +
    'prose-em:text-br-muted ' +
    'prose-code:font-mono prose-code:text-br-ink prose-code:text-[0.85em] prose-code:bg-br-ink/5 prose-code:px-1.5 prose-code:py-0.5 ' +
    'prose-li:text-[0.95rem] prose-li:sm:text-[1.05rem] prose-li:text-br-body ' +
    'prose-img:max-w-full ' +
    '[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5';

  if (html) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <div className={className}>{children}</div>;
}
