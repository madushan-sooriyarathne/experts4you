import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import PostListSection from "@components/layout/knowledge-page/post-list-section";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import {
  getMultipleEntries,
  getSingleAsset,
  getSingleEntry,
  serializeAssetUrls,
} from "utils/contentful";

interface Props {
  posts: BlogPost[];
  cover: Cover;
}

const KnowledgePage: NextPage<Props> = ({
  posts,
  cover,
}: Props): JSX.Element => {
  return (
    <Page title="Knowledge | Latest Business news">
      <PageCover cover={cover} />
      <PostListSection posts={posts} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const postsResult: ContentfulBlogPostFields[] =
    await getMultipleEntries<ContentfulBlogPostFields>("blogPost");

  const blogPosts: BlogPost[] = postsResult.map((res) => ({
    ...res,
    image: serializeAssetUrls(res.image.fields, "src"),
  }));

  // Page cover
  const coverResult: ContentfulCoverFields =
    await getSingleEntry<ContentfulCoverFields>("5t8UAhTmtNurUbRw4SNEo9");
  const cover: Cover = {
    ...coverResult,
    image: serializeAssetUrls(coverResult.image.fields, "src"),
  };

  return {
    props: {
      posts: blogPosts,
      cover,
    },
  };
};

export { getStaticProps };
export default KnowledgePage;
