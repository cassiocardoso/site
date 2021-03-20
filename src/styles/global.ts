import { createGlobalStyle, css } from 'styled-components';

type GlobalStylesProps = {
  darkModeActive: boolean;
};

const GlobalStyles = createGlobalStyle`
	:root {
		--gray-100: #16161a;
		--gray-200: #242629;
		--gray-500: #72757e;
		--gray-700: #94a1b2;
		--gray-900: #fffffe;
		--purple-500: #7f5af0;
		--green-500: #2cb67d;
		--red-500: #e45858;
		--yellow-500: #ffd803;
		--blue-500: #3da9fc;
		--orange-500: #faae2b;
		--pink-500: #ff8ba7;

		--anchor-color: var(--blue-500);
		--background-color: var(--gray-900);
		--heading-color: var(--gray-100);
		--headline-color: var(--gray-100);
		--text-color: var(--gray-200);

		--font-family-body: 'Nunito', sans-serif;
		--font-family-heading: 'Lora', serif;
		--font-family-monospace: 'JetBrains Mono', monospace;

		--background-theme-selector: var(--background-color);
		--border-color-theme-selector: var(--text-color);
		--text-color-theme-selector: var(--text-color);
		--text-color-theme-selector-hover: var(--headline-color);

		${({ darkModeActive }: GlobalStylesProps) =>
      darkModeActive &&
      css`
        --anchor-color: var(--purple-500);
        --background-color: var(--gray-100);
        --heading-color: var(--gray-900);
        --headline-color: var(--gray-900);
        --text-color: var(--gray-700);
      `}
	}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  html, body, #__next {
    height: 100%;
  }


  body {
		margin: 0;
		padding: 0;
    font-family: var(--font-family-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  	background-color: var(--background-color);
		color: var(--text-color);
	}

	h1, h2, h3, h4, h5, h6 {
		color: var(--heading-color);
		font-family: var(--font-family-heading);
	}

	a {
		color: var(--anchor-color);
	}
`;

export default GlobalStyles;
