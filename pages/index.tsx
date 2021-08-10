import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Page from "@components/layout/common/page";
import Hero from "@components/layout/homepage/hero";
import HeroSection from "@components/layout/homepage/hero-section";

import { services, heroData } from "@site-data";

interface Props {
  services: Service[];
  heroData: HeroData;
}

const HomePage: React.FC<Props> = ({
  services,
  heroData,
}: Props): JSX.Element => {
  return (
    <Page>
      <Hero services={services} />
      <HeroSection heroData={heroData} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      services,
      heroData,
    },
  };
};

export { getStaticProps };
export default HomePage;
