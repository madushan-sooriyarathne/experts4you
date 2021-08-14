import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Page from "@components/layout/common/page";
import HeroSection from "@components/layout/homepage/hero-section";
import Card from "@components/card";
import GridLayout from "@components/layout/common/grid-layout";
import TitledGrid from "@components/layout/common/titled-grid";
import WhoWeAre from "@components/layout/homepage/who-are-we";
import TestimonialsSection from "@components/layout/common/testimonials";

import { services, heroData, testimonials } from "@site-data";

interface Props {
  services: Service[];
  heroData: HeroData;
  testimonials: Testimonial[];
}

const HomePage: React.FC<Props> = ({
  services,
  heroData,
  testimonials,
}: Props): JSX.Element => {
  return (
    <Page>
      {/* <Hero services={services} /> */}
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
      <WhoWeAre />
      <TitledGrid
        heading="What we do"
        subHeading="Services that lead the way to better business"
        route="/services"
      >
        {services.map((service) => (
          <Card
            withButton
            key={`service-${service.id}`}
            title={service.name}
            description={service.description}
            route={`/services/${service.id}`}
            icon={service.icon}
          />
        ))}
      </TitledGrid>
      <TestimonialsSection testimonials={testimonials} />
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
      testimonials,
    },
  };
};

export { getStaticProps };
export default HomePage;
