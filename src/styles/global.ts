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

		--spacing-xs: 0.5rem;
		--spacing-sm: 1rem;
		--spacing-md: 2rem;
		--spacing-lg: 3rem;
		--spacing-xl: 4rem;
		--spacing-xxl: 6rem;

		--font-size-sm: 0.9rem;
		--font-size-md: 20px;
		--font-size-lg: 1.5rem;
		--font-size-xl: 4rem;
		--font-size-xxl:6rem;

		--radius-sm: 8px;
		--radius-md: 16px;

		--anchor-color: var(--blue-500);
		--background-color: var(--gray-900);
		--code-color: var(--gray-100);
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
        --code-color: var(--gray-900);
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

	h1, h2 {
		margin: var(--spacing-md) 0;
	}

	h3, h4, h5, h6 {
		margin: var(--spacing-sm) 0;
	}

	p {
		font-size: var(--font-size-md);
		line-height: 1.3;
		margin: var(--spacing-md) 0;
	}

	a {
		color: var(--anchor-color);
	}

	pre {
		overflow: auto;
		padding: var(--spacing-sm);
		border-left: 2px solid;
	}

	code {
		color: var(--code-color);
		font-family: var(--font-family-monospace);
	}
`;

export default GlobalStyles;
