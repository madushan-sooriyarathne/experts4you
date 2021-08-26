import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import { AboutContainer, HeadingGroup, ParagraphGroup } from "./styles";

interface Props {
  primaryHeading: string;
  subHeading: string;
  description: string[];
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
      <ParagraphGroup>
        {description.map((para: string, index: number) => (
          <Paragraph key={`service-about-para-${index}`}>{para}</Paragraph>
        ))}
      </ParagraphGroup>
    </AboutContainer>
  );
};

export default AboutSection;
