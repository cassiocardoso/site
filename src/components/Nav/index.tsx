import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { screenMd } from 'styles/tokens';

const StyledNav = styled.nav`
  font-family: var(--font-family-body);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${screenMd}) {
    flex-direction: row;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
  text-decoration: underline;
`;

export const Nav: FC = () => (
  <StyledNav>
    <Link href="/about">
      <NavLink href="/about">About Me</NavLink>
    </Link>
    <Link href="/uses">
      <NavLink href="/uses">Uses</NavLink>
    </Link>
    <Link href="/purpose">
      <NavLink href="/purpose">Purpose</NavLink>
    </Link>

    <NavLink href="mailto:caugusto.cardoso@gmail.com">Contact</NavLink>
  </StyledNav>
);
