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
          A professional Finance Firm that gives you all the finest services
          related to, Bookkeeping, Secretary services, Company Incorporations,
          Tax Advisory, and other Finance related Services. A bunch of skillful
          professionals is leading “Experts for you” to meet and fulfill the
          clients’ requirements at the best.
        </SubHeading>
      </Description>
      <BoxGroup>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#vision" />
          </svg>
          <SecondaryHeading>Vision</SecondaryHeading>
          <Paragraph alignment="left">
            From the start-up, the vision of HNS Partners has been helping our
            business partners and clients achieve business and financial goals
            throughout the years.
          </Paragraph>
        </BoxItem>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#mission" />
          </svg>
          <SecondaryHeading>Mission</SecondaryHeading>
          <Paragraph alignment="left">
            To provide resourceful and cost-effective accounting and financial
            solutions while building trust, honesty, and confidence with
            stakeholders, clients, staff, and authorities.
          </Paragraph>
        </BoxItem>
        <BoxItem>
          <svg>
            <use xlinkHref="/assets/svg/sprites.svg#goal" />
          </svg>
          <SecondaryHeading>Goal</SecondaryHeading>
          <Paragraph alignment="left">
            Goal To invest in “service quality” to fulfill the exact
            expectations of each client and place us on top of the best being
            the finest service provider in the visible market.
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
