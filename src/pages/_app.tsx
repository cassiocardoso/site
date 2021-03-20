import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import withDarkMode, { useDarkMode, MODE } from 'next-dark-mode';
import mailgo from 'mailgo';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  const { darkModeActive } = useDarkMode();
  const mailgoConfig = {
    dark: darkModeActive,
  };

  useEffect(() => {
    mailgo(mailgoConfig);
  }, [darkModeActive]);

  return (
    <>
      <Head>
        <title>Cassio Cardoso</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fffffe" />
        <meta name="description" content="My personal website" />
      </Head>
      <GlobalStyles darkModeActive={darkModeActive} />
      <Component {...pageProps} />
    </>
  );
}

export default withDarkMode(App, { defaultMode: MODE.DARK });
