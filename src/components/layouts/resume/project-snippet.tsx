import { Globe, User } from 'lucide-react';

import { type Project } from '@/types/resume';

type Props = {
  project: Project;
};

export function ProjectSnippet({ project }: Props) {
  return (
    <div className="mb-lg [&_li]:mb-xs [&_p]:my-sm">
      <h4 className="mb-xs inline-block">{project.organization}</h4>
      <small className="ml-sm font-body italic">{project.startDate}</small>
      <div className="mb-xs">
        <span className="mb-1 flex items-center gap-xs">
          <Globe size={20} />
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            {project.website}
          </a>
        </span>
        <span className="mb-1 flex items-center gap-xs">
          <User size={20} />
          <span>{project.position}</span>
        </span>
      </div>
      <p>{project.summary}</p>
      <p>Highlights:</p>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
