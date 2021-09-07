import SecondaryButton from "@components/buttons/secondary-button";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import { months } from "@site-data";
import {
  BlogCard,
  DateGroup,
  Month,
  ImageWrapper,
  DetailsWrapper,
  TitleGroup,
} from "./styles";

interface Props {
  post: BlogPost;
}

const PostListItem: React.FC<Props> = ({ post }: Props): JSX.Element => {
  const date: Date = new Date(post.date);

  return (
    <BlogCard>
      <DateGroup>
        <Month>{months[date.getMonth()].short}</Month>
        <SecondaryHeading alignment="left">
          {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
        </SecondaryHeading>
        <SubHeading alignment="left">{date.getFullYear()}</SubHeading>
      </DateGroup>
      <ImageWrapper>
        <ImageComponent image={post.image} />
      </ImageWrapper>
      <DetailsWrapper>
        <TitleGroup>
          <SecondaryHeading alignment="left">{post.title}</SecondaryHeading>
          <SubHeading alignment="left">{post.subTitle}</SubHeading>
        </TitleGroup>
        <Paragraph alignment="left">
          {`${post.content.split(".").splice(0, 2).join(".")}.`}
        </Paragraph>
        <SecondaryButton
          type="route"
          route={`/knowledge/${post.id}`}
          padding={false}
        >
          Read More
        </SecondaryButton>
      </DetailsWrapper>
    </BlogCard>
  );
};

export default PostListItem;
