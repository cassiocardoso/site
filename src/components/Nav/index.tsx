import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-family: var(----font-family-body);
`;

const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-decoration: underline;
`;

export const Nav: FC = () => (
  <StyledNav>
    <Link href="/about">
      <NavLink href="/about">About Me</NavLink>
    </Link>
    <NavLink href="mailto:caugusto.cardoso@gmail.com">Contact</NavLink>
  </StyledNav>
);
