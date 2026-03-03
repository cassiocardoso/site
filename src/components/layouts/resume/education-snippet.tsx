import { Home } from 'lucide-react';

import { type Education } from '@/types/resume';

type Props = {
  education: Education;
};

export function EducationSnippet({ education }: Props) {
  return (
    <div className="mb-lg [&_li]:mb-xs [&_p]:my-sm">
      <h4 className="mb-xs inline-block">{education.area}</h4>
      <small className="ml-sm font-body italic">Graduated in: {education.endDate}</small>
      <div className="mb-xs">
        <span className="mb-1 flex items-center gap-xs">
          <Home size={20} />
          <span>{education.institution}</span>
        </span>
      </div>
    </div>
  );
}
