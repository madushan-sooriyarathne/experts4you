import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: black;
        scroll-behavior: smooth;
        overscroll-behavior: touch;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;

        text-rendering: optimizeLegibility;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }


    body {
        min-height: 100vh;
        width: 100vw;
        overflow-y: auto;
        overflow-x: hidden;
    }

    p {
        font-size: 1.5rem;
        text-align: center;
    }

`;

export default GlobalStyles;
