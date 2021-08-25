import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import SubHeading from "@components/headings/sub-heading";
import ImageComponent from "@components/image-component";
import {
  CoverContainer,
  CoverContainerBg,
  CoverContainerBgOverlay,
  Cover,
  CoverCTA,
  HeadingWrapper,
} from "./styles";

interface Props {
  cover: Cover;
}

const PageCover: React.FC<Props> = ({ cover }: Props): JSX.Element => {
  return (
    <CoverContainer>
      <CoverContainerBg>
        <ImageComponent image={cover.image} />
      </CoverContainerBg>
      <CoverContainerBgOverlay />
      <Cover>
        <CoverCTA>
          <HeadingWrapper>
            <PrimaryHeading alignment="left">{cover.heading}</PrimaryHeading>
            <SubHeading alignment="left">{cover.description}</SubHeading>
          </HeadingWrapper>
          {cover.route && (
            <PrimaryButton type="route" route={cover.route.url}>
              {cover.route.name}
            </PrimaryButton>
          )}
        </CoverCTA>

        <ImageComponent image={cover.image} />
      </Cover>
    </CoverContainer>
  );
};

export default PageCover;
