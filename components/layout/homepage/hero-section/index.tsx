import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import {
  Container,
  ImageContainer,
  TextContainer,
  StatGroup,
  StatItem,
  StatNumber,
  StatLabel,
  ContainerBG,
  ContainerOverlay,
} from "./styles";

interface Props {
  heroData: HeroData;
}

const HeroSection: React.FC<Props> = ({ heroData }: Props): JSX.Element => {
  return (
    <Container>
      <ContainerBG />
      <ContainerOverlay />
      <TextContainer>
        <PrimaryHeading alignment="left">{heroData.title}</PrimaryHeading>
        <Paragraph alignment="left">{heroData.subText}</Paragraph>
        <PrimaryButton type="route" route={heroData.route}>
          Learn More
        </PrimaryButton>
        <StatGroup>
          {heroData.stats.map((stat, index) => (
            <StatItem key={`stat-${index}`}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatGroup>
      </TextContainer>
      <ImageContainer>
        <ImageComponent
          image={heroData.image}
          objectFit="contain"
          pos={{ x: "center", y: "bottom" }}
        />
      </ImageContainer>
    </Container>
  );
};

export default HeroSection;
