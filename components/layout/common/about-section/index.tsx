import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import Paragraph from "@components/paragraph";
import { AboutContainer, HeadingGroup, ParagraphGroup } from "./styles";

interface Props {
  service: Service;
}

const AboutSection: React.FC<Props> = ({ service }: Props): JSX.Element => {
  return (
    <AboutContainer>
      <HeadingGroup>
        <SecondaryHeading alignment="right">About</SecondaryHeading>
        <PrimaryHeading alignment="right">{service.name}</PrimaryHeading>
      </HeadingGroup>
      <ParagraphGroup>
        {service.about.map((para: string, index: number) => (
          <Paragraph key={`service-about-para-${index}`}>{para}</Paragraph>
        ))}
      </ParagraphGroup>
    </AboutContainer>
  );
};

export default AboutSection;
