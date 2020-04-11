import styled from 'styled-components';

export const SectionTitle: any = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 2rem;
  padding: 2rem 0 0;
  position: relative;
  text-align: center;

  &:after {
    background: ${({ theme }) => theme.colors.white};
    bottom: -1.1rem;
    content: '';
    height: 0.1rem;
    left: 50%;
    margin-left: -25px;
    position: absolute;
    width: 50px;
  }
`;
