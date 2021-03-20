import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 60rem;
`;

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }: Props) => <Wrapper>{children}</Wrapper>;
