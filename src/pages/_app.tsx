import "styles/fonts";
import "styles/reset";
import "react-loading-skeleton/dist/skeleton.css";

import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { SkeletonTheme } from "react-loading-skeleton";

import { theme } from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => (
  <SkeletonTheme
    baseColor="#3B445A"
    highlightColor="#58637F"
    borderRadius="0.5rem"
    duration={4}
  >
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1f284d" />
        <meta name="format-detection" content="address=no" />
        <title>TEST PAGE</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  </SkeletonTheme>
);

export default App;
