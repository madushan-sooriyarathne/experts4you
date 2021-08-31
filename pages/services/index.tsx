import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";

import GridLayout from "@components/layout/common/grid-layout";
import Card from "@components/card";
import CallRequest from "@components/layout/common/call-request";
import CTASection from "@components/layout/common/cta-section";
import FAQSection from "@components/layout/common/faq-section";
import {
  getAssetUrl,
  getMultipleEntries,
  getSingleEntry,
  serializeAssetUrls,
} from "utils/contentful";

interface Props {
  services: Service[];
  servicesCover: Cover;
  commonFaq: FAQ[];
}

const ServicesPage: NextPage<Props> = ({
  services,
  servicesCover,
  commonFaq,
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
            key={service.id}
          />
        ))}
      </GridLayout>
      <FAQSection faqs={commonFaq} />
      <CTASection buttonText="Let's get started" />
      <CallRequest />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // fetch services data from CMS

  const servicesResult: ContentfulServiceFields[] =
    await getMultipleEntries<ContentfulServiceFields>("service");

  const services: Service[] = servicesResult.map((res) => ({
    ...res,
    faqs: res.faqs.map((faq) => faq.fields),
    steps: res.steps.map((step) => ({
      ...step.fields,
      icon: getAssetUrl(step.fields.icon),
    })),
    image: serializeAssetUrls(res.image.fields, "src"),
    icon: getAssetUrl(res.icon),
  }));

  // fetch cover data from CMS;
  const serviceCoverResult: ContentfulCoverFields =
    await getSingleEntry<ContentfulCoverFields>("7wVlHLojYzIIkXeLfLOeB1");

  const servicesCover: Cover = {
    ...serviceCoverResult,
    image: serializeAssetUrls(serviceCoverResult.image.fields, "src"),
  };

  // fetch faqs data from CMS
  const commonFaq: FAQ[] = await getMultipleEntries<FAQ>("faq");

  return {
    props: {
      servicesCover,
      services,
      commonFaq,
    },
  };
};

export { getStaticProps };

export default ServicesPage;
