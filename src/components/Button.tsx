import styled from 'styled-components';
import curriedDarken from 'polished/lib/color/darken';

import theme from '../../config/Theme';

export const Button: any = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border-radius: ${(props: any) => (props.big ? '1.5rem' : '1rem')};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${theme.colors.white};
  display: inline-flex;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: ${(props: any) => (props.big ? '0.5rem 1.6rem' : '0.25rem 1.5rem')};
  transition: all ${(props: any) => props.theme.transitions.normal};

  &:hover {
    background: ${(props: any) => curriedDarken(0.3, props.theme.colors.primary)};
    cursor: pointer;
    transform: translateY(-0.1rem);
  }

  &:focus {
    outline: none;
  }

  svg {
  	margin-right: 1rem;
  }
`;
