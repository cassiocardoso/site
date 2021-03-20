import { FC, ReactNode } from 'react';

import * as S from './styles';
import { ThemeSelector } from 'components/ThemeSelector';
import { Container } from '../../components/Container';

type Props = {
  children: ReactNode;
  title: string;
};

export const PageLayout: FC<Props> = ({ children, title }: Props) => (
  <S.PageLayout>
    <Container>
      <ThemeSelector />
      <S.PageTitle>{title}</S.PageTitle>
      {children}
    </Container>
  </S.PageLayout>
);
