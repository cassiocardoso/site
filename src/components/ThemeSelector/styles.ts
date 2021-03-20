import styled from 'styled-components';

import { screenMd } from 'styles/tokens';

export const Switch = styled.div`
  align-items: center;
  border: 0.2rem solid;
  border-radius: 2rem;
  display: flex;
  font-family: var(--font-family-monospace);
  height: 2.5rem;
  justify-content: center;
  padding: 0 1rem;
  position: absolute;
  top: 2rem;
  left: 1rem;
  width: 20rem;
  background: var(--background-theme-selector);
  border-color: var(--border-color-theme-selector);

  @media screen and (min-width: ${screenMd}) {
    left: auto;
    right: 2rem;
  }
`;

export const SwitchLabel = styled.label`
  cursor: pointer;
  color: var(--text-color-theme-selector);
  transition: color 200ms ease-out;
  padding: 0 1rem;

  &:hover {
    color: var(--text-color-theme-selector-hover);
  }
`;

export const SwitchIndicator = styled.div`
  height: 4rem;
  left: 0;
  position: absolute;
  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97);
  width: 4rem;
`;

export const Input = styled.input`
  display: none;

  &#Auto:checked ~ ${SwitchIndicator} {
    background: url(/auto.svg) no-repeat;
    background-size: contain;
    transform: translateX(3rem);
  }

  &#Dark:checked ~ ${SwitchIndicator} {
    background: url(/dark.svg) no-repeat;
    background-size: contain;
    transform: translateX(7.5rem);
  }

  &#Light:checked ~ ${SwitchIndicator} {
    background: url(/light.svg) no-repeat;
    background-size: contain;
    transform: translateX(12rem);
  }
`;
