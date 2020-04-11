import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ArrowLeftCircle } from 'react-feather';
import { darken, lighten } from 'polished';
import rgba from 'polished/lib/color/rgba';

import theme from '../../config/Theme';
import { mediaV2 } from '../utils/media';
import { zIndex } from '../utils/zIndex';
import config from '../../config/SiteConfig';

const HeaderWrapper: any = styled.header`
  background: linear-gradient(
      -185deg,
      ${props => rgba(darken(0.1, props.theme.colors.primary), 0.2)},
      ${props => rgba(lighten(0.1, props.theme.colors.rocketBlack), 0.7)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  padding: 1rem 0.5rem 2rem;
  position: relative;
  text-align: center;

  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: ${zIndex.medium};
  }

  @media ${mediaV2.tablet} {
    padding: 4rem 2rem 6rem;
  }

  @media ${mediaV2.desktop} {
    padding: 8rem 2rem 10rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: ${zIndex.high};

  a {
  	border-bottom: 0;
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.white};
      opacity: 0.85;
    }
  }
`;

const GoBackLink = styled(Link)`
	border-bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex.high};

  &:hover {
		border-bottom: 0;
  }

  @media ${mediaV2.tablet} {
  	top: -40px;
  }

  @media ${mediaV2.desktop} {
	  top: -110px;
  }
`;

interface Props {
  children?: any;
  banner?: string;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { banner, children } = this.props;

    return (
      <HeaderWrapper banner={banner || config.defaultBg}>
        <Content>
					<GoBackLink to="/">
						<ArrowLeftCircle size={32} />
					</GoBackLink>
					{children}
        </Content>
      </HeaderWrapper>
    );
  }
}
