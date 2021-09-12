import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import PostListSection from "@components/layout/knowledge-page/post-list-section";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import { posts } from "@site-data";

// cover data
// TODO: move to CMS
const knowledgeCover: Cover = {
  id: "knowledge-cover",
  heading: "Knowledge",
  description: "Latest business news from all over the world!",
  image: {
    src: "/assets/img/phone.jpg",
    blurUrl: "cddsafda dafdafd",
  },
};

interface Props {
  posts: BlogPost[];
}

const KnowledgePage: NextPage<Props> = ({ posts }: Props): JSX.Element => {
  return (
    <Page title="Knowledge | Latest Business news">
      <PageCover cover={knowledgeCover} />
      <PostListSection posts={posts} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      posts: posts,
    },
  };
};

export { getStaticProps };
export default KnowledgePage;
