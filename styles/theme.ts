import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryMedium: string;
      primaryLight: string;
      primaryDark: string;
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
      coverBg: string;
    };
    shadows: {
      close: string;
      spread: string;
    };
    responsive: {
      width1600: string;
      width1500: string;
      width1400: string;
      smallDesktop: string;
      width1200: string;
      width1100: string;
      width1000: string;
      width900: string;
      width800: string;
      width700: string;
      width600: string;
      width500: string;
      mobile: string;
      mobileSmall: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#0077B6",
    primaryMedium: "#99DBFF",
    primaryLight: "#EBF8FF",
    primaryDark: "#03045E",
    white: "#ffffff",
    black: "#32373E",
    blackMedium: "#474b51",
    blackLight: "#adafb2",
    danger: "#de4435",
    warning: "#e8bc0d",
    success: "#29c46a",

    // primary: "#e05b14",
    // primaryMedium: "#e98c5b",
    // primaryLight: "#fcefe8",
    // primaryDark: "#86370c",
  },
  fonts: {
    primary: "'Inter', Tahoma, Geneva, Verdana, sans-serif",
    secondary: "'Gotham', Tahoma, Geneva, Verdana, sans-serif",
  },
  gradients: {
    headingLight: "linear-gradient(to right, #90E0EF, #DBF5FA)",
    headingDark: "linear-gradient(135deg, #010228 10%, #0096C7 100%);",
    secondaryDark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    secondaryLight: "linear-gradient(to right, #DBF5FA, #ffffff)",
    mainBg: "linear-gradient(135deg, #C9F0F8 10%, #d7fffe 100%)",
    blurBg:
      "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.8) 100%)",
    coverBg: "linear-gradient(135deg, #DBF5FA 10%, #90E0EF 100%);",

    // headingDark: "linear-gradient(135deg, #86370c 10%, #e05b14 100%);",
    // secondaryDark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    // secondaryLight: "linear-gradient(to right, #ffefba, #ffffff)",
    // mainBg: "linear-gradient(135deg, #fffeff 10%, #d7fffe 100%)",
    // blurBg:
    //   "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.8) 100%)",
    // coverBg: "linear-gradient(135deg, #ffecd2 10%, #fcb69f 100%);",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {
    width1600: "@media only screen and (max-width: 100em)",
    width1500: "@media only screen and (max-width: 93.75em)",
    width1400: "@media only screen and (max-width: 87.5em)",
    smallDesktop: "@media only screen and (max-width: 85.375em)", // 1366px
    width1200: "@media only screen and (max-width: 75em)",
    width1100: "@media only screen and (max-width: 68.75em)",
    width1000: "@media only screen and (max-width: 62.5em)",
    width900: "@media only screen and (max-width: 56.25em)",
    width800: "@media only screen and (max-width: 50em)",
    width700: "@media only screen and (max-width: 43.75em)",
    width600: "@media only screen and (max-width: 37.5em)",
    width500: "@media only screen and (max-width: 31.25em)",
    mobile: "@media only screen and (max-width: 25em)", // 400px
    mobileSmall: "@media only screen and (max-width: 18.75em)", // 300px
  },
};

export default theme;
