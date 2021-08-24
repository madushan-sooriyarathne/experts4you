import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import GridLayout from "@components/layout/common/grid-layout";
import Paragraph from "@components/paragraph";
import { BoxGroup, BoxItem, Description, WhoWeAreContainer } from "./styles";

const WhoWeAre: React.FC = (): JSX.Element => {
  return (
    <WhoWeAreContainer id="who-we-are">
      <PrimaryHeading>Who We Are</PrimaryHeading>
      <Description>
        <SubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </SubHeading>
      </Description>
      <BoxGroup>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#vision" />
          </svg>
          <SecondaryHeading>Vision</SecondaryHeading>
          <Paragraph alignment="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </BoxItem>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#mission" />
          </svg>
          <SecondaryHeading>Mission</SecondaryHeading>
          <Paragraph alignment="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </BoxItem>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#goal" />
          </svg>
          <SecondaryHeading>Goal</SecondaryHeading>
          <Paragraph alignment="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </BoxItem>
      </BoxGroup>
      <PrimaryButton type="route" route="/about">
        About us
      </PrimaryButton>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
