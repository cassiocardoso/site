import { FC, ReactNode } from 'react';

import * as S from './styles';
import { ThemeSelector } from 'components/ThemeSelector';

type Props = {
  children: ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }: Props) => (
  <S.BaseLayout>
    <ThemeSelector />
    {children}
  </S.BaseLayout>
);
