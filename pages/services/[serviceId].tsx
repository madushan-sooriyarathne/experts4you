import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";

import Page from "@components/layout/common/page";
import { services } from "@site-data";
import { ParsedUrlQuery } from "querystring";
import PageCover from "@components/layout/common/page-cover";
import CTASection from "@components/layout/common/cta-section";
import FAQSection from "@components/layout/common/faq-section";
import AboutSection from "@components/layout/common/about-section";
import StepSection from "@components/layout/service-page/steps-section";
import CallRequest from "@components/layout/common/call-request";

interface Props {
  service: Service;
}

const ServicePage: NextPage<Props> = ({ service }: Props): JSX.Element => {
  return (
    <Page title={service.name}>
      <PageCover
        cover={{
          heading: service.name,
          description: service.description,
          id: service.id,
          image: service.image,
          route: {
            name: `Get a free consultation`,
            url: "/get-quote",
          },
          secondaryRoute: {
            name: `Contact a expert`,
            url: "/contact",
          },
        }}
      />
      <AboutSection
        primaryHeading={service.name}
        subHeading="About"
        description={service.about}
      />
      <StepSection steps={service.steps} />
      <CTASection
        heading="Ready to get on-board with us?"
        buttonText="Let's get started"
      />
      <FAQSection faqs={service.faqs} />
      <CallRequest />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      service: services.find(
        (service) => service.id === (context.params as ParsedUrlQuery).serviceId
      ) as Service,
    },
  };
};

const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult> => {
  const paths: { params: { serviceId: string } }[] = services.map(
    (service) => ({ params: { serviceId: service.id } })
  );

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };

export default ServicePage;
