import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import { aboutCompany, aboutCover } from "@site-data";
import AboutSection from "@components/layout/common/about-section";
import Industries from "@components/layout/about-page/industries";
import CTASection from "@components/layout/common/cta-section";

interface Props {
  coverData: Cover;
}

const AboutPage: NextPage<Props> = ({ coverData }: Props): JSX.Element => {
  return (
    <Page title="About">
      <PageCover cover={coverData} />
      <AboutSection
        subHeading={aboutCompany.name}
        primaryHeading={aboutCompany.tagLine}
        description={aboutCompany.about}
      />
      <Industries industries={aboutCompany.industries} />
      <CTASection buttonText={"Get a free consultation"} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      coverData: aboutCover,
    },
  };
};

export { getStaticProps };
export default AboutPage;
