import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";

import Page from "@components/layout/common/page";
import { ParsedUrlQuery } from "querystring";
import PageCover from "@components/layout/common/page-cover";
import CTASection from "@components/layout/common/cta-section";
import FAQSection from "@components/layout/common/faq-section";
import AboutSection from "@components/layout/common/about-section";
import StepSection from "@components/layout/service-page/steps-section";
import CallRequest from "@components/layout/common/call-request";
import {
  getAssetUrl,
  getMultipleEntries,
  serializeAssetUrls,
} from "utils/contentful";
import { parseMarkdown } from "utils/parse-markdown";

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
  const servicesResult: ContentfulServiceFields[] =
    await getMultipleEntries<ContentfulServiceFields>("service");

  const fetchedService = servicesResult.find(
    (res) => res.id == (context.params as ParsedUrlQuery).serviceId
  ) as ContentfulServiceFields;

  const service: Service = {
    ...fetchedService,
    faqs: fetchedService.faqs.map((faq) => faq.fields),
    steps: fetchedService.steps.map((step) => ({
      ...step.fields,
      icon: getAssetUrl(step.fields.icon),
    })),
    image: serializeAssetUrls(fetchedService.image.fields, "src"),
    icon: getAssetUrl(fetchedService.icon),
  };

  return {
    props: {
      service,
    },
  };
};

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const servicesResult: ContentfulServiceFields[] =
      await getMultipleEntries<ContentfulServiceFields>("service");

    const paths: { params: { serviceId: string } }[] = servicesResult.map(
      (service) => ({ params: { serviceId: service.id } })
    );

    return {
      paths,
      fallback: false,
    };
  };

export { getStaticProps, getStaticPaths };

export default ServicePage;
