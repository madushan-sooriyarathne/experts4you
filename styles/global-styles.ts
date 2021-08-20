import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  keyframes,
} from "styled-components";

const pulse = keyframes`
    from {
       opacity: 1
    }
    to {
        opacity: 0.5;
    }
`;

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fonts.primary};
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

    .marker-element {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background-color: ${(props) => props.theme.colors.blackMedium};
        border: ${(props) => `3px solid ${props.theme.colors.blackLight}`};
        animation: ${pulse} 1s ease-in-out infinite alternate;
       
    }

`;

export default GlobalStyles;
