import { ReactNode } from "react";
import Head from "next/head";

import Footer from "@components/layout/common/footer";
import NavBar from "@components/layout/common/navbar";
import { Content, Container } from "./styles";
import SnackBar from "@components/snack-bar";
import Floater from "@components/floater";
import CookieNotice from "@components/cookie-notice";

interface Props {
  children: ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({
  children,
  title = "Best business consultants in Sri Lanka",
}: Props): JSX.Element => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: "100%", opacity: 1, transition: { duration: 0.5 } }}
      key={title.replace(" ", "_").toLowerCase()}
    >
      <Head>
        <title>{`${title} | Expert4U`}</title>
      </Head>
      <SnackBar />
      <Floater />
      <CookieNotice />
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Page;
