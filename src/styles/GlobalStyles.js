import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /*
    CSS Reset & Global styles
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%; /* 16px */
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fefefe;
    color: #222;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #e63946;
    text-decoration: none;
  }

  a:hover, a:focus-visible {
    text-decoration: underline;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  main {
    min-height: calc(100vh - 130px);
  }

  ul {
    padding-left: 1.25rem;
  }
`;

export default GlobalStyles;
