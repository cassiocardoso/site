import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-family: var(----font-family-body);
`;

const NavLink = styled.a`
  color: #f04;
  text-decoration: none;
`;

export const Nav: FC = () => (
  <StyledNav>
    <Link href="/about">
      <NavLink>About</NavLink>
    </Link>
  </StyledNav>
);
