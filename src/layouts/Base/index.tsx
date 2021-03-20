import { FC, ReactElement } from 'react';

import * as S from './styles';
import { ThemeSelector } from 'components/ThemeSelector';

type Props = {
  children: ReactElement;
};

// eslint-disable-next-line react/prop-types
export const BaseLayout: FC<Props> = ({ children }) => (
  <S.BaseLayout>
    <ThemeSelector />
    {children}
  </S.BaseLayout>
);
