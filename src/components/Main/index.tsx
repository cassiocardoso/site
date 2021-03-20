import { FC } from 'react';

import { ThemeSelector } from 'components/ThemeSelector';
import * as S from './styles';

export const Main: FC = () => {
  return (
    <S.Wrapper>
      <ThemeSelector />
    </S.Wrapper>
  );
};
