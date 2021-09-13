import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import SubHeading from "@components/headings/sub-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import Paragraph from "@components/paragraph";
import { Container, TitleWrapper } from "./styles";

interface Props {
  post: BlogPost;
}

const Post: React.FC<Props> = ({ post }: Props): JSX.Element => {
  return (
    <Container>
      <TitleWrapper>
        <TertiaryHeading alignment="left">{post.date}</TertiaryHeading>
        <PrimaryHeading alignment="left">{post.title}</PrimaryHeading>
        <SubHeading alignment="left">{post.subTitle}</SubHeading>
      </TitleWrapper>
      <Paragraph alignment="left">{post.content}</Paragraph>
      <PrimaryButton type="route" route="/knowledge">
        Back to All Posts
      </PrimaryButton>
    </Container>
  );
};

export default Post;
