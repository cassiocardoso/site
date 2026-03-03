import { Globe, Home, User } from 'lucide-react';

import { type Work } from '@/types/resume';

type Props = {
  work: Work;
};

export function WorkSnippet({ work }: Props) {
  return (
    <div className="mb-8 border-l-2 border-br-ink/15 pl-4 sm:pl-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="m-0 font-display text-[0.95rem] font-bold uppercase tracking-[0.03em] text-br-ink sm:text-[1rem]">
          {work.name}
        </h4>
        <span className="font-mono text-[0.7rem] text-br-muted sm:text-[0.75rem]">
          {work.startDate} — {work.endDate}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-[0.8rem] text-br-muted sm:text-[0.85rem]">
        {work.url && (
          <span className="flex items-center gap-2">
            <Globe size={14} className="shrink-0 text-br-ink" />
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-br-accent underline-offset-2 hover:underline"
            >
              {work.url}
            </a>
          </span>
        )}
        <span className="flex items-center gap-2">
          <Home size={14} className="shrink-0 text-br-ink" />
          <span>{work.location}</span>
        </span>
        <span className="flex items-center gap-2">
          <User size={14} className="shrink-0 text-br-ink" />
          <span>{work.position}</span>
        </span>
      </div>
      <p className="my-3 text-[0.85rem] leading-[1.5] text-br-body sm:text-[0.9rem]">
        {work.summary}
      </p>
      <p className="mb-2 text-[0.8rem] font-bold text-br-ink sm:text-[0.85rem]">Highlights:</p>
      <ul className="list-disc space-y-1 pl-5 text-[0.8rem] text-br-body sm:text-[0.85rem]">
        {work.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
