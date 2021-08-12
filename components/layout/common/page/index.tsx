import { ReactNode } from "react";
import Head from "next/head";

import Footer from "@components/layout/common/footer";

import { Content, Container } from "./styles";

interface Props {
  children: ReactNode;
  title?: string;
}

const Page: React.FC<Props> = ({
  children,
  title = "madushan.dev",
}: Props): JSX.Element => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: "100%", opacity: 1, transition: { duration: 0.5 } }}
      key={title.replace(" ", "_").toLowerCase()}
    >
      <Head>
        <title>{`${title} | madushan.dev`}</title>
      </Head>
      {/* <NavBar /> */}
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Page;
