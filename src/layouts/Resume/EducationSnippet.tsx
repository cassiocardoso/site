import { FC } from 'react';
import { Home } from 'react-feather';

import { Education } from '../../@types/resume';
import * as S from './styles';

type Props = {
  education: Education;
};

export const EducationSnippet: FC<Props> = ({ education }: Props) => {
  return (
    <S.Snippet>
      <S.SnippetTitle>{education.area}</S.SnippetTitle>
      <S.SnippetSmall>Graduated in: {education.endDate}</S.SnippetSmall>
      <S.SnippetSummary>
        <span>
          <S.IconWrapper>
            <Home size={20} />
          </S.IconWrapper>
          <span>{education.institution}</span>
        </span>
      </S.SnippetSummary>
    </S.Snippet>
  );
};
