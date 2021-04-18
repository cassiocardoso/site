import { FC } from 'react';
import { Globe, Home, User } from 'react-feather';

import { Work } from '../../@types/resume';
import * as S from './styles';

type Props = {
  work: Work;
};

export const WorkSnippet: FC<Props> = ({ work }: Props) => {
  return (
    <S.Snippet>
      <S.SnippetTitle>{work.name}</S.SnippetTitle>
      <S.SnippetSmall>
        {work.startDate} - {work.endDate}
      </S.SnippetSmall>
      <S.SnippetSummary>
        <span>
          <S.IconWrapper>
            <Globe size={20} />
          </S.IconWrapper>
          <a href={work.url} target="_blank" rel="noopener noreferrer">
            {work.url}
          </a>
        </span>
        <span>
          <S.IconWrapper>
            <Home size={20} />
          </S.IconWrapper>
          <span>{work.location}</span>
        </span>
        <span>
          <S.IconWrapper>
            <User size={20} />
          </S.IconWrapper>
          <span>{work.position}</span>
        </span>
      </S.SnippetSummary>
      <p>{work.summary}</p>
      <p>Highlights:</p>
      <ul>
        {work.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </S.Snippet>
  );
};
