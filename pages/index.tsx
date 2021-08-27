import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Page from "@components/layout/common/page";
import MainServicesSection from "@components/layout/homepage/main-services";
import HeroSection from "@components/layout/homepage/hero-section";
import Card from "@components/card";
import TitledGrid from "@components/layout/common/titled-grid";
import WhoWeAre from "@components/layout/homepage/who-are-we";
import TestimonialsSection from "@components/layout/homepage/testimonials";

import {
  services,
  heroData,
  testimonials,
  partners,
  ourValues,
} from "@site-data";
import React, { useEffect, useState } from "react";
import StaticCard from "@components/static-card";
import CallRequest from "@components/layout/common/call-request";

interface Props {
  services: Service[];
  heroData: HeroData;
  testimonials: Testimonial[];
  ourValues: CardContentType[];
  partners: Partner[];
}

const HomePage: React.FC<Props> = ({
  services,
  heroData,
  testimonials,
  ourValues,
  partners,
}: Props): JSX.Element => {
  const [upperBound, setUpperBound] = useState<number>(6);

  useEffect(() => {
    setUpperBound(window.innerWidth > 1200 ? 6 : 4);
  }, []);

  return (
    <Page title="Experts 4 You - Your trusted partner in business">
      <HeroSection heroData={heroData} />
      <MainServicesSection services={services} />

      <WhoWeAre />
      <TitledGrid
        heading="What we do"
        subHeading="Services that lead the way to better business"
        route="/services"
        id="what-we-do"
      >
        {services.slice(0, upperBound).map((service) => (
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
      <TitledGrid
        heading="Why us"
        subHeading={`We are to assist on how to full fill your financial responsibilities today, confirming tomorrow to be, "all perfect".`}
        id="why-us"
      >
        {ourValues.map((value, index) => (
          <StaticCard content={value} key={`static-card-${index}`} />
        ))}
      </TitledGrid>
      <TestimonialsSection testimonials={testimonials} partners={partners} />
      <CallRequest />
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
      ourValues,
      partners,
    },
  };
};

export { getStaticProps };
export default HomePage;
