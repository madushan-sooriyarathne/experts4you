import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      // primaryMedium: string;
      // primaryLight: string;
      secondary: string;
      // secondaryMedium: string;
      // secondaryLight: string;
      white: string;
      black: string;
      // blackLight: string;
      // danger: string;
      // warning: string;
      // success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {
      headingLight: string;
      headingDark: string;
      secondaryDark: string;
      secondaryLight: string;
    };
    shadows: {
      close: string;
      spread: string;
    };
    responsive: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "red",
    // primaryMedium: string,
    // primaryLight: string,
    secondary: "yellow",
    // secondaryMedium: string,
    // secondaryLight: string,
    white: "white",
    black: "black",
    // blackLight: string,
    // danger: string,
    // warning: string,
    // success: string,
  },
  fonts: {
    primary: "'Inter', Tahoma, Geneva, Verdana, sans-serif",
    secondary: "'Gotham', Tahoma, Geneva, Verdana, sans-serif",
  },
  gradients: {
    headingLight: "linear-gradient(to right, #abbaab, #ffffff)",
    headingDark: "linear-gradient(to right, #c31432, #240b36)",
    secondaryDark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    secondaryLight: "linear-gradient(to right, #ffefba, #ffffff)",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {},
};

export default theme;
