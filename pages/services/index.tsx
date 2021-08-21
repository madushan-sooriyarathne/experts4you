import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";

import { servicesCover, services } from "@site-data";
import GridLayout from "@components/layout/common/grid-layout";
import Card from "@components/card";
import CallRequest from "@components/layout/common/call-request";
import CTASection from "@components/layout/common/cta-section";

interface Props {
  services: Service[];
  servicesCover: Cover;
}

const ServicesPage: NextPage<Props> = ({
  services,
  servicesCover,
}: Props): JSX.Element => {
  return (
    <Page title="Services">
      <PageCover cover={servicesCover} />
      <GridLayout>
        {services.map((service) => (
          <Card
            title={service.name}
            description={service.description}
            icon={service.icon}
            route={`/services/${service.id}`}
            withButton
            key={service.id}
          />
        ))}
      </GridLayout>
      <CTASection />
      <CallRequest />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      servicesCover,
      services,
    },
  };
};

export { getStaticProps };

export default ServicesPage;
