import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import { aboutCover } from "@site-data";

interface Props {
  coverData: Cover;
}

const AboutPage: NextPage<Props> = ({ coverData }: Props): JSX.Element => {
  return (
    <Page title="About">
      <PageCover cover={coverData} />
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
