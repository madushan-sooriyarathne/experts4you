import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@styles/global-styles";
import theme from "@styles/theme";
import "@styles/fonts.css";
import { useEffect, useState } from "react";
import LoadingScreen from "@components/loading-screen";
import { AnimatePresence } from "framer-motion";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const handleContentLoad = () => {
      setLoading(false);
      document.body.style.overflowY = "auto";
    };

    // if loading get delayed, remove loader after 10 seconds
    setTimeout(() => handleContentLoad(), 5000);

    window.addEventListener("load", handleContentLoad);

    return () => window.removeEventListener("load", handleContentLoad);
  }, []);

  return (
    <>
      <Head>
        <title>
          Experts 4 You | Your one stop business consultation solutions.
        </title>
      </Head>
      {/* View port meta tags here */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AnimatePresence initial={false}>
          {loading && <LoadingScreen />}
        </AnimatePresence>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
