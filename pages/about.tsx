import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import AboutSection from "@components/layout/common/about-section";
import Industries from "@components/layout/about-page/industries";
import CTASection from "@components/layout/common/cta-section";
import { getSingleEntry, serializeAssetUrls } from "utils/contentful";

interface Props {
  coverData: Cover;
  company: Company;
}

const AboutPage: NextPage<Props> = ({
  coverData,
  company,
}: Props): JSX.Element => {
  return (
    <Page title="About">
      <PageCover cover={coverData} />
      <AboutSection
        subHeading="About us"
        primaryHeading={company.name}
        description={company.about}
      />
      <Industries industries={company.industries} />
      <CTASection buttonText={"Get a free consultation"} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  // fetch cover data from CMS;
  const aboutCoverResult: ContentfulCoverFields =
    await getSingleEntry<ContentfulCoverFields>("2waNPYyrY41ynq2PamMOR9");

  const aboutCover: Cover = {
    ...aboutCoverResult,
    image: serializeAssetUrls(aboutCoverResult.image.fields, "src"),
  };

  // fetch company data
  const companyResult: ContentfulCompanyFields =
    await getSingleEntry<ContentfulCompanyFields>("42ugWEZ7Ku9wTqifwTwO7N");

  const company: Company = {
    ...companyResult,
    industries: companyResult.industries.map((ind) =>
      serializeAssetUrls(ind.fields, "icon")
    ),
    values: companyResult.values.map((value) =>
      serializeAssetUrls(value.fields, "icon")
    ),
    image: serializeAssetUrls(companyResult.image.fields, "src"),
  };

  return {
    props: {
      coverData: aboutCover,
      company,
    },
  };
};

export { getStaticProps };
export default AboutPage;
