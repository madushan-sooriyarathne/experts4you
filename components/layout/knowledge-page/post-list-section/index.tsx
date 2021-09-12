import ActionButton from "@components/buttons/action-button";
import PostListItem from "@components/post-list-item";
import { useState } from "react";
import { PostContainer, Pagination } from "./styles";

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

  return (
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
  );
};

export default PostListSection;
