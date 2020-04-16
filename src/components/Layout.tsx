import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../../config/Theme';
import { mediaV2 } from '../utils/media';
import split from 'lodash/split';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }

  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.gray.default};

    @media ${mediaV2.phoneOnly} {
      font-size: 0.8rem;
    }
  }

  a {
  	border-bottom: 0.1rem solid ${theme.colors.ceruleanBlue};
    color: ${theme.colors.ceruleanBlue};
    text-decoration: none;
    transition: all ${theme.transitions.normal};

    &:hover {
	    border-bottom: 0.1rem solid ${theme.colors.grey.default};
    	color: ${theme.colors.grey.default};
  	}
  }

  abbr[title] {
  	border-bottom: 0.2rem dotted ${theme.colors.ceruleanBlue};
  }

  h1, h2, h3, h4 {
    color: ${theme.colors.rocketBlack};
  }

  blockquote {
    font-style: italic;
    position: relative;

    &:before {
			background: ${theme.colors.primary};
			content: "";
			height: 100%;
			margin-left: -1.6rem;
			position: absolute;
			width: 0.3rem;
		}
  }

  label {
    color: ${theme.colors.rocketBlack};
    margin-bottom: .5rem;
  }

  input, textarea {
    border-radius: .5rem;
    border: 0.1rem solid ${theme.colors.icyWhite};
    background: ${theme.colors.icyWhite};
    padding: .25rem 1rem;

    &:hover,
		&:active {
			border-color: ${theme.colors.pewterGray};
		}

    &:focus {
      outline: none;
    }
  }

  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  padding: 3rem 0;
  text-align: center;

  p {
    font-size: 0.75rem;
    margin-top: 2rem;
  }
`;

const FooterLink = styled(Link)`
	border-bottom: 0;
	color: ${theme.colors.rocketBlack};
	margin: 0.75rem;
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "DD.MM.YYYY")
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
						<Helmet>
							<link rel="canonical" href="https://cassio.codes" />
							<link rel="preconnect" href="https://fonts.googleapis.com" />
							<link rel="preconnect" href="https://www.google-analytics.com" />
							<link rel="preconnect" href="https://www.googletagmanager.com" />
							<meta name="description" content="I am a passionate and self-motivated front-end engineer with more than eight years of experience. I am passionate about the JavaScript world." />
						</Helmet>
            <React.Fragment>
              <GlobalStyle />
              {children}
              <Footer>
								<nav>
									<FooterLink to="/">Home</FooterLink>
									<FooterLink to="/about">About Me</FooterLink>
									<FooterLink to="/purpose">Purpose</FooterLink>
									<FooterLink to="/resume">Resume</FooterLink>
									<FooterLink to="/blog">Blog</FooterLink>
									<FooterLink to="/contact">Contact</FooterLink>
								</nav>
                <p>&copy; {split(data.site.buildTime, '.')[2]} by Cassio Cardoso</p>
              </Footer>
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}
