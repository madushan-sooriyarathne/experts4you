import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Page from "@components/layout/common/page";
import Hero from "@components/layout/homepage/hero";
import HeroSection from "@components/layout/homepage/hero-section";

import Card from "@components/card";
import GridLayout from "@components/layout/common/grid-layout";

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
      <GridLayout gap="8rem">
        {services.map((service) => (
          <Card
            key={`service-${service.id}`}
            title={service.name}
            description={service.description}
            route={`/services/${service.id}`}
            icon={service.icon}
          />
        ))}
      </GridLayout>
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
