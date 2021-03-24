import { Globe, Home, User } from 'react-feather';

import { Project } from '../../@types/resume';
import * as S from './styles';

export const ProjectSnippet = ({ project }: { project: Project }) => {
  return (
    <S.Snippet>
      <S.SnippetTitle>{project.organization}</S.SnippetTitle>
      <S.SnippetSmall>{project.startDate}</S.SnippetSmall>
      <S.SnippetSummary>
        <span>
          <S.IconWrapper>
            <Globe size={20} />
          </S.IconWrapper>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            {project.website}
          </a>
        </span>
        <span>
          <S.IconWrapper>
            <User size={20} />
          </S.IconWrapper>
          <span>{project.position}</span>
        </span>
      </S.SnippetSummary>
      <p>{project.summary}</p>
      <p>Highlights:</p>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </S.Snippet>
  );
};
