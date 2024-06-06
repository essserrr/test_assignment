import { injectGlobal } from "@emotion/css";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  *, *::before, *::after {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
  }
`;
