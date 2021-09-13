import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { getMultipleEntries, serializeAssetUrls } from "utils/contentful";

import Page from "@components/layout/common/page";
import Cover from "@components/layout/blog-post/cover";
import Post from "@components/layout/blog-post/post";

interface Props {
  post: BlogPost;
}

const BlogPostPage: NextPage<Props> = ({ post }: Props): JSX.Element => {
  return (
    <Page title={post.title}>
      <Cover image={post.image} />
      <Post post={post} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const blogPostsResult: ContentfulBlogPostFields[] =
    await getMultipleEntries<ContentfulBlogPostFields>("blogPost");

  const blogPost = blogPostsResult.find(
    (res) => res.id === (context.params as ParsedUrlQuery).blogId
  ) as ContentfulBlogPostFields;

  const post: BlogPost = {
    ...blogPost,
    image: serializeAssetUrls(blogPost.image.fields, "src"),
  };

  return {
    props: {
      post,
    },
  };
};

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const blogPostsResult: ContentfulBlogPostFields[] =
      await getMultipleEntries<ContentfulBlogPostFields>("blogPost");

    const paths = blogPostsResult.map((res) => ({
      params: { blogId: res.id },
    }));

    return {
      paths,
      fallback: false,
    };
  };

export { getStaticPaths, getStaticProps };
export default BlogPostPage;
