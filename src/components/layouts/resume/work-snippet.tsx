import { Globe, Home, User } from 'lucide-react';

import { type Work } from '@/types/resume';

type Props = {
  work: Work;
};

export function WorkSnippet({ work }: Props) {
  return (
    <div className="mb-lg [&_li]:mb-xs [&_p]:my-sm">
      <h4 className="mb-xs inline-block">{work.name}</h4>
      <small className="ml-sm font-body italic">
        {work.startDate} - {work.endDate}
      </small>
      <div className="mb-xs">
        <span className="mb-1 flex items-center gap-xs">
          <Globe size={20} />
          <a href={work.url} target="_blank" rel="noopener noreferrer">
            {work.url}
          </a>
        </span>
        <span className="mb-1 flex items-center gap-xs">
          <Home size={20} />
          <span>{work.location}</span>
        </span>
        <span className="mb-1 flex items-center gap-xs">
          <User size={20} />
          <span>{work.position}</span>
        </span>
      </div>
      <p>{work.summary}</p>
      <p>Highlights:</p>
      <ul>
        {work.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
