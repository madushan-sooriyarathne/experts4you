import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryMedium: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryMedium: string;
      secondaryLight: string;
      secondaryDark: string;
      white: string;
      black: string;
      blackMedium: string;
      blackLight: string;
      danger: string;
      warning: string;
      success: string;
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
      mainBg: string;
      blurBg: string;
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
    primary: "#09b9f4",
    primaryMedium: "#53cef7",
    primaryLight: "#e6f8fe",
    primaryDark: "#055d7a",
    secondary: "#e05b14",
    secondaryMedium: "#e98c5b",
    secondaryLight: "#fcefe8",
    secondaryDark: "#86370c",
    white: "#ffffff",
    black: "#32373E",
    blackMedium: "#474b51",
    blackLight: "#adafb2",
    danger: "##de4435",
    warning: "##e8bc0d",
    success: "##29c46a",
  },
  fonts: {
    primary: "'Inter', Tahoma, Geneva, Verdana, sans-serif",
    secondary: "'Gotham', Tahoma, Geneva, Verdana, sans-serif",
  },
  gradients: {
    headingLight: "linear-gradient(to right, #abbaab, #ffffff)",
    headingDark: "linear-gradient(135deg, #86370c 10%, #e05b14 100%);",
    secondaryDark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    secondaryLight: "linear-gradient(to right, #ffefba, #ffffff)",
    mainBg: "linear-gradient(135deg, #fffeff 10%, #d7fffe 100%)",
    blurBg:
      "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.8) 100%)",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {},
};

export default theme;
