import PrimaryHeading from "@components/headings/primary-heading";
import SubHeading from "@components/headings/sub-heading";
import ImageComponent from "@components/image-component";
import {
  CoverContainer,
  Cover,
  CoverBg,
  CoverBgOverlay,
  SubHeadingBox,
  HeadingWrapper,
} from "./styles";

interface Props {
  cover: Cover;
}

const PageCover: React.FC<Props> = ({ cover }: Props): JSX.Element => {
  return (
    <CoverContainer>
      <Cover>
        <CoverBg />
        <CoverBgOverlay />
        <HeadingWrapper>
          <PrimaryHeading alignment="left">{cover.heading}</PrimaryHeading>
        </HeadingWrapper>
        <ImageComponent image={cover.image} />
        <SubHeadingBox>
          <SubHeading light>{cover.description}</SubHeading>
        </SubHeadingBox>
      </Cover>
    </CoverContainer>
  );
};

export default PageCover;
