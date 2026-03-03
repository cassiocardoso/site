import { Home } from 'lucide-react';

import { type Education } from '@/types/resume';

type Props = {
  education: Education;
};

export function EducationSnippet({ education }: Props) {
  return (
    <div className="mb-8 border-l-2 border-br-ink/15 pl-4 sm:pl-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="m-0 font-display text-[0.95rem] font-bold uppercase tracking-[0.03em] text-br-ink sm:text-[1rem]">
          {education.area}
        </h4>
        <span className="font-mono text-[0.7rem] text-br-muted sm:text-[0.75rem]">
          Graduated in: {education.endDate}
        </span>
      </div>
      <div className="mt-2 text-[0.8rem] text-br-muted sm:text-[0.85rem]">
        <span className="flex items-center gap-2">
          <Home size={14} className="shrink-0 text-br-ink" />
          <span>{education.institution}</span>
        </span>
      </div>
    </div>
  );
}
