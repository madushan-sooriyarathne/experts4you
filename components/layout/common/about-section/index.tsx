import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import { AboutContainer, HeadingGroup } from "./styles";

interface Props {
  primaryHeading: string;
  subHeading: string;
  description: string;
}

const AboutSection: React.FC<Props> = ({
  primaryHeading,
  subHeading,
  description,
}: Props): JSX.Element => {
  return (
    <AboutContainer>
      <HeadingGroup>
        <SecondaryHeading alignment="right">{subHeading}</SecondaryHeading>
        <PrimaryHeading alignment="right">{primaryHeading}</PrimaryHeading>
      </HeadingGroup>
      <Paragraph alignment="left">{description}</Paragraph>
    </AboutContainer>
  );
};

export default AboutSection;
