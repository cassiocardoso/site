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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7f5af0" />
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
