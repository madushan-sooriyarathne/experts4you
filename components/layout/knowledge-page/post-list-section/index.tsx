import PostListItem from "@components/post-list-item";
import { PostContainer } from "./styles";

interface Props {
  posts: BlogPost[];
}

const PostListSection: React.FC<Props> = ({ posts }: Props): JSX.Element => {
  return (
    <PostContainer>
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </PostContainer>
  );
};

export default PostListSection;
