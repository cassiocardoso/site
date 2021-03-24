import { Globe, Home, User } from 'react-feather';

import { Education } from '../../@types/resume';
import * as S from './styles';

export const EducationSnippet = ({ education }: { education: Education }) => {
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
