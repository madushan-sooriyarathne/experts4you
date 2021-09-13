import ActionButton from "@components/buttons/action-button";
import PrimaryButton from "@components/buttons/primary-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import PostListItem from "@components/post-list-item";
import { useState } from "react";
import { PostContainer, Pagination, EmptyImage, EmptyMessage } from "./styles";

interface Props {
  posts: BlogPost[];
}

const PostListSection: React.FC<Props> = ({ posts }: Props): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const noOfPages =
    Math.floor(posts.length / 5) + (posts.length % 5 > 0 ? 1 : 0);
  const upperBound =
    page === noOfPages
      ? (page - 1) * 5 + posts.length - (page - 1) * 5
      : page * 5;

  const paginate = () => {
    if (page < noOfPages) {
      setPage((prv) => prv + 1);
    }
  };

  return posts.length > 1 ? (
    <PostContainer>
      {posts.slice(0, upperBound).map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
      <Pagination>
        {page < noOfPages && (
          <ActionButton onClick={() => paginate()} large>
            Load More
          </ActionButton>
        )}
      </Pagination>
    </PostContainer>
  ) : (
    <EmptyMessage>
      <EmptyImage src="/assets/img/empty.png" alt="No posts found!" />
      <SecondaryHeading alignment="center">No Posts Found!</SecondaryHeading>
      <PrimaryButton type="route" route="/">
        Go Back to home
      </PrimaryButton>
    </EmptyMessage>
  );
};

export default PostListSection;
